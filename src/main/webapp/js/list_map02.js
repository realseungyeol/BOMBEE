
$(".btn-group-toggle").twbsToggleButtons();

$(document).ready(function() {
  $('.header').load('../header/header.html')
})

var container = document.getElementById('map');

var lat, lon;
lat = 33.450701;
lon = 126.570667;
var options = {
  center: new daum.maps.LatLng(lat, lon),
  level: 3
};
var map = new daum.maps.Map(container, options);
var geocoder = new daum.maps.services.Geocoder();
var search



// HTML5의 geolocation으로 사용할 수 있는지 확인합니다
if (navigator.geolocation) {
    // GeoLocation을 이용해서 접속 위치를 얻어옵니다
    navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude, // 위도
            lon = position.coords.longitude; // 경도
        var locPosition = new daum.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
            message = '<div style="padding:5px;">여기에 계신가요?!</div>'; // 인포윈도우에 표시될 내용입니다
        // 마커와 인포윈도우를 표시합니다
        displayMarker(locPosition, message);
      });
} else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
    var locPosition = new daum.maps.LatLng(lat, lon),
        message = 'geolocation을 사용할수 없어요..'
    displayMarker(locPosition, message);
}
// 지도에 마커와 인포윈도우를 표시하는 함수입니다

function displayMarker(locPosition, message) {

  // 마커를 생성합니다
  var marker = new daum.maps.Marker({
      map: map,
      position: locPosition
  });

  var iwContent = message, // 인포윈도우에 표시할 내용
      iwRemoveable = true;

  // 인포윈도우를 생성합니다
  var infowindow = new daum.maps.InfoWindow({
      content : iwContent,
      removable : iwRemoveable
  });

  // 인포윈도우를 마커위에 표시합니다
  infowindow.open(map, marker);

  // 지도 중심좌표를 접속위치로 변경합니다
  map.setCenter(locPosition);
}



// 주소로 좌표를 검색합니다
function seachMap() {
geocoder.addr2coord(search, function(status, result) {

    // 정상적으로 검색이 완료됐으면
     if (status === daum.maps.services.Status.OK) {

        var coords = new daum.maps.LatLng(result.addr[0].lat, result.addr[0].lng);

        // 결과값으로 받은 위치를 마커로 표시합니다
        var marker = new daum.maps.Marker({
            map: map,
            position: coords
        });

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
    }
});
}
$('.sch_smit').click(()=> {
search = $('.input_text').val();
seachMap()
})

$(".input_text").keydown((key)=> {
  if(key.keyCode == 13){//키가 13이면 실행 (엔터는 13)
    search = $('.input_text').val();
    seachMap()
  }
})