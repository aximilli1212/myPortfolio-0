import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import {fadeIn, textVariant} from "../utils/motion";


const Profile = () => {
  return (
      <div className="mt-2 p-8 bg-tertiary rounded-[20px] flex flex-wrap md:flex-nowrap justify-between items-center">
          <div className="w-full md:w-auto md:mr-4">
              <img
                  className="h-30 w-30 rounded-full ring-2 ring-primary object-cover"
                  src="src/assets/profile.png"
                  alt=""
              />
          </div>
          <div className="w-full md:w-auto text-center md:text-left">
              <motion.div variants={textVariant()}>
                  <h2 className={styles.sectionHeadText}>Who am i ?</h2>
              </motion.div>

              <motion.p
                  variants={fadeIn("", "", 0.1, 1)}
                  className="mt-4 text-secondary text-17 max-w-3xl leading-30"
              >
                  I'm a skilled software developer with experience in Javascript, Typescript, Golang, Flutter and PHP.
                  I also have expertise in frameworks like React, VueJS, Node.js, and Three.js.
                  <br />
                  <br />
                  My diverse skill set, collaborative nature, and unwavering dedication to
                  delivering exceptional customer experiences make me a valuable asset to any development team.
                  Let's connect and explore how my expertise can contribute to your project.
              </motion.p>
          </div>
      </div>
  );
};

export default SectionWrapper(Profile, "");
