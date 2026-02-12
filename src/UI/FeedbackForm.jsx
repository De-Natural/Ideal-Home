
export default function FeedbackForm() {
  return (
    <section className="bg-transparent py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-center text-gray-400 text-lg md:text-xl font-medium mb-12">
          We Value your Feedback
        </h2>

        <form className="space-y-8">
          {/* Full Name */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full rounded-lg bg-white px-4 py-3 text-sm border border-gray-400 outline-none focus:ring-2 focus:ring-gray-200"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter email Address"
              className="w-full rounded-lg bg-white px-4 py-3 text-sm border border-gray-400 outline-none focus:ring-2 focus:ring-gray-200"
            />
          </div>

          {/* Review */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Write Review
            </label>
            <textarea
              rows="4"
              placeholder="Tell us what you think"
              className="w-full rounded-lg bg-white px-4 py-3 text-sm border border-gray-400 outline-none focus:ring-2 focus:ring-gray-200"
            />
          </div>

          {/* Button */}
          <div>
            <button
              type="submit"
              className="w-full md:w-[60%] bg-[#1C56BA] hover:bg-blue-700 transition text-white py-3 rounded-full font-medium"
            >
              Send Feedback
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
