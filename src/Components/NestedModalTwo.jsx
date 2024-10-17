import { useState } from 'react';
import { IoMdCloseCircleOutline } from "react-icons/io";
import nestedmodalimage from "../assets/Images/nestedmodalimage.png";
import nestedcircleimage from "../assets/Images/nestedcircleimage.png";

const NestedModalTwo = ({ isOpen, onClose, onNavigateAway }) => {
    const [formData, setFormData] = useState({
        adminName: '',
        adminEmail: '',
        adminRole: ''
    });
    const [activeModal, setActiveModal] = useState('form'); 

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCreate = () => {
        if (Object.values(formData).every(field => field.trim() !== '')) {
            setActiveModal('new'); 
        } else {
            alert("Please fill in all fields.");
        }
    };

   

    const handleCloseFinalModal = () => {
        setActiveModal('form'); 
        onClose(); 
        onNavigateAway(); 
    };

    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>
                    <IoMdCloseCircleOutline />
                </span>

                {activeModal === 'form' && (
                    <>
                        <p style={{ color: "black", fontSize: '25px', fontWeight: 'bold' }}>Create UP Admin</p>
                        <div>
                            <div>
                                <p style={{ color: 'black', fontSize: '15px' }}>Name of Administrators</p>
                                <input
                                    type="text"
                                    name="adminName"
                                    placeholder="Temitope Ali"
                                    value={formData.adminName}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <p style={{ color: 'black', fontSize: '15px' }}>Email Address</p>
                                <input
                                    type="text"
                                    name="adminEmail"
                                    placeholder="alitemitope@gmail.com"
                                    value={formData.adminEmail}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div style={{ display: 'flex', gap: '5px', padding: '5px' }}>
                                <p style={{ color: 'black', fontWeight: 'bold' }}>Role:</p>
                                <select
                                    name="adminRole"
                                    style={{ borderRadius: '10px', border: '1px solid #FF993A', outline: 'none' }}
                                    value={formData.adminRole}
                                    onChange={handleInputChange}
                                >
                                    <option value="" disabled>Select role</option>
                                    <option value="super_admin1">Super Admin1</option>
                                    <option value="super_admin2">Super Admin2</option>
                                    <option value="audit">Audit</option>
                                    <option value="processor_admin">Processor Admin</option>
                                    <option value="processor_user">Processor User</option>
                                    <option value="operation_user">Operation User</option>
                                </select>
                            </div>
                        </div>
                        <button onClick={handleCreate}>Create</button>
                    </>
                )}

                {activeModal === 'new' && (
                    <>
                       
                        <div>
                        <img src={nestedmodalimage} alt="" />
                        </div>
                       <div>
                       <img src={nestedcircleimage} alt="" />
                       </div>
                     
                <p style={{color:'#516B91',fontSize:'15px'}}>Administrator successfully created.</p>
                <h4 style={{color:'#676363',fontSize:'10px'}}>
                  A mail have been sent to the institution email which will
                  contain their usersname and a One time password to access
                  their account.
                </h4>
                       
                        <button onClick={handleCloseFinalModal}>Close</button>
                    </>
                )}

                {activeModal === 'final' && (
                    <>
                        <p style={{ color: 'black', fontSize: '20px', fontWeight: 'bold' }}>
                            Final Step
                        </p>
                        <p>Your admin has been created. Thank you!</p>
                      
                    </>
                )}
            </div>
        </div>
    );
};

export default NestedModalTwo;
