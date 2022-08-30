import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import AdminHomePage from "../Pages/AdminHomePage/AdminHomePage";
import ApplicationFormPage from '../Pages/ApplicationFormPage/ApplicationFormPage'
import CreateTripPage from "../Pages/CreateTripPage/CreateTripPage";
import HomePage from "../Pages/HomePage/HomePage";
import ListTripsPage from '../Pages/ListTripsPage/ListTripsPage'
import LoginPage from '../Pages/LoginPage/LoginPage'
import TripDetailsPage from "../Pages/TripDetailsPage/TripDetailsPage";

function Router () {
    return (
        
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/adm" element={<AdminHomePage />} />
                <Route path="/trips/list" element={ <ListTripsPage />} />
                <Route path="/trips/application" element={<ApplicationFormPage/>} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/adm/trips/create" element={<CreateTripPage/>} />
                <Route path="/adm/trips/:id" element={<TripDetailsPage />} />
            </Routes>
        </BrowserRouter>
        
    )
}

export default Router;