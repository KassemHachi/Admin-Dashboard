import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'No', width: 70, },
    { field: 'client', headerName: 'Client', width: 250 },
    {
        field: 'amount',
        headerName: 'Amount ($)',
        type: 'number',
        width: 250,
    },

];

const rows = [
    { id: 1, client: 'Jon', amount: 1522 },
    { id: 2, client: 'Daniel', amount: 7850 },
    { id: 3, client: 'Bell', amount: 4530 },
    { id: 4, client: 'Arya', amount: 6580 },
    { id: 5, client: 'Mark', amount: 2500 },
    { id: 6, client: 'Jacob', amount: 15000 },
    { id: 7, client: 'Ferrara', amount: 1570 },
    { id: 8, client: 'Rossini', amount: 740 },
    { id: 9, client: 'Harvey', amount: 650 },
    { id: 10, client: 'Mark', amount: 2500 },
    { id: 11, client: 'Jacob', amount: 15000 },
    { id: 12, client: 'Ferrara', amount: 1570 },
    { id: 13, client: 'Rossini', amount: 740 },
    { id: 14, client: 'Harvey', amount: 650 },
    { id: 15, client: 'Arya', amount: 6580 },
    { id: 16, client: 'Mark', amount: 2500 },
    { id: 17, client: 'Jacob', amount: 15000 },
    { id: 18, client: 'Ferrara', amount: 1570 },
    { id: 19, client: 'Rossini', amount: 740 },
    { id: 20, client: 'Harvey', amount: 650 },
    { id: 21, client: 'Mark', amount: 2500 },
    { id: 22, client: 'Jacob', amount: 15000 },
    { id: 23, client: 'Ferrara', amount: 1570 },
    { id: 24, client: 'Rossini', amount: 740 },
    { id: 25, client: 'Harvey', amount: 650 },
    { id: 26, client: 'Jacob', amount: 15000 },
    { id: 27, client: 'Ferrara', amount: 1570 },
    { id: 28, client: 'Rossini', amount: 740 },
    { id: 29, client: 'Harvey', amount: 650 },
    { id: 30, client: 'Mark', amount: 2500 },
    { id: 31, client: 'Jacob', amount: 15000 },
    { id: 32, client: 'Ferrara', amount: 1570 },
    { id: 33, client: 'Rossini', amount: 740 },
    { id: 34, client: 'Harvey', amount: 650 },
    { id: 35, client: 'Arya', amount: 6580 },
    { id: 36, client: 'Mark', amount: 2500 },
    { id: 37, client: 'Jacob', amount: 15000 },
    { id: 38, client: 'Ferrara', amount: 1570 },
    { id: 39, client: 'Rossini', amount: 740 },
    { id: 40, client: 'Harvey', amount: 650 },
    { id: 41, client: 'Mark', amount: 2500 },
    { id: 42, client: 'Jacob', amount: 15000 },
    { id: 43, client: 'Ferrara', amount: 1570 },
    { id: 44, client: 'Rossini', amount: 740 },
    { id: 45, client: 'Harvey', amount: 650 },
    { id: 46, client: 'Mark', amount: 2500 },
    { id: 47, client: 'Jacob', amount: 15000 },
    { id: 48, client: 'Ferrara', amount: 1570 },
    { id: 49, client: 'Rossini', amount: 740 },
    { id: 50, client: 'Harvey', amount: 650 },
    { id: 51, client: 'Mark', amount: 2500 },
    { id: 52, client: 'Jacob', amount: 15000 },
    { id: 53, client: 'Ferrara', amount: 1570 },
    { id: 54, client: 'Rossini', amount: 740 },
    { id: 55, client: 'Harvey', amount: 650 },
];
let PageNumbers = [];
for (let i = 0; i < Object.keys(rows).length; i++) {
    switch (i) {
        case 11:
            PageNumbers.push(10)
            break;
        case 51:
            PageNumbers.push(50)
            break;
        case 101:
            PageNumbers.push(100)
            break;
        default:
            break;
    }

}

PageNumbers.push(Object.keys(rows).length)
export default function ClientsTable(props) {
    const [count, setCount] = React.useState(10);
    return (
        <div className={props.className} style={{ width: '100%', }}>
            <DataGrid
                rows={rows}
                columns={columns}
                rowsPerPageOptions={PageNumbers}
                className={"border-0"}
                onPageSizeChange={(e) => { setCount(e) }}
                pageSize={count}
                checkboxSelection

            />
        </div>
    );
}