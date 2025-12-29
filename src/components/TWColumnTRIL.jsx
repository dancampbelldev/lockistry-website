import { useEffect, useRef, useState } from "react";

function Reveal({ children, delay = 0, threshold = 0.2 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // reveal once
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`
        w-full flex flex-col items-center
        motion-safe:transition-all
        motion-safe:duration-[1000ms]
        motion-safe:ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function ColumnTRIL(props) {
  return (
    <section ref={props.forwardedRef} className="flex w-full bg-sky-950 text-white">
      <div className="flex flex-col-reverse sm:flex-row w-full">
        {/* Image (static) */}
        <div className="flex basis-full justify-center items-center">
          <img
            src={props.image}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text (reveals on scroll, per-element) */}
        <div className="basis-full flex flex-col justify-center items-center py-10">
          <Reveal delay={0}>
            <h2 className="text-2xl lg:text-3xl font-semibold text-center px-5">
              {props.title}
            </h2>
          </Reveal>

          <Reveal delay={150}>
            <p className="w-[90%] mt-8 text-lg lg:text-xl font-light leading-relaxed">
              {props.paragraph1}
            </p>
          </Reveal>

          <Reveal delay={250}>
            <p className="w-[90%] mt-6 text-lg lg:text-xl font-light leading-relaxed">
              {props.paragraph2}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default ColumnTRIL;