import './footer.css';
import ScrollIntoView from '@app/components/ScrollIntoView/ScrollIntoView';
import testIds from '@app/utils/test-ids';
import Link from 'next/link';

const Footer = () => (
  <footer
    className="w-full m-h-56 bg-turquoise-100 leading-7"
    data-testid={testIds.LAYOUT.FOOTER}
  >
    <ScrollIntoView hashName="#contact" />
    <div className="bg-black text-white text-center py-6">
      <h2 className="text-2xl sm:text-4xl font-bold">LUGHOLE NEWSLETTER</h2>
      <div className="flex gap-4 mt-4 items-center justify-center">
        <Link href="https://lughole.substack.com">
          <button className="btn-main">Subscribe</button>
        </Link>
        <Link href="/contact">
          <button className="btn-main">Submit an item</button>
        </Link>
      </div>
    </div>
    <div className="mx-auto flex flex-col-reverse items-center sm:flex-row gap-1 sm:gap-16 pt-3 sm:pt-11 pb-4 px-6 sm:px-14 text-12 sm:text-xs">
      <div className="mb-10 flex-1">
        <p className="font-default ">© 2024 Lughole</p>
        <p className=" m-0">Web Design & Dev - Envelope Studio</p>
      </div>
      <a href="/terms">ACCESSIBILITY</a>
      <a href="/club-rules">CLUB RULES</a>
    </div>
  </footer>
);

export default Footer;
