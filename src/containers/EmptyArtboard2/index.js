import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import Checkbox from '../../components/Checkbox';
import Icon from '../../components/Icon';
import InputField from '../../components/InputField';
import Main from '../../components/Main';
import NavigationFooter from '../../components/NavigationFooter';
import Paragraph from '../../components/Paragraph';
import Row from '../../components/Row';
import Stack from '../../components/Stack';

export default () => (
  <Main style={{ justifyContent: 'flex-start', alignItems: 'flex-end' }}>
    <NavigationFooter style={{ justifyContent: 'flex-end' }}>
      <Link to="/">
        <Icon liga="home" />
      </Link>
      <Icon liga="search" />
      <Icon liga="share-alt" />
      <Icon liga="user" />
    </NavigationFooter>
    <Row style={{ justifyContent: 'center', flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
      <Stack style={{ justifyContent: 'flex-start', alignItems: 'flex-start', flexGrow: '0', alignSelf: 'auto', minWidth: '50px', minHeight: '50px' }}>
        <Paragraph>
          Sign up
        </Paragraph>
        <Stack style={{ justifyContent: 'flex-start', alignItems: 'flex-start', flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
          <Stack style={{ justifyContent: 'flex-start', alignItems: 'flex-start', flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
            <Paragraph>
              Email 
            </Paragraph>
            <InputField placeholder="Enter your email address..." style={{ width: 'calc(100% - 20px)' }} />
          </Stack>
          <Paragraph>
            Password
          </Paragraph>
          <InputField placeholder="Enter your password..." style={{ width: 'calc(100% - 20px)' }} />
        </Stack>
        <Row style={{ justifyContent: 'flex-start', flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
          <Checkbox />
          <Paragraph>
            I accept the Terms and Conditions 
          </Paragraph>
        </Row>
        <Button style={{ width: 'calc(100% - 20px)' }}>
          Sign up
        </Button>
        <Link to="/empty-artboard-3">
          <Paragraph>
            Already registered? Sign in
          </Paragraph>
        </Link>
      </Stack>
    </Row>
  </Main>
);
