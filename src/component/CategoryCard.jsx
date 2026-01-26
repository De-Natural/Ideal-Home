

export default function CategoryCard({
  icon,
  title,
  description,
  buttonText,
  onClick,
}) {
  return (
    <div className="w-[300px] bg-white rounded-3xl px-12 py-5 text-center shadow-sm">
      
      {/* Icon stack */}
      <div className="relative mx-auto w-fit mb-6">
        <div className="absolute -right-2 top-2 w-14 h-14 bg-blue-100 rounded-xl" />
        <div className="relative w-14 h-14 bg-blue-200 rounded-xl flex items-center justify-center">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-black mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-6">
        {description}
      </p>

      {/* Button */}
      <button
        onClick={onClick}
        className="px-6 py-2 border border-blue-600 text-blue-600 rounded-full font-medium hover:bg-blue-600 hover:text-white transition"
      >
        {buttonText}
      </button>
    </div>
  );
}
