import styles from './AboutFooterList.module.scss'

import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import youtube from '../../assets/youtube.svg'

export default function AboutFooterList() {
  const aboutList = [{
    title: 'Conheça'
  }, {
    title: "Como comprar"
  }, {
    title: "Indicação e Desconto"
  }
  ]

  return (
    <ul className={styles.list}>
      <div className={styles.boxTitle}>
        <p className={styles.listTitle}>Sobre nós</p>
      </div>
      {aboutList.map(({ title }) => <li className={styles.listItem} key={title}>{title}</li>)}
      <li>
        <ul className={styles.socialMediaList}>
          <li className={styles.socialMediaItem}><img src={facebook} alt="Icone do facebook da VTex" /></li>
          <li className={styles.socialMediaItem}><img src={instagram} alt="Icone do instagram da VTex" /></li>
          <li className={styles.socialMediaItem}><img src={youtube} alt="Icone do youtube da VTex" /></li>
        </ul>
      </li>
    </ul>
  )
}