export const installment = 2;

export function calculatePriceWithMarkup(price: number, markupPercentage: number): number {
    return price * (1 + markupPercentage / 100);
  }
  
  export function calculatePriceDivided(price: number, installment: number): number {
    return price / installment;
  }
  
