import { Button } from '..';
import './styles.scss';

export function Banner() {
  return (
    <section className='banner-container'>
      <h1>Venha conhecer nossas promoções</h1>
      <span>50% Off nos produtos </span>

      <div className="button-container">
        <Button
          text='Ver produto'
        />
      </div>
    </section>
  )
}
