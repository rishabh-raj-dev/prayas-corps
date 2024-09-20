import ArrowRight from '@/assets/arrow-right.svg'
import Logo from '@/assets/prayasCorps.png'
import MenuIcon from '@/assets/menu.svg'

import {Fragment} from "react";
import Image from "next/image";

export const Header = () => {
  return (
      <header className={"top-0 backdrop-blur-sm z-20"}>
        
          <div className='py-2'>
              <div className='container'>
                  <div className='flex justify-between items-center'>
                      <Image src={Logo} alt={'SaaS Logo'} height={150} width={270}/>
                      <MenuIcon className="h-5 w-5 md:hidden" icon={'menu'}/>
                      <nav className='hidden md:flex gap-6 text-black/60 items-center'>
                          <a href={"#"}>About</a>
                          <a href={"#"}>Features</a>
                          <a href={"#"}>Customers</a>
                          <a href={"#"}>Updates</a>
                          <a href={"#"}>Help</a>
                          <button className='bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-middle justify-center tracking-tight'>Get for Free</button>
                      </nav>
                  </div>
              </div>
          </div>
      </header>
  );
};
