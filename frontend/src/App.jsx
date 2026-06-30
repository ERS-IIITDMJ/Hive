import React from 'react';
import Sidebar from './Components/sidebar';
import SearchBar from './Components/searchBar';
import NotificationComponent from './Components/notificationComponent';
import LoginPage from './Components/loginPage';
import NotificationPage from './Components/NotificationPage';

function App() {
  return (
    <>
      <LoginPage />
      {/* <div className="flex w-screen h-screen overflow-hidden">
        <Sidebar />
        <div className="flex-1 flex flex-col items-start p-6 bg-[#0a0a0a] overflow-y-auto">
          <SearchBar />

        </div>
      </div> */}
      <div className="flex w-screen h-screen overflow-hidden bg-[#0a0a0a] text-white font-sans">
      <Sidebar active="notifications" />
    
      <div className="flex-1 h-full flex flex-col overflow-hidden">

        <div className="w-full flex items-center justify-between p-6 pb-2 shrink-0 bg-[#0a0a0a]">
          <SearchBar />
        </div>
        
        <div className="flex-1 overflow-y-auto px-6 pb-6 w-full max-w-[950px] mx-auto">
          <NotificationPage />
        </div>

      </div>
    </div>
    </>
  );
 
}
export default App