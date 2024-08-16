import {
    ChatBubbleOutlineRounded,
    DarkModeOutlined,
    FullscreenRounded,
    LanguageOutlined,
    NotificationsOutlined,
    SearchOutlined,
    Tune,
} from '@mui/icons-material';
import './navbar.scss';

function Navbar() {
    return (
        <div className="navbar">
            <div className="search">
                <input type="text" placeholder="Search... " />
                <SearchOutlined />
            </div>
            <div className="items">
                <div className="item">
                    <LanguageOutlined className="icon" />
                    <span>English</span>
                </div>
                <div className="item">
                    <DarkModeOutlined className="icon" />
                </div>
                <div className="item">
                    <FullscreenRounded className="icon" />
                </div>
                <div className="item">
                    <NotificationsOutlined className="icon" />
                    <div className="counter">1</div>
                </div>
                <div className="item">
                    <ChatBubbleOutlineRounded className="icon" />
                    <div className="counter">2</div>
                </div>

                <div className="item">
                    <Tune className="icon" />
                </div>

                <div className="item">
                    <img
                        className="avatar"
                        src="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/c14a92a8e2e23babececab98c0f67fac.jpeg?lk3s=a5d48078&nonce=18251&refresh_token=3552d81b0c37cd8bb3f477bf2c201f96&x-expires=1723978800&x-signature=OEItOocr5crSvDly0v%2FyUDkLEKQ%3D&shp=a5d48078&shcp=81f88b70"
                        alt="avatar"
                    />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
