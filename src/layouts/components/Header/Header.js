
import classNames from 'classnames/bind';

import styles from './Header.module.scss';

import images from '~/assets/images'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard, faCoins, faGear, faSignOut, } from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import { Link } from 'react-router-dom';
// import { Wrapper as PopperWrapper } from '~/components/Popper';
// import { useEffect, useState } from 'react';
import Button from '~/components/Button/Button';
import Menu from '~/components/Popper/Menu/Menu';
import { UploadIcon } from '~/components/Icons/Icons';
import Image from '~/components/Image/Image';
import Search from '../Search/Search';

import config from '~/config';





const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vn',
                    title: 'VietNam'
                },
                {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vn',
                    title: 'VietNam'
                },
                {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vn',
                    title: 'VietNam'
                },
                {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vn',
                    title: 'VietNam'
                },
                {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vn',
                    title: 'VietNam'
                },
                {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vn',
                    title: 'VietNam'
                },
                {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vn',
                    title: 'VietNam'
                },
                {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vn',
                    title: 'VietNam'
                }, {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vn',
                    title: 'VietNam'
                }, {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vn',
                    title: 'VietNam'
                }, {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vn',
                    title: 'VietNam'
                }, {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vn',
                    title: 'VietNam'
                }, {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vn',
                    title: 'VietNam'
                },

            ]

        },
    },

    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard',
    }
];


const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'View profile',
        to: '/@haha',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/coins',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/settings',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: '/',
        separate: true
    },
]

const currentUser = false;

const handleMenuChange = (menuItem) => {
    console.log(menuItem);
}
function Header() {



    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>

            <Link className={cx('logo')} to={config.routes.home}>  <img src={images.logo} alt="Tiktok" /> </Link>




            <Search />


            <div className={cx('actions')}>

                {currentUser ? (
                    <>
                        <Tippy trigger='click' content="Upload video" placement='bottom'><button className={cx('action-btn')}>
                            {/* <FontAwesomeIcon icon={faCloudUpload} /> */}
                            <UploadIcon />

                        </button></Tippy>
                        {/* <button className={cx('action-btn')}><FontAwesomeIcon icon={faMessage} /></button> */}

                    </>
                ) : (
                    <>

                        <Button text >Upload</Button>
                        <Button primary to={config.routes.login} >Log In</Button>



                    </>
                )}

                <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                    {currentUser ?
                        (<Image className={cx('user-avatar')} alt='Nguyen Van a' src="https://tophinhanh.com/wp-content/uploads/2022/10/image-138.png" customFeedback="https://chungcuhatecolaroma.net.vn/wp-content/uploads/2022/10/anh-avatar-dep-cho-con-gai-3.jpg">

                        </Image>) : (

                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}

                </Menu>






            </div>


        </div>

    </header >
}
export default Header