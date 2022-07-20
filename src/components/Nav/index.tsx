// Imports
// ========================================================
import { Link } from 'react-router-dom';
import { Search } from "react-feather";

// Main Component
// ========================================================
/**
 * 
 * @returns 
 */
const Nav = () => {
  return (
    <div className="fixed top-0 w-full z-10 bg-white">
      <nav className="w-full px-6 flex border-b shadow-md">
        <div className="flex w-1/6 items-center">
          <Link to="/" id="logo" className="flex items-center h-full ">
            <div className="rounded-full h-12 w-12 overflow-hidden block bg-purple-700 relative mr-2 border-4 border-slate-100">
              <svg style={{ height: '29px', left: '-28px', position: 'absolute', bottom: -4, display: 'flex' }} viewBox="0 0 312 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.2843 3.07107C32.1895 -0.834175 38.5212 -0.834171 42.4264 3.07107L48.462 9.10661C52.3672 13.0118 58.6988 13.0118 62.6041 9.1066L68.6396 3.07107C72.5449 -0.834175 78.8765 -0.834183 82.7818 3.07106L88.6396 8.92893C92.5449 12.8342 98.8765 12.8342 102.782 8.92894L108.64 3.07107C112.545 -0.834175 118.877 -0.834183 122.782 3.07106L128.64 8.92893C132.545 12.8342 138.877 12.8342 142.782 8.92894L148.64 3.07107C152.545 -0.834175 158.877 -0.834183 162.782 3.07106L168.64 8.92893C172.545 12.8342 178.877 12.8342 182.782 8.92894L188.64 3.07107C192.545 -0.834175 198.877 -0.834183 202.782 3.07106L208.64 8.92893C212.545 12.8342 218.877 12.8342 222.782 8.92894L228.64 3.07107C232.545 -0.834175 238.877 -0.834183 242.782 3.07106L248.64 8.92893C252.545 12.8342 258.877 12.8342 262.782 8.92893L268.64 3.07106C272.545 -0.834183 278.877 -0.834175 282.782 3.07107L311.066 31.3553V70H0V31.3553L28.2843 3.07107Z" fill="url(#paint0_linear_48_37)" />
                <defs>
                  <linearGradient id="paint0_linear_48_37" x1="155.533" y1="-4" x2="155.533" y2="106.711" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>


            {/* <svg className="w-10 h-10 block mr-2 border-4 border-slate-100 rounded-full" width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="120" width="120" height="120" rx="60" transform="rotate(-90 0 120)" fill="#7E22CE" />
              <mask id="mask0_48_44" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="120" height="120">
                <rect y="120" width="120" height="120" rx="60" transform="rotate(-90 0 120)" fill="#7E22CE" />
              </mask>
              <g mask="url(#mask0_48_44)">
                <path d="M-67.7157 53.0711C-63.8105 49.1658 -57.4788 49.1658 -53.5736 53.0711L-47.538 59.1066C-43.6328 63.0118 -37.3012 63.0118 -33.3959 59.1066L-27.3604 53.0711C-23.4551 49.1658 -17.1235 49.1658 -13.2182 53.0711L-7.36037 58.9289C-3.45513 62.8342 2.87651 62.8342 6.78175 58.9289L12.6396 53.0711C16.5449 49.1658 22.8765 49.1658 26.7818 53.0711L32.6396 58.9289C36.5449 62.8342 42.8765 62.8342 46.7818 58.9289L52.6396 53.0711C56.5449 49.1658 62.8765 49.1658 66.7818 53.0711L72.6396 58.9289C76.5449 62.8342 82.8765 62.8342 86.7818 58.9289L92.6396 53.0711C96.5449 49.1658 102.877 49.1658 106.782 53.0711L112.64 58.9289C116.545 62.8342 122.877 62.8342 126.782 58.9289L132.64 53.0711C136.545 49.1658 142.877 49.1658 146.782 53.0711L152.64 58.9289C156.545 62.8342 162.877 62.8342 166.782 58.9289L172.64 53.0711C176.545 49.1658 182.877 49.1658 186.782 53.0711L215.066 81.3553V156.711H-96V81.3553L-67.7157 53.0711Z" fill="url(#paint0_linear_48_44)" />
              </g>
              <defs>
                <linearGradient id="paint0_linear_48_44" x1="59.533" y1="46" x2="59.533" y2="156.711" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg> */}

            <h1 className="font-semibold text-xl text-slate-800">ThirdSea</h1>
          </Link>
        </div>
        <div className="w-5/6 py-4 flex justify-between">
          <div className="w-full max-w-4xl relative">
            <input className="w-full focus:shadow-[0_0_8px_0_rgba(4,17,29,0.25)] focus:outline-none h-12 pr-4 pl-11 border border-slate-200 rounded-lg" type="search" placeholder="Search" />
            <Search className="text-slate-500 w-5 absolute top-0 bottom-0 left-4 my-auto" />
          </div>
          <ul className="flex items-center justify-end">
            <li className="h-full">
              <Link className="font-bold cursor-pointer text-slate-700 hover:text-black h-full flex items-center px-6" to="/explore">Explore</Link>
            </li>
            <li className="h-full">
              <Link className="font-bold cursor-pointer text-slate-700 hover:text-black h-full flex items-center px-6" to="/stats">Stats</Link>
            </li>
            <li className="h-full">
              <Link className="font-bold cursor-pointer text-slate-700 hover:text-black h-full flex items-center px-6" to="/create">Create</Link>
            </li>
            <li className="ml-4 cursor-pointer text-slate-700 h-full flex items-center justify-center">
              <Link to="/login" className="h-full px-4 flex items-center justify-center">
                <div className="w-9 h-9 flex items-center justify-center">
                  <span className="relative w-7 h-7 border-slate-500 rounded-full block overflow-hidden" style={{ borderWidth: '3px' }}>
                    <span className="absolute h-8 border-slate-500 rounded-full block" style={{ borderWidth: '3px', left: '-2px', width: '25px', bottom: '-25px' }}></span>
                    <span className="absolute left-0 right-0 mx-auto border-slate-500 rounded-full block" style={{ borderWidth: '3px', top: '3px', height: '10px', width: '10px' }}></span>
                  </span>
                </div>
              </Link>
            </li>
            <li className="font-semibold cursor-pointer text-slate-700 h-full flex items-center">
              <div className="h-full pl-6 flex items-center">
                <div className="w-9 h-9 flex items-center justify-center">
                  <span className="relative border-slate-500 rounded block" style={{ borderWidth: '3px', height: '26px', width: '26px' }}>
                    <span className="absolute -right-1 bg-white border-slate-500 rounded-sm block" style={{ borderWidth: '3px', width: '16px', height: '14px', bottom: '3px' }}></span>
                    <span className="bg-slate-500 rounded-full block absolute" style={{ width: '4px', height: '4px', right: '3px', bottom: '8px' }}></span>
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav >
    </div >
  )
};

// Exports
// ========================================================
export default Nav;
