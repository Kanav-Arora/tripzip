import { useState } from 'react';

import { ClipboardIcon, CheckIcon } from "../../../assets/ext-icon"

const ShareModal = ({ url }) => {
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(url);
        setIsCopied(true);

        setTimeout(() => {
            setIsCopied(false);
        }, 3000);
    };

    return (
        <div className="flex flex-col gap-y-4">
            <div className="text-lg font-bold">Share trip with others</div>
            <div className="text-sm flex items-center">
                Copy and share below link to share this trip with others.
            </div>
            <div className="flex items-center space-x-2">
                <div className="w-full p-2 text-gray-800 border rounded-md">
                    {url}
                </div>
                <button
                    onClick={copyToClipboard}
                    className='p-2 border rounded-md'
                >
                    {isCopied ? <CheckIcon size={5} color="#50C878" /> : <ClipboardIcon size={5} />}
                </button>
            </div>
        </div>
    );
};

export default ShareModal;
