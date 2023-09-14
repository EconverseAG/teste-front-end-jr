import styles from "./InfoFooterList.module.scss";

export default function InfoFooterList() {
  const items = [
    {
      title: "Fale conosco",
    },
    {
      title: "Dúvidas",
    },
    {
      title: "Prazos de Entrega",
    },
    {
      title: "Formas de Pagamento",
    },
    {
      title: "Política de Privacidade",
    },
    {
      title: "Trocas e Devoluções",
    },
  ];

  return (
    <ul className={styles.list}>
      <div className={styles.boxTitle}>
        <h5 className={styles.listTitle}>Informações úteis</h5>
      </div>
      {items.map(({ title }) => (
        <li className={styles.listItem} key={title}>
          {title}
        </li>
      ))}
    </ul>
  );
}
