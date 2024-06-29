import  { useState } from 'react';
import styles from './Navigation.module.scss';

function Navigation() {
    // Inicialize o estado com o índice do item "Ofertas do dia"
    const [activeIndex, setActiveIndex] = useState(5);
  
    const navItems = [
      { label: 'Todas categorias', href: '#' },
      { label: 'Supermercado', href: '#' },
      { label: 'Livros', href: '#' },
      { label: 'Moda', href: '#' },
      { label: 'Lançamentos', href: '#' },
      { label: 'Ofertas do dia', href: '#' },
      { label: 'Assinatura', href: '#', icon: '/icons/crownsimple.svg' }
    ];
  
    return (
      <nav className={styles.nav}>
        <ul>
          {navItems.map((item, index) => (
            <li key={index} onClick={() => setActiveIndex(index)}>
              {item.icon && <img src={item.icon} alt={`Ícone de ${item.label.toLowerCase()}`} />}
              <a href={item.href} className={activeIndex === index ? styles.active : ''}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
  
  export default Navigation;