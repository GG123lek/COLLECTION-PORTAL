import "../components/Transactions.css"
import markinson from "../assets/Images/markinson.png";
import bluebell from "../assets/Images/bluebell.png";
import { FaSearch } from 'react-icons/fa';
import { IoFilterSharp } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import ThreeTransComponent from "../components/ThreeTransComponent";
import collectionarrowone from "../assets/Images/arrowatcir.png";
import collectionarrowtwo from "../assets/Images/arrowrightcircle.png";
import { useState } from "react";



import Layout from "./Layout";


function Transactions() {
  const [MyTrans, setMyTrans] = useState();
  const transdata = [
    { OrderID:'AKDSF34', Institution: 'Guaranty Trust Bank PLC', Biller: 'FRSC', Branch:"King George Rd" ,Order: 'Driver`s License', Date: '26/04/2022', Amount: 'N26,500.00', Status: 'Successful'},
    { OrderID:'BDHG76',  Institution: 'Fidelity bank', Biller: 'WAEC', Branch:"Bode Thomas", Order: 'Waec Form', Date: '26/04/2022', Amount: 'N5,500.00', Status: 'Pending'},
    { OrderID:'FRDSF39', Institution: 'OAU', Biller: 'OAU', Branch:"Marina", Order: 'School Fee', Date: '26/04/2022', Amount: 'N101,500.00', Status: 'Successful'},
    { OrderID:'HGYSF124',Institution: 'GTB bank', Biller: 'PHCN', Branch:"Adetokunbo Ademola", Order: 'Electricity Bill', Date: '26/04/2022', Amount: 'N26,500.00', Status: 'Failed'},
    { OrderID:'AKDSF34', Institution: 'Access bank', Biller: 'FRSC',Branch:"Victoria Island", Order: 'Driver`s License', Date: '26/04/2022', Amount: 'N26,500.00', Status: 'Successful'},
    { OrderID:'AKDSF34', Institution: 'Unilag', Biller: 'Unilag', Branch:"Ajose Adeogun", Order: 'School Fee', Date: '26/04/2022', Amount: 'N345,500.00', Status: 'Pending'},
    { OrderID:'HGYSF124', Institution: 'First City Monument Bank PLC', Biller: 'FIRS', Branch:"Ojuelegba", Order: 'Tax', Date: '26/04/2022', Amount: 'N2,500.00', Status: 'Successful'}, 
    { OrderID:'AKDSF34', Institution: 'First Bank of Nigeria PLC', Biller: 'UNILAG', Branch:"Idumota", Order: 'School Fees', Date: '26/04/2022', Amount: 'N2,500.00', Status: 'Successful'}, 
    { OrderID:'BDHG76', Institution: 'Access bank', Biller: 'DSTV', Branch:"University of Lagos", Order: 'DSTV Premium', Date: '26/04/2022', Amount: 'N2,500.00', Status: 'Successful'}, 
  ];

  return (
    <Layout>
      <>
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '20px', alignItems: 'center', padding: '20px' }}>
          
          <div>
            <img src={markinson} alt='' />
          </div>
          <div>
            <img src={bluebell} alt='' />
          </div>
     </div>
        <div style={{border:'none',margin:'20px',backgroundColor:'white',borderRadius:'10px'}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'20px'}}>
          <div>
          <p style={{color:'black',fontSize:'20px',fontWeight:'bold'}}>Transactions</p>
          </div>
        
         <div style={{display:'flex',gap:'20px'}}>
                <div style={{border:'1px solid #CCCCCC', display:'flex',alignItems:'center',
                 justifyContent:'center',height:'35px',width:'320px',borderRadius:'5px'}}>
                 <FaSearch/>
                <input type="text" placeholder="Search by Bank, Branch, Email, Name, Branch Code e.t.c." style={{border:'none',backgroundColor:'transparent'}}/>
               </div>
                    <div   onClick={() => {
                          setMyTrans(!MyTrans);
                        }} style={{border:'1px solid orangered',display:'flex',alignItems:'center',gap:'10px',
                         padding:'5px',background:'white',justifyContent:'center',width:'100px',borderRadius:'5px',cursor:'pointer' }}>
                         <p style={{color:'orangered'}}>Filter</p>
                         <IoFilterSharp style={{color:'orangered'}}/>
                    </div>
              </div>
          </div>
          <br/>
          {MyTrans && <ThreeTransComponent  /> }

            <div style={{borderBottom:'1px solid #cccc'}}>

           </div>
           <div className='sultabt'>
          <table className='tabst'>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Institution</th>
            <th>Biller</th>
            <th>Branch</th>
            <th>Order</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transdata.map(item => (
            <tr key={item.id}>
              <td>{item.OrderID}</td>
              <td>{item.Institution}</td>
              <td>{item.Biller}</td>
              <td>{item.Branch}</td>
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
          </div>
          <div style={{padding:'30px'}}>
                    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                      <div>
                           <p style={{fontSize:'20px',color:' rgba(33, 33, 33, 1)',fontWeight:'bold'}}>Showing 1 to 10 of 100 enteries</p>
                      </div>
                      <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'30px'}}>
                        <div style={{display:"flex", alignItems:"center",flexDirection:"column", gap:"8px"}}>
                          <img src={collectionarrowone} alt=''/>
                          Prev
                        </div>
                         <div style={{position:'relative',bottom:'20px'}}>
                         <span style={{border:'1px solid rgba(238,238,238,1)', padding:'10px',borderRadius:'5px',color:'black'}}>1</span>
                         </div>
                        <div style={{display:"flex",flexDirection:"column", alignItems:"center", gap:"8px"}}>
                          <img src={collectionarrowtwo} alt=''/>
                          Next
                       </div>
                      </div>
                      </div>
     </div>
          
        </div>
      </>
    </Layout>
  )
}

export default Transactions

