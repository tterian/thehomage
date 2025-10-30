import { Lobster_Two } from 'next/font/google';
 
const lobsterTwo = Lobster_Two({
  weight: '400',
  subsets: ['latin'],
})

import CartModal from 'components/cart/modal';
import LogoSquare from 'components/logo-square';
import Link from 'next/link';

export async function Navbar({currency}: {currency: string}) {

  return (
    <nav className="relative flex items-center justify-between p-4 lg:px-6">
      <div className="flex w-full items-center">
        <div className="flex w-full md:w-1/3">
          <Link
            href="/"
            prefetch={true}
            className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
          >
            <LogoSquare />
            <div className={`${lobsterTwo.className} ml-2 text-xl flex-none font-medium md:hidden lg:block`}>
              The Homage
            </div>
          </Link>
          <ul className="hidden gap-6 text-sm md:flex md:items-center">
            <li>
              <Link
                href={`/collections/all`}
                prefetch={true}
                className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
              >
                All products
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden justify-center md:flex md:w-1/3">
        </div>
        <div className="flex justify-end md:w-1/3 gap-4">
          <CartModal />
        </div>
      </div>
    </nav>
  );
}
