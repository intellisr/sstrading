import React, { useState, useEffect } from 'react';

/* Tailwind CSS should be configured in your project */

const slImages = [
  'https://firebasestorage.googleapis.com/v0/b/sstrading-913ac.appspot.com/o/pom1-min.jpeg?alt=media&token=869ca673-9b07-44d8-8004-166eb849e92e',
  'https://firebasestorage.googleapis.com/v0/b/sstrading-913ac.appspot.com/o/pom2-min.jpeg?alt=media&token=b9871690-7e28-4a9b-a166-d874ab6d126a',
  'https://firebasestorage.googleapis.com/v0/b/sstrading-913ac.appspot.com/o/mango1-min.jpeg?alt=media&token=c3debf21-9aa4-4479-afa6-65de07fbdcf6',
  'https://firebasestorage.googleapis.com/v0/b/sstrading-913ac.appspot.com/o/mango2-min.jpeg?alt=media&token=a7ca650e-c5f0-4628-aeec-de6e871f26cf',
  'https://firebasestorage.googleapis.com/v0/b/sstrading-913ac.appspot.com/o/drag1-min.jpeg?alt=media&token=96e9c11e-586c-4999-a04c-786555723981',

];

const pineappleImages = [
  'https://firebasestorage.googleapis.com/v0/b/sstrading-913ac.appspot.com/o/pine2.jpeg?alt=media&token=aa12ac85-e64a-4366-ab6e-cde68da4065b',
  'https://firebasestorage.googleapis.com/v0/b/sstrading-913ac.appspot.com/o/pine-min.jpeg?alt=media&token=efbc9207-0360-4cac-8ce6-8114fd99a2ca',
  'https://firebasestorage.googleapis.com/v0/b/sstrading-913ac.appspot.com/o/avac1-min.jpeg?alt=media&token=c7935df1-07fd-4bd7-85c0-511f36bda738',
  'https://firebasestorage.googleapis.com/v0/b/sstrading-913ac.appspot.com/o/avac2-min.jpeg?alt=media&token=5156f0b1-cb7c-4305-b3da-1cd8444dcf8f'
];

const coconutImages = [
  'https://firebasestorage.googleapis.com/v0/b/sstrading-913ac.appspot.com/o/kc1-min.jpeg?alt=media&token=181df6db-6746-4c8e-ae11-0489ce0d171c',
  'https://firebasestorage.googleapis.com/v0/b/sstrading-913ac.appspot.com/o/kc3.jpeg?alt=media&token=f53e675e-13fa-4279-acfe-8b92312469c0',
  'https://firebasestorage.googleapis.com/v0/b/sstrading-913ac.appspot.com/o/coco1-min.jpeg?alt=media&token=a6e98eee-b225-47d8-a5c3-c486e5dd0691',
  'https://firebasestorage.googleapis.com/v0/b/sstrading-913ac.appspot.com/o/coco2-min.jpeg?alt=media&token=fced0f19-3765-4a75-917b-4399248756c1',
  'https://firebasestorage.googleapis.com/v0/b/sstrading-913ac.appspot.com/o/coco3-min.jpeg?alt=media&token=95639458-402c-4dc8-9ea3-c5ebe933bb66'
];

const papayaImages = [
  'https://firebasestorage.googleapis.com/v0/b/sstrading-913ac.appspot.com/o/kc2-min.jpeg?alt=media&token=fe2db803-8d96-454c-98e7-7e12995c912f',
  'https://firebasestorage.googleapis.com/v0/b/sstrading-913ac.appspot.com/o/pap1-min.jpeg?alt=media&token=56e107b6-02db-45fd-b13b-765ebb4927bf',
  'https://firebasestorage.googleapis.com/v0/b/sstrading-913ac.appspot.com/o/pap2-min.jpeg?alt=media&token=0f1bb915-4f7e-4a8c-a742-23541c0ae88a',
  'https://firebasestorage.googleapis.com/v0/b/sstrading-913ac.appspot.com/o/papaya1-min.jpeg?alt=media&token=177f83f5-89b6-4b6c-8969-4d53ad5ba89b',
  'https://firebasestorage.googleapis.com/v0/b/sstrading-913ac.appspot.com/o/papaya2-min.jpeg?alt=media&token=cbdbadfb-6e9f-4a66-a6ab-10058c911df4'
];

const vegImages = [
  'https://firebasestorage.googleapis.com/v0/b/sstrading-913ac.appspot.com/o/veg1-min.jpeg?alt=media&token=8e3e754f-e0e7-49d6-94d2-bf9d5c4e53a7',
  'https://firebasestorage.googleapis.com/v0/b/sstrading-913ac.appspot.com/o/veg2-min.jpeg?alt=media&token=46df4066-a3b9-47b1-9a29-6b8dac2e36ea',
  'https://firebasestorage.googleapis.com/v0/b/sstrading-913ac.appspot.com/o/cass-min.jpeg?alt=media&token=d37da9d2-69b1-41e1-860a-65840ca088f2',
  'https://firebasestorage.googleapis.com/v0/b/sstrading-913ac.appspot.com/o/cass1-min.jpeg?alt=media&token=3c699ee9-19d0-4f78-91e0-26724e59067c',
  'https://firebasestorage.googleapis.com/v0/b/sstrading-913ac.appspot.com/o/cass2-min.jpeg?alt=media&token=74d9c030-d0d5-469c-b290-c8b0cd05af9c',
  'https://firebasestorage.googleapis.com/v0/b/sstrading-913ac.appspot.com/o/cass-min.jpeg?alt=media&token=d37da9d2-69b1-41e1-860a-65840ca088f2',
  'https://firebasestorage.googleapis.com/v0/b/sstrading-913ac.appspot.com/o/cass1-min.jpeg?alt=media&token=3c699ee9-19d0-4f78-91e0-26724e59067c',
  'https://firebasestorage.googleapis.com/v0/b/sstrading-913ac.appspot.com/o/cass2-min.jpeg?alt=media&token=74d9c030-d0d5-469c-b290-c8b0cd05af9c',
  'https://firebasestorage.googleapis.com/v0/b/sstrading-913ac.appspot.com/o/leeks1-min.jpeg?alt=media&token=e59ed132-1b68-48d4-842f-d3ff45a78168'
];

const moreImages = [
'https://firebasestorage.googleapis.com/v0/b/sstrading-913ac.appspot.com/o/date1-min.jpeg?alt=media&token=a4805f69-f832-42e8-a682-1f50ffedc55a',
'https://firebasestorage.googleapis.com/v0/b/sstrading-913ac.appspot.com/o/garl1-min.jpeg?alt=media&token=1451b4ca-67ea-4fd3-b146-7cc9b20060c3',
'https://firebasestorage.googleapis.com/v0/b/sstrading-913ac.appspot.com/o/ging1-min.jpeg?alt=media&token=16c3a252-c23e-4793-9d7b-bdd660bfa384',
'https://firebasestorage.googleapis.com/v0/b/sstrading-913ac.appspot.com/o/ging2-min.jpeg?alt=media&token=fcf5db9f-5b5d-43ac-9680-123c0ac5234f',
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
        <Carousel images={slImages} title="Srilankan Fruits" />

        {/* Vegetable Carousel */}
        <Carousel images={pineappleImages} title="Fresh Pineapples & Avocado" />

        {/* Berry Carousel */}
        <Carousel images={coconutImages} title="King Coconuts & Young Coconuts" />

        {/* Leafy Greens Carousel */}
        <Carousel images={papayaImages} title="Srilankan Papaya" />

        <Carousel images={vegImages} title="Vegetables" />

        <Carousel images={moreImages} title="More" />
      </div>
    </div>
  );
};

export default Gallery;