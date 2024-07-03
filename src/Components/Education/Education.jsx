import React from "react";
import { render } from "react-dom";
import { motion } from "framer-motion";
import move from "lodash-move";

const CARD_COLORS = ["linear-gradient(to right, #799F0C, #ACBB78)", "linear-gradient(to right, #314755, #26a0da)", "linear-gradient(to right, #cc2b5e, #753a88)"];
const CARD_OFFSET = 20;
const SCALE_FACTOR = 0.06;

const Education = () => {
  const [cards, setCards] = React.useState(CARD_COLORS);
  const moveToEnd = from => {
    setCards(move(cards, from, cards.length - 1));
  };

  const cardData={
    "linear-gradient(to right, #799F0C, #ACBB78)" : {name: "CSE @ DTU", year: "2025", place: "Delhi, India", grade:"9 CGPA"},
    "linear-gradient(to right, #314755, #26a0da)" : {name: "GDGPS", year: "2021", place: "Delhi, India", grade:"95.4%"},
    "linear-gradient(to right, #cc2b5e, #753a88)" : {name: "DPS", year: "2019", place: "Delhi, India", grade:"94.2%"}
  }

  return (
    <div style={wrapperStyle} className="flex justify-center items-center h-auto w-[320px] sm:w-[600px] lg:w-[700px]">
      <ul style={cardWrapStyle} className="h-[400px] w-[320px] sm:w-[600px] lg:w-[700px] border-white flex justify-center">
        {cards.map((color, index) => {
          const canDrag = index === 0;

          return (
            <motion.li
              key={color}
              style={{
                ...cardStyle,
                background: color,
                border: "2px solid white",
                cursor: canDrag ? "grab" : "auto"
              }}

              className="h-[280px] sm:h-[320px] md:h-[400px] w-[320px] sm:w-[600px] lg:w-[700px]  p-[15px] sm:p-[50px] rounded-[30px]"

              animate={{
                top: index * -CARD_OFFSET,
                scale: 1 - index * SCALE_FACTOR,
                zIndex: CARD_COLORS.length - index
              }}
              drag={canDrag ? "y" : false}
              dragConstraints={{
                top: 0,
                bottom: 0
              }}
              onDragEnd={() => moveToEnd(index)}
            >

              <div className="flex flex-col">
                <div className="flex justify-between items-center pt-[20px] sm:pt-[0px]">
                  <div className="text-[1.9rem] sm:text-[2.5rem] md:text-[3rem] text-[#333] font-bold">School:</div>
                  <div className='text-[1.6rem] sm:text-[2rem] md:text-[2.5rem] text-[#f1f1af]'>{cardData[color].name}</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-[1.9rem] sm:text-[2.5rem] md:text-[3rem] text-[#333] font-bold">Year:</div>
                  <div className='text-[1.6rem] sm:text-[2rem] md:text-[2.5rem] text-[#f1f1af]'>{cardData[color].year}</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-[1.9rem] sm:text-[2.5rem] md:text-[3rem] text-[#333] font-bold">Place:</div>
                  <div className='text-[1.6rem] sm:text-[2rem] md:text-[2.5rem] text-[#f1f1af]'>{cardData[color].place}</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-[1.9rem] sm:text-[2.5rem] md:text-[3rem] text-[#333] font-bold">Grade:</div>
                  <div className='text-[1.6rem] sm:text-[2rem] md:text-[2.5rem] text-[#f1f1af]'>{cardData[color].grade}</div>
                </div>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};
const wrapperStyle = {
  position: "relative",
};

const cardWrapStyle = {
  position: "relative",
};

// bg-gradient-to-r from-[#a17fe0] to-[#5D26C1] 

const cardStyle = {
  position: "absolute",
  transformOrigin: "top center",
  listStyle: "none"
};

export default Education;

