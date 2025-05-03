import Image from "next/image";

export default function Footer() {
  return (
    <footer className="site-footer bg-gray-900 text-white pt-8" id="footer">
      <div className="py-10 px-4 lg:px-20">
        <div className="flex flex-col lg:flex-row justify-between gap-10">

          {/* Logo & Social Links */}
          <div className="flex-1 space-y-4">
            <a href="#" className="inline-block">
              <Image src="/img/logo.png" alt="Logo" width={150} height={40} />
            </a>

            <div className="flex space-x-4 mt-4">
              {["facebook", "twitter", "instagram", "youtube"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  aria-label={platform}
                  className="text-white hover:text-yellow-400 text-2xl"
                >
                  <i className={`fab fa-${platform}`} />
                </a>
              ))}
            </div>

            <p className="text-sm mt-4">© 2024 Man Brar Construction Ltd. All rights reserved.</p>
          </div>

          {/* Contact Info */}
          <div className="flex-1 space-y-4">
            <h2 className="text-xl font-semibold">Contact</h2>
            <div className="flex items-center gap-2">
              <i className="fas fa-phone-alt text-yellow-500" />
              <a href="tel:07535643662" className="hover:underline">07535643662</a>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-envelope text-yellow-500" />
              <a href="mailto:info@manbrarconstruction.com" className="hover:underline">info@manbrarconstruction.com</a>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-envelope text-yellow-500" />
              <a href="mailto:mantaajbrar@gmail.com" className="hover:underline">mantaajbrar@gmail.com</a>
            </div>
            <div className="text-sm">UK</div>
          </div>

          {/* More Links */}
          <div className="flex-1 space-y-4">
            <h2 className="text-xl font-semibold">More Links</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-400">Home</a></li>
              <li><a href="#footer" className="hover:text-yellow-400">Contact</a></li>
              <li><a href="#about-us" className="hover:text-yellow-400">About Us</a></li>
              <li><a href="#our-work" className="hover:text-yellow-400">Our Work</a></li>
            </ul>
          </div>

        </div>
      </div>

      <div className="bg-gray-800 py-4 text-center text-sm text-gray-400">
        Powered by <a href="http://www.gstadeveloper.com" className="hover:text-yellow-400">GstaDeveloper</a> · All Rights Reserved
      </div>
    </footer>
  );
}
