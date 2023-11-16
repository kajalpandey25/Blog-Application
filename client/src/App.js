import "./App.css";

import DataProvider from "./context/DataProvider";

import{ BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Login from "./components/account/Login";
import Home from "./components/home/Home";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
      <div style={{ marginTop: 64 }}>
        <Routes>
          <Route path="/login" element={<Login/>} />
         <Route path="/" element={<Home />} />
        </Routes>
      </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
