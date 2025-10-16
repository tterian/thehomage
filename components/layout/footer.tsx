import { Lobster_Two } from 'next/font/google';
 
const lobsterTwo = Lobster_Two({
  weight: '400',
  subsets: ['latin'],
})

import Link from 'next/link';

import LogoSquare from 'components/logo-square';

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');

  return (
    <footer className="text-sm text-neutral-500 dark:text-neutral-400">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-neutral-200 px-6 py-12 text-sm md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0 dark:border-neutral-700">
        <div>
          <Link className="flex items-center gap-2 text-black md:pt-1 dark:text-white" href="/">
            <LogoSquare size="sm" />
            <div className="flex flex-col">
              <span className={`${lobsterTwo.className} text-xl`}>The Homage</span>
              <span className="text-xs">For those who come with us</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="border-t border-neutral-200 py-6 text-sm dark:border-neutral-700">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
          <p>
            &copy; {copyrightDate} The Homage, All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
