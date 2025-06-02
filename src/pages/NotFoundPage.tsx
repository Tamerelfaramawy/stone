import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Page Not Found - Stone Style';
  }, []);

  return (
    <div className="min-h-screen pt-32 flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-6xl md:text-8xl font-serif font-bold text-primary-800 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-6">Page Not Found</h2>
        <p className="text-primary-600 mb-8">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-primary-800 text-white px-6 py-3 rounded hover:bg-primary-900 transition-colors duration-300"
          >
            <Home size={18} className="mr-2" />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center border border-primary-800 text-primary-800 px-6 py-3 rounded hover:bg-primary-800 hover:text-white transition-colors duration-300"
          >
            <ArrowLeft size={18} className="mr-2" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;