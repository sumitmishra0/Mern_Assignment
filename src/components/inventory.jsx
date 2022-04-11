// import { useState } from "react";

// export const Inventory = () => {
//   const [inv, setInv] = useState({
//     books: 10,
//     notebooks: 13,
//     pens: 40,
//     inkpens:10
//   });
    


//   return (
//     <div
//       style={{
//         border: "1px solid black",
//         borderRadius: "3px",
//         padding: "10px",
//         display: "flex",
//         flexDirection: "column",
//         width: "400px",
//       }}
//     >
//       <div className="items">
//         <span>Books: </span>
//         <button className="circlularButton" onClick={()=>{setInv({...inv,books:inv.books+1})}}>+</button>

//         <button className="circlularButton" onClick={()=>{setInv({...inv,books:inv.books-1})}}>-</button>
//         <span>{inv.books}</span>
//       </div>

//       <div className="items">
//         <span>Notebooks: </span>
//         <button className="circlularButton" onClick={()=>{setInv({...inv,notebooks:inv.notebooks+1})}}>+</button>
//         <button className="circlularButton" onClick={()=>{setInv({...inv,notebooks:inv.notebooks-1})}}>-</button>
//         <span>{inv.notebooks}</span>
//       </div>

//       <div className="items">
//         <span>Pen: </span>
//         <button className="circlularButton" onClick={()=>{setInv({...inv,pens:inv.pens+1})}}>+</button>
//         <button className="circlularButton" onClick={()=>{setInv({...inv,pens:inv.pens-1})}}>-</button>
//         <span>{inv.pens}</span>
//       </div>

//       <div className="items">
//         <span>Ink Pens: </span>
//         <button className="circlularButton" onClick={()=>{setInv({...inv,inkpens:inv.inkpens+1})}}>+</button>
//         <button className="circlularButton" onClick={()=>{
//             if(inv.inkpens>=1){
//             setInv({...inv,inkpens:inv.inkpens-1})
//         }}}>-</button>
//         <span>{inv.inkpens}</span>
//       </div>
           
//       total: {inv.books+inv.inkpens+inv.notebooks+inv.pens}
//     </div>
//   );
// };