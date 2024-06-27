import styles from './Navigation.module.scss';

function Navigation() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <a href="#">Todas categorias</a>
                </li>
                <li>
                    <a href="#">Supermercado</a>
                </li>
                <li>
                    <a href="#">Livros</a>
                </li>
                <li>
                    <a href="#">Moda</a>
                </li>
                <li>
                    <a href="#">Lançamentos</a>
                </li>
                <li>
                    <a href="#">Ofertas do dia</a>
                </li>
                <li>
                    <img src="/icons/crownsimple.svg" alt="Ícone de coroa"/>
                    <a href="#">Assinatura</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;