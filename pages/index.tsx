import { Box, Flex, Link, Stack, Text } from '@chakra-ui/react';
import { Card } from 'components/general';
import Underline from 'components/styles/Underline';
import useOnHover from 'hooks/useOnHover';
import NextLink from 'next/link';
import { createRef, useState } from 'react';

const Home: FunctionComponent = ({}) => {
  const [isHovering, setIsHovering] = useState(false);
  const trademarkRef = createRef<HTMLAnchorElement>();

  const onHoveringTrademark = () => setIsHovering(true);
  const onLeavingTrademark = () => setIsHovering(false);

  useOnHover(trademarkRef, onHoveringTrademark, onLeavingTrademark);

  return (
    <Flex width={'100vw'} height={'100vh'} alignItems={'center'} flexDirection={'column'}>
      <Box width={'100%'} height={'40vh'} />

      <Flex alignItems={'center'} justifyContent={'center'} padding={1} fontSize={'26'}>
        <Text>Need AR?&nbsp;</Text>
        <Box position={'relative'}>
          <NextLink href={'/about'} passHref>
            <Link
              transition={'all 0.2s ease-in-out'}
              fontWeight={700}
              textDecoration={'none'}
              _hover={{
                color: 'red.500',
              }}
              ref={trademarkRef}
            >
              Cloud AR
            </Link>
          </NextLink>
          <Underline min={0} max={105} increment={2} decrement={4} isHovering={isHovering} />
        </Box>
        <Text>&nbsp;is here for you!</Text>
      </Flex>

      <Box width={'100%'} height={'20px'} />

      <Card>
        <Stack padding={3}>
          <Text textAlign={'center'} fontSize={'20px'} fontWeight={'bold'}>
            Woops! Not found!
          </Text>
          <Text textAlign={'center'}>Looks like there is no AR at the moment in our systems.</Text>
          <Box textAlign={'center'}>
            <Text as={'span'}>Why dont try to add&nbsp;</Text>
            <NextLink href={'/create'} passHref>
              <Link
                transition={'all 0.2s ease-in-out'}
                fontWeight={700}
                textDecoration={'none'}
                _hover={{
                  color: 'red.500',
                }}
              >
                your own Cloud AR
              </Link>
            </NextLink>
            <Text as={'span'}>&nbsp;in our systems?</Text>
          </Box>
        </Stack>
      </Card>
    </Flex>
  );
};

export default Home;
