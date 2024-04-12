# 배컴 사전 과제

## 트러블 슈팅

### 검색 결과와 스크롤 위치를 어떻게 해야 유지할 수 있을까?

**타 사이트 조사**

- 배민상회 - 데이터 캐싱
- 쿠팡 - 데이터 캐싱
- 네이버쇼핑 - 데이터 캐싱

**검색 결과 유지 접근법**

1. 검색 쿼리 저장
   - [징점] 쉬운 해결법
   - [단점] 많은 데이터를 요청할 경우 로딩이 문제 → 나쁜 UX
2. 검색 결과 캐싱
   - [장점] 캐싱된 데이터를 사용해 좋은 UX
   - [단점] 메모리 사용량이 많다, 구현하기 쉽지 않다.

**캐싱으로 해결해보기**

- 리액트 쿼리는 데이터를 캐싱한다. → 비슷하게 구현해 보기
- 기본적으로 fresh를 유지하는 staleTime은 0초 → 설정하지 않는 이상 데이터는 항상 stale하다.
- 리액트 쿼리가 자동으로 stale한 데이터를 refetch 하는 조건
  - New instances of the query mount
  - The window is refocused
  - The network is reconnected
  - The query is optionally configured with a refetch interval
- inactive 상태(캐싱)는 5분 간 유지되는 것이 기본 설정
- inactive 가 존재하고 refetch하는 중에는 데이터를 갱신하기 전까지 inactive를 보여준다.
- useProducts의 반환 데이터를 전역 상태에 저장

## 요구사항

### 기술 스택

- TypeScript
- React
- React-Router
- Styled-Components

### API

- https://dummyjson.com/docs/products

### 페이지

- [x] 상품 목록 페이지
  - [x] 검색 컴포넌트
    - [x] 상품 목록 페이지 최상단에 위치한다.
    - [x] 검색어를 입력할 수 있는 input이 있다.
    - [x] “검색” 버튼이 있다.
    - [x] 검색어를 입력하고 “검색”을 클릭하면 검색 결과가 반영된 목록이 표시된다.
    - [x] 검색어를 입력하고 엔터 키를 입력하면 검색 결과가 반영된 목록이 표시된다.
    - [x] [optional] placeholder
    - [ ] [optional] 자동완성
    - [ ] [optional] 최근 검색어
  - [x] 상품 목록 컴포넌트
    - [x] 검색 컴포넌트 하단에 위치한다.
    - [x] 기본적으로 10개의 상품을 출력한다.
    - [x] 한 행에 상품을 2개씩 배치한다.
    - [x] 각 상품의 thumbnail image, brand, title, price를 보여준다.
    - [x] 각 항목은 세로로 순서대로 표시하되, brand, title은 같은 행에 표시한다.
    - [x] 상품에 마우스를 올리면 brand, title 행의 색상이 파란색으로 표시된다.
    - [x] 상품을 클릭하면 해당 상품의 상세 페이지로 이동한다.
  - [x] 상품 목록 더보기 버튼 컴포넌트
    - [x] 상품 목록 컴포넌트 하단에 위치한다.
    - [x] “더보기” 텍스트가 표시된다.
    - [x] 버튼을 클릭하면 상품 목록 컴포넌트에서 10개의 상품을 추가로 보여준다.
    - [x] 더 표시할 상품이 있을 때에만 버튼이 표시된다.
- [ ] 상품 상세 페이지
  - [x] 상품 상세 페이지 최상단에 위치한다.
  - [x] “목록으로 돌아가기” 텍스트가 표시된다.
  - [x] 링크를 클릭하면 상품 목록 페이지로 이동한다.
  - [ ] 상품 목록 페이지에서 검색 기능 사용 후 상품 상세 페이지로 이동한 경우, 상품 목록 페이지로 돌아가도 검색어와 검색 결과 그리고 스크롤 위치가 유지된다.
    - [ ] 데이터 요청 결과 캐싱 기능 구현
    - [ ] 스크롤 위치 저장 및 불러오기 기능 구현
  - [x] 상품 상세 정보 컴포넌트
    - [x] 상품 목록 페이지 이동 버튼 컴포넌트 하단에 위치한다.
    - [x] 상품 목록 페이지에서 선택한 상품의 thumbnail image, brand, title, price, description과 images 배열의 각 image가 모두 표시된다.

### 컴포넌트

- [x] 공통
  - [x] 버튼
  - [x] 인풋
  - [x] 텍스트
  - [x] 커스텀링크
- [x] 검색
- [x] 상품
- [x] 상품 상세 정보
