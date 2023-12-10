import { AuthServiceContainer } from '../Styles/Styles';

const ThirdPartyAuth = ({ title, Icon }) => {
    return (
        <AuthServiceContainer>
            <Icon />
            <div>Continue with {title}</div>
        </AuthServiceContainer>
    );
};

export default ThirdPartyAuth;
