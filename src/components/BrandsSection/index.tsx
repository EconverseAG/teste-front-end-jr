import { Brand, SectionTitle } from "../UI";
import './styles.scss';

import arrowRightIcon from '../../assets/icons/arrow-right.svg'

export function BrandsSection() {
  return (
    <div className="brands-section-container">
      <SectionTitle
        text="Navegue por marcas"
      />

      <div className="brands-slider">
        <Brand />
        <Brand />
        <Brand />
        <Brand />
        <Brand />
        <Brand />
        <Brand />

        <button className="arrow-button">
          <img src={arrowRightIcon} alt="Icone de seta para direita" />
        </button>
      </div>
    </div>
  )
}
