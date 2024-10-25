import Layout from "./Layout";
import { IoIosSearch } from "react-icons/io";
import markinson from "../assets/Images/markinson.png";
import bluebell from "../assets/Images/bluebell.png";
import akars from "../assets/Images/akararrow.svg";
import circleinarrows from "../assets/Images/circleinarrow.svg";
import "./Administrator.css";

import { useState } from "react";
import OrderCol from "./OrderCol";
import InstitutionCollectionAdmins from "./InstitutionCollectionAdmins";
import UpCollectionAdmins from "./UpCollectionAdmins";
import NestedModal from "./NestedModal";
import NestedModalTwo from "./NestedModalTwo";

function Administration() {
    const [institutionAdmins, setInstitutionCollectionAdmins] = useState("Institution Admins");
    const [isNestedOneOpen, setNestedOneOpen] = useState(false);
    const [isNestedTwoOpen, setNestedTwoOpen] = useState(false);
    const [myOrders, setMyOrders] = useState(false); // Assuming this is a boolean

    const handleCloseNestedOne = () => {
        setNestedOneOpen(false);
        // Reset any necessary state here
        setInstitutionCollectionAdmins("Institution Admins"); // Optional: Reset to default if needed
    };

    const handleCloseNestedTwo = () => {
        setNestedTwoOpen(false);
        // Reset any necessary state here
        setInstitutionCollectionAdmins("Institution Admins"); // Optional: Reset to default if needed
    };

    return (
        <Layout>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '20px', alignItems: 'center', padding: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', border: 'none', width: '30%', borderRadius: '5px', backgroundColor: 'white' }}>
                    <IoIosSearch style={{ color: 'grey' }} />
                    <input name="text" placeholder="Search Anything...." style={{ border: 'none', backgroundColor: 'transparent', outline: 'none' }} />
                </div>
                <div>
                    <img src={markinson} alt='' />
                </div>
                <div>
                    <img src={bluebell} alt='' />
                </div>
            </div>

            <div style={{ border: 'none', backgroundColor: 'white', margin: '20px', borderRadius: '10px' }}>
                <div className="flexmain">
                    <p style={{ color: 'black', fontSize: '20px', fontWeight: 'bold' }}>Administrator</p>
                    <div className="circleakarflex">
                        {institutionAdmins === "Institution Admins" ? (
                            <>
                                <div className="flexakar">
                                    <p className="akartext">Sort by</p>
                                    <img
                                        src={akars}
                                        alt=""
                                        onClick={() => {
                                            setMyOrders(!myOrders);
                                        }}
                                        style={{ cursor: "pointer" }}
                                    />
                                </div>
                                <div className="circlearrowinflex">
                                    <img src={circleinarrows} alt="" />
                                    <p
                                        className="circlearrowtext"
                                        onClick={() => setNestedOneOpen(true)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        New Administrator
                                    </p>
                                </div>
                            </>
                        ) : (
                            <div className="circlearrowinflex">
                                <img src={circleinarrows} alt="" />
                                <p
                                    className="circlearrowtext"
                                    onClick={() => setNestedTwoOpen(true)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    New UP Administrator
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                <div style={{ borderBottom: '1px solid pink' }}></div>
                <div>
                    <div className="doubleinstibutton">
                        <div className="instib">
                            {["Institution Admins", "UP Admins"].map((e, i) => (
                                <button
                                    key={i}
                                    className="der"
                                    onClick={() => setInstitutionCollectionAdmins(e)}
                                    style={{
                                        backgroundColor: institutionAdmins === e ? "#FF993A" : "rgba(248, 248, 248, 1)",
                                        padding: "15px",
                                        color: institutionAdmins !== e ? "black" : "white",
                                        outline: "none",
                                        border: "none",
                                        width: '200px',
                                        borderRadius: '10px'
                                    }}
                                >
                                    {e}
                                </button>
                            ))}
                        </div>
                        {myOrders && <OrderCol />}
                    </div>
                    <div>
                        {institutionAdmins === "Institution Admins" ? <InstitutionCollectionAdmins /> : <UpCollectionAdmins />}
                    </div>
                </div>
            </div>

            <NestedModal 
                isOpen={isNestedOneOpen} 
                onClose={handleCloseNestedOne} 
                onNavigateAway={() => {
                    // Any additional logic to handle navigation if needed
                }}
            />
            <NestedModalTwo 
                isOpen={isNestedTwoOpen} 
                onClose={handleCloseNestedTwo} 
                onNavigateAway={() => {
                    // Any additional logic to handle navigation if needed
                }}
            />
        </Layout>
    );
}

export default Administration;
