"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../../lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.3
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate("span", {
      opacity: 1,
      filter: filter ? "blur(0px)" : "none",
    }, {
      duration: duration ? duration : 1,
      delay: stagger(0.15),
    });
  }, [scope.current]);

  const renderWords = () => {
    return (
      (<motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            (<motion.span
              key={word + idx}
              className="text-[#4c4c4c] opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}>
              {word}{" "}
            </motion.span>)
          );
        })}
      </motion.div>)
    );
  };

  return (
    (<div className={cn("", className)}>
      <div className="">
        <div
          className="text-base lg:text-lg logoFont  mb-8 lg:mb-16 ">
          {renderWords()}
        </div>
      </div>
    </div>)
  );
};
