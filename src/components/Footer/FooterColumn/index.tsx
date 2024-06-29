import React from 'react';
import styles from './FooterColumn.module.scss';

interface FooterColumnProps {
  title: string;
  links?: string[];
  icons?: { src: string; alt: string }[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links, icons }) => (
  <div className={styles.footerColumn}>
    <h4>{title}</h4>
    {links ? (
      <ul >
        {links.map((link, index) => (
          <li key={index}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    ) : null}
    {icons && ( 
      <div className={styles.socialIcons}>
        {icons.map((icon) => (
          <a key={icon.src} href="#" target="_blank" rel="noopener noreferrer">
            <img src={icon.src} alt={icon.alt} />
          </a>
        ))}
      </div>
    )}
  </div>
);

export default FooterColumn;
