import { useRecoilState, useRecoilValue } from 'recoil';
import { DateRangeSelectorState } from '../states/DateRangeSelectorState';
import { showDateRangeSelectorState } from '../states/showDateRangeSelectorState';

export const useDateRangeSelector = () => {
    const [, setSelectedRange] = useRecoilState(DateRangeSelectorState);
    const selectedRange = useRecoilValue(DateRangeSelectorState);
    const [, setShowDateRangeSelectorState] = useRecoilState(
        showDateRangeSelectorState
    );
    const isDateRangeSelectorVisible = useRecoilValue(
        showDateRangeSelectorState
    );

    const openDateRangeSelector = () => {
        setShowDateRangeSelectorState(true);
    };

    const closeDateRangeSelector = () => {
        setShowDateRangeSelectorState(false);
    };

    const toggleDateRangeSelector = () => {
        setShowDateRangeSelectorState(!isDateRangeSelectorVisible);
    };

    return {
        selectedRange,
        setSelectedRange,
        openDateRangeSelector,
        closeDateRangeSelector,
        isDateRangeSelectorVisible,
        toggleDateRangeSelector,
    };
};
