import './styles.scss';

export function Button({ text }: { text: string }) {
  return (
    <button className='btn'>{text}</button>
  )
}
