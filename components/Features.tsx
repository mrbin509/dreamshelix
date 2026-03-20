export default function Features() {
  return (
    <section className="py-16 px-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">
        Why Choose Us?
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-semibold">Learn & Earn</h3>
          <p>Unique earning model with courses</p>
        </div>

        <div>
          <h3 className="font-semibold">Industry Content</h3>
          <p>Updated real-world courses</p>
        </div>

        <div>
          <h3 className="font-semibold">Certification</h3>
          <p>Get certified after completion</p>
        </div>
      </div>
    </section>
  );
}