import React from 'react';
import { Container, Content, Email, UserName } from './UserPageHeaderStyles';
import UserAvatar from '../../../../modules/ui/UserAvatar';

export default function UserPageHeader({ image, name, email }) {
    return (
        <Container>
            <UserAvatar size={6} image={image} letter={name} />
            <Content>
                <UserName>{name}</UserName>
                <Email>{email}</Email>
            </Content>
        </Container>
    );
}
