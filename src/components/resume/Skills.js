import React from "react";
import { motion } from "framer-motion";

export const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      className="w-full flex flex-col gap-10 lgl:flex-row lgl:gap-20"
    >
      <div className="w-full lgl:w-1/4">
        <div className="xs:py-0 lgl:pt-10  font-titleFont">
          <h4 className="text-3xl md:text-xl font-bold">Web Technologies</h4>
        </div>
        <div className="mt-14 w-full flex flex-col">
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium text-designColor">
              HTML
            </p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r bg-white rounded-lg relative"
              >
                <span className="absolute -top-7 right-0 text-designColor">
                  100%
                </span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium text-designColor">
              CSS
            </p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[100%] h-full bg-gradient-to-r bg-white rounded-lg relative"
              >
                <span className="absolute -top-7 right-0 text-designColor">
                  100%
                </span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium text-designColor">
              SASS
            </p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[80%] h-full bg-gradient-to-r bg-white rounded-lg relative"
              >
                <span className="absolute -top-7 right-0 text-designColor">
                  80%
                </span>
              </motion.span>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full lgl:w-1/4">
        <div className="xs:py-0 lgl:pt-10 font-titleFont">
          <h4 className="text-3xl md:text-xl font-bold">Languages</h4>
        </div>
        <div className="mt-14 w-full flex flex-col">
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium text-designColor">
              JavaScript
            </p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[90%] h-full bg-gradient-to-r bg-white rounded-lg relative"
              >
                <span className="absolute -top-7 right-0 text-designColor">
                  90%
                </span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium text-designColor">
              TypeScript
            </p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[80%] h-full bg-gradient-to-r bg-white rounded-lg relative"
              >
                <span className="absolute -top-7 right-0 text-designColor">
                  80%
                </span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium text-designColor">
              PHP
            </p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[90%] h-full bg-gradient-to-r bg-white rounded-lg relative"
              >
                <span className="absolute -top-7 right-0 text-designColor">
                  90%
                </span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium text-designColor">
              Java
            </p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[80%] h-full bg-gradient-to-r bg-white rounded-lg relative"
              >
                <span className="absolute -top-7 right-0 text-designColor">
                  80%
                </span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium text-designColor">
              SQL
            </p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[95%] h-full bg-gradient-to-r bg-white rounded-lg relative"
              >
                <span className="absolute -top-7 right-0 text-designColor">
                  95%
                </span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium text-designColor">
              Python
            </p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[70%] h-full bg-gradient-to-r bg-white rounded-lg relative"
              >
                <span className="absolute -top-7 right-0 text-designColor">
                  70%
                </span>
              </motion.span>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full lgl:w-1/4">
        <div className="xs:py-0 lgl:pt-10  font-titleFont">
          <h4 className="text-3xl md:text-xl font-bold">
            Libraries/Frameworks
          </h4>
        </div>
        <div className="mt-14 w-full flex flex-col">
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium text-designColor">
              React.js
            </p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[100%] h-full bg-gradient-to-r bg-white rounded-lg relative"
              >
                <span className="absolute -top-7 right-0 text-designColor">
                  100%
                </span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium text-designColor">
              Angular
            </p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[70%] h-full bg-gradient-to-r bg-white rounded-lg relative"
              >
                <span className="absolute -top-7 right-0 text-designColor">
                  70%
                </span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium text-designColor">
              Next.js
            </p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[85%] h-full bg-gradient-to-r bg-white rounded-lg relative"
              >
                <span className="absolute -top-7 right-0 text-designColor">
                  85%
                </span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium text-designColor">
              Node.js
            </p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[85%] h-full bg-gradient-to-r bg-white rounded-lg relative"
              >
                <span className="absolute -top-7 right-0 text-designColor">
                  85%
                </span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium text-designColor">
              Express.js
            </p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[85%] h-full bg-gradient-to-r bg-white rounded-lg relative"
              >
                <span className="absolute -top-7 right-0 text-designColor">
                  85%
                </span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium text-designColor">
              Tailwind CSS
            </p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[90%] h-full bg-gradient-to-r bg-white rounded-lg relative"
              >
                <span className="absolute -top-7 right-0 text-designColor">
                  90%
                </span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium text-designColor">
              BootStrap 5
            </p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[70%] h-full bg-gradient-to-r bg-white rounded-lg relative"
              >
                <span className="absolute -top-7 right-0 text-designColor">
                  70%
                </span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium text-designColor">
              jQuery
            </p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[70%] h-full bg-gradient-to-r bg-white rounded-lg relative"
              >
                <span className="absolute -top-7 right-0 text-designColor">
                  70%
                </span>
              </motion.span>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full lgl:w-1/4">
        <div className="xs:py-0 lgl:pt-10  font-titleFont">
          <h4 className="text-3xl md:text-xl font-bold">
            CMS / Design / Tools
          </h4>
        </div>
        <div className="mt-14 w-full flex flex-col">
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium text-designColor">
              WordPress
            </p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[80%] h-full bg-gradient-to-r bg-white rounded-lg relative"
              >
                <span className="absolute -top-7 right-0 text-designColor">
                  80%
                </span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium text-designColor">
              Joomla
            </p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[80%] h-full bg-gradient-to-r bg-white rounded-lg relative"
              >
                <span className="absolute -top-7 right-0 text-designColor">
                  80%
                </span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium text-designColor">
              Adobe Photoshop
            </p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[90%] h-full bg-gradient-to-r bg-white rounded-lg relative"
              >
                <span className="absolute -top-7 right-0 text-designColor">
                  90%
                </span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium text-designColor">
              Figma
            </p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[80%] h-full bg-gradient-to-r bg-white rounded-lg relative"
              >
                <span className="absolute -top-7 right-0 text-designColor">
                  80%
                </span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium text-designColor">
              Git
            </p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[90%] h-full bg-gradient-to-r bg-white rounded-lg relative"
              >
                <span className="absolute -top-7 right-0 text-designColor">
                  90%
                </span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium text-designColor">
              GitHub
            </p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[90%] h-full bg-gradient-to-r bg-white rounded-lg relative"
              >
                <span className="absolute -top-7 right-0 text-designColor">
                  90%
                </span>
              </motion.span>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
