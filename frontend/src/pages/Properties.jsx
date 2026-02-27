import properties from "../data/properties";
import PropertyCard from "../components/PropertyCard";

const Properties = () => {
  return (
    <div className="bg-black text-white min-h-screen px-8 py-16">
      <h1 className="text-4xl font-bold text-yellow-400 mb-10 text-center">
        All Properties
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Properties;  