import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import Icon from '../../components/Icon';
import InputField from '../../components/InputField';
import Main from '../../components/Main';
import NavigationFooter from '../../components/NavigationFooter';
import Paragraph from '../../components/Paragraph';
import Row from '../../components/Row';
import Stack from '../../components/Stack';

export default () => (
  <Main style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
    <NavigationFooter style={{ justifyContent: 'flex-end' }}>
      <Link to="/">
        <Icon liga="home" />
      </Link>
      <Icon liga="search" />
      <Icon liga="share-alt" />
      <Icon liga="user" />
    </NavigationFooter>
    <Stack style={{ justifyContent: 'flex-start', alignItems: 'flex-start', flexGrow: '0', alignSelf: 'auto', minWidth: '50px', minHeight: '50px' }}>
      <Paragraph>
        Log in
      </Paragraph>
      <Stack style={{ justifyContent: 'flex-start', alignItems: 'flex-start', flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
        <Paragraph>
          Email
        </Paragraph>
        <InputField placeholder="Enter your email address..." style={{ width: 'calc(100% - 20px)' }} />
      </Stack>
      <Stack style={{ justifyContent: 'flex-start', alignItems: 'flex-start', flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
        <Paragraph>
          Password
        </Paragraph>
        <InputField placeholder="Enter your password.." style={{ width: 'calc(100% - 20px)' }} />
      </Stack>
      <Row style={{ flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
        <Paragraph>
          Forgot your password?
        </Paragraph>
      </Row>
      <Button style={{ width: 'calc(100% - 20px)' }}>
        Log in
      </Button>
    </Stack>
  </Main>
);
