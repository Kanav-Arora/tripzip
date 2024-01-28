import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useAuth } from '../../context/Auth/useAuth'
import { BucketAPI } from '../../frontend.config';

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
    uid,
    letter,
    size,
    backgroundColor,
    textColor,
    hasShadow,
    onClick,
}) {
    const [image, setImage] = useState(null);
    const { authStateValue } = useAuth();
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    useEffect(() => {
        const searchUID = uid ? uid : authStateValue.uid;
        const fetchImage = async () => {
            try {
                const response = await axios({
                    method: "GET",
                    url: BucketAPI + searchUID,
                });
                if (response.status === 200) {
                    console.log(response);
                    setImage(response.data.image);
                }
            } catch (error) {
                console.error('Error fetching image:', error.message);
            }
        };

        fetchImage();
    }, []);

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
