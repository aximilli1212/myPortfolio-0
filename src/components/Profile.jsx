import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";


const Profile = () => {
  return (
      <div className={`mt-12 bg-tertiary rounded-[20px]`}>
          <div className={`-mt-20 ${styles.paddingX} flex flex-wrap gap-7`}>
            <div className="flex flex-row p-12">
                <img className="inline-block h-100 w-100 rounded-full ring-2 ring-black" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            </div>
        </div>
      </div>
  );
};

export default SectionWrapper(Profile, "");
