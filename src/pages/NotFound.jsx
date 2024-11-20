import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Animated 404 Text */}
      <div className="text-center animate-bounce">
        <h1 className="text-9xl font-extrabold text-gray-800">404</h1>
      </div>

      {/* Fade-in Content */}
      <div className="text-center mt-6 animate-fade-in">
        <p className="text-2xl text-gray-600">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="mt-2 text-gray-500">
          It might have been removed, or the link is incorrect.
        </p>

        <div className="mt-6">
          <Link
            to="/"
            className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};
