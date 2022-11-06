window.addEventListener("load", () => {
    
    const wave = document.querySelector(".wave"),
        body = document.querySelector("body"),
        navLink = document.querySelectorAll(".nav-link"),
        navbarBrand = document.querySelector(".navbar-brand"),
        navLinkAfter = document.querySelectorAll(".navbar-nav .nav-item .link"),
        afters = document.querySelectorAll(".greeting"),
        dropdownMenu = document.querySelector("header .header_navbar nav .collapse .navbar-nav .dropdown .dropdown-menu"),
        dropdownItem = document.querySelector("header .header_navbar nav .collapse .navbar-nav .dropdown .dropdown-menu .dropdown-item"),
        loader = document.querySelector(".loader"),
        mode = document.querySelector("header .header_navbar nav .collapse .navbar-nav .mode"),
        sun = document.querySelector("header .header_navbar nav .collapse .navbar-nav .mode .sun"),
        moon = document.querySelector("header .header_navbar nav .collapse .navbar-nav .mode .moon");

        moon.style.display = "none";
        sun.style.display = "block";

    setTimeout(() => {
        loader.style.display = "none";
        loader.style.transition = "1s";
    }, 4000)

    let count = true;

    body.style.backgroundColor = "#020a18"

    if(count) {
        console.log(count + " 1 if");
        navLinkAfter.forEach((btn, index) => {
            btn.addEventListener("mouseover", () => {
                afterShow(index);
            })
            btn.addEventListener("mouseout", () => {
                afterNone()
            })
        })
        dropdownMenu.style.backgroundColor = "#fff";
        dropdownItem.style.color = "#000"
        dropdownMenu.addEventListener("mouseover", () => {
            dropdownItem.style.color = "#fff";
            dropdownItem.style.borderRadius = "10px";
            dropdownItem.style.backgroundColor = "#3A68B8";
        })
        dropdownMenu.addEventListener("mouseout", () => {
            dropdownItem.style.color = "#000";
            dropdownItem.style.borderRadius = "10px";
            dropdownItem.style.backgroundColor = "#fff";
        })
    } else {
            console.log(count + " 1 else");
            dropdownItem.style.background = "#020A18";
            dropdownItem.style.color = "rgb(157, 171, 194)"
            dropdownMenu.addEventListener("mouseover", () => {
                dropdownItem.style.color = "#fff";
                dropdownItem.style.borderRadius = "10px";
                dropdownItem.style.backgroundColor = "#3A68B8";
            })
            dropdownMenu.addEventListener("mouseout", () => {
                dropdownItem.style.color = "rgb(157, 171, 194)";
                dropdownItem.style.borderRadius = "10px";
                dropdownItem.style.backgroundColor = "#020A18";
            })
        navLinkAfter.forEach((btn, index) => {
            btn.addEventListener("mouseover", () => {
                afterShowBac(index);
            })
            btn.addEventListener("mouseout", () => {
                afterNone()
            })
        })
    }
    

    mode.addEventListener("click",  () => {
        if(count) {
            console.log(count + " 2 if");
            body.style.backgroundColor = "white";
            moon.style.display = "block";
            sun.style.display = "none";
            mode.style.color = "black"
            navLink.forEach((item, index) => {
                item.style.color = "#3A68B8"
            })
            navbarBrand.style.color = "#020a18";
            dropdownItem.style.background = "#020A18";
            dropdownItem.style.color = "rgb(157, 171, 194)"
            dropdownMenu.addEventListener("mouseover", () => {
                dropdownItem.style.color = "#fff";
                dropdownItem.style.borderRadius = "10px";
                dropdownItem.style.backgroundColor = "#3A68B8";
            })
            dropdownMenu.addEventListener("mouseout", () => {
                dropdownItem.style.color = "rgb(157, 171, 194)";
                dropdownItem.style.borderRadius = "10px";
                dropdownItem.style.backgroundColor = "#020A18";
            })
            navLinkAfter.forEach((btn, index) => {
                btn.addEventListener("mouseover", () => {
                    afterShowBac(index);
                })
                btn.addEventListener("mouseout", () => {
                    afterNone()
                })
            })

            count = false;
        }else {
            console.log(count + " 2 else");
            body.style.backgroundColor = "#020a18";
            moon.style.display = "none";
            sun.style.display = "block";
            mode.style.color = "white"
            navLink.forEach((item, index) => {
                item.style.color = "#fff"
            })
            navbarBrand.style.color = "#3A68B8";
            dropdownItem.style.backgroundColor = "#fff";
            dropdownItem.style.color = "#000"
            dropdownMenu.addEventListener("mouseover", () => {
                dropdownItem.style.color = "#fff";
                dropdownItem.style.borderRadius = "10px";
                dropdownItem.style.backgroundColor = "#3A68B8";
            })
            dropdownMenu.addEventListener("mouseout", () => {
                dropdownItem.style.color = "#000";
                dropdownItem.style.borderRadius = "10px";
                dropdownItem.style.backgroundColor = "#fff";
            })
            navLinkAfter.forEach((btn, index) => {
                btn.addEventListener("mouseover", () => {
                    afterShow(index);
                    console.log("qora");
                })
                btn.addEventListener("mouseout", () => {
                    afterNone()
                })
            })
            count = true;
        }
    })




    function afterNone () {
        afters.forEach(item => {
            item.style.width = "0";
        })
    }

    function afterShow (i) {
        afters[i].style.cssText = "width: 100%; background: #3A68B8"
    }

    function afterShowBac (i) {
        afters[i].style.cssText = "width: 100%; background: black"
    }

})