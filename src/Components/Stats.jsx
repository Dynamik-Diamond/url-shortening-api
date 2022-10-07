import { useState } from 'react';
import Form from './Form';
import StatsCard from './StatsCard';

const Stats = () => {
  const [urls, setUrls] = useState([
    {
      id: 1,
      href: 'https://tuf.avatarnewyork.site/',
    },
    {
      id: 2,
      href: 'https://tuf.avatarnewyork.site/',
    },
    {
      id: 3,
      href: 'https://tuf.avatarnewyork.site/',
    },
  ]);

  return (
    <section className="  bg-Gray p-6">
      <div className="mx-auto my-12 max-w-6xl">
        <Form />
        <article className="mx-auto max-w-4xl py-8">
          <ul>
            {urls.map((link, index) => {
              console.log(link);
              return (
                <li
                  key={link.id}
                  className={`pl-4" flex flex-col justify-between rounded-md bg-white px-6 py-4 sm:flex-row sm:items-center sm:py-2 ${
                    index === urls.length - 1
                      ? 'mb-0'
                      : 'mb-4'
                  }`}
                >
                  <a href={link.href} target="blank">
                    {link.href}
                  </a>
                  <hr className=" mt-2 sm:hidden" />
                  <div className="mt-2 flex flex-col gap-2 sm:mt-0 sm:flex-row sm:items-center">
                    <a
                      href={link.href}
                      target="blank"
                      className="text-Cyan"
                    >
                      {link.href}
                    </a>
                    <button className="items mt-4 flex w-full flex-1 rounded-md bg-Cyan py-2 px-6 text-xl text-white hover:bg-opacity-70 sm:mx-0 sm:mt-0">
                      <a href="#" className=" mx-auto">
                        Copy
                      </a>
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </article>
        {/* header and info */}
        <article className="mx-auto my-12 text-center">
          <h2 className="mt-8 text-3xl font-bold text-VeryDarkViolet sm:text-4xl">
            {' '}
            Advanced Statistics
          </h2>
          <p className="mx-auto mt-6 max-w-sm">
            {' '}
            Track how your links are performing across the
            web with our advanced statistics dashboard.
          </p>
        </article>
        {/* End of header and info */}
        {/* stats box */}
        <StatsCard />
      </div>
    </section>
  );
};

export default Stats;
