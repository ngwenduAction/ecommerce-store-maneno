// app/not-found.tsx
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-8">
      <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4 text-lg text-gray-600">
        The page you are looking for does not exist.
      </p>
      <a
        href="/"
        className="mt-6 inline-block rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Go back home
      </a>
    </div>
  );
}
