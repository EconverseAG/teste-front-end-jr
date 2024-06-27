import styles from './HeaderMid.module.scss';

function HeaderMid() {
    return (
        <div className={styles.mid}>
            <div className={styles.container}>
                <img src='/img/vtex_logo.svg' alt='Logo da VTEX'/>

                <input type='text' placeholder='O que você está buscando?'/>

                <div className={styles.icons}>
                    <img src="/img/shop_icon.svg" alt="Ícone de loja"/>
                    <img src="/img/Heart.svg" alt="Ícone de coração"/>
                    <img src="/img/UserCircle.svg" alt="Ícone de perfil"/>
                    <img src="/img/ShoppingCart.svg" alt="Ícone de carrinho"/>
                </div>
            </div>
        </div>
    );
}

export default HeaderMid;