/// <reference path='helper.ts' /> 
/// <reference path='navigation.ts' /> 
/// <reference path='gallery.ts' /> 
/// <reference path='animals.ts' /> 
console.log('main.ts');

class App {
    constructor(){
        this._bindEvents();
        this._setup();
    }
    private _navLinks : NavLink[] = [{name:'Pealeht', link:'#home'},
                                    {name:'Galerii', link:'#gallery'},
                                    {name:'Üritus', link:'#event'}]; 
    private page : Page;
    _bindEvents(){
        window.addEventListener('hashchange', this._urlChanged.bind(this));
    }
    _setup(){
        if(window.location.hash === '')
            window.location.hash = this._navLinks[0].link;
        let nav = new Navigation(this._navLinks);
         this._urlChanged();
        let animals = new Animals();
        /*
            animals.showAnimals();
            animals.addAnimal('Lehm');
            animals.showAnimals();
            animals.removeAnimal(1);
            animals.showAnimals();
            (async () => {
                console.log( await Helper.getHTMLTemplate('animal-template.htm'));
            })();
        */
    }
    _urlChanged(){
        this._navLinks.forEach(
            (value: NavLink)=>{
                if(window.location.hash === value.link){
                    if(value.link === this._navLinks[0].link)
                        this.page = new Gallery();//
                    else if(value.link === this._navLinks[1].link)
                        this.page = new Gallery();
                    else if(value.link === this._navLinks[2].link)
                        this.page = new Gallery();//

                    console.log(value.link);
                }
            }
        );
    }
}
let app = new App();


console.log('Hello');