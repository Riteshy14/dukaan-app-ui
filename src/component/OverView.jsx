import { RevenueCard } from "./RevenueCard";
import { RevenueCard1 } from "./Revenuecard1";

export function OverView(){
    return <div>
            <div className="flex justify-between gap-4 mr-6 ml-6 m-4  " >
        <div>
            <p className="font-semibold text-lg " >Overview</p>
        </div>
        <div className="flex gap-2 pt-1 pb-1 pl-3 pr-6 border-2 border-gray-200 bg-white-500">
            <p className="text-gray-500">This Month</p>
            <div className="flex items-center">
            <svg  stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path></svg>
            </div>
        </div>
    </div>

    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3  pl-6 pr-6 sm:grid-cols-2">
        <RevenueCard1 title={"Next Payout"} amount={"2,210.10"} orderCount={"23"}/>
        <RevenueCard title={"Amount Pending"} amount={"92,550.20"} orderCount={"14"} />
        <RevenueCard title={"Amount Processed"} amount={"25,92,250.20"} />
    </div>

    </div>
}