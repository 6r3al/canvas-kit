import * as React from 'react';
import * as Renderer from 'react-test-renderer';
import IconButton from '../lib/IconButton';
import IconButtonToggleGroup from '../lib/IconButtonToggleGroup';
import {
  listViewIcon,
  worksheetsIcon,
  deviceTabletIcon,
  percentageIcon,
} from '@workday/canvas-system-icons-web';

describe('Icon Toggle Button Snapshot', () => {
  test('two buttons render as expected (w/ first selected)', () => {
    const component = Renderer.create(
      <IconButtonToggleGroup>
        <IconButton icon={listViewIcon} value="list-view" aria-label="List View" />
        <IconButton icon={worksheetsIcon} value="table-view" aria-label="Table View" />
      </IconButtonToggleGroup>
    );
    expect(component).toMatchSnapshot();
  });

  test('Toggle buttons with more than two items (using index for value)', () => {
    const component = Renderer.create(
      <IconButtonToggleGroup value={1}>
        <IconButton icon={listViewIcon} value="list-view" aria-label="List View" />
        <IconButton icon={worksheetsIcon} value="table-view" aria-label="Table View" />
        <IconButton icon={deviceTabletIcon} value="device-view" aria-label="Device View" />
        <IconButton icon={percentageIcon} value="percent-view" aria-label="Percent View" />
      </IconButtonToggleGroup>
    );
    expect(component).toMatchSnapshot();
  });

  test('Toggle buttons with RTL true, with disabled item (using value for value)', () => {
    const component = Renderer.create(
      <IconButtonToggleGroup value="device-view" isRTL={true}>
        <IconButton icon={listViewIcon} value="list-view" aria-label="List View" />
        <IconButton
          icon={worksheetsIcon}
          value="table-view"
          aria-label="Table View"
          disabled={true}
        />
        <IconButton icon={deviceTabletIcon} value="device-view" aria-label="Device View" />
        <IconButton icon={percentageIcon} value="percent-view" aria-label="Percent View" />
      </IconButtonToggleGroup>
    );
    expect(component).toMatchSnapshot();
  });
});
