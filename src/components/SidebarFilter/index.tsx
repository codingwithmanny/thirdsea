// Imports
// ========================================================
import { useState } from "react";
import { ArrowLeft, ArrowRight, ChevronDown, ChevronLeft, Filter } from "react-feather";

// Main Component
// ========================================================
/**
 * 
 * @returns 
 */
const SidebarFilter = ({ onCollapse }: { onCollapse?: (state?: boolean) => void }) => {
  // State / Props
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Functions
  /**
   * 
   * @param state 
   * @returns 
   */
  const onClickCollapse = (state: boolean) => () => {
    setIsCollapsed(state);
    if (onCollapse) {
      onCollapse(state);
    }
  }

  // Render
  return (
    <div className="w-full">
      <header className="">
        <button className={`w-full text-slate-500 hover:text-black ${!isCollapsed ? 'border-b' : null} border-slate-200 hover:shadow-md h-16 font-semibold flex items-center px-4`} onClick={onClickCollapse(!isCollapsed)}>
          {!isCollapsed ? <span className="flex flex-col items-center justify-center w-6 h-6 mr-2">
            <span className="w-4 bg-black block" style={{ height: '2px', marginBottom: '3px' }}></span>
            <span className="w-3 bg-black block" style={{ height: '2px', marginBottom: '3px' }}></span>
            <span className="w-1 bg-black block" style={{ height: '2px' }}></span>
          </span> : null}
          {!isCollapsed ? <span className="text-black">Filter</span> : null}
          {!isCollapsed ? <ArrowLeft className="absolute right-5" /> : <ArrowRight className="absolute right-5" />}
        </button>
      </header>
      {!isCollapsed
        ? <div>
          <div className="border-b border-slate-200">
            <a href="#status" className={`w-full text-slate-500 hover:text-black relative h-16 font-semibold flex items-center px-4`}>
              <span className="text-black">Status</span>
              <ChevronDown className="absolute  w-5 right-5" />
            </a>
          </div>
          <div className="border-b border-slate-200">
            <a href="#price" className={`w-full text-slate-500 hover:text-black relative h-16 font-semibold flex items-center px-4`}>
              <span className="text-black">Price</span>
              <ChevronDown className="absolute  w-5 right-5" />
            </a>
          </div>
        </div>
        : null}
    </div>
  )
};

// Exports
// ========================================================
export default SidebarFilter;
