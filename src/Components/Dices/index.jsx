import React from "react";
import "./style.scss";
function Dice({dice,frezer}) {
  
   return (
    <div className="diceCard">
      {dice.map(items => {
        return (
          <div
            key={items.id}
            className={items.isFrozen ? "paused" : "notactive"}
            onClick={() => frezer(items.id)}
          >
            <div>{items.number}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Dice;
