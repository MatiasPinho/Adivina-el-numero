import { useEffect, useState } from "react";
import { LogoLocation } from "../../../assets/icons/LogoLocation";
import { LogoWhatsapp } from "../../../assets/icons/LogoWhatsapp";
import { LogoEmail } from "../../../assets/icons/LogoEmail";
import "./Contact.css";
export const Contact = () => {
  const galeryImages = [
    "about_image.png",
    "02_diseñomep.png",
    "03_armadodecomputos.png",
    "06_serviciodeperitaje.png",
  ];

  const [numbersRandom, setNumbersRandom] = useState([]);

  useEffect(() => {
    const imageRandom = () => {
      const newNumbers = [];
      while (newNumbers.length < 3) {
        let numberRandom = Math.floor(Math.random() * galeryImages.length);
        if (!newNumbers.includes(galeryImages[numberRandom])) {
          newNumbers.push(galeryImages[numberRandom]);
        }
      }
      setNumbersRandom(newNumbers);
    };
    imageRandom();
  }, []);

  return (
    <section id="contact-id" className="contact__container">
      <div className="contact">
        <form className="contact__form" action="">
          <h4 className="contact__form__title">¡Consulta lo que necesites!</h4>
          <input
            className="contact__form__input"
            type="text"
            placeholder="Nombre"
          />
          <input
            className="contact__form__input"
            type="email"
            placeholder="Email"
          />
          <textarea
            className="contact__form__textarea"
            placeholder="Mensaje"
            name=""
            id=""
          ></textarea>
          <input
            className="contact__form__submit"
            type="submit"
            value="Enviar"
          />
        </form>
        <article className="contact__data">
          <div className="contact_data__decoration--right">
            <span className="contact__data__decoration--right__circle"></span>
            <span className="contact__data__decoration--right__line"></span>
          </div>
          <div className="contact__data__img__container">
            <img
              className="contact__data__img__first"
              src={`/images/${numbersRandom[0]}`}
              alt=""
            />
            <div className="contact__data__img__second">
              <img
                className="contact__data__img"
                src={`/images/${numbersRandom[1]}`}
                alt=""
              />
              <img
                className="contact__data__img"
                src={`/images/${numbersRandom[2]}`}
                alt=""
              />
            </div>
          </div>
          <ul className="contact__data__ul__direction">
            <li className="contact__data__ul__direction__li">
              <LogoLocation />{" "}
              <p className="contact__data__ul__direction__li__p">
                Calle 54 N° 1269 5ª La Plata CP 1900.
              </p>
            </li>
            <li className="contact__data__ul__direction__li">
              <LogoLocation />{" "}
              <p className="contact__data__ul__direction__li__p">
                Aristóbulo del Valle 4581, Benavidez, CP 1621
              </p>
            </li>
          </ul>
          <ul className="contact__data__ul__social">
            <li className="contact__data__ul__social__li">
              <LogoWhatsapp />
              <p>+54 9 11 3401-3456</p>
            </li>
            <li className="contact__data__ul__social__li">
              <LogoEmail />
              <p>mmestudioing@gmail.com</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};
