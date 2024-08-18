import { TimeToLeave } from '@mui/icons-material';
import DataTable from '../../components/DataTable';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './list.scss';

function List({ title, type }) {
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <DataTable title={title} type={type} />
            </div>
        </div>
    );
}

export default List;
