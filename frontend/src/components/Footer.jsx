const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-10 px-8">
      <div className="grid md:grid-cols-3 gap-8">

        <div>
          <h3 className="text-white text-xl font-bold mb-4">DreamHomes</h3>
          <p>
            Providing luxury properties and trusted real estate services.
          </p>
        </div>

        <div>
          <h3 className="text-white text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>Home</li>
            <li>About</li>
            <li>Properties</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-xl font-bold mb-4">Contact</h3>
          <p>Email: info@dreamhomes.com</p>
          <p>Phone: +91 9876543210</p>
        </div>

      </div>

      <div className="text-center mt-10 border-t border-gray-700 pt-6">
        © 2026 DreamHomes. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;