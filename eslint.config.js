export default defineConfig({
    // ESLint의 기본 규칙, TypeScript 권장 규칙, React 권장 규칙을 확장
    extends: [
        'eslint:recommended', // 기본적인 자바스크립트 린트 규칙
        'plugin:@typescript-eslint/recommended', // TypeScript 린트 규칙
        'plugin:react/recommended', // React 기본 린트 규칙
        'plugin:react/jsx-runtime', // React 17+ JSX transform 지원
        'plugin:react-hooks/recommended' // React Hooks 린트 규칙
    ],
    // ESLint가 사용할 파서 설정
    parser: '@typescript-eslint/parser', // TypeScript 파서

    parserOptions: {
        ecmaVersion: 'latest', // 최신 ECMAScript 기능 지원
        sourceType: 'module', // ES modules 사용
        ecmaFeatures: {
            jsx: true // JSX 문법 지원
        }
    },

    rules: {
        // React 컴포넌트의 Props 타입 검사 비활성화 (TypeScript가 처리)
        'react/prop-types': 'off',

        // React Hooks 규칙 설정
        'react-hooks/rules-of-hooks': 'error', // Hooks 규칙 위반시 에러
        'react-hooks/exhaustive-deps': 'warn', // useEffect 의존성 배열 경고

        // 사용되지 않는 변수 경고 설정 (TypeScript 검사와 중복될 수 있음)
        '@typescript-eslint/no-unused-vars': [
            'warn', // 경고로 표시
            {
                argsIgnorePattern: '^_', // _로 시작하는 함수 매개변수는 무시
                varsIgnorePattern: '^_' // _로 시작하는 변수는 무시
            }
        ]
    },

    // React 버전 자동 감지 설정
    settings: {
        react: {
            version: 'detect' // 설치된 React 버전 자동 감지
        }
    }
});
