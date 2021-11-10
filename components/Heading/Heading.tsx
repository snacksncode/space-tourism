import { FC } from "react";

type HeadingLevel = 1 | 2 | 3 | 4 | 5;
interface HeadingProps {
  level: HeadingLevel;
}

const Heading: FC<HeadingProps> = ({ level, children: text }) => {
  const getClassesByLevel = (level: HeadingLevel): string => {
    switch (level) {
      case 1:
        return "fs-900 ff-serif uppercase";
      case 2:
        return "fs-800 ff-serif uppercase";
      case 3:
        return "fs-700 ff-serif uppercase";
      case 4:
        return "fs-600 ff-serif uppercase";
      case 5:
        return "fs-500 text-accent letter-spacing-lg ff-sans-cond uppercase";
    }
  };
  const classes = getClassesByLevel(level);
  return <p className={classes}>{text}</p>;
};

export default Heading;
