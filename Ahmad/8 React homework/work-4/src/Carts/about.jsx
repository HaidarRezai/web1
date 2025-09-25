function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-500 mb-6">
        ABOUT THE EMPIRE
      </h1>

      {/* Description */}
      <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-10">
        Tate Empire is not just a brand — it’s a lifestyle.  
        Built on discipline, financial freedom, and unstoppable ambition.  
        We believe in **strength, wealth, and power** as the foundation for success.  
      </p>

      {/* Highlight Section */}
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl w-full">
        <div className="bg-zinc-900 border border-yellow-500 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-yellow-500 mb-3">💪 Discipline</h2>
          <p className="text-gray-300">
            Without discipline, ambition dies. We train the mind and body to endure.
          </p>
        </div>

        <div className="bg-zinc-900 border border-yellow-500 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-yellow-500 mb-3">💰 Wealth</h2>
          <p className="text-gray-300">
            Money is freedom. We teach the mindset to build empires, not jobs.
          </p>
        </div>

        <div className="bg-zinc-900 border border-yellow-500 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-yellow-500 mb-3">⚡ Power</h2>
          <p className="text-gray-300">
            True power comes from knowledge, control, and fearless action.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
