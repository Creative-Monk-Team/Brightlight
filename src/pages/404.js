export default function Custom404() {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <p className="text-2xl mt-4">Oops! Page Not Found</p>
        <a href="/" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg">Go to Home</a>
      </div>
    );
  }
  