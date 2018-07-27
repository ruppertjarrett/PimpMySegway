function load_home() {
    document.getElementById("segway").innerHTML = '<div id="content"></div>';
    add_nav();
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

    var logo = document.createElement("div");
    logo.setAttribute("id", "logo");
    li_image.appendChild(logo);
    var image_placeholder = document.createTextNode("image goes here");
    var logo_image = document.getElementById("logo");
    logo.appendChild(image_placeholder);

    var li_1 = document.createElement("li");
    li_1.setAttribute("id", "li_1");
    nav_bar.appendChild(li_1);

    var preset_1= document.createElement("div");
    preset_1.setAttribute("id", "preset_1");
    li_1.appendChild(preset_1);
    var preset_1_placeholder = document.createTextNode("preset 1 goes here");
    var preset_1_div = document.getElementById("preset_1");
    preset_1.appendChild(preset_1_placeholder);

    var li_2 = document.createElement("li");
    li_2.setAttribute("id", "li_2");
    nav_bar.appendChild(li_2);

    var preset_2= document.createElement("div");
    preset_2.setAttribute("id", "preset_2");
    li_2.appendChild(preset_2);
    var preset_2_placeholder = document.createTextNode("preset 2 goes here");
    var preset_2_div = document.getElementById("preset_2");
    preset_2.appendChild(preset_2_placeholder);

    var li_3 = document.createElement("li");
    li_3.setAttribute("id", "li_3");
    nav_bar.appendChild(li_3);

    var preset_3= document.createElement("div");
    preset_3.setAttribute("id", "preset_3");
    li_3.appendChild(preset_3);
    var preset_3_placeholder = document.createTextNode("preset 3 goes here");
    var preset_3_div = document.getElementById("preset_3");
    preset_3.appendChild(preset_3_placeholder);

    var li_4 = document.createElement("li");
    li_4.setAttribute("id", "li_4");
    nav_bar.appendChild(li_4);

    var preset_4= document.createElement("div");
    preset_4.setAttribute("id", "preset_4");
    li_4.appendChild(preset_4);
    var preset_4_placeholder = document.createTextNode("preset 4 goes here");
    var preset_4_div = document.getElementById("preset_4");
    preset_4.appendChild(preset_4_placeholder);

    var li_5 = document.createElement("li");
    li_5.setAttribute("id", "li_5");
    nav_bar.appendChild(li_5);

    var preset_5= document.createElement("div");
    preset_5.setAttribute("id", "preset_5");
    li_5.appendChild(preset_5);
    var preset_5_placeholder = document.createTextNode("preset 5 goes here");
    var preset_5_div = document.getElementById("preset_5");
    preset_5.appendChild(preset_5_placeholder);
}