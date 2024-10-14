import "./TableCollection.css";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import markinson from "../assets/Images/markinson.png";
import bluebell from "../assets/Images/bluebell.png";
import Layout from "./Layout";
import collectionorangearrow from "../assets/Images/orangearrow.png";
import collectionarrowone from "../assets/Images/arrowatcir.png";
import collectionarrowtwo from "../assets/Images/arrowrightcircle.png";
import { PiPencilSimpleLine } from "react-icons/pi";
import main from "../assets/Images/circleinarrow.svg";
import { useNavigate } from "react-router-dom";
function TableCollection() {
  const data = [
    {
      id: 1,
      BillersName: "DSTV",
      EmailAddress: "Dstv@gmail.com",
      ProductName: "ShowMax",
      TotalFee: "#25,500",
      DateCreated: "24-05-2022",
    },
    {
      id: 2,
      BillersName: "FRSC",
      EmailAddress: "Frsc@gmail.com",
      ProductName: "Driver License",
      TotalFee: "#12,500",
      DateCreated: "24-05-2022",
    },
    {
      id: 3,
      BillersName: "FIRS",
      EmailAddress: "FIRS@gmail.com",
      ProductName: "Driver License",
      TotalFee: "#32,500",
      DateCreated: "04-01-2022",
    },
    {
      id: 4,
      BillersName: "GOTV",
      EmailAddress: "GotvNigeria@gmail.com",
      ProductName: "GOtv",
      TotalFee: "#8,000",
      DateCreated: "04-01-2022",
    },
    {
      id: 5,
      BillersName: "WAEC",
      EmailAddress: "waecofficial@gmail.com",
      ProductName: "WAEC",
      TotalFee: "#15000",
      DateCreated: "04-01-2022",
    },
    {
      id: 6,
      BillersName: "UNILAG",
      EmailAddress: "unilagedu@gmail.com",
      ProductName: "School Fees",
      TotalFee: "#125,500",
      DateCreated: "24-05-2022",
    },
    {
      id: 7,
      BillersName: "FUTA",
      EmailAddress: "futa@gmail.com",
      ProductName: "School Fees",
      TotalFee: "#75,000",
      DateCreated: "14-03-2022",
    },
    {
      id: 8,
      BillersName: "OAU",
      EmailAddress: "Oauedu@",
      ProductName: "Faulty Fees",
      TotalFee: "#66,500",
      DateCreated: "14-03-2022",
    },
    {
      id: 9,
      BillersName: "NPA",
      EmailAddress: "npa@gmail.com",
      ProductName: "School Fees",
      TotalFee: "#21,500",
      DateCreated: "14-03-2022",
    },
    {
      id: 10,
      BillersName: "LASU",
      EmailAddress: "Lasuedu@gmail.com",
      ProductName: "Faculty Fees",
      TotalFee: "#96,500",
      DateCreated: "12-04-2022",
    },

    // Add more data as needed
  ];

  const info = [
    {
      Institutions: "Access Bank Plc",
      Abbreviations: "Access",
      EmailsAddress: "afolabiabiodun@accessbankplc.com",
      InstitutionCode: "058",
      DatesCreated: "24-05-2022",
      Users: "24",
      CBA: "Yes",
    },
    {
      Institutions: "First Bank of Nigeria Limited",
      Abbreviations: "FBN",
      EmailsAddress: "issaconi@fbnnigeria.com",
      InstitutionCode: "011",
      DatesCreated: "24-05-2022",
      Users: "11",
      CBA: "No",
    },
    {
      Institutions: "Guaranty Trust Holding Company Plc",
      Abbreviations: "GT Bank",
      EmailsAddress: "ilori@gtbanknigeria.com",
      InstitutionCode: "047",
      DatesCreated: "04-01-2022",
      Users: "17",
      CBA: "Yes",
    },
    {
      Institutions: "First City Monument Bank Limited",
      Abbreviations: "FCMB",
      EmailsAddress: "funke@fcmbnigeria.com",
      InstitutionCode: "044",
      DatesCreated: "04-01-2022",
      Users: "13",
      CBA: "No",
    },
    {
      Institutions: "Union Bank of Nigeria Plc",
      Abbreviations: "Union Bank",
      EmailsAddress: "georgey@unionbank.com",
      InstitutionCode: "033",
      DatesCreated: "04-01-2022",
      Users: "19",
      CBA: "Yes",
    },
    {
      Institutions: "United Bank for Africa Plc",
      Abbreviations: "UBA",
      EmailsAddress: "koladepeters@ubanigeria.com",
      InstitutionCode: "058",
      DatesCreated: "24-05-2022",
      Users: "08",
      CBA: "No",
    },
    {
      Institutions: "Zenith Bank Plc",
      Abbreviations: "Zenith Bank",
      EmailsAddress: "olowokerepeter@zenithbank.com",
      InstitutionCode: "070",
      DatesCreated: "14-03-2022",
      Users: "12",
      CBA: "Yes",
    },
    {
      Institutions: "Ecobank Nigeria",
      Abbreviations: "EcoBank",
      EmailsAddress: "boluwatife@ecobankng.com",
      InstitutionCode: "214",
      DatesCreated: "14-03-2022",
      Users: "14",
      CBA: "Yes",
    },
    {
      Institutions: "Heritage Bank Plc",
      Abbreviations: "Heritage Bank",
      EmailsAddress: "tomiwa@heritagebank.com",
      InstitutionCode: "011",
      DatesCreated: "14-03-2022",
      Users: "22",
      CBA: "No",
    },
    {
      Institutions: "Stanbic IBTC Bank Plc",
      Abbreviations: "Stanbic IBTC",
      EmailsAddress: "saheed@stanbicibtc.com",
      InstitutionCode: "044",
      DatesCreated: "12-04-2022",
      Users: "43",
      CBA: "No",
    },
  ];

  const Navigate = useNavigate();

  return (
    <Layout>
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "20px",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "none",
              width: "30%",
              borderRadius: "5px",
              backgroundColor: "white",
            }}
          >
            <IoIosSearch style={{ color: "red" }} />
            <input
              name="text"
              placeholder="Search Anything...."
              style={{
                border: "none",
                backgroundColor: "transparent",
                outline: "none",
              }}
            />
          </div>
          <div>
            <img src={markinson} alt="" />
          </div>
          <div>
            <img src={bluebell} alt="" />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "20px",
          }}
        >
          <div>
            <img
              src={collectionorangearrow}
              alt=""
              onClick={() => Navigate(-1)}
              style={{ width: "45px" }}
            />
          </div>
          <div
            style={{
              border: "none",
              backgroundColor: "white",
              borderRadius: "10px",
            }}
          >
            <div style={{ padding: "20px" }}>
              <p
                style={{ color: "black", fontSize: "20px", fontWeight: "bold" }}
              >
                Access Bank Plc
              </p>
              <p style={{ color: "pink", fontSize: "15px" }}>
                These are the list of Available Billers under the stated
                institutions
              </p>
            </div>
            <div style={{ borderBottom: "1px solid #EEEEEE" }}></div>
            <div
              className="sultabes"
              style={{ background: "", padding: "10px" }}
            >
              <table className="tabes">
                <thead>
                  <tr>
                    <th>Billers Name</th>
                    <th>Email Address</th>
                    <th>Product Name</th>
                    <th>Total Fee</th>
                    <th>Date Created</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((list) => (
                    <tr key={list.id}>
                      <td>{list.BillersName}</td>
                      <td>{list.EmailAddress}</td>
                      <td>{list.ProductName}</td>
                      <td>{list.TotalFee}</td>
                      <td>{list.DateCreated}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* <div className="sultab">
                      <table className="tabs">
                        <thead>
                          <tr>
                            <th>Institutions</th>
                            <th>Abbreviations</th>
                            <th>EmailsAddress</th>
                            <th>InstitutionCode</th>
                            <th>DatesCreated</th>
                            <th>Users</th>
                            <th>CBA</th>
                            <th>Edit</th>
                          </tr>
                        </thead>
                        <tbody>
                          {info.map((item) => (
                            <tr key={item.id}>
                              <td>{item.Institutions}</td>
                              <td>{item.Abbreviations}</td>
                              <td>{item.EmailsAddress}</td>
                              <td>{item.InstitutionCode}</td>
                              <td>{item.DatesCreated}</td>
                              <td>{item.Users}</td>
                              <td>{item.CBA}</td>
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
                    </div> */}
          </div>
        </div>
      </>
    </Layout>
  );
}

export default TableCollection;
