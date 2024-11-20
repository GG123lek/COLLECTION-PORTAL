import "./Transactions.css";
import markinson from "../assets/Images/markinson.png";
import bluebell from "../assets/Images/bluebell.png";
import { FaSearch } from "react-icons/fa";
import { IoFilterSharp } from "react-icons/io5";
import ThreeTransComponent from "../Components/ThreeTransComponent";
import { useState } from "react";
import Layout from "./Layout";

function Transactions() {
  const [MyTrans, setMyTrans] = useState(false);

  const transdata = [
    {
      OrderID: "AKDSF34",
      Institution: "Guaranty Trust Bank PLC",
      Biller: "FRSC",
      Branch: "King George Rd",
      Order: "Driver's License",
      Date: "26/04/2022",
      Amount: "N26,500.00",
      Status: "Successful",
    },
    // Add the rest of the data entries here
  ];

  return (
    <Layout>
      <div style={{ display: "flex", justifyContent: "flex-end", gap: "20px", alignItems: "center", padding: "20px" }}>
        <div>
          <img src={markinson} alt="Markinson" />
        </div>
        <div>
          <img src={bluebell} alt="Bluebell" />
        </div>
      </div>
      <div style={{ border: "none", margin: "20px", backgroundColor: "white", borderRadius: "10px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px" }}>
          <div>
            <p style={{ color: "black", fontSize: "20px", fontWeight: "bold" }}>Transactions</p>
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <div
              style={{
                border: "1px solid #CCCCCC",
                display: "flex",
                width: "320px",
                borderRadius: "5px",
                alignItems: "center",
                paddingLeft: "10px",
              }}
            >
              <FaSearch style={{ color: "red" }} />
              <input
                type="text"
                placeholder="Search by Bank, Branch, Email, Name, Branch Code e.t.c."
                style={{ border: "none", backgroundColor: "transparent" }}
              />
            </div>
            <div
              className="bok"
              onClick={() => setMyTrans(!MyTrans)}
              style={{
                border: "1px solid orangered",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "5px",
                background: "white",
                justifyContent: "center",
                width: "100px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              <p style={{ color: "orangered" }}>Filter</p>
              <IoFilterSharp style={{ color: "orangered" }} />
            </div>
          </div>
        </div>
        <br />
        {MyTrans && <ThreeTransComponent />}
        <div className="sultabt">
          <table className="tabst">
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
              {transdata.map((item, index) => (
                <tr key={index}>
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
                          item.Status === "Successful"
                            ? "rgba(230, 246, 233, 1)"
                            : item.Status === "Failed"
                            ? "rgba(255, 58, 68, 0.1)"
                            : item.Status === "Pending"
                            ? "rgba(255, 245, 235, 1)"
                            : "transparent",
                        color:
                          item.Status === "Successful"
                            ? "rgba(1, 169, 38, 1)"
                            : item.Status === "Failed"
                            ? "rgba(255, 0, 17, 1)"
                            : item.Status === "Pending"
                            ? "rgba(255, 153, 58, 1)"
                            : "transparent",
                        padding: "10px",
                        borderRadius: "5px",
                        textAlign: "center",
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
      </div>
    </Layout>
  );
}

export default Transactions;
