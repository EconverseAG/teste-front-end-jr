import styles from './ProductType.module.scss'

export default function ProductType() {
  const items = [
    { name: 'Celular', isFirstLink: true },
    { name: 'Acessórios', isFirstLink: false },
    { name: 'Tablets', isFirstLink: false },
    { name: 'Notebooks', isFirstLink: false },
    { name: 'Tvs', isFirstLink: false },
    { name: 'Ver todos', isFirstLink: false }
  ];

  return (
    <article className={styles.container}>
      <h3 className={styles.relatedTitle}>Produtos Relacionados</h3>
      <div className={styles.table}>
        {items.map(({ name, isFirstLink }) => (
          <div className={styles.itemTable}>
            <a href="#" className={`${isFirstLink ? styles.firstLableLink : styles.otherLinkTable} ${styles.tableLink}`}>{name}</a>
          </div>
        ))}
      </div>
    </article>
  )
}