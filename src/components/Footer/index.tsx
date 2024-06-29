import styles from './Footer.module.scss';
import FooterColumn from './FooterColumn/index';
import NewsletterForm from './NewsletterForm/index';
import PaymentIcons from './PaymentIcons/index'; 

const footerColumns = [
    {
      title: 'Sobre nós',
      links: ['Conheça a Econverse', 'Como comprar', 'Indicação e desconto'],
      icons: [
        { src: '/icons/facebook.svg', alt: 'icone para o Facebook' },
        { src: '/icons/instagram.svg', alt: 'icone para o Instagram' },
        { src: '/icons/youtube.svg', alt: 'icone para o YouTube' },
      ],
    },
    {
      title: 'INFORMAÇÕES ÚTEIS',
      links: ['Fale conosco', 'Dúvidas frequentes', 'Prazos de entrega', 'Formas de pagamento', 'Política de privacidade', 'Trocas e devoluções'],
    },
  ];

  function Footer() {
    return (
      <footer className={styles.footer}>
        <div className="container-center">
          <div className={styles.footerContent}>
            <div className={styles.footerColumns}>
              {footerColumns.map((column, index) => (
                <FooterColumn 
                  key={index} 
                  title={column.title} 
                  links={column.links} 
                  icons={column.icons} 
                />
              ))}
              <PaymentIcons /> 
            </div>
            <NewsletterForm />
          </div>
          <div className={styles.footerBorder}>
            <div className={styles.footerBottom}>
              <p className={styles.copyright}>
              Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos. É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.
              </p>
              <div className={styles.logos}>
                <img src="/icons/econverse.svg" alt="Logo Econverse e VTEX" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;