import Heading from '../../../modules/ui/Heading';
import Title from '../../../modules/ui/Title';
import './Page1.css';
import { useAddTrip } from '../useAddTrip';

export default function Page1(props) {
    const { updateLocation, updateDescription, getAddTripState } = useAddTrip();
    const inputValueHandler = (e) => {
        updateLocation(e.target.value);
    };

    const textAreaValueHandler = (e) => {
        updateDescription(e.target.value);
    };

    return (
        <div className="flex flex-col h-full">
            <Title
                text="Create a trip"
                isBold
                fontSize={'1.25rem'}
                classname="mb-8"
            />
            <Heading text="Location" className="mb-2 font-medium" />
            <div className="flex flex-row justify-between">
                <input
                    type="text"
                    className="w-2/4 border border-gray-300 p-2 rounded-md mb-8 text-sm location-input"
                    value={getAddTripState.location}
                    onChange={inputValueHandler}
                    placeholder="Delhi"
                />
                <div>
                    <input
                        type="text"
                        placeholder="From date"
                        className="min-w-[150px] border border-gray-300 p-2 rounded-md text-sm location-input mx-2"
                        readOnly
                    />
                    -
                    <input
                        type="text"
                        placeholder="To date"
                        className="min-w-[150px] border border-gray-300 p-2 rounded-md text-sm location-input mx-2"
                        readOnly
                    />
                </div>
            </div>
            <Heading
                text="Description"
                className="font-medium mb-2"
                subText="- Optional"
                subTextStyle="text-gray-400"
            />
            <div className="flex-1  relative w-full rounded-md overflow-hidden description-input">
                <textarea
                    className="w-full h-full p-2 resize-none outline-none text-sm overflow-y-scroll"
                    style={{ resize: 'none' }}
                    value={getAddTripState.description}
                    onChange={textAreaValueHandler}
                />
            </div>
        </div>
    );
}
