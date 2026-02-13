import { Link } from "react-router-dom";
import notFound from "../assets/images/404error.png"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 py-12">
      <div className="max-w-2xl w-full text-center flex flex-col gap-4">
        {/* <h1 className="font-[inter] text-6xl md:text-8xl font-bold text-gray-900 mb-2">
          404
        </h1>
        <p className="font-[inter] text-lg md:text-xl font-medium text-gray-700 mb-8">
          Page not found
        </p> */}

        {/* Illustration Placeholder */}
        <div className="relative w-full h-64 md:h-80 mb-12 flex items-center justify-center">
          <img src={notFound} alt="404" className="w-full h-full" />
        </div>

        {/* Description Text */}
        <h2 className="font-[inter] text-xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
          The Page you are looking for doesn't<br />Exist or may have been removed
        </h2>

        {/* Go Back Home Button */}
        <Link to="/">
          <button className="w-full font-[inter] bg-[#1C56BA] text-white text-base md:text-lg font-semibold px-12 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
}
