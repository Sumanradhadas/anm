import { Link } from "wouter";
import { UserRound, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Institute Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-institute-blue rounded-full flex items-center justify-center">
                <UserRound className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-bold">ANUSHKA ANM</h3>
                <p className="text-sm text-gray-300">Training Institute</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Established in 2020, we are committed to providing quality nursing education 
              with strong ethical values in Lakhisarai, Bihar.
            </p>
          </div>
          
          {/* Quick Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li>
                <a href="https://dcece.ac.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center">
                  DCECE Website
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/admission" className="hover:text-white transition-colors">Admissions</Link></li>
            </ul>
          </div>
          
          {/* Address */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Address</h4>
            <div className="text-sm text-gray-300 space-y-2">
              <p>Main Road, Medical College Area</p>
              <p>Lakhisarai, Bihar - 811311</p>
              <p>Phone: +91 XXXXXXXXX</p>
              <p>Email: info@anushkaanm.ac.in</p>
            </div>
          </div>
          
          {/* Bihar Nursing Council */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Bihar Nursing Council</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/admission" className="hover:text-white transition-colors">Admission Process</Link></li>
              <li><Link href="/courses" className="hover:text-white transition-colors">ANM Course Details</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Campus Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Information</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2024 Anushka ANM Training Institute. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>Approved by Bihar Nursing Council</span>
              <span>•</span>
              <span>DCECE Counseling</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
