

class Template {
    
    constructor(title) {
        this.header = document.createElement("header");
        this.header.appendChild(this.getHeaderLogo());
        this.header.appendChild(this.getHeaderTitle(title));
        
        this.nav = document.createElement("nav");
        this.nav.innerHTML = this.getNavigation();
        
        this.bodier = document.createElement("bodier");

        this.footer = document.createElement("footer");
        this.footer.appendChild(this.getFooter());
        
        this.skeleton = document.createElement("div");
        this.skeleton.appendChild(this.header);
        this.skeleton.appendChild(this.nav);
        this.skeleton.appendChild(this.bodier);
        this.skeleton.appendChild(this.footer);
        
        this.setContentElement(this.getBackgroundImg());
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


    getHeaderLogo() {
        var span = document.createElement("span");
        span.id = "HOME_logo";
        
        var a = document.createElement("a");
        a.setAttribute("href", "index.html");
        
        var img = document.createElement("img");
        img.setAttribute("src", "img/home.png");
        img.setAttribute("alt", "home");
        img.setAttribute("height", "40px");

        span.appendChild(a);
        a.appendChild(img);
        
        return span;
    }
    
    getHeaderTitle(title) {
        var h1 = document.createElement("h1");
        h1.innerHTML = title;
        return h1;
    }

    getNavigation() {
        var str  = ''
        str += '<table>'
        str += this.getNavElement('Resume.html', 'Resume');
        str += this.getNavElement('Thesis.html', 'Thesis');
        str += this.getNavElement('Interviews.html', 'Interviews');
        str += this.getNavElement('Projects.html', 'Projects');
        str += this.getNavElement('webPlayer.html', 'webPlayer');
        str += this.getNavElement('XDE.html', 'XDE');
        str += this.getNavElement('Arboris.html', 'Arboris');
        str += this.getNavElement('Tools.html', 'Tools/Tricks');
        str += this.getNavNoElement();
        str += this.getNavNoElement();
        str += this.getNavElement('Contact.html', 'Contact');
        return str;
    }
    
    getBackgroundImg() {
        var bgElement = document.createElement("div");
        bgElement.className="background_icub";
        
        var img = document.createElement("img");
        img.setAttribute("src", "img/back_title_icub.png");
        img.setAttribute("height", "100%");
        img.setAttribute("alt", "icub background");
        
        bgElement.appendChild(img);
        return bgElement;
    }
    
    getFooter() {
        var p = document.createElement("p");
        p.id = "footer_description";
        
        var span = document.createElement("span");
        span.setAttribute("class", "date");
        span.innerHTML = "5 Mar 2017";
        
        var strong = document.createElement("strong");
        strong.innerHTML = "Joseph Salini";
        
        p.appendChild(span);
        p.appendChild(strong);
        
        return p;
    }
    
    getNavElement(h, e) {
        return '<tr><td> <h2> <a href="'+h+'">'+e+'</a> </h2> </td> </tr>'
    }
    
    getNavNoElement() {
        return '<tr><td> <br>  </td></tr>'
    }

}
