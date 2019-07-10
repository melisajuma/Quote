(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-quote></app-quote>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>dashboard works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/quote-details/quote-details.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/quote-details/quote-details.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n<body>\n  \n  <p>Published  By {{quote.publisher}}</p>\n  <p >Written By {{quote.name}}</p>\n  <p>created on {{quote.completeDate|date}}</p>\n\n</body>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/quote-form/quote-form.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/quote-form/quote-form.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.8.1/css/all.css\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12 text-center\">\n            <form (ngSubmit)='submitQuote()' #quoteForm='ngForm' id=\"form\">\n                <div class=\"form-group \">\n\n                    <input type=\"text\" required class=\"form-control\" id=\"author\" [(ngModel)]=\"newQuote.name\" name=\"name\" #name=\"ngModel\" placeholder=\"Enter Your Name...\"\n                        required>\n                    <div [hidden]=\"!name.valid || !name.pristine\" class=\"alert alert-danger\">\n                        <p> enter name</p>\n                    </div>\n                </div>\n                <div class=\"form-group \">\n                    <input type=\"text\" required class=\"form-control text-center\" id=\"publisher\" [(ngModel)]=\"newQuote.publisher\" name=\"publisher\"\n                        #publisher=\"ngModel\" placeholder=\"Publisher's name...\" required>\n                    <div [hidden]=\"!name.valid || !name.pristine\" class=\"alert alert-danger\">\n                        <p> enter publisher name</p>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <textarea class=\"form-control\" id=\"description\" rows=\"4\" [(ngModel)]=\"newQuote.description\" name=\"description\" #description=\"ngModel\"\n                        placeholder=\"Enter Quote Here\" required></textarea>\n                    <div [hidden]=\"!description.valid || !description.pristine\" class=\"alert alert-danger\">\n                        <p> Description is Required</p>\n\n                    </div>\n\n                </div>\n                <div class=\"form-group col-md-6\">\n                    <input type='date' class=\"form-control\" id=\"complete\" [(ngModel)]=\"newQuote.completeDate\" name=\"completeDate\" #completeDate=\"ngModel\"\n                        placeholder=\"Date\" required>\n                    <div [hidden]=\"!completeDate.valid || completeDate.pristine\" class=\"alert alert-danger\">\n                        <p> Complete Date is Required</p>\n                    </div>\n\n                </div>\n                <button [disabled]=\"!quoteForm.form.valid\" id=\"btn\" type=\"submit\" class=\"btn btn-success btn-lg\"><i class=\"\tfa fa-plus-square\"></i></button>\n            </form>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/quote/quote.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/quote/quote.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.8.1/css/all.css\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n\n\n<div class=container>\n  <nav class=\"navbar navbar-light justify-content-between text-center\">\n    <div class=\"text-center main-1\">\n      <h1> Your favorite {{ title }} Web</h1>\n    </div>\n  </nav>\n  <app-quote-form (addQuote)=\"addNewQuote($event)\"></app-quote-form>\n  <div *ngFor=\"let quote of quotes; let i = index\">\n    <div id=\"con-1\">\n      <div id=\"{{i}}\">\n        <p class=\"top\">{{quote.description}}</p>\n        <p>Posted {{ quote.completeDate |dateCount }} days ago</p>\n        <a id=\"like\" (click)=\"like(i)\">\n          <span class=\"glyphicon glyphicon-thumbs-up\"></span>\n        </a>\n        {{quote.upvote}}\n\n        <a id=\"unlike\" (click)=\"unlike(i)\">\n          <span class=\"glyphicon glyphicon-thumbs-down\"></span>\n        </a>\n        {{quote.downvote}}\n        <br>\n        <div id=\"del\">\n          <a (click)=\"deleteQuote($event, i)\">\n            <span class=\"glyphicon glyphicon-trash\"></span>\n          </a>\n        </div>\n\n      </div>\n      <br>\n      <div class=\"button\">\n        <button class=\"btn btn-success\" (click)=\"toggleDetails(i)\"><i class=\"\tfa fa-plus-square\"></i> </button>\n      </div>\n      <div *ngIf=\"quote.showDescription\">\n        <app-quote-details [quote]=\"quote\" (isComplete)=\"deleteQuote($event, i)\"></app-quote-details>\n      </div>\n    </div>\n  </div>\n  <footer>\n    <div class=\"footer-copyright text-center py-3\">\n      <h4>Copyright © 2019:</h4>\n      <p>Melisa JUma</p>\n    </div>\n\n  </footer>\n</div>"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'quotes';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _quote_quote_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quote/quote.component */ "./src/app/quote/quote.component.ts");
/* harmony import */ var _quote_details_quote_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./quote-details/quote-details.component */ "./src/app/quote-details/quote-details.component.ts");
/* harmony import */ var _date_count_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./date-count.pipe */ "./src/app/date-count.pipe.ts");
/* harmony import */ var _quote_form_quote_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./quote-form/quote-form.component */ "./src/app/quote-form/quote-form.component.ts");
/* harmony import */ var _highlight_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./highlight.directive */ "./src/app/highlight.directive.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _quote_quote_component__WEBPACK_IMPORTED_MODULE_6__["QuoteComponent"],
            _quote_details_quote_details_component__WEBPACK_IMPORTED_MODULE_7__["QuoteDetailsComponent"],
            _date_count_pipe__WEBPACK_IMPORTED_MODULE_8__["DateCountPipe"],
            _quote_form_quote_form_component__WEBPACK_IMPORTED_MODULE_9__["QuoteFormComponent"],
            _highlight_directive__WEBPACK_IMPORTED_MODULE_10__["HighlightDirective"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/date-count.pipe.ts":
/*!************************************!*\
  !*** ./src/app/date-count.pipe.ts ***!
  \************************************/
/*! exports provided: DateCountPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateCountPipe", function() { return DateCountPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DateCountPipe = class DateCountPipe {
    transform(value) {
        let today = new Date();
        let todayWithNoTime = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        var dateDifference = Math.abs(value - todayWithNoTime);
        const secondsInADay = 86400;
        var dateDifferenceSeconds = dateDifference * 0.001;
        var dateCounter = dateDifferenceSeconds / secondsInADay;
        if (dateCounter >= 1 && value > todayWithNoTime) {
            return dateCounter;
        }
        else {
            return 0;
        }
    }
};
DateCountPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'dateCount'
    })
], DateCountPipe);



/***/ }),

/***/ "./src/app/highlight.directive.ts":
/*!****************************************!*\
  !*** ./src/app/highlight.directive.ts ***!
  \****************************************/
/*! exports provided: HighlightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightDirective", function() { return HighlightDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HighlightDirective = class HighlightDirective {
    constructor(el) {
        this.el = el;
    }
    highlightElement() {
        this.el.nativeElement.style.backgroundColor = 'red';
    }
    ngOnInit() {
        this.highlightElement();
    }
};
HighlightDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
HighlightDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appHighlight]'
    })
], HighlightDirective);



/***/ }),

/***/ "./src/app/quote-details/quote-details.component.css":
/*!***********************************************************!*\
  !*** ./src/app/quote-details/quote-details.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n    color: rgb(140, 197, 189);\n    background-color: grey;\n    text-align: center;\n}\np{\n    color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVvdGUtZGV0YWlscy9xdW90ZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvcXVvdGUtZGV0YWlscy9xdW90ZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xuICAgIGNvbG9yOiByZ2IoMTQwLCAxOTcsIDE4OSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5we1xuICAgIGNvbG9yOiAjZmZmO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/quote-details/quote-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/quote-details/quote-details.component.ts ***!
  \**********************************************************/
/*! exports provided: QuoteDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteDetailsComponent", function() { return QuoteDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let QuoteDetailsComponent = class QuoteDetailsComponent {
    constructor() {
        this.isComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    highQuote() {
        this.quote.highlightQuote = !this.quote.highlightQuote;
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QuoteDetailsComponent.prototype, "quote", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], QuoteDetailsComponent.prototype, "isComplete", void 0);
QuoteDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quote-details',
        template: __webpack_require__(/*! raw-loader!./quote-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/quote-details/quote-details.component.html"),
        styles: [__webpack_require__(/*! ./quote-details.component.css */ "./src/app/quote-details/quote-details.component.css")]
    })
], QuoteDetailsComponent);



/***/ }),

/***/ "./src/app/quote-form/quote-form.component.css":
/*!*****************************************************!*\
  !*** ./src/app/quote-form/quote-form.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Black+And+White+Picture&display=swap');\n@import url(\"https://fonts.googleapis.com/css?family=Black+And+White+Picture|Yesteryear&display=swap\");\n@import url('https://fonts.googleapis.com/css?family=Indie+Flower&display=swap');\n*{\n    font-family: 'Indie Flower', cursive;\n}\n#form{\n    width: 100%;\n    \n    font-family: 'Indie Flower', cursive;\n}\n#form input,#form textarea{\n    width: 50%;\n    \n}\ninput{\n    left: 50%;\n}\n@media only screen and (max:width= 450px){\n    #form{\n        width: 100%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVvdGUtZm9ybS9xdW90ZS1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkZBQTJGO0FBQzNGLHNHQUFzRztBQUN0RyxnRkFBZ0Y7QUFFaEY7SUFDSSxvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLFdBQVc7O0lBRVgsb0NBQW9DO0FBQ3hDO0FBR0E7SUFDSSxVQUFVOztBQUVkO0FBQ0E7SUFDSSxTQUFTO0FBQ2I7QUFDQTtJQUNJO1FBQ0ksV0FBVztJQUNmO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9xdW90ZS1mb3JtL3F1b3RlLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QmxhY2srQW5kK1doaXRlK1BpY3R1cmUmZGlzcGxheT1zd2FwJyk7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1CbGFjaytBbmQrV2hpdGUrUGljdHVyZXxZZXN0ZXJ5ZWFyJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9SW5kaWUrRmxvd2VyJmRpc3BsYXk9c3dhcCcpO1xuXG4qe1xuICAgIGZvbnQtZmFtaWx5OiAnSW5kaWUgRmxvd2VyJywgY3Vyc2l2ZTtcbn1cbiNmb3Jte1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIFxuICAgIGZvbnQtZmFtaWx5OiAnSW5kaWUgRmxvd2VyJywgY3Vyc2l2ZTtcbn1cblxuXG4jZm9ybSBpbnB1dCwjZm9ybSB0ZXh0YXJlYXtcbiAgICB3aWR0aDogNTAlO1xuICAgIFxufVxuaW5wdXR7XG4gICAgbGVmdDogNTAlO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4OndpZHRoPSA0NTBweCl7XG4gICAgI2Zvcm17XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/quote-form/quote-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/quote-form/quote-form.component.ts ***!
  \****************************************************/
/*! exports provided: QuoteFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteFormComponent", function() { return QuoteFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _quote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../quote */ "./src/app/quote.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let QuoteFormComponent = class QuoteFormComponent {
    constructor() {
        this.newQuote = new _quote__WEBPACK_IMPORTED_MODULE_1__["Quote"](0, "", "", "", new Date(), 0, 0);
        this.addQuote = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    submitQuote() {
        this.addQuote.emit(this.newQuote);
        this.newQuote = new _quote__WEBPACK_IMPORTED_MODULE_1__["Quote"](0, "", "", "", new Date(), 0, 0);
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
], QuoteFormComponent.prototype, "addQuote", void 0);
QuoteFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-quote-form',
        template: __webpack_require__(/*! raw-loader!./quote-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/quote-form/quote-form.component.html"),
        styles: [__webpack_require__(/*! ./quote-form.component.css */ "./src/app/quote-form/quote-form.component.css")]
    })
], QuoteFormComponent);



/***/ }),

/***/ "./src/app/quote.ts":
/*!**************************!*\
  !*** ./src/app/quote.ts ***!
  \**************************/
/*! exports provided: Quote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quote", function() { return Quote; });
class Quote {
    constructor(id, description, name, publisher, completeDate, upvote, downvote) {
        this.id = id;
        this.description = description;
        this.name = name;
        this.publisher = publisher;
        this.completeDate = completeDate;
        this.upvote = upvote;
        this.downvote = downvote;
        this.showDescription = false;
        this.highlightQuote = false;
    }
}
Quote.ctorParameters = () => [
    { type: Number },
    { type: String },
    { type: String },
    { type: String },
    { type: Date },
    { type: Number },
    { type: Number }
];


/***/ }),

