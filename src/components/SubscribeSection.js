export default function SubscribeSection() {
  return (
    <section className="w-full py-12 px-4 md:px-20 flex flex-col gap-5 items-center justify-between  overflow-hidden my-10">
      {/* Text Content */}
      <div className="text-center md:text-left mb-8 md:mb-0">
        <h2 className="text-3xl md:text-3xl font-extrabold text-gray-600 mb-4">
          Subscribe now & get <span className="text-green-400">20% Off</span>
        </h2>
        <p className="text-gray-600 text-md md:text-lg">
          Join our newsletter to receive the latest deals and updates.
        </p>
      </div>

      {/* Form Content */}
      <form className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-6 py-3 rounded-md w-full md:w-80 border-2 border-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
        />
        <button
          type="submit"
          className="px-8 py-3 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-md transition duration-300"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}
