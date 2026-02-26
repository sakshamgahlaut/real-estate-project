import HeroCarousel from "../components/HeroCarousel";
import PropertyCard from "../components/PropertyCard";
import SearchBar from "../components/SearchBar";
import properties from "../data/properties";

const Home = () => {
  return (
    <div className="bg-black text-white">

      <HeroCarousel />

      {/* Search Section */}
      <SearchBar />

      {/* Featured Section */}
      <section className="py-16 px-8">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-10">
          Featured Properties
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
<section className="py-20 px-8 bg-gray-900">
  <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
    Why Choose DreamHomes?
  </h2>

  <div className="grid md:grid-cols-3 gap-10 text-center">

    <div className="p-6 bg-black rounded-lg shadow-lg hover:scale-105 transition">
      <h3 className="text-xl font-bold mb-4">Trusted Agents</h3>
      <p className="text-gray-400">
        Professional and experienced real estate agents to guide you.
      </p>
    </div>

    <div className="p-6 bg-black rounded-lg shadow-lg hover:scale-105 transition">
      <h3 className="text-xl font-bold mb-4">Premium Properties</h3>
      <p className="text-gray-400">
        Handpicked luxury homes in prime locations.
      </p>
    </div>

    <div className="p-6 bg-black rounded-lg shadow-lg hover:scale-105 transition">
      <h3 className="text-xl font-bold mb-4">24/7 Support</h3>
      <p className="text-gray-400">
        Dedicated customer support for smooth transactions.
      </p>
    </div>

  </div>
</section>

{/* Call To Action */}
<section className="py-20 bg-yellow-400 text-black text-center">
  <h2 className="text-4xl font-bold mb-6">
    Looking to Buy or Sell a Property?
  </h2>

  <p className="mb-8 text-lg">
    Contact our experts today and get the best deal.
  </p>

  <button className="bg-black text-yellow-400 px-8 py-3 rounded font-semibold hover:bg-gray-800 transition">
    Contact Us
  </button>
</section>

    </div>
  );
};

export default Home;