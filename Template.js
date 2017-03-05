

class Template {
    
    constructor(title) {
        this.header = document.createElement("header");
        this.header.innerHTML = this.getHeader(title);
        
        this.nav = document.createElement("nav");
        this.nav.innerHTML = this.getNavigation();
        
        this.bodier = document.createElement("bodier");

        this.footer = document.createElement("footer");
        this.footer.innerHTML = this.getFooter();
        
        this.skeleton = document.createElement("div");
        this.skeleton.appendChild(this.header);
        this.skeleton.appendChild(this.nav);
        this.skeleton.appendChild(this.bodier);
        this.skeleton.appendChild(this.footer);
        
        this.setContentElement(this.getBackground2());
    }

    setContentElement(contentElement) {
        while (this.bodier.lastChild) {
            this.bodier.removeChild(this.bodier.lastChild);
        }
        this.bodier.appendChild(contentElement);
    }

    apply(container) {
        container.innerHTML = this.skeleton.innerHTML;
    }


    getHeader(title) {
        var str  = ''
        str += '<span id="HOME_logo"><a href="index.html"><img src="img/home.png" alt="home" height="40px"/></a></span>'
        str += '<h1>'+title+'</h1>'
        return str

// <div id="PROF_space"> 
// <div id="prof_page"> professional page : </div>
// <div id="ISIR_logo"><a href="http://people.isir.upmc.fr/salini" target="_blank"><img src="img/logo_isir_white.png" alt="Joseph Salini ISIR page" height="40px"/></a></div>
// </div>

    }

    getNavigation() {
        var str  = ''
        str += '<table >'
        str += this.getNavElement('Resume.html', 'Resume');
        str += this.getNavElement('Thesis.html', 'Thesis');
        str += this.getNavElement('Projects.html', 'Projects/Interviews');
        str += this.getNavElement('webPlayer.html', 'webPlayer');
        str += this.getNavElement('XDE.html', 'XDE');
        str += this.getNavElement('Arboris.html', 'Arboris');
        str += this.getNavElement('Tools.html', 'Tools for thesis');
        str += this.getNavNoElement();
        str += this.getNavNoElement();
        str += this.getNavElement('Contact.html', 'Contact');
        return str;
    }
    
    getBackground2() {
        var bgElement = document.createElement("div");
        bgElement.className="background_icub";
        bgElement.innerHTML = this.getBackground();
        return bgElement;
    }
    
    getBackground() {
        return '<img  src="img/back_title_icub.png" height="100%" alt="icub background" />'
    }
    
    getFooter() {
        var str  = ''
        str += '<p id="footer_description">'
        str += '<span class="date">2 Mar 2017</span> <strong>Joseph Salini</strong>'
        str += '</p>'
        return str;
    }
    
    getNavElement(h, e) {
        return '<tr><td> <h2> <a href="'+h+'">'+e+'</a> </h2> </td> </tr>'
    }
    
    getNavNoElement() {
        return '<tr><td> <br>  </td></tr>'
    }

}
