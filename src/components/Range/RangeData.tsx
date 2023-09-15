import styles from "./RangeData.module.scss";

type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";

interface RangeDataProps {
  img: string;
  alt: string;
  emphasis: string;
  text: string;
  direction?: FlexDirection;
}

export default function RangeData({
  img,
  alt,
  emphasis,
  text,
  direction,
}: RangeDataProps) {
  return (
    <div className={styles.rangeData}>
      <img src={img} alt={alt} />
      <p style={{ flexDirection: direction }}>
        {text} <span>{emphasis}</span>
      </p>
    </div>
  );
}
