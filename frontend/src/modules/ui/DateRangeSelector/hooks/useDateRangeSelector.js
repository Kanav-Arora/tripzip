import { useRecoilState, useRecoilValue } from 'recoil';
import { DateRangeSelectorState } from '../states/DateRangeSelectorState';

export const useDateRangeSelector = () => {
    const [, setSelectedRange] = useRecoilState(DateRangeSelectorState);
    const selectedRange = useRecoilValue(DateRangeSelectorState);
    return { selectedRange, setSelectedRange };
};
