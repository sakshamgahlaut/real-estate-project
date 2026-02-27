import { useParams } from "react-router-dom";
import properties from "../data/properties";

const PropertyDetails = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === parseInt(id));

  if (!property) {
    return <h1 className="text-white text-center mt-20">Property Not Found</h1>;
  }

  return (
    <div className="bg-black text-white min-h-screen p-10">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-[60vh] object-cover rounded-lg"
      />

      <h1 className="text-4xl font-bold mt-8 text-yellow-400">
        {property.title}
      </h1>

      <p className="mt-4 text-lg">Location: {property.location}</p>
      <p className="mt-2">Type: {property.type}</p>
      <p className="mt-2">Bedrooms: {property.bedrooms}</p>
      <p className="mt-2">Price: ₹{property.price.toLocaleString()}</p>

      <p className="mt-6 text-gray-300">{property.description}</p>
    </div>
  );
};

export default PropertyDetails;