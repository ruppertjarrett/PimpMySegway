document.getElementById("segway").innerHTML = '<div id="content"></div>';
add_nav();
add_containers();
add_footer();

function add_nav() {
    var nav = document.createElement("ul");
    nav.setAttribute("id", "nav");
    var element = document.getElementById("content");
    element.appendChild(nav);

    var li_image = document.createElement("li");
    li_image.setAttribute("id", "li_image");
    var nav_bar = document.getElementById("nav");
    nav_bar.appendChild(li_image);

    var logo = document.createElement("div");
    logo.setAttribute("id", "logo");
    li_image.appendChild(logo);
    var image_placeholder = document.createTextNode("image goes here");
    var logo_image = document.getElementById("logo");
    logo.appendChild(image_placeholder);

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
    var leftContainer = document.createElement("div");
    leftContainer.setAttribute("id", "left_Container");
    var element = document.getElementById("content");
    element.appendChild(leftContainer);

    var logo = document.createElement("img");
    logo.setAttribute("id", "logo");
    leftContainer.appendChild(logo);
    var logo_placeholder = document.createTextNode("logo goes here");
    var logo_div = document.getElementById("logo");
    logo_div.appendChild(logo_placeholder);

    var middleContainer = document.createElement("div");
    middleContainer.setAttribute("id", "middle_container");
    element.appendChild(middleContainer);

    var price = document.createElement("div");
    price.setAttribute("id", "price");
    middleContainer.appendChild(price);
    var price_placeholder = document.createTextNode("price goes here");
    var price_div = document.getElementById("price");
    price_div.appendChild(price_placeholder);

    var rightContainer = document.createElement("div");
    rightContainer.setAttribute("id", "right_container");
    element.appendChild(rightContainer);

    var options = document.createElement("div");
    options.setAttribute("id", "options");
    rightContainer.appendChild(options);

    var colors = document.createElement("div");
    colors.setAttribute("id", "colors");
    rightContainer.appendChild(colors);
    var color_placeholder = document.createTextNode("color options go here");
    var colors_div = document.getElementById("colors");
    colors_div.appendChild(color_placeholder);

    var tires = document.createElement("div");
    tires.setAttribute("id", "tires");
    rightContainer.appendChild(tires);
    var tires_placeholder = document.createTextNode("tire options go here");
    var tires_div = document.getElementById("tires");
    tires_div.appendChild(tires_placeholder);

    var engines = document.createElement("div");
    engines.setAttribute("id", "engines");
    rightContainer.appendChild(engines);
    var engines_placeholder = document.createTextNode("engines options go here");
    var engines_div = document.getElementById("engines");
    engines_div.appendChild(engines_placeholder);

    var other = document.createElement("div");
    other.setAttribute("id", "other");
    rightContainer.appendChild(other);
    var other_placeholder = document.createTextNode("other options go here");
    var other_div = document.getElementById("other");
    other_div.appendChild(other_placeholder);
}

function add_footer() {
    var leftFooter = document.createElement("div");
    leftFooter.setAttribute("id", "left_footer");
    var element = document.getElementById("content");
    element.appendChild(leftFooter);

    var item_list = document.createElement("div");
    item_list.setAttribute("id", "item_list");
    leftFooter.appendChild(item_list);
    var item_list_placeholder = document.createTextNode("item list goes here");
    var item_list_div = document.getElementById("item_list");
    item_list_div.appendChild(item_list_placeholder);

    var middleFooter = document.createElement("div");
    middleFooter.setAttribute("id", "middle_footer");
    element.appendChild(middleFooter);

    var deal = document.createElement("div");
    deal.setAttribute("id", "deal");
    middleFooter.appendChild(deal);
    var deal_placeholder = document.createTextNode("deal goes here");
    var deal_div = document.getElementById("deal");
    deal_div.appendChild(deal_placeholder);

    var rightFooter = document.createElement("div");
    rightFooter.setAttribute("id", "right_footer");
    element.appendChild(rightFooter);

    var checkout = document.createElement("div");
    checkout.setAttribute("id", "checkout");
    rightFooter.appendChild(checkout);
    var checkout_placeholder = document.createTextNode("checkout goes here");
    var checkout_div = document.getElementById("checkout");
    checkout_div.appendChild(checkout_placeholder);
}