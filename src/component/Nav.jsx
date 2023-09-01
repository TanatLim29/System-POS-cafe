import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full '>
      <nav className=' flex justify-between items-center max-container'>
        <a href='/'>
          <img
            src={headerLogo}
            alt='logo'
            className='m-0 w-[140px] h-[50px]'
          />
        </a>
        <div className="font-montserrat italic leading-normal text-xl ">
            Cafe Name
        </div>
      
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='pr-8 flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a href='/signin'>Sign in</a>
        </div>
        <div className="hidden max-lg:block">
          <img
            src={hamburger}
            alt="Hamburger"
            className='m-0 w-[129px] h-[29px]'
          />
        </div>

      </nav>
    </header>
  );
};

export default Nav;