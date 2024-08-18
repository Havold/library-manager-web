import Chart from '../../components/Chart';
import Featured from '../../components/featured/Featured';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Table from '../../components/table/Table';
import Widget from '../../components/widget/Widget';
import './home.scss';

function Home() {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widget type="users" />
                    <Widget type="orders" />
                    <Widget type="earnings" />
                    <Widget type="balance" />
                </div>
                <div className="charts">
                    <Featured />
                    <Chart aspect={3 / 1} title="Last 6 months (Loans)" />
                </div>
                <div className="listContainer">
                    <div className="listTitle">Latest book loans </div>
                    <Table />
                </div>
            </div>
        </div>
    );
}

export default Home;
