import { CartBag } from '@app/components/CartBag/CartBag';
import { NavBar } from './NavBar/NavBar';
import { Login } from '@app/components/Login/Login';
import testIds from '@app/utils/test-ids';
import Link from 'next/link';

const Header = () => (
  <>
    <header
      className="h-header z-40 w-full"
      data-testid={testIds.LAYOUT.HEADER}
    >
      <div className="flex px-6 sm:px-14 h-header items-center gap-4 sm:gap-8">
        <div className="flex-1">
          <Link href={'/'}>
            <img
              src="https://static.wixstatic.com/media/4e0344_2341cc44b513445f94b2b51ced94737d~mv2.jpg/v1/fill/w_488,h_304,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Logo%20-%20White.jpg"
              alt=""
              className="header-img"
            />
          </Link>
        </div>
        <div>
          <CartBag />
        </div>
        <div>
          <NavBar />
        </div>
      </div>
    </header>
  </>
);

export default Header;
