export function Transaction(){
    return <div className="flex-col p-6">
        <div>
            <p className="font-normal text-xl">Transactions | This Month</p>
        </div>
        <div className="gap-4 flex">
            <button className="bg-gray-200 p-1 rounded-full pl-4 pr-4 mt-4 text-gray-500 ">Payouts (22)</button>
            <button className="bg-blue-700 p-1 rounded-full pl-4 pr-4 mt-4 text-white-500">Refunds (7)</button>
        </div>
    </div>
}