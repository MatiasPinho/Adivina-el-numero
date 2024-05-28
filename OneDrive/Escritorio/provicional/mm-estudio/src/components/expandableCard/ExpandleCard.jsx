import './ExpanddleCss.css'
import { useState } from 'react'
export const ExpandleCard = ({
  title,
  onClick,
  isClicked,
  image,
  titleRight,
  opacityTitle,
  paragraph,
}) => {
  const handleClick = () => {
    onClick()
  }

  return (
    <article
      onClick={handleClick}
      className={`card ${isClicked && 'card--expanded'}`}
    >
      {!isClicked && (
        <div className='circle__arrow'>
          <span
            className={`circle__arrow__title ${
              isClicked && 'card__line--disable'
            }`}
          >
            + info
          </span>
          <span className='circle__arrow__container'>
            <svg
              className={`circle__arrow__icon  ${
                isClicked && 'circle__arrow__icon--rotate'
              }`}
              xmlns='http://www.w3.org/2000/svg'
              width='18'
              height='18'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='4'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M5 18l14 -6l-14 -6' />
            </svg>
          </span>
        </div>
      )}

      <img
        className={`card__img ${isClicked && 'card--color'}`}
        src={image}
        alt=''
      />
      <div className='card__img--filter'></div>
      <div className='card__visible'>
        <h3 className={`card__title ${isClicked && 'opacity'}`}>{title}</h3>

        <div
          className={`card__right__content ${
            isClicked && 'card__right__content--open'
          } `}
        >
          <p className='text__right'>{titleRight}</p>

          <p className='text__opacity'>{opacityTitle}</p>
          <div className='text__paragraphs'>
            {paragraph.map((p, index) => {
              return (
                <p key={index} className='text__paragraph'>
                  {p}
                </p>
              )
            })}
          </div>
          <div className='circle__arrow--two'>
            <span
              className={`circle__arrow__title ${
                isClicked && 'card__line--disable'
              }`}
            >
              + info
            </span>
            <span className='circle__arrow__container'>
              <svg
                className={`circle__arrow__icon  ${
                  isClicked && 'circle__arrow__icon--rotate'
                }`}
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='18'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='4'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M5 18l14 -6l-14 -6' />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </article>
  )
}
