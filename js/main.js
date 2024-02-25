new Swiper('.pen-cat .swiper-container', {
    // direction: horizontal, <- 기본값이므로 명시X
    slidesPerView: 5, // 한번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    autoplay: {
      delay: 5000  
    },
    loop: true,
    navigation: {
        prevEl: '.swiper-prev',
        nextEl: '.swiper-next'
    }
})
