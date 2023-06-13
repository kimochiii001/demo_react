

import classNames from "classnames/bind";

import styles from './AccountPreview.module.scss';
import Button from "~/components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img className={cx('avatar')} src="https://tophinhanh.com/wp-content/uploads/2022/10/image-138.png" alt="" />
                
                    <Button className={cx('follow-btn')} primary small>
                        Follow
                    </Button>
               


            </div>

            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>Haha</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>123</p>

                <p className={cx('analytics')}>
                    <strong className={cx('value')}>10M</strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>10K</strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    )
}

export default AccountPreview;