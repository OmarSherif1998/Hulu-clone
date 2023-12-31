'use client';
import { useRouter } from 'next/router';
import requests from '../utils/requests';
function Nav(movie) {
  const router = useRouter();

  return (
    <nav className=" relative ">
      <div
        className="flex px-10 sm:px-20 text-2xl whitespace-nowrap
      space-x-10 sm:space-x-20 overflow-x-scroll scr scrollbar-hide "
      >
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            onClick={() => router.push(`/?genre=${key}`)}
            key={key}
            className="last:pr-24 cursor-pointer transition duration-100
            transform hover:scale-125 hover:text-white
             active:text-red-500 "
          >
            {title}
            {movie.results}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 bottom-0 bg-gradient-to-l from-[#06202A] h-10 w-1" />
    </nav>
  );
}
export default Nav;
