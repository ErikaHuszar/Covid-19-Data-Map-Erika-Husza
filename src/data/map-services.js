const accessToken = process.env.MAP_BOX_KEY;

export const mapServices = [
  {
    name: 'OpenStreetMap',
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  },
  {
    name: 'Mapbox',
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    url: `https://api.mapbox.com/styles/v1/erika888/ck9oh5sua03s81ile0db0z5dd.html?fresh=true&title=view&access_token=pk.eyJ1IjoiZXJpa2E4ODgiLCJhIjoiY2s5b2g1cDlmMDBqeDNpbjFmOG81ZmtmZiJ9.CyCMr-vtpQlx6hjQOmuotA`
  }
];
