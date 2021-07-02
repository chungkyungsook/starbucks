const searchEl      = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

//돋보기 아이콘있는 박스 클릭 시 input 요소로 포커스
searchEl.addEventListener('click',()=>{
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus',()=>{
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색');
});

searchInputEl.addEventListener('blur',()=>{
  searchEl.classList.remove('focused')
  searchInputEl.setAttribute('placeholder','');
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2021