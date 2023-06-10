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
// import React from 'react';

// function App() {
//   const openIndeed = () => {
//     window.open('https://in.indeed.com/q-work-from-home-female-l-maharashtra-jobs.html', '_blank');
//   };

//   return (
//     <div>
//       <h1>Get work for women</h1>
//       <button onClick={openIndeed}>Search</button>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 // Custom CSS file for additional styling if needed

const urls = [
  { url: 'https://www.naukri.com/sewing-jobs-in-home-office-india', description: 'Sewing Job' },
  { url: 'https://www.quikr.com/jobs/watchman-jobs-in-mumbai+zwqxj2726005330', description: 'Watchman' },
  { url: 'https://www.workindia.in/maid-jobs/', description: 'House-help' },
  { url: 'https://jobnukkad.com/baby-care-taker-babysitting-nanny-jobs-mumbai', description: 'Baby-Sitting Job' },
  { url: 'https://in.indeed.com/q-bakery-l-mumbai,-maharashtra-jobs.html?vjk=d68efa0d071ed330', description: 'Baking job' },
];

const App = () => {
  return (
    <div className="container">
      {urls.map((item, index) => (
        <div className="card mb-4" key={index}>
          <div className="card-body">
            <h5 className="card-title">{item.description}</h5>
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Visit Website
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
