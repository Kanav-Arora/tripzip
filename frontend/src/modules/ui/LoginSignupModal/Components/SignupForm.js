import {
    ContentHeader,
    ContentHeading,
    ContentBody,
    ToggleText,
    ToggleButton,
    TextDivider,
} from '../Styles/Styles';

import AuthForm from './AuthForm';
import ThirdPartyAuth from './ThirdPartyAuth';
import { GoogleIcon } from '../../../../assets/ext-icon';
import { useRecoilValue } from 'recoil';
import { isVerificationPageOpenState } from '../states/isVerificationPageOpenState';
import VerificationPage from './VerificationPage';

export default function SignupForm({ handleToggle }) {
    const verifyState = useRecoilValue(isVerificationPageOpenState);
    return !verifyState ? (
        <>
            <ContentHeader>
                <ContentHeading>Sign Up</ContentHeading>
                <div className="text-gray-500 text-sm">Welcome!</div>
            </ContentHeader>
            <ContentBody>
                <ThirdPartyAuth title="Google" Icon={GoogleIcon} />
                <TextDivider>or</TextDivider>
                <AuthForm isLogin={false} />
                <ToggleText>
                    <div>Have an account?</div>
                    <ToggleButton onClick={handleToggle}>Log In</ToggleButton>
                </ToggleText>
            </ContentBody>
        </>
    ) : (
        <VerificationPage />
    );
}
