export const mobileMenu = (() => {
  const init = () => {
    const mobileMenuToggle = document.querySelector(".js-toggle-menu");

    if (!mobileMenuToggle) {
      return;
    }

    const menu = document.querySelector(".menu");
    const menuText = document.querySelectorAll(".menu__text");
    const body = document.querySelector("body");

    mobileMenuToggle.addEventListener("click", function () {
      if (!mobileMenuToggle.classList.contains("active")) {
        mobileMenuToggle.classList.add("active");
        body.classList.toggle("menu-active");
        menu.classList.add("menu--open");
        menu.classList.remove("menu--closed");
        menuText.forEach(element => {
          element.classList.toggle("menu__text-active")
        });
      } else {
        mobileMenuToggle.classList.remove("active");
        body.classList.toggle("menu-active");
        menu.classList.add("menu--closed");
        menu.classList.remove("menu--open");
        menuText.forEach(element => {
          element.classList.toggle("menu__text-active")
        });
      }
    });
  };

  return {
    init,
  };
})();

/*
  Есть один баг, который надо в идеале фиксить.
  У нас при смене ширины экрана при открытом меню из мобилки оно остается в очень кривом виде на десктопе. 
  В идеале прописать какую-то функцию, при определенной ширине экрана чтобы стили мобилки убирались полностью.
  Либо посмотреть внимательнее css, что-то в нем не так
*/