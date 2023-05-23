export interface IButton {
  children: React.ReactNode;
  size: "large" | "medium" | "small";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface IProduct {
  photo: string;
  productName: string;
  descriptionShort: string;
  price: number;
}

export interface ICategory {
  src: string;
  alt: string;
  title: string;
}

export interface IModalBackground {
  children: React.ReactNode;
}

export interface IProductComponent {
  product: IProduct;
}
