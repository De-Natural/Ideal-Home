import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorBoundary() {
  const error = useRouteError();

  let errorMessage = "An unexpected error occurred";
  let errorStatus = 500;

  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorMessage = error.statusText || error.message;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">{errorStatus}</h1>
        <p className="text-2xl font-semibold text-gray-700 mb-2">
          {errorStatus === 404 ? "Page Not Found" : "Error"}
        </p>
        <p className="text-gray-600 mb-8">{errorMessage}</p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
