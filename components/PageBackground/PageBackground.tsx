import Image from "next/image";
import styles from "./PageBackground.module.scss";
import { FC } from "react";
import classNames from "classnames";

type ImageSizes = "sm" | "md" | "lg";
interface Props {
  images: Record<ImageSizes, string>;
}

const PageBackground: FC<Props> = ({ images }) => {
  return (
    <>
      {(["sm", "md", "lg"] as ImageSizes[]).map((imgSize) => {
        const classes = classNames(styles.wrapper, styles[`wrapper--${imgSize}`]);
        const url = images[imgSize];
        return (
          <div key={imgSize} className={classes}>
            <Image src={url} loading="eager" layout="fill" objectFit="cover" quality={100} alt="Page Background" />
          </div>
        );
      })}
    </>
  );
};

export default PageBackground;
