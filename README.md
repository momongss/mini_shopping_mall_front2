# mini_shopping_mall_front2

드림코딩 엘리 강의 듣고 복습한 것.

<br>

## 1. 컴포넌트 정의

    2개 주요 컴포넌트 존재
    - click section
    - rendering section

## 2. 독립 기능 정의

    click section, rendering section 모두
    다른 컴포넌트와 관계없는 기능은 자기자신을 랜더링하는 것 뿐이다.

## 3. 이벤트 핸들러 정의

    click section
    - click
    rendering section
    - none

## 4. 이벤트 핸들러 중 다른 컴포넌트를 조작해야하는 이벤트 핸들러

    click section
    - click 시, rendering section 에게 데이터를 넘겨줘야한다.
    rendering section
    - none

## 5. util 기능

    비동기 통신 fetch api

@ fetch api 를 사용한 코드 부분을 보니 로컬에서 파일을 읽어오는데 쓰였다. 나는 꼭 localhost라도 서버를 열어서 데이터를 전송해줘야하는 줄 알았었다.
