window.addEventListener("load", load);
document.getElementById("segway").innerHTML = '<div id="content"></div>';
add_nav();
add_containers();
add_footer();

var totalCost = 0;

function load(evt) {
    totalCost = 600;
    var image = document.getElementById('image');
    image.style.background = "url('images/Empty.png'), url('images/Tires/Basic.png'), url('images/Body/Whi.png')";
    document.getElementById("price").textContent = "Total: $" + totalCost;
    image.style.backgroundRepeat = "no-repeat";
    image.style.backgroundSize = "cover";
}

function add_nav() {
    var nav = document.createElement("ul");
    nav.setAttribute("id", "nav");
    var element = document.getElementById("content");
    element.appendChild(nav);

    var li_image = document.createElement("li");
    li_image.setAttribute("id", "li_image");
    var nav_bar = document.getElementById("nav");
    nav_bar.appendChild(li_image);

    var logo = document.createElement("img");
    logo.setAttribute("id", "logo");
    logo.setAttribute("src", "images/segway_icon.png")
    li_image.appendChild(logo);
    // var logo_placeholder = document.createTextNode("logo goes here");
    // var logo_image = document.getElementById("logo");
    // logo_image.appendChild(logo_placeholder);

    var li_1 = document.createElement("li");
    li_1.setAttribute("id", "li_1");
    nav_bar.appendChild(li_1);

    var preset_1 = document.createElement("div");
    preset_1.setAttribute("id", "preset_1");
    li_1.appendChild(preset_1);
    var preset_1_placeholder = document.createTextNode("preset 1 goes here");
    var preset_1_div = document.getElementById("preset_1");
    preset_1.appendChild(preset_1_placeholder);

    var li_2 = document.createElement("li");
    li_2.setAttribute("id", "li_2");
    nav_bar.appendChild(li_2);

    var preset_2 = document.createElement("div");
    preset_2.setAttribute("id", "preset_2");
    li_2.appendChild(preset_2);
    var preset_2_placeholder = document.createTextNode("preset 2 goes here");
    var preset_2_div = document.getElementById("preset_2");
    preset_2.appendChild(preset_2_placeholder);

    var li_3 = document.createElement("li");
    li_3.setAttribute("id", "li_3");
    nav_bar.appendChild(li_3);

    var preset_3 = document.createElement("div");
    preset_3.setAttribute("id", "preset_3");
    li_3.appendChild(preset_3);
    var preset_3_placeholder = document.createTextNode("preset 3 goes here");
    var preset_3_div = document.getElementById("preset_3");
    preset_3.appendChild(preset_3_placeholder);

    var li_4 = document.createElement("li");
    li_4.setAttribute("id", "li_4");
    nav_bar.appendChild(li_4);

    var preset_4 = document.createElement("div");
    preset_4.setAttribute("id", "preset_4");
    li_4.appendChild(preset_4);
    var preset_4_placeholder = document.createTextNode("preset 4 goes here");
    var preset_4_div = document.getElementById("preset_4");
    preset_4.appendChild(preset_4_placeholder);

    var li_5 = document.createElement("li");
    li_5.setAttribute("id", "li_5");
    nav_bar.appendChild(li_5);

    var preset_5 = document.createElement("div");
    preset_5.setAttribute("id", "preset_5");
    li_5.appendChild(preset_5);
    var preset_5_placeholder = document.createTextNode("preset 5 goes here");
    var preset_5_div = document.getElementById("preset_5");
    preset_5.appendChild(preset_5_placeholder);
}

function add_containers() {
    var container = document.createElement("div");
    container.setAttribute("id", "container");
    var element = document.getElementById("content");
    element.appendChild(container);

    var leftContainer = document.createElement("div");
    leftContainer.setAttribute("id", "left_Container");
    container.appendChild(leftContainer);

    var image = document.createElement("div");
    image.setAttribute("id", "image");
    leftContainer.appendChild(image);

    var middleContainer = document.createElement("div");
    middleContainer.setAttribute("id", "middle_container");
    container.appendChild(middleContainer);

    var price = document.createElement("div");
    price.setAttribute("id", "price");
    middleContainer.appendChild(price);
    var price_placeholder = document.createTextNode("price goes here");
    var price_div = document.getElementById("price");
    price_div.appendChild(price_placeholder);

    var rightContainer = document.createElement("div");
    rightContainer.setAttribute("id", "right_container");
    container.appendChild(rightContainer);

    var options = document.createElement("div");
    options.setAttribute("id", "options");
    rightContainer.appendChild(options);
}

function add_footer() {
    var footer = document.createElement("div");
    footer.setAttribute("id", "footer");
    var element = document.getElementById("content");
    element.appendChild(footer);

    var leftFooter = document.createElement("div");
    leftFooter.setAttribute("id", "left_footer");
    var element = document.getElementById("content");
    footer.appendChild(leftFooter);

    var item_list = document.createElement("div");
    item_list.setAttribute("id", "item_list");
    leftFooter.appendChild(item_list);
    var item_list_placeholder = document.createTextNode("item list goes here");
    var item_list_div = document.getElementById("item_list");
    item_list_div.appendChild(item_list_placeholder);

    var middleFooter = document.createElement("div");
    middleFooter.setAttribute("id", "middle_footer");
    footer.appendChild(middleFooter);

    var deal = document.createElement("div");
    deal.setAttribute("id", "deal");
    middleFooter.appendChild(deal);
    var deal_placeholder = document.createTextNode("deal goes here");
    var deal_div = document.getElementById("deal");
    deal_div.appendChild(deal_placeholder);

    var rightFooter = document.createElement("div");
    rightFooter.setAttribute("id", "right_footer");
    footer.appendChild(rightFooter);

    var checkout = document.createElement("div");
    checkout.setAttribute("id", "checkout");
    rightFooter.appendChild(checkout);
    var checkout_placeholder = document.createTextNode("checkout goes here");
    var checkout_div = document.getElementById("checkout");
    checkout_div.appendChild(checkout_placeholder);
}

