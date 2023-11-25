import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 400px;
    overflow: hidden;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 8px;
`;

export default function TripImage({ image }) {
    return (
        <Container>
            <Image src={image} alt={"Trip Image"} />
        </Container>
    );
}
