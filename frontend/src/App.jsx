import { React, useState } from 'react';
import Sidebar from './Components/sidebar';
import SearchBar from './Components/searchBar';
import NotificationComponent from './Components/notificationComponent';
import LoginPage from './Components/loginPage';
import ReportPage from './Components/report';
import NotificationPage from './Components/NotificationPage';
import ToolsPage from './Components/ToolsPage';
import ComponentPage from './Components/ComponentsPage';
import DashBoard from './Components/DashBoard';

function App() {
  const [isLogin, setisNotLogin] = useState(false)
  return (
    <>
      {!isLogin ? <LoginPage /> :
        <div className="flex w-screen h-screen overflow-hidden">
          <Sidebar />
          <div className="flex-1 flex flex-col items-start bg-surface overflow-y-auto">
            <SearchBar />
            <ReportPage/>
            <DashBoard/>
          </div>
        </div>
      }
      
    </>
  );
 
}
export default App;