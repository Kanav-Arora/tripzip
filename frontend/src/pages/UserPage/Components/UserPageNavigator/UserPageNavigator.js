import React from 'react';
import { Section, Wrapper } from './UserPageNavigatorStyles';

export default function UserPageNavigator({ sections, selected, onSelect }) {
    const selectionHandler = (section) => {
        onSelect(section);
    };
    return (
        <Wrapper>
            {sections.map((section, index) => {
                return (
                    <Section
                        onClick={() => selectionHandler(section)}
                        isselected={section === selected}
                    >
                        {section}
                    </Section>
                );
            })}
        </Wrapper>
    );
}
