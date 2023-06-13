
import classNames from "classnames/bind"
import styles from './Sidebar.module.scss'
import config from "~/config";
import Menu, { MenuItem } from './Menu';
import { DiscoverIcon, FollowIcon, HomeIcon, LiveIcon, HomeIconActive } from "~/components/Icons/Icons";
import SuggestedAccounts from "~/components/SuggestedAccounts/SuggestedAccounts";


const cx = classNames.bind(styles);

function Sidebar() {
    return <aside className={cx('wrapper')}>
        <Menu>
            <MenuItem title="Dành cho bạn" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeIconActive />} />
            <MenuItem title="Đang Follow" to={config.routes.following} icon={<FollowIcon />} activeIcon={<HomeIconActive />} />
            <MenuItem title="Khám phá" to={config.routes.discover} icon={<DiscoverIcon />} activeIcon={<HomeIconActive />} />
            <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<HomeIconActive />} />

        </Menu>



        {/* <div className={cx('line')}></div> */}

        {/* <SuggestedAccounts label='Suggest account' /> */}
        {/* <SuggestedAccounts label='Suggest account' /> */}
    </aside>
}
export default Sidebar