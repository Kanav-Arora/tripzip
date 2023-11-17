import React from "react";
import { FlagIcon } from "../../../../assets/ext-icon";

const ExpenseItem = ({ title, cost }) => {
    return (
        <div className="flex flex-row justify-between text-sm">
            <div>{title}</div>
            <div>{cost}</div>
        </div>
    );
};

export default function RequestCard({ startDate, endDate, views, cost }) {
    return (
        <div className="ml-4 flex flex-col">
            <div className="p-7 rounded-xl shadow-lg border  border-gray-300">
                <div className="flex flex-row text-md justify-between items-end">
                    <div className="flex flex-row gap-2">
                        <div className="font-semibold">{startDate}</div>-
                        <div className="font-semibold">{endDate}</div>
                    </div>
                    <div className="font-semibold text-xs">{`${views} views`}</div>
                </div>
                <div className="flex flex-col py-4 gap-1 border-b">
                    <ExpenseItem title="Stay" cost="-" />
                    <ExpenseItem title="Travel" cost="-" />
                    <ExpenseItem title="Food" cost="-" />
                    <ExpenseItem title="Miscellaneous" cost="-" />
                </div>
                <div className="font-bold mt-4">
                    <ExpenseItem title="Total" cost="-" />
                </div>
                <button className="w-full rounded-md text-white font-bold my-6 py-2 bg-gradient-to-r from-red-600 to-pink-700">
                    Request Join
                </button>
                <div className="text-xs flex flex-row justify-center">
                    We'll not charge anything
                </div>
            </div>
            <div className="mt-4 text-xs flex flex-row justify-center underline items-center gap-1">
                <FlagIcon /> Report this trip
            </div>
        </div>
    );
}
