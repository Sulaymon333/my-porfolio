import React from 'react';
import {
  Grommet,
  Box,
  Header,
  Text,
  Card,
  CardHeader,
  Button,
  CardBody,
  Avatar,
  Heading,
  Paragraph,
  CardFooter,
  Footer,
} from 'grommet';
import { Home, Previous } from 'grommet-icons';
import { hpe as theme } from 'grommet-theme-hpe';

export const App = () => {
  return (
    <Grommet full theme={theme}>
      <Box align='center' justify='between' fill='vertical'>
        <Header
          align='center'
          direction='row'
          flex={false}
          justify='between'
          gap='medium'
          fill='horizontal'
          pad='small'
        >
          <Box align='center' justify='center' direction='row' gap='small'>
            <Home size='xlarge' color='brand' />
            <Box align='center' justify='center' direction='row' gap='xxsmall'>
              <Text weight='bold' color='text-strong'>
                Student
              </Text>
              <Text>Portfolio</Text>
            </Box>
          </Box>
          <Box
            align='center'
            justify='center'
            height='xxsmall'
            width='xxsmall'
            round='full'
            background={{ color: 'background-contrast' }}
          >
            <Text>ST</Text>
          </Box>
        </Header>
        <Card pad='medium'>
          <CardHeader
            align='center'
            direction='row'
            flex={false}
            justify='between'
            gap='medium'
          >
            <Button icon={<Previous />} primary />
          </CardHeader>
          <CardBody pad='small' justify='center' align='center'>
            <Avatar
              align='center'
              flex={false}
              justify='center'
              overflow='hidden'
              round='full'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS4Qk3aU8xKsdhRJab2mycsbnaN307baTz3lRJbaSMiw&s
'
              size='large'
            />
            <Heading margin={{ bottom: 'small' }}>Sulaymon Tajudeen</Heading>
            <Text>Experience Design Engineer</Text>
            <Paragraph textAlign='center'>
              I am an Experience Design Engineer specializing in User Analytics
              Behavior and Grommet/React at Hewlett Packard Enterprise.
            </Paragraph>
          </CardBody>
          <CardFooter
            align='center'
            direction='row'
            flex={false}
            justify='center'
            gap='medium'
            pad='small'
          >
            <Button label='Porfolio' primary />
            <Button label='Contact Me' primary={false} />
          </CardFooter>
        </Card>
        <Footer
          align='center'
          direction='row'
          flex={false}
          justify='between'
          gap='medium'
          fill='horizontal'
          pad='medium'
        >
          <Text>© 2024 Hewlett Packard Enterprise Development LP</Text>
          <Box align='center' justify='center' direction='row' gap='small'>
            <Button label='Terms' plain />
            <Button label='Security' plain />
            <Button label='Privacy' plain />
            <Button label='Feedback' plain />
          </Box>
        </Footer>
      </Box>
    </Grommet>
  );
};

export default App;
