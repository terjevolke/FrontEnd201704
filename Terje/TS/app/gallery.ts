/// <reference path="helper.ts" />
/// <reference path="page.ts" />

interface Picture{
    title: string,
    description:string,
    link: string
}
class Gallery extends Page{
    constructor(){
        super()
        this._cacheDOM();
        this._bindEvents();
        this._render();
    }
    private _pictures : Picture[] = [{title: 'talv', description: 'Üks auto', link: 'talv.jpg'},
    {title: 'Kevad', description: 'Üks taevas', link: 'kevad.jpg'},
    {title: 'Suvi', description: 'Üks Taevas2', link: 'juuli.jpg'},
    {title: 'Sügis', description: 'Üks Tilgad', link: 'sygis.jpg'}];
    private _template : string;
    private _microTemplate : string;
    private _picsModule : Element;
    private _list : Element;

        protected _cacheDOM(){
                    this._template = Helper.getHTMLTemplate("templates/gallery-template.html");
                    this._picsModule = document.querySelector('main');
                    this._picsModule.outerHTML = this._template;
                    this._picsModule = document.getElementById('gallery');
                    this._microTemplate = this. _picsModule.querySelector ('script').innerText;
                    this._list = this._picsModule.querySelector('#images');

        }
        
        protected _bindEvents(){}
       
         protected _render(){
         let pics ="";
         this._pictures.forEach(
             (value: Picture)=>{
                    let parsePass1 = Helper.parseHTMLString(this._microTemplate, '{{caption}}',value.title);
                    let parsePass2 = Helper.parseHTMLString(parsePass1, '{{alternative}}',value.description);
                    let parsePass3 = Helper.parseHTMLString(parsePass2, '{{source}}', 'images/'+ value.link);
                    pics += parsePass3;
             });
         this._list.innerHTML =pics;
        }
    }
