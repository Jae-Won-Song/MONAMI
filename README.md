# MONAMI

### 모나미 클론코딩

#### Origin site
- http://www.monami.com/index.php
#### Demo site
- https://monami-demo.netlify.app

📆 기간
2024.02.19 ~ 2021.02.25



🔎 기능 설명
1. 메인페이지


Header에 드롭다운 요소를 추가해 상세페이지로 넘어갈 수 있는 탭을 구현했습니다.

Header 상단 고정 방법으로 position:fixed를 선택했습니다. 

2. NEW ARRIVALS


CSS의 hover기능을 사용해 탭에 마우스를 갖다대면 다홍색 박스로 상품의 이름을 볼 수 있도록 구현했습니다.
3. BEST PRODUCT


모나미의 인기메뉴들을 swiper라이브러리와 내장기능인 loop, autoplay으로 5초에 한번 다음 상품으로 넘어가는 화면을 구현했습니다.


1. 인기매물 페이지


실제 당근마켓 사이트에서는 전국 지역을 드롭다운으로 선택할 수 있습니다. 팀 회의를 거친 끝에 전국 지역을 filtering하는 것은 시간 관계 상의 어려움이 있어, 서울 내 지역명 클릭 시 해당 지역 매물 리스트를 filtering하여 불러오게 했습니다.
지역명 클릭 시 useState를 사용해 해당 텍스트 값을 request로 요청합니다.
reponse로 받은 매물 리스트를 map 내장함수를 사용하여 뿌려주었습니다.
백에서 데이터를 요청시마다 랜덤으로 값을 보내주고, reload 시 매물 리스트가 실제로 업데이트되는 듯한 효과를 넣었습니다.


## 아쉬운 점 
- 프로젝트 진행 중 시간분배를 잘못하여 페이지를 완벽히 구현하지 못하였습니다. 타 사이트에 비해 
상대적으로 레이아웃 구성이 단순하게 보여 선택한 페이지였음에도 불구하고 하나하나 학습하며 진행하다보니 
시간이 많이 부족해 아쉬움이 많이 남는 프로젝트였습니다.

- 코드 효율성의 극대화를 시키지 못한 아쉬움이 남았습니다. 좀 더 공부하여 잘 짜여진, 가독성 좋은 코드를 만드는 것이 목표입니다.



## 느낀 점
FE학습을 시작하며 처음 진행한 클론코딩이였습니다.

단순히 한 페이지를 만드는데 많은 시간과 로직이 들어간다는걸 다시 한 번 깨닫게 되었고

수십번의 학습보다 한번의 실습이 더 중요하단 사실을 깨닫게 되었습니다.

swiper.js는 처음 써 봤는데 모던FE개발에서 필요한 다른 라이브러리도 학습하여 더 나은 페이지를 만드는 것이 목표입니다.