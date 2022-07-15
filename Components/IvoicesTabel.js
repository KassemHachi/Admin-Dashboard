import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'No', width: 70, },
    { field: 'date', headerName: 'Date Created', minWidth: 250, },
    { field: 'client', headerName: 'Client', width: 250 },
    {
        field: 'amount',
        headerName: 'Amount ($)',
        type: 'number',
        width: 250,
    },

];

const rows = [
    { id: 1, date: '3 Jul, 2021', client: 'Jon', amount: 1522 },
    { id: 2, date: '15 Feb, 2022', client: 'Daniel', amount: 7850 },
    { id: 3, date: '27 Jan, 2020', client: 'Bell', amount: 4530 },
    { id: 4, date: '22 Mars, 2022', client: 'Arya', amount: 6580 },
    { id: 5, date: '24 Nov, 2022', client: 'Mark', amount: 2500 },
    { id: 6, date: '31 Oct, 2022', client: 'Jacob', amount: 15000 },
    { id: 7, date: '11 Jul, 2022', client: 'Ferrara', amount: 1570 },
    { id: 8, date: '7 Dec, 2021', client: 'Rossini', amount: 740 },
    { id: 9, date: '8 Oct, 2022', client: 'Harvey', amount: 650 },
    { id: 10, date: '24 Nov, 2022', client: 'Mark', amount: 2500 },
    { id: 11, date: '31 Oct, 2022', client: 'Jacob', amount: 15000 },
    { id: 12, date: '11 Jul, 2022', client: 'Ferrara', amount: 1570 },
    { id: 13, date: '7 Dec, 2021', client: 'Rossini', amount: 740 },
    { id: 14, date: '8 Oct, 2022', client: 'Harvey', amount: 650 },
    { id: 15, date: '22 Mars, 2022', client: 'Arya', amount: 6580 },
    { id: 16, date: '24 Nov, 2022', client: 'Mark', amount: 2500 },
    { id: 17, date: '31 Oct, 2022', client: 'Jacob', amount: 15000 },
    { id: 18, date: '11 Jul, 2022', client: 'Ferrara', amount: 1570 },
    { id: 19, date: '7 Dec, 2021', client: 'Rossini', amount: 740 },
    { id: 20, date: '8 Oct, 2022', client: 'Harvey', amount: 650 },
    { id: 21, date: '24 Nov, 2022', client: 'Mark', amount: 2500 },
    { id: 22, date: '31 Oct, 2022', client: 'Jacob', amount: 15000 },
    { id: 23, date: '11 Jul, 2022', client: 'Ferrara', amount: 1570 },
    { id: 24, date: '7 Dec, 2021', client: 'Rossini', amount: 740 },
    { id: 25, date: '8 Oct, 2022', client: 'Harvey', amount: 650 },
    { id: 26, date: '31 Oct, 2022', client: 'Jacob', amount: 15000 },
    { id: 27, date: '11 Jul, 2022', client: 'Ferrara', amount: 1570 },
    { id: 28, date: '7 Dec, 2021', client: 'Rossini', amount: 740 },
    { id: 29, date: '8 Oct, 2022', client: 'Harvey', amount: 650 },
    { id: 30, date: '24 Nov, 2022', client: 'Mark', amount: 2500 },
    { id: 31, date: '31 Oct, 2022', client: 'Jacob', amount: 15000 },
    { id: 32, date: '11 Jul, 2022', client: 'Ferrara', amount: 1570 },
    { id: 33, date: '7 Dec, 2021', client: 'Rossini', amount: 740 },
    { id: 34, date: '8 Oct, 2022', client: 'Harvey', amount: 650 },
    { id: 35, date: '22 Mars, 2022', client: 'Arya', amount: 6580 },
    { id: 36, date: '24 Nov, 2022', client: 'Mark', amount: 2500 },
    { id: 37, date: '31 Oct, 2022', client: 'Jacob', amount: 15000 },
    { id: 38, date: '11 Jul, 2022', client: 'Ferrara', amount: 1570 },
    { id: 39, date: '7 Dec, 2021', client: 'Rossini', amount: 740 },
    { id: 40, date: '8 Oct, 2022', client: 'Harvey', amount: 650 },
    { id: 41, date: '24 Nov, 2022', client: 'Mark', amount: 2500 },
    { id: 42, date: '31 Oct, 2022', client: 'Jacob', amount: 15000 },
    { id: 43, date: '11 Jul, 2022', client: 'Ferrara', amount: 1570 },
    { id: 44, date: '7 Dec, 2021', client: 'Rossini', amount: 740 },
    { id: 45, date: '8 Oct, 2022', client: 'Harvey', amount: 650 },
    { id: 46, date: '24 Nov, 2022', client: 'Mark', amount: 2500 },
    { id: 47, date: '31 Oct, 2022', client: 'Jacob', amount: 15000 },
    { id: 48, date: '11 Jul, 2022', client: 'Ferrara', amount: 1570 },
    { id: 49, date: '7 Dec, 2021', client: 'Rossini', amount: 740 },
    { id: 50, date: '8 Oct, 2022', client: 'Harvey', amount: 650 },
    { id: 51, date: '24 Nov, 2022', client: 'Mark', amount: 2500 },
    { id: 52, date: '31 Oct, 2022', client: 'Jacob', amount: 15000 },
    { id: 53, date: '11 Jul, 2022', client: 'Ferrara', amount: 1570 },
    { id: 54, date: '7 Dec, 2021', client: 'Rossini', amount: 740 },
    { id: 55, date: '8 Oct, 2022', client: 'Harvey', amount: 650 },
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
export default function IvoicesTabel(props) {
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