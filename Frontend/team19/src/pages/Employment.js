// import React from 'react';
// import Iframe from 'react-iframe';

// function Employment() {
//   return (
//     <div>
//       <h1>Embedding Iframe without CORS Errors</h1>
//       <Iframe
//         url="https://in.indeed.com/q-work-from-home-female-l-maharashtra-jobs.html" // Replace with the URL of the desired website
//         width="100%"
//         height="400px"
//         frameBorder="0"
//       />
//     </div>
//   );
// }

// export default Employment;
import React from 'react';

function App() {
  const openIndeed = () => {
    window.open('https://in.indeed.com/q-work-from-home-female-l-maharashtra-jobs.html', '_blank');
  };

  return (
    <div>
      <h1>Get work for women</h1>
      <button onClick={openIndeed}>Search</button>
    </div>
  );
}

export default App;
