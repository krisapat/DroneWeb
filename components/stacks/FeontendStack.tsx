'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type Skill = {
  name: string;
  image: string;
};

interface FrontendStackProps {
  skills: Skill[];
}

const FrontendStack: React.FC<FrontendStackProps> = ({ skills }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="flex flex-col items-center justify-center text-black dark:text-white">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{
              duration: 0.5,
              delay: index * 0.05,
              ease: 'easeOut',
            }}
            className="flex flex-col items-center"
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="w-16 h-16 object-contain mb-2"
            />
            <span className="quicksand-quicksand text-sm">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FrontendStack;
