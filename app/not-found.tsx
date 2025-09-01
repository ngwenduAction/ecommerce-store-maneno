import Link from "next/link";

// app/not-found.tsx
export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6">
      <h2 className="text-2xl font-bold mb-4">404 - Page Not Found</h2>
      <p className="text-gray-600 mb-6">Sorry, we couldn’t find this page.</p>
      <Link
        href="/"
        className="rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800 transition"
      >
        Go back home
      </Link>
    </div>
  );
}
