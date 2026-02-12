function TeamCard({ name, role, image }) {
  return (
    <div className="bg-white rounded-3xl p-5 shadow-lg flex flex-col items-center text-center">
      
      {/* Image */}
      <div className="w-full aspect-square rounded-2xl overflow-hidden mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name */}
      <h3 className="text-lg font-semibold text-[#111]">
        {name}
      </h3>

      {/* Role */}
      <p className="text-sm text-gray-500 mt-1">
        {role}
      </p>
    </div>
  );
}

export default TeamCard;