/***/ "./src/app/quote/quote.component.css":
/*!*******************************************!*\
  !*** ./src/app/quote/quote.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Black+And+White+Picture&display=swap');\n@import url(\"https://fonts.googleapis.com/css?family=Black+And+White+Picture|Yesteryear&display=swap\");\n@import url('https://fonts.googleapis.com/css?family=Indie+Flower&display=swap');\nnav{\n    color: white+6;\n    font-family:'Indie Flower', cursive;\n    margin-bottom:5%;\n}\nnav img{\n    color: #fff;\n}\nfooter{\n    color: #fff;\n    font-size: 20px;\n    font-family: 'Indie Flower', cursive;\n}\n#con-1{\n    background-color:rgba(26, 27, 26, 0.685);\n    margin-top: 5%;\n    font-family:'Indie Flower', cursive;\n    color: #fff;\n    font-weight: 280;\n    font-size: 20px;\n}\nnav img{\n    font-family: 'Indie Flower', cursive;\n}\n@media only screen and (max:width= 450px){\n    #con-1{\n        width: 100%;\n    }\n}\n#like, #unlike, #delete{\n    padding: 5%;\n    color: white;\n}\n#del{\n    padding-top: 3%;\n    margin-left: 7%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVvdGUvcXVvdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyRkFBMkY7QUFDM0Ysc0dBQXNHO0FBQ3RHLGdGQUFnRjtBQUVoRjtJQUNJLGNBQWM7SUFDZCxtQ0FBbUM7SUFDbkMsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSx3Q0FBd0M7SUFDeEMsY0FBYztJQUNkLG1DQUFtQztJQUNuQyxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG9DQUFvQztBQUN4QztBQUVBO0lBQ0k7UUFDSSxXQUFXO0lBQ2Y7QUFDSjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7SUFDZixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvcXVvdGUvcXVvdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QmxhY2srQW5kK1doaXRlK1BpY3R1cmUmZGlzcGxheT1zd2FwJyk7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1CbGFjaytBbmQrV2hpdGUrUGljdHVyZXxZZXN0ZXJ5ZWFyJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9SW5kaWUrRmxvd2VyJmRpc3BsYXk9c3dhcCcpO1xuXG5uYXZ7XG4gICAgY29sb3I6IHdoaXRlKzY7XG4gICAgZm9udC1mYW1pbHk6J0luZGllIEZsb3dlcicsIGN1cnNpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTo1JTtcbn1cbm5hdiBpbWd7XG4gICAgY29sb3I6ICNmZmY7XG59XG5mb290ZXJ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnSW5kaWUgRmxvd2VyJywgY3Vyc2l2ZTtcbn1cbiNjb24tMXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjYsIDI3LCAyNiwgMC42ODUpO1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIGZvbnQtZmFtaWx5OidJbmRpZSBGbG93ZXInLCBjdXJzaXZlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiAyODA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxubmF2IGltZ3tcbiAgICBmb250LWZhbWlseTogJ0luZGllIEZsb3dlcicsIGN1cnNpdmU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heDp3aWR0aD0gNDUwcHgpe1xuICAgICNjb24tMXtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuI2xpa2UsICN1bmxpa2UsICNkZWxldGV7XG4gICAgcGFkZGluZzogNSU7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuI2RlbHtcbiAgICBwYWRkaW5nLXRvcDogMyU7XG4gICAgbWFyZ2luLWxlZnQ6IDclO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/quote/quote.component.ts":
/*!******************************************!*\
  !*** ./src/app/quote/quote.component.ts ***!
  \******************************************/
/*! exports provided: QuoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteComponent", function() { return QuoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _quote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quote */ "./src/app/quote.ts");



let QuoteComponent = class QuoteComponent {
    constructor() {
        this.upvote = 0;
        this.downvote = 0;
        this.title = 'Quotes';
        this.quotes = [
            new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](1, 'Choose a job you love, and you will never have to work a day in your life. ', 'Chuck', 'Palahniuk', new Date(2017, 6, 10), 0, 0),
        ];
    }
    addNewQuote(quote) {
        let quoteLength = this.quotes.length;
        quote.id = quoteLength + 1;
        quote.completeDate = new Date(quote.completeDate);
        this.quotes.unshift(quote);
    }
    ;
    deleteQuote(isComplete, index) {
        if (isComplete) {
            let toDelete = confirm('Do you really want  to delete this quote?');
            if (toDelete) {
                this.quotes.splice(index, 1);
            }
        }
    }
    toggleDetails(index) {
        this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }
    like(index) {
        this.quotes[index].upvote += 1;
        // console.log(1);
    }
    unlike(index) {
        this.quotes[index].downvote += 1;
    }
    completeQuote(isComplete, index) {
        if (isComplete) {
            this.quotes.splice(index, 1);
        }
    }
    ngOnInit() {
    }
};
QuoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quote',
        template: __webpack_require__(/*! raw-loader!./quote.component.html */ "./node_modules/raw-loader/index.js!./src/app/quote/quote.component.html"),
        styles: [__webpack_require__(/*! ./quote.component.css */ "./src/app/quote/quote.component.css")]
    })
], QuoteComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/moringa/Documents/moringa-school-projects/quotes-web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map