import { useRecoilValue, useRecoilState } from 'recoil';
import { showAddTripModalState } from './States/showAddTripModalState';
import { addTripState } from './States/addTripState';

export const useAddTrip = () => {
    const [, setShowAddTripModal] = useRecoilState(showAddTripModalState);
    const isAddTripModalVisible = useRecoilValue(showAddTripModalState);

    const openAddTripModal = () => {
        setShowAddTripModal(true);
    };

    const closeAddTripModal = () => {
        setShowAddTripModal(false);
    };

    const toggleAddTripModal = () => {
        setShowAddTripModal(!isAddTripModalVisible);
    };

    const [, setAddTripState] = useRecoilState(addTripState);
    const getAddTripState = useRecoilValue(addTripState);
    const updateLocation = (location) => {
        setAddTripState({
            ...getAddTripState,
            location,
        });
    };

    const updateDescription = (description) => {
        setAddTripState({
            ...getAddTripState,
            description,
        });
    };

    const addDay = () => {
        setAddTripState({
            ...getAddTripState,
            days: [
                ...getAddTripState.days,
                [getAddTripState.days.length + 1, ''],
            ],
        });
    };

    const deleteDay = (dayNo) => {
        setAddTripState({
            ...getAddTripState,
            days: getAddTripState.days.filter(([day]) => day !== dayNo),
        });
    };

    const updateDayText = (dayNo, newText) => {
        setAddTripState({
            ...getAddTripState,
            days: getAddTripState.days.map(([day, content]) =>
                day === dayNo ? [day, newText] : [day, content]
            ),
        });
    };

    const nextPage = () => {
        setAddTripState({
            ...getAddTripState,
            currentStep: getAddTripState.currentStep + 1,
        });
    };

    const prevPage = () => {
        setAddTripState({
            ...getAddTripState,
            currentStep: getAddTripState.currentStep - 1,
        });
    };

    return {
        isAddTripModalVisible,
        openAddTripModal,
        closeAddTripModal,
        toggleAddTripModal,
        getAddTripState,
        updateLocation,
        updateDescription,
        addDay,
        deleteDay,
        updateDayText,
        nextPage,
        prevPage,
    };
};
