import PageSideBar from "./PageSideBar"
import "./Layout.css"
import { useState } from "react";

function Layout({children}) {
  const [isContentVisible, setIsContentVisible] = useState(true); 

  const toggleContentVisibility = () => {
    setIsContentVisible((prev) => !prev); 
  };

  return (
    <div style={{width:'100%',display:'flex'}}>
      <div style={{width:'20%',backgroundColor:"white",height:"150vh"}}>
      <PageSideBar toggleContent={toggleContentVisibility} />
      </div>
      {isContentVisible && (
        <div style={{width:'80%',backgroundColor:'#FBFBFB'}}>
          {children}
        </div>
      )}
     
    </div>
  )
}

export default Layout
