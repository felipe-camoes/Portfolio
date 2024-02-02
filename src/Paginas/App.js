import Layout from "./Layout"
import Pdv from "./Pdv"

import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} ></Route>
          <Route path="/pdv" element={<Pdv />} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

