import './DataTable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColumns } from '../../datatablesource';
import { Link } from 'react-router-dom';

function DataTable({ title, type }) {
    const actions = [
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: () => {
                return (
                    <div className="cellWithActions">
                        <Link to="/users/son-tung-mtp">
                            <div className="button view">View</div>
                        </Link>
                        <div className="button delete">Delete</div>
                    </div>
                );
            },
        },
    ];
    return (
        <div className="dataTable">
            <div className="dataTableHeader">
                <h1>{title}</h1>
                <Link to={type === 'users' ? '/users/new' : '/products/new'}>
                    <div className="newBtn">+ New</div>
                </Link>
            </div>
            <DataGrid
                rows={userRows}
                columns={userColumns.concat(actions)}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 9 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    );
}

export default DataTable;
