import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppContext from "@context/AppContext";
import useGlobalState from "@hooks/useGlobalState";
import Layout from "@containers/Layout";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import "@styles/global.css";

const App = () => {
  const globalState = useGlobalState();

  return (
    <AppContext.Provider value={globalState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
