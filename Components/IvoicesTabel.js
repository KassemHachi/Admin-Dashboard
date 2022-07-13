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
        resizable: true,
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
];

export default function IvoicesTabel(props) {
    return (
        <div className={props.className} style={{ width: '100%', }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                className={"border-0"}

                checkboxSelection

            />
        </div>
    );
}