import React from "react";
import { useSelector } from "react-redux";
import { DataGrid, ColDef } from "@material-ui/data-grid";

const TransactionTable: React.FC<any> = () => {
  const transactions = useSelector(
    (state: any) => state.transactions
  );

  const columns: ColDef[] = [
    { field: "id", headerName: "ID", width: 70, sortable: false, hide: true },
    { field: "name", headerName: "Name", width: 300 },
    { field: "amount", headerName: "Amount", width: 300 },
  ];

  const rows = transactions.collection.map((t: any, i: number) => ({
    id: i,
    name: t.name,
    amount: t.amount,
  }));

  return (
    <div className="transaction-table">
      <h3>Recent Transactions</h3>
      <DataGrid autoHeight rows={rows} columns={columns} pageSize={20} />
      <div className="status"><span>Status: </span><span>{transactions.status}</span></div>
    </div>
  );
};

export default TransactionTable;
