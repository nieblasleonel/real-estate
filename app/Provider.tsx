import React from "react";
import { Header } from "./_components/Header";

export const Provider = ({ children }: any) => {
  return <div>
    <Header/>  
      
     {children}
   
  </div>;
};
