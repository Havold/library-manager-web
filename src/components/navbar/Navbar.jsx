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
import { DarkModeContext } from '../../context/DarkModeContext';
import { useContext } from 'react';

function Navbar() {
    const { dispatch } = useContext(DarkModeContext);

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
                <div className="item" onClick={() => dispatch('TOGGLE')}>
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
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7zEEISvcs1XuhHOPNI0aUElsa46Fmv5NLDg&s"
                        alt="avatar"
                    />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
