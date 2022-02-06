// import React, { useState } from "react";
// import data from "./data";
// import List from "./List";
// function App() {
//   return <h2>reminder project setup</h2>;
// }

// export default App;

// import React, { useState } from "react";
// import data from "./data";
// import List from "./List";

// const App = () => {
//   const [people, setPeople] = useState(data);

//   const clearAll = () => {
//     setPeople([]);
//   };
//   return (
//     <main>
//       <section className="container">
//         <h3>{people.length} birthdays today</h3>
//         <List people={people} />
//         <button onClick={() => clearAll()}>clear all</button>
//       </section>
//     </main>
//   );
// };

// export default App;

import React, { useState } from "react";
import data from "./data";
import List from "./List";
const App = () => {
  const [people, setPeople] = useState(data);

  const clearAll = () => {
    setPeople([]);
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => clearAll()}>clear items</button>
      </section>
    </main>
  );
};

export default App;
