import { bgShortenDesktop } from '../assets/images/Index';

const form = ({
  url,
  setUrl,
  handleSubmit,
  errorMessage,
  errorStatus,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className=" mx-auto max-w-4xl bg-DarkViolet px-6 py-8"
    >
      <div className="flex  flex-col items-center justify-center gap-3 sm:flex-row">
        <input
          type="text"
          placeholder="Shorten a link here..."
          value={url}
          onChange={e => setUrl(e.target.value)}
          className={`w-full rounded-md border-4 py-2 pl-4 transition-all duration-300 focus:border-Cyan focus:outline-none sm:w-4/5 ${
            !url && errorStatus
              ? 'border-Red'
              : 'border-transparent'
          } ${
            !url ? 'focus:border-Red' : 'focus:border-Cyan'
          } `}
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
      {!url && errorStatus && (
        <span className=" mt-2 block text-Red">
          {errorMessage}
        </span>
      )}
    </form>
  );
};

export default form;
