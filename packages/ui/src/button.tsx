import { ReactNode, useEffect } from "react";

export const Button = ({children}: {children: ReactNode}) => {
  useEffect(() => {
    console.log("Boop");
  });
  return (
    <div className="p-2 m-2 text-indigo-700 bg-green-300 border border-black rounded">
      {children}
    </div>
  );
};
