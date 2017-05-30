import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react';
import Button from './Button';
import Welcome from './Welcome';

import Score from '../src/Score';
import TimerTest from './TimerTest';
import Highscore from '../src/Highscore';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('Score', module)
  .add('1 score', () => <Score score={1} />)
  .add('100 scores', () => <Score score={100} />)
  .add('1000 scores', () => <Score score={1000} />);

storiesOf('Timer', module)
  .add('10 seconds', () => <TimerTest maxTime={10000} />)
  .add('60 seconds', () => <TimerTest maxTime={60000} />);

storiesOf('Highscore', module)
  .add('filled', () => <Highscore highscore={[
    {name: 'A', score: 100},
    {name: 'B', score: 40},
    {name: 'C', score: 20},
    {name: 'D', score: 10},
  ]} />)
  .add('empty', () => <Highscore highscore={[]} />);
