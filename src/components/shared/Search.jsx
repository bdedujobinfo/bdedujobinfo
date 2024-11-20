/* eslint-disable react/prop-types */


export const Search = ({ search, searchHandler, children }) => {
  return (
    <>
      <div className="bg-[#076298] p-2 w-80 text-center rounded-lg">
        <label className="text-xl text-white"> Search </label>
        <input
          className="px-5 py-3 rounded-lg focus:outline-none"
          type="search"
          name="search"
          placeholder={children}
          value={search}
          onChange={searchHandler}
        />
      </div>
    </>
  );
};
