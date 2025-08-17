import { useState } from "react";
import "./App.css";
import { Topbar } from "./component/Topbar";
import { SideBar } from "./component/SideBar";
import { OverView } from "./component/OverView";
import { Transaction } from "./component/Transaction";
import { TableTopPart } from "./component/TableTopPart";
import { Table } from "./component/Table";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-white-50">
      <SideBar />
      <div className="pl-0 md:pl-48">
        <Topbar />
        <OverView />
        <Transaction />
        <div className="p-4 md:p-6">
          <div className="p-2 rounded-lg bg-white-500">
            <TableTopPart />
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
