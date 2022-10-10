import { useEffect, useState } from 'react';
import Form from './Form';
import StatsCard from './StatsCard';

const getLocalStorage = () => {
  let urls = localStorage.getItem('urls');
  if (urls) {
    return JSON.parse(localStorage.getItem('urls'));
  } else {
    return [];
  }
};

const Stats = () => {
  const [urls, setUrls] = useState(getLocalStorage());

  const [newUrl, setNewUrl] = useState('');

  const addUrl = url => {
    const id = urls.length
      ? urls[urls.length - 1].id + 1
      : 1;

    const myNewUrl = { id, url };
    const listUrls = [...urls, myNewUrl];
    setUrls(listUrls);
    localStorage.setItem('urls', JSON.stringify(listUrls));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!newUrl) return;
    addUrl(newUrl);
    setNewUrl('');
  };

  return (
    <section className="  bg-Gray p-6">
      <div className="mx-auto my-12 max-w-6xl">
        <Form
          newUrl={newUrl}
          setNewUrl={setNewUrl}
          handleSubmit={handleSubmit}
        />
        <article className="mx-auto max-w-4xl py-8">
          <ul>
            {urls.map((link, index) => {
              return (
                <li
                  key={link.id}
                  className={`pl-4" flex flex-col justify-between rounded-md bg-white px-6 py-4 sm:flex-row sm:items-center sm:py-2 ${
                    index === urls.length - 1
                      ? 'mb-0'
                      : 'mb-4'
                  }`}
                >
                  <a href={link.url} target="blank">
                    {link.url}
                  </a>
                  <hr className=" mt-2 sm:hidden" />
                  <div className="mt-2 flex flex-col gap-2 sm:mt-0 sm:flex-row sm:items-center">
                    <a
                      href={link.url}
                      target="blank"
                      className="text-Cyan"
                    >
                      {link.url}
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
