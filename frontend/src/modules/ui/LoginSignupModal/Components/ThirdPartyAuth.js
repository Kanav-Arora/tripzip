import { IconProvider } from '../../IconProvider/IconProvider';
import { AuthServiceContainer } from '../Styles/Styles';

const ThirdPartyAuth = ({ title, Icon }) => {
    return (
        <AuthServiceContainer>
            <IconProvider Icon={Icon} />
            <div>Continue with {title}</div>
        </AuthServiceContainer>
    );
};

export default ThirdPartyAuth;
