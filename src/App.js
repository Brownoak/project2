import React, { Component, Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
// import AppFooter from "./components/AppFooter";
// import AppLayout from "./layout/AppLayout";
import "./scss/style.scss";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);
const DefaultLayout = React.lazy(() => import("./layout/AppLayout"));

function App() {
  return (
    <HashRouter>
      <Suspense fallback={loading}>
        <Routes>
          <Route path="*" name="Home" element={<DefaultLayout />} />
          <Route path="/hello" />
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default App;
