import './UpCollectionAdmins.css'
import { PiPencilSimpleLine } from "react-icons/pi";
 

function UpCollectionAdmins() {

  const data = [
    {
      Name: "Afolabi Abiodun O.",
      EmailAddress: "afolabiabiodun@email.com",
      Role: "Super Admin 2",
      Status: "Enabled",
      DateCreated: "24-05-2022",
      Edit: "",
    },
    {
      Name: "Oni Issac U.",
      EmailAddress: "issaconi@email.com",
      Role: "Audit",
      Status: "Enabled",
      DateCreated: "24-05-2022",
      Edit: "",
    },
    {
      Name: "Femi Ilori A.",
      EmailAddress: "ilori@email.com",
      Role: "Processor Admin",
      Status: "Suspended",
      DateCreated: "04-01-2022",
      Edit: "",
    },
    {
      Name: "Aderogba Funke E.",
      EmailAddress: "funke@email.com",
      Role: "Processor User",
      Status: "Enabled",
      DateCreated: "04-01-2022",
      Edit: "",
    },
    {
      Name: "George Berkley A.",
      EmailAddress: "georgey@email.com",
      Role: "Operation User",
      Status: "Disabled",
      DateCreated: "04-01-2022",
      Edit: "",
    },
   
   
   
  ]

  return (
    <>
        
     <div className="sultab">
            <table className="tabs">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email Address</th>
                  <th>Role</th>
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
                    <td>{item.Role}</td>
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
                       <PiPencilSimpleLine/>
                        {item.Edit}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

      

    </>
  )
}

export default UpCollectionAdmins
