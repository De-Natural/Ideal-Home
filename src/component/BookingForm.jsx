export default function BookingForm() {
  return (
    <section className="flex flex-col items-center gap-4 py-16 px-6">
        <h2 className="text-center text-3xl not-italic font-semibold leading-6 text-[#333]">Book This Apartment</h2>
        <p className="font-[poppins] text-center text-sm leading-normal font-normal">Call our Apartment team directly on  +44(0)191 2813129 or leave your details  below and we will get straight back to you.</p>
      <div className="w-full md:w-3/4 grid grid-cols-1 lg:grid-cols-2 gap-10 p-2">

        {/* LEFT FORM */}
        <div className="space-y-6">

          {/* Full Name */}
          <div>
            <label className="text-sm text-[#333] font-medium not-italic leading-7">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="mt-2 w-full h-12 px-4 border border-gray-100 rounded-lg bg-white text-sm outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-[#333] font-medium not-italic leading-7">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter email Address"
              className="mt-2 w-full h-12 px-4 border border-gray-100 rounded-lg bg-white text-sm outline-none"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm text-[#333] font-medium not-italic leading-7">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="Enter Phone Number"
              className="mt-2 w-full h-12 px-4 border border-gray-100 rounded-lg bg-white text-sm outline-none"
            />
          </div>

          {/* Apartment */}
          <div>
            <label className="text-sm text-[#333] font-medium not-italic leading-7">
              Apartment Name/Type <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Modern 2-Bedroom, Lekki Phase 1"
              className="mt-2 w-full h-12 px-4 border border-gray-100 rounded-lg bg-white text-sm outline-none"
            />
          </div>

          {/* Date */}
          <div>
            <label className="text-sm text-[#333] font-medium not-italic leading-7">
              Move-In Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              className="mt-2 w-full h-12 px-4 border border-gray-100 rounded-lg bg-white text-sm outline-none"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-20">

          {/* Message */}
          <div className="flex-1">
            <label className="text-sm text-[#333] font-medium not-italic leading-7">
              Message
            </label>
            <textarea
              placeholder="e.g. I'd like the apartment fully furnished or I'll arrive by 6 PM."
              className="mt-2 w-full h-full min-h-[220px] p-4 border border-gray-100 rounded-lg bg-white text-sm outline-none resize-none"
            />
          </div>

          {/* CTA */}
          <button
            className="w-full h-14 bg-[#1C56BA] text-white rounded-full
                       font-semibold text-sm hover:opacity-90 transition"
          >
            Book Apartment Now
          </button>

        </div>
      </div>
    </section>
  );
}
