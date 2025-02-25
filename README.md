# js-developer

이 프로젝트는 디벨롭 사이트임

**수정날짜:**
2024-02-25

# Directory

```
project/
├── .vscode/
│ └── extensions.json               # VSCode 확장 설정 파일
├── node_modules/                   # 설치된 패키지들
├── public/
│ └── vite.svg
├── src/
│ ├── assets/
│ │ ├── img/                        # 이미지 파일들
│ │ │ └── img/
│ │ └── styles/
│ │ └── global.css                  # 전역 스타일 파일
│ ├── components/
│ │ └── Header.tsx                  # 헤더 컴포넌트
│ ├── hooks/
│ │ └── useNetwork.ts               # 네트워크 관련 커스텀 훅
│ ├── i18n/
│ │ ├── en.json                     # 영어 번역 파일
│ │ ├── index.ts                    # i18n 초기화 설정
│ │ └── ko.json                     # 한국어 번역 파일
│ ├── pages/
│ │ ├── error/
│ │ │ └── index.tsx                 # 에러 페이지
│ │ └── home/
│ │ ├── index.tsx                   # 홈 페이지
│ │ ├── parameter.tsx               # 파라미터로 데이터 받는 페이지
│ │ ├── query.tsx                   # 쿼리로 데이터 받는 페이지
│ │ └── state.tsx                   # state로 데이터 받는 페이지
│ ├── routes/
│ │ └── index.tsx                   # 라우트 설정
│ ├── shared/
│ │ ├── constant.ts                 # 상수 관리
│ │ └── util.ts                     # 공통 유틸리티 함수
│ ├── stores/
│ │ └── userInfo.ts                 # 사용자 정보 스토어
│ ├── type/
│ │ └── userInfo.ts                 # 사용자 정보 타입 정의
│ ├── App.css                       # 앱 레벨 스타일
│ ├── App.tsx                       # 루트 컴포넌트
│ ├── index.css                     # 글로벌 스타일
│ └── main.tsx                      # 앱 진입점
├── .gitignore                      # Git에서 무시할 파일 목록
├── .prettierrc                     #Prettier 설정 파일
├── eslint.config.js                # ESLint 설정 파일
├── index.html                      # HTML 템플릿 파일
├── package-lock.json               # 패키지 잠금 파일
├── package.json                    # 프로젝트 정보 및 의존성
├── README.md                       # 프로젝트 설명 파일
├── tsconfig.app.json               # 앱용 TypeScript 설정
├── tsconfig.json                   # TypeScript 기본 설정
├── tsconfig.node.json              # Node.js용 TypeScript 설정
└── vite.config.ts                  # Vite 설정 파일
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
