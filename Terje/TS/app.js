var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
console.log('animals.ts');
var Animals = (function () {
    function Animals() {
        this._animals = ['Karu', 'Kass', 'Hunt'];
        this._cacheDOM();
        this._bindEvents();
        this._render();
    }
    Animals.prototype._cacheDOM = function () {
        this._template = Helper.getHTMLTemplate("templates/animal-template.html");
        this._animalsModule = document.getElementById('animalsModule');
        this._button = this._animalsModule.getElementsByClassName('button').item(0);
        this._input = this._animalsModule.getElementsByTagName('input').item(0);
        this._list = this._animalsModule.getElementsByTagName('ul').item(0);
    };
    Animals.prototype._bindEvents = function () {
        this._button.addEventListener('click', this.addAnimal.bind(this));
    };
    Animals.prototype._render = function () {
        var _this = this;
        var animalsHTML = "";
        this._animals.forEach(function (value) {
            var animalHTML = Helper.parseHTMLString(_this._template, '{{name}}', value);
            animalsHTML += animalHTML;
        });
        this._list.innerHTML = animalsHTML;
    };
    Animals.prototype.showAnimals = function () {
        console.log(this._animals);
    };
    Animals.prototype.addAnimal = function (name) {
        var animalName = (typeof name === 'string') ? name : this._input.value;
        this._animals.push(animalName);
        this._render();
    };
    Animals.prototype.removeAnimal = function (index) {
        if (index === void 0) { index = 0; }
        var lastAnimal = this._animals.length - 1;
        if (lastAnimal === index)
            this._animals.pop();
        else if (lastAnimal > index && index >= 0) {
            this._animals.splice(index, 1);
        }
        this._render();
    };
    return Animals;
}());
var Helper;
(function (Helper) {
    function getParameterByName(name) {
        var url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
        var results = regex.exec(url);
        if (!results)
            return null;
        if (!results[2])
            return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
    Helper.getParameterByName = getParameterByName;
    function removeParams() {
        window.location.href = window.location.origin + window.location.hash;
    }
    Helper.removeParams = removeParams;
    function onParameterChange(callBack) {
        var currentPage = window.location.href;
        setInterval(function () {
            if (currentPage != window.location.href) {
                currentPage = window.location.href;
                callBack();
            }
        }, 500);
    }
    Helper.onParameterChange = onParameterChange;
    function formatEmails(className, splitter) {
        var emails = document.getElementsByClassName(className);
        for (var index = 0; index < emails.length; ++index) {
            var emailParts = emails.item(index).innerHTML.split(splitter);
            var email = emailParts[0] + '@' + emailParts[1];
            var link = '<a/href="mailto:' + email + '">' + email + '</a>';
            emails.item(index).outerHTML = link;
        }
    }
    Helper.formatEmails = formatEmails;
    function getHTMLTemplate(file) {
        var templateHTML = 'fail';
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            console.log(this.status);
            if (this.readyState === 4 && this.status === 200) {
                templateHTML = this.responseText;
            }
        };
        xmlHttp.open('GET', file, false);
        xmlHttp.send();
        return templateHTML;
    }
    Helper.getHTMLTemplate = getHTMLTemplate;
    function parseHTMLString(target, mustache, content) {
        return target.replace(mustache, content);
    }
    Helper.parseHTMLString = parseHTMLString;
})(Helper || (Helper = {}));
console.log('page.ts');
var Page = (function () {
    function Page() {
    }
    Page.prototype._cacheDOM = function () { };
    Page.prototype._bindEvents = function () { };
    Page.prototype._render = function () { };
    return Page;
}());
var EventPage = (function (_super) {
    __extends(EventPage, _super);
    function EventPage() {
        var _this = _super.call(this) || this;
        _this._participant = [{ name: 'Juku Salu', joined: 'Yes' },
            { name: 'Peeter Salu', joined: 'Yes' },
            { name: 'Malle Puu', joined: 'No' }];
        _this._cacheDOM();
        _this._bindEvents();
        _this._render();
        return _this;
    }
    EventPage.prototype._cacheDOM = function () {
        this._template = Helper.getHTMLTemplate("templates/event-template.html");
        this._peopleModule = document.querySelector('main');
        this._peopleModule.outerHTML = this._template;
        this._peopleModule = document.getElementById('event');
        this._microTemplate = this._peopleModule.querySelector('script').innerText;
        this._list = this._peopleModule.querySelector('ul');
    };
    EventPage.prototype._bindEvents = function () {
        this._list.addEventListener('click', this._deletePerson.bind(this));
    };
    EventPage.prototype._render = function () {
        var _this = this;
        this._participant = JSON.parse(localStorage.getItem('people'));
        var people = "";
        this._participant.forEach(function (value) {
            var parsePass1 = Helper.parseHTMLString(_this._microTemplate, '{{name}}', value.name);
            var parsePass2 = Helper.parseHTMLString(parsePass1, '{{joined}}', value.joined);
            people += parsePass2;
        });
        this._list.innerHTML = people;
    };
    EventPage.prototype._deletePerson = function (e) {
        this._participant;
        if (e.target && e.target.nodeName === 'BUTTON') {
            var element = e.target.parentElement;
            var parent_1 = element.parentElement;
            var index = Array.prototype.indexOf.call(parent_1.children, element);
            this._participant.splice(index, 1);
            localStorage.setItem('people', JSON.stringify(this._participant));
            this._render();
            //(e.target as Element).parentElement.outerHTML = '';
            //this._participanr.slice()
        }
    };
    return EventPage;
}(Page));
/// <reference path="helper.ts" />
/// <reference path="page.ts" />
var Gallery = (function (_super) {
    __extends(Gallery, _super);
    function Gallery() {
        var _this = _super.call(this) || this;
        _this._pictures = [{ title: 'talv', description: 'Üks auto', link: 'talv.jpg' },
            { title: 'Kevad', description: 'Üks taevas', link: 'kevad.jpg' },
            { title: 'Suvi', description: 'Üks Taevas2', link: 'juuli.jpg' },
            { title: 'Sügis', description: 'Üks Tilgad', link: 'sygis.jpg' }];
        _this._cacheDOM();
        _this._bindEvents();
        _this._render();
        return _this;
    }
    Gallery.prototype._cacheDOM = function () {
        this._template = Helper.getHTMLTemplate("templates/gallery-template.html");
        this._picsModule = document.querySelector('main');
        this._picsModule.outerHTML = this._template;
        this._picsModule = document.getElementById('gallery');
        this._microTemplate = this._picsModule.querySelector('script').innerText;
        this._list = this._picsModule.querySelector('#images');
    };
    Gallery.prototype._bindEvents = function () { };
    Gallery.prototype._render = function () {
        var _this = this;
        var pics = "";
        this._pictures.forEach(function (value) {
            var parsePass1 = Helper.parseHTMLString(_this._microTemplate, '{{caption}}', value.title);
            var parsePass2 = Helper.parseHTMLString(parsePass1, '{{alternative}}', value.description);
            var parsePass3 = Helper.parseHTMLString(parsePass2, '{{source}}', 'images/' + value.link);
            pics += parsePass3;
        });
        this._list.innerHTML = pics;
    };
    return Gallery;
}(Page));
/// <reference path="helper.ts" />
var Navigation = (function () {
    function Navigation(navs) {
        this._navs = navs;
        this._cacheDOM();
        this._bindEvents();
        this._render();
    }
    Navigation.prototype._cacheDOM = function () {
        this._template = Helper.getHTMLTemplate("templates/nav-template.html");
        this._navModule = document.getElementById('mainMenu');
        this._navModule.outerHTML = this._template;
        this._navModule = document.getElementById('mainMenu');
        this._microTemplate = this._navModule.querySelector('script').innerText;
        this._list = this._navModule.getElementsByTagName('ul').item(0);
    };
    Navigation.prototype._bindEvents = function () {
        window.addEventListener('hashchange', this._urlChanged.bind(this));
    };
    Navigation.prototype._render = function () {
        var _this = this;
        var navsLinks = "";
        this._navs.forEach(function (value) {
            var parsePass1 = Helper.parseHTMLString(_this._microTemplate, '{{name}}', value.name);
            var parsePass2 = Helper.parseHTMLString(parsePass1, '{{link}}', value.link);
            var setActive = (window.location.hash === value.link) ? ' active' : '';
            var parsePass3 = Helper.parseHTMLString(parsePass2, '{{active}}', setActive);
            navsLinks += parsePass3;
        });
        this._list.innerHTML = navsLinks;
    };
    Navigation.prototype._urlChanged = function (e) {
        this._render();
    };
    return Navigation;
}());
/// <reference path="helper.ts" />
/// <reference path="navigation.ts" />
/// <reference path="gallery.ts" />
/// <reference path="eventPages.ts" />
/// <reference path="animals.ts" />
console.log('main.ts');
var App = (function () {
    function App() {
        this._navLinks = [{ name: 'Pealeht', link: '#home' },
            { name: 'Galerii', link: '#gallery' },
            { name: 'Üritus', link: '#event' }];
        this._bindEvents();
        this._setup();
    }
    App.prototype._bindEvents = function () {
        window.addEventListener('hashchange', this._urlChanged.bind(this));
    };
    App.prototype._setup = function () {
        var _this = this;
        if (window.location.hash === '')
            window.location.hash = this._navLinks[0].link;
        var nav = new Navigation(this._navLinks);
        this._checkParams();
        this._urlChanged();
        var animals = new Animals();
        animals.showAnimals();
        animals.addAnimal('Lehm');
        animals.showAnimals();
        animals.removeAnimal(1);
        animals.showAnimals();
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = console).log;
                        return [4 /*yield*/, Helper.getHTMLTemplate('animal-template.htm')];
                    case 1:
                        _b.apply(_a, [_c.sent()]);
                        return [2 /*return*/];
                }
            });
        }); })();
    };
    App.prototype._urlChanged = function () {
        var _this = this;
        Helper.formatEmails('at-email', '(ät)');
        this._navLinks.forEach(function (value) {
            if (window.location.hash === value.link) {
                if (value.link === _this._navLinks[0].link)
                    _this.page = new Gallery(); //
                else if (value.link === _this._navLinks[1].link)
                    _this.page = new Gallery();
                else if (value.link === _this._navLinks[2].link)
                    _this.page = new EventPage(); //
                console.log(value.link);
            }
        });
    };
    App.prototype._checkParams = function () {
        var name = Helper.getParameterByName('name');
        var joined = Helper.getParameterByName('joined');
        if (name && joined) {
            Helper.removeParams();
            var people = JSON.parse(localStorage.getItem('people'));
            if (!people) {
                people = [];
            }
            var person = { name: name, joined: joined };
            people.push(person);
            console.log(people);
            localStorage.setItem('people', JSON.stringify(people));
            //alert(name)
        }
    };
    return App;
}());
var app = new App();
console.log('Hello');
//# sourceMappingURL=app.js.map