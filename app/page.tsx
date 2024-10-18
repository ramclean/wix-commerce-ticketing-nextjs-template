import { getWixClient } from '@app/hooks//useWixClientServer';
import { wixEventsV2 as wixEvents } from '@wix/events';
import { products } from '@wix/stores';
import { HomeScreen } from '@app/components/HomeScreen/HomeScreen';

export default async function Home() {
  const wixClient = await getWixClient();
  let productsForCategories: { category: string; product: products.Product }[] =
    [];
  try {
    const { items: collectionsItems } = await wixClient.collections
      .queryCollections()
      .ne('_id', '00000000-000000-000000-000000000001')
      .limit(3)
      .find();
    productsForCategories = await Promise.all(
      collectionsItems.map((collection) =>
        wixClient.products
          .queryProducts()
          .eq('collectionIds', collection._id)
          .limit(1)
          .find()
          .then((products) => ({
            product: products.items[0],
            category: collection.name!,
          }))
      )
    );
  } catch (e) {}

  let events: wixEvents.V3Event[] = [];
  let futureEvents: wixEvents.V3Event[] = [];

  try {
    events = (
      await wixClient.wixEvents
        .queryEvents({
          fields: [
            wixEvents.RequestedFields.DETAILS,
            wixEvents.RequestedFields.TEXTS,
            wixEvents.RequestedFields.REGISTRATION,
            wixEvents.RequestedFields.AGENDA,
          ],
        })
        .limit(100)
        .ascending('dateAndTimeSettings.startDate')
        .find()
    ).items;

    // Filter future events manually
    futureEvents = events.filter((event) => {
      if (event.dateAndTimeSettings?.startDate !== undefined) {
        const eventDate = new Date(event.dateAndTimeSettings.startDate);
        return eventDate >= new Date(); // Keep only events in the future
      }
    });
  } catch (e) {}
  return (
    <HomeScreen
      events={futureEvents}
      productsForCategories={productsForCategories}
    />
  );
}
