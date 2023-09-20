import { Button } from "..";
import './styles.scss';

export function Product() {
  return (
    <div className="product-container">
      <h3>Produtos</h3>
      <p>Lorem ipsum dolor sit amet, consectetur</p>

      <div className="button-container-product">
        <Button
          text="Confira"
        />
      </div>
    </div>
  )
}
