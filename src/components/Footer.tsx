import { Logo } from "./ui/Logo";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start">
          {" "}
          {/* Added flex-col and items-center */}
          <div className="mb-4 sm:mb-0 sm:order-first">
            {" "}
            {/* Added mb-4 and sm:order-first */}
            <Logo />
          </div>
          <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-6 text-center sm:text-left">
            {" "}
            {/* Added flex-col, space-x-0, and text-center */}
            <a
              href="/privacy"
              className="text-gray-400 hover:text-gray-500 mb-2 sm:mb-0"
            >
              {" "}
              {/* Added mb-2 and sm:mb-0 */}
              Privacy
            </a>
            <a
              href="/terms"
              className="text-gray-400 hover:text-gray-500 mb-2 sm:mb-0"
            >
              Terms
            </a>
            <a
              href="/contact"
              className="text-gray-400 hover:text-gray-500 mb-2 sm:mb-0"
            >
              Contact
            </a>
            <a
              href="/refund"
              className="text-gray-400 hover:text-gray-500 mb-2 sm:mb-0"
            >
              Refunds
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Bill Bhejo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
