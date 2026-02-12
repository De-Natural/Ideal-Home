const steps = [
  {
    number: "1",
    title: "Consultation & Property Review",
    description:
      "We assess your property or help you acquire one that fits your goals.",
  },
  {
    number: "2",
    title: "Setup & Design",
    description:
      "Our team furnishes and prepares your apartment for guests or long-term tenants.",
  },
  {
    number: "3",
    title: "Onboarding & Agreement",
    description:
      "You’ll receive a transparent contract outlining terms, returns, and services.",
  },
  {
    number: "4",
    title: "Professional Listing",
    description:
      "We market your property across our corporate networks and major booking platforms.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="bg-transparent py-16 px-6">
      <div className="max-w-6xl mx-auto"> 
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-24">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-center text-center"
            >
              {/* Number Circle */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#1C56BA] text-white font-semibold text-lg mb-4">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="text-[#1C56BA] font-semibold text-base md:text-lg mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm md:text-base max-w-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
