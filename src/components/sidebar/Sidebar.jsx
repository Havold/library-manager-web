import './sidebar.scss';
import {
    AccountCircleOutlined,
    AutoStories,
    CreditCardRounded,
    Dashboard,
    InsertChartRounded,
    LocalShipping,
    LogoutRounded,
    NotificationsNoneRounded,
    PersonOutlineRounded,
    PsychologyRounded,
    SettingsRounded,
    SettingsSystemDaydreamRounded,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/">
                    <span className="logo">lamadmin</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <Link to="/">
                        <li>
                            <Dashboard className="icon" />
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <p className="title">LIST</p>
                    <Link to="/users">
                        <li>
                            <PersonOutlineRounded className="icon" />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/products">
                        <li>
                            <AutoStories className="icon" />
                            <span>Products</span>
                        </li>
                    </Link>
                    <li>
                        <CreditCardRounded className="icon" />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShipping className="icon" />
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>

                    <li>
                        <InsertChartRounded className="icon" />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNoneRounded className="icon" />
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>

                    <li>
                        <SettingsSystemDaydreamRounded className="icon" />
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyRounded className="icon" />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsRounded className="icon" />
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>

                    <li>
                        <AccountCircleOutlined className="icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutRounded className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    );
}

export default Sidebar;
