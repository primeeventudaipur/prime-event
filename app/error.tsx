"use client";

import Link from "next/link";
import { useEffect } from "react";
import { FaRedoAlt, FaHome } from "react-icons/fa";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-6">

      <div className="text-center max-w-2xl">

        <h1 className="text-7xl md:text-8xl font-black text-yellow-500">
          Oops!
        </h1>

        <h2 className="mt-6 text-3xl md:text-5xl font-bold text-white">
          Something went wrong
        </h2>

        <p className="mt-6 text-gray-400 leading-8">
          An unexpected error occurred while loading this page.
          Please try again or return to the homepage.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">

          <button
            onClick={reset}
            className="flex items-center gap-2 bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition-all duration-300"
          >
            <FaRedoAlt />
            Try Again
          </button>

          <Link
            href="/"
            className="flex items-center gap-2 border border-yellow-500 text-yellow-400 px-8 py-4 rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300"
          >
            <FaHome />
            Home
          </Link>

        </div>

      </div>

    </section>
  );
}