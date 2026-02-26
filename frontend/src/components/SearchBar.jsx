const SearchBar = () => {
  return (
    <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-5xl mx-auto -mt-16 relative z-20">
      <div className="grid md:grid-cols-4 gap-4">

        <input
          type="text"
          placeholder="Enter Location"
          className="p-3 rounded bg-black text-white border border-gray-700 focus:outline-none focus:border-yellow-400"
        />

        <select className="p-3 rounded bg-black text-white border border-gray-700 focus:outline-none focus:border-yellow-400">
          <option>Price Range</option>
          <option>₹50L - ₹1Cr</option>
          <option>₹1Cr - ₹2Cr</option>
          <option>₹2Cr+</option>
        </select>

        <select className="p-3 rounded bg-black text-white border border-gray-700 focus:outline-none focus:border-yellow-400">
          <option>Property Type</option>
          <option>Apartment</option>
          <option>Villa</option>
          <option>House</option>
        </select>

        <button className="bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-300 transition">
          Search
        </button>

      </div>
    </div>
  );
};

export default SearchBar;