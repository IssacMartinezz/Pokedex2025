
import React from 'react';
import { Outlet } from "react-router-dom"; 

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";


export const Layout = () => {
  return (
    <section className="flex flex-col min-h-screen w-full">
      <Header /> 
      
      <main className="flex-1">
        <Outlet />
      </main>
      
      <Footer /> 
    </section>
  );
};