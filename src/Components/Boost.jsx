import React from 'react';

const Boost = () => {
  return (
    <section className="bg-DarkViolet p-6 ">
      {/* header and info */}
      <article className="mx-auto my-12 text-center">
        <h2 className="mt-8 text-3xl font-bold text-white sm:text-4xl">
          {' '}
          Boost your links today
        </h2>
        <button className=" mx-auto mt-4 rounded-full bg-Cyan py-2 px-4 text-xl text-white hover:bg-opacity-70 ">
          <a href="#">Get Started</a>
        </button>
      </article>
    </section>
  );
};

export default Boost;
