import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./App.css";
import { Circle } from "./assets/Components/Circle";
import { Cross } from "./assets/Components/Cross";

function App() {
  const [numberSent, setNumberSent] = useState(null);
  const [numberRandom, setNumberRandom] = useState(
    Math.floor(Math.random() * (50 - 0 + 1) + 0)
  );
  const [numberTrys, setNumberTrys] = useState(4);
  const [inputValue, setInputValue] = useState("");
  const [placeholderVisible, setPlaceholderVisible] = useState(true);
  const { register, handleSubmit, resetField, reset } = useForm();
console.log(numberRandom)
console.log(numberTrys)

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
              numero!
            </strong>
          </h1>
        </article>
        <article className="range-insert-trys">
          <p>
            {numberSent == numberRandom ? (
              <span>
                {" "}
                <strong className="two-strong">FELICIDADES</strong>
              </span>
            ) : numberTrys == 0 ? (
              <span>
                {" "}
                Lo siento, has perdido,{" "}
                <strong className="first-strong">
                  {" "}
                  el numero era {numberRandom}
                </strong>
              </span>
            ) : numberSent == null ? (
              <span>
                <strong className="first-strong">Intenta</strong>, un número,
                <strong className="two-strong"> entre 0 y 50 </strong>
              </span>
            ) : numberSent > numberRandom ? (
              <span>
                {" "}
                intenta un numero{" "}
                <strong className="two-strong">mas pequeño</strong>
              </span>
            ) : numberSent < numberRandom ? (
              <span>
                {" "}
                intenta un numero{" "}
                <strong className="two-strong">mas grande</strong>
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
                setPlaceholderVisible(true);
                setInputValue("");
                numberTrys > 0
                  ?  numberRandom == numberSent ? null :(setNumberTrys(numberTrys - 1), setNumberSent(data.number))
                  : numberTrys === 0
                  ? (setNumberRandom(
                      Math.floor(Math.random() * (50 - 0 + 1) + 0)
                    ),
                    setNumberSent(null),
                    setNumberTrys(0))
                  : null;
                  reset()
              })}
              className="find"
              action=""
            >
              <input
                type="number"
                id="number"
                {...register("number")}
                name="number"
                placeholder={placeholderVisible ? "Intenta un número..." : ""}
                
                required
                inputMode="numeric"
              />
              <input onClick={()=>{resetField()}} id="send" type="submit" value="Enviar" />
            </form>
          </div>
        </article>
        <article className="trys-surrender-points">
        <ul>
          {[0, 1, 2, 3].map((index) => (
            <li key={index}>
              {numberTrys < 4 - index ? <Cross /> : <Circle />}
            </li>
          ))  
          }
        </ul>
          <button
            onClick={() => {
              setNumberRandom(Math.floor(Math.random() * (50 - 0 + 1) + 0));
              setNumberTrys(4);
              setNumberSent(null);
              setPlaceholderVisible(true);
              setInputValue("");
              
            }}
            className="surrender"
          >
            Reiniciar
          </button>
        </article>
      </main>
    </>
  );
}

export default App;
