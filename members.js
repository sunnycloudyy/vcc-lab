/*
 * 현재 연구실 구성원 정보 수정은 이 파일에서만 해주세요.
 * 사진 업로드 위치: images/members/
 * 예시: images/members/kim-minji.jpg
 * 사진이 아직 없다면 image: '' 로 두면 기본 프로필 이미지가 표시됩니다.
 * 이메일은 공개 동의를 얻은 경우에만 입력하세요.
 */

const labMembers = [
  {
    name: '윤영준',
    english: 'Yoon YoungJun',
    role: 'Researcher',
    field: '연구 및 디자인',
    image: 'images/members/member-yoon.jpeg',
  },
  {
    name: '류예하',
    english: 'Ryu YeHa',
    role: 'Researcher',
    field: '연구 및 디자인',
    image: 'images/members/member-ryu.jpeg',
    email: ''
  },
  {
    name: '채민경',
    english: 'Chae MinKyung',
    role: 'Researcher',
    field: '연구 및 디자인',
    image: 'images/members/member-chae.jpeg',
    email: ''
  },
  {
    name: '카운시뚜',
    english: 'Kaung SiThu',
    role: 'Researcher',
    field: '연구 및 디자인',
    image: 'images/members/member-kaung.jpeg',
    email: ''
  },
  {
    name: '윤나디택',
    english: 'Yung NadiHtet',
    role: 'Researcher',
    field: '연구 및 디자인',
    image: 'images/members/member-yung.jpeg',
    email: ''
  }
];


const grid = document.getElementById('member-grid');
if (grid) {
  const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const makePlaceholder = () => '<span class="avatar-placeholder" aria-hidden="true"><svg viewBox="0 0 120 120" width="90" height="90" fill="none"><circle cx="60" cy="41" r="20" fill="currentColor"/><path d="M20 106c3-24 17-38 40-38s37 14 40 38" fill="currentColor"/></svg></span>';
  grid.innerHTML = labMembers.map(member => {
    const img = member.image?.trim();
    const imageHtml = img ? `<img src="${escapeHtml(img)}" alt="${escapeHtml(member.name)} 프로필 사진" loading="lazy">` : makePlaceholder();
    const emailHtml = member.email ? `<a class="member-email" href="mailto:${escapeHtml(member.email)}">${escapeHtml(member.email)}</a>` : '';
    return `<article class="member-card"><div class="member-portrait">${imageHtml}</div><div class="member-card-info"><p class="member-role">${escapeHtml(member.role)}</p><h3>${escapeHtml(member.name)}</h3>${member.english ? `<p class="member-english">${escapeHtml(member.english)}</p>` : ''}${member.field ? `<p class="member-field">${escapeHtml(member.field)}</p>` : ''}${emailHtml}</div></article>`;
  }).join('');
  document.getElementById('member-count').textContent = `${labMembers.length} Members`;
  // 사진 경로가 틀렸거나 파일이 없는 경우에도 깨진 이미지 대신 기본 프로필을 표시합니다.
  grid.querySelectorAll('.member-portrait img').forEach(img => img.addEventListener('error', () => {
    img.parentElement.innerHTML = makePlaceholder();
  }));
}
