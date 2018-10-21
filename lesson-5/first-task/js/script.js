let menu = document.querySelector(".menu"),
    menuItem = document.querySelectorAll('.menu .menu-item'),
    newMenuLi = document.createElement("li"),
    adb = document.querySelector(".adv"),
    column = document.querySelectorAll(".column"),
    title = document.querySelector(".title"),
    proptText = document.querySelector("#prompt"),
    ans = prompt("Ваше отношение к технике Apple", "");


menu.insertBefore(menuItem[2], menuItem[1]);
newMenuLi.textContent = "Пятый пункт";
newMenuLi.classList.add("menu-item");
menu.appendChild(newMenuLi);

document.body.style.background = "url(img/apple_true.jpg) center no-repeat";

title.textContent = "Мы продаем только подлинную технику Apple";

column[1].removeChild(adb);

proptText.textContent = ans;