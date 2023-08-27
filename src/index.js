import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import BackgroundColor from "./pages/First-Page";
import SecondPage from "./pages/Second-Page";
import ThirdPage from "./pages/Third-Page";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<BackgroundColor />} />
          <Route path="blogs" element={<SecondPage />} />
          <Route path="contact" element={<ThirdPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);