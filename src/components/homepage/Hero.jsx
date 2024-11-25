
import React from "react";

const Hero = () => {
  const stats = [
    { label: "LOCALLY OWNED & OPERATED" },
    { label: "69", description: "Digital Billboards Across NZ" },
    { label: "100%", description: "Live & Verified" },
    { label: "692,574", description: "People Reached Today" },
  ];

  return (
    <section
      className="h-screen bg-cover bg-center flex flex-col items-center justify-center px-10 lg:px-20 text-white"
      style={{
        backgroundImage: "linear-gradient(to top, #5d0000, transparent), url('/home.png')",
      }}
    >
      <div className="flex flex-col space-y-4 items-center text-center">
        <h1 className="text-4xl lg:text-6xl font-bold">
          See the potential of <br />
          <span className="text-red-600">Digital Out of Home</span>
        </h1>
        <p className="text-lg lg:text-xl max-w-lg">
          Our network of digital billboards helps local and international brands reach New Zealand audiences in prime urban locations, making daily commutes a time for impactful and lasting impressions.
        </p>
        <a
          href="#"
          className="px-6 py-3 border-2 border-white text-white rounded-md hover:bg-white hover:text-red-600 transition"
        >
          Get In Touch
        </a>
      </div>


      <div className=" text-white py-10 w-full flex flex-wrap justify-around text-center mt-10">
        {stats.map((stat, index) => (
          <div key={index} className="space-y-2">
            <h3 className="text-2xl font-bold">{stat.label}</h3>
            {stat.description && <p className="text-gray-300">{stat.description}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;