//============================== skills section =================================

const modelViews = document.querySelectorAll(".skills_modal"),
  modelbtns = document.querySelectorAll(".skills_button"),
  modalcloses = document.querySelectorAll(".skills_model_close");

let modal = function (modalclick) {
  modelViews[modalclick].classList.add("active_modal");
};
modelbtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});
modalcloses.forEach((modelclose) => {
  modelclose.addEventListener("click", () => {
    modelViews.forEach((modelview) => {
      modelview.classList.remove("active_modal");
    });
  });
});

//============================== portfolio section =================================

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img_overlay");

p_btns.addEventListener("click", (e) => {
  const p_btn_clicked = e.target;
  console.log(p_btn_clicked);

  p_btn_clicked.classList.add(".btn_active");
  const btn_num = p_btn_clicked.dataset.btnNum;
  console.log(btn_num);

  p_img_elem.forEach((curElm) => curElm.classList.add("p-image-not-active"));
  const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

  img_active.forEach((curElm) => curElm.classList.remove("p-image-not-active"));

  // portfolio_images
});

//============================== contact section =================================
const contact_btn = document.querySelector("#contact_btn");
const allInputs = document.querySelectorAll('input[type="text"]');
const email = document.querySelectorAll('input[type="email"]');
const txtarea = document.querySelectorAll("#txta");

contact_btn.addEventListener("click", () => {
  for (let input of allInputs) {
    input.value = "";
  }
  for (let e_input of email) {
    e_input.value = "";
  }
  for (let tara of txtarea) {
    tara.value = "";
  }
});

//============================== navbar section =================================
const mobile_nav = document.querySelector(".mobile_navbar_btn");
const headerElem = document.querySelector(".nav_container");

mobile_nav.addEventListener("click", () => {
  headerElem.classList.toggle("active");
});

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    // e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("list_items"))
      headerElem.classList.toggle("active");
  });
});
//============================== sticky navbar =================================
// const nav_header = document.querySelector(".nav_container");
const headerfiller = document.querySelector(".header_filler");

const section_hero = document.querySelector(".hero_main");
const observer = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    console.log(ent);
    ent.isIntersecting === false
      ? headerElem.classList.add("sticky")
      : headerElem.classList.remove("sticky");
    ent.isIntersecting === false
      ? headerfiller.classList.add("filler")
      : headerfiller.classList.remove("filler");
  },
  {
    root: null,
    rootMargin: "-1px",
    threshold: 0,
  }
);
observer.observe(section_hero);
