import { ReactNode, useEffect } from "react";

export const Button = ({children}: {children: ReactNode}) => {
  useEffect(() => {
    console.log("Boop");
  });
  return (
    <div className="p-2 m-2 text-indigo-700 bg-white border border-black rounded">
      {children}
    </div>
  );
};
