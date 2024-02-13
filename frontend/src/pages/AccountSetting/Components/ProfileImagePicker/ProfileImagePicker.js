import React, { useRef } from 'react';
import {
    StyledChangeText,
    StyledContent,
    StyledRemoveText,
    StyledWrapper,
} from './ProfileImagePickerStyles';
import UserAvatar from '../../../../modules/ui/UserAvatar';
import { useAuth } from '../../../../context/Auth/useAuth';
import { useRecoilState } from 'recoil';
import { ImageUpdateState } from '../../states/ImageUpdateState';
import { IconProvider } from '../../../../modules/ui/IconProvider/IconProvider';
import { ArrowUpOnSquareIcon } from '../../../../assets/ext-icon';

export default function ProfileImagePicker() {
    const fileInputRef = useRef(null);
    const { authStateValue } = useAuth();
    const [imageState, setImageUpdateState] = useRecoilState(ImageUpdateState);

    const handleFileInputChange = () => {
        const selectedFile = fileInputRef.current.files[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageUpdateState({
                    ...imageState,
                    imageFile: selectedFile,
                    image: reader.result,
                });
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    const handleRemoveClick = () => {
        setImageUpdateState({ ...imageState, imageFile: null, image: null });
    };

    const handleImagePickerClick = () => {
        fileInputRef.current.click();
    };

    return (
        <StyledWrapper>
            <UserAvatar
                name={authStateValue.name}
                size={6}
                onClick={handleImagePickerClick}
            />
            <StyledContent>
                <StyledChangeText onClick={handleImagePickerClick}>
                    <IconProvider Icon={ArrowUpOnSquareIcon} size={1.15} />
                    <div>Upload</div>
                </StyledChangeText>
                <StyledRemoveText onClick={handleRemoveClick}>
                    Remove
                </StyledRemoveText>
                <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileInputChange}
                />
            </StyledContent>
        </StyledWrapper>
    );
}
