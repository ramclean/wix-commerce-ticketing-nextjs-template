'use client';
import Image from 'next/image';
import { wixEventsV2 as wixEvents } from '@wix/events';
import { products } from '@wix/stores';
import { Events } from '@app/components/Events/Events';
import testIds from '@app/utils/test-ids';
import Carousel from '@app/components/Carousel/Carousel';
import ContentWithImage from '../SideBySide/sideBySide';
import { Accordion, Flowbite } from 'flowbite-react';
import { HiArrowDown } from 'react-icons/hi';
import Link from 'next/link';

export function HomeScreen({
  events,
  productsForCategories,
}: {
  events: wixEvents.V3Event[];
  productsForCategories: { category: string; product: products.Product }[];
}) {
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

              <div className="flex gap-4 justify-center sm:justify-start lg:flex-row flex-col">
                <button className="btn-main">What's On?</button>

                <button className="btn-main">Volunteer</button>
              </div>
            </div>
            <div className="bg-zinc-900 h-[75px] w-full"></div>
          </div>
          <div className="basis-1/3 flex-1">
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
        <div className="bg-zinc-900 text-site pt-16 sm:p-20" id="events">
          <Events events={events} />
          <div className=" w-full text-center border border-t border-red-400 p-4">
            <p>Fancy a trip down memory lane?</p>
            <Link href={'/past-events'}>
              <button className="btn-main mt-2">See past events</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="text-3xl w-full text-center p-9 box-border max-w-4xl mx-auto">
          No events are currently planned, please check back later!
        </div>
      )}
      {productsForCategories.length ? (
        <>
          <ContentWithImage
            title="Membership"
            description="  The Lughole is a private members club, this means that in order
                to attend events and purchase alcohol at the bar you need to
                either be a member or a guest of a member. Being a member allows
                you to sign in three guests on the night. The membership is
                annual and will start at sign up point. All memberships take 48
                hours to come into force."
            buttonText="Become a Member"
            onButtonClick={'/product-page/membership'}
            mainImage={'/images/alPhotos/members.jpg'}
            mobileImage={'/images/alPhotos/members.jpg'}
            smallImages={[
              '/images/alPhotos/membershipCard.jpg',
              '/images/alPhotos/membershipCard.jpg',
              '/images/alPhotos/membershipCard.jpg',
              '/images/alPhotos/membershipCard.jpg',
            ]}
            reverse={false}
            backgroundColor="bg-site"
            altText="Membership details"
            btnClass="main"
          />

          <ContentWithImage
            title="Volunteering"
            description={`The Lughole is a fully volunteer-led organisation. Everyone
                    from the directors to the door staff are all Lughole club
                    members and volunteers. We welcome and are in dire need of
                    more volunteers to help facilitate events.
                    
                  Never pulled a pint before? Not to worry, we offer basic
                      training and shadowing on all the volunteering roles.`}
            buttonText="Get in touch"
            onButtonClick={'/contact'}
            mainImage={'/images/alPhotos/oldbar.jpg'}
            mobileImage={'/images/alPhotos/oldbar.jpg'}
            reverse={true}
            backgroundColor="bg-red-500"
            altText="Membership details"
            btnClass="rev"
          >
            <Flowbite
              theme={{
                theme: {
                  accordion: {
                    content: { base: 'bg-transparent p-5' },
                    title: {
                      heading: 'text-black',
                      arrow: {
                        base: 'text-black',
                      },
                    },
                  },
                },
              }}
            >
              <Accordion flush={true} arrowIcon={HiArrowDown} collapseAll>
                <Accordion.Panel>
                  <Accordion.Title>
                    <span className="text-sm">Volunteering info</span>
                  </Accordion.Title>
                  <Accordion.Content>
                    <div className="flex flex-col gap-2 text-black">
                      <strong className="text-md">Door</strong>
                      <p>
                        You will volunteer on your own or in pairs (depending on
                        how busy the event is likely to be) to scan members in,
                        issue member cards for those ordered online, check pre
                        order tickets and take payment for tickets on the door
                        using a card machine and cash. ​ Length of shift – 19:00
                        – 21:30 (unless it’s a matinee or early start gig)
                      </p>
                      <span className="font-bold mt-2">Bar</span>
                      <p>
                        You will volunteer as part of a team of 2-4 people.
                        General bar work such as pouring pints, making basic
                        drinks, restocking fridges, loading, and unloading the
                        glasswasher, changing barrels and taking both card and
                        cash payments. There will be two shifts for this role,
                        shift 1 will arrive prior to door and carry out the
                        opening of the bar, shift 2 will close the bar down
                        after time has been called.
                      </p>
                      <span className="font-bold mt-2">Cleaning</span>
                      <p>
                        You will volunteer alongside the event promoter. This
                        will likely take place the day after the event occurs.
                        General cleaning tasks, brushing, hoovering, mopping,
                        cleaning of toilets, litter picking and bar cleaning.
                        Length of shift – approx. 2 hours (times are flexible)
                      </p>
                      <span className="font-bold mt-4">Length of shifts</span>
                      Shift 1 – 19:00 – 22:00 (unless it’s a matinee or early
                      start gig) <br />
                      Shift 2 – 22:00 – 01:00 (unless it’s a matinee or early
                      start gig)
                    </div>
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
            </Flowbite>
          </ContentWithImage>
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
