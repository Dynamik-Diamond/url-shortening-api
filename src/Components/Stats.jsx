import Form from './Form';
import StatsCard from './StatsCard';

const Stats = () => {
  return (
    <section className="  bg-Gray p-6">
      <div className="mx-auto my-12 max-w-6xl">
        <Form />
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
