import {
    HomeIcon,
    BoltIcon,
    CheckBadgeIcon,
    MagnifyingGlassCircleIcon,
    UserIcon,
    RectangleStackIcon,
  } from '@heroicons/react/24/outline';
  import Image from 'next/image';
  import HeaderItems from './HeaderItems';
  
  function Header() {
    return (
      <header
        className="flex flex-col 
      sm:flex-row m-5 justify-between items-center"
      >
        <div className="flex flex-grow justify-evenly max-w-2xl h-auto ">
          <HeaderItems title={'Home'} Icon={HomeIcon} />
          <HeaderItems title={'Trending'} Icon={BoltIcon} />
          <HeaderItems title={'Verified'} Icon={CheckBadgeIcon} />
          <HeaderItems title={'Collections'} Icon={RectangleStackIcon} />
          <HeaderItems title={'Search'} Icon={MagnifyingGlassCircleIcon} />
          <HeaderItems title={'Account'} Icon={UserIcon} />
        </div>
  
        <Image
          className="object-contain"
          src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
          width={200}
          height={100}
          alt=""
        />
      </header>
    );
  }
  
  export default Header;
  