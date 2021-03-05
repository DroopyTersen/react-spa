import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import { HomeScreen } from "../features/Home/HomeScreen";
import AboutScreen from "../features/About/AboutScreen";
import MoviesScreen from "@features/Movies/MoviesScreen";
import MoviesLayout from "@features/Movies/MoviesLayout";
import MovieDetailsScreen from "@features/Movies/MovieDetailsScreen";
import ActorsLayout from "@features/Actors/ActorsLayout";
import ActorDetailsScreen from "@features/Actors/ActorDetailsScreen";
import ActorsScreen from "@features/Actors/ActorsScreen";

export default function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="*" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />

          <Route path="/movies" element={<MoviesLayout />}>
            <Route path="/" element={<MoviesScreen />} />
            <Route path=":id" element={<MovieDetailsScreen />} />
          </Route>

          <Route path="/actors" element={<ActorsLayout />}>
            <Route path="/" element={<ActorsScreen />} />
            <Route path=":id" element={<ActorDetailsScreen />} />
          </Route>
        </Routes>
      </main>
    </Router>
  );
}
