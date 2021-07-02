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


const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
window.addEventListener('scroll', _.throttle(() =>{
  console.log(window.scrollY);
  if(window.scrollY > 500){
    //배지 숨기기
    //gsap.to(요소, 지속시간, 옵션)
    gsap.to(badgeEl, .6, {
      opacity : 0,
      display: 'none'
    } );
    gsap.to(toTopEl,.2,{
      x:0
    })
    //버튼 보이기!
  }else {
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    //버튼 숨기기!
    gsap.to(toTopEl,.2,{
      x:100
    })
  }
}, 300))
// _.throttle(함수, 시간)

toTopEl.addEventListener('click',function(){
  gsap.to(window, .7,{
    scrollTo: 0
  });
});

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl,index){
  //gsap.to(요소, 지속시간, 옵션)
  gsap.to(fadeEl, 1, {
    delay: (index + 1)*.7,
    opacity: 1
  });
});

//선택자, 옵션
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper-container',{
  slidesPerView:3, //한번에 보여줄 슬라이드 개수
  spaceBetween:10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드 가운데 보여주기
  loop: true,
  autoplay:{
    delay: 5000
  },
  pagination:{
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true, //사용자으 ㅣ페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
})
new Swiper('.awards .swiper-container', {
  // direction: 'horizontal', // 수평 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
  spaceBetween: 30, // 슬라이드 사이 여백
  slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
  // slidesPerGroup: 5, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.awards .swiper-prev', // 이전 버튼 선택자
    nextEl: '.awards .swiper-next' // 다음 버튼 선택자
  }
})

const promotionEl = document.querySelector('.promotion')
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false
promotionToggleBtn.addEventListener('click',() =>{
  isHidePromotion = !isHidePromotion
  if(isHidePromotion){
    //숨김 처리
    promotionEl.classList.add('hide');
  }else{
    //보임 처리
    promotionEl.classList.remove('hide');
  }
})


function random(min, max){
  // .toFixed()를 통해 반환된 문자 데이터를,
  // parseFloat() 을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size){
  //gsap.to(요소, 시간, 옵션)
  gsap.to(selector, //선택자
    random(1.5,2.5),  // 애니메이션 동작 시간
    { //옵션 
      y:size,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0,delay)
    }
  );
}
floatingObject('.floating1',1,15);
floatingObject('.floating2',.5,15);
floatingObject('.floating3',1.5,20);


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8, //
    })
    .setClassToggle(spyEl,'show')
    .addTo(new ScrollMagic.Controller());
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2021