const burger = document.querySelector (".burger")
const nav = document.querySelector (".nav")

burger.addEventListener("click" , () => {
    nav.classList.toggle("active")
})


const swiperalbum1 = new Swiper('.swiper-album-1', {
    loop: true,
    slidesPreview: 1,
    autoplay: {
        delay:0,
        disableOnInteraction: false,
      },

      speed: 20000
  });

  const swiperAlbum2 = new Swiper('.swiper-album-2', {
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: true
    },
    allowTouchMove: false,

    speed: 20000
});