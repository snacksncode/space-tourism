import { FC } from "react";

type SubHeadingLevel = 1 | 2;
interface SubHeadingProps {
  level: SubHeadingLevel;
}

const SubHeading: FC<SubHeadingProps> = ({ level, children: text }) => {
  const getClassesByLevel = (level: SubHeadingLevel): string => {
    switch (level) {
      case 1:
        return "fs-500 ff-serif uppercase";
      case 2:
        return "fs-200 ff-sans-cond uppercase letter-spacing-sm";
    }
  };
  const classes = getClassesByLevel(level);
  return <p className={classes}>{text}</p>;
};

export default SubHeading;
