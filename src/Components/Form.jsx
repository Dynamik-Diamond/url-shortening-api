import { bgShortenDesktop } from '../assets/images/Index';

const form = () => {
  const handleSubmit = e => e.preventDefault();

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-4xl  bg-black px-6 py-8"
    >
      <div className="flex  flex-col items-center justify-center gap-3 sm:flex-row">
        <input
          type="text"
          placeholder="shorten a link here ...."
          className="w-full rounded-lg py-2 pl-4 sm:w-4/5 "
        />
        <button className="items mt-4 flex w-full flex-1 rounded-lg bg-Cyan py-2 px-4 text-xl text-white hover:bg-opacity-70 sm:mx-0 sm:mt-0">
          <a href="#" className=" mx-auto">
            Shorten It!
          </a>
        </button>
      </div>
    </form>
  );
};

export default form;
