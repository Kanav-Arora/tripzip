import React from 'react';
import { FlagIcon } from '../../../../assets/ext-icon';
import { IconProvider } from '../../../../modules/ui/IconProvider/IconProvider';

const ExpenseItem = ({ title, cost }) => {
    return (
        <div className="flex flex-row justify-between text-sm">
            <div>{title}</div>
            <div>{cost}</div>
        </div>
    );
};

export default function RequestCard({ startDate, endDate, interested, cost }) {
    const stayCost = cost.stay ? cost.stay : '-';
    const travelCost = cost.travel ? cost.travel : '-';
    const foodCost = cost.food ? cost.food : '-';
    const miscCost = cost.miscellaneous ? cost.miscellaneous : '-';
    const totalCost =
        (cost.stay ?? 0) +
        (cost.travel ?? 0) +
        (cost.food ?? 0) +
        (cost.miscellaneous ?? 0);
    return (
        <div className="ml-4 flex flex-col">
            <div className="p-7 rounded-xl shadow-lg border  border-gray-300">
                <div className="flex flex-row text-md justify-between items-end">
                    <div className="flex flex-row gap-2">
                        <div className="font-semibold">{startDate}</div>-
                        <div className="font-semibold">{endDate}</div>
                    </div>
                    <div className="font-semibold text-xs">{`${interested} interested`}</div>
                </div>
                <div className="flex flex-col py-4 gap-1 border-b">
                    <ExpenseItem title="Stay" cost={stayCost} />
                    <ExpenseItem title="Travel" cost={travelCost} />
                    <ExpenseItem title="Food" cost={foodCost} />
                    <ExpenseItem title="Miscellaneous" cost={miscCost} />
                </div>
                <div className="font-bold mt-4">
                    <ExpenseItem
                        title="Total"
                        cost={totalCost === 0 ? '-' : totalCost}
                    />
                </div>
                <button className="w-full rounded-md text-white font-bold my-6 py-2 bg-gradient-to-r from-red-600 to-pink-700">
                    Request Join
                </button>
                <div className="text-xs flex flex-row justify-center">
                    We'll not charge anything
                </div>
            </div>
            <div className="mt-4 text-xs flex flex-row justify-center underline items-center gap-1">
                <IconProvider Icon={FlagIcon} size={1} /> Report this trip
            </div>
        </div>
    );
}
