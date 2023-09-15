import styles from "./PaymentsMethodsFooterList.module.scss";

import creditCardFlags from '../../assets/creditCardFlags.svg'

export default function PaymentsMethodsFooterList() {
  return (
    <div className={styles.container}>
      <div className={styles.boxTitle}>
        <p className={styles.listTitle}>
          Informações uteis
        </p>
      </div>
      <img src={creditCardFlags} alt="Diferentes bandeiras de cartões" className={styles.creditCardFlags} />
    </div>
  )
}
