import React from 'react';
import styles from './NewsletterForm.module.scss';

const NewsletterForm: React.FC = () => (
  <div className={styles.newsletterForm}>
    <h3>CADASTRE-SE E RECEBA NOSSAS <strong>NOVIDADES E PROMOÇÕES</strong></h3>
    <p>Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</p>
    <input type="email" placeholder="SEU E-MAIL" />
    <button type="submit">OK</button>
  </div>
);

export default NewsletterForm;
