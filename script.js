                       // ЗАМЕНА ТЕКСТА //
let title = document.getElementById("title")
title.onmouseover = mouseTitleChange

function mouseTitleChange() {
title.style.color = "red"
title.textContent = "My JavaScript change!!!!"
title.style.paddingLeft = "65px"
setTimeout(default_title , 1000)
}

function default_title() {
    title.style.color = "#000"
    title.textContent = "My JavaScript"
    title.style.paddingLeft = "0px"
}
                        // ЗАМЕНА ТЕКСТА //




                      // ЗАМЕНА КАРТИНКИ НАВЕДЕНИЕМ //
 let heading = document.getElementById("img")
heading.onmouseover = mouseChange

function mouseChange() {
    heading.setAttribute('src','img/zero.jpg');
    setTimeout(default_jpg , 1000)
}

function default_jpg() {
    heading.setAttribute('src','img/five.jpg');
}
                       // ЗАМЕНА КАРТИНКИ НАВЕДЕНИЕМ //


                       

                      // ЗАМЕНА КАРТИНКИ КЛИКОМ //
let headingClick = document.getElementById("img2")
 headingClick.onclick = click_ot

 function click_ot() {
    headingClick.setAttribute('src','img/zero.jpg');
    setTimeout(click_otDefault , 1000)
  }

  function click_otDefault() {
 headingClick.setAttribute("src", "img/three.jpg")
  }
                      // ЗАМЕНА КАРТИНКИ КЛИКОМ //
