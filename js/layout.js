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


/*############# CARDS CONTAINER ###############*/

const templateCards = document.createElement('Template');
templateCards.innerHTML = `

<div class="contenedorcards">

<section class="categorias wow animate__animated animate__bounceInLeft">
    <article class="card-filtros">
        <h3 class="title">Filtros</h3>
        <a href="filtros.html" class="imgfiltros"><img src="img/filtros.svg" width="250px" alt="filtros"></a>
    </article>
    
    <article class="card-stickers">
        <h3 class="title">Stickers</h3>
        <a href="stickers.html" class="imgstickers"><img src="img/sticker.svg" height="280px" alt="stickers"></a>
    </article>

    <article class="card-personalizados">
        <div class="contentimg">   
            <a href="personaliza.html" class="imgpersonalizados"><img src="img/personalizados.png" alt="filtros"></a>
            </div>
        <div class="contentext">
            <h3 class="title">Filtros Personalizados</h3>
            <p class="text">Envianos la imagen y nosotros nos encargamos de realizarlos!</p> <br>
            <a href="mailto:filtritoba@gmail.com" class="btn-personalizar"><button>Personalizar mis Filtros</button></a>
        </div> 
    </article>
</section>

<section class="especiales wow animate__animated animate__bounceInRight">

    <article class="card-t-skvio">
        <div class="contentimg">   
            <a href="t-skvio.html" class="t-skavio"><img src="img/t-skvio.svg" width="260px" alt="filtros"></a>
        </div>
        <div class="contentext">
            <h3 class="title">T-SKVIO</h3>
            <p class="text">Un juego para escabiar y cagarte de risa con tus amigos!</p><br>
            <a href="t-skavio.html" class="btn-personalizar"><button>Visitar T-SKVIO</button></a>
        </div>
    </article>

    <article class="card-filtros3d">
        <a href="stickers.html" class="imgfiltro3d"><img src="img/elsensei.svg"  height="250px" alt="3D"></a>
        <button class="elsensei" data-modal-target="#modal">Comprar Semillas</button>
    </article>

<!-- POP UP CON INFORMACION DE CONTACTO A ELSENSEI SEMILLAS-->

    <div class="modal" id="modal">
        <div class="modal-header">
            <div class="title">¿Cultivas? <br> El Sensei tiene lo que necesitas</div>
            <button data-close-button class="close-button">&times;</button>
        </div>
        <div class="modal-body">
            <article class="card-instagram">
                <h3 class="title">Ir a Instagram de <br> El Sensei</h3> 
                <a href="https://www.instagram.com/elsenseiseeds/?hl=es-la" class="imgstickers"><img src="img/instasensei.svg" height="90px" alt="stickers"></a>
            </article>

            <article class="card-mail">
                <a href="" class="imgstickers"><img src="img/mailsensei.svg" height="90px" alt="stickers"></a>
                <h3 class="title">Pedir Catalogo al Mail</h3>
                <br>
                <a href="mailto:elsenseiseeds@gmail.com"><button type="submit" class="signup-input-submit">Escribir Email</button></a>
            </article>

        </div>
    </div>
    <div id="overlay"></div>

<!-- TERMINA POP UP CON INFO CONTACT ELSENSEI SEMILLAS-->

    <article class="card-specialsticker">
        <a href="stickers.html" class="imgstickers"><img src="img/specialsticker.svg" width="220px" alt="stickers"></a>
        <h3 class="title">Special Stickers</h3>
        
    </article>

</section>
</div>`;

class contenedorcards extends HTMLElement {
    constructor() {
        super();

        const cards = templateCards.content.cloneNode(true);
        this.appendChild(cards);
    }
}

window.customElements.define('template-cards', contenedorcards);