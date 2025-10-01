import clsx from "clsx";
import { Children } from "react";

const Grid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={clsx(
        "mx-auto px-2 mt-2 grid auto-rows-fr gap-8 xsm:mt-20 xl:max-w-none",
        "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
      )}
    >
      {Children.map(children, (child, idx) => {
        return <div key={idx}>{child}</div>;
      })}
    </div>
  );
};

export default Grid;
