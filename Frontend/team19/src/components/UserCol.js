import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthContext2 } from '../hooks/useAuthContext2'

const User=(props)=>{
    const { admin } = useAuthContext2()

    const id=props.id;
    const [userData,setUserData]=useState();
    useEffect(()=>{
        const fetchData= async()=>{
              const response = await fetch(`http://35.244.31.186:8080/api/user/get/${id}`,{ headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${admin.token}`
              }});
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