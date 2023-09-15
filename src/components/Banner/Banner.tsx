import { BannerData } from "./BannerData";
import banner from "../../assets/img/banner.png";

export default function Banner() {
  return (
    <div>
      <BannerData
        title="Venha conhecer nossas promoções"
        description="50% Off nos produtos"
        img={banner}
        showButton={true}
        textButton="Ver produto"
      />
    </div>
  );
}
