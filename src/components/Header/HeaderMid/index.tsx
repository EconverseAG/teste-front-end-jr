import styles from './HeaderMid.module.scss';

function HeaderMid() {
    return (
        <div className={styles.headerMid}>
            <div className={styles.container}>
                <img src='/icons/vtex.svg' alt='Logo da VTEX'/>

                <div>
                    <div className={styles.inputContaniner} >
                    <input type='text' placeholder='O que você está buscando?'/>
                    <img className={styles.searchIcon} src="/icons/search.svg" alt="icone de uma lupa para busca" />
                    </div>
                </div>

                <div className={styles.icons}>
                    <img src="/icons/order.svg" alt="Ícone de loja"/>
                    <img src="/icons/heart.svg" alt="Ícone de coração para favoritos"/>
                    <img src="/icons/account.svg" alt="Ícone de perfil"/>
                    <img src="/icons/shoppingcart.svg" alt="Ícone de carrinho"/>
                </div>
            </div>
        </div>
    );
}

export default HeaderMid;
