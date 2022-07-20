// Imports
// ========================================================
import { ChevronDown } from 'react-feather';
import SearchLayout from '../../layout/Search';

// Main Page
// ========================================================
const AssetsPage = () => {
  return <SearchLayout>
    <div className="px-7 py-10">
      <header className='flex justify-between'>
        <div className='flex items-center'>
          <p>30,372,503 items</p>
        </div>
        <div className='flex'>
          <div className='block mr-2 relative border group cursor-pointer focus-within:shadow-[0_0_8px_0_rgba(4,17,29,0.25)] border-slate-200 h-[50px] rounded-lg'>
            <input className='px-4 z-10 rounded-lg cursor-pointer h-[48px] text-[0.9rem] focus:outline-none text-base' value="All items" readOnly />
            <ChevronDown className='absolute top-0 bottom-0 right-3 my-auto text-gray-500 w-5' />
            <div className="absolute bg-white h-0 overflow-hidden opacity-0  group-focus-within:z-50 group-focus-within:h-auto transition-opacity ease-out duration-700 group-focus-within:opacity-100 top-[49px] right-0 left-0 w-full rounded-lg group-focus-within:shadow-[0_0_8px_0_rgba(4,17,29,0.25)] group-focus-within:block">
              <ul>
                <li className='border-b border-slare-200'>
                  <button className="h-[50px] w-full text-left text-[0.9rem] px-3 font-semibold hover:shadow-[0_0_8px_0_rgba(4,17,29,0.25)]">Single Items</button>
                </li>
                <li>
                  <button className="h-[50px] w-full text-left text-[0.9rem] px-3 font-semibold hover:shadow-[0_0_8px_0_rgba(4,17,29,0.25)]">Bundles</button>
                </li>
              </ul>
            </div>
          </div>

          <div className='block mr-2 relative border group cursor-pointer focus-within:shadow-[0_0_8px_0_rgba(4,17,29,0.25)] border-slate-200 h-[50px] rounded-lg'>
            <input className='px-4 z-10 rounded-lg cursor-pointer h-[48px] text-[0.9rem] focus:outline-none text-base text-slate-500' value="Sort By" readOnly />
            <ChevronDown className='absolute top-0 bottom-0 right-3 my-auto text-gray-500 w-5' />
            <div className="absolute bg-white h-0 overflow-hidden opacity-0  group-focus-within:z-50 group-focus-within:h-auto transition-opacity ease-out duration-700 group-focus-within:opacity-100 top-[49px] right-0 left-0 w-full rounded-lg group-focus-within:shadow-[0_0_8px_0_rgba(4,17,29,0.25)] group-focus-within:block">
              <ul>
                <li className='border-b border-slare-200'>
                  <button className="h-[50px] w-full text-left text-[0.9rem] px-3 font-semibold hover:shadow-[0_0_8px_0_rgba(4,17,29,0.25)]">Recently Listed</button>
                </li>
                <li>
                  <button className="h-[50px] w-full text-left text-[0.9rem] px-3 font-semibold hover:shadow-[0_0_8px_0_rgba(4,17,29,0.25)]">Recently Created</button>
                </li>
              </ul>
            </div>
          </div>

          <div className='border group cursor-pointer focus-within:shadow-[0_0_8px_0_rgba(4,17,29,0.25)] border-slate-200 h-[50px] rounded-lg'>
            <ul className='flex'>
              <li className='border-r border-slate-200 relative'>
                <button disabled className='h-[48px] w-[50px] rounded-tl-lg rounded-bl-lg disabled:bg-blue-50 relative hover:shadow-[0_0_8px_0_rgba(4,17,29,0.25)] disabled:hover:shadow-none'>
                  <span className='block top-[14px] left-[15px] absolute w-[9px] h-[9px] bg-black'></span>
                  <span className='block top-[14px] right-[15px] absolute w-[9px] h-[9px] bg-black'></span>
                  <span className='block bottom-[14px] left-[15px] absolute w-[9px] h-[9px] bg-black'></span>
                  <span className='block bottom-[14px] right-[15px] absolute w-[9px] h-[9px] bg-black'></span>
                </button>
                {/* <div className='bg-black absolute rounded-lg -top-8 text-white font-semiboldoh '>Big Display</div> */}
              </li>
              <li className='relative'>
                <button className='h-[48px] transition-all ease-in-out duration-200 group relative rounded-tr-lg rounded-br-lg w-[50px] hover:shadow-[0_0_8px_0_rgba(4,17,29,0.25)]'>
                  <span className='block absolute w-1 h-1 top-[16px] left-[17px] bg-slate-500 group-hover:bg-black transition-colors ease-in-out duration-200'></span>
                  <span className='block absolute w-1 h-1 top-[16px] left-0 right-0 mx-auto bg-slate-500 group-hover:bg-black transition-colors ease-in-out duration-200'></span>
                  <span className='block absolute w-1 h-1 top-[16px] right-[17px] bg-slate-500 group-hover:bg-black transition-colors ease-in-out duration-200'></span>
                  <span className='block absolute w-1 h-1 top-0 bottom-0 my-auto left-[17px] bg-slate-500 group-hover:bg-black transition-colors ease-in-out duration-200'></span>
                  <span className='block absolute w-1 h-1 inset-0 m-auto bg-slate-500 group-hover:bg-black transition-colors ease-in-out duration-200'></span>
                  <span className='block absolute w-1 h-1 top-0 bottom-0 my-auto right-[17px] bg-slate-500 group-hover:bg-black transition-colors ease-in-out duration-200'></span>
                  <span className='block absolute w-1 h-1 bottom-[16px] left-[17px] bg-slate-500 group-hover:bg-black transition-colors ease-in-out duration-200'></span>
                  <span className='block absolute w-1 h-1 bottom-[16px] left-0 right-0 mx-auto bg-slate-500 group-hover:bg-black transition-colors ease-in-out duration-200'></span>
                  <span className='block absolute w-1 h-1 bottom-[16px] right-[17px] bg-slate-500 group-hover:bg-black transition-colors ease-in-out duration-200'></span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <section className='-mx-2'>
        {/* <div className="block  w-96 bg-gray-500 h-96"></div> */}
        {Array.apply(null, new Array(20)).map((item: any, key: number) =>
          <div key={`item-${key}`} className="block border border-slate-200 rounded-lg m-4 w-96  h-96 hover:shadow-[0_0_8px_0_rgba(4,17,29,0.25)]">
            <div className="">
              <img className="w-full" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" />
            </div>
            <div className="flex justify-between">
              <div>
                <p>Cool Apes Sport Club</p>
                <p>Cool Ape NFT #23045</p>
              </div>
              <div className="text-right">
                <p>Price</p>
                <div>
                  <span>0.04</span>
                </div>
                <span>7 days left</span>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  </SearchLayout >
};

// Exports
// ========================================================
export default AssetsPage;

