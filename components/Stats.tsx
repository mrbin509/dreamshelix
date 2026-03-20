export default function Stats() {
  return (
    <section className="py-12 text-center bg-gray-100">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <h2 className="text-3xl font-bold">10,000+</h2>
          <p>Students</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">₹10L+</h2>
          <p>Earned by Students</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">50+</h2>
          <p>Courses</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">4.8⭐</h2>
          <p>Rating</p>
        </div>
      </div>
    </section>
  );
}