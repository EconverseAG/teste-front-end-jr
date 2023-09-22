import { Brand, SectionTitle } from "../UI";
import './styles.scss';

import arrowRightIcon from '../../assets/icons/arrow-right.svg';
import { RefObject } from "react";

interface BrandsSectionProps {
  ref: RefObject<HTMLDivElement>;
}

export function BrandsSection({ ref }: BrandsSectionProps) {
  return (
    <section className="brands-section-container" ref={ref}>
      <SectionTitle
        text="Navegue por marcas"
      />

      <div className="brands-slider">
        <Brand />
        <Brand />
        <Brand />
        <Brand />

        <button className="arrow-button">
          <img src={arrowRightIcon} alt="Icone de seta para direita" />
        </button>
      </div>
    </section>
  )
}
