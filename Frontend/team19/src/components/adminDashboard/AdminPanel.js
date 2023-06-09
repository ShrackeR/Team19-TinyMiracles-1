import React from 'react';
import Dashboard from './Dashboard';
// import Navbar from './Navbar';
import Layout from '../Layout';
import Sidebar from './SideBar';
 
function AdminPanel(props){
 
        return (
            // <Layout>
            <div>
                {/* <Navbar/> */}
                <div class="container-fluid" id="main">
                 <div class="row row-offcanvas row-offcanvas-left">
                   <Sidebar/>
                  {props.children}
                
             </div>
            </div>  
        </div> 
        // </Layout> 
        );
    }
  
export default AdminPanel;