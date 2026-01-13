import { Link } from "react-router-dom";

export default function NotFound(){
    return(
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-100 to-gray-200 text-center px-4">
      <h1 className="text-9xl font-extrabold text-red-500 animate-pulse">404</h1>
      <p className="text-xl md:text-2xl mt-4 text-gray-700">
        Oups ! La page que vous recherchez n'existe pas.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
      >
        Retour à l'accueil
      </Link>
      <div className="mt-8">
        <img
          src="https://undraw.co/api/illustrations/404-page" 
          alt="Not Found Illustration"
          className="w-64 md:w-96 mx-auto"
        />
      </div>
    </div>
  );
}