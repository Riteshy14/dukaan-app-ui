import { OrderData } from "./orders";

export function Table() {
  return (
    <div>
      <div className="relative overflow-x-auto">
        <table className="min-w-full table-auto text-sm text-left min-h-full">
          <thead className="bg-gray-100 rounded-md  text-gray-500 font-extralight text-sm ">
            <tr>
              <th className="p-2 ">Order ID</th>
              <th className="p-2 ">Status</th>
              <th className="p-2 ">Transactions ID</th>
              <th className="p-2 ">Refund Date</th>
              <th className="p-2 flex justify-end">Order Amount</th>
            </tr>
          </thead>
          {OrderData.map((order)=>{
            return (
                <tbody>
                    <tr className="bg-white-500 border-b">
                        <td className="px-2 py-2 text-blue-700">#{order.id}</td>
                        <td className="px-2 py-2 text-gray-700 flex items-center gap-1">
                          {(order.status=== "Successfull") && <div className="h-2 w-2 rounded-full bg-green-500"/>}
                          {(order.status=== "Processing") && <div className="h-2 w-2 rounded-full bg-gray-500"/>}
                          {(order.status=== "failed") && <div className="h-2 w-2 rounded-full bg-red-500"/>}
                          {order.status}</td>
                        <td className="px-2 py-2 text-gray-700 ">{order.transactionID}</td>
                        <td className="px-2 py-2 text-gray-700 ">{order.refundDate}</td>
                        <td className="px-2 py-2 flex justify-end text-gray-700 ">{order.amount}</td>
                    </tr>
                </tbody>
            )
          })}
        </table>
      </div>
    </div>
  );
}
