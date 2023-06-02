import React from "react";
import "./index.css";

import Home from "./routes/Home";
import Discover from "./routes/Discover";
import Live from "./routes/Live";
import Jobs from "./routes/Jobs";
import Share from "./routes/Share";
import Alert from "./routes/Alert";
import Profile from "./routes/Profile";
import AdobeC from "./routes/AdobeC";
import Message from "./routes/Message";

import {Route, Routes} from "react-router-dom";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/live" element={<Live />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/share" element={<Share />} />
        <Route path="/Alert" element={<Alert />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/adobec" element={<AdobeC />} />
        <Route path="/message" element={<Message />} />
      </Routes>
    </>
  );
}

export default App;
