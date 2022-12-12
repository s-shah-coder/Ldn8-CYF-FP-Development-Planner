// 1. Testing Front and Backend with server proxy and useState & useEffect (It's working!)

// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [backendData, setBackendData] = useState([{}]);

//   useEffect(() => {
//     fetch("/api")
//       .then((response) => response.json())
//       .then((data) => {
//         setBackendData(data);
//       });
//   }, []);

//   return (
//     <div>
//       {typeof backendData.users === "undefined" ? (
//         <p>Loading...</p>
//       ) : (
//         backendData.users.map((users, i) => <p key={i}>{users}</p>)
//       )}
//     </div>
//   );
// };

//

// 2. Testing Front and Backend with PostgreSQL

import React from "react";

const App = () => {
  return (
    <div>Hello Team</div>
  )   
};

export default App;
