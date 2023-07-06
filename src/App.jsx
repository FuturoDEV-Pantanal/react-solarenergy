import { BrowserRouter, Routes, Route } from "react-router-dom";
import Unidades from "./pages/unidades/Unidades";

export default function App() {
 return (
   <BrowserRouter>
     <Routes>
      <Route path="/" element={<Unidades />} />

      </Routes>
   </BrowserRouter>
 )
}
