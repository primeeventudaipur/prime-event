import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-6">

      <div className="text-center">

        <h1 className="text-8xl md:text-9xl font-black text-yellow-500">
          404
        </h1>

        <h2 className="mt-6 text-3xl md:text-5xl font-bold text-white">
          Page Not Found
        </h2>

        <p className="mt-6 text-gray-400 max-w-xl mx-auto leading-8">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back to the celebration.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-3 mt-10 bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition-all duration-300"
        >
          <FaHome />
          Back To Home
        </Link>

      </div>

    </section>
  );
}