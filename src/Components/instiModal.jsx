
import { IoMdCloseCircleOutline, IoMdCloudUpload } from "react-icons/io";
import './InstiModal.css'; 
import { useState } from "react";
import BillerModal from "./BillerModal";

const InstiModal = ({ isOpen, onClose,}) => {
  if (!isOpen) return null;
  const handleUpload = () => {
    // Logic to handle file upload can go here
    console.log('Upload button clicked');
  };
  const [selectedRadio, setSelectedRadio] = useState("");
  const [isBillerModalOpen, setBillerModalOpen] = useState(false);
  const [isAnotherModalOpen, setAnotherModalOpen] = useState(false);

  const handleDownload = () => {
    
    const link = document.createElement('a');
    link.href = 'path_to_logo_image.png'; 
    link.download = 'logo.png'; // Th
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleRadioChange = (e) => {
    setSelectedRadio(e.target.value);
  };
  const handleProceed = () => {
    setBillerModalOpen(true); // Open the new modal
  };
  const openAnotherModal = () => {
    setAnotherModalOpen(true);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <p style={{color:'black',fontSize:'20px',fontWeight:'bold'}}>Create Institution</p>
          <IoMdCloseCircleOutline 
            style={{ color: 'pink', fontSize: '24px', cursor: 'pointer' }} 
            onClick={onClose} 
          />
        </div>
        <div className="modal-body">
        <div>
            <p style={{ color: 'black' }}>Add Logo</p>
            {/* <button onClick={handleUpload} style={{ display: 'flex', alignItems: 'center' }}>
              <IoMdCloudUpload style={{ marginRight: '8px' }} />
              Upload Logo
            </button> */}
            <button onClick={handleDownload} style={{ backgroundColor:'#D1D1D1',width:'35%', display:'flex',alignItems:'center',gap:'10px',flexDirection:'row-reverse'}}>
              Upload Logo
              <IoMdCloudUpload/>
            </button>
          </div>

          
        <p style={{ color: 'black' }}>Institution Name</p>
          <input type="text" placeholder="First Bank of Nigeria"/>
          
          <p style={{ color: 'black' }}>Abbreviation</p>
          <input type="text" placeholder="FBN"/>
          
          <p style={{ color: 'black' }}>Email Address</p>
          <input type="email" placeholder="firstbanknigeria@uk.com.ng" />
          
          <p style={{ color: 'black' }}>Institution Code</p>
          <input type="text" placeholder="Enter your code"/> 

          <p style={{color:'black'}}>Sign up for Core-banking Application(CBA)</p>
          <div className="radio-buttons">
                  <label>
                   <div style={{display:'flex'}}>
                   <input
                      type="radio"
                      value="option1"
                      checked={selectedRadio === "option1"}
                      onChange={handleRadioChange}
                    />
                    <p style={{color:'black'}}>Yes</p>
                   </div>
                  </label>
                  <label>
                   <div style={{display:'flex'}}>
                   <input
                      type="radio"
                      value="option2"
                      checked={selectedRadio === "option2"}
                      onChange={handleRadioChange}
                    />
                    <p style={{color:'black'}}>No</p>
                   </div>
                  </label>
          </div>
        </div>
        
          <button onClick={handleProceed} style={{padding:'10px'}} >Proceed</button>
        
      </div>
      <BillerModal isOpen={isBillerModalOpen} closeModal={() => setBillerModalOpen(false)} openAnotherModal={openAnotherModal}/>
    </div>
  );
};

export default InstiModal;
