import Image from 'next/image';
import { wixEventsV2 as wixEvents } from '@wix/events';
import { products } from '@wix/stores';
import { Events } from '@app/components/Events/Events';
import testIds from '@app/utils/test-ids';
import { WixMediaImage } from '@app/components/Image/WixMediaImage';
import Carousel from '@app/components/Carousel/Carousel';

export function HomeScreen({
  events,
  productsForCategories,
}: {
  events: wixEvents.V3Event[];
  productsForCategories: { category: string; product: products.Product }[];
}) {
  let membership = productsForCategories.filter(
    (p) => p.category === 'Membership'
  )[0].product;
  console.log(membership);

  return (
    <div className="mx-auto relative">
      <div className="relative">
        <div className="flex lg:flex-row flex-col bg-zinc-900">
          <div className="text-center sm:text-left relative">
            <div
              className="px-10 sm:px-14 py-6 bg-site"
              data-testid={testIds.HOME_PAGE.HEADER}
            >
              <h1 className="text-3xl sm:text-[100px] leading-none animate-fade-in">
                DIY OR DIE
                <br />{' '}
                <span className="text-red-500">
                  SINCE <br /> 2013
                </span>
              </h1>
              <h2 className="text-base sm:text-2xl py-6">
                By the punks, for the punks.
                <br />
                Sheffield, UK.
              </h2>

              <div className="flex gap-4 justify-center sm:justify-start">
                <button className="btn-main">What's On?</button>

                <button className="btn-main">Volunteer</button>
              </div>
            </div>
            <div className="bg-zinc-900 h-[75px] w-full"></div>
          </div>
          <div className="basis-1/3 flex-1 bg-red-500">
            <Carousel
              images={[
                '/images/alPhotos/lughole1.jpg',
                '/images/alPhotos/lughole2.jpg',
                '/images/alPhotos/lughole3.jpg',
                '/images/alPhotos/lughole4.jpg',
                '/images/alPhotos/lughole6.jpg',
              ]}
            />
          </div>
        </div>
      </div>
      {events?.length ? (
        <div className="bg-zinc-900 text-site pt-16 sm:p-20">
          <Events events={events} />
        </div>
      ) : (
        <div className="text-3xl w-full text-center p-9 box-border max-w-4xl mx-auto">
          No events are currently planned, please check back later!
        </div>
      )}
      {productsForCategories.length ? (
        <>
          <div className="flex gap-2 sm:gap-14 px-14 flex-col sm:flex-row">
            <div className="text-custom-1 text-center sm:text-left pt-10 sm:py-20 basis-1/2">
              <h1 className="uppercase text-4xl sm:text-7xl text-center sm:text-left text-black">
                Membership
              </h1>
              <p className="text-lg my-5 text-black">
                The Lughole is a private members club, this means that in order
                to attend events and purchase alcohol at the bar you need to
                either be a member or a guest of a member. Being a member allows
                you to sign in three guests on the night. The membership is
                annual and will start at sign up point. All memberships take 48
                hours to come into force.
              </p>
              <div className="flex items-center justify-center opacity-80 gap-2">
                <Image
                  src={'/images/alPhotos/membershipCard.jpg'}
                  width={600}
                  height={600}
                  alt={membership.media!.mainMedia!.image!.altText!}
                  className="rounded-lg w-[150px]"
                />

                <Image
                  src={'/images/alPhotos/membershipCard.jpg'}
                  width={600}
                  height={600}
                  alt={membership.media!.mainMedia!.image!.altText!}
                  className="rounded-lg w-[150px]"
                />

                <Image
                  src={'/images/alPhotos/membershipCard.jpg'}
                  width={600}
                  height={600}
                  alt={membership.media!.mainMedia!.image!.altText!}
                  className="rounded-lg w-[150px]"
                />

                <Image
                  src={'/images/alPhotos/membershipCard.jpg'}
                  width={600}
                  height={600}
                  alt={membership.media!.mainMedia!.image!.altText!}
                  className="rounded-lg w-[150px]"
                />

                {/* <a
                  href="/shop"
                  className="btn-main rounded-2xl text-base px-8 py-2.5"
                >
                  Join Us
                </a> */}
              </div>
            </div>

            <div className="mt-10 basis-1/2">
              <Image
                src={'/images/alPhotos/members.jpg'}
                width={600}
                height={600}
                alt={membership.media!.mainMedia!.image!.altText!}
                className="opacity-90"
              />
            </div>
          </div>

          <div className="flex bg-red-500 text-custom-1 text-center sm:text-left p-10 sm:py-20 mt-10">
            <div className="basis-1/2">
              <a
                href="/shop"
                className="h-auto w-full max-w-full inline-block opacity-80"
              >
                <Image
                  src={'/images/alPhotos/oldbar.jpg'}
                  width={500}
                  height={500}
                  alt={membership.media!.mainMedia!.image!.altText!}
                />
              </a>
            </div>
            <div className="basis-1/2">
              <h1 className="uppercase text-4xl sm:text-7xl text-center sm:text-left text-black">
                VOLUNTEERING
              </h1>
              <div>
                <p className="text-lg my-10 text-white">
                  The Lughole is a fully volunteer-led organisation. Everyone
                  from the directors to the door staff are all Lughole club
                  members and volunteers. We welcome and are in dire need of
                  more volunteers to help facilitate events.
                  <p className="mt-4">
                    Never pulled a pint before? Not to worry, we offer basic
                    training and shadowing on all the volunteering roles
                  </p>
                </p>
                click to contact form / copy email adress
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="text-3xl w-full text-center p-9 box-border max-w-4xl mx-auto">
          No categories found. Click{' '}
          <a
            href="https://manage.wix.com/account/site-selector?actionUrl=+https%3A%2F%2Fmanage.wix.com%2Fdashboard%2F%7BmetaSiteId%7D%2Fstore%2Fcategories%2Flist%3FreferralInfo%3DHeadless"
            target="_blank"
            rel="noreferrer"
            className="text-purple-500"
          >
            here
          </a>{' '}
          to go to the business dashboard to create event categories. Once
          added, they will appear here.
        </div>
      )}
    </div>
  );
}
