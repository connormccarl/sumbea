import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout"
import Home from "./pages/Home";
import RadiationPDF from "./pages/RadiationPDF"

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pdf" element={<RadiationPDF />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
