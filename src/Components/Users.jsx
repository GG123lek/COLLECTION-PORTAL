import Layout from "./Layout"
import { IoIosSearch } from "react-icons/io";
import markinson from "../assets/Images/markinson.png"
import bluebell from "../assets/Images/bluebell.png"
import insticircle from "../assets/Images/circleinarrow.svg";
import "./Users.css"
import UserModal from "./UserModal";
import EmptyComponent from "./EmptyComponent";
import AuditComponent from "./AuditComponent"
import BankAuditComponent from "./BankAuditComponent";
import ProcessorComponent from "./ProcessorComponent";
import AnotherComponent from "./AnotherComponent";
import TellerComponent from "./TellerComponent";
import AuthoriserComponent from "./AuthoriserComponent";
import ProUserComponent from "./ProUserComponent";
import OpUserComponent from "./OpUserComponent"
import imageuserone from "../assets/Images/imageuserone.png";
import imageusertwo from "../assets/Images/imageusertwo.png";
import imageuserthree from "../assets/Images/imageuserthree.png";
import imageuserfour from "../assets/Images/imageuserfour.png";
import imageuserfive from "../assets/Images/imageuserfive.png";
import imageusersixe from "../assets/Images/imageusersixe.png";
import imageuserseven from "../assets/Images/imageuserseven.png";
import imageusereight from "../assets/Images/imageusereight.png";
import imageusernine from "../assets/Images/imageusernine.png";
import imageuserten from "../assets/Images/imageuserten.png"
import { useState } from "react";

