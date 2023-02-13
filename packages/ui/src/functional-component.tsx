import { ReactNode } from "react";

export const FunctionalComponent = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="text-indigo-500 bg-green-400">{children}</div>
    </>
  );
};
