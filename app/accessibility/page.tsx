import Link from 'next/link';
export default function AccessibilityPage() {
  return (
    <div className="mx-auto text-center">
      <div className="bg-black text-white py-12">
        <h1 className="text-5xl uppercase">Accessibility</h1>
      </div>
      <div className="flex flex-col gap-2 py-10 max-w-4xl mx-auto leading-7 text-left">
        <p>
          The Lughole is currently in the process of working together with
          Attitude is Everything to enable the venue to become more accessible.
        </p>
        <p>
          The Lughole is a level access venue, we have accessibility ramps
          leading up to the venue and a removable ramp to enable stage access
          for performers that are also wheelchair users.
        </p>

        <p>
          The Lughole has a disabled toilet that adheres to Approved Document M
          building regulations but unfortunately are not able to meet Changing
          Places guidance due to the lack of space and ability to install a
          hoist.
        </p>

        <p>
          The Lughole offers free tickets to carers, support workers, peer
          support and PAs actively supporting individuals to events. This can be
          obtained on the door in most cases. If there is a concern that an
          event will sell out please get in touch with us to ensure a ticket is
          reserved.
        </p>

        <p>
          If you have any enquires around accessibility or would like to reserve
          a support ticket please{' '}
          <Link href={'/contact'}>
            <span className="underline">contact us</span>.
          </Link>
        </p>
      </div>
    </div>
  );
}
