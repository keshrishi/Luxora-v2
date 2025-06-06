const currentYear = new Date().getFullYear();
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row md:justify-between gap-8">
        {/* Brand and description */}
        <div className="flex-1 mb-8 md:mb-0">
          <div className="text-2xl font-bold text-blue-400 mb-2">Luxora</div>
          <p className="text-gray-400 max-w-xs text-md">
            Your one-stop shop for the best deals and products. Discover, like, and shop with ease.
          </p>
        </div>
        {/* Navigation */}
        <div className="flex-1 mb-6 md:mb-0">
          <h4 className="font-semibold text-md mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-blue-400 transition">Home</Link></li>
            <li><Link href="/dashboard" className="hover:text-blue-400 transition">Dashboard</Link></li>
            <li><Link href="/about" className="hover:text-blue-400 transition">About</Link></li>
            <li><Link href="/cart" className="hover:text-blue-400 transition">Cart</Link></li>
          </ul>
        </div>
        {/* Social and contact */}
        <div className="flex-1">
          <h4 className="font-semibold text-md mb-3">Connect</h4>
          <div className="flex space-x-4 mb-3">
            <button
              onClick={() => window.open('https://github.com/Aditya2661', '_blank', 'noopener,noreferrer')}
              className="hover:text-blue-400"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.09 3.29 9.38 7.86 10.89.58.11.79-.25.79-.56v-2.2c-3.2.7-3.87-1.54-3.87-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.21 1.79 1.21 1.04 1.78 2.74 1.27 3.41.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.68 0-1.25.44-2.27 1.17-3.07-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.17a11.1 11.1 0 0 1 2.9-.39c.99 0 1.98.13 2.9.39 2.21-1.48 3.18-1.17 3.18-1.17.62 1.58.23 2.75.12 3.04.73.8 1.17 1.82 1.17 3.07 0 4.41-2.7 5.39-5.27 5.67.42.36.79 1.08.79 2.18v3.23c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z"/>
              </svg>
            </button>
            <button
              onClick={() => window.open('https://github.com/keshrishi', '_blank', 'noopener,noreferrer')}
              className="hover:text-blue-400"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.09 3.29 9.38 7.86 10.89.58.11.79-.25.79-.56v-2.2c-3.2.7-3.87-1.54-3.87-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.21 1.79 1.21 1.04 1.78 2.74 1.27 3.41.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.68 0-1.25.44-2.27 1.17-3.07-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.17a11.1 11.1 0 0 1 2.9-.39c.99 0 1.98.13 2.9.39 2.21-1.48 3.18-1.17 3.18-1.17.62 1.58.23 2.75.12 3.04.73.8 1.17 1.82 1.17 3.07 0 4.41-2.7 5.39-5.27 5.67.42.36.79 1.08.79 2.18v3.23c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z"/>
              </svg>
            </button>
          </div>
          <div className="text-gray-400 text-xs">
            Email: <button
              onClick={() => window.open('mailto:support@luxora.com', '_blank', 'noopener,noreferrer')}
              className="hover:text-blue-400"
            >
              support@luxora.com
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-xs">
        &copy; {currentYear} Luxora. All rights reserved.
      </div>
    </footer>
  );
}
