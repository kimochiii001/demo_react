

import styles from './Menu.module.scss';

import classNames from 'classnames/bind';

import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper'
import MenuItem from './MenuItem';
import HeaderMenu from './HeaderMenu';
import { useState } from 'react';

const cx = classNames.bind(styles);
const defaulFunction = () => { };

function Menu({ children, items = [], onChange = { defaulFunction }, hideOnClick = false }) {
    const [history, setHistory] = useState([{ data: items }]);
    // console.log({ history });
    const current = history[history.length - 1];
    // console.log({ current });


    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return <MenuItem key={index} data={item} onClick={() => {
                if (isParent) {
                    setHistory(prev => [...prev, item.children]);
                    onChange(item);
                    // console.log(setHistory);

                }
                else
                    onChange(item);
                // console.log(history.length);
            }} />
        }

        );
    };

    const handleBack = () => {
        setHistory(prev => prev.slice(0, prev.length - 1))
    }
    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && <HeaderMenu onBack={handleBack} title={current.title} />}

                <div className={cx('menu-body')}>{renderItems()}</div>

            </PopperWrapper>
        </div>
    )


    //reset to first page
    const handleResetMenu = () => {
        setHistory(prev => prev.slice(0, 1))
    }
    return (
        <Tippy
            // visible
            hideOnClick={hideOnClick}
            interactive
            delay={[0, 700]}
            placement="bottom-end"
            render={renderResult}
            onHide={handleResetMenu}
        >
            {children}
        </Tippy>
    );
}

export default Menu;