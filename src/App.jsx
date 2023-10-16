import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Circle } from "./assets/Components/Circle";
import { Cross } from "./assets/Components/Cross";
import "./App.css";

function App() {
  const [numberSent, setNumberSent] = useState(null);
  const [numberRandom, setNumberRandom] = useState(0);
  const [dificulty, setDificulty] = useState(0);
  const [numberTrys, setNumberTrys] = useState(4);
  const [isHiddenGame, setIsHiddenGame] = useState(true);
  const [isHiddenSelect, setIsHiddenSelect] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  console.log(numberRandom);

  useEffect(() => {
    setNumberRandom(generateRandomNumber(dificulty));
  }, [dificulty]);

  function generateRandomNumber(dificulty) {
    switch (dificulty) {
      case 1:
        return Math.floor(Math.random() * (10 - 0 + 1) + 0);
      case 2:
        return Math.floor(Math.random() * (50 - 0 + 1) + 0);
      case 3:
        return Math.floor(Math.random() * (100 - 0 + 1) + 0);
      default:
        return Math.floor(Math.random() * (50 - 0 + 1) + 0);
    }
  }

  function evaluarIntentos(data) {
    if (numberTrys > 0) {
      const newNumberSent = data.number;
      setNumberSent(newNumberSent);
      if (newNumberSent == numberRandom) {
        setNumberTrys(numberTrys);
      } else if (newNumberSent !== numberRandom) {
        setNumberTrys(numberTrys - 1);
      }
      if (numberTrys === 0) {
        setNumberRandom(generateRandomNumber(dificulty));
        setNumberSent(0);
        setNumberTrys(0);
      }
    }
  }

  console.log(isWin);
  return (
    <>
      <main>
        <header>
          <p>Matias Pinho</p>
        </header>
        <article className="button-find-number">
          <h1>
            ¡Adivina el{" "}
            <strong
              className={
                numberSent == numberRandom
                  ? "two-strong"
                  : numberTrys == 0
                  ? "first-strong"
                  : ""
              }
            >
              número!
            </strong>
          </h1>
        </article>
        <article
          className={`section-dificulty ${
            isHiddenSelect ? `hiddenGame ` : ""
          } `}
        >
          <h3 className="dificulty-">Elije la dificultad</h3>
          <span className="text-dificulty">
            <button
              onClick={() => {
                setDificulty(1);
                setIsHiddenGame(false);
                setIsHiddenSelect(true);
              }}
              className="button-dificulty-easy"
            >
              Fácil
            </button>{" "}
            <p>
              Entre <strong className="two-strong"> 0 y 10</strong>
            </p>
          </span>
          <span className="text-dificulty">
            <button
              onClick={() => {
                setDificulty(2);
                setIsHiddenGame(false);
                setIsHiddenSelect(true);
              }}
              className="button-dificulty-medium"
            >
              Medio
            </button>{" "}
            <p>
              Entre <strong className="special-strong"> 0 y 50</strong>
            </p>
          </span>
          <span className="text-dificulty ">
            <button
              onClick={() => {
                setDificulty(3);
                setIsHiddenGame(false);
                setIsHiddenSelect(true);
              }}
              className="button-dificulty-hard"
            >
              Difícil
            </button>{" "}
            <p>
              Entre <strong className="first-strong"> 0 y 100</strong>
            </p>
          </span>
        </article>
        <article
          className={`range-insert-trys ${isHiddenGame ? `hiddenGame` : ""} `}
        >
          <p>
            {numberSent == numberRandom ? (
              <span>
                {" "}
                <strong className="two-strong">FELICIDADES</strong>, el número
                era {numberRandom}
              </span>
            ) : numberTrys == 0 ? (
              <span>
                {" "}
                Lo siento, has perdido,{" "}
                <strong className="first-strong">
                  {" "}
                  el número era {numberRandom}
                </strong>
              </span>
            ) : numberSent == null ? (
              <span>
                <strong className="first-strong">Intenta</strong>, un número,
                entre{` `}
                {dificulty === 1 ? (
                  <strong className="two-strong">0 y 10</strong>
                ) : dificulty === 2 ? (
                  <strong className="special-strong">0 y 50</strong>
                ) : (
                  <strong className="first-strong">0 y 100</strong>
                )}
              </span>
            ) : numberSent > numberRandom ? (
              <span>
                {" "}
                intenta un número{" "}
                <strong
                  className={
                    dificulty == 1
                      ? `two-strong`
                      : dificulty == 2
                      ? `special-strong`
                      : `first-strong`
                  }
                >
                  mas pequeño
                </strong>
              </span>
            ) : numberSent < numberRandom ? (
              <span>
                {" "}
                intenta un número{" "}
                <strong
                  className={
                    dificulty == 1
                      ? `two-strong`
                      : dificulty == 2
                      ? `special-strong`
                      : `first-strong`
                  }
                >
                  mas grande
                </strong>
              </span>
            ) : null}
          </p>

          <div
            className={
              numberTrys == 0
                ? "hidden"
                : numberSent == numberRandom
                ? "hidden"
                : ""
            }
          >
            <form
              onSubmit={handleSubmit((data) => {
                evaluarIntentos(data);
                reset();
              })}
              className="find"
              action=""
            >
              <input
                type="number"
                id="number"
                {...register("number")}
                name="number"
                placeholder="Intenta un número..."
                required
                inputMode="numeric"
              />
              <input id="send" type="submit" value="Enviar" />
            </form>
          </div>
        </article>
        <article className="trys-surrender-points">
          <ul>
            <li>
              {numberTrys < 4 && numberRandom !== numberSent ? (
                <Cross />
              ) : (
                <Circle />
              )}
            </li>
            <li>
              {numberTrys < 3 && numberRandom !== numberSent ? (
                <Cross />
              ) : (
                <Circle />
              )}
            </li>
            <li>
              {numberTrys < 2 && numberRandom !== numberSent ? (
                <Cross />
              ) : (
                <Circle />
              )}
            </li>
            <li>
              {numberTrys < 1 && numberRandom !== numberSent ? (
                <Cross />
              ) : (
                <Circle />
              )}
            </li>
          </ul>
          <form>
            <input
              type="submit"
              value="Reiniciar"
              onClick={() => {
                setNumberRandom(generateRandomNumber(dificulty));
                setNumberTrys(4);
                setNumberSent(null);
              }}
              className="surrender"
            ></input>
          </form>
        </article>
      </main>
    </>
  );
}

export default App;
