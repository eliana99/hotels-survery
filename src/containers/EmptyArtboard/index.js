import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import Button1 from '../../components/Button1';
import ButtonIcon from '../../components/ButtonIcon';
import Card from '../../components/Card';
import Header from '../../components/Header';
import Icon from '../../components/Icon';
import Image from '../../components/Image';
import InputField from '../../components/InputField';
import Main from '../../components/Main';
import NavigationFooter from '../../components/NavigationFooter';
import NavigationHeader from '../../components/NavigationHeader';
import Paragraph from '../../components/Paragraph';
import Row from '../../components/Row';
import Stack from '../../components/Stack';

export default () => (
  <Main style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
    <NavigationHeader style={{ justifyContent: 'flex-end' }}>
      <NavigationFooter style={{ justifyContent: 'flex-end' }}>
        <Link to="/empty-artboard-2">
          <Header>
            Sign in
          </Header>
        </Link>
        <Link to="/empty-artboard-2">
          <Header>
            Sing up
          </Header>
        </Link>
        <Icon liga="home" />
        <Icon liga="user" />
      </NavigationFooter>
      <Button>
        Search
      </Button>
      <InputField placeholder="Input Field" style={{ width: '120px' }} />
      <ButtonIcon liga="search" />
    </NavigationHeader>
    <Stack style={{ justifyContent: 'flex-start', flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
      <Row style={{ flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
        <NavigationHeader>
          <Card style={{ justifyContent: 'center', alignItems: 'flex-start', minWidth: '50px', minHeight: '130px', width: '800px', flexGrow: '0' }}>
            <Paragraph>
              2 hours ago
            </Paragraph>
            <Paragraph>
              Article title
            </Paragraph>
            <Paragraph>
              Donec dui tortor, ullamcorper id metus ac, tincidunt eleifend lorem. Donec non ex commodo, gravida nisi.
            </Paragraph>
          </Card>
          <Image style={{ width: '800px', height: '300px', backgroundImage: 'url(/images/40ed9bcfe75750.jpg)' }} />
        </NavigationHeader>
      </Row>
      <NavigationFooter style={{ justifyContent: 'flex-end' }}>
        <Link to="/empty-artboard-1">
          <Button1>
            overview
          </Button1>
        </Link>
        <Button>
          Book
        </Button>
      </NavigationFooter>
      <Row style={{ flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
        <Card style={{ justifyContent: 'center', alignItems: 'flex-start', minWidth: '50px', minHeight: '130px', width: '800px', flexGrow: '0' }}>
          <Paragraph>
            2 hours ago
          </Paragraph>
          <Paragraph>
            Article title
          </Paragraph>
          <Paragraph>
            Donec dui tortor, ullamcorper id metus ac, tincidunt eleifend lorem. Donec non ex commodo, gravida nisi.
          </Paragraph>
        </Card>
        <Image style={{ width: '800px', height: '300px', backgroundImage: 'url(/images/booking-com-hotels-com-lastminute-quel-est-le-meilleur-site-de-reservation-1093854.jpg)' }} />
      </Row>
      <NavigationFooter style={{ justifyContent: 'flex-end' }}>
        <Button1>
          Button
        </Button1>
        <Button>
          Book
        </Button>
      </NavigationFooter>
      <Row style={{ flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
        <Card style={{ justifyContent: 'center', alignItems: 'flex-start', minWidth: '50px', minHeight: '130px', width: '800px', flexGrow: '0' }}>
          <Paragraph>
            2 hours ago
          </Paragraph>
          <Paragraph>
            Article title
          </Paragraph>
          <Paragraph>
            Donec dui tortor, ullamcorper id metus ac, tincidunt eleifend lorem. Donec non ex commodo, gravida nisi.
          </Paragraph>
        </Card>
        <Image style={{ width: '800px', height: '300px', backgroundImage: 'url(/images/207762020.jpg)' }} />
      </Row>
      <NavigationFooter style={{ justifyContent: 'flex-end' }}>
        <Button1>
          overview
        </Button1>
        <Button>
          Book
        </Button>
      </NavigationFooter>
      <Row style={{ flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
        <Card style={{ justifyContent: 'center', alignItems: 'flex-start', minWidth: '50px', minHeight: '130px', width: '800px', flexGrow: '0' }}>
          <Paragraph>
            2 hours ago
          </Paragraph>
          <Paragraph>
            Article title
          </Paragraph>
          <Paragraph>
            Donec dui tortor, ullamcorper id metus ac, tincidunt eleifend lorem. Donec non ex commodo, gravida nisi.
          </Paragraph>
        </Card>
        <Image style={{ width: '800px', height: '300px', backgroundImage: 'url(/images/images.jpg)' }} />
      </Row>
    </Stack>
    <NavigationFooter style={{ justifyContent: 'flex-end' }}>
      <Button1>
        overview
      </Button1>
      <Button>
        Book
      </Button>
    </NavigationFooter>
    <Card style={{ justifyContent: 'flex-start', minWidth: '50px', minHeight: '100px', width: '200px', flexGrow: '0' }} />
    <Card style={{ justifyContent: 'flex-start', minWidth: '50px', minHeight: '100px', width: '200px', flexGrow: '0' }} />
    <Card style={{ justifyContent: 'flex-start', minWidth: '50px', minHeight: '100px', width: '200px', flexGrow: '0', alignSelf: 'auto' }} />
  </Main>
);
