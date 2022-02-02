// import React from 'react';

// const List = () => {
//   return (
//     <>
//       <h2>list component</h2>
//     </>
//   );
// };

// export default List;

// import React from "react";

// const List = ({ people }) => {
//   return (
//     <>
//       {people.map((person) => {
//         const { id, image, name, age } = person;
//         return (
//           <article key={id} className="person">
//             <img src={image} alt={name} />

//             <div>
//               <h4>{name}</h4>
//               <p>{age} years</p>
//             </div>
//           </article>
//         );
//       })}
//     </>
//   );
// };
// export default List;

import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h5>{name}</h5>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
