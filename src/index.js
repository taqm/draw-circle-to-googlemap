/* global google */

import { loadMapContents } from './googlemap';

import 'destyle.css';
import './style.css';

import ContextMenu from './ContextMenu';

/**
 * @param map {google.maps.Map}
 * @param latlng {google.maps.LatLng}
 */
const makePin = (map, latlng) => {
  const marker = new google.maps.Marker({
    map,
    position: latlng,
  });

  const circle = new google.maps.Circle({
    map,
    center: latlng,
    radius: 2000,
  });

  marker.addListener('dblclick', () => {
    marker.setMap(null);
    circle.setMap(null);
  });
};

/**
 * メイン処理
 * @param map {google.maps.Map}
 */
const main = (map) => {
  const contextMenu = new ContextMenu(
    document.getElementById('context-menu'),
    [
      { label: 'ピンを立てる', onClick: (ltln) => makePin(map, ltln) },
    ],
  );

  map.addListener('rightclick', ({ latLng, pixel }) => {
    contextMenu.show(latLng, pixel);
  });
  map.addListener('click', contextMenu.hide);
  map.addListener('drag', contextMenu.hide);
};

loadMapContents().then(main);
