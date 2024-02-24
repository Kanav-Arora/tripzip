import React from 'react';
import styled from 'styled-components';
import { FlagIcon } from '../../../../assets/ext-icon';
import { IconProvider } from '../../../../modules/ui/IconProvider/IconProvider';
import { Theme } from '../../../../modules/ui/Theme/theme';

const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: ${Theme.font.size.sm};
`;

const TotalItem = styled.div`
    font-size: ${Theme.font.size.sm};
    font-weight: ${Theme.font.weight.bold};
`;

const ExpenseItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${Theme.spacing(2)};
    border-bottom: 1px solid ${Theme.color.gray40};
    padding: ${Theme.spacing(4)} 0;
`;

const StyledButton = styled.button`
    width: 100%;
    border: none;
    border-radius: ${Theme.border.radius.md};
    font-weight: bold;
    padding: ${Theme.spacing(2)} 0;
    background-image: linear-gradient(to right, #dc2626, #d94646);
    color: white;
    cursor: pointer;
    margin-top: ${Theme.spacing(2)};

    &:hover {
        background-image: linear-gradient(to right, #c53030, #c72c2c);
    }
`;

const StyledDiv = styled.div`
    font-weight: bold;
    font-size: 0.875rem; /* equivalent to text-md */
    display: flex;
    flex-direction: row;
    gap: 0.5rem; /* equivalent to gap-2 */
`;

const RequestCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${Theme.spacing(2)};
    border-radius: ${Theme.border.radius.xl};
    border: 1px solid ${Theme.color.gray40};
    padding: ${Theme.spacing(4)};
`;

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const ExpenseItem = ({ title, cost }) => {
    return (
        <FlexRow>
            <div>{title}</div>
            <div>{cost}</div>
        </FlexRow>
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
        <StyledWrapper>
            <RequestCardContainer>
                <FlexRow>
                    <StyledDiv>
                        <div>{startDate}</div>
                        <div>-</div>
                        <div>{endDate}</div>
                    </StyledDiv>
                    <div>{`${interested} interested`}</div>
                </FlexRow>
                <ExpenseItemContainer>
                    <ExpenseItem title="Stay" cost={stayCost} />
                    <ExpenseItem title="Travel" cost={travelCost} />
                    <ExpenseItem title="Food" cost={foodCost} />
                    <ExpenseItem title="Miscellaneous" cost={miscCost} />
                </ExpenseItemContainer>
                <TotalItem>
                    <ExpenseItem
                        title="Total"
                        cost={totalCost === 0 ? '-' : totalCost}
                    />
                </TotalItem>
                <StyledButton>Request Join</StyledButton>
                <div className="text-xs flex flex-row justify-center">
                    We'll not charge anything
                </div>
            </RequestCardContainer>
            <div className="mt-4 text-xs flex flex-row justify-center underline items-center gap-1">
                <IconProvider Icon={FlagIcon} size={1} /> Report this trip
            </div>
        </StyledWrapper>
    );
}
