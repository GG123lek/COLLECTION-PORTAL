import PageSideBar from "./PageSideBar"


function Layout({children}) {
  return (
    <div style={{width:'100%',display:'flex'}}>
      <div style={{width:'20%',backgroundColor:"white",height:"150vh"}}>
       <PageSideBar/>
      </div>
      <div style={{width:'80%',backgroundColor:'#FBFBFB'}}>
       {children}
      
      </div>
    </div>
  )
}

export default Layout
