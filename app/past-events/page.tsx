import { getWixClient } from '@app/hooks/useWixClientServer';
import { wixEventsV2 as wixEvents } from '@wix/events';
import { media as wixMedia } from '@wix/sdk';
import EventGrid from '@app/components/EventGrid/EventGrid';

export default async function EventPage() {
  const wixClient = await getWixClient();
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

  const eventImages = events.map(
    (event) => wixMedia.getImageUrl(event?.mainImage || '').url
  );

  console.log(eventImages);

  return <EventGrid eventImages={eventImages} />;
}
