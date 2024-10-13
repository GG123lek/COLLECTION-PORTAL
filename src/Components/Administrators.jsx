
import Layout from "./Layout"
import { IoIosSearch } from "react-icons/io";
import markinson from "../assets/Images/markinson.png"
import bluebell from "../assets/Images/bluebell.png"
import akars from "../assets/Images/akararrow.svg"
import circleinarrows from "../assets/Images/circleinarrow.svg"
import "./Administrator.css"

import { useState } from "react";
import OrderCol from "./OrderCol";
import InstitutionCollectionAdmins from "./InstitutionCollectionAdmins";
import UpCollectionAdmins from "./UpCollectionAdmins";
import NestedModal from "./NestedModal";
import NestedModalTwo from "./NestedModalTwo";


function Administration() {
  const [InstitutionAdmins, setInstitutionCollectionAdmins] =
  useState("Institution Admins");
  const tabs = ["Institution Admins", "UP Admins"];

  const [isNestedOneOpen, setNestedOneOpen] = useState(false);
  const [isNestedTwoOpen, setNestedTwoOpen] = useState(false);


const [MyOrders, setMyOrders] = useState();


  return (
    <Layout >


        










          <div style={{display:'flex',justifyContent:'flex-end',gap:'20px',alignItems:'center',padding:'20px'}}>
    <div style={{
        display:'flex',
        alignItems:'center',
        border:'none',
        gap:'10px',
        width:'20%',
        padding:'10px',
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
   
    <div style={{border:'none',backgroundColor:'white',margin:'20px',borderRadius:'10px',}}>

      <div className="flexmain">

      <p style={{color:'black',fontSize:'20px',fontWeight:'bold'}}>Administrator</p>
      
      <div className="circleakarflex">
                {InstitutionAdmins === "Institution Admins" ? (
                  <>
                    {" "}
                    <div className="flexakar">
                      <p className="akartext">Sort by</p>
                      <img
                        src={akars}
                        alt=""
                        onClick={() => {
                          setMyOrders(!MyOrders);
                        }}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                    <div className="circlearrowinflex">
                      <img src={circleinarrows} alt="" />
                      <p
                        className="circlearrowtext"
                        onClick={() => setNestedOneOpen(true)}
                      >
                        New Administrator
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="circlearrowinflex">
                    <img src={circleinarrows} alt="" />
                    <p
                      className="circlearrowtext"
                      onClick={() => setNestedTwoOpen(true)}
                    >
                      New UP Administrator
                    </p>
                  </div>
                )}
              </div>
            </div>

             

             <div style={{borderBottom:'1px solid pink'}}>
             </div>  
             <div>
             <div className="doubleinstibutton">
              <div className="instib">
                {tabs?.map((e, i) => {
                  return (
                    <>
                      <button
                        className="der"
                        onClick={() => {
                          setInstitutionCollectionAdmins(e);
                        }}
                        style={{
                          backgroundColor:
                            InstitutionAdmins === e
                              ? "#FF993A"
                              : "rgba(248, 248, 248, 1)",
                          padding: "15px",
                          color: InstitutionAdmins !== e ? "black" : "white",
                          outline: "none",
                          border: "none",
                          width:'200px',
                          borderRadius:'10px'
                        }}
                      >
                        {e}
                      </button>
                    </>
                  );
                })}
                </div>
                {MyOrders && <OrderCol />}
                </div>
                <div>
              {InstitutionAdmins === "Institution Admins" ? (
                <InstitutionCollectionAdmins />
              ) : (
                <UpCollectionAdmins />
              )}
              {/* {UpAdminss && <UpAdmins />} */}
            </div>
             </div>
        </div>
       
    
        <NestedModal 
                isOpen={isNestedOneOpen} 
                onClose={() => setNestedOneOpen(false)} 
                title="New Administrator" 
            />
            <NestedModalTwo 
                isOpen={isNestedTwoOpen} 
                onClose={() => setNestedTwoOpen(false)} 
                title="New UP Administrator" 
            />
     
   </Layout>
  )
}

export default Administration
