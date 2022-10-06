import Form from './Form';

const Stats = () => {
  return (
    <section className="my-12 bg-Gray p-6">
      <div className="mx-auto max-w-6xl">
        <Form />
        <article className="mx-auto my-12 text-center">
          <h2 className="text-2xl text-VeryDarkViolet">
            {' '}
            Advanced Statistics
          </h2>
          <p className="mx-auto max-w-md">
            {' '}
            Track how your links are performing across the
            web with our advanced statistics dashboard.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Stats;
