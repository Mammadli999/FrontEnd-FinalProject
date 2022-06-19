//#region Nav
const header = document.querySelector(".header");
const white_img = document.querySelector("#white_img");
const blue_img = document.querySelector("#blue_img");

const lines = Array.from(
  document.querySelectorAll(".header__container__nav__list__list-item__link")
);
let sticky = header.offsetTop;
blue_img.style.display = "none";

window.addEventListener("scroll", () => {
  if (window.pageYOffset - 135 > sticky) {
    header.classList.add("sticky");
    blue_img.style.display = "block";
    white_img.style.display = "none";
    lines.forEach((element) => {
      element.style.color = "black";
      element.addEventListener("mouseover", function () {
        element.style.color = "#FF931e";
      });
    });
    lines.forEach((element) => {
      element.addEventListener("mouseout", function () {
        element.style.color = "black";
      });
    });
  } else {
    header.classList.remove("sticky");

    blue_img.style.display = "none";
    white_img.style.display = "block";
    lines.forEach((element) => {
      element.style.color = "#eee";
      element.addEventListener("mouseover", function () {
        element.style.color = "#FF931e";
      });
    });

    lines.forEach((element) => {
      element.addEventListener("mouseout", () => {
        element.style.color = "#eee";
      });
    });
  }
});

const button = document.querySelector(".header__container__wrapper-btn__btn");
const menu = document.querySelector(".aside");
const active = document.querySelector(".active");

button.addEventListener("click", () => {
  button.classList.toggle("active");
  button.classList.toggle("not-active");
  menu.classList.toggle("visible");
});

const buttons = [
  ...document.querySelectorAll(".aside__wrapper__nav__list__list-item"),
];

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    button.classList.toggle("active");
    button.classList.toggle("not-active");
    menu.classList.toggle("visible");
  });
});
//#endregion

//#region Path
const content_for_path = [
  "Data as a Service (DaaS) is a complex approach aimed at monetization of MNO’s Big Data relying on advanced techniques in analyzing telco usage. A user-friendly and fast ecosystem is built for various providers of goods and services be equipped with access to valuable data for making lending decisions.",
  "Using variety of accessible data, decision is made on eligibility of any given individual independent on whether they have or not credit history. Complex product system is built with scoring engine and loan management platform as core components.",
  "Enabling embedded finance to all credit-invisible customer segments of a bank – via using sophisticated scoring engine and state-of-the-art loan management platform. Our solution greatly reduces cost of the lending process as well as efficiently managing risks of the same.",
  "Enabling embedded finance to all customer segments of a mobile wallet passing through creditworthiness assessment based on AI/ML driven scoring algorithms. Loan servicing module presents as well.",
  "Buy Now Pay Later solution technically integrated into any ecosystem featuring e-commerce, marketplace etc. for transparent access allowing the end-users to take advantage of making installment-based purchases.",
  "Lending an airtime to MNO customers on the premise that they will pay back with a bit of premium. Built-in machine learning system provides for maximum profitability of the business model.",
  "While scoring engine and set of algorithms are core of all Simbrella’s solutions, it is possible to implement scoring as a standalone component should such a need arise at any of our potential clients – banks, MNO’s, mobile wallets etc.",
  "Worried about protection of sensitive data? We created data anonymizer solution for this particular purpose – it’ll help to carry on all scoring and lending activities in any customer base without disclosing actual customer information.",
];
let all_products = document.querySelectorAll(
  ".products__wrapper__rounds__item"
);
let product_wrapper_a = document.querySelectorAll(
  ".products__wrapper__rounds__item__link"
);
let text = document.querySelector(
  ".products__wrapper__rounds__p-box__content-of-product"
);
all_products.forEach((item, index, array) => {
  item.addEventListener("mouseenter", (e) => {
    text.innerText = content_for_path[index];
    all_products.forEach((item, otherIndex, array) => {
      if (otherIndex != index) {
        product_wrapper_a[index].classList.add("color-hover");
        item.classList.add("for-hover");
      }
    });
  });
  item.addEventListener("mouseleave", (e) => {
    text.innerText = "";
    all_products.forEach((item, otherIndex, array) => {
      if (otherIndex != index) {
        product_wrapper_a[index].classList.remove("color-hover");
        item.classList.remove("for-hover");
      }
    });
  });
});
//#endregion

//#region Counter
let counter = document.querySelector(
  ".achievements-section__wrapper__content__box__header .counter"
);
if (counter) {
  jQuery(document).ready(function ($) {
    $(
      ".achievements-section__wrapper__content__box__header .counter"
    ).counterUp({
      delay: 10,
      time: 1000,
      duration: 200,
    });
  });
}
//#endregion

//#region Footer
let tabs = document.querySelectorAll(
    ".footer__section__div__header__nav__ul__li__span"
  ),
  contents = document.querySelectorAll(".footer__section__div__wrapper__ul");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    contents.forEach((content) => {
      content.classList.remove("is-active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("is-active");
    });

    contents[index].classList.add("is-active");
    tabs[index].classList.add("is-active");
  });
});
//#endregion
