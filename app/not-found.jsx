import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-col md:flex-col sm:flex-col justify-center items-center bg-white text-center px-4 font-serif">

      {/* Image */}
      <img
        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
        alt="404 animation"
        className="w-[280px] sm:w-[350px] md:w-[420px] lg:w-[500px] -mt-10 md:-mt-16"
      />

      {/* Text Content */}
      <div className="mt-4 md:mt-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
          Looks like you're lost
        </h2>

        <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-4">
          The page you are looking for is not available!
        </p>

        <Link
          href="/"
          className="inline-block px-6 py-2 bg-green-600 text-white rounded text-sm md:text-base"
        >
          Go to Home
        </Link>
      </div>

    </section>
  );
}
