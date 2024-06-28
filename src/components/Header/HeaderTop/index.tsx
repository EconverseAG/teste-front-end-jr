import styles from './HeaderTop.module.scss'; 

function HeaderTop() {
  return (
    <div className={styles.headerTop}>
      <div className={styles.content}>
        <img src="/icons/security.svg" alt="Security Icon" />
        <p>Compra <strong className={styles.highlighted}>100% segura</strong></p>
      </div>

      <div className={styles.content}>
        <img src="/icons/delivery.svg" alt="Ícone de entrega" />
        <p><strong className={styles.highlighted}>Frete grátis</strong> acima de R$ 200</p>
      </div>

      <div className={styles.content}>
        <img src="/icons/creditcard.svg" alt="Ícone de cartão de crédito" />
        <p><strong className={styles.highlighted}>Parcele</strong> suas compras</p>
      </div>
    </div>
  );
}

export default HeaderTop;