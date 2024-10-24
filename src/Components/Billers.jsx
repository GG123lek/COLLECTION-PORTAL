import Layout from "./Layout";
import { IoIosSearch } from "react-icons/io";
import markinson from "../assets/Images/markinson.png";
import bluebell from "../assets/Images/bluebell.png";
import collectionarrowone from "../assets/Images/arrowatcir.png";
import collectionarrowtwo from "../assets/Images/arrowrightcircle.png";
import { useState } from "react";

import "./Billers.css";
import CollectionSignUp from "./CollectionSignUp";
function Billers() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Sort By");

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };
  const set = [
    {
        BillersName: 'DSTV',
        EmailAddress:'Dstv@gmail.com',
        BillersFee:'#25,000',
        DateCreated:'24-05-2022',
    },
    {
      BillersName: 'FRSC',
      EmailAddress:'FRSC@gmail.com',
      BillersFee:'#12,000',
      DateCreated:'24-05-2022',
  },
  {
    BillersName: 'FIRS',
    EmailAddress:'FIRS@gmail.com',
    BillersFee:'#32,000',
    DateCreated:'04-01-2022',
},
{
  BillersName: 'GOTV',
  EmailAddress:'GOtvnigeria@gmail.com',
  BillersFee:'#8,000',
  DateCreated:'04-01-2022',
},
{
BillersName: 'WAEC',
EmailAddress:'Waecofficial@gmail.com',
BillersFee:'#15,000',
DateCreated:'04-01-2022',
},
{
  BillersName: 'UNILAG',
  EmailAddress:'Unilagedu@gmail.com',
  BillersFee:'#125,000',
  DateCreated:'24-05-2022',
},
{
  BillersName: 'FIDELITY BANK',
  EmailAddress:'Fidelitybankplc@gmail.com',
  BillersFee:'#75,000',
  DateCreated:'14-03-2022',
},
{
  BillersName: 'OAU',
  EmailAddress:'Oauedu@gmail.com',
  BillersFee:'#55,000',
  DateCreated:'14-03-2022',
},
    {
BillersName: 'GTB BANK',
EmailAddress:'Gtbbankplc@gmail.com',
BillersFee:'#21,000',
DateCreated:'14-03-2022',
},
{
  BillersName: 'LASU',
  EmailAddress:'Lasuedu@gmail.com',
  BillersFee:'#95,000',
  DateCreated:'12-04-2022',
},

];
  return (
    <Layout>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "20px",
            alignItems: "center",
            padding: "20px",
          }}
        >
          {/* <div style={{
            display: 'flex',
            alignItems: 'center',
            border: 'none',
            width: '30%',
            borderRadius: '5px',
            backgroundColor: 'white'
          }}>
            <IoIosSearch style={{ color: 'red' }} />
            <input name="text" placeholder="Search Anything...." style={{ border: 'none', backgroundColor: 'transparent', outline: 'none' }} />
          </div> */}
          <div>
            <img src={markinson} alt="" />
          </div>
          <div>
            <img src={bluebell} alt="" />
          </div>
        </div>
        <div
          style={{
            border: "none",
            margin: "20px",
            backgroundColor: "white",
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "20px",
            }}
          >
            <p style={{ color: "black", fontSize: "20px", fontWeight: "bold", width: '40%' }}>
              Billers
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "20px",
                
                width: '55%'
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid #CCCCCC",
                  width: "100%",
                  borderRadius: "5px",
                  backgroundColor: "white",
                  paddingLeft:'10px'
                }}
              >
                <IoIosSearch style={{ color: "grey" }} />
                <input
                  name="text"
                  placeholder="Search by Billers name,Date Created,Email e.t.c"
                  style={{
                    border: "none",
                    backgroundColor: "transparent",
                    outline: "none",
                  }}
                />
              </div>
              <div className="sort-container" onClick={handleDropdownToggle}>
                <span id="sortText">{selectedOption}</span>
                <div
                  id="dropdown"
                  className={`dropdown-content ${dropdownOpen ? "show" : ""}`}
                >
                  <div
                    className="dropdown-item"
                    onClick={() => handleOptionSelect("Date Created")}
                  >
                    Date Created
                  </div>
                  <div
                    className="dropdown-item"
                    onClick={() => handleOptionSelect("Ascending Order")}
                  >
                    Ascending Order
                  </div>
                  <div
                    className="dropdown-item"
                    onClick={() => handleOptionSelect("Discending Order")}
                  >
                    Discending Order
                  </div>
                  <div
                    className="dropdown-item"
                    onClick={() => handleOptionSelect("Alphabetically")}
                  >
                    Alphabetically
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div style={{borderBottom:'1px solid #EEEEEE'}}>

            </div>
            <div className="billertable">
                  <div className="billersultab">
                    <table className="billertabs">
                      <thead>
                        <tr>
                          <th>Billers Name</th>
                          <th>Email Address</th>
                          <th>Billers Fee</th>
                          <th>Date Created</th>
                        </tr>
                      </thead>
                      <tbody>
                        {set.map((test) => (
                          <tr key={test.id}>
                          
                            <td>{test.BillersName}</td>
                            <td>{test.EmailAddress}</td>
                            <td>{test.BillersFee}</td>
                            <td>
                              <div>{test.DateCreated}</div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  </div>
                  <div style={{padding:'20px'}}>
                    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                      <div>
                           <p style={{fontSize:'20px',color:' rgba(33, 33, 33, 1)',fontWeight:'bold'}}>Showing 1 to 10 of 100 enteries</p>
                      </div>
                      <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'30px'}}>
                        <div style={{display:"flex", alignItems:"center",flexDirection:"column", gap:"8px"}}>
                          <img src={collectionarrowone} alt=''/>
                          Prev
                        </div>
                         <div style={{position:'relative',bottom:'20px'}}>
                         <span style={{border:'1px solid rgba(238,238,238,1)', padding:'10px',borderRadius:'5px',color:'black'}}>1</span>
                         </div>
                        <div style={{display:"flex",flexDirection:"column", alignItems:"center", gap:"8px"}}>
                          <img src={collectionarrowtwo} alt=''/>
                          Next
                       </div>
                      </div>
                    </div>
                    </div>
        </div>
      </div>
    
    </Layout>
  );
}

export default Billers;
