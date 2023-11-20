import React, { useState } from "react";
import Modal from "../../../../modules/ui/Modal/Modal";

const ShowMoreModal = ({ description }) => {
    return (
        <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-2">
                <div className="text-lg font-bold">Description</div>
                <div className="text-sm leading-loose">{description}</div>
            </div>
            <div className="flex flex-col gap-y-2">
                <div className="text-lg font-bold">Itinerary</div>
                <div className="text-sm leading-loose">{description}</div>
            </div>
        </div>
    );
};

export default function AboutTrip({ description }) {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };
    return (
        <div className="flex flex-col gap-8">
            <div className="text-xl font-bold">About Trip</div>
            <div className="relative max-h-24 overflow-hidden leading-6">
                {description}
            </div>
            <button
                className="bg-matteBlack text-white px-4 py-1 block mx-auto rounded-md"
                onClick={handleOpenModal}
            >
                Show More
            </button>
            <Modal
                isVisible={isModalOpen}
                width="55%"
                height="90%"
                onClose={handleCloseModal}
                scroll={true}
            >
                <ShowMoreModal description={description} />
            </Modal>
        </div>
    );
}
