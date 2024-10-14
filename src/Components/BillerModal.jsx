
import './BillerModal.css'; 

const BillerModal = ({ isOpen, closeModal}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay nested-modal">
      <div
        className="modal-content"
        style={{
          backgroundColor: "white",
          width: "25%",
          height: "80%",
          textAlign: "center",
        }}
      >
        <span className="close-btn" onClick={closeModal}>
          &times;
        </span>

        <p style={{ fontWeight: "bold", fontSize: "20px",color:'black' }}>Select Biller</p>
        <h4 style={{color:'black'}}> Select from the list of billers provided below</h4>

        {["Federal Road Safety Corps (FRSC)", 
          "Obafemi Awolowo University, Ife(OAU)", 
          "Nigeria Port Authority(NPA)", 
          "Federal Inland Revenue Service(FIRS)", 
          "University Of Lagos(UNILAG)", 
          "Nigeria Immigration Services(NIS)", 
          "West Africa Examination Council(WAEC)", 
          "DSTV"].map((biller, index) => (
            <div style={{ margin: "10px 0" }} key={index}>
              <label>
                <input type="checkbox" />
                <span style={{ marginLeft: "10px" ,color:'black',display:'flex'}}>{biller}</span>
              </label>
            </div>
          ))}
      </div>
      
    </div>
  );
};

export default BillerModal;
