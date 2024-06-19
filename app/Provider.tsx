import React from "react";
import { Header } from "./_components/Header";

export const Provider = ({ children }: any) => {
  return (
    <div>
      <Header />
      <div className="mt-28">{children}</div>
    </div>
  );
};
