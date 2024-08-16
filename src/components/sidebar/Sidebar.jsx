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

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo">lamadmin</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <Dashboard className="icon" />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LIST</p>

                    <li>
                        <PersonOutlineRounded className="icon" />
                        <span>Users</span>
                    </li>
                    <li>
                        <AutoStories className="icon" />
                        <span>Products</span>
                    </li>
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
