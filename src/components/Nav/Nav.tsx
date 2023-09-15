import NavData, { NavDataProps } from "./NavData";

export default function Nav() {
  const titles: NavDataProps[] = [
    { title: "Celular", href: "/#celular", active: true },
    { title: "Acessórios", href: "/#acessorios" },
    { title: "Tablets", href: "/#tablets" },
    { title: "Notebooks", href: "/#notebooks" },
    { title: "Tvs", href: "/#tvs" },
    { title: "Ver todos", href: "/#ver-todos" },
  ];

  return <NavData titles={titles} />;
}
