import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from "./HomePage";

function Router () {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router;