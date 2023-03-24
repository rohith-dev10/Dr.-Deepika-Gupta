function dropdownMenu() {
    let id = document.getElementById("dropDownClick")
    let ham = document.getElementById("hamBurger")
    let anchor = ham.getElementsByTagName('a')

    if (id.className === "sidenav") {
        id.className += " responsive"
        anchor[0].innerHTML = "&#x2716;"
    } else {
        id.className = "sidenav"
        anchor[0].innerHTML = '&#9776;';
    }
}

let nav_html = `
<div class="box box1">
                <ul>
                    <li class="Image"><a href="index.html"><img class="Dimg" src="Images/D-HomePage.png"
                                alt="D image" /><img class="Dimg-font" src="Images/Deepika-font.png" alt="Deepika"
                                srcset=""></a></li>
                    <li><a href="qualification.html">Qualification</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="professional.html">Professional</a></li>
                    <li><a href="research.html">Research</a></li>
                    <li><a href="teaching.html">Teaching</a></li>
                    <li class="hamburgerMenu" id="hamBurger"><a href="javascript:void(0);" onClick="dropdownMenu()"
                            style="border: 0; padding: 10px 5px 5px;width: 40px; height: 40px;">&#9776;</a></li>
                </ul>

            </div>
            <div class="box box2">
                <ul class="fancyfonts">
                    <li><a href="https://www.linkedin.com/in/dr-deepika-gupta-08364b11" target="blank"><i id="fancy1" class="fa-brands fa-linkedin-in"></i></a></li>
                    <li><a href="https://github.com/kajaveaniruddha/Dr.-Deepika-Gupta" target="blank"><i id="fancy2"
                                class="fa-brands fa-github"></i></a></li>
                </ul>
            </div>
`

let nav=document.getElementById('dropDownClick');

nav.innerHTML=nav_html;