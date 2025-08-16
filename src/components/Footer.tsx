'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {currentYear} Shadrack Olaloko. All rights reserved.
            </p>
          </div>

          {/* Developer Credits */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm mb-1">
              Crafted with ❤️ by{' '}
              <a 
                href="https://www.jidemobell.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200 font-medium"
              >
                Jidemobell
              </a>
            </p>
            <p className="text-gray-500 text-xs">
              Built under{' '}
              <a 
                href="https://www.atensai.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-yellow-500 hover:text-yellow-400 transition-colors duration-200 font-medium"
              >
                Atensai
              </a>
            </p>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
}
