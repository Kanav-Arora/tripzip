import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import React from 'react'
import "react-loading-skeleton/dist/skeleton.css";
import {
    StyledCardContent,
} from './TripCardStyles';

const StyledSkeletonTripCard = styled.div`
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    position: relative;
    margin-bottom: 1rem;
    width: 350px;
`;

export default function SkeletonCard({ cards }) {
    return (
        Array(cards).fill(0).map((item) => {
            return (
                <StyledSkeletonTripCard>
                    <Skeleton height="150px" />
                    <StyledCardContent>
                        <Skeleton height="3rem" />
                        <Skeleton height="1rem" />
                        <Skeleton height="3rem" />
                    </StyledCardContent>
                </StyledSkeletonTripCard>
            );
        })
    );
}
