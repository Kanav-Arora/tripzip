import {
    ContentContainer,
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

const SignupForm = ({ handleToggle }) => (
    <ContentContainer
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        transition={{ stiffness: 120 }}
    >
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
    </ContentContainer>
);

export default SignupForm;
