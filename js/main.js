$(document).ready(function () {
    var currentFloor = 2; // переменная этажа
    var floorPath = $(".home-img path"); // отдельный этаж в картинке
    var counterUp = $(".counter-up"); /*кнопка увеличения этажа*/
    var counterDown = $(".counter-down"); /*кнопка уменьшения этажа*/
    //наведение мышкой на этаж
    $(".home-img path").on("mouseover", function () {
        //убирать подсвечивание
        floorPath.removeClass("current-floor");
        currentFloor=$(this).attr("data-floor"); // значение этажа
        $(".counter").text(currentFloor); // записываем этаж в счетчик 
    });
//клик вверх
    counterUp.on("click", function () {
    if (currentFloor < 18) { //проверяем значение этажа
    currentFloor++; //прибавляем 1 этаж
    usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}); // форматируем не 1 а 01
    $(".counter").text(usCurrentFloor);
    floorPath.removeClass("current-floor"); // удаляем класс у эатжей
    $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем этаж
    }
    });
// клик вниз
    counterDown.on("click", function () {
    if (currentFloor > 02) {
    currentFloor--;
    usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
    $(".counter").text(usCurrentFloor);
    floorPath.removeClass("current-floor");
    $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
    });
});