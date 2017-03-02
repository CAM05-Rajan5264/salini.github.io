

class Template {
    static getHeader(title) {
        var str  = ''
        str += '<span id="HOME_logo"><a href="index.html"><img src="img/home.png" alt="home" height="40px"/></a></span>'
        str += '<h1>'+title+'</h1>'
        return str

// <div id="PROF_space"> 
// <div id="prof_page"> professional page : </div>
// <div id="ISIR_logo"><a href="http://people.isir.upmc.fr/salini" target="_blank"><img src="img/logo_isir_white.png" alt="Joseph Salini ISIR page" height="40px"/></a></div>
// </div>

    }

    static getNavigation() {
        var str  = ''
        str += '<table >'
        str += this.getNavElement('Resume.html', 'Resume');
        str += this.getNavElement('Thesis.html', 'Thesis');
        str += this.getNavElement('Arboris.html', 'Arboris');
        str += this.getNavElement('XDE.html', 'XDE');
        str += this.getNavElement('Tools.html', 'Tools for thesis');
        str += this.getNavElement('Projects.html', 'Projects');
        str += this.getNavElement('webPlayer.html', 'webPlayer');
        str += this.getNavNoElement();
        str += this.getNavNoElement();
        str += this.getNavElement('Contact.html', 'Contact');
        return str;
    }
    
    static getBackground() {
        return '<img  src="img/back_title_icub.png" height="100%" alt="icub background" />'
    }
    
    static getFooter() {
        var str  = ''
        str += '<p id="footer_description">'
        str += '<span class="date">2 Mar 2017</span> <strong>Joseph Salini</strong>'
        str += '</p>'
        return str;
    }
    
    static getNavElement(h, e) {
        return '<tr><td> <h2> <a href="'+h+'">'+e+'</a> </h2> </td> </tr>'
    }
    
    static getNavNoElement() {
        return '<tr><td> <br>  </td></tr>'
    }

}
