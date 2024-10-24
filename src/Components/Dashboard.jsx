import Layout from "./Layout"
import { IoIosSearch } from "react-icons/io";
import markinson from "../assets/Images/markinson.png"
import bluebell from "../assets/Images/bluebell.png"
import homephotos from "../assets/Images/homephotos.svg"
import whitespearone from "../assets/Images/whitespearone.svg"
import whitespeartwo from "../assets/Images/whitespeartwo.svg"
import smalldivimage from "../assets/Images/smalldivimage.svg"
import pluscollection from "../assets/Images/housepro.svg"
import pluscollect from "../assets/Images/pluscollection.svg"
import peoplecol from "../assets/Images/peoplecol.svg"
import cardtick from "../assets/Images/cardtick.svg"
import textarrows from "../assets/Images/arrowgreen.svg"
import "./Dashboard.css"
import DashboardChartOne from "./DashboardChartOne";
import CollectionCircleChart from "./ColllectionCircleChart";
import CollectionProgressBar from "./CollectionProgressBar";
import CollectionActiveBar from "./CollectionActiveBar";
import CollectionMainBar from "./CollectionMainBar";
import { useState,useEffect,} from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {



  const datacollection = [
    { OrderID:'AKDSF34', Institution: 'Access bank', Biller: 'FRSC', Order: 'Driver`s License', Date: '26/04/2022', Amount: 'N26,500.00', Status: 'Successful'},
    { OrderID:'BDHG76',  Institution: 'Fidelity bank', Biller: 'WAEC', Order: 'Waec Form', Date: '26/04/2022', Amount: 'N5,500.00', Status: 'Pending'},
    { OrderID:'FRDSF39', Institution: 'OAU', Biller: 'OAU', Order: 'School Fee', Date: '26/04/2022', Amount: 'N101,500.00', Status: 'Successful'},
    { OrderID:'HGYSF124',Institution: 'GTB bank', Biller: 'PHCN', Order: 'Electricity Bill', Date: '26/04/2022', Amount: 'N26,500.00', Status: 'Failed'},
    { OrderID:'AKDSF34', Institution: 'Access bank', Biller: 'FRSC', Order: 'Driver`s License', Date: '26/04/2022', Amount: 'N26,500.00', Status: 'Successful'},
    { OrderID:'AKDSF34', Institution: 'Unilag', Biller: 'Unilag', Order: 'School Fee', Date: '26/04/2022', Amount: 'N345,500.00', Status: 'Pending'},
    { OrderID:'AKDSF34', Institution: 'Access bank', Biller: 'PHCN', Order: 'Electricity Bill', Date: '26/04/2022', Amount: 'N2,500.00', Status: 'Successful'}, 
  ];



  const navigate = useNavigate();


  const [progress, setProgress] = useState(0);
  const makesContainerClick = () => {
    navigate('/users');
  }

  const handlesContainerClick = () => {
    navigate('/billers',); // 
  };

  
  useEffect(() => {
    const interval = setInterval(() => {
      // Example: Increment progress by 10% every second
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 1000);
 
   
   

    return () => clearInterval(interval);
  }, []);
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
    <IoIosSearch style={{color:'grey'}}/>
    <input name="text" placeholder="Search Anything...." style={{border:'none', backgroundColor:'transparent',outline:'none'}}/>
    </div>
    <div>
     <img src={markinson} alt=''/>
    </div>
    <div>
     <img src={bluebell} alt=''/>
    </div>
    </div>


    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',margin:'20px',}}>

    <div style={{border:'none',width:'24%',borderRadius:'10px',backgroundColor:'#00B3FE'}}>
    <div>
    
       <div style={{display:'flex',alignItems:'center',gap:'10px',padding:'10px' }}>

       <img src={homephotos} alt=''style={{height:'60px'}}/>
       <div>
       <p style={{fontSize:'10px'}}>Total Revenue</p>
       <p style={{fontWeight:'bold',fontSize:'20px'}}>10,340,453</p>
       <div style={{display:'flex',alignItems:'center',gap:'5px',flexWrap:'wrap'}}>
       <img src={whitespearone} alt=''/>
       <p style={{fontSize:'20px',color:'white'}}>37.8%</p>
       <p style={{fontSize:'15px',color:'white'}}>this month</p>
       </div>
     
       </div>

       </div>

     </div>
    </div>
    <div style={{border:'none',width:'24%',borderRadius:'10px',backgroundColor:'#00B3FE'}}>

    <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'10px',padding:'10px'}}>
     <img src={homephotos} alt=''style={{height:'60px'}}/>
     <div>
     <p style={{fontSize:'10px'}}>Total Billers</p>
     <p style={{fontWeight:'bold',fontSize:'20px'}}>145</p>
     <div style={{display:'flex',alignItems:'center',gap:'5px',flexWrap:'wrap'}}>
       <img src={whitespeartwo} alt=''/>
       <p style={{fontSize:'20px',color:'white'}}>2%</p>
       <p style={{fontSize:'15px',color:'white'}}>this month</p>
     </div>
     </div>
    </div>

    </div>
    <div style={{border:'none',width:"24%",borderRadius:'10px',backgroundColor:'#00B3FE'}}>

    <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'10px',padding:'10px'}}>
    <img src={homephotos} alt=''style={{height:'60px'}}/>
    <div>
    <p style={{fontSize:'10px'}}>Total Institution</p>
    <p style={{fontWeight:'bold',fontSize:'20px'}}>63</p>
     <div style={{display:'flex',alignItems:'center',gap:'5px',flexWrap:'wrap'}}>
      <img src={whitespearone} alt=''/>
      <p style={{fontSize:'20px',color:'white'}}>11%</p>
      <p style={{fontSize:'15px',color:'white'}}>this week</p>
     </div>
    </div>
    </div>

    </div>
    <div style={{border:'none',width:'24%',borderRadius:'10px',backgroundColor:'#00B3FE'}}>

    <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'10px',padding:'10px'}}>
    <img src={homephotos} alt=''style={{height:'60px'}}/>
    <div>
    <p style={{fontSize:'10px'}}>Total Users</p>
    <p style={{fontWeight:'bold',fontSize:'20px'}}>689</p>
    <div style={{display:'flex',alignItems:'center',gap:'5px',flexWrap:'wrap'}}>
     <img src={whitespearone} alt=''/>
     <p style={{fontSize:'20px',color:'white'}}>11%</p>
     <p style={{fontSize:'15px',color:'white'}}>this week</p>
    </div>
    </div>
    </div>

    </div>
       
    </div>
 <br/>
    <div style={{display:'flex',alignItems:"center",margin:'20px',gap:'10px',flexWrap:'wrap',justifyContent:'space-between'}}>
   
    <div style={{border:'none',width:'45%',borderRadius:'20px',backgroundColor:'white',height:'400px'}}>
     <div style={{display:"flex",alignItems:'center',justifyContent:'space-between',padding:'10px'}}>
      <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
        <p style={{color:'black',fontSize:'15px',fontWeight:'bold'}}>Institution Overview</p>
        <p style={{color:'#ACACAC'}}>Monthly Earning</p>
      </div>
      <div style={{border:'1px solid #E3E1E1',width:'30%',display:'flex',alignItems:'center',gap:'10px',justifyContent:'center',backgroundColor:'#E3E1E1',borderRadius:'5px'}}>
      <p style={{color:'#7E7E7E'}}>Quarterly</p>
      <img src={smalldivimage} alt=''/>
      </div>
      </div>
      <div>
        <DashboardChartOne style={{padding:'10px'}}/>
      </div>
    </div>
   
    <div style={{border:'none',width:'25%',borderRadius:'20px',backgroundColor:'white',height:'400px',cursor:'pointer'}} onClick={handlesContainerClick}>
      <div style={{display:'flex',flexDirection:'column',padding:'10px'}}>
      <p style={{color:'black',fontWeight:'bold',fontSize:'20px'}}>Billers</p>
      <p style={{color:'#ACACAC'}}>Billers that join over the Month</p>
      </div>
      <div>
        <CollectionCircleChart style={{padding:'10px'}}/>
      </div>
    </div>
    
    <div style={{border:'none',width:'25%',borderRadius:'20px',backgroundColor:'white',height:'402px'}}>
     <div style={{display:'flex',justifyContent:'space-between',padding:'10px'}}>
      <p style={{color:'black',fontWeight:'bold',fontSize:'20px'}}>User Category</p>
      <img src={pluscollect} alt='' style={{cursor:'pointer'}} onClick={makesContainerClick}/>
     </div>
     <br/>
     
     <div className="mainpicron">
              <div className="threeflexpro">
                <div className="praz">
                  <img src={pluscollection} alt=""  />
                </div>

                <div>
                  <p className="gpro">Super Admin1</p>
                </div>
                <div>
                  <p className="tpro">19 Users</p>
                </div>
              </div>
              <div className="progressmain">
                <CollectionProgressBar percentage={progress} style={{color:'black'}}/>
              </div>
        </div>
        <div className="mainpicron">
              <div className="threeflexpros">
                <div className="praze">
                  <img src={peoplecol} alt=""  />
                </div>

                <div>
                  <p className="gpro">Super Admin2</p>
                </div>
                <div>
                  <p className="tpro">190 Users</p>
                </div>
              </div>
              <div className="progressmains">
                <CollectionActiveBar percentage={progress} style={{color:'black'}}/>
              </div>
        </div>
        <div className="mainpicron">
              <div className="threeflexpross">
                <div className="prazs">
                  <img src={cardtick} alt="" />
                </div>

                <div>
                  <p className="gpro">Bank Admin</p>
                </div>
                <div>
                  <p className="tpro">200 Users</p>
                </div>
              </div>
              <div className="progressmainss">
                <CollectionMainBar percentage={progress} style={{color:'black'}}/>
              </div>
        </div>
        
        <p style={{color:"#F38231",textAlign:'center',position:'relative',bottom:'95px',fontWeight:'bold',fontSize:'20px'}}>View all</p>
        
     </div>
     <div className="tablecontainerdashboard">

          
    

      <div style={{background:'',display:'flex',alignItems:'center',justifyContent:'space-between',padding:'20px'}}>

      <div>
        <p style={{ color: 'black', fontWeight: 'bold' }}>All Institution transactions</p>
      </div>
      <div style={{display:"flex",alignItems:'center',justifyContent:'space-between',gap:'20px'}}>
      <div style={{
          display: 'flex',
          alignItems: 'center',
          border: 'none',
          width: '46%',
          borderRadius: '5px',
          backgroundColor: '#F8FDFF',
          paddingRight:'10px'
        }}>
          <IoIosSearch style={{ color: 'red' }} />
          <input
            name="text"
            placeholder="Search for order ID, Institution, Biller ..."
            style={{
              border: 'none',
              backgroundColor: 'transparent',
              outline: 'none',
              width: '100%'
            }}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center',gap:'5px'}}>
          <div style={{border:'none',display:'flex',borderRadius:'5px',padding:'0px',background:'#B9EAFF',}}>
            <p style={{color:'black',fontSize:'14px'}}>Filter by Banks </p>
            <img src={textarrows} alt=''/>
          </div>
          <div style={{border:'none',display:'flex',borderRadius:'5px',padding:'0px',background:'#B9EAFF',}}>
           <p style={{color:'black',fontSize:'14px'}}>Filter by Billers</p>
           <img src={textarrows} alt=''/>
          </div>
        </div>
      </div>


      </div>
    
                    

               <div className="fourtext">

                <div className="mythreetext">
                  
                  <p className="trans">All Transactions</p>
                  <p className="succ">Successful</p>
                  <p className="succ">Pending</p>
                  <p className="succ">Failed</p>

                </div>

               </div>

              <div className="liness">
                   
              </div>
      <div>
      <div className='sultabs'>
          <table className='tabss'>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Institution</th>
            <th>Biller</th>
            <th>Order</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {datacollection.map(item => (
            <tr key={item.id}>
              <td>{item.OrderID}</td>
              <td>{item.Institution}</td>
              <td>{item.Biller}</td>
              <td>{item.Order}</td>
              <td>{item.Date}</td>
              <td>{item.Amount}</td>
              <td>
              <div
                        style={{
                          backgroundColor:
                          item?.Status === "Successful"
                          ? "rgba(230, 246, 233, 1)" 
                          : item?.Status === "Failed"
                          ? "rgba(255, 58, 68, 0.1)" 
                          : item?.Status === "Pending"
                          ? "rgba(255, 245, 235, 1)" 
                          : "transparent", 
                          color:
                            item?.Status === "Successful"
                              ? "rgba(1, 169, 38, 1)"
                              : item?.Status === "Failed"
                              ? "rgba(255, 0, 17, 1)"
                              : item?.Status === "Pending"
                              ? "rgba(255, 153, 58, 1)"
                              : "transparent",
                          padding: "10px",
                          borderRadius: "5px",
                          textAlign:"center"
                        }}
                      >
                        {item.Status}
                      </div>
                </td>
            </tr>
          ))}

    
        </tbody>
      </table>
      <div className="bottomtabletext">
            <p className="textbot">See More...</p>
          </div>

    </div>
    </div>
      </div>
     </div>
    
    
   
   </Layout>
  )
}

export default Dashboard