var Options = document.getElementById('options');
var BtnId = ['Red', 'White', 'Blue', 'Silver', 'SafetyOrange', 'OffRoad', 'Basic', 'Racing', 'V2', 'V4', 'V8', 'Tassels', 'Mirrors', 'LEDStrip', 'Speaker', 'Cupholder', 'GPS', 'Bell', 'Headlights'];
var Btns = [];
var overallCount = 0;
var colorCount = 0;
var tireCount = 0;
var engineCount = 0;
var extrasCount = 0;
var container;
var namePlate;

BtnId.forEach(buildButton);
BtnId.forEach(giveEventListener);

function buildButton(item, index, arr) {
    if (overallCount == 0 && colorCount == 0) {
        container = document.createElement('div');
        container.setAttribute('id', 'colors');
        namePlate = document.createElement('p');
        namePlate.innerHTML = `Color :`;
        container.appendChild(namePlate);
        Options.appendChild(container);
    } else if (overallCount == 0 && tireCount == 0) {
        container = document.createElement('div');
        container.setAttribute('id', 'tires');
        namePlate = document.createElement('p');
        namePlate.innerHTML = `Tire :`;
        container.appendChild(namePlate);
        Options.appendChild(container);
    } else if (overallCount == 0 && engineCount == 0) {
        container = document.createElement('div');
        container.setAttribute('id', 'engines');
        namePlate = document.createElement('p');
        namePlate.innerHTML = `Engine :`;
        container.appendChild(namePlate);
        Options.appendChild(container);
    } else if (overallCount == 0 && extrasCount == 0) {
        container = document.createElement('div');
        container.setAttribute('id', 'Extras');
        namePlate = document.createElement('p');
        namePlate.innerHTML = `Extras :`;
        container.appendChild(namePlate);
        Options.appendChild(container);
    }
    Btns[index] = document.createElement('div');
    Btns[index].setAttribute('id', item);
    if (document.getElementById("colors") != null && colorCount < 6) {
        Btns[index].setAttribute('class', 'btn color');
        colorCount++;
    } else if (document.getElementById("tires") != null && tireCount < 4) {
        Btns[index].setAttribute('class', 'btn tire');
        tireCount++;
    } else if (document.getElementById("engines") != null && engineCount < 4) {
        Btns[index].setAttribute('class', 'btn engine');
        engineCount++;
    } else if (document.getElementById("extras") != null && extrasCount < 8) {
        Btns[index].setAttribute('class', 'btn extra');
        extrasCount++;
    }
    Options.appendChild(Btns[index]);
    overallCount++;
    if (colorCount == 5) {
        Options.innerHTML += '<br />';
        overallCount = 0;
        colorCount = 6;
    } else if (tireCount == 3) {
        Options.innerHTML += '<br />';
        overallCount = 0;
        tireCount = 4;
    } else if (engineCount == 3) {
        Options.innerHTML += '<br />';
        overallCount = 0;
        engineCount = 4;
    } else if (extrasCount == 8) {
        Options.innerHTML += '<br />';
        overallCount = 0;
        extrasCount = 9;
    }
}

function giveEventListener(item, index, arr) {
    document.getElementById(item).addEventListener('click', optionClick);
}

var image;
var currentBtn;
var currentParent;
var option;
var area;

function optionClick(evt) {
    currentBtn = evt.target.id;
    option = currentBtn;
    imgURL;
    if (option == 'Red' || option == 'White' || option == 'Silver' || option == 'Blue' || option == 'SafetyOrange') {
        color = image.style.background.substring(image.style.background.length - 28, image.style.background.length);
        if (option == 'Red') {
            imgURL = 'Red';
        } else if (option == 'White') {
            imgURL = 'Whi';
        } else if (option == 'Blue') {
            imgURL = 'Blu';
        } else if (option == 'Silver') {
            imgURL = 'Sil';
        } else if (option == 'SafetyOrange') {
            imgURL = 'Ora';
        }
        image.style.background.replace(color, `, url('images/Body/${imgURL}.png)`);
    } else if (option == 'OffRoad' || option == 'Basic' || option == 'Racing') {
        tire = image.style.background.substring(image.style.background.length - 59, image.style.background.length - 28);
        if (option == 'Basic') {
            imgURL = 'Basic';
        } else if (option == 'OffRoad') {
            imgURL = 'OffRd';
        } else if (option == 'Racing') {
            imgURL = 'Racin';
        }
        image.style.background.replace(tire, `, url('images/Tires/${imgURL}.png)`);
    } else if (option == 'V2' || option == 'V4' || option == 'V8') {
        if (option == 'V2') {
            cost = 300
        } else if (option == 'V4') {
            cost = 600
        } else if (option == 'V8') {
            cost = 1200
        }
    } else {
        imgURL = option;
        image.style.background += `, url('images/Extra/${imgURL}.png)`;
    }
    document.getElementById("item_list").innerHTML += `${option} $${cost} \<br /\>`;
    totalCost += cost;
    document.getElementById("price").textContent = "Total: $" + totalCost;
}