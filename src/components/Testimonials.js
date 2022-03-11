import { testimonial } from "../data";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
const Testimonials = () => {
  const [width, setWidth] = useState(0);

  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <section
      id="testimonials"
      style={{
        background:
          "url('/images/infinite-loop-02.jpg') center center/cover fixed",
      }}
      className="h-screen text-white pad-nav flex flex-col items-center text-center mb-40"
    >
      <h2 className="text-[41px] mt-28">Testimonials</h2>
      <p className="mt-10 text-sm leading-7">
        Nulla dictum sem non eros euismod, eu placerat tortor lobortis.
        Suspendisse id velit eu libero <br />
        pellentesque interdum. Etiam quis congue eros.
      </p>
      <motion.div
        ref={carousel}
        className="cursor-grab overflow-hidden max-w-sm lg:max-w-6xl mt-20 "
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-20 px-10 lg:px0"
        >
          {testimonial.map((person) => {
            return (
              <motion.article key={person.id} className="min-w-[20rem]">
                <img
                  src={person.image}
                  className="rounded-full mx-auto pointer-events-none"
                />
                <blockquote className="lg:text-left mt-10">
                  {person.description}
                </blockquote>
                <i className="inline-block mt-10">{person.author}</i>
              </motion.article>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
