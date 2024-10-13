import "./InstitutionCollectionAdmins.css"
import collectionarrowone from "../assets/Images/arrowatcir.png"
import collectionarrowtwo from "../assets/Images/arrowrightcircle.png"
import { PiPencilSimpleLine } from "react-icons/pi";

function InstitutionCollectionAdmins() {
  const data = [
    {
      Name: "Afolabi Abiodun O.",
      EmailAddress: "afolabiabiodun@email.com",
      Institution: "Guaranty Trust Bank PLC",
      InstitutionID: "058",
      Status: "Enabled",
      DateCreated: "24-05-2022",
      Edit: "",
    },
    {
      Name: "Oni Issac U.",
      EmailAddress: "issaconi@email.com",
      Institution: "First Bank of Nigeria PLC",
      InstitutionID: "011",
      Status: "Enabled",
      DateCreated: "24-05-2022",
      Edit: "",
    },
    {
      Name: "Femi Ilori A.",
      EmailAddress: "ilori@email.com",
      Institution: "Polaris Bank PLC",
      InstitutionID: "047",
      Status: "Suspended",
      DateCreated: "04-01-2022",
      Edit: "",
    },
    {
      Name: "Aderogba Funke E.",
      EmailAddress: "funke@email.com",
      Institution: "Access Bank PLC",
      InstitutionID: "044",
      Status: "Enabled",
      DateCreated: "04-01-2022",
      Edit: "",
    },
    {
      Name: "George Berkley A.",
      EmailAddress: "georgey@email.com",
      Institution: "United Bank for Africa PLC",
      InstitutionID: "033",
      Status: "Disabled",
      DateCreated: "04-01-2022",
      Edit: "",
    },
    {
      Name: "Segun Olowokere T.",
      EmailAddress: "olowokerepeter@email.com",
      Institution: "Guaranty Trust Bank PLC",
      InstitutionID: "070",
      Status: "Enabled",
      DateCreated: "24-05-2022",
      Edit: "",
    },
    {
      Name: "Boluwatife Ojo P.",
      EmailAddress: "boluwatife@email.com",
      Institution: "Fidelity Bank PLC",
      InstitutionID: "214",
      Status: "Disabled",
      DateCreated: "14-03-2022",
      Edit: "",
    },
    {
      Name: "Tomiwa Adeleke A.",
      EmailAddress: "tomiwa@email.com",
      Institution: "First City Monument Bank PLC",
      InstitutionID: "011",
      Status: "Suspended",
      DateCreated: "14-03-2022",
      Edit: "",
    },
    {
      Name: "Saheed Olawole O.",
      EmailAddress: "saheed@email.com",
      Institution: "First Bank of Nigeria PLC",
      InstitutionID: "044",
      Status: "Enabled",
      DateCreated: "14-03-2022",
      Edit: "",
    },
  ];
  



   







  return (
    <>
      <div>
        <div className="textapprove">
          <p className="approve">Approved Admin</p>
        </div>

        <div>
          <div className="sultab">
            <table className="tabs">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email Address</th>
                  <th>Institution</th>
                  <th>Institution ID</th>
                  <th>Status</th>
                  <th>Date Created</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.Name}</td>
                    <td>{item.EmailAddress}</td>
                    <td>{item.Institution}</td>
                    <td>{item.InstitutionID}</td>
                    <td>
                      <div
                        style={{
                          backgroundColor:
                            item?.Status === "Enabled"
                              ? "rgba(230, 246, 233, 1)"
                              : item?.Status === "Disabled"
                              ? "rgba(255, 58, 68, 0.1)"
                              : item?.Status === "Suspended"
                              ? "rgba(255, 245, 235, 1)"
                              : "transparent",
                          color:
                            item?.Status === "Enabled"
                              ? "rgba(1, 169, 38, 1)"
                              : item?.Status === "Disabled"
                              ? "rgba(255, 0, 17, 1)"
                              : item?.Status === "Suspended"
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
                    <td>{item.DateCreated}</td>
                    <td>
                      <div style={{ color: "rgba(150, 148, 148, 1)" }}>
                      <PiPencilSimpleLine />
                        {item.Edit}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <br />
          <br />
          <div className="mainflexpage">
            <p className="mainflexpageword">Showing 1 to 10 of 100 entries</p>
            <div className="myflexpage">
              <div>
                <img src={collectionarrowone} alt="" /> 
                <br />
                <p className="mainsentence">Prev</p>
              </div>
              <div className="boxatone">
                <p style={{color:'black'}}>1</p>
              </div>
              <div>
                 <img src={collectionarrowtwo} alt="" /> 
                <p className="secondsentence">Next</p>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </>
  );
}

export default InstitutionCollectionAdmins;
