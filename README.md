# js-developer

이 프로젝트는 디벨롭 사이트임
<br>

**수정날짜:**
2024-02-25

# 개발환경 및 세팅
[개발환경](https://velog.io/@jaesang98/series/JS-Developer)
<br>
[백엔드 깃허브보기](https://github.com/Jaesang98/JS-Developer-Backend-)

# Directory

```
📂 styles
 ┣ 📂 abstracts      # SCSS 추상화 파일 (재사용 가능)
 ┃ ┣ 📄 _functions.scss
 ┃ ┣ 📄 _mixins.scss
 ┃ ┗ 📄 _variables.scss
 ┣ 📂 base           # 기본 스타일 (초기화 및 타이포그래피)
 ┃ ┣ 📄 _reset.scss
 ┃ ┣ 📄 _typography.scss
 ┃ ┗ 📄 _global.scss
 ┣ 📂 components     # 개별 컴포넌트 스타일
 ┃ ┣ 📄 _button.scss
 ┃ ┣ 📄 _card.scss
 ┃ ┗ 📄 _modal.scss
 ┣ 📂 layouts        # 페이지 레이아웃 관련 스타일
 ┃ ┣ 📄 _header.scss
 ┃ ┣ 📄 _footer.scss
 ┃ ┗ 📄 _grid.scss
 ┣ 📂 pages          # 특정 페이지에 대한 스타일
 ┃ ┣ 📄 _home.scss
 ┃ ┗ 📄 _dashboard.scss
 ┣ 📄 main.scss      # 모든 SCSS 파일을 불러오는 진입점

```

# Create

    1) npm create vite@latest

    2) Project Name 입력
        - base-react

    3) Package Name 입력
        - base-react

    4) Framework 선택
        - react

    5) Variant 선택
        - TypeScript - SWC

# Start & Build

    - npm run dev
    - npm run build

# Install npm

    Axios (서버 통신)
        - npm install axios

    Zustand (상태 관리)
        - npm install zustand

    React Router (라우터)
        - npm install react-router-dom

    React I18n (다국어)
        - npm install react-i18next i18next

    eslint, prettier
        - npm i -D eslint prettier eslint-plugin-react eslint-config-prettier eslint-plugin-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser

    sass (scss)
        - npm install sass

    reset-css
        - npm i reset-css

    sanitize.css
    - npm i sanitize.css
