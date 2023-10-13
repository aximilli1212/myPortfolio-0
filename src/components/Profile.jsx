import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import {fadeIn, textVariant} from "../utils/motion";


const Profile = () => {
  return (
      <div className={`mt-2 p-8 bg-tertiary rounded-[20px] flex justify-between`}>
          <div>
                <img className="inline-block h-120 w-120 rounded-full ring-2 ring-black" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
          </div>
          <div className="p-2">
              <motion.div variants={textVariant()}>
                  <h2 className={styles.sectionHeadText}>Who am i ?</h2>
              </motion.div>

              <motion.p
                  variants={fadeIn("", "", 0.1, 1)}
                  className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
              >
                  I'm a skilled software developer with experience in TypeScript and
                  JavaScript, and expertise in frameworks like React, Node.js, and
                  Three.js. I'm a quick learner and collaborate closely with clients to
                  create efficient, scalable, and user-friendly solutions that solve
                  real-world problems. Let's work together to bring your ideas to life!
              </motion.p>
          </div>
      </div>
  );
};

export default SectionWrapper(Profile, "");
