// import React from "react";
// import { render } from "react-dom";
// import { motion } from "framer-motion";
// import move from "lodash-move";

// const CARD_COLORS = ["linear-gradient(to right, #799F0C, #ACBB78)", "linear-gradient(to right, #314755, #26a0da)", "linear-gradient(to right, #009FFF, #ec2F4B)", "linear-gradient(to right, #f12711, #f5af19)"];
// const CARD_OFFSET = 20;
// const SCALE_FACTOR = 0.06;

// const Achievements = () => {
//   const [cards, setCards] = React.useState(CARD_COLORS);
//   const moveToEnd = from => {
//     setCards(move(cards, from, cards.length - 1));
//   };

//   const cardData={
//     "linear-gradient(to right, #799F0C, #ACBB78)" : "Rank 853 in Google Code Jam Farewell Round A 2023",
//     "linear-gradient(to right, #314755, #26a0da)" : "AIR 7681 among 1.2 Million Candidates appearing for JEE Mains",
//     "linear-gradient(to right, #009FFF, #ec2F4B)" : "Expert on Codeforces",
//     "linear-gradient(to right, #f12711, #f5af19)" : "5 Star on Codechef"

//   }

//   return (
//     <div style={wrapperStyle} className="flex justify-center items-center h-auto w-[320px] sm:w-[600px] lg:w-[700px]">
//       <ul style={cardWrapStyle} className="h-[400px] w-[320px] sm:w-[600px] lg:w-[700px] border-white flex justify-center">
//         {cards.map((color, index) => {
//           const canDrag = index === 0;

//           return (
//             <motion.li
//               key={color}
//               style={{
//                 ...cardStyle,
//                 background: color,
//                 border: "2px solid white",
//                 cursor: canDrag ? "grab" : "auto"
//               }}

//               className="h-[280px] sm:h-[320px] md:h-[400px] w-[320px] sm:w-[600px] lg:w-[700px]  p-[15px] sm:p-[50px] rounded-[30px]"

//               animate={{
//                 top: index * -CARD_OFFSET,
//                 scale: 1 - index * SCALE_FACTOR,
//                 zIndex: CARD_COLORS.length - index
//               }}
//               drag={canDrag ? "y" : false}
//               dragConstraints={{
//                 top: 0,
//                 bottom: 0
//               }}
//               onDragEnd={() => moveToEnd(index)}
//             >

//               <div className="flex items-center justify-center text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] ">
//                   {cardData[color]}
//               </div>
//             </motion.li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };
// const wrapperStyle = {
//   position: "relative",
// };

// const cardWrapStyle = {
//   position: "relative",
// };

// // bg-gradient-to-r from-[#a17fe0] to-[#5D26C1] 

// const cardStyle = {
//   position: "absolute",
//   transformOrigin: "top center",
//   listStyle: "none"
// };

// export default Achievements;



import React from 'react'
import EmblaCarousel from '../Carousel/EmblaCarousel'

const Achievements = () => {

  const OPTIONS = { loop: true }
  const cardData = [
    { color: "linear-gradient(to right, #799F0C, #ACBB78)", text: "Rank 853 in Google Code Jam Farewell Round A 2023" },
    { color: "linear-gradient(to right, #314755, #26a0da)", text: "AIR 7681 among 1.2 Million Candidates appearing for JEE Mains" },
    { color: "linear-gradient(to right, #009FFF, #ec2F4B)", text: "Expert on Codeforces" },
    { color: "linear-gradient(to right, #f12711, #f5af19)", text: "5 Star on Codechef" },
    { color: "linear-gradient(to right, #f12711, #f5af19)", text: "5 Star on Codechef" },
    { color: "linear-gradient(to right, #f12711, #f5af19)", text: "5 Star on Codechef" },
  ];

  return (
    <div className='w-full'>
      <EmblaCarousel slides={cardData} options={OPTIONS} />
    </div>
  )
}

export default Achievements