
import './ProUserComponent.css'; // 
import usersarrowcoloreds from '../assets/Images/usersarrowcoloreds.png'
import collectionarrowone from "../assets/Images/arrowatcir.png";
import auditimage from "../assets/Images/arrowisat.png";




function ProUserComponent({ onBack }) {
    const userTable = [
        {
            Name:"Afolabi Abiodun O.",
            EmailAddress:"afolabiabiodun@email.com",
            Institution:"Guaranty Trust Bank PLC",
            InstitutionID:"058",
            DateCreated:"24-05-2022",
        },
        {
            Name:"Oni Issac U.",
            EmailAddress:"issaconi@email.com",
            Institution:"First Bank of Nigeria PLC",
            InstitutionID:"011",
            DateCreated:"24-05-2022",
        },
     
    ]
  return (
    <>
    <div style={{paddingTop:'10px'}}>
    <div>
    
 <div style={{margin:'10px'}}> 
    <div>
      <img src={usersarrowcoloreds} alt='' onClick={onBack} style={{width:'40px'}}/>
    </div>

       <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',}}>
       <div>
        <p style={{fontWeight:'bold',fontSize:'25px'}}>Processor Admin</p>
       </div>
      
      </div> 
      </div>
    </div>
     <br/>
     
      <div style={{borderBottom:'1px solid rgba(238, 238, 238, 1)'}}>

     </div>
     <br/>
   
                  <div className="sultab">
                    <table className="tabs">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>EmailAddress</th>
                          <th>Institution</th>
                          <th>InstitutionID</th>
                          <th>DateCreated</th>
                         
                        </tr>
                      </thead>
                      <tbody>
                        {userTable.map((item) => (
                          <tr key={item.id}>
                           
                            <td>{item.Name}</td>
                            <td>{item.EmailAddress}</td>
                            <td>{item.Institution}</td>
                            <td>
                              {item.InstitutionID}
                            </td>
                            <td>{item.DateCreated}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
              
    
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <div style={{padding:'30px'}}>
                    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                      <div>
                           {/* <p style={{fontSize:'20px',color:' rgba(33, 33, 33, 1)',fontWeight:'bold'}}>Showing 1 to 10 of 100 enteries</p> */}
                      </div>
                      <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'30px'}}>
                        <div style={{display:"flex", alignItems:"center",flexDirection:"column", gap:"8px"}}>
                          <img src={collectionarrowone} alt=''/>
                          Prev
                        </div>
                         <div style={{position:'relative',bottom:'20px'}}>
                         <span style={{border:'1px solid rgba(238,238,238,1)', padding:'10px',borderRadius:'5px'}}>1</span>
                         </div>
                        <div style={{display:"flex",flexDirection:"column", alignItems:"center", gap:"8px"}}>
                          <img src={auditimage} alt=''/>
                          Next
                       </div>
                      </div>
                    </div>
                    </div>
    </div>
    
   
    </>
  );
}

export default ProUserComponent;
