import { Box, BoxProps } from '@chakra-ui/react';
import useOnHover from 'hooks/useOnHover';
import _ from 'lodash';
import React, { createRef, useState } from 'react';
import { chakraColor } from 'utils/theme';

const Card: FunctionComponent<Props> = ({ cardProps, contentProps, glowableText, children }) => {
  const cardRef = createRef<HTMLDivElement>();
  const [isHovering, setIsHovering] = useState(false);

  useOnHover(
    cardRef,
    () => setIsHovering(true),
    () => setIsHovering(false)
  );

  return (
    <Box>
      <Box
        width={'300px'}
        minHeight={'200px'}
        borderRadius={'xl'}
        borderWidth={'1px'}
        borderColor={'gray.600'}
        backgroundColor={'gray.700'}
        justifyContent={'center'}
        alignItems={'center'}
        display={'flex'}
        cursor={'pointer'}
        transition={'all 0.5s ease-in-out'}
        _hover={{
          borderWidth: '1.5px',
          borderColor: 'gray.600',
          boxShadow: `0px 0px 20px ${chakraColor('gray', '600')}`,
          ...(cardProps?._hover ?? {}),
        }}
        {..._.omit(cardProps, ['_hover'])}
        ref={cardRef}
      >
        <Box
          width={'100%'}
          height={'100%'}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          color={'white'}
          padding={1}
          textShadow={`0px 0px ${isHovering ? '5px' : '0px'} ${chakraColor('gray', '500')}`}
          transition={'all 0.5s ease-in-out'}
          position={'relative'}
          {...contentProps}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

type Props = {
  cardProps?: BoxProps;
  contentProps?: BoxProps;
  glowableText?: boolean;
};

export default Card;
