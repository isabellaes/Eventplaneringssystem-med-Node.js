import { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventDetailPage from "./pages/event-detail/EventDetailPage";
import CreateEventPage from "./pages/create-event/CreateEventPage";
import Header from "./components/header/Header";

function App() {
  return (
    <>
    <Header/>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/eventdetail/:Id" element={<EventDetailPage />} />
          <Route path="/createevent" element={<CreateEventPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
