
import './App.css'
import Dashboard from './Components/Dashboard';
import Administrators from './Components/Administrators';
import Institutions from './Components/Institutions';
import Billers from './Components/Billers';
import Users from  './Components/Users';
import Transactions from './Components/Transactions';
import Reporting from './Components/Reporting';
import TableCollection from "./Components/TableCollection";
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <div >
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/administrators" element={<Administrators />} />
            <Route path="/institutions" element={<Institutions />} />
            <Route path="/institutions/:id" element={<TableCollection />} />
            <Route path="/billers" element={<Billers/>} />
            <Route path="/users" element={<Users />} />
            <Route path="/transactions" element={<Transactions/>} />
            <Route path="/reporting" element={<Reporting/>} />
          </Routes> 
      </div>
    </BrowserRouter>
  )
}

export default App



