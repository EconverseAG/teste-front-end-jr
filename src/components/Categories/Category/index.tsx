import styles from './Category.module.scss'

interface ICategory {
  isFirstCategory: boolean,
  urlImage: string,
  nameCategory: string
}

export default function Category({ isFirstCategory, urlImage, nameCategory }: ICategory) {
  return (
    <div className={`${isFirstCategory ? styles.firtsCategory : styles.otherCategory} ${styles.category}`}>
      <a href="#" className={styles.categoryLink}>
        <img src={urlImage} alt={`Image da categoria de ${nameCategory}`} className={styles.categorySymbol}/>
      </a>
      <p className={styles.categoryName}>{nameCategory}</p>
    </div>
  )
}