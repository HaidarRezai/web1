function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      {/* Hero Title */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-500 mb-6">
        WELCOME TO TATE EMPIRE
      </h1>

      {/* Motivational Quote */}
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10">
        “Success is always the product of massive action. Discipline, money, and power
        are not given — they are taken.”
      </p>

      {/* Call to Action */}
      <a
        href="#gallery"
        className="px-8 py-3 bg-yellow-500 text-black font-bold rounded-full shadow-lg hover:bg-yellow-600 transition duration-300"
      >
        Enter the Empire 🚀
      </a>

      {/* Background Image Section */}
      <div className="mt-12">
        <img
          src="https://live-production.wcms.abc-cdn.net.au/c097c48bb728b5dd6f8a2df9b57d1a31?impolicy=wcms_crop_resize&cropH=1807&cropW=3212&xPos=0&yPos=33&width=862&height=485"
          alt="Bugatti"
          className="rounded-xl shadow-2xl border-4 border-yellow-500 max-h-[400px]"
        />
      </div>
    </div>
  );
}

export default Home;
