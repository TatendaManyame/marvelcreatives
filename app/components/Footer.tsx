import Link from "next/link";
import Image from "next/image";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTiktok,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-32 h-16 flex-shrink-0">
                <Image
                  src="/logo/logo.png"
                  alt="Marvel Creatives Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <p className="text-gray-400 leading-7 text-sm">
              Transforming brands through creative design, premium printing,
              impactful signage, digital marketing, vehicle branding, billboards,
              and corporate branding solutions across Zimbabwe.
            </p>

            {/* Socials */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/marvel.creatives"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300"
                aria-label="Follow us on Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/marvelcreatives96"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300"
                aria-label="Follow us on Facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300"
                aria-label="Follow us on LinkedIn"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://www.tiktok.com/@marvelcreatives"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300"
                aria-label="Follow us on TikTok"
              >
                <FaTiktok />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li><Link href="/" className="hover:text-red-500 transition-colors duration-300">Home</Link></li>
              <li><Link href="/about" className="hover:text-red-500 transition-colors duration-300">About Us</Link></li>
              <li><Link href="/services" className="hover:text-red-500 transition-colors duration-300">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-red-500 transition-colors duration-300">Portfolio</Link></li>
              <li><Link href="/contact" className="hover:text-red-500 transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Our Services
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-red-500 transition-colors duration-300 cursor-pointer">Corporate Branding</li>
              <li className="hover:text-red-500 transition-colors duration-300 cursor-pointer">Vehicle Branding</li>
              <li className="hover:text-red-500 transition-colors duration-300 cursor-pointer">Signage & Billboards</li>
              <li className="hover:text-red-500 transition-colors duration-300 cursor-pointer">Digital Marketing</li>
              <li className="hover:text-red-500 transition-colors duration-300 cursor-pointer">Large Format Printing</li>
              <li className="hover:text-red-500 transition-colors duration-300 cursor-pointer">Graphic Design</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Contact Us
            </h3>

            <div className="space-y-4 text-gray-400">

              <div className="flex items-start gap-3 group">
                <FaMapMarkerAlt className="mt-1 text-white group-hover:text-red-500 transition-colors duration-300" />
                <span className="group-hover:text-white transition-colors duration-300">
                  88 Central Avenue, Harare<br />
                  Cnr 8th & Central Avenue<br />
                  @The Waves Plaza Complex
                </span>
              </div>

              <div className="flex items-center gap-3 group">
                <FaEnvelope className="text-white group-hover:text-red-500 transition-colors duration-300" />
                <span className="group-hover:text-white transition-colors duration-300">info@marvelcreatives.ae</span>
              </div>

              <div className="flex items-center gap-3 group">
                <FaPhone className="text-white group-hover:text-red-500 transition-colors duration-300" />
                <span className="group-hover:text-white transition-colors duration-300">+263 788 991 893</span>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Marvel Creatives. Crafted with creativity in Harare.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-red-500 transition-colors duration-300">
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-red-500 transition-colors duration-300">
              Terms & Conditions
            </Link>

            <Link href="/cookies" className="hover:text-red-500 transition-colors duration-300">
              Cookies
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}