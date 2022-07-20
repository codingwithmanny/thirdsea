// Imports
// ========================================================
import { useState } from 'react';
import Nav from '../../components/Nav';
import SidebarFilter from '../../components/SidebarFilter';

// Main Layout
// ========================================================
/**
 * 
 * @returns 
 */
const SearchLayout: React.FC = ({ children }) => {
  // State / Props
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Function
  const onCollapse = (state?: boolean) => {
    if (typeof state !== undefined) {
      setIsCollapsed(state as boolean);
    }
  };

  // Render
  return <div className="pt-20 h-screen">
    <Nav />
    <div className="relative h-full">
      <div className={`h-full fixed top-20 bottom-0  ${isCollapsed ? 'w-16' : 'w-full max-w-sm'}  border-r border-slate-200`}>
        <SidebarFilter onCollapse={onCollapse} />
      </div>
      <main className={`${isCollapsed ? 'ml-16' : 'ml-96'}`}>{children}</main>
    </div>
  </div>
};

// Exports
// ========================================================
export default SearchLayout;