import Image from 'next/image';
export default function AboutPage() {
  return (
    <div className="mx-auto text-center">
      <div className="bg-black text-white py-12">
        <h1 className="text-5xl uppercase animate-fade-in">ABOUT</h1>
      </div>
      <div className="pb-10 sm:px-10 px-4 max-w-4xl mx-auto leading-7 text-left animate-fade-in">
        <Image
          src={'/images/alPhotos/lugs2.webp'}
          width={800}
          height={800}
          alt={'Lughole photo'}
          className="w-full opacity-80"
        />
        <h2 className="text-3xl py-5 text-center">DIY OR DIE</h2>
        <p className="py-5">
          The Lughole started in 2013 as a collective project between DIY and
          punk artists, bands and promoters in Sheffield. We aimed to address
          the issues around affordable venue, practice space and equipment
          availability in our scene that had a knock-on effect on ticket
          affordability, audience diversity and artist fees.
        </p>
        <p className="py-2">
          To address these issues we created The Lughole: a community/volunteer
          based 100 capacity performance space plus two practice spaces in an
          old industrial unit in Sheffield city centre. We established scaled
          entry fees that covered basic operating costs and ensured that artists
          received the majority of the door takings. The on-site practice rooms
          meant more flexibility and better costs for bands/artists. The house
          backline meant that artists/bands didn’t have to hire large vehicles
          to transport their equipment to the performance area. We have put on
          over 200 gigs as the Lughole showcasing over 120 different bands,
          growing audiences for promoters’ events and establishing a collective
          to support new promoters, artists, engineers, etc.
        </p>
        <p className="py-2">
          Capacity restrictions imposed on the Lughole in 2018 made running gigs
          unfeasible. In 2019 Lughole as a community benefits society and found
          a new home in the Kelham Island area. After extensive renovations and
          a multiple COVID delays, the venue opened in July 2022.
        </p>
        <p className="py-2">
          Lughole is working towards being a safer space, this means that we
          will not tolerate violent, aggressive, discriminatory, oppressive, and
          harassing behaviours from members, guests, and performers. Lughole is
          working towards being an inclusive space, enabling accessibility to
          art and music events for marginalised communities.
        </p>
        <p className="py-2">
          If you would like to get involved with volunteering at Lughole please
          contact us via the website or via email on lugholesheffield@gmail.com
        </p>
        ​ ​
      </div>
    </div>
  );
}
