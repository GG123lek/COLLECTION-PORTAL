import './NestedModal.css'; 
import { IoMdCloseCircleOutline } from "react-icons/io";
import nestedmodalimage from "../assets/Images/nestedmodalimage.png";
import nestedcircleimage from "../assets/Images/nestedcircleimage.png";
import { useState } from 'react';

const NestedModal = ({ isOpen, onClose, onNavigateAway }) => {
    const [isSecondModalOpen, setSecondModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        adminName: '',
        adminEmail: '',
        institutionName: '',
        institutionID: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
    };

    const handleCloseFirstModal = () => {
        if (Object.values(formData).every(field => field.trim() !== '')) {
            setSecondModalOpen(true); 
        } else {
            alert("Please fill in all fields."); 
        }
    };

    const handleCloseSecondModal = () => {
        setSecondModalOpen(false); 
        onClose(); 
        onNavigateAway(); // Add this line to call onNavigateAway when second modal closes
    };

    if (!isOpen) return null;

    return (
        <>
            {isSecondModalOpen ? (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleCloseSecondModal}>
                            <IoMdCloseCircleOutline />
                        </span>
                        <div style={{ textAlign: 'center' }}>
                            <div>
                            <img src={nestedmodalimage} alt="Success" />
                            </div>
                             <div>
                             <img src={nestedcircleimage} alt="Circle" />
                             </div>
                        </div>
                        <p style={{ color: '#516B91', fontSize: '15px', textAlign: 'center' }}>Administrator successfully created.</p>
                        <h4 style={{ color: '#676363', fontSize: '10px', textAlign: 'center' }}>
                            A mail has been sent to the institution email which will
                            contain their username and a one-time password to access
                            their account.
                        </h4>
                        <button onClick={handleCloseSecondModal} style={{ width: '100%' }}>Close</button>
                    </div>
                </div>
            ) : (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={onClose}>
                            <IoMdCloseCircleOutline />
                        </span>
                        <p style={{ color: 'black', fontSize: '20px', fontWeight: 'bold' }}>
                            Create Administrators
                        </p>
                        <div>
                            <p style={{ color: 'black', fontSize: '15px' }}>Name of Institution's Administrators</p>
                            <input
                                style={{ width: '100%' }}
                                type="text" 
                                name="adminName"
                                placeholder="Segun Peters James"
                                value={formData.adminName}
                                onChange={handleInputChange} 
                            />
                        </div>
                        <div>
                            <p style={{ color: 'black', fontSize: '15px' }}>Institution Administrator's Email</p>
                            <input
                                style={{ width: '100%',outline:'none'}}
                                type="email" 
                                name="adminEmail"
                                placeholder="firstbanknigeria@uk.com.ng" 
                                value={formData.adminEmail}
                                onChange={handleInputChange} 
                            
                            />
                        </div>
                        <div>
                            <p style={{ color: 'black', fontSize: '15px' }}>Name Of Institution</p>
                            <input
                                style={{ width: '100%' }}
                                type="text" 
                                name="institutionName"
                                placeholder="You can pick from existing institution or kindly type in a new one" 
                                value={formData.institutionName}
                                onChange={handleInputChange} 
                            />
                        </div>
                        <div>
                            <p style={{ color: 'black', fontSize: '15px' }}>Institution ID</p>
                            <input
                                style={{ width: '100%' }}
                                type="text" 
                                name="institutionID"
                                placeholder="You can pick from existing institution or kindly type in a new one" 
                                value={formData.institutionID}
                                onChange={handleInputChange} 
                            />
                        </div>
                        <button onClick={handleCloseFirstModal} style={{ width: '100%' }}>Submit</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default NestedModal;
