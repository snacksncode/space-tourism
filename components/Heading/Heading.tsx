import classNames from "classnames";
import { FC } from "react";

type HeadingLevel = 1 | 2 | 3 | 4 | 5;
interface HeadingProps {
  level?: HeadingLevel;
  forceStyleLevel?: HeadingLevel;
  className?: string;
}

const Heading: FC<HeadingProps> = ({ level, forceStyleLevel, className, children: text }) => {
  const getClassesByLevel = (level?: HeadingLevel): string => {
    if (level == null) return "";
    switch (level) {
      case 1:
        return "fs-900 text-white ff-serif uppercase";
      case 2:
        return "fs-800 text-white ff-serif uppercase";
      case 3:
        return "fs-700 text-white ff-serif uppercase";
      case 4:
        return "fs-600 text-white ff-serif uppercase";
      case 5:
        return "fs-500 text-accent letter-spacing-lg ff-sans-cond uppercase";
    }
  };
  const getRootElement = (level: HeadingLevel) => {
    switch (level) {
      case 1:
        return "h1";
      case 2:
        return "h2";
      case 3:
        return "h3";
      case 4:
        return "h4";
      case 5:
        return "h5";
    }
  };
  const headingClasses = getClassesByLevel(forceStyleLevel != null ? forceStyleLevel : level);
  const classes = classNames(headingClasses, {
    [className as string]: className != null,
  });
  const RootElement = level ? getRootElement(level) : "span";
  return <RootElement className={classes}>{text}</RootElement>;
};

export default Heading;
