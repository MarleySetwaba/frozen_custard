import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

export const Carousel = () => {

  const slides = [
    {
      url: 'https://pro2-bar-s3-cdn-cf6.myportfolio.com/e796117594a6ae2b35d9890ece36b9a7/02ef7a052f6325221d1b3da4_rw_1920.jpg?h=41368cd91bffe15270f2536d6045cb52',
    },
    {
      url: 'https://pro2-bar-s3-cdn-cf.myportfolio.com/e796117594a6ae2b35d9890ece36b9a7/b13e1b1fd717f47293753165_rw_1920.jpg?h=b9423e062ad19565813434d0394d8a33',
    },
    {
      url: 'https://pro2-bar-s3-cdn-cf2.myportfolio.com/e796117594a6ae2b35d9890ece36b9a7/d208c5bc759402707042b2af_rw_1920.jpg?h=c9309eddb3b8b83a57d9e8eea7d8f2b4',
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group mt-5'>
    <div
      style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
    ></div>
    {/* Left Arrow */}
    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
      <BsChevronCompactLeft onClick={prevSlide} size={30} />
    </div>
    {/* Right Arrow */}
    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
      <BsChevronCompactRight onClick={nextSlide} size={30} />
    </div>
    <div className='flex top-4 justify-center py-2'>
      {slides.map((slide, slideIndex) => (
        <div
          key={slideIndex}
          onClick={() => goToSlide(slideIndex)}
          className='text-2xl cursor-pointer'
        >
          <RxDotFilled />
        </div>
      ))}
    </div>
  </div>
  )
}

export default Carousel