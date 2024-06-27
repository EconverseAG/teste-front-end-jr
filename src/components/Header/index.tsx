import styles from './Header.module.scss';
import HeaderTop from './HeaderTop';
import HeaderMid from './HeaderMid';
import Navigation from './Navigation';

function Header () {
  return (
    <header className={styles.header}>
      <HeaderTop />
      <HeaderMid />
      <Navigation />
    </header>
  );
}

export default Header;
