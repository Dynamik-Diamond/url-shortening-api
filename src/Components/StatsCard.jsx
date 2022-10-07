import {
  iconBrandRecognition,
  iconDetailedRecords,
  iconFullyCustomizable,
} from '../assets/images/Index';

const StatsCard = () => {
  return (
    <article className="grid place-content-center">
      <div className=" grid grid-cols-1 gap-4 sm:grid-cols-3">
        {/* first card */}
        <article className=" relative  max-w-xs space-y-6 rounded-lg bg-white p-6 text-center">
          <div className="absolute translate-x-24 -translate-y-14 rounded-full bg-DarkViolet p-4">
            <img
              src={iconBrandRecognition}
              alt="Brand Recognition"
            />
          </div>
          <h3 className="pt-6 text-xl font-bold">
            Brand Recognition
          </h3>
          <p className="max-w-xs text-center text-GrayishViolet">
            Boost your brand recognition with each click.
            Generic links don’t mean a thing. Branded links
            help instil confidence in your content.
          </p>
        </article>
        {/* End of first card */}

        {/* second card */}
        <article className=" relative  max-w-xs space-y-6 rounded-lg bg-white p-6 text-center">
          <div className="absolute translate-x-24 -translate-y-14 rounded-full bg-DarkViolet p-4">
            <img
              src={iconDetailedRecords}
              alt="Brand Recognition"
            />
          </div>
          <h3 className="pt-6 text-xl font-bold">
            Detailed Records
          </h3>
          <p className="max-w-xs text-center text-GrayishViolet">
            Gain insights into who is clicking your links.
            Knowing when and where people engage with your
            content helps inform better decisions.
          </p>
        </article>
        {/* End of first card */}
        {/* third card */}
        <article className=" relative max-w-xs space-y-6 rounded-lg bg-white p-6 text-center">
          <div className="absolute translate-x-24 -translate-y-14 rounded-full bg-DarkViolet p-4">
            <img
              src={iconFullyCustomizable}
              alt="Brand Recognition"
            />
          </div>
          <h3 className="pt-6 text-xl font-bold">
            Fully Customizable
          </h3>
          <p className="max-w-xs text-center text-GrayishViolet">
            Improve brand awareness and content
            discoverability through customizable links,
            supercharging audience engagement.
          </p>
        </article>
        {/* End of third card */}
      </div>
    </article>
  );
};

export default StatsCard;
