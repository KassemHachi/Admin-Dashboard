import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'date', headerName: 'Date Created', width: 130 },
    { field: 'clinet', headerName: 'Client', width: 130 },
    {
        field: 'amount',
        headerName: 'Amount ($)',
        type: 'number',
        width: 90,
    },

];

const rows = [
    { id: 1, date: '3 Jul, 2021', clinet: 'Jon', amount: 1522 },
    { id: 2, date: '15 Feb, 2022', clinet: 'Cersei', amount: 7850 },
    { id: 3, date: '27 Jan, 2020', clinet: 'Jaime', amount: 4530 },
    { id: 4, date: '22 Mars, 2022', clinet: 'Arya', amount: 6580 },
    { id: 5, date: '24 Nov, 2022', clinet: 'Daenerys', amount: 2500 },
    { id: 6, date: '31 Oct, 2022', clinet: null, amount: 15000 },
    { id: 7, date: '11 Jul, 2022', clinet: 'Ferrara', amount: 1570 },
    { id: 8, date: '7 Dec, 2021', clinet: 'Rossini', amount: 740 },
    { id: 9, date: '8 Oct, 2022', clinet: 'Harvey', amount: 650 },
];

export default function IvoicesTabel(props) {
    return (
        <div className={props.className} style={{ width: '100%', }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                className={"border-0"}
                checkboxSelection
            />
        </div>
    );
}