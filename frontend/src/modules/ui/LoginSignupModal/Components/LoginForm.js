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

const LoginForm = ({ handleToggle }) => (
    <>
        <ContentHeader>
            <ContentHeading>Log In</ContentHeading>
            <div className="text-gray-500 text-sm">Welcome back!</div>
        </ContentHeader>
        <ContentBody>
            <ThirdPartyAuth title="Google" Icon={GoogleIcon} />
            <TextDivider>or</TextDivider>
            <AuthForm isLogin={true} />
            <ToggleText>
                <div>Don't have an account?</div>
                <ToggleButton onClick={handleToggle}>Sign Up</ToggleButton>
            </ToggleText>
        </ContentBody>
    </>
);

export default LoginForm;
