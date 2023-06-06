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


import {QrScanner} from '@yudiel/react-qr-scanner';
import { useAuthContext } from "../hooks/useAuthContext";

const Scanner = () => {
    const { user } = useAuthContext();

  return (
      <QrScanner
          onDecode={(result) => { console.log(result + "&user="+user.id)}}
          onError={(error) => console.log(error?.message)}
      />
  );
}
export default Scanner