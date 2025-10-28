import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Header.css";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Specialties", href: "#specialties" },
  { name: "Credentials", href: "#credentials" },
  { name: "Gallery", href: "#gallery" },
  { name: "Consultation", href: "#locations" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container-custom flex items-center justify-between py-4">
        <Link to="/" className="flex items-center">
          <span className="font-serif text-2xl font-semibold text-primary">
            Dr. Matthews
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <div className="hoverable-div">
              <a
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            type="button"
            className="p-2 text-gray-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b">
          <div className="container-custom py-3">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <div className="hoverable-div">
                  <a
                    key={item.name}
                    href={item.href}
                    className="px-3 py-2 text-base font-medium text-gray-700 hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
