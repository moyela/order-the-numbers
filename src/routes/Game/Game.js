import "./Game.css";
import React, { useState, useEffect } from "react";
import { shuffleNumbers } from "../../scripts/shuffleNumbers";
import { getPositionCoordinate } from "../../scripts/positionCoordinate";
import { isMovable } from "../../scripts/movable";
import { isSorted } from "../../scripts/complete";
import { spreadNumbers } from "../../scripts/spreadNumbers";
import { groupNumbers } from "../../scripts/groupNumbers";
import * as timerFunctions from "../../scripts/timer";
import StartGameModal from "../../components/StartGame/StartGameModal";
import ContinueGameModal from "../../components/ContinueGame/ContinueGameModal";
import HowToPlayModal from "../../components/HowToPlay/HowToPlayModal";
import PauseModal from "../../components/Pause/PauseModal";
import ReferenceModal from "../../components/Reference/ReferenceModal";

function Game() {
  const [puzzleNumbers, setPuzzleNumbers] = useState([]);
  const [finish, setFinish] = useState(false);
  const [moves, setMoves] = useState(0);
  const [startGameModal, setStartGameModal] = useState(true);
  const [startGame, setStartGame] = useState(false);
  const [continueGameModal, setContinueGameModal] = useState(false);
  const [continueGame, setContinueGame] = useState(false);
  const [howToPlayModal, setHowToPlayModal] = useState(false);
  const [pauseModal, setPauseModal] = useState(false);
  const [referenceModal, setReferenceModal] = useState(false);

  useEffect(() => {
    if (startGame) {
      setPuzzleNumbers(shuffleNumbers([...Array(9).keys()]));
      setStartGameModal(false);
      timerFunctions.start();
    }
  }, [startGame]);

  useEffect(() => {
    if (finish) {
      setStartGame(false);
      setContinueGame(false);
      timerFunctions.pause();
      setTimeout(() => {
        setContinueGameModal(true);
      }, 4500);
    }
  }, [finish]);

  useEffect(() => {
    if (continueGame) {
      resetGame();
      setStartGame(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [continueGame]);

  useEffect(() => {
    if (puzzleNumbers.length > 0) {
      let groupedNumbers = groupNumbers(puzzleNumbers);
      if (isSorted(groupedNumbers)) {
        setFinish(true);
        for (let i = 1; i < puzzleNumbers.length; i++) {
          setTimeout(() => {
            document.getElementById(i).style.cssText =
              "background: #30be37; border: #30be37 solid;";
          }, i * 500);
        }
      }
    }
  }, [puzzleNumbers]);

  const resetGame = () => {
    for (let i = 1; i < puzzleNumbers.length; i++) {
      document.getElementById(i).style.cssText = "background: #FFD914";
    }
    setContinueGameModal(false);
    timerFunctions.reset();
    setMoves(0);
    setFinish(false);
  };

  const moveTile = (number) => {
    let groupedNumbers = groupNumbers(puzzleNumbers);
    const [emptyRow, emptyCol] = getPositionCoordinate(groupedNumbers, 0);
    const [row, col] = getPositionCoordinate(groupedNumbers, number);
    let direction = isMovable(groupedNumbers, row, col);

    const handleMovement = () => {
      groupedNumbers[emptyRow][emptyCol] = number;
      groupedNumbers[row][col] = 0;
      setPuzzleNumbers(spreadNumbers(groupedNumbers));
      setMoves(moves + 1);
    };

    switch (direction) {
      case "LEFT":
        handleMovement();
        break;

      case "RIGHT":
        handleMovement();
        break;

      case "UP":
        handleMovement();
        break;

      case "DOWN":
        handleMovement();
        break;

      default:
        break;
    }
  };

  const restartGameHandler = () => {
    resetGame();
    setPauseModal(false);
    setPuzzleNumbers(shuffleNumbers([...Array(9).keys()]));
    timerFunctions.start();
  };

  const startGameHandler = () => {
    setStartGame(true);
  };

  const startGameModalHandler = () => {
    setStartGame(false);
    setStartGameModal(true);
    setContinueGameModal(false);
    setPauseModal(false);
    resetGame();
  };

  const continueGameHandler = () => {
    setContinueGame(true);
  };

  const howToPlayModalHandler = () => {
    setHowToPlayModal(!howToPlayModal);
  };

  const pauseModalHandler = () => {
    setPauseModal(true);
    timerFunctions.pause();
  };

  const resumeGameHandler = () => {
    setPauseModal(false);
    timerFunctions.resume();
  };

  const referenceHandler = () => {
    setReferenceModal(!referenceModal);
  };

  return (
    <div className="main-container">
      {startGameModal && (
        <StartGameModal
          howToPlayModal={howToPlayModalHandler}
          startGame={startGameHandler}
        />
      )}
      {continueGameModal && (
        <ContinueGameModal
          moves={moves}
          quit={startGameModalHandler}
          continueGame={continueGameHandler}
        />
      )}
      {referenceModal && <ReferenceModal close={referenceHandler} />}
      {pauseModal && (
        <PauseModal
          reference={referenceHandler}
          restart={restartGameHandler}
          resume={resumeGameHandler}
          quit={startGameModalHandler}
        />
      )}
      {howToPlayModal && <HowToPlayModal close={howToPlayModalHandler} />}
      <div
        className="overlay"
        style={{
          display:
            finish && !continueGameModal && !startGameModal ? "block" : "none",
        }}
      ></div>
      <header>
        <h3>Number Puzzle</h3>
        <div className="header-info">
          <p>Moves: {moves}</p>
          <p id="timer">Time: 00:00:00</p>
        </div>
        <p className="pause" onClick={pauseModalHandler}>
          Pause
        </p>
      </header>
      <div className="puzzle-container">
        {puzzleNumbers.map((num) => {
          return (
            <div
              key={num}
              id={num}
              onClick={() => moveTile(num)}
              style={{ opacity: num === 0 ? 0 : 1 }}
              className="tile"
            >
              <p>{num}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Game;
