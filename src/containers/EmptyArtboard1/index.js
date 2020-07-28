import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import Card from '../../components/Card';
import Icon from '../../components/Icon';
import Image from '../../components/Image';
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
      <Icon liga="plus" />
      <Icon liga="heart" />
      <Icon liga="user" />
    </NavigationFooter>
    <Card style={{ justifyContent: 'flex-start', alignItems: 'flex-start', minWidth: '50px', minHeight: '1000px', width: 'calc(100% - 20px)', flexGrow: '0' }}>
      <Row style={{ justifyContent: 'flex-start', flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
        <Image style={{ width: '50px', height: '50px', backgroundImage: 'url(/images/placeholder-01.jpg)' }} />
        <Stack style={{ justifyContent: 'center', alignItems: 'flex-start', alignSelf: 'auto', minWidth: '50px', minHeight: '50px' }}>
          <Paragraph>
            Lorem ipsum
          </Paragraph>
          <Paragraph>
            Lorem ipsum
          </Paragraph>
        </Stack>
      </Row>
      <Paragraph>
        Donec dui tortor, ullamcorper id metus ac, tincidunt eleifend lorem. Donec non ex commodo, gravida nisi vel.
      </Paragraph>
      <Image style={{ width: 'calc(100% - 20px)', height: '500px', backgroundImage: 'url(/images/40ed9bcfe75750.jpg)' }} />
      <Button>
        Book now
      </Button>
    </Card>
  </Main>
);
