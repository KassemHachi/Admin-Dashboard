import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'No', width: 70, },
    { field: 'ProductName', headerName: 'Product Name', minWidth: 250, },
    { field: 'Qunatity', headerName: 'Qunatity', type: 'number', width: 250 },
    {
        field: 'amount',
        headerName: 'Amount ($)',
        type: 'number',
        width: 250,

    },

];

const rows = [
    { id: 1, ProductName: 'Laptop Lenovo I7 SSD 120 GB RAM 8GB', Qunatity: 65, amount: 1522 },
    { id: 2, ProductName: 'Display Monitor LG 22 4K IPS', Qunatity: 74, amount: 7850 },
    { id: 3, ProductName: 'Display Monitor SAMSUNG 24 FHD IPS', Qunatity: 78, amount: 4530 },
    { id: 4, ProductName: 'Laptop Acer I5 SSD 120GB RAM 8GB', Qunatity: 45, amount: 6580 },
    { id: 5, ProductName: 'Soft Disk 500GB Adata', Qunatity: 24, amount: 2500 },
    { id: 6, ProductName: 'Laptop HP I5 HDD 500GB RAM 4GB', Qunatity: 64, amount: 15000 },
    { id: 7, ProductName: 'RAM 8GB DDR3', Qunatity: 68, amount: 1570 },
    { id: 8, ProductName: 'RAM 4GB DDR4', Qunatity: 72, amount: 740 },
    { id: 9, ProductName: 'Laptop TOSHIBA I7 SSD 500GB RAM 8GB', Qunatity: 71, amount: 650 },
    { id: 10, ProductName: 'Soft Disk 120GB SAMSUNG', Qunatity: 87, amount: 2500 },
    { id: 11, ProductName: 'Hard Disk 500GB SanDisk', Qunatity: 68, amount: 1570 },
    { id: 12, ProductName: 'Display Monitor Dell 32 4K IPS', Qunatity: 61, amount: 740 },
    { id: 13, ProductName: 'Soft Disk 1TB WesternDigital', Qunatity: 71, amount: 650 },
    { id: 14, ProductName: 'RAM 8GB DDR4', Qunatity: 87, amount: 2500 },

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
export default function ProductsTable(props) {
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