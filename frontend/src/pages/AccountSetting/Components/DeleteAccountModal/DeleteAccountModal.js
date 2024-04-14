import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Modal from '../../../../modules/ui/Modal/Modal';
import {
    DeleteButton,
    StyledBottom,
    StyledWrapper,
    StyledContent,
} from './DeleteAccountModalStyles';
import { useRecoilState } from 'recoil';
import { ShowDeleteModalState } from '../../states/ShowDeleteModalState';
import { backendOrigin } from '../../../../frontend.config';
import { useAuth } from '../../../../context/Auth/useAuth';

export default function DeleteAccountModal({ isVisible }) {
    const [, setDeleteModalState] = useRecoilState(ShowDeleteModalState);
    const navigate = useNavigate();
    
    const { logoutAuth } = useAuth();

    const handleDelete = async () => {
        try {
            const instance = axios.create({
                baseURL: backendOrigin,
                withCredentials: true,
            });
            const response = await instance.delete(`/account`);
            if (response.status === 200) {
                logoutAuth(); // Nullify the auth state
                navigate('/');
            } else {
                throw new Error('Error deleting user: ' + response.statusText);
            }
        } catch (error) {
            console.error('DELETE request failed:', error);
        }
    };


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
                    <DeleteButton onClick={ handleDelete }>Delete</DeleteButton>
                </StyledBottom>
            </StyledWrapper>
        </Modal>
    );
}
