import classNames from "classnames";
import { FC } from "react";

type ParagraphColor = "white" | "accent";
interface ParagraphProps {
  color: ParagraphColor;
  className?: string;
}

const Paragraph: FC<ParagraphProps> = ({ color, className, children: text }) => {
  const getColorClass = (color: ParagraphColor): string => {
    switch (color) {
      case "white":
        return "text-white";
      case "accent":
        return "text-accent";
    }
  };
  const classes = classNames(getColorClass(color), {
    [className as string]: className != null,
  });
  return <p className={classes}>{text}</p>;
};

export default Paragraph;
