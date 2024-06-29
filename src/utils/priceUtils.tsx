//Número de parcelas
export const installment = 2;


// calcular indice do preço de venda
export function calculatePriceWithMarkup(price: number, markupPercentage: number): number {
    return price * (1 + markupPercentage / 100);
  }
  
//Função para calcular o parcelamento
  export function calculatePriceDivided(price: number, installment: number): number {
    return price / installment;
  }
  
