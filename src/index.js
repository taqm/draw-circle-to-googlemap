import { loadMapContents } from './googlemap';

import 'destyle.css';
import './style.css';

import ContextMenu from './ContextMenu';

const contextMenu = new ContextMenu(
  document.getElementById('context-menu'),
  [
    { label: 'テスト1', onClick: () => alert('test') },
    { label: 'テスト', onClick: () => alert('test') },
    { label: 'テスト1', onClick: () => alert('test') },
  ],
);

const main = (map) => {
  map.addListener('rightclick', ({ latLng, pixel }) => {
    contextMenu.show(latLng, pixel);
  });
  map.addListener('click', contextMenu.hide);
  map.addListener('drag', contextMenu.hide);
};

loadMapContents().then(main);
