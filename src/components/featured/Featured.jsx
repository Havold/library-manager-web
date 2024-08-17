import { KeyboardArrowDown, KeyboardArrowUp, MoreVert } from '@mui/icons-material';
import './featured.scss';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Featured() {
    return (
        <div className="featured">
            <div className="top">
                <h1 className="title">Total Loans</h1>
                <MoreVert />
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={70} text="70%" strokeWidth={5} />
                </div>
                <div className="title">Total sales made today</div>
                <div className="amount">$420</div>
                <p className="desc">Previous transactions processing. Last payments may not be included.</p>

                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDown fontSize="small" />
                            <div className="resultAmount">12.4K</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last week</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUp fontSize="small" />
                            <div className="resultAmount">12.4K</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last month</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUp fontSize="small" />
                            <div className="resultAmount">12.4K</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Featured;
