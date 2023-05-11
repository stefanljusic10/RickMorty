import React from "react";
import Header from "./components/Header/Header";
import "./app.scss";
import Landing from "./pages/Landing/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Episode from "./pages/Episode/Episode";
import Character from "./pages/Character/Character";
import { PATH } from "./constants/constants";
import Error from "./pages/Error/Error";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path={PATH.index} element={<Header />}>
            <Route index element={<Landing />} />
            <Route path={PATH.character + "/:characterId"} element={<Character />}>
              <Route path={PATH.episode + "/:episodeId"} element={<Episode />}/>
            </Route>
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
