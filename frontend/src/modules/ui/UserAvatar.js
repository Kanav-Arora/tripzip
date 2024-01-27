import React from 'react';
import styled from 'styled-components';

const AvatarContainer = styled.div`
    width: ${(props) => `${props.size}rem`};
    height: ${(props) => `${props.size}rem`};
    background-color: ${(props) => props.backgroundColor || 'black'};
    color: ${(props) => props.textColor || 'white'};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: ${(props) =>
        props.hasShadow
            ? '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)'
            : 'none'};
    cursor: pointer;
`;

const TextInitials = styled.span`
    font-size: ${(props) => `${props.size / 2}rem`};
    padding: 0.25em;
`;

export default function UserAvatar({
    image,
    letter,
    size,
    backgroundColor,
    textColor,
    hasShadow,
    onClick,
}) {
    return (
        <AvatarContainer
            size={size}
            backgroundColor={backgroundColor}
            textColor={textColor}
            hasShadow={hasShadow}
            onClick={onClick}
        >
            {image ? (
                <img
                    src={image}
                    alt="User Avatar"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '50%',
                    }}
                />
            ) : (
                <TextInitials size={size}>
                    {letter ? letter.slice(0, 2).toUpperCase() : ''}
                </TextInitials>
            )}
        </AvatarContainer>
    );
}
