


function TWHeaderParallax1(props) {

  

  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      <img src={props.image} alt="" className="fixed top-0 left-0 -z-10 w-full h-screen object-cover object-center motion-blur-in motion-duration-[5s]" />
      <h1 className="text-white text-center text-7xl md:text-8xl mt-24 font-semibold opacity-80 motion-scale-in-50 motion-duration-2500/scale motion-opacity-in-0 -motion-translate-y-in-100">{props.title}</h1>
      <p className="text-white md:text-lg lg:text-xl pt-4">{props.tagline}</p>
    </div>
  )
}

export default TWHeaderParallax1