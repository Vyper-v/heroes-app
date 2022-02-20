import React from "react";
import { Route, Routes } from "react-router-dom";
import { DCScreen } from "../components/dc/DCScreen";
import { Hero } from "../components/hero/Hero";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { Navbar } from "../components/ui/NavBar";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <Routes>
          <Route path="marvel" element={<MarvelScreen />} />
          <Route path="dc" element={<DCScreen />} />
          <Route path="search" element={<SearchScreen />} />
          <Route path="hero/:id" element={<Hero />} />
          <Route path="/" element={<MarvelScreen />} />
        </Routes>
      </div>
    </>
  );
};
