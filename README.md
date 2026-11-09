# 시각문화커뮤니케이션 연구실 VCC Lab 홈페이지

## 페이지 구성
- `index.html`: 프로젝트 갤러리
- `members.html`: 지도교수 소개 + 현재 연구실 구성원 프로필 갤러리
- `style.css`: 페이지 디자인
- `projects.js`: 프로젝트 정보 수정
- `members.js`: 현재 연구실 구성원 이름/역할/사진 경로 수정 (여기만 수정하면 카드 자동 생성)

## 교수님 프로필 사진 추가 방법
1. 교수님 사진을 `yoon-lab-gallery/images/members/` 폴더에 넣습니다.
2. 사진 파일명을 `professor-yoon.jpg`로 지정합니다. (JPG 파일을 사용하세요.)
3. `members.html`을 새로고침하면 교수님 이름 왼쪽에 사진이 표시됩니다.
4. PNG 또는 다른 파일명을 사용하고 싶다면 `members.html`에서 `src="images/members/professor-yoon.jpg"` 부분을 실제 파일명으로 수정하세요.
5. 사진이 없거나 경로가 틀리면 기존 `JY` 표시가 유지됩니다.
6. 사진 크기와 위치는 `style.css`의 `.faculty-avatar` / `.faculty-avatar img`에서 바꿀 수 있습니다.

## 구성원 프로필 사진 추가 방법 (GitHub 업로드 전)
1. ZIP을 압축 해제한 뒤 `yoon-lab-gallery/images/members/` 폴더를 엽니다.
2. JPG/PNG/WebP 사진 파일을 그 폴더에 복사합니다. 예: `kim-minji.jpg`
3. `members.js` 파일에서 해당 사람의 `image: ''` 를 `image: 'images/members/kim-minji.jpg'`로 변경합니다.
4. 같은 줄의 name, english, role, field를 실제 정보로 수정합니다.
5. `members.html`을 브라우저에서 새로고침하면 사진이 보입니다. `index.html`은 프로젝트 페이지입니다.
6. 인원 추가는 `members.js`의 객체 한 줄을 복사해 `labMembers` 배열에 추가합니다. 제거는 해당 한 줄을 지웁니다.
7. 본 사이트의 샘플 이름/사진 없는 기본 프로필은 실제 정보로 교체해야 합니다.

### 사진이 안 보일 때
- `images/members/` 안에 사진이 실제로 있는지 확인
- 파일명과 확장자(.jpg, .png, .webp) 및 대소문자가 정확히 일치하는지 확인
- `image` 값 앞에 `/` 를 붙이지 마세요. 상대 경로를 유지하세요.
- 권장: 3:4 세로 사진, 최소 600×800px 정도, 웹용으로 용량 축소. 정사각형 사진도 자동으로 중앙 크롭됩니다.
- 사진·개인정보의 홈페이지 공개 동의를 받은 다음 사용하세요.

## 프로젝트 이미지
- 프로젝트 사진은 `images/` 폴더에 추가
- `projects.js`에서 `image: 'images/project01.jpg'`처럼 수정

## 미리보기
- 압축 해제 후 `members.html`, `index.html`을 더블클릭해서 열어보기
- VS Code와 Live Server를 쓰면 편리하게 수정 및 새로고침 가능

## GitHub Pages 게시
- GitHub 새 공개 저장소 생성
- `yoon-lab-gallery` 폴더 안의 파일과 폴더를 저장소 최상위에 업로드
- Settings > Pages > Deploy from a branch > main / (root) 선택 후 Save
- 연구실 또는 학과에서 소유·관리할 수 있는 저장소 이용 권장

## 연구실 이름 · 위치 · 연락처 수정 (2026-11 업데이트)
- 헤더는 `VCC LAB / Visual Culture & Communication Lab`으로 수정했으며 두 페이지의 상단에는 국문 정식 이름이 표시됩니다.
- 두 페이지 하단에 `Location & Contact` 섹션을 추가했습니다. 상단 `Contact` 메뉴를 누르면 같은 페이지 하단으로 이동합니다.
- 아직 전달되지 않은 위치와 연락처는 임의로 입력하지 않고 **입력 예정**이라고 표시해 두었습니다.
- `index.html`과 `members.html`에서 `위치 정보 입력 예정` 텍스트를 실제 건물명·호실 등으로 바꾸세요.
- 두 파일에서 `연락처 입력 예정`을 실제 대표 이메일 또는 연락처로 바꾸세요. 필요하면 이메일을 `<a href="mailto:lab@example.org">lab@example.org</a>` 형태로 작성하면 클릭 가능한 메일 링크가 됩니다(주소는 예시이며 실제 정보로 교체해야 합니다).
- `건물명 · 호실을 입력해 주세요.` 및 `연구실 대표 이메일 또는 연락처를 입력해 주세요.` 문장도 실제 정보가 들어가면 제거하거나 바꾸세요.
- 담당교수 사진은 기존대로 `images/members/professor-yoon.jpg`, 현재 구성원 사진은 `images/members/` 폴더에 넣습니다.
- 본 수정본은 페이지 수를 늘리지 않고 기존 2페이지 구성과 사진 갤러리를 유지합니다.
