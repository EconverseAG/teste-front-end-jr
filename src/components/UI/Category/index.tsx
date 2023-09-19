import './styles.scss';

interface CategoryProps {
  path: string;
  name: string;
  isActive?: boolean;
}

export function Category({ name, path, isActive = false }: CategoryProps) {
  return (
    <a href="#" className="container">
      <div className={`wrapper ${isActive ? "active" : ""}`}>
        <img src={path} alt="" />
      </div>
      <span className={isActive ? "active" : ""}>{name}</span>
    </a>
  )
}