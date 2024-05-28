import './Hero.css'
import { Buttons } from '../../buttons/Buttons'

export const Hero = () => {
  return (
    <section className='hero-section' id='hero-id'>
      <div className='hero'>
        <h1 className='hero__title'>MM ESTUDIO</h1>
        <p className='hero__paragraph'>
          Somos un estudio de ingeniería especializado en el diseño, cálculo y
          proyecto de estructuras de hormigón armado.
        </p>
        <Buttons
          content='Conoce más'
          size='regular'
          href='#about-id'
          icon={true}
        />
      </div>
    </section>
  )
}
