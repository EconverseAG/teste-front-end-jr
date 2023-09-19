import { Button } from '../Button';
import './styles.scss';

export function Banner() {
  return (
    <section>
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