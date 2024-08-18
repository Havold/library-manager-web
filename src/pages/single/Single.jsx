import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './single.scss';
import Chart from './../../components/Chart';
import Table from './../../components/table/Table';
import { ArrowBack } from '@mui/icons-material';
import BackBtn from '../../components/BackBtn';

function Single() {
    return (
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="editBtn">Edit</div>
                        <div className="title">
                            <BackBtn />
                            Information
                        </div>
                        <div className="item">
                            <img
                                className="itemImg"
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/c14a92a8e2e23babececab98c0f67fac.jpeg?lk3s=a5d48078&nonce=18251&refresh_token=3552d81b0c37cd8bb3f477bf2c201f96&x-expires=1723978800&x-signature=OEItOocr5crSvDly0v%2FyUDkLEKQ%3D&shp=a5d48078&shcp=81f88b70"
                                alt="avatar"
                            />
                            <div className="details">
                                <h1 className="itemTitle">Nguyen Thanh Tung</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">sontungmtp@gmail.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone:</span>
                                    <span className="itemValue">0918123423</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Address:</span>
                                    <span className="itemValue">Thai Binh City, Thai Binh Province</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Country:</span>
                                    <span className="itemValue">Vietnam</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart aspect={4 / 1} title="Number of books borrowed by user (last 6 months)" />
                    </div>
                </div>
                <div className="bottom">
                    <div className="title">Recent loans</div>
                    <Table />
                </div>
            </div>
        </div>
    );
}

export default Single;
