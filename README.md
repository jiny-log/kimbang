# 틀과자유

김보경 25현 가야금 콘서트 웹 팜플렛.

원본 팜플렛의 사진과 내용을 바탕으로 한 반응형 정적 웹사이트입니다.
HSBombaram2.1 타이틀 폰트, 프로그램 6곡, 출연진 소개, 원본 펼침면 보기를 포함합니다.

## 로컬 보기

`index.html`을 브라우저에서 엽니다. 별도 설치나 빌드는 필요하지 않습니다.

## Netlify Git 연동

1. Netlify에서 **Add new project → Import an existing project → GitHub**를 선택합니다.
2. `jiny-log/kimbang` 저장소를 선택합니다.
3. 배포 브랜치: `main`
4. Base directory: 비워 둡니다.
5. Build command: 비워 둡니다.
6. Publish directory: `.` (netlify.toml에도 설정되어 있습니다.)
7. 배포 후 사이트 접근 설정이 공개인지 확인합니다.

이후 `main` 브랜치에 변경 사항을 push하면 Netlify에서 자동으로 배포합니다.

## 구성

- `index.html`: 페이지와 본문
- `style.css`: 반응형 스타일과 타이틀 폰트
- `app.js`: 프로그램 표시와 원본 확대 보기
- `assets/`: 사진, 원본 펼침면, 제공된 타이틀 폰트
- `netlify.toml`: Netlify 배포 설정
