// import React, { useState } from "react";

export{ };
//  const TsReactTest = () => {
//     const persons: { name: string; age: number }[] = [
//       {
//         name: "jack",
//         age: 32,
//       },
//       {
//         name: "yun",
//         age: 33,
//       },
//     ];

//   const { value, clear, remove0, add } = useArray(persons);
//   add( { name: "string", age: 23 });
//   clear();
//   remove0();  
//   console.log(value);
  
//   return <div>
//     {/* {value.map((x, index) => <div key={index}>{ x.name}<span>{x.age}</span></div> )} */}
//   </div>
// };

// const useArray = (_value: { name: string; age: number }[]) => {
//   const [value ,setValue] =useState(_value)
//   // let value = _value;
  
//   const clear = () => {
//     setValue([]);
//   };
//   const remove0 = () => {
//     _value.splice(0, 1);
//   };
//   const add = (item:{ name: string; age: number }) => {
//     _value.push(item);
//   };

//   return { value, clear, remove0, add };
// };
