import { Link } from "react-router-dom";

function CircleRow1({
  image1, title1, href1,
  image2, title2, href2,
  image3, title3, href3,
  image4, title4, href4
}) {
  return (
    <section className="flex justify-center items-center">
      <div className="flex flex-col gap-6 md:flex-row py-12 px-8 bg-sky-950 w-full justify-center items-center">

        {/* Row 1 */}
        <div className="flex gap-6">
          {[{ image: image1, title: title1, href: href1 },
            { image: image2, title: title2, href: href2 }].map((item, index) => (
            <div key={index} className="flex flex-col items-center group">
              <Link to={item.href} className="cursor-pointer">
                <img
                  src={item.image}
                  alt=""
                  className="
                    rounded-full
                    outline outline-2 outline-sky-700
                    transition-all duration-300
                    brightness-90
                    group-hover:brightness-100
                    group-hover:outline-sky-500
                    group-hover:shadow-lg
                    group-hover:shadow-black/30
                  "
                />
              </Link>
              <h3
                className="
                  pt-3
                  text-white
                  lg:text-lg
                  transition-colors
                  duration-300
                  group-hover:text-sky-300
                "
              >
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex gap-6">
          {[{ image: image3, title: title3, href: href3 },
            { image: image4, title: title4, href: href4 }].map((item, index) => (
            <div key={index} className="flex flex-col items-center group">
              <Link to={item.href} className="cursor-pointer">
                <img
                  src={item.image}
                  alt=""
                  className="
                    rounded-full
                    outline outline-2 outline-sky-700
                    transition-all duration-300
                    brightness-90
                    group-hover:brightness-100
                    group-hover:outline-sky-500
                    group-hover:shadow-lg
                    group-hover:shadow-black/30
                  "
                />
              </Link>
              <h3
                className="
                  pt-3
                  text-white
                  lg:text-lg
                  transition-colors
                  duration-300
                  group-hover:text-sky-300
                "
              >
                {item.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default CircleRow1;