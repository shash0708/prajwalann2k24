import React from 'react'

function Gay() {
  return (
    <div>
      <nav className="bg-white-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
   
              <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span className="md:flex"></span>
                <span className="sr-only">Open main menu</span>
              
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
               
                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center flex-shrink-0 items-stretch rounded-lg">
                <div className="flex-shrink-0 items-center  md:block">
                    {/* <img className="h-20 w-auto md:ml-6" src="./assests/name.png" alt="Your Company"> */}
                  </div>
              <div className="hidden md:ml-32 mt-5  md:block">
                <div className="hidden md:flex items-center justify-end space-x-16 h-10">
                  <div role="tab" aria-selected="true" id="tab1" onclick="showTab('content1', this)"
                  className="group text-blue-900 hover:text-blue-900 px-2 py-2 text-sm font-medium uppercase font-bold relative cursor-pointer">
                  Overview
                  <span
                    className="absolute inset-x-0 bottom-0 h-1 hover:bg-blue-300 group-hover:bg-blue-900 rounded-full"></span>
                </div>                  <div role="tab" aria-selected="false" id="tab2" onclick="showTab('content2', this)"
                className="group text-blue-900 hover:text-blue-900 px-2 py-2 text-sm font-medium uppercase font-bold relative cursor-pointer">
                Prizes
                <span
                  className="absolute inset-x-0 bottom-0 h-1 hover:bg-blue-300 group-hover:bg-blue-900 rounded-full"></span>
              </div>
              <div role="tab" aria-selected="false" id="tab3" onclick="showTab('content3', this)"
                className="group text-blue-900 hover:text-blue-900 px-2 py-2 text-sm font-medium uppercase font-bold relative cursor-pointer">
                Schedule
                <span
                  className="absolute inset-x-0 bottom-0 h-1 hover:bg-blue-300 group-hover:bg-blue-900 rounded-full"></span>
              </div>
              <div role="tab" aria-selected="false" id="tab4" onclick="showTab('content4', this)"
                className="group text-blue-900 hover:text-blue-900 px-2 py-2 text-sm font-medium uppercase font-bold relative cursor-pointer">
                Problem Statements
                <span
                  className="absolute inset-x-0 bottom-0 h-1 hover:bg-blue-300 group-hover:bg-blue-900 rounded-full"></span>
              </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* <button type="button" className="relative rounded-lg bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 text-sm sm:text-base">
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">View notifications</span>
                    Register Here!
                </button> */}
          
            
      
              <div className="relative ml-3">
                <div>
                    {/* <button className="sm:hidden relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                        <span className=="absolute -inset-0.5"></span>
                        <span className="sr-only">Open user menu</span>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-lg">
                        </button>
                        </button> */}
                </div> 
      
               
              </div>
            </div>
          </div>
        </div>
      
        <div className="md:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <div role="tab" aria-selected="true" id="tab1" onclick="showTab('content1', this)"
            className="group text-blue-900 hover:text-blue-900 px-2 py-2 text-sm font-medium uppercase font-bold relative cursor-pointer">
            Overview
            <span
              className="absolute inset-x-0 bottom-0 h-1 hover:bg-blue-300 group-hover:bg-blue-900 rounded-full"></span>
          </div>           <div role="tab" aria-selected="false" id="tab2" onclick="showTab('content2', this)"
          className="group text-blue-900 hover:text-blue-900 px-2 py-2 text-sm font-medium uppercase font-bold relative cursor-pointer">
          Prizes
          <span
            className="absolute inset-x-0 bottom-0 h-1 hover:bg-blue-300 group-hover:bg-blue-900 rounded-full"></span>
        </div>
        <div role="tab" aria-selected="false" id="tab3" onclick="showTab('content3', this)"
          className="group text-blue-900 hover:text-blue-900 px-2 py-2 text-sm font-medium uppercase font-bold relative cursor-pointer">
          Schedule
          <span
            className="absolute inset-x-0 bottom-0 h-1 hover:bg-blue-300 group-hover:bg-blue-900 rounded-full"></span>
        </div>
        <div role="tab" aria-selected="false" id="tab4" onclick="showTab('content4', this)"
          className="group text-blue-900 hover:text-blue-900 px-2 py-2 text-sm font-medium uppercase font-bold relative cursor-pointer">
          Problem Statements
          <span
            className="absolute inset-x-0 bottom-0 h-1 hover:bg-blue-300 group-hover:bg-blue-900 rounded-full"></span>
        </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Gay
