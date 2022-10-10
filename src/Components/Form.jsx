import { bgShortenDesktop } from '../assets/images/Index';

const form = ({ newUrl, setNewUrl, handleSubmit }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className=" mx-auto max-w-4xl bg-DarkViolet px-6 py-8"
    >
      <div className="flex  flex-col items-center justify-center gap-3 sm:flex-row">
        <input
          type="text"
          placeholder="Shorten a link here..."
          value={newUrl}
          onChange={e => setNewUrl(e.target.value)}
          className="w-full rounded-md py-2 pl-4 sm:w-4/5 "
        />
        <button
          className="items mt-4 flex w-full flex-1 rounded-md bg-Cyan py-2 px-4 text-xl text-white hover:bg-opacity-70 sm:mx-0 sm:mt-0"
          onClick={handleSubmit}
        >
          <a href="#" className=" mx-auto">
            Shorten It!
          </a>
        </button>
      </div>
    </form>
  );
};

export default form;
