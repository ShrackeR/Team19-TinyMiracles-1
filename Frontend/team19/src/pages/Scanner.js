// import React, { useState } from 'react';
// import { QrReader } from 'react-qr-reader';

// const Scanner = (props) => {
//   const [data, setData] = useState('No result');

//   return (
//     <>
//       <QrReader
//         onResult={(result, error) => {
//           if (!!result) {
//             setData(result?.text);
//           }

//           if (!!error) {
//             console.info(error);
//           }
//         }}
//         style={{ width: '100%' }}
//       />
//       <p>{data}</p>
//     </>
//   );
// };{}
// export default Scanner


// import {QrScanner} from '@yudiel/react-qr-scanner';
// import { useAuthContext } from "../hooks/useAuthContext";

// const Scanner = () => {
//     const { user } = useAuthContext();
    
//   return (
//       <QrScanner
//           onDecode={(result) => { console.log(result + "&user="+user.id)}}
//           onError={(error) => console.log(error?.message)}
//       />
//   );
// }
// export default Scanner


import { QrScanner } from '@yudiel/react-qr-scanner';
import { useAuthContext } from "../hooks/useAuthContext";
import { useState} from 'react';
import { Navigate } from 'react-router-dom';
import "./scan.css"
const Scanner = () => {
  const { user } = useAuthContext();
    // const[done,setDone]=useState(0);
  const handleDecode = async (result) => {
    try {
      console.log(result.text,"yoo");

      const response = await fetch(`https://miracleachievers.shreeraj.me/backend/api/event/markAttendance?${result.text}&user=${user.id}`, {
        method: 'GET',
        // Add any additional headers or options if required
      });

      if (response.ok) {
        const responseData = await response.json();
        
        alert(responseData);
        <Navigate to="/" />
        
        // window.location.reload(false);
        // Process the response data further if needed
      } else {
        // Handle error case
        alert('Error:', response.status);
      }
    } catch (error) {
      alert('Error:', error);
    }
  };

  return (
       <QrScanner
      onResult={handleDecode}
      onError={(error) => console.log(error?.message)}
      style={{ width: '200px', height: '200px' }} // Specify the desired height here
    />
    
  );
};

export default Scanner;
