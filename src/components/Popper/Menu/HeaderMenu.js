

import styles from './Menu.module.scss';

import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function HeaderMenu({ title, onBack }) {


    return <header className={cx('header-menu')}>
        <button onClick={onBack} className={cx('back-btn')}>
            <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <h4 className={cx('title')}>{title}</h4>
    </header>
}

export default HeaderMenu;