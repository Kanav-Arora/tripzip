import React from 'react';
import {
    DeleteButton,
    StyledContent,
    StyledTitle,
    StyledWrapper,
} from './DeleteAccountStyles';
import { useRecoilState } from 'recoil';
import { ShowDeleteModalState } from '../../states/ShowDeleteModalState';

export default function DeleteAccount() {
    const [, setDeleteModalState] = useRecoilState(ShowDeleteModalState);
    return (
        <StyledWrapper>
            <StyledTitle>Delete Account</StyledTitle>
            <StyledContent>
                <div>
                    Once you delete a repository, there is no going back. Please
                    be certain.
                </div>
                <DeleteButton onClick={() => setDeleteModalState(true)}>
                    Delete
                </DeleteButton>
            </StyledContent>
        </StyledWrapper>
    );
}
