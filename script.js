// 地図の初期位置（四国・瀬戸内中心）
const map = L.map("map").setView([34.0, 133.3], 8);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors"
}).addTo(map);

// 四国・瀬戸内の美術館データ
const museums = [
  // 徳島県
  { name: "徳島県立近代美術館", lat: 34.0642, lon: 134.5544, website: "https://www.tokushima-kenbi.jp/" },
  { name: "相生森林美術館", lat: 33.9688, lon: 134.0160, website: "" },
  { name: "大塚国際美術館", lat: 34.1586, lon: 134.6023, website: "https://o-museum.or.jp/" },
  // 香川県
  { name: "香川県立東山魁夷せとうち美術館", lat: 34.2647, lon: 133.8017, website: "https://www.pref.kagawa.lg.jp/higashiyama/" },
  { name: "高松市美術館", lat: 34.3410, lon: 134.0434, website: "https://www.city.takamatsu.kagawa.jp/museum/takamatsu" },
  { name: "丸亀市猪熊弦一郎現代美術館 (MIMOCA)", lat: 34.3001, lon: 133.8095, website: "" },
  { name: "直島コンテンポラリーアートミュージアム", lat: 34.4673, lon: 133.9957, website: "" },
  // 愛媛県
  { name: "愛媛県美術館", lat: 33.8417, lon: 132.7650, website: "https://www.ehime-art.jp/" },
  { name: "玉川近代美術館", lat: 33.9812, lon: 132.9499, website: "" },
  { name: "久万美術館", lat: 33.5583, lon: 133.0566, website: "" },
  { name: "大三島美術館", lat: 34.0319, lon: 133.0714, website: "" },
  { name: "今治市立河野美術館", lat: 34.0591, lon: 132.9952, website: "" },
  { name: "セキ美術館", lat: 33.8440, lon: 132.7695, website: "" },
  // 高知県
  { name: "高知県立美術館", lat: 33.5657, lon: 133.5452, website: "" },
  { name: "安芸市立書道美術館", lat: 33.7280, lon: 134.0170, website: "" },
  { name: "中土佐町立美術館", lat: 33.3710, lon: 133.4478, website: "" },
  // 瀬戸内
  { name: "直島地中美術館", lat: 34.4680, lon: 133.9857, website: "https://www.chichu.jp/" },
  { name: "豊島美術館", lat: 34.3145, lon: 134.0970, website: "https://toshima-museum.jp/" },
  { name: "犬島精錬所美術館", lat: 34.4202, lon: 134.0482, website: "https://www.inujima-art.com/" }
];

// マーカー表示
museums.forEach(spot => {
  const marker = L.circleMarker([spot.lat, spot.lon], {
    radius: 7,
    color: "red",
    fillColor: "red",
    fillOpacity: 0.8
  }).addTo(map);

  let popup = `<b>${spot.name}</b><br/>`;
  if (spot.website) {
    popup += `<a href="${spot.website}" target="_blank">公式HPを見る</a>`;
  }
  marker.bindPopup(popup);
});
