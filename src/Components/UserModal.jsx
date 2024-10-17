import { useState } from 'react';
import { IoMdCloseCircleOutline } from "react-icons/io"; 
import nestedmodalimage from "../assets/Images/nestedmodalimage.png";
import nestedcircleimage from "../assets/Images/nestedcircleimage.png";
import './UserModal.css'; 

const UserModal = ({ onClose }) => {
  const [currentModal, setCurrentModal] = useState(1);
  
  const proceedToNextModal = () => {
    setCurrentModal(2); // Go directly to the second modal
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {currentModal === 1 && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <IoMdCloseCircleOutline onClick={onClose} style={{ color: 'pink', fontSize: '30px' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <p style={{ color: 'black', fontSize: '20px', fontWeight: 'bold' }}>Create New User Category</p>
            </div>
            <p style={{ color: 'black' }}>Name of User Category</p>
            <input name='text' placeholder='Processor users' />
            <p style={{ color: 'black' }}>Description</p>
            <input name='text' placeholder='This session is Optional' />
            <button onClick={proceedToNextModal}>Add New User Category</button>
          </div>
        )}
        
        {currentModal === 2 && (
          <div>
            {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <p style={{ color: 'black', fontSize: '20px', fontWeight: 'bold' }}>Select Billers</p>
                <p style={{ color: '#757575', fontSize: '15px', fontWeight: 'bold' }}>Select from the list of billers provided below</p>
              </div>
              <IoMdCloseCircleOutline onClick={onClose} style={{ color: 'pink', fontSize: '30px' }} />
            </div>
            <div>
              {[
                "Federal Road Safety Corps (FRSC)",
                "Obafemi Awolowo University, Ife(OAU)",
                "Nigeria Port Authority(NPA)",
                "Federal Inland Revenue Service(FIRS)",
                "University Of Lagos(UNILAG)",
                "Nigeria Immigration Services(NIS)",
                "West Africa Examination Council(WAEC)",
                "DSTV",
              ].map((biller, index) => (
                <div key={index} style={{ display: "flex", gap: "10px", alignItems: 'center', padding: '5px' }}>
                  <input type="checkbox" />
                  <p style={{ color: "black" }}>{biller}</p>
                </div>
              ))}
            </div> */}
            <div>
                <div>
                <img src={nestedmodalimage} alt=''/>
                </div>
                <div>
                <img src={nestedcircleimage} alt=''/>
                </div>
                <p style={{color:'#516B91',textAlign:'center',fontSize:'16px',fontWeight:'bold'}}>User Category successfully created.</p>
              
            </div>
            <button onClick={onClose}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserModal;
