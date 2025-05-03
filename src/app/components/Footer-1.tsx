import Image from "next/image";

export default function Footer1() {
  return (
    <footer className="bg-[#111] text-white" id="footer">
      <div className="py-10 px-4 lg:px-20">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          {/* Logo & Social */}
          <div className="space-y-4">
            <a href="#">
              <Image src="/img/logo.png" alt="Logo" width={150} height={40} />
            </a>
            <div className="flex gap-4 mt-4 text-white">
              {/* Social SVG icons */}
              {["facebook", "twitter", "instagram", "youtube"].map((platform) => (
                <a href="#" aria-label={platform} key={platform} className="hover:text-yellow-500">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    dangerouslySetInnerHTML={{
                      __html: socialSVGs[platform],
                    }}
                  />
                </a>
              ))}
            </div>
            <p className="text-sm">© 2024 Man Brar Construction Ltd. All rights reserved.</p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Contact</h2>
            <div className="flex items-center gap-2">
              <svg width="20" height="20" fill="#facc15" viewBox="0 0 24 24"><path d="M3 2.5A1.5 1.5 0 014.5 1h15A1.5 1.5 0 0121 2.5v19a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 21.5v-19zM5 4v16h14V4H5zm7 14a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
              <a href="tel:07535643662">07535643662</a>
            </div>
            <div className="flex items-center gap-2">
              <svg width="20" height="20" fill="#facc15" viewBox="0 0 24 24"><path d="M4 4h16v2l-8 5-8-5V4zm0 4.33l7.44 4.64a1 1 0 001.12 0L20 8.33V20H4V8.33z"></path></svg>
              <a href="mailto:info@manbrarconstruction.com">info@manbrarconstruction.com</a>
            </div>
            <div className="flex items-center gap-2">
              <svg width="20" height="20" fill="#facc15" viewBox="0 0 24 24"><path d="M4 4h16v2l-8 5-8-5V4zm0 4.33l7.44 4.64a1 1 0 001.12 0L20 8.33V20H4V8.33z"></path></svg>
              <a href="mailto:mantaajbrar@gmail.com">mantaajbrar@gmail.com</a>
            </div>
            <div className="uppercase text-sm text-gray-400 pt-1">UK</div>
          </div>

          {/* More Links */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">More Links</h2>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-yellow-500">Home</a></li>
              <li><a href="#footer" className="hover:text-yellow-500">Contact</a></li>
              <li><a href="#about-us" className="hover:text-yellow-500">About Us</a></li>
              <li><a href="#our-work" className="hover:text-yellow-500">Our Work</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-black text-gray-400 text-sm py-4 text-center">
        Powered by <a href="http://www.gstadeveloper.com" className="hover:text-yellow-500">GstaDeveloper</a> · All Rights Reserved
      </div>
    </footer>
  );
}

const socialSVGs: Record<string, string> = {
  facebook: `<path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>`,
  twitter: `<path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645..."/>`,
  instagram: `<path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3..."/>`,
  youtube: `<path d="M549.655 124.083c-6.281-23.65-24.787-42.276..."/>`,
};