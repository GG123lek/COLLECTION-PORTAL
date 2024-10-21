import Layout from "./Layout"
import markinson from "../assets/Images/markinson.png";
import bluebell from "../assets/Images/bluebell.png";
import "./Reporting.css"
import InstiReportComponent from "../components/InstiReportComponent"
import InstiBiller from  "../components/InstiBiller"
import DownloadComponent from "../components/DownloadComponent";
import { IoIosSearch } from "react-icons/io";
import { useState } from 'react';

import "./Reporting.css"
function Reporting() {
  const [selectedReport, setSelectedReport] = useState("Institution");
  const reportOptions = ["Institution", "Biller"]; 


  return (
    <Layout >
       <div style={{display:'flex',justifyContent:'flex-end',gap:'20px',alignItems:'center',padding:'20px'}}>
    <div style={{
        display:'flex',
        alignItems:'center',
        border:'none',
        width:'30%',
        borderRadius:'5px',
        backgroundColor:'white'
       
    }}>
    <IoIosSearch style={{color:'red'}}/>
    <input name="text" placeholder="Search Anything...." style={{border:'none', backgroundColor:'transparent',outline:'none'}}/>
    </div>
    <div>
     <img src={markinson} alt=''/>
    </div>
    <div>
     <img src={bluebell} alt=''/>
    </div>
    </div>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'20px'}}>
                <div style={{display:'flex'}}>
                  {reportOptions.map((option) => (
                    <button
                      key={option} 
                      className="der"
                      onClick={() => {
                        setSelectedReport(option);
                      }}
                      style={{
                        backgroundColor: selectedReport === option ? "orange" : "rgba(248, 248, 248, 1)",
                        padding: "15px",
                        color: selectedReport !== option ? "black" : "white",
                        outline: "none",
                        border: "none",
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                
               
              <div>
              <DownloadComponent/>
              </div>
      </div>

            <div>
                  {selectedReport === "Institution" ? (
                    <InstiReportComponent /> 
                  ) : (
                    <InstiBiller />
                  )}
           </div> 

   </Layout>
  )
}

export default Reporting
