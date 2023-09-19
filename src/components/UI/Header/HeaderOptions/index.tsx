import { HeaderOption } from '../HeaderOption';
import './styles.scss';
import packageIcon from '../../../../assets/icons/package.svg';
import heart from '../../../../assets/icons/heart.svg';
import user from '../../../../assets/icons/user.svg';
import cart from '../../../../assets/icons/cart.svg';

export function HeaderOptions() {
  return (
    <div className='header-options-container'>
      <HeaderOption
        path={packageIcon}
      />
      <HeaderOption
        path={heart}
      />
      <HeaderOption
        path={user}
      />
      <HeaderOption
        path={cart}
      />
    </div>
  )
}
