import React from "react";

const Testimonial = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center bg-gradient-to-b from-red-500 to-white text-white py-48 px-12 rounded-lg ">
      <p className="absolute top-[-12px] bg-red-600 px-6 py-1 text-white text-base uppercase font-bold tracking-widest">
        Kind Words
      </p>


      <blockquote className="text-2xl md:text-3xl font-light max-w-4xl mt-12 mb-12">
        <p>
          LUMO are undoubtedly the leaders in this space - far outperforming
          the rest of the market when it comes to creative DOOH solutions.
        </p>
      </blockquote>


      <footer className="flex items-center gap-6">
        <img
          src="https://via.placeholder.com/80" 
          alt="Rohan Prasad"
          className="w-16 h-16 rounded-full border-2 border-red-600 object-cover"
        />
        <div className="text-left">
          <p className="font-semibold text-lg text-red-600">Rohan Prasad</p>
          <p className="text-sm text-gray-700">
            Director of Client Development - BillUps
          </p>
        </div>
      </footer>

      <div className="flex gap-6 mt-12">
        <button className="w-14 h-14 flex items-center justify-center border border-red-600 rounded-full hover:bg-red-500 hover:text-white transition">
          ←
        </button>
        <button className="w-14 h-14 flex items-center justify-center border border-red-600 rounded-full hover:bg-red-500 hover:text-white transition">
          →
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
