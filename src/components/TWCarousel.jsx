import { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from 'react-icons/rx';

{
/*
Images approx 800x500

In parent component function - (name each imported image as "slide 1" "slide2" etc)

let slideList = [{
  id: 0,
  slide: slide1
  }, {
  id: 1,
  slide: slide2
  }, {
  id: 2,
  slide: slide3
  }, {
  id: 3,
  slide: slide4
  }, {
  id: 4,
  slide: slide5
},

In parent return section - 

<Carousel2 autoSlide={false}>
  {slideList.map((s) => (
    <img src={s.slide} key={s.id} />
  ))}
</Carousel2>
*/
}

function Carousel2( { children:slides , autoSlide = false, autoSlideInterval = 7000} ) {

  const [curr, setCurr] = useState(0);

  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if(!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])

  const goToSlide = (slideIndex) => {
    setCurr(slideIndex);
  };

  return (
    <div className="pt-12 pb-12 bg-sky-700/70">
      <div className="overflow-hidden relative rounded-none w-[100%] sm:rounded-2xl sm:w-[90%] md:w-[60%] m-auto max-w-[800px]">
        <div className="flex transtiton-transform ease-out duration-600" style={{ transform: `translateX(-${curr * 100}%)` }}>
          {slides}
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button onClick={prev} className="p-1 rounded-full shadow bg-black/20 text-white hover:bg-white/20 text-2xl">
            <BsChevronCompactLeft />
          </button>
          <button onClick={next} className="p-1 rounded-full shadow bg-black/20 text-white hover:bg-white/20 text-2xl">
            <BsChevronCompactRight />
          </button>
        </div>
        <div className="absolute bottom-4 right-0 left-0">
          <div className="flex items-center justify-center gap-2">
            {slides.map((slide, slideIndex) => (
            <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className="text-2xl cursor-pointer">
              <RxDotFilled className={`${slideIndex === curr ? "text-white" : "text-white/50"}`}/>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>

  )
}

export default Carousel2