// Imports
// ========================================================
import { BrowserRouter } from "react-router-dom";

// Main Provider
// ========================================================
const RootProvider: React.FC = ({ children }) => {
  return <div>
    <BrowserRouter>{children}</BrowserRouter>
  </div>
};

// Exports
// ========================================================
export default RootProvider;

