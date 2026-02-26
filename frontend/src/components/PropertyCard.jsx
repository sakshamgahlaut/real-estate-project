const PropertyCard = ({ property }) => {
  return (
    <div className="bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg hover:scale-105 transition duration-300">
      <img
        src={property.image}
        alt={property.title}
        className="h-60 w-full object-cover"
      />

      <div className="p-5">
        <h2 className="text-xl font-bold text-yellow-400">
          {property.title}
        </h2>
        <p className="mt-2">{property.location}</p>
        <p className="mt-2 font-semibold">{property.price}</p>

        <button className="mt-4 bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 transition">
          View Details
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;