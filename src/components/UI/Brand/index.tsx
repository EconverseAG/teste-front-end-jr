import './styles.scss';
import logoIcon from '../../../assets/logo.svg'

export function Brand() {
  return (
    <div className="brand-container">
      <img src={logoIcon} alt="Logo Vtex" />
    </div>
  )
}
