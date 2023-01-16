/*********HEADER*********/

const templateHeader = document.createElement('Template');
templateHeader.innerHTML = `
    <header class="headerfiltrito">
        <div class="socialicons wow animate__bounceIn">
            <a href="https://www.instagram.com/lorenzzofiore/?hl=es-la" class="instagram" target="_blank"> 
                <i class="bi bi-instagram"></i>
            </a>
            <a href="https://www.behance.net/lfedesign" class="behance" target="_blank">  
                <i class="bi bi-behance"></i>
            </a>
        </div>    

        <div class="logomobile">
            <a href="https://www.instagram.com/elfiltrito/?hl=es-la" target="_blank"><img src="img/logo.svg" alt="elfiltrito" height="70px"></a>
        </div>

        <nav class="navbar">

            <a href="index.html">Home</a>
            <a href="#">Filtros</a>  
            <div class="logo animate__bounceIn"><a href="index.html"><img src="img/logo.svg" alt="elfiltrito" height="70px" ></a></div>  
            <a href="#">Stickers</a>    
            <a href="#">Contacto</a>    

        </nav>

        <a href="t-skavio.html" class="btnt-skvio animate__bounceIn"><button>T-SKVIO</button></a>

        <a onclick="openNav()" href="#" class="menu"><button><i class="bi bi-list"></i></button></a>
	
		<div class="overlay" id="mobile-menu">
	
        <a onclick="closeNav()" href="" class="close">&times;</a>
	
        <div class="overlay-content">
	
			    <a href="index.html">Home</a>
				<a href="#">Filtros</a>
				<a href="#">Stickers</a>
				<a href="#">Contacto</a>
				<a href="t-skavio.html"><img src="img/logotskvio.svg" alt="" height="40px"></a>
	
        </div>
        <div class="developby">
            <img src="img/logoby.svg" alt="">
        </div>
		</div>

    </header>
`;

class Header extends HTMLElement {
    constructor() {
        super();

        const header = templateHeader.content.cloneNode(true);
        this.appendChild(header);
    }
}

window.customElements.define('template-header', Header);


/*********FOOTER*********/

const templatefooter = document.createElement('Template');
templatefooter.innerHTML = `
    <footer class="footer">
        <div class="logomobile">
            <a href="https://www.instagram.com/elfiltrito/?hl=es-la"><img src="img/logo.svg" alt="elfiltrito" height="70px"></a>
        </div>
        <div class="socialicons">
            <a href="https://www.instagram.com/lorenzzofiore/?hl=es-la" class="instagram" target="_blank"> 
                <i class="bi bi-instagram"></i>
            </a>
            <a href="https://www.behance.net/lfedesign" class="behance" target="_blank">  
                <i class="bi bi-behance"></i>
            </a>
        </div>    
        <br>
        <p>All rights reserved to elfiltrito®</p>
    </footer>
`;

class footer extends HTMLElement {
    constructor() {
        super();

        const footer = templatefooter.content.cloneNode(true);
        this.appendChild(footer);
    }
}

window.customElements.define('template-footer', footer);