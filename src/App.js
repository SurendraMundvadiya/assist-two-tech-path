import React, { lazy } from "react";
import "./App.css";
const ComentsPage = lazy(() => import("../src/components/ComentsPage"));

const App = () => {
    return (
        <div className="h-screen w-screen flex justify-center items-center ">
            <ComentsPage />
        </div>
    );
};

export default App;
