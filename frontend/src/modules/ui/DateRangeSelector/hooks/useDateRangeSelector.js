import { useRecoilState, useRecoilValue } from 'recoil';
import { showDateRangeSelectorState } from '../states/showDateRangeSelectorState';

export const useDateRangeSelector = (DateRangeState) => {
    const [, setSelectedRange] = useRecoilState(DateRangeState);
    const selectedRange = useRecoilValue(DateRangeState);
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
