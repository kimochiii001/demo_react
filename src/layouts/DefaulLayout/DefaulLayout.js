import Header from "~/layouts/components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import styles from './DefaulLayout.module.scss';
import classNames from "classnames/bind";


const cx = classNames.bind(styles);

function DefaulLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>
                    {children}
                </div>

            </div>

        </div>
    )
}

export default DefaulLayout;