import { Link } from "react-router-dom";
import { Logo } from "./ui/Logo";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/">
            <Logo />
          </Link>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#features"
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              How it Works
            </a>
            <a
              href="#pricing"
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              Pricing
            </a>
          </nav>
          <Button>
            <Link to="/">Join Waitlist</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
