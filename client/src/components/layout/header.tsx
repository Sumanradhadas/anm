import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, UserRound, Tag, Phone, Mail } from "lucide-react";
import Navigation from "./navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-institute-red text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <span className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              +91 XXXXXXXXX
            </span>
            <span className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              info@anushkaanm.ac.in
            </span>
          </div>
          <div className="hidden md:block">
            <span>Approved by Bihar Nursing Council | DCECE Counseling</span>
          </div>
        </div>
      </div>

      {/* Header & Navigation */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo Section - Left */}
            <Link href="/" className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-institute-blue rounded-full flex items-center justify-center">
                <UserRound className="text-white text-2xl" size={32} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-institute-blue">ANUSHKA ANM</h1>
                <h2 className="text-lg font-semibold text-institute-red">TRAINING INSTITUTE</h2>
                <p className="text-sm text-gray-600">Lakhisarai, Bihar</p>
              </div>
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-institute-blue text-2xl"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Navigation - Centered */}
          <div className="flex justify-center">
            <Navigation isMobileMenuOpen={isMobileMenuOpen} currentPath={location} />
          </div>
        </div>
      </header>

      {/* Scrolling Notice Banner */}
      <div className="bg-gray-800 text-white py-3 overflow-hidden">
        <div className="whitespace-nowrap animate-scroll">
          <span className="text-sm font-medium">
            Recognized by Bihar Nursing Council | Admissions Through DCECE | 
            Quality Nursing Education in Lakhisarai | 
            Recognized by Bihar Nursing Council | Admissions Through DCECE
          </span>
        </div>
      </div>
    </>
  );
}
