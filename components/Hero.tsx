export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center py-24">
      <h1 className="text-5xl font-bold mb-6">
        Learn Python & Earn Money 💰
      </h1>

      <p className="text-lg mb-8">
        India's First Platform where you Learn Skills & Earn through Referrals
      </p>

      <div className="space-x-4">
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold">
          Start Learning
        </button>

        <button className="border border-white px-6 py-3 rounded-lg">
          Refer & Earn
        </button>
      </div>
    </section>
  );
}