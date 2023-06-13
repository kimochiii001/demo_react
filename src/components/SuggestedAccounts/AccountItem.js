

import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from "./AccountPreview/AccountPreview";


const cx = classNames.bind(styles);


function AccountItem() {

    const renderPreview = (attrs) => {
        return (<div tabIndex="-1" {...attrs}>
            <PopperWrapper>
                <div className={cx('preview')}>
                    <AccountPreview />
                </div>

            </PopperWrapper>
        </div>)
    }

    return (
        <div>
            <Tippy

                interactive
                offset={[-20, 0]}
                delay={[800, 0]}
                placement="bottom"
                render={renderPreview}
            >
                <div className={cx('account-item')}>
                    <img className={cx('avatar')} alt="" src="https://tophinhanh.com/wp-content/uploads/2022/10/image-138.png" ></img>
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>Haha</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>123</p>
                    </div>
                </div>
            </Tippy>
        </div>


    )
}

export default AccountItem;