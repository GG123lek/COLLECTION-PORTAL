import  { useState } from 'react';
import { IoMdCloseCircleOutline } from "react-icons/io"; 
import { AiOutlineUpload } from "react-icons/ai";
import nestedmodalimage from "../assets/Images/nestedmodalimage.png";
import nestedcircleimage from "../assets/Images/nestedcircleimage.png"
import './InstiModal.css'; 

const InstiModal = ({ onClose }) => {
  const [currentModal, setCurrentModal] = useState(1);
  const [selectedBigRadio, setSelectedBigRadio] = useState("");

  const proceedToNextModal = () => {
    setCurrentModal((prev) => prev + 1);
  };
 
  const handleRadioChange = (e) => {
    setSelectedBigRadio(e.target.value);
  };
  return (
    <div className="modal-overlay">
       
      <div className="modal-content">
       
       
        {currentModal === 1 && (
          <div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <p style={{color:'black',fontSize:'20px',fontWeight:'bold'}}>Create Institutions</p>
            <IoMdCloseCircleOutline onClick={onClose} style={{color:'pink',fontSize:'30px'}}/>
            </div>
            <p style={{ color: 'black' }}>Add Logo</p>
            <div style={{border:'none',width:'40%'}}> 
            <div style={{ border: 'none', width: '100%' }}>
             <a href="/path/to/your/file.jpg" download style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', backgroundColor: '#D1D1D1', textDecoration: 'none', padding: '10px', borderRadius: '5px' }}>
             <AiOutlineUpload style={{ color: 'black', cursor: 'pointer' }} />
             <p style={{color:'black'}}>Upload Logo</p>
             </a>
            </div>
            </div>
            <p style={{color:'black'}}> Name of Institution </p>
            <input name='text' placeholder='First Bank Nigeria' style={{outline:'none'}}/>
            <p style={{color:'black'}}>Abbreviations</p>
            <input name='text' placeholder='FBN' style={{outline:'none'}}/>
            <p style={{color:'black'}}>Institutions Emails</p>
            <input name='text' placeholder='you can pick from existing institutions or kindly type a new one'style={{outline:'none'}}/>
            <p style={{color:'black'}}>Institutions Code</p>
            <input name='text' placeholder='Enter your code' style={{outline:'none'}}/>
            <p style={{color:'black'}}>Sign up for Core-banking Application (CBA)</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', margin: '10px 0' }}>
            <label style={{ display: 'flex', alignItems: 'center', color: 'black' }}>
                <input type="radio" name="cbaSignup" value="option1"  checked={selectedBigRadio === "option1"} onChange={handleRadioChange} style={{ marginRight: '5px',}} />
                Yes
            </label>
            <label style={{ display: 'flex', alignItems: 'center', color: 'black' }}>
                <input type="radio" name="cbaSignup" value="option2" checked={selectedBigRadio === "option2"}  onChange={handleRadioChange}style={{ marginRight: '5px' }} />
                No
            </label>
           </div>
            <button onClick={proceedToNextModal}>Proceed</button>
          </div>
         
       
         
          
        )}
        {currentModal === 2 && (
          <div>
           <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <div>
            <p style={{color:'black',fontSize:'20px',fontWeight:'bold'}}>Select Billers</p>
            <p style={{color:'#757575',fontSize:'15px',fontWeight:'bold'}}>Select from the list of billers provided below</p>
            </div>
           <IoMdCloseCircleOutline onClick={onClose} style={{color:'pink',fontSize:'30px'}}/>
           </div>
           <div>
                {" "}
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
                    <div key={index} style={{display: "flex", gap: "10px",alignItems:'center',padding:'5px'}}>
                    <div>
                        <input type="checkbox"/>
                    </div>
                    <div>
                        <p style={{ color: "black" }}>{biller}</p>
                    </div>
                    </div>
                ))}
                </div>
            <button onClick={proceedToNextModal}>Proceed</button>
          </div>
        )}
        {currentModal === 3 && (
          <div>
            <div>
            <div>
            <img src={nestedmodalimage} alt=''/>
            </div>
            <div>
            <img src={nestedcircleimage} alt=''/>
            </div>
            <p style={{color:'#516B91',textAlign:'center',fontSize:'16px',fontWeight:'bold'}}>Institution successfully created.</p>
                <p style={{color:'#676363',textAlign:'center',fontSize:'10px'}}>
                  A mail have been sent to the institution email which will
                  contain their usersname and a One time password to access
                  their account.
                </p>
            </div>
           

            <button onClick={onClose}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InstiModal;
