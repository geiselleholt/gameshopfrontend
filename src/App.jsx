import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import NavBar from "./components/Nav/NavBar.jsx";
import DashboardPage from './pages/DashboardPage.jsx'
import AuthPage from "./pages/AuthPage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
