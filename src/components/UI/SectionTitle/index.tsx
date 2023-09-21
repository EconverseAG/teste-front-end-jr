import './styles.scss';

interface SectionTitleProps {
  text: string;
  withSeparator?: boolean;
}

export function SectionTitle({ text, withSeparator = false }: SectionTitleProps) {
  return (
    <div className={`section-title-container ${withSeparator && 'with-separator'}`}>
      <h1>{text}</h1>
    </div>
  )
}
