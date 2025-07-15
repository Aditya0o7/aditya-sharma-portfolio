import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.warn(
      "User tried accessing a non-existent or not-yet-deployed page:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center px-4">
        <h1 className="text-4xl font-bold text-red-600 mb-2">🚧 Hold Up!</h1>
        <p className="text-xl text-gray-700 mb-4">
          This project’s live site isn't deployed yet.<br />
          Maybe it's still being cooked 🍳
        </p>
        <a href="/" className="inline-block mt-2 text-blue-500 hover:text-blue-700 underline">
          Go back home before you get lost again
        </a>
      </div>
    </div>
  );
};

export default NotFound;