function Users() {
  
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleContainerClick = (category) => {
    setSelectedCategory(category);
  };

 
  const handleBackClick = () => {
    setSelectedCategory(null);
  };
  
  const renderCategoryComponent = () => {
    switch (selectedCategory) {
      case imageuserone:
        return <EmptyComponent onBack={handleBackClick} />;
      case imageusertwo:
        return <AnotherComponent onBack={handleBackClick} />;
      case imageuserthree:
        return <AuditComponent onBack={handleBackClick} />;
      case imageuserfour:
        return <BankAuditComponent onBack={handleBackClick} />;
      case imageuserfive:
        return <TellerComponent onBack={handleBackClick} />;
      case imageusersixe:
        return <AuthoriserComponent onBack={handleBackClick} />;
      case imageuserseven:
        return <ProcessorComponent onBack={handleBackClick} />;
      case imageusereight:
        return <ProUserComponent onBack={handleBackClick} />;
      case imageusernine:
        return <OpUserComponent onBack={handleBackClick} />;
      case imageuserten:
          return <OpUserComponent onBack={handleBackClick} />;
      default:
        return null;
    }
  };

  return (
    <Layout >
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
        {!selectedCategory && (
        <div style={{padding:'30px'}}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',}}>
          <p style={{ color: 'black', fontSize: '20px', fontWeight: 'bold' }}>User Category</p>
          <div className="circlearrowinflex" style={{ cursor: 'pointer' }} onClick={openModal}>
            <img src={insticircle} alt="" />
            <p className="circlearrowtext">Add New Institution</p>
          </div>
        </div>
        </div>
      )}
        {!selectedCategory && (
         <div
         
       ></div>
      )}
      
        <div>
          {selectedCategory ? (

     renderCategoryComponent()
          ) : (
            <>
              <div className="containers">
                <div className="grid">
                  <div className="clickable-container" onClick={() => handleContainerClick(imageuserone)}>
                    <div>
                      <img src={imageuserone} alt='' />
                    </div>
                    <div style={{ paddingTop: '5px' }}>
                      <p style={{ fontWeight: '',color:'black'}}>Institution Administrator</p>
                      <h5 style={{ fontSize: '10px',color:'black' }}>15 Institutions Administrators</h5>
                    </div>
                  </div>
                  <div className="clickable-container" onClick={() => handleContainerClick(imageusertwo)}>
                    <div>
                      <img src={imageusertwo} alt='' />
                    </div>
                    <div style={{ paddingTop: '5px' }}>
                      <p style={{ fontWeight: '',color:'black' }}>Branch Administrator</p>
                      <h5 style={{ fontSize: '10px',color:'black' }}>75 Branch Administrators</h5>
                    </div>
                  </div>
                  <div className="clickable-container" onClick={() => handleContainerClick(imageuserthree)}>
                    <div>
                      <img src={imageuserthree} alt='' />
                    </div>
                    <div style={{ paddingTop: '5px' }}>
                      <p style={{ fontWeight: '',color:'black' }}>Audit</p>
                      <h5 style={{ fontSize: '10px' ,color:'black'}}>2 Audit</h5>
                    </div>
                  </div>
                  <div className="clickable-container" onClick={() => handleContainerClick(imageuserfour)}>
                    <div>
                      <img src={imageuserfour} alt='' />
                    </div>
                    <div style={{ paddingTop: '5px' }}>
                      <p style={{ fontWeight: '',color:'black' }}>Bank Audit</p>
                      <h5 style={{ fontSize: '10px',color:'black' }}>1 Bank Audit</h5>
                    </div>
                  </div>
                  <div className="clickable-container" onClick={() => handleContainerClick(imageuserfive)}>
                    <div>
                      <img src={imageuserfive} alt='' />
                    </div>
                    <div style={{ paddingTop: '5px' }}>
                      <p style={{ fontWeight: '',color:'black' }}>Tellers</p>
                      <h5 style={{ fontSize: '10px',color:'black' }}>150 Tellers</h5>
                    </div>
                  </div>
                  <div className="clickable-container" onClick={() => handleContainerClick(imageusersixe)}>
                    <div>
                      <img src={imageusersixe} alt='' />
                    </div>
                    <div style={{ paddingTop: '5px' }}>
                      <p style={{ fontWeight: '',color:'black' }}>Authorizers</p>
                      <h5 style={{ fontSize: '10px',color:'black' }}>75 Authorizers</h5>
                    </div>
                  </div>
                  <div className="clickable-container" onClick={() => handleContainerClick(imageuserseven)}>
                    <div>
                      <img src={imageuserseven} alt='' />
                    </div>
                    <div style={{ paddingTop: '5px' }}>
                      <p style={{ fontWeight: '',color:'black' }}>Processor Admin</p>
                      <h5 style={{ fontSize: '10px' ,color:'black'}}>3 Process Administrators</h5>
                    </div>
                  </div>
                  <div className="clickable-container" onClick={() => handleContainerClick(imageusereight)}>
                    <div>
                      <img src={imageusereight} alt='' />
                    </div>
                    <div style={{ paddingTop: '5px' }}>
                      <p style={{ fontWeight: '',color:'black' }}>Processor User</p>
                      <h5 style={{ fontSize: '10px',color:'black' }}>5 Processor Users</h5>
                    </div>
                  </div>
                  <div className="clickable-container" onClick={() => handleContainerClick(imageusernine)}>
                    <div>
                      <img src={imageusernine} alt='' />
                    </div>
                    <div style={{ paddingTop: '5px' }}>
                      <p style={{ fontWeight: '',color:'black' }}>Operation Users</p>
                      <h5 style={{ fontSize: '10px',color:'black' }}>2 Operation Users</h5>
                    </div>
                  </div>
                  <div className="clickable-container" onClick={() => handleContainerClick(imageuserten)}>
                    <div>
                      <img src={imageusernine} alt='' />
                    </div>
                    <div style={{ paddingTop: '5px' }}>
                      <p style={{ fontWeight: '',color:'black' }}>Operation Users</p>
                      <h5 style={{ fontSize: '10px',color:'black' }}>2 Operation Users</h5>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        {isModalOpen && <UserModal onClose={closeModal} />}
    </>
   </Layout>
  )
}

export default Users
