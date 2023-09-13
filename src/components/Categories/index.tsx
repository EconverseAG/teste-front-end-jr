import styles from './Categories.module.scss'
import Category from "./Category";
import categories from '../../utils/categoriesUtils';

export default function Categories() {
 
  return (
    <nav className={styles.categories}>
      {
        categories.map(({isFirstCategory, urlImage, name, id}) => <Category isFirstCategory={isFirstCategory} urlImage={urlImage} nameCategory={name} key={id} />)
      }
      
    </nav>
  )
}