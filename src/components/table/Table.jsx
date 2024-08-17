import './table.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function List() {
    const rows = [
        {
            id: 1234,
            book: `Harry Potter and the Philosopher's Stone`,
            img: 'https://m.media-amazon.com/images/I/81q77Q39nEL._SL1500_.jpg',
            customer: 'Peter Parker',
            date: '1 March',
            amount: 10,
            method: 'Direct loan',
            status: 'Approved',
        },
        {
            id: 982,
            book: `Harry Potter and the Chamber of Secrets`,
            img: 'https://m.media-amazon.com/images/I/71MUiF4iVzL._AC_SY606_.jpg',
            customer: 'Tony Stark',
            date: '1 April',
            amount: 12,
            method: 'Online loan',
            status: 'Pending',
        },
        {
            id: 12112,
            book: `Harry Potter and the Prisoner of Azkaban`,
            img: 'https://m.media-amazon.com/images/I/71s7RjLd3fL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
            customer: 'Mary Jane',
            date: '5 May',
            amount: 8,
            method: 'Direct loan',
            status: 'Overdue',
        },
        {
            id: 1023,
            book: `Harry Potter and the Prisoner of Azkaban`,
            img: 'https://m.media-amazon.com/images/I/71s7RjLd3fL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
            customer: 'May Parker',
            date: '6 July',
            amount: 2,
            method: 'Online',
            status: 'Returned',
        },
    ];
    return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="tableCell">Tracking ID</TableCell>
                        <TableCell className="tableCell">Book</TableCell>
                        <TableCell className="tableCell">Customer</TableCell>
                        <TableCell className="tableCell">Date</TableCell>
                        <TableCell className="tableCell">Amount</TableCell>
                        <TableCell className="tableCell">Borrowing method</TableCell>
                        <TableCell className="tableCell">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell className="tableCell">{row.id}</TableCell>
                            <TableCell className="tableCell">
                                <div className="cellWrapper">
                                    <img className="bookCover" src={row.img} alt="book cover" />
                                    {row.book}
                                </div>
                            </TableCell>
                            <TableCell className="tableCell">{row.customer}</TableCell>
                            <TableCell className="tableCell">{row.date}</TableCell>
                            <TableCell className="tableCell">{row.amount}</TableCell>
                            <TableCell className="tableCell">{row.method}</TableCell>
                            <TableCell className="tableCell">
                                <span className={`status ${row.status}`}>{row.status}</span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default List;
