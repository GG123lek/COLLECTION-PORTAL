import repopics from "../assets/Images/repopics.svg";
import post from "../assets/Images/post.svg";
import mate from "../assets/Images/mate.svg";
import akar from "../assets/Images/akararrow.svg";
import mode from "../assets/Images/mode.svg";
import frime from "../assets/Images/frime.png";
import srime from "../assets/Images/srime.png";
import wecar from "../assets/Images/wecar.png"
import kellar from "../assets/Images/kellar.svg"
import { BsArrowCounterclockwise } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import "./InstiReportComponent.css";
import InstiChart from "./InstiChart";
import EstiChart from "../components/EstiChart"
import MetiChart from "./MetiChart";
import RealChart from "./RealChart";
import LastChart from "./LastChart";
import CollectionCircleChart from "./ColllectionCircleChart";
function InstiReportComponent() {
  return (
    <div>
      <div className="se">
        <div className="mi">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ color: "#849AA9" }}>Total Transactions</p>
              <img src={repopics} alt="" />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ fontWeight: "bold", color: "#555555" }}>13,675,234</p>
              <p style={{ color: "#2CDDC7" }}>+55,51%</p>
            </div>
          </div>
        </div>

        <div className="mi">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ color: "#849AA9" }}>Total Cheques</p>
              <img src={post} alt="" />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ fontWeight: "bold", color: "#555555" }}>1,986,000</p>
              <p style={{ color: "#FF3131" }}>-1,43%</p>
            </div>
          </div>
        </div>

        <div className="mi">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ color: "#849AA9" }}>Total Approved</p>
              <img src={mate} alt="" />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ fontWeight: "bold", color: "#555555" }}>1,890,543</p>
              <p style={{ color: "#FF3131" }}>-3,56%</p>
            </div>
          </div>
        </div>

        <div className="mi">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ color: "#849AA9" }}>Total Failed</p>
              <img src={mode} alt="" />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ fontWeight: "bold", color: "#555555" }}>4,780</p>
              <p style={{ color: "#2CDDC7" }}>+0,94%</p>
            </div>
          </div>
        </div>

        <div className="mi">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ color: "#849AA9" }}>Total Reversed</p>
              <BsArrowCounterclockwise />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ fontWeight: "bold", color: "#555555" }}>2,097</p>
              <p style={{ color: "#FF1331" }}>-0.20%</p>
            </div>
          </div>
        </div>
        <div className="mi">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ color: "#849AA9" }}>Total Cash</p>
              <FiSend />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ fontWeight: "bold", color: "#555555" }}>932,097</p>
              <p style={{ color: "#FF1331" }}>-0.20%</p>
            </div>
          </div>
        </div>
      </div>
      
     
     
       <div className="container">
        <div style={{display:'flex',}}>
        <div className="column column-60">
          <div className="box">
           <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'20px'}}>
           <div>
              <p style={{color:'black',fontSize:'20px',fontWeight:'bold'}}>Transaction Volume</p>
            </div>
            <div>
            <img src={frime} alt=''/>
            </div>
            <div>
              <img src={srime} alt=''/>
            </div>
         <div className="flexakar">
                  <p className="akartext" style={{ color: "#7E7E7E" ,fontWeight:'bold'}}>
                    Weekly
                  </p>
                  <img src={akar} alt="" />
          </div>
           </div>
           <div>
            <InstiChart/>
           </div>
          </div>
          
          <div className="box">
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>

          <p style={{fontSize:'20px',fontWeight:'bold'}}>Institutions Earnings</p>
          <div style={{display:'flex',gap:'10px'}}>
            
          <p style={{fontWeight:'bold'}}>Weekly</p>
          <div>
          <img src={wecar} alt=''/>
          </div>

          </div>

           </div>
           <div>
             <EstiChart/>
           </div>
          </div>
          <div className="box">
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>

          <div style={{display:'flex',flexDirection:'column',gap:'30px' }}>
            <p style={{fontSize:'20px',fontWeight:'bold'}}>Institution Overview</p>
            <p style={{color:'#ACACAC'}}>Daily Transaction overview</p>
          </div>
 
          <div style={{border:'1px solid #E3E1E1',padding:'10px',width:'140px',display:'flex',alignItems:'center',gap:'30px',backgroundColor:'#E3E1E1',borderRadius:'10px'}}>
            <p style={{color:'#7E7E7E'}}>Quarterly</p>
            <img src={kellar} alt=''/>
          </div>

          </div>
          <div>
                <MetiChart/>
           </div>
          </div>
         </div>
        <div className="column column-40">
          <div className="box">
          <div style={{display:'flex',flexDirection:'column',padding:'10px'}}>
      <p style={{color:'black',fontWeight:'bold',fontSize:'20px'}}>Billers</p>
      <p style={{color:'#ACACAC'}}>Billers that join over the Month</p>
      </div>
      <div>
        <CollectionCircleChart style={{padding:'10px'}}/>
      </div>
          </div>
          <div className="box">
          <div>
              <p style={{fontSize:'20px',fontWeight:'bold',color:'blue'}}>Average  performance Per Institution.</p>
            </div>
            <div>
              <p style={
                {fontSize:'10px',fontWeight:'bold'}
              }>Average Performance per day</p>
            </div>
            <br/>
            <div style={{display:'flex',alignItems:"center",justifyContent:'space-between'}}>
              <p style={{fontSize:'20px',fontWeight:'bold'}}>List of Institutions</p>
              <p style={{fontSize:'15px',fontWeight:'bold',color:'#949494'}}>8 Institutions</p>
            </div>
            <div>
              <RealChart/>
            </div>
          </div>
          <div className="box">
          
            <div>
              <p style={{fontWeight:'bold',fontSize:'25px'}}>Historical Charts on
              Institutions</p>
            </div>
            <div>
              <LastChart/>
            </div>
          
          </div>
        </div>
        </div>
      </div>

    </div>
  );
}

export default InstiReportComponent;
