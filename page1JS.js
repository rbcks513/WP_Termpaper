//icon 클릭시 실시간 정보 수정 - 아이콘 아래 최신화 시간 표시
//category 클릭시 여러 종목들 선택할 수 있게함
//실시간으로 뉴스 불러오기
//각 포털사이트 종합하여 실시간 최신화
//뉴스 클릭시 작은 창 나오면서 원하는 정보 뛰어주기
//각각 약자로 표시된 부분은 js돔으로 구현하기 - 정보 받아오는거 js로 처리해서 출력
//showBox구현시
//분석과 선호도 조사 어떤식으로 진행할 수 있을지 고려하기
//뉴스기사 사이즈는 지금 정도로 6개 정도 
//각 사이트별 중복 뉴스 판별기 구현 --
// -- 한 뉴스기사가 다른 포털 사이트에서 보여질 때에도 같은 제목으로 보여짐을 이용
// 순위 산출 시 각 포털 사이트 상위 10개 기사를 이용
// 1등 10점 2등 9점 ... 식으로 값을 매긴후
// 3가지 사이트의 값을 합산하여 사용한다. - 동률시 기본출력순으로
//최신화
function update() {}
//카테고리 변경창
function category() {}
//뉴스 창들 정보 받아오기
function callRTN() {}
function callRTBN() {}
function callTBN() {}
//showBox호출
function showBox(URL) {}
function placingNews() {} //기사 제목을 키값으로 하는 배열(3가지)에서 각각 불러와 합산후 새로운 배열 만들고 값의 크기순 정렬
// php수준에서 처리하는 것 고려하기 
//뉴스들 객체로 만들기
function makeRTN() {}
function makeRTBN() {}
function makeTBN() {}
//뉴스 창 새로 뛰우기 
function goToNews() {}