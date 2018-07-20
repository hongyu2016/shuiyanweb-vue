/**
 * 修改自swiper.animate1.0.2.min.js 以适应vue.js
 * export 导出函数 供使用
 */
export default {
  swiperAnimateCache(){
    for(let allBoxes=window.document.documentElement.querySelectorAll(".ani"),i=0;i<allBoxes.length;i++){

        allBoxes[i].attributes["style"] ? allBoxes[i].setAttribute("swiper-animate-style-cache",allBoxes[i].attributes["style"].value) : allBoxes[i].setAttribute("swiper-animate-style-cache"," ");
        allBoxes[i].style.visibility = "hidden"
    }

  },
  swiperAnimate(a) {
    this.clearSwiperAnimate();
    let b = a.slides[a.activeIndex].querySelectorAll(".ani");
    for (let i = 0; i < b.length; i++) {
      b[i].style.visibility = "visible";
      let effect = b[i].attributes["swiper-animate-effect"] ? b[i].attributes["swiper-animate-effect"].value : "";
      b[i].className = b[i].className + "  " + effect + " " + "animated";
      let style = b[i].attributes["style"].value;
      let duration = b[i].attributes["swiper-animate-duration"] ? b[i].attributes["swiper-animate-duration"].value : "";
      duration && (style = style + "animation-duration:" + duration + ";-webkit-animation-duration:" + duration + ";");
      let delay = b[i].attributes["swiper-animate-delay"] ? b[i].attributes["swiper-animate-delay"].value : "";
      delay && (style = style + "animation-delay:" + delay + ";-webkit-animation-delay:" + delay + ";");
      b[i].setAttribute("style", style)
    }


  },
  clearSwiperAnimate() {
    for (let allBoxes = window.document.documentElement.querySelectorAll(".ani"), i = 0; i < allBoxes.length; i++) {
      let effect;
      allBoxes[i].attributes["swiper-animate-style-cache"] && allBoxes[i].setAttribute("style", allBoxes[i].attributes["swiper-animate-style-cache"].value);
        allBoxes[i].style.visibility = "hidden";
        allBoxes[i].className = allBoxes[i].className.replace("animated", " ");
        allBoxes[i].attributes["swiper-animate-effect"] && (
          effect = allBoxes[i].attributes["swiper-animate-effect"].value,
          allBoxes[i].className = allBoxes[i].className.replace(effect, " ")
        );

    }

  }
}
