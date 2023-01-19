import React, { useEffect, useState } from "react";
import "./style.scss";
import Dice from "../../Components/Dices/index";
import DiceArray from "../../constant/DiceValueaArray";

function Home() {
  const [dice, setDice] = useState(DiceArray);
  const [check, setCheck] = useState(false);

  //To roll a dice and check if all are same and freez then set all dies to initail array
  const rollDice = () => {
    if (check) {
      setDice(DiceArray);
      setCheck(false);
      setRolls(0);
    } else {
      setDice((prevdiceSet) => {
        return prevdiceSet.map((die) => {
          return die.isFrozen === false
            ? {
                ...die,
                number: Math.floor(Math.random() * 6) + 1,
              }
            : die;
        });
      });
    }
  };


  /*
    To freez particular dice 
    @param(id) -- to freeze particulat element  
  */

  const frezer = (id) => {
    setDice((prevDiceSet) => {
      return prevDiceSet.map((die) => {
        return die.id === id ? { ...die, isFrozen: !die.isFrozen } : die;
      });
    });
  };

  useEffect(() => {
    // To Check if all dies are same or not if same then set to initial
    const firstCondition = dice.every((die) => die.isFrozen);
    const firstValue = dice[0].number;
    const secondCondition = dice.every((die) => die.number === firstValue);
    if (firstCondition && secondCondition) {
      setCheck(true);
    }
  }, [dice]);

  return (
    <div className="game__board">
      <div className="card">
        <h1>Tenzie</h1>
        <p>
          Roll ntill all dice are the same. click each die to freeze it at its
          current value between rolls.
        </p>
        <Dice dice={dice} frezer={frezer} />
        <div className="rollBtn__container">
          <button onClick={rollDice}> Roll</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
