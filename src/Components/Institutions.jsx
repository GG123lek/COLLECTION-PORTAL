import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import "./Institutions.css";
import Layout from "./Layout";
import { IoIosSearch } from "react-icons/io";
import markinson from "../assets/Images/markinson.png";
import bluebell from "../assets/Images/bluebell.png";
import collectionarrowone from "../assets/Images/arrowatcir.png";
import collectionarrowtwo from "../assets/Images/arrowrightcircle.png";
import insticircle from "../assets/Images/circleinarrow.svg";
import InstiModal from './instiModal';
import { PiPencilSimpleLine } from "react-icons/pi";



function Institution() {
 
  const info = [

    {
      Institutions:"Access Bank Plc",
      Abbreviations:"Access",
      EmailsAddress:"afolabiabiodun@accessbankplc.com",
      InstitutionCode:"058",
      DatesCreated:"24-05-2022",
      Users:"24",
      CBA:"Yes",
    },
    {
      Institutions:"First Bank of Nigeria Limited",
      Abbreviations:"FBN",
      EmailsAddress:"issaconi@fbnnigeria.com",
      InstitutionCode:"011",
      DatesCreated:"24-05-2022",
      Users:"11",
      CBA:"No",
    },
    {
      Institutions:"Guaranty Trust Holding Company Plc",
      Abbreviations:"GT Bank",
      EmailsAddress:"ilori@gtbanknigeria.com",
      InstitutionCode:"047",
      DatesCreated:"04-01-2022",
      Users:"17",
      CBA:"Yes",
    },
    {
      Institutions:"First City Monument Bank Limited",
      Abbreviations:"FCMB",
      EmailsAddress:"funke@fcmbnigeria.com",
      InstitutionCode:"044",
      DatesCreated:"04-01-2022",
      Users:"13",
      CBA:"No",
    },
    {
      Institutions:"Union Bank of Nigeria Plc",
      Abbreviations:"Union Bank",
      EmailsAddress:"georgey@unionbank.com",
      InstitutionCode:"033",
      DatesCreated:"04-01-2022",
      Users:"19",
      CBA:"Yes",
    },
    {
      Institutions:"United Bank for Africa Plc",
      Abbreviations:"UBA",
      EmailsAddress:"koladepeters@ubanigeria.com",
      InstitutionCode:"058",
      DatesCreated:"24-05-2022",
      Users:"08",
      CBA:"No",
    },
    {
      Institutions:"Zenith Bank Plc",
      Abbreviations:"Zenith Bank",
      EmailsAddress:"olowokerepeter@zenithbank.com",
      InstitutionCode:"070",
      DatesCreated:"14-03-2022",
      Users:"12",
      CBA:"Yes",
    },
    {
      Institutions:"Ecobank Nigeria",
      Abbreviations:"EcoBank",
      EmailsAddress:"boluwatife@ecobankng.com",
      InstitutionCode:"214",
      DatesCreated:"14-03-2022",
      Users:"14",
      CBA:"Yes",
    },
    {
      Institutions:"Heritage Bank Plc",
      Abbreviations:"Heritage Bank",
      EmailsAddress:"tomiwa@heritagebank.com",
      InstitutionCode:"011",
      DatesCreated:"14-03-2022",
      Users:"22",
      CBA:"No",
    },
    {
      Institutions:"Stanbic IBTC Bank Plc",
      Abbreviations:"Stanbic IBTC",
      EmailsAddress:"saheed@stanbicibtc.com",
      InstitutionCode:"044",
      DatesCreated:"12-04-2022",
      Users:"43",
      CBA:"No",
    },
  ];

 
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <Layout>
      <>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '20px', alignItems: 'center', padding: '20px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            border: 'none',
            width: '30%',
            borderRadius: '5px',
            backgroundColor: 'white'
          }}>
            <IoIosSearch style={{ color: 'red' }} />
            <input name="text" placeholder="Search Anything...." style={{ border: 'none', backgroundColor: 'transparent', outline: 'none' }} />
          </div>
          <div>
            <img src={markinson} alt='' />
          </div>
          <div>
            <img src={bluebell} alt='' />
          </div>
        </div>
        <div style={{ border: 'none', backgroundColor: 'white', margin: '20px', borderRadius: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px' }}>
            <div>
              <p style={{ color: 'black', fontSize: '20px', fontWeight: 'bold' }}>Institutions</p>
              <p style={{ color: 'black' }}> Here is the list of all the institutions created by the super administrator</p>
            </div>
            <div className="circlearrowinflex" style={{cursor:'pointer'}} onClick={openModal} >
              <img src={insticircle} alt="" />
              <p className="circlearrowtext">Add New Institution</p>
            </div>
          </div>
          <div style={{ borderBottom: '1px solid #EEEEEE' }}></div>
          <div>
            <p style={{ color: 'black', fontSize: '17px', fontWeight: 'bold', padding: '20px' }}>Approved Institutions</p>
          </div>
          <div className="sultabt">
            <table className="tabst">
              <thead>
                <tr>
                  <th>Institutions</th>
                  <th>Abbreviations</th>
                  <th>EmailAddress</th>
                  <th>InstitutionCode</th>
                  <th>DateCreated</th>
                  <th>Users</th>
                  <th>CBA</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                        {info.map((item) => (
                          <tr key={item.id}>
                            <Link to={`/institutions/${item.id}`} className="cursor-pointer" style={{textDecoration:'none'}}>
                            <td  className="cursor-pointer">{item.Institutions}</td>
                            </Link>
                            
                            <td>{item.Abbreviations}</td>
                            <td>{item.EmailsAddress}</td>
                            <td>{item.InstitutionCode}</td>
                            <td>
                              <div>{item.DatesCreated}</div>
                            </td>
                            <td>{item.Users}</td>
                            <td>{item.CBA}</td>
                            <td>
                              <div style={{ color: "rgba(150, 148, 148, 1)" }}>
                                <PiPencilSimpleLine />
                                {item.Edit}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
            </table>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
            <div>
              <p style={{ color: 'black', fontSize: '15px', fontWeight: 'bold' }}>Showing 1 to 10 of 100 entries</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '30px' }}>
              <div style={{ display: "flex", alignItems: "center", flexDirection: "column", gap: "8px" }}>
                <img src={collectionarrowone} alt='' />
                Prev
              </div>
              <div style={{ position: 'relative', bottom: '20px' }}>
                <span style={{ border: '1px solid rgba(238,238,238,1)', padding: '10px', borderRadius: '5px', color: 'black' }}>1</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <img src={collectionarrowtwo} alt='' />
                Next
              </div>
            </div>
          </div>
        </div>
        {isModalOpen && <InstiModal onClose={closeModal} />}
      </>
    </Layout>
  );
}

export default Institution;
