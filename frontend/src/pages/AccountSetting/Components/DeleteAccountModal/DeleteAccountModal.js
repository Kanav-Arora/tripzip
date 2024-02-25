import React from 'react';
import Modal from '../../../../modules/ui/Modal/Modal';
import {
    DeleteButton,
    StyledBottom,
    StyledWrapper,
    StyledContent,
} from './DeleteAccountModalStyles';
import { useRecoilState } from 'recoil';
import { ShowDeleteModalState } from '../../states/ShowDeleteModalState';

export default function DeleteAccountModal({ isVisible }) {
    const [, setDeleteModalState] = useRecoilState(ShowDeleteModalState);

    return (
        <Modal
            isVisible={isVisible}
            showDialogCross={true}
            modalTitle="Delete Account"
            onClose={() => setDeleteModalState(false)}
            animate={true}
        >
            <StyledWrapper>
                <StyledContent>
                    This action will delete all of your data permanently. Please
                    note that this change once done can't be reverted.
                </StyledContent>
                <StyledBottom>
                    <DeleteButton>Delete</DeleteButton>
                </StyledBottom>
            </StyledWrapper>
        </Modal>
    );
}
