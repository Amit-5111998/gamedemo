import React from "react";
import "./style.scss";

function Dice({ dice, frezer }) {
  return (
    <div className="diceCard">
      {dice.map((items) => {
        return (
          <div
            key={items.id}
            className={`${items.isFrozen ? "paused" : "notactive"} numberBox`}
            onClick={() => frezer(items.id)}
          >
            <p>{items.number}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Dice;
