import React, { useEffect, useState } from 'react';
import * as Styled from './style';
import { Text } from '../index';

export function WordPreferences({list}) {
  const initialIsActiveState = list.reduce((acc, word) => {
    acc[word.name] = word.isActive;
    return acc;
  }, {});

  const [isActive, setIsActive] = useState(initialIsActiveState);
  const [isShowMore, setIsShowMore] = useState(false);

  const handleIsShowMore = () => {
    setIsShowMore(!isShowMore);
  };

  const handleClick = (wordName) => {
    setIsActive((prevIsActive) => {
      const updatedActive = { ...prevIsActive, [wordName]: !prevIsActive[wordName] };
      return updatedActive;
    });
  };

  // Determine the items to display based on isShowMore
  const displayList = isShowMore ? list : list.slice(0, 8);

  useEffect(() => {
    setIsActive((prevIsActive) => {
      const updatedActive = { ...prevIsActive };
      list.forEach((word) => {
        updatedActive[word.name] = word.isActive;
      });
      return updatedActive;
    });
  }, [isShowMore, list]);

  return (
    <Styled.Content>
      <Text text={'Preferências'} size={'lg'} bold/>
      <Styled.ContentWords>
        {displayList.map((item, index) => (
          <Styled.Button
            key={index}
            onClick={() => handleClick(item.name)}
            isActive={isActive[item.name]}
          >
            {item.name}
          </Styled.Button>
        ))}
        {list.length > 8 && (
          <Styled.ButtonIsShowMore onClick={handleIsShowMore}>
            {isShowMore ? 'Mostrar menos' : 'Mostrar mais'}
          </Styled.ButtonIsShowMore>
        )}
      </Styled.ContentWords>
    </Styled.Content>
  );
}
