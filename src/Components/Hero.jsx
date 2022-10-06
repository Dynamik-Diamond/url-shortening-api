import { illustrationWorking } from '../assets/images/Index';

const Hero = () => {
  return (
    <section className=" p-6">
      <div className="mx-auto mb-12 flex max-w-6xl flex-col-reverse items-center justify-center gap-8 sm:flex-row sm:gap-16">
        <article className="sm:w-1/2">
          <h1 className="max-w-4xl text-center text-5xl  font-bold sm:text-left sm:text-7xl ">
            More than just shorter links
          </h1>
          <p className="mt-4 max-w-sm text-center text-lg text-GrayishViolet sm:text-left ">
            {' '}
            Build your brand’s recognition and get detailed
            insights on how your links are performing.
          </p>
          <button className=" sm:mx-left mx-auto mt-4 flex rounded-full bg-Cyan py-2 px-4 text-xl text-white hover:bg-opacity-70 sm:mx-0 ">
            <a href="#">Get Started</a>
          </button>
        </article>
        <img
          src={illustrationWorking}
          alt="hero image"
          className="object-cover sm:w-1/2"
        />
      </div>
    </section>
  );
};

export default Hero;
