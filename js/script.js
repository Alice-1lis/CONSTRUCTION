document.addEventListener('DOMContentLoaded', () => {
  //header-start
  $('.hamburger').on('click', function () {

    if ($(this).hasClass('is-active')) {
      $(this).removeClass('is-active');
      $('.header-mobile-wrap').slideUp(500);

    }
    else {
      $(this).addClass('is-active');
      $('.header-mobile-wrap').slideDown(500);
    }


  });
  //header-end




  /*bunner-start*/

  const bunnerSwiper = new Swiper('.bunner-swiper', 
    {
    speed: 1000,
    spaceBetween: 0,
    autoHeight: true,
    navigation: {
      nextEl: '.bunner-swiper .swiper-button-next',
      prevEl: '.bunner-swiper .swiper-button-prev',
    },
    pagination: {
      el: '.bunner-swiper .swiper-pagination',
      type: 'bullets',
      clickable: true,

    },
    

  });


});
/*bunner-end*/


/*services-start*/
$('.services-def-btn').magnificPopup({
  type: 'inline',
  showCloseBtn: false,
  callback: {
    beforeOpen: function () {
      this.st.mainClass = this.st.el.attr('data-effect');
    },
  },
});
/* Закрытие формы крестик*/
$('.modal-form-close').on('click', function () {
  $.magnificPopup.close();
});

/*services-end*/




/*gallery-start*/
$('.gallery-wrap a').magnificPopup({
  type: 'image',
  gallery: {
    enabled: true,
  },
  callback: {
    beforeOpen: function () {
      this.st.image.marup = this.st.image.marup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
      this.st.mainClass = this.st.el.attr('data-effect');
    }
  }
});



$('.gallery-btn a').on('click', function (e) {

  e.preventDefault();
  var galleryItem = $('.gallery-item');

  if ($(this).hasClass('is-active')) {
    $(this).removeClass('is-active');
    $(this).text('Показати ще');
    galleryItem.each(function () {
      if ($(this).hasClass('is-active')) {
        $(this).removeClass('is-active');
        $(this).slideUp();
      }
    });
  }

  else {
    $(this).addClass('is-active');
    $(this).text('Закрити');
    galleryItem.each(function () {
      if (!$(this).is(':visible')) {
        $(this).addClass('is-active');
        $(this).slideDown();
      }

    });
  }

});

/*gallery-end*/



/*reviews-start */
const reviewsSwiper = new Swiper('.reviews-swiper',
  {
    speed: 1000,
    spaceBetween: 20,
    slidesPerView: 2,
    loop: true,
   // autoplay: true,
    autoHeight: true,
   /*autoplay: {
    delay: 5000,},*/
    pagination: {
      el: '.reviews-swiper .swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      575: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 15
      },

    }

  });

/*reviews-end */








