
import './TellerComponent.css'; // 
import usersarrowcoloreds from '../assets/Images/usersarrowcoloreds.png'
import collectionarrowone from "../assets/Images/arrowatcir.png";
import collectionarrowtwo from "../assets/Images/arrowrightcircle.png";
import { IoFilterSharp } from "react-icons/io5";
import { FaSearch } from 'react-icons/fa';



function TellerComponent({ onBack }) {
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
        {
            Name:"Femi Ilori A.",
            EmailAddress:"ilori@email.com",
            Institution:"Polaris Bank PLC",
            InstitutionID:"047",
            DateCreated:"04-01-2022",   
        },
        {
            Name:"Aderogba Funke E.",
            EmailAddress:"funke@email.com",
            Institution:"Access Bank PLC",
            InstitutionID:"044",
            DateCreated:"04-01-2022",   
        },
        {
            Name:"George Berkley A.",
            EmailAddress:"georgey@email.com",
            Institution:"United Bank for Africa PLC",
            InstitutionID:"033",
            DateCreated:"04-01-2022",   
        },
        {
            Name:"Kolade Peters O.",
            EmailAddress:"koladepeters@email.com",
            Institution:"Guaranty Trust Bank PLC",
            InstitutionID:"058",
            DateCreated:"24-05-2022",   
        },
        {
            Name:"Segun Olowokere T.",
            EmailAddress:"olowokerepeter@email.com",
            Institution:"Fidelity Bank PLC",
            InstitutionID:"070",
            DateCreated:"14-03-2022",   
        },
        {
            Name:"Boluwatife Ojo P.",
            EmailAddress:"boluwatife@email.com",
            Institution:"First City Monument Bank PLC",
            InstitutionID:"214",
            DateCreated:"14-03-2022",   
        },
        {
            Name:"Tomiwa Adeleke A.",
            EmailAddress:"tomiwa@email.com",
            Institution:"First Bank of Nigeria PLC",
            InstitutionID:"011",
            DateCreated:"14-03-2022",   
        },
        {
            Name:"Saheed Olawole O.",
            EmailAddress:"saheed@email.com",
            Institution:"Access Bank PLC",
            InstitutionID:"044",
            DateCreated:"12-04-2022",   
        },
    ]
  return (
    <>
  
  
    
 
  <div style={{padding:'20px',}}>
        <div style={{padding:'30px'}}>
          <img src={usersarrowcoloreds} alt='' onClick={onBack} style={{width:'40px'}}/>
        </div>

        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'30px'}}>
        <div>
          <p style={{fontWeight:'bold',fontSize:'25px',color:'black'}}>Tellers</p>
        </div>
        <div style={{display:'flex', alignItems:'center',gap:'10px'}}>
      
        <div style={{border:'1px solid #CCCCCC', display:'flex',alignItems:'center',
          justifyContent:'center',height:'35px',width:'320px',borderRadius:'5px'}}>
          <FaSearch style={{color:'grey',}}/>
          <input type="text" placeholder="Search by Bank, Branch, Email, Name, Branch Code e.t.c." style={{border:'none',backgroundColor:'transparent'}}/>
        </div>

          <div style={{border:'1px solid orangered',display:'flex',alignItems:'center',gap:'10px',
            padding:'5px',background:'white',justifyContent:'center',width:'100px',borderRadius:'5px'}}>
          <p style={{color:'orangered'}}>Filter</p>
          <IoFilterSharp style={{color:'orangered'}}/>
          </div>
        </div>
        </div> 
        <br/>
        <div className="sultabx">
                    <table className="tabsx">
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
         <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',padding:'30px'}}>
                      <div>
                           {/* <p style={{fontSize:'20px',color:' rgba(33, 33, 33, 1)',fontWeight:'bold'}}>Showing 1 to 10 of 100 enteries</p> */}
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
    
  
   
    </>
  );
}

export default TellerComponent;
