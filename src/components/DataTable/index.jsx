import './DataTable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColumns } from '../../datatablesource';

function DataTable() {
    const actions = [
        {
            field: 'action',
            headerName: 'Action',
            width: 500,
            renderCell: () => {
                return (
                    <div className="cellWithActions">
                        <div className="button view">View</div>
                        <div className="button delete">Delete</div>
                    </div>
                );
            },
        },
    ];
    return (
        <div className="dataTable">
            <DataGrid
                rows={userRows}
                columns={userColumns.concat(actions)}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    );
}

export default DataTable;
