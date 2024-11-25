import React from "react";

const cards = [
  { title: "Sheetal is Nisha" },
  { title: "Nisha is Munni" },
  { title: "Munni is Aditi" },
];

const ImageGallery = () => {
  return (
    <section className="flex flex-wrap justify-center gap-5 p-5">
      {cards.map((card, index) => (
        <div
          key={index}
          className="relative w-80 h-96 border-2 border-gray-200 rounded-lg overflow-hidden flex items-center justify-center hover:scale-105 transition-transform"
        >
          <div className="absolute inset-0 bg-gray-100 bg-radial-gradient-to-t from-pink-500/50 via-transparent opacity-0 hover:opacity-100 transition-opacity"></div>
          <div className="text-center z-10">
            <h2 className="text-xl font-bold text-gray-700">{card.title}</h2>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ImageGallery;
