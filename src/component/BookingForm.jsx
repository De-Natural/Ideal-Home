import { useState, useEffect, useRef } from "react";
import { CloseIcon } from "../assets/Icons/CloseIcon";
import toast from "react-hot-toast";

export default function BookingForm({ asModal = false, onClose = () => {}, initialData = {}, locationRef }) {
  const [form, setForm] = useState({
    name: initialData.name || "",
    email: initialData.email || "",
    phone: initialData.phone || "",
    apartment: initialData.apartment || initialData.title || initialData.imageTitle || "",
    date: initialData.date || "",
    message: initialData.message || "",
  });

  const [submitting, setSubmitting] = useState(false);
  const closeTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!asModal) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [asModal]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }; 

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    const payload = { ...form, imageTitle: initialData.imageTitle, imageDescription: initialData.imageDescription };
    console.log("Booking request:", payload);

    // Simulate async request (replace with actual API call)
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Booking submitted successfully");

      // clear form fields after successful submission
      setForm({
        name: "",
        email: "",
        phone: "",
        apartment: "",
        date: "",
        message: "",
      });

      // If modal, close shortly after showing toast so user sees feedback
      if (asModal && onClose) {
        closeTimerRef.current = setTimeout(() => onClose(), 1200);
      }
    }, 600);
  }; 

  const content = (
    <form ref={locationRef} onSubmit={handleSubmit} className="flex flex-col items-start sm:items-center relative gap-4 py-4 px-3 sm:py-6 sm:px-4">
      <h2 className="text-center text-lg lg:text-3xl not-italic font-semibold leading-6 text-[#333]">Book This Apartment</h2>
      <p className="font-[poppins] text-center text-sm leading-normal font-normal">Call our Apartment team directly on&nbsp; +44(0)191 2813129 or&nbsp;leave your details below and we will get straight back to you.</p>

      <div className="w-full md:w-3/4 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 p-2">

        {/* LEFT FORM */}
        <div className="space-y-4">

          {/* Full Name */}
          <div>
            <label className="text-sm text-[#333] font-medium not-italic leading-7">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              placeholder="Enter Full Name"
              className="mt-2 w-full h-10 sm:h-12 px-3 sm:px-4 border border-gray-100 rounded-lg bg-white text-sm outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-[#333] font-medium not-italic leading-7">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="Enter email Address"
              className="mt-2 w-full h-10 sm:h-12 px-3 sm:px-4 border border-gray-100 rounded-lg bg-white text-sm outline-none"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm text-[#333] font-medium not-italic leading-7">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              type="tel"
              placeholder="Enter Phone Number"
              className="mt-2 w-full h-10 sm:h-12 px-3 sm:px-4 border border-gray-100 rounded-lg bg-white text-sm outline-none"
            />
          </div>

          {/* Apartment */}
          <div>
            <label className="text-sm text-[#333] font-medium not-italic leading-7">
              Apartment Name/Type <span className="text-red-500">*</span>
            </label>
            <input
              name="apartment"
              value={form.apartment}
              onChange={handleChange}
              type="text"
              placeholder="e.g. Modern 2-Bedroom, Lekki Phase 1"
              className="mt-2 w-full h-10 sm:h-12 px-3 sm:px-4 border border-gray-100 rounded-lg bg-white text-sm outline-none"
            />
          </div>

          {/* Date */}
          <div>
            <label className="text-sm text-[#333] font-medium not-italic leading-7">
              Move-In Date <span className="text-red-500">*</span>
            </label>
            <input
              name="date"
              value={form.date}
              onChange={handleChange}
              type="date"
              className="mt-2 w-full h-10 sm:h-12 px-3 sm:px-4 border border-gray-100 rounded-lg bg-white text-sm outline-none"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-6">

          {/* Message */}
          <div className="flex-1">
            <label className="text-sm text-[#333] font-medium not-italic leading-7">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="e.g. I'd like the apartment fully furnished or I'll arrive by 6 PM."
              className="mt-2 w-full h-full min-h-[120px] sm:min-h-[160px] p-3 sm:p-4 border border-gray-100 rounded-lg bg-white text-sm outline-none resize-none"
            />
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <button
              type="submit"
              disabled={submitting}
              className={`flex-1 h-12 bg-[#1C56BA] mt-10 px-3 py-2 text-white rounded-full font-semibold text-sm transition ${submitting ? 'opacity-60 cursor-not-allowed' : 'hover:opacity-90'}`}
            >
              {submitting ? 'Submitting...' : 'Book Apartment Now'}
            </button>
            {/* {!asModal && (
              <button
                type="button"
                onClick={onClose}
                className="mt-2 sm:mt-0 h-10 sm:h-12 px-4 bg-gray-200 rounded-full text-sm w-full sm:w-auto"
              >
                Close
              </button>
            )} */}
          </div>

        </div>
      </div>
    </form>
  );



  if (!asModal) return (
    <>
      {content}
    </>
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={(e) => {
        // close when clicking outside the modal content
        if (e.target === e.currentTarget && onClose) onClose();
      }}
    >
      <div className="w-11/12 md:w-4/5 lg:w-3/4 bg-white rounded-2xl p-4 sm:p-6 relative max-h-[90vh] overflow-y-auto">
        {content}
        <button type="button" aria-label="Close modal" onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full bg-gray-100">
          <CloseIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
