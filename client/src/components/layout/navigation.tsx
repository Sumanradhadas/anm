import { Link } from "wouter";

interface NavigationProps {
  isMobileMenuOpen: boolean;
  currentPath: string;
}

export default function Navigation({ isMobileMenuOpen, currentPath }: NavigationProps) {
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/courses", label: "Courses" },
    { path: "/admission", label: "Admission" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact Us" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && currentPath === "/") return true;
    if (path !== "/" && currentPath.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:block border-t border-gray-200">
        <ul className="flex space-x-8 py-4">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link 
                href={item.path}
                className={`transition-colors ${
                  isActive(item.path) 
                    ? "nav-link-active" 
                    : "nav-link"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      {/* Mobile Navigation */}
      <nav className={`lg:hidden border-t border-gray-200 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="py-4 space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link 
                href={item.path}
                className={`block py-2 px-4 hover:bg-gray-100 transition-colors ${
                  isActive(item.path) 
                    ? "nav-link-active" 
                    : "nav-link"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
