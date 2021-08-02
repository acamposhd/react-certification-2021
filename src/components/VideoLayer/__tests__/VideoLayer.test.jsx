import React from 'react';
import { render } from '@testing-library/react';
import VideoLayer from '../index';
import Video from '../VideoComponent/Video.component';

const mockData = require('../../../utils/mocks/youtube.json');

it('Render Video title', async () => {
  const component = render(
    <VideoLayer>
      {mockData.items.map((item) => (
        <Video item={item} key={item.etag} />
      ))}
    </VideoLayer>
  );
  component.getByText('We Are Wizeline');
  expect(component.getByText('We Are Wizeline')).toHaveTextContent(
    mockData.items[4].snippet.title
  );
});

it('Render Video Descriptions', async () => {
  const component = render(
    <VideoLayer>
      {mockData.items.map((item) => (
        <Video item={item} key={item.etag} />
      ))}
    </VideoLayer>
  );
  component.getByText(
    'Engineering a better tomorrow. Wizeline is a global software development company that helps its clients solve their biggest challenges with design and ...'
  );
  expect(
    component.getByText(
      'Engineering a better tomorrow. Wizeline is a global software development company that helps its clients solve their biggest challenges with design and ...'
    )
  ).toHaveTextContent(mockData.items[4].snippet.description);
});

test('renders VideoLayer', () => {
  // eslint-disable-next-line react/jsx-filename-extension
  render(<VideoLayer />);
});
