import './styles.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

export function Button({ text, ...props }: ButtonProps) {
  return (
    <button {...props} className='btn'>{text}</button>
  )
}
