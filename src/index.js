import React from "react";
import ReactDOM from "react-dom";

// ReactDOM.render(<h1>Skills</h1>, document.getElementById("root"))

// ReactDOM.render(
//   <div>
//     <h1>Skills</h1>
//     <ul>
//       <li> Web Development</li>
//       <li> UI/UX</li>
//       <li> Content Creator</li>
//     </ul>
//   </div>,
//   document.getElementById("root")
// );

// const fname = "Kae";
// const sname = "Soriano";
// const color1 = "magenta";
// const num = "5";

// ReactDOM.render(<h1>Welcome to my Page! I'm {name} </h1>, document.getElementById("root"))
// ReactDOM.render(
// <div>
//   <h1> Hello {name}! </h1>
//     <p> Your Lucky color is {color1} </p>
//     <p> Your Lucky number is {num} </p>
//     </div>,
//     document.getElementById("root"))

// ReactDOM.render(
//   <div>
//     {/* <h1> Hello {fname + " " + sname }! </h1> */}
//     {/* <h1> Hello {fname} {sname}! </h1> */}
//     <h1> Hello {`${fname} ${sname}`}! </h1>
//       <p> Your Lucky color is {color1} </p>
//       <p> Your Lucky number is {Math.floor(Math.random() * 10)} </p>
//       </div>,
//       document.getElementById("root"))

const name = "Kae";
// const year = 2022;
const currentDate = new Date();
// const year= currentDate.getFullYear();

// console.log(year)

// ReactDOM.render(
//   <div>
//     <p> Created by My Name </p>
//     <p> Copyright Current Year</p>
//   </div>,
//   document.getElementById("root")
// );

ReactDOM.render(
  <div>
    <p> Created by {name} </p>
    {/* <p> Copyright {year} </p> */}
    <p> Copyright {currentDate.getFullYear()} </p>
  </div>,
  document.getElementById("root")
);
