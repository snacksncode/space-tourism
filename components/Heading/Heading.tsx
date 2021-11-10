import { FC, PropsWithChildren } from "react";

type HeadingLevel = 1 | 2 | 3 | 4 | 5;
interface HeadingProps {
  level: HeadingLevel;
}

const Element: FC<{ level: HeadingLevel; className: string }> = ({ level, className, children }) => {
  if (level === 1) return <h1 className={className}>{children}</h1>;
  else if (level === 2) return <h2 className={className}>{children}</h2>;
  else if (level === 3) return <h3 className={className}>{children}</h3>;
  else if (level === 4) return <h4 className={className}>{children}</h4>;
  else if (level === 5) return <h5 className={className}>{children}</h5>;
  else return <p className={className}>{children}</p>;
};

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
  return (
    <Element level={level} className={classes}>
      {text}
    </Element>
  );
};

export default Heading;
