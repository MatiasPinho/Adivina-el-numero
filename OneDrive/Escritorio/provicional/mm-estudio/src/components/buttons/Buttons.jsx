import './Buttons.css'
import { LogoArrowDown } from '../../assets/icons/LogoArrowDown'

export const Buttons = ({ content, size, href, icon }) => {
  return (
    <a className='button-link' href={href}>
      {content}
      {icon && <LogoArrowDown />}
    </a>
  )
}
