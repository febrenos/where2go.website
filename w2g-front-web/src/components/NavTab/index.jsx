import React from 'react';
import * as Styled from './style';

export function NavTab({ tabs, activeTab, onTabClick }) {
    const handleTabClick = (tabNumber) => {
        onTabClick(tabNumber);
    };

    return (
        <Styled.All>
            <Styled.NavTab>
                {tabs.map((tab, index) => (
                    <React.Fragment key={index}>
                        <Styled.Tab
                            onClick={() => handleTabClick(index + 1)}
                            isActive={index + 1 === activeTab}
                        >
                            {tab}
                        </Styled.Tab>
                        {index < tabs.length - 1 && <Styled.Separator />}
                    </React.Fragment>
                ))}
            </Styled.NavTab>
        </Styled.All>
    );
}
