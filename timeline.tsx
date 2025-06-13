"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="flex flex-col overflow-hidden bg-gradient-to-b from-background to-blue-50/20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center text-center px-4 py-20 md:py-5"
        >
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground dark:text-white font-poppins leading-tight">
            Our Journey in <br />
            <span className="text-4xl md:text-[6rem] font-bold mt-4 leading-none gradient-text font-poppins">
              Google My Business Excellence
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-3xl font-inter leading-relaxed">
            Track record of transforming local businesses through strategic GMB optimization.
          </p>
        </motion.div>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            {/* Desktop sticky title section */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <div className="hidden md:flex flex-col md:pl-20">
                <h3 className="text-xl md:text-5xl font-bold text-neutral-500 dark:text-neutral-500">
                  {item.title}
                </h3>
                {index === 0 && (
                  <>
                    <p className="mt-2 text-neutral-400 dark:text-neutral-600">
                      Descriptive paragraph for the first timeline entry.
                    </p>
                    <img
                      src="first-image-url.jpg"
                      alt="First timeline image description"
                      className="mt-2 w-full max-w-xs rounded-lg"
                    />
                  </>
                )}
                {index === 1 && (
                  <>
                    <p className="mt-2 text-neutral-400 dark:text-neutral-600">
                      Descriptive paragraph for the second timeline entry.
                    </p>
                    <img
                      src="second-image-url.jpg"
                      alt="Second timeline image description"
                      className="mt-2 w-full max-w-xs rounded-lg"
                    />
                  </>
                )}
                {index === 2 && (
                  <>
                    <p className="mt-2 text-neutral-400 dark:text-neutral-600">
                      Descriptive paragraph for the third timeline entry.
                    </p>
                    <img
                      src="third-image-url.jpg"
                      alt="Third timeline image description"
                      className="mt-2 w-full max-w-xs rounded-lg"
                    />
                  </>
                )}
              </div>
            </div>

            {/* Mobile title and content section */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {index === 0 && (
                <>
                  <p className="md:hidden text-sm text-neutral-400 dark:text-neutral-600 mb-4">
                    Descriptive paragraph for the first timeline entry.
                  </p>
                  <img
                    src="first-image-url.jpg"
                    alt="First timeline image description"
                    className="md:hidden mt-2 w-full max-w-xs rounded-lg mb-4"
                  />
                </>
              )}
              {index === 1 && (
                <>
                  <p className="md:hidden text-sm text-neutral-400 dark:text-neutral-600 mb-4">
                    Descriptive paragraph for the second timeline entry.
                  </p>
                  <img
                    src="second-image-url.jpg"
                    alt="Second timeline image description"
                    className="md:hidden mt-2 w-full max-w-xs rounded-lg mb-4"
                  />
                </>
              )}
              {index === 2 && (
                <>
                  <p className="md:hidden text-sm text-neutral-400 dark:text-neutral-600 mb-4">
                    Descriptive paragraph for the third timeline entry.
                  </p>
                  <img
                    src="third-image-url.jpg"
                    alt="Third timeline image description"
                    className="md:hidden mt-2 w-full max-w-xs rounded-lg mb-4"
                  />
                </>
              )}
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[50%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_50%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
