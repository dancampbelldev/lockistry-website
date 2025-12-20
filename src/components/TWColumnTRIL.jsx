import { useEffect, useRef, useState } from "react";

function ColumnTRIL(props) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // animate once
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="flex w-full bg-sky-950 text-white"
    >
      <div className="flex flex-col-reverse sm:flex-row w-full">

        {/* Image (static) */}
        <div className="flex basis-full justify-center items-center">
          <img
            src={props.image}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text (animated on scroll) */}
        <div className="basis-full flex flex-col justify-center items-center py-10">

          <h2
            className={`
              text-2xl lg:text-3xl font-semibold text-center px-5
              motion-safe:transition-all
              motion-safe:duration-[1400ms]
              motion-safe:ease-out
              ${visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"}
            `}
          >
            {props.title}
          </h2>

          <p
            className={`
              w-[90%] mt-8 text-lg lg:text-xl font-light leading-relaxed
              motion-safe:transition-all
              motion-safe:duration-[1400ms]
              motion-safe:ease-out
              motion-safe:delay-300
              ${visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"}
            `}
          >
            {props.paragraph1}
          </p>

          <p
            className={`
              w-[90%] mt-6 text-lg lg:text-xl font-light leading-relaxed
              motion-safe:transition-all
              motion-safe:duration-[1400ms]
              motion-safe:ease-out
              motion-safe:delay-600
              ${visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"}
            `}
          >
            {props.paragraph2}
          </p>

        </div>
      </div>
    </section>
  );
}

export default ColumnTRIL;