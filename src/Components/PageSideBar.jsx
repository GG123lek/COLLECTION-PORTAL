import React from "react";
import { RxDashboard } from "react-icons/rx";
import { LuUsers } from "react-icons/lu";
import { GrHome } from "react-icons/gr";
import { LuWallet } from "react-icons/lu";
import { TbUserSquareRounded } from "react-icons/tb";
import { CiMoneyBill } from "react-icons/ci";
import { LuSquareEqual } from "react-icons/lu";
import { BiLogOutCircle } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import imageunifiedpicture from "../assets/Images/imageunifiedpicture.png";
import arrowinsidecircle from "../assets/Images/arrowinsidecircle.png";
import markinson from "../assets/Images/markinson.png";
import arrowdowntwo from "../assets/Images/arrowdowntwo.png";
import "./PageSideBar.css";

function PageSideBar({ toggleContent }) { 
  return (
    <>
      <div className="unified">
        <img src={imageunifiedpicture} alt='' />
        <p style={{ color: 'rgba(82, 195, 241, 1)' }}>
          Unified Payment<br />
          <span style={{ color: 'rgba(150, 148, 148, 1)' }}>Chief Admin</span>
        </p>
        <img src={arrowinsidecircle} alt='' onClick={toggleContent} style={{ cursor: 'pointer' }} />
      </div>

      <ul>
        <li>
          <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'paint active' : 'paint')}>
            <p>
              <RxDashboard size={20} />
              Dashboard
            </p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/administrators" className={({ isActive }) => (isActive ? 'paint active' : 'paint')}>
            <p>
              <LuUsers size={20} />
              Administrators
            </p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/institutions" className={({ isActive }) => (isActive ? 'paint active' : 'paint')}>
            <p>
              <GrHome size={20} />
              Institutions
            </p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/billers" className={({ isActive }) => (isActive ? 'paint active' : 'paint')}>
            <p>
              <LuWallet size={20} />
              Billers
            </p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" className={({ isActive }) => (isActive ? 'paint active' : 'paint')}>
            <p>
              <TbUserSquareRounded size={20} />
              Users
            </p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/transactions" className={({ isActive }) => (isActive ? 'paint active' : 'paint')}>
            <p>
              <CiMoneyBill size={20} />
              Transactions
            </p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/reporting" className={({ isActive }) => (isActive ? 'paint active' : 'paint')}>
            <p>
              <LuSquareEqual size={20} />
              Reporting
            </p>
          </NavLink>
        </li>
        <div className="logout">
          <BiLogOutCircle size={20} />
          <p>Logout</p>
        </div>
      </ul>

      <br />
      <br />

      <div className="downpage">
        <div>
          <img src={markinson} alt='' />
        </div>
        <div>
          <p style={{ color: 'yellow' }}>Segun Peters</p>
          <p style={{ color: 'purple' }}>Super Administrator</p>
        </div>
        <img src={arrowdowntwo} alt='' />
      </div>
    </>
  );
}

export default PageSideBar;
