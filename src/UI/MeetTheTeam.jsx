import TeamCard from "../component/TeamCard";

export default function MeetTheTeam({ members }) {
  return (
    <section className="bg-transparent py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Meet the Team
          </h2>

          <p className="text-gray-400 text-base leading-relaxed">
            From cozy studios to spacious family homes, discover the
            perfect apartment that matches your needs, budget, and style.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {members.map(member => (
            <TeamCard
              key={member.id}
              name={member.name}
              role={member.role}
              image={member.image}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
