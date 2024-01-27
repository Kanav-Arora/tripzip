import { useEffect } from 'react';
import axios from 'axios';
import { backendOrigin } from '../../frontend.config';
import PlainNavbar from './Components/PlainNavbar';
import {
    StylecContainer,
    ProfileInfoContent,
    StyledSection,
    StyledSectionHeading,
    StyledWrapper,
    StyledSaveHeader,
    StyledSaveButton,
} from './AccountSettingStyles';
import ProfileImagePicker from './Components/ProfileImagePicker/ProfileImagePicker';
import AccountDetails from './Components/AccountDetails/AccountDetails';
import DeleteAccount from './Components/DeleteAccount/DeleteAccount';
import DeleteAccountModal from './Components/DeleteAccountModal/DeleteAccountModal';
import { useRecoilValue, useRecoilState } from 'recoil';
import { ShowDeleteModalState } from './states/ShowDeleteModalState';
import { UserDataState } from './states/UserDataState';
import { ImageUpdateState } from './states/ImageUpdateState';
import { IconProvider } from '../../modules/ui/IconProvider/IconProvider';
import { BookmarkIcon } from '../../assets/ext-icon';
import { Theme } from '../../modules/ui/Theme/theme';
import { DataUpdateState } from './states/DataUpdateState';
import { useAuth } from '../../context/Auth/useAuth';
import { useNavigate } from 'react-router-dom';

export default function AccountSetting() {
    const isDeleteModalVisible = useRecoilValue(ShowDeleteModalState);
    const [fetchedUserData, setUserDataState] = useRecoilState(UserDataState);

    const [dataUpdatedState, setDataUpdatedState] =
        useRecoilState(DataUpdateState);
    const imageUpdatedState = useRecoilValue(ImageUpdateState);

    const isDataChanged =
        imageUpdatedState.imageFile !== null ||
        dataUpdatedState !== fetchedUserData;

    const authState = useAuth();
    const navigate = useNavigate();
    if (!authState.isAuthenticated) {
        navigate('/');
    }

    useEffect(() => {
        const instance = axios.create({
            withCredentials: true,
            baseURL: backendOrigin,
        });
        const fetchUserDetail = async () => {
            const response = await instance.get(`/account/`);
            if (response.status === 200) {
                setUserDataState(response.data.data);
                setDataUpdatedState(response.data.data);
            }
        };
        fetchUserDetail();
    }, []);

    if (!fetchedUserData) {
        return <></>;
    }

    return (
        <>
            <DeleteAccountModal isVisible={isDeleteModalVisible} />
            <PlainNavbar />
            <StyledWrapper>
                <StylecContainer>
                    <StyledSection>
                        <StyledSaveHeader>
                            <StyledSectionHeading>
                                Profile Information
                            </StyledSectionHeading>
                            <StyledSaveButton
                                disabled={isDataChanged === false}
                            >
                                <IconProvider
                                    Icon={BookmarkIcon}
                                    size={1}
                                    color={
                                        isDataChanged === false
                                            ? Theme.color.gray40
                                            : 'black'
                                    }
                                />
                                <div>Save</div>
                            </StyledSaveButton>
                        </StyledSaveHeader>
                        <ProfileImagePicker />
                        <ProfileInfoContent>
                            <AccountDetails />
                        </ProfileInfoContent>
                    </StyledSection>
                    <StyledSection>
                        <StyledSectionHeading>
                            Account Setting
                        </StyledSectionHeading>
                        <ProfileInfoContent>
                            <DeleteAccount />
                        </ProfileInfoContent>
                    </StyledSection>
                </StylecContainer>
            </StyledWrapper>
        </>
    );
}
