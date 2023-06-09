import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
const User=(props)=>{
    const id=props.id;
    const [userData,setUserData]=useState();
    useEffect(()=>{
        const fetchData= async()=>{
              const response = await fetch(`http://localhost:4000/api/user/get/${id}`);
              const data = await response.json();
              setUserData(data);
        }
        fetchData();
            
},[])

return (<>
    {userData && <tr>
        <td> <Link to={`/admin/allusers/view/${id}`}>{userData.name}</Link></td>
       
    
    </tr>}
</>)

}
export default User;