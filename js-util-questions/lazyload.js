// getBoundingClientRect
let imgList1 = [...document.querySelectorAll(".get_bounding_rect")];
let num = imgList1.length;

let lazyLoad1 = (function () {
  let count = 0;
  return function () {
    let deleteIndexList = [];
    imgList1.forEach((img, index) => {
      let rect = img.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        img.src = img.dataset.src;
        deleteIndexList.push(index);
        count++;
        if (count === num) {
          document.removeEventListener("scroll", lazyLoad1);
        }
      }
    });
    imgList1 = imgList1.filter((_, index) => !deleteIndexList.includes(index));
  };
})();

// throttle.js;
lazyLoad1 = proxy(lazyLoad1, 100);

document.addEventListener("scroll", lazyLoad1);
lazyLoad1();

// intersectionObserver
let imgList2 = [...document.querySelectorAll(".intersection_observer")];

let lazyLoad2 = function () {
  let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.src = entry.target.dataset.src;
        observer.unobserve(entry.target);
      }
    });
  });
  imgList2.forEach((img) => {
    observer.observe(img);
  });
};

lazyLoad2();
