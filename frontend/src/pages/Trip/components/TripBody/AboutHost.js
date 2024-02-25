import React from 'react';
import styled from 'styled-components';
import {
    StarMini,
    CakeIcon,
    MapIcon,
    LanguageIcon,
    AcademicCapIcon,
    MapPinIcon,
} from '../../../../assets/ext-icon';
import UserAvatar from '../../../../modules/ui/UserAvatar';
import { IconProvider } from '../../../../modules/ui/IconProvider/IconProvider';
import { Theme } from '../../../../modules/ui/Theme/theme';

const CardContainer = styled.div`
    height: fit-content;
    width: 100%;
    background-color: white;
    border-radius: ${Theme.border.radius.xl};
    padding: ${Theme.spacing(3)};
    display: flex;
    flex-direction: row;
    gap: ${Theme.spacing(8)};
`;

const LeftSection = styled.div`
    flex-basis: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${Theme.spacing(2)};
`;

const RightSection = styled.div`
    flex-basis: 25%;
    display: flex;
    flex-direction: column;
    gap: ${Theme.spacing(3)};
`;

const AboutItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    margin-top: 12px;
`;

const StyledButton = styled.button`
    width: fit-content;
    border-radius: 6px;
    background-color: #0f0f0f;
    color: white;
    font-weight: bold;
    padding: 8px 16px;
    margin-top: 12px;
`;

const StyledHostCard = styled.div`
    width: 100%;
    padding: 10% 15%;
    background-color: #f0efe9;
    border-radius: ${Theme.border.radius.xl};
    color: black;
    display: flex;
    flex-direction: column;
    gap: ${Theme.spacing(4)};
`;

const AboutContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: ${Theme.spacing(2)};
`;

const HostMessage = styled.div`
    font-size: 0.75rem;
    font-weight: light;
    padding-top: 24px;
    border-top: 1px solid #ccc;
`;

const StyledCardItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: ${Theme.spacing(1)};
`;

const StyledCardItemTitle = styled.div`
    font-weight: ${Theme.font.weight.bold};
    font-size: ${Theme.font.size.md};
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${Theme.spacing(2)};
`;

const StyledCardItemSubTitle = styled.div`
    font-size: ${Theme.font.size.xs};
`;

const CardItem = ({ title, icon, subtitle }) => {
    return (
        <StyledCardItem>
            <StyledCardItemTitle>
                <div>{title}</div>
                {icon && <IconProvider Icon={icon} size={1} />}
            </StyledCardItemTitle>
            <StyledCardItemSubTitle>{subtitle}</StyledCardItemSubTitle>
        </StyledCardItem>
    );
};

const Card = ({ uid, name, stars, yearsHosting, numberOfTrips }) => {
    return (
        <CardContainer>
            <LeftSection>
                <UserAvatar
                    uid={uid}
                    name={name}
                    size={5}
                />
                <div style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                    {name}
                </div>
                <div style={{ fontSize: '0.875rem' }}>Host</div>
            </LeftSection>
            <RightSection>
                <CardItem title={stars} subtitle="Stars" icon={StarMini} />
                <CardItem title={yearsHosting} subtitle="Years Hosting" />
                <CardItem title={numberOfTrips} subtitle="Trips" />
            </RightSection>
        </CardContainer>
    );
};

const AboutItem = ({ Icon, Text }) => {
    return (
        <AboutItemContainer>
            <IconProvider Icon={Icon} size={1} />
            {Text}
        </AboutItemContainer>
    );
};

export default function AboutHost({ userData }) {
    let location = `${userData.userDetails.state}, ${userData.userDetails.country}`;
    let hobbies = 'Likes';
    userData.userDetails.hobbies.forEach((hobby) => {
        hobbies += ` ${hobby},`;
    });
    let languages = 'Speaks';
    userData.userDetails.language_speak.forEach((language) => {
        languages += ` ${language},`;
    });
    return (
        <StyledHostCard>
            <Card
                uid={userData._id}
                name={userData.name}
                stars={userData.stars}
                yearsHosting={2}
                numberOfTrips={userData.tripsCreated.length}
            />
            <AboutContent>
                <AboutItem
                    Icon={CakeIcon}
                    Text={`Born in ${userData.year_of_birth}`}
                />
                <AboutItem
                    Icon={MapIcon}
                    Text={`From ${userData.birth_place}`}
                />
                <AboutItem Icon={MapPinIcon} Text={`Located at ${location}`} />
                <AboutItem Icon={AcademicCapIcon} Text={hobbies} />
                <AboutItem Icon={LanguageIcon} Text={languages} />
            </AboutContent>
            <div>{userData.about_yourself}</div>
            <StyledButton>Message Host</StyledButton>
            <HostMessage>
                We are not responsible to protect any payment transfers over or
                outside TripZip.
            </HostMessage>
        </StyledHostCard>
    );
}
