import './styles.scss';

export function SectionTitle({ text }: { text: string }) {
  return (
    <div className="section-title-container">
      <h1>{text}</h1>
    </div>
  )
}
