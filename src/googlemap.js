/* global google */

const API_KEY = process.env.GOOGLE_MAP_API_KEY;

// GoogleMapのスクリプト読み込み
const appendScript = (fnName) => {
  const scriptElm = document.createElement('script');
  scriptElm.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=${fnName}`;
  scriptElm.async = true;
  scriptElm.type = 'text/javascript';
  document.body.appendChild(scriptElm);
};

// eslint-disable-next-line import/prefer-default-export
export const loadMapContents = () => {
  const fnName = 'initMap';
  return new Promise((resolve) => {
    window[fnName] = () => {
      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 35.6895014, lng: 139.6917337 }, // 初期値は都庁
        zoom: 11,
      });
      resolve(map);
    };

    appendScript(fnName);
  });
};
