import Image, { StaticImageData } from "next/image";
import styles from "./PageBackground.module.scss";
import { FC } from "react";
import classNames from "classnames";

type ImageSizes = "sm" | "md" | "lg";
interface Props {
  images: Record<ImageSizes, StaticImageData>;
}

const PageBackground: FC<Props> = ({ images }) => {
  return (
    <>
      {(["sm", "md", "lg"] as ImageSizes[]).map((imgSize) => {
        const classes = classNames(styles.wrapper, styles[`wrapper--${imgSize}`]);
        const url = images[imgSize];
        return (
          <div key={imgSize} className={classes}>
            <Image src={url} alt="" placeholder="blur" layout="fill" objectFit="cover" quality={70} priority />
          </div>
        );
      })}
    </>
  );
};

export default PageBackground;
