import classNames from "classnames";
import Image from "next/image";
import { FC } from "react";

interface NavigationProps {
  number: string;
  active?: boolean;
  __fakeHover?: boolean;
}

const NavigationItem: FC<NavigationProps> = ({ children, number, active, __fakeHover }) => {
  const classes = classNames("uppercase", "text-white", {
    active: active != null,
    "fake-hover": __fakeHover != null,
  });
  return (
    <li className={classes}>
      <a className="flex letter-spacing-md">
        <span>{number}</span>
        {children}
        {__fakeHover != null && (
          <div className="fake-pointer" style={{ bottom: 20, right: 5 }}>
            <Image src="/assets/pointer.svg" width={30} height={30} alt="fake pointer" />
          </div>
        )}
      </a>
    </li>
  );
};

export default NavigationItem;
