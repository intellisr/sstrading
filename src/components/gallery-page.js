import React, { useState, useEffect } from 'react';

/* Tailwind CSS should be configured in your project */

const cassavaImages = [
  'https://firebasestorage.googleapis.com/v0/b/sstrading-913ac.appspot.com/o/cass-min.jpeg?alt=media&token=d37da9d2-69b1-41e1-860a-65840ca088f2',
  'https://firebasestorage.googleapis.com/v0/b/sstrading-913ac.appspot.com/o/cass1-min.jpeg?alt=media&token=3c699ee9-19d0-4f78-91e0-26724e59067c',
  'https://firebasestorage.googleapis.com/v0/b/sstrading-913ac.appspot.com/o/cass2-min.jpeg?alt=media&token=74d9c030-d0d5-469c-b290-c8b0cd05af9c'
];

const pineappleImages = [
  'https://firebasestorage.googleapis.com/v0/b/sstrading-913ac.appspot.com/o/pine2.jpeg?alt=media&token=aa12ac85-e64a-4366-ab6e-cde68da4065b',
  'https://firebasestorage.googleapis.com/v0/b/sstrading-913ac.appspot.com/o/pine-min.jpeg?alt=media&token=efbc9207-0360-4cac-8ce6-8114fd99a2ca'
];

const coconutImages = [
  'https://firebasestorage.googleapis.com/v0/b/sstrading-913ac.appspot.com/o/kc1-min.jpeg?alt=media&token=181df6db-6746-4c8e-ae11-0489ce0d171c',
  'https://firebasestorage.googleapis.com/v0/b/sstrading-913ac.appspot.com/o/kc3.jpeg?alt=media&token=f53e675e-13fa-4279-acfe-8b92312469c0',
];

const papayaImages = [
  'https://firebasestorage.googleapis.com/v0/b/sstrading-913ac.appspot.com/o/kc2-min.jpeg?alt=media&token=fe2db803-8d96-454c-98e7-7e12995c912f',
  'https://firebasestorage.googleapis.com/v0/b/sstrading-913ac.appspot.com/o/pap1-min.jpeg?alt=media&token=56e107b6-02db-45fd-b13b-765ebb4927bf',
  'https://firebasestorage.googleapis.com/v0/b/sstrading-913ac.appspot.com/o/pap2-min.jpeg?alt=media&token=0f1bb915-4f7e-4a8c-a742-23541c0ae88a'
];

const vegImages = [
  'https://firebasestorage.googleapis.com/v0/b/sstrading-913ac.appspot.com/o/veg1-min.jpeg?alt=media&token=8e3e754f-e0e7-49d6-94d2-bf9d5c4e53a7',
  'https://firebasestorage.googleapis.com/v0/b/sstrading-913ac.appspot.com/o/veg2-min.jpeg?alt=media&token=46df4066-a3b9-47b1-9a29-6b8dac2e36ea',
];

const Carousel = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = images.length;

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + length) % length);
  };

  return (
    <div className="relative w-full mb-10">
      <h2 className="text-2xl font-bold text-center mb-4 text-red">{title}</h2>
      <div className="relative overflow-hidden rounded-lg shadow-lg aspect-[8/6]">
        {images.map((image, index) => (
          <div
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            key={index}
          >
            <img
              src={`${image}?w=800&h=600&fit=crop`}
              alt={`${title} ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full ml-2 focus:outline-none"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full mr-2 focus:outline-none"
        >
          &#10095;
        </button>
      </div>
      {/* Dots */}
      <div className="flex justify-center mt-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 mx-1 rounded-full focus:outline-none ${
              index === currentIndex ? 'bg-green' : 'bg-gray-800'
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Fruit Carousel */}
        <Carousel images={cassavaImages} title="Organic Cassava" />

        {/* Vegetable Carousel */}
        <Carousel images={pineappleImages} title="Fresh Pineapples" />

        {/* Berry Carousel */}
        <Carousel images={coconutImages} title="King Coconuts" />

        {/* Leafy Greens Carousel */}
        <Carousel images={papayaImages} title="Srilankan Papaya" />

        <Carousel images={vegImages} title="SL Unique Vegetables" />
      </div>
    </div>
  );
};

export default Gallery;