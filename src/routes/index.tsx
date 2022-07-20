// Imports
// ========================================================
import { Routes, Route } from "react-router-dom";
import AssetsPage from "../pages/Assets";

// Main Routers
// ========================================================
const RootRoutes = () => {
  return <Routes>
    <Route path="/" element={<AssetsPage />} />
  </Routes>
};

// Exports
// ========================================================
export default RootRoutes;