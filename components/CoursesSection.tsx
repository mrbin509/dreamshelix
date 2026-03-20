export default function CoursesSection() {
  return (
    <section className="py-16 px-10">
      <h2 className="text-3xl font-bold text-center mb-10">
        Popular Courses
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-4 border rounded-xl shadow">
          <h3 className="text-xl font-semibold">Python Mastery</h3>
          <p className="text-gray-600">₹6999</p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
            Enroll Now
          </button>
        </div>
      </div>
    </section>
  );
}