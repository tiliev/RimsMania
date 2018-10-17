(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <app-navigation></app-navigation>\n\n  <div id=\"content\">\n    <router-outlet></router-outlet>\n  </div>\n\n  <app-footer></app-footer>\n</div>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _authentication_auth_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./authentication/auth.module */ "./src/app/authentication/auth.module.ts");
/* harmony import */ var _rims_rims_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rims/rims.module */ "./src/app/rims/rims.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _interceptors_kinvey_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./interceptors/kinvey.interceptor */ "./src/app/interceptors/kinvey.interceptor.ts");
/* harmony import */ var _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./interceptors/error.interceptor */ "./src/app/interceptors/error.interceptor.ts");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _cart_cart_details_cart_details_cart_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cart/cart-details/cart-details/cart-details.component */ "./src/app/cart/cart-details/cart-details/cart-details.component.ts");
/* harmony import */ var _orders_orders_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./orders/orders.service */ "./src/app/orders/orders.service.ts");
/* harmony import */ var _orders_all_orders_all_orders_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./orders/all-orders/all-orders.component */ "./src/app/orders/all-orders/all-orders.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./contacts/contacts.component */ "./src/app/contacts/contacts.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_10__["NavigationComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _cart_cart_details_cart_details_cart_details_component__WEBPACK_IMPORTED_MODULE_15__["CartDetailsComponent"],
                _orders_all_orders_all_orders_component__WEBPACK_IMPORTED_MODULE_17__["AllOrdersComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_18__["NotFoundComponent"],
                _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_19__["ContactsComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_20__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ng2_validation__WEBPACK_IMPORTED_MODULE_14__["CustomFormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(),
                _authentication_auth_module__WEBPACK_IMPORTED_MODULE_7__["AuthModule"],
                _rims_rims_module__WEBPACK_IMPORTED_MODULE_8__["RimsModule"]
            ],
            providers: [
                _orders_orders_service__WEBPACK_IMPORTED_MODULE_16__["OrdersService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _interceptors_kinvey_interceptor__WEBPACK_IMPORTED_MODULE_12__["KinveyInterceptor"],
                    multi: true
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_13__["ErrorInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _authentication_signin_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication/signin/signin.component */ "./src/app/authentication/signin/signin.component.ts");
/* harmony import */ var _authentication_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication/signup/signup.component */ "./src/app/authentication/signup/signup.component.ts");
/* harmony import */ var _authentication_account_account_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authentication/account/account.component */ "./src/app/authentication/account/account.component.ts");
/* harmony import */ var _cart_cart_details_cart_details_cart_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart/cart-details/cart-details/cart-details.component */ "./src/app/cart/cart-details/cart-details/cart-details.component.ts");
/* harmony import */ var _rims_rims_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rims/rims.module */ "./src/app/rims/rims.module.ts");
/* harmony import */ var _orders_all_orders_all_orders_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./orders/all-orders/all-orders.component */ "./src/app/orders/all-orders/all-orders.component.ts");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contacts/contacts.component */ "./src/app/contacts/contacts.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _authentication_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./authentication/user-info/user-info.component */ "./src/app/authentication/user-info/user-info.component.ts");
/* harmony import */ var _authentication_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./authentication/guards/auth.guard */ "./src/app/authentication/guards/auth.guard.ts");
/* harmony import */ var _authentication_guards_admin_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./authentication/guards/admin.guard */ "./src/app/authentication/guards/admin.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Components










//Guards


var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'login', component: _authentication_signin_signin_component__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"] },
    { path: 'register', component: _authentication_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
    { path: 'user/:id', component: _authentication_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_11__["UserInfoComponent"] },
    { path: 'account', component: _authentication_account_account_component__WEBPACK_IMPORTED_MODULE_5__["AccountComponent"], canActivate: [_authentication_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'cart', component: _cart_cart_details_cart_details_cart_details_component__WEBPACK_IMPORTED_MODULE_6__["CartDetailsComponent"], canActivate: [_authentication_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'rims', loadChildren: function () { return _rims_rims_module__WEBPACK_IMPORTED_MODULE_7__["RimsModule"]; }, canActivate: [_authentication_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'orders/all', component: _orders_all_orders_all_orders_component__WEBPACK_IMPORTED_MODULE_8__["AllOrdersComponent"], canActivate: [_authentication_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"], _authentication_guards_admin_guard__WEBPACK_IMPORTED_MODULE_13__["AdminGuard"]] },
    { path: 'contacts', component: _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_9__["ContactsComponent"] },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/authentication/account/account.component.css":
/*!**************************************************************!*\
  !*** ./src/app/authentication/account/account.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".manage-link {\r\n  font-weight: bold;\r\n  font-size: large;\r\n  text-decoration: underline;\r\n}\r\n.manager {\r\n  margin: 30px;\r\n  padding: 30px;\r\n  border: 1px solid ;\r\n}\r\n"

/***/ }),

/***/ "./src/app/authentication/account/account.component.html":
/*!***************************************************************!*\
  !*** ./src/app/authentication/account/account.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 *ngIf=\"!authService.isAdmin()\" class=\"currentPageHeading\">My account details</h3>\n<h3 *ngIf=\"authService.isAdmin()\" class=\"currentPageHeading\">Admin panel</h3>\n\n<div *ngIf=\"accountModel\" class=\"container\">\n  <div *ngIf=\"!authService.isAdmin()\">\n    <form (ngSubmit)=\"submitChanges()\" #accountForm=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"username\">Your username</label>\n        <input type=\"text\" class=\"form-control\" id=\"username\"\n               disabled\n               [(ngModel)]=\"accountModel.username\"\n               #username=\"ngModel\"\n               name=\"username\">\n        <div class=\"alert alert-info\">\n          You cannot change your username.\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"email\">Your Email</label>\n        <input type=\"email\" class=\"form-control\" id=\"email\"\n               disabled\n               [(ngModel)]=\"accountModel.email\"\n               #model=\"ngModel\"\n               name=\"model\">\n\n        <div class=\"alert alert-info\">\n          If you want to change your email please contact us!\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"firstName\">First name</label>\n        <input type=\"text\" class=\"form-control\" id=\"firstName\"\n               minlength=\"1\"\n               required\n               [(ngModel)]=\"accountModel.firstName\"\n               #firstName=\"ngModel\"\n               name=\"firstName\">\n\n        <div [hidden]=\"firstName.valid || firstName.pristine\" class=\"alert alert-danger\">\n          First name must have at least 1 character!\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"lastName\">Last name</label>\n        <input type=\"text\" class=\"form-control\" id=\"lastName\"\n               minlength=\"1\"\n               required\n               [(ngModel)]=\"accountModel.lastName\"\n               #lastName=\"ngModel\"\n               name=\"lastName\">\n\n        <div [hidden]=\"lastName.valid || lastName.pristine\" class=\"alert alert-danger\">\n          Last name must have at least 1 character!\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=phone>Phone</label>\n        <input type=\"text\" class=\"form-control\" id=\"phone\"\n               pattern=\"[0-9]{10,10}\"\n               required\n               [(ngModel)]=\"accountModel.phone\"\n               #phone=\"ngModel\"\n               name=\"phone\">\n\n        <div [hidden]=\"phone.valid || phone.pristine\" class=\"alert alert-danger\">\n          Phone must have between 10 and 13 characters!\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"city\">City</label>\n        <input type=\"text\" class=\"form-control\" id=\"city\"\n               minlength=\"2\"\n               required\n               [(ngModel)]=\"accountModel.city\"\n               #city=\"ngModel\"\n               name=\"city\">\n\n        <div [hidden]=\"city.valid || city.pristine\" class=\"alert alert-danger\">\n          City must have at least 2 characters!\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"street\">Street</label>\n        <input type=\"text\" class=\"form-control\" id=\"street\"\n               minlength=\"2\"\n               required\n               [(ngModel)]=\"accountModel.street\"\n               #street=\"ngModel\"\n               name=\"street\">\n\n        <div [hidden]=\"street.valid || street.pristine\" class=\"alert alert-danger\">\n          Street must have at least 2 characters!\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"postCode\">Post code</label>\n        <input type=\"text\" class=\"form-control\" id=\"postCode\"\n               minlength=\"1\"\n               required\n               [(ngModel)]=\"accountModel.postCode\"\n               #postCode=\"ngModel\"\n               name=\"postCode\">\n\n        <div [hidden]=\"postCode.valid || postCode.pristine\" class=\"alert alert-danger\">\n          Post code must have at least 1 character!\n        </div>\n      </div>\n      <button type=\"submit\" class=\"btn btn-dark\" [disabled]=\"accountForm.form.invalid\">Save changes!</button>\n    </form>\n  </div>\n\n\n  <div *ngIf=\"authService.isAdmin()\">\n    <div class=\"row\">\n      <div class=\"col-sm manager\">\n        <h4>Manage ads</h4><br/>\n        <a class=\"manage-link\" routerLink=\"/rims/catalog\">Edit/Delete ad</a><br/>\n        <a class=\"manage-link\" routerLink=\"/rims/create\">Create ad</a>\n      </div>\n      <div class=\"col-sm manager\">\n        <h4>Manage orders</h4><br/>\n        <a class=\"manage-link\" routerLink=\"/orders/all\">View orders</a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/authentication/account/account.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/authentication/account/account.component.ts ***!
  \*************************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/authentication/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountComponent = /** @class */ (function () {
    function AccountComponent(authService, toastr) {
        this.authService = authService;
        this.toastr = toastr;
    }
    AccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userId = JSON.parse(localStorage.getItem('user')).userId;
        this.authService.getUserById(userId)
            .subscribe(function (data) {
            _this.accountModel = data;
        }, function (err) {
            _this.toastr.error('Could not load your data!', 'Error!');
        });
    };
    AccountComponent.prototype.submitChanges = function () {
        var _this = this;
        this.authService.updateUserById(JSON.parse(localStorage.getItem('user')).userId, this.accountModel)
            .subscribe(function (data) {
            _this.toastr.success('Account changes saved!', 'Success!');
        }, function (err) {
            _this.toastr.error('Something went wrong!', 'Error!');
        });
    };
    AccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! ./account.component.html */ "./src/app/authentication/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.css */ "./src/app/authentication/account/account.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/authentication/auth.module.ts":
/*!***********************************************!*\
  !*** ./src/app/authentication/auth.module.ts ***!
  \***********************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/app/authentication/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/authentication/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: _index__WEBPACK_IMPORTED_MODULE_1__["authComponents"].slice(),
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
            ],
            providers: [
                _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/authentication/auth.service.ts":
/*!************************************************!*\
  !*** ./src/app/authentication/auth.service.ts ***!
  \************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var kinveyBaseUrl = "https://baas.kinvey.com/";
var kinveyAppKey = "kid_SJEtf6PHm";
var loginUrl = kinveyBaseUrl + 'user/' + kinveyAppKey + '/login';
var registerUrl = kinveyBaseUrl + 'user/' + kinveyAppKey;
var userByIdUrl = kinveyBaseUrl + 'user/' + kinveyAppKey + '/';
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.register = function (body) {
        return this.http.post(registerUrl, body);
    };
    AuthService.prototype.login = function (body) {
        return this.http.post(loginUrl, body);
    };
    AuthService.prototype.logout = function () {
        localStorage.clear();
    };
    AuthService.prototype.getUserById = function (id) {
        return this.http.get(userByIdUrl + id);
    };
    AuthService.prototype.updateUserById = function (id, body) {
        return this.http.put(userByIdUrl + id, body);
    };
    AuthService.prototype.isAuthenticated = function () {
        return localStorage.getItem('user') !== null;
    };
    AuthService.prototype.isAdmin = function () {
        if (this.user) {
            return this.user.isAdmin;
        }
        return false;
    };
    Object.defineProperty(AuthService.prototype, "user", {
        get: function () {
            var currentUser = JSON.parse(localStorage.getItem('user'));
            return currentUser;
        },
        enumerable: true,
        configurable: true
    });
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/authentication/guards/admin.guard.ts":
/*!******************************************************!*\
  !*** ./src/app/authentication/guards/admin.guard.ts ***!
  \******************************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/authentication/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminGuard = /** @class */ (function () {
    function AdminGuard(authService, router, toastr) {
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
    }
    AdminGuard.prototype.canActivate = function (next, state) {
        if (this.authService.isAdmin()) {
            return true;
        }
        this.router.navigateByUrl('/home');
        this.toastr.error('You are not Admin!', 'Access denied!');
        return false;
    };
    AdminGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/authentication/guards/auth.guard.ts":
/*!*****************************************************!*\
  !*** ./src/app/authentication/guards/auth.guard.ts ***!
  \*****************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/authentication/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router, toastr) {
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.authService.isAuthenticated()) {
            return true;
        }
        this.router.navigateByUrl('/login');
        this.toastr.error('Please login first!', 'Access denied!');
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/authentication/index.ts":
/*!*****************************************!*\
  !*** ./src/app/authentication/index.ts ***!
  \*****************************************/
/*! exports provided: authComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authComponents", function() { return authComponents; });
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/authentication/signin/signin.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/authentication/signup/signup.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account/account.component */ "./src/app/authentication/account/account.component.ts");
/* harmony import */ var _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-info/user-info.component */ "./src/app/authentication/user-info/user-info.component.ts");




var authComponents = [
    _signin_signin_component__WEBPACK_IMPORTED_MODULE_0__["SigninComponent"],
    _signup_signup_component__WEBPACK_IMPORTED_MODULE_1__["SignupComponent"],
    _account_account_component__WEBPACK_IMPORTED_MODULE_2__["AccountComponent"],
    _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_3__["UserInfoComponent"]
];


/***/ }),

/***/ "./src/app/authentication/models/signin.model.ts":
/*!*******************************************************!*\
  !*** ./src/app/authentication/models/signin.model.ts ***!
  \*******************************************************/
/*! exports provided: SignInModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInModel", function() { return SignInModel; });
var SignInModel = /** @class */ (function () {
    function SignInModel(username, password) {
        this.username = username;
        this.password = password;
    }
    return SignInModel;
}());



/***/ }),

/***/ "./src/app/authentication/models/signup.model.ts":
/*!*******************************************************!*\
  !*** ./src/app/authentication/models/signup.model.ts ***!
  \*******************************************************/
/*! exports provided: SignUpModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpModel", function() { return SignUpModel; });
var SignUpModel = /** @class */ (function () {
    function SignUpModel(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    return SignUpModel;
}());



/***/ }),

/***/ "./src/app/authentication/signin/signin.component.css":
/*!************************************************************!*\
  !*** ./src/app/authentication/signin/signin.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/authentication/signin/signin.component.html":
/*!*************************************************************!*\
  !*** ./src/app/authentication/signin/signin.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"currentPageHeading\">Login</h3>\n<div class=\"container\">\n  <form (ngSubmit)=\"login()\" #loginForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input type=\"text\" class=\"form-control\" id=\"username\"\n      required\n      [(ngModel)]=\"model.username\"\n      #username=\"ngModel\"\n      name=\"username\">\n\n      <div [hidden]=\"username.valid || username.pristine\" class=\"alert alert-danger\">\n        Please enter your username!\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\" class=\"form-control\" id=\"password\"\n      required\n      [(ngModel)]=\"model.password\"\n      #password=\"ngModel\"\n      name=\"password\"\n      minlength=\"5\">\n\n      <div [hidden]=\"password.valid || password.pristine\" class=\"alert alert-danger\">\n        Password must have at least 5 characters!\n      </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-dark\" [disabled]=\"loginForm.form.invalid\">Login!</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/authentication/signin/signin.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/authentication/signin/signin.component.ts ***!
  \***********************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_signin_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/signin.model */ "./src/app/authentication/models/signin.model.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/authentication/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SigninComponent = /** @class */ (function () {
    function SigninComponent(authService) {
        this.authService = authService;
        this.model = new _models_signin_model__WEBPACK_IMPORTED_MODULE_1__["SignInModel"]("", "");
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.login = function () {
        this.authService
            .login(this.model)
            .subscribe();
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/authentication/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/authentication/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/authentication/signup/signup.component.css":
/*!************************************************************!*\
  !*** ./src/app/authentication/signup/signup.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/authentication/signup/signup.component.html":
/*!*************************************************************!*\
  !*** ./src/app/authentication/signup/signup.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"currentPageHeading\">Register</h3>\n<div class=\"container\">\n  <form (ngSubmit)=\"register()\" #registerForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n        <input type=\"text\" class=\"form-control\" id=\"username\"\n               minlength=\"4\"\n               required\n               [(ngModel)]=\"model.username\"\n               #username=\"ngModel\"\n               name=\"username\">\n\n        <div [hidden]=\"username.valid || username.pristine\" class=\"alert alert-danger\">\n          Username must have at least 4 characters!\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <input type=\"text\" class=\"form-control\" id=\"email\"\n      required\n      email\n      [(ngModel)]=\"model.email\"\n      #email=\"ngModel\"\n      name=\"email\">\n\n      <div [hidden]=\"email.valid || email.pristine\" class=\"alert alert-danger\">\n        Please enter a correct email address!\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\" class=\"form-control\" id=\"password\"\n      required\n      [(ngModel)]=\"model.password\"\n      #password=\"ngModel\"\n      name=\"password\"\n      minlength=\"5\">\n\n      <div [hidden]=\"password.valid || password.pristine\" class=\"alert alert-danger\">\n        Password must have at least 5 characters!\n      </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-dark\" [disabled]=\"registerForm.form.invalid\">Sign Up</button>\n  </form>\n</div>\n\n"

/***/ }),

/***/ "./src/app/authentication/signup/signup.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/authentication/signup/signup.component.ts ***!
  \***********************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_signup_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/signup.model */ "./src/app/authentication/models/signup.model.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/authentication/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService) {
        this.authService = authService;
        this.model = new _models_signup_model__WEBPACK_IMPORTED_MODULE_1__["SignUpModel"]("", "", "");
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.register = function () {
        this.authService
            .register(this.model)
            .subscribe();
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/authentication/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/authentication/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/authentication/user-info/user-info.component.css":
/*!******************************************************************!*\
  !*** ./src/app/authentication/user-info/user-info.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/authentication/user-info/user-info.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/authentication/user-info/user-info.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"currentPageHeading\">Manage orders: User info</h3>\n<div *ngIf=\"userInfo\" class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm\">\n      <div class=\"row\">\n        <div class=\"col-sm\">\n          <table class=\"table table-dark table-bordered table-hover\">\n            <thead>\n            <tr>\n              <th>User ID: {{userInfo._id}}</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr>\n              <th>Username</th>\n              <td>{{userInfo.username}}</td>\n            </tr>\n            <tr>\n              <th>First name</th>\n              <td>{{userInfo.firstName}}</td>\n            </tr>\n            <tr>\n              <th>Last name</th>\n              <td>{{userInfo.lastName}}</td>\n            </tr>\n            <tr>\n              <th>Phone</th>\n              <td>{{userInfo.phone}}</td>\n            </tr>\n            <tr>\n              <th>City</th>\n              <td>{{userInfo.city}}</td>\n            </tr>\n            <tr>\n              <th>Street</th>\n              <td>{{userInfo.street}}</td>\n            </tr>\n            <tr>\n              <th>Post code</th>\n              <td>{{userInfo.postCode}}</td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/authentication/user-info/user-info.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/authentication/user-info/user-info.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function() { return UserInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/authentication/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserInfoComponent = /** @class */ (function () {
    function UserInfoComponent(authService, toastr, route) {
        this.authService = authService;
        this.toastr = toastr;
        this.route = route;
    }
    UserInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getUserById(this.route.snapshot.params['id']).subscribe(function (data) {
            _this.userInfo = data;
            _this.toastr.success('Loaded user info!', 'Success!');
        }, function (err) {
            _this.toastr.error('Could not get user info from DB!', 'Error!');
        });
    };
    UserInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-info',
            template: __webpack_require__(/*! ./user-info.component.html */ "./src/app/authentication/user-info/user-info.component.html"),
            styles: [__webpack_require__(/*! ./user-info.component.css */ "./src/app/authentication/user-info/user-info.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], UserInfoComponent);
    return UserInfoComponent;
}());



/***/ }),

/***/ "./src/app/cart/cart-details/cart-details/cart-details.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/cart/cart-details/cart-details/cart-details.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n  height: 250px;\r\n}\r\n\r\n.deleteLink {\r\n  text-align: center;\r\n  background-color: red;\r\n  padding: 0;\r\n  border: 3px solid white;\r\n  border-radius: 5px;\r\n  box-shadow: 1px 2px 2px grey;\r\n  height: 30px;\r\n  width: 30px;\r\n  font-family: sans-serif;\r\n  font-size: 16px;\r\n  color: white;\r\n  transition: all .2s ease-in-out;\r\n}\r\n\r\n.deleteLink:hover {\r\n  color: red;\r\n  background-color: white;\r\n  -webkit-transform: scale(1.1);\r\n          transform: scale(1.1);\r\n  cursor: pointer;\r\n}\r\n"

/***/ }),

/***/ "./src/app/cart/cart-details/cart-details/cart-details.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/cart/cart-details/cart-details/cart-details.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"currentPageHeading\">My cart</h3>\n<div *ngIf=\"cartRims\" class=\"container\">\n  <div class=\"row\">\n    <div *ngFor=\"let rim of cartRims\" class=\"col-sm\" style=\"border:1px solid gray\">\n      <div class=\"row\">\n        <div class=\"col-sm item-photo\">\n          <a routerLink=\"/rims/details/{{rim._id}}\"><img style=\"max-width:100%;\" src=\"{{rim.imageUrl}}\" /></a>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm\">\n          <table class=\"table table-dark table-bordered table-striped\">\n            <thead>\n            <tr>\n              <th>Details for product ID: {{rim._id}}</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr>\n              <th>Brand</th>\n              <td>{{rim.make}}</td>\n            </tr>\n            <tr>\n              <th>Model</th>\n              <td>{{rim.model}}</td>\n            </tr>\n            <tr>\n              <th>Diameter</th>\n              <td>{{rim.diameter}}</td>\n            </tr>\n            <tr>\n              <th>Width</th>\n              <td>{{rim.width}}</td>\n            </tr>\n            <tr>\n              <th>Offset</th>\n              <td>{{rim.offset}}</td>\n            </tr>\n            <tr>\n              <th>P.C.D.</th>\n              <td>{{rim.pcd}}</td>\n            </tr>\n            <tr>\n              <th>Holes</th>\n              <td>{{rim.holes}}</td>\n            </tr>\n            <tr>\n              <th>Central opening</th>\n              <td>{{rim.centralOpening}}</td>\n            </tr>\n            <tr>\n              <th>Count</th>\n              <td>{{rim.count}}</td>\n            </tr>\n            <tr>\n              <th>Price</th>\n              <td>{{rim.price.toFixed(2)}} BGN</td>\n            </tr>\n            <tr>\n              <th>Actions</th>\n              <td><div><a (click)=\"removeItemFromCart(rim._id)\"><button class=\"deleteLink\">&#10006;</button></a></div></td>\n            </tr>\n            </tbody>\n          </table>\n\n          <h4 style=\"margin-top:10px;\">Total price for {{rim.count}} rims: {{rim.totalPrice}} BGN</h4>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm\" style=\"border:2px solid gray\">\n      <h4 style=\"font-weight: bold; margin: 20px;\">Order price: {{orderPrice}} BGN</h4>\n      <button type=\"button\" (click)=\"submitOrder()\" class=\"btn btn-dark\">Submit order!</button>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"!cartRims\" class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm\">\n      <h3>Currently you don't have any products in your cart!</h3>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm\">\n      <h4 style=\"text-decoration: underline\"><a routerLink=\"/rims/catalog\">Go to catalog!</a></h4>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/cart/cart-details/cart-details/cart-details.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/cart/cart-details/cart-details/cart-details.component.ts ***!
  \**************************************************************************/
/*! exports provided: CartDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartDetailsComponent", function() { return CartDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _orders_orders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../orders/orders.service */ "./src/app/orders/orders.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CartDetailsComponent = /** @class */ (function () {
    function CartDetailsComponent(toastr, ordersService, router) {
        this.toastr = toastr;
        this.ordersService = ordersService;
        this.router = router;
        this.orderPrice = 0;
    }
    CartDetailsComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('cart')) {
            this.cartRims = JSON.parse(localStorage.getItem('cart'));
            for (var _i = 0, _a = this.cartRims; _i < _a.length; _i++) {
                var obj = _a[_i];
                this.orderPrice += Number(obj['totalPrice']);
            }
        }
    };
    CartDetailsComponent.prototype.removeItemFromCart = function (id) {
        this.cartRims = this.cartRims.filter(function (product) { return product._id !== id; });
        var newOrderPrice = 0;
        for (var i = 0; i < this.cartRims.length; i++) {
            var rim = this.cartRims[i];
            newOrderPrice += Number(rim.totalPrice);
        }
        this.orderPrice = newOrderPrice;
        //Now save manipulation changes to localStorage.
        if (this.cartRims.length === 0) {
            localStorage.removeItem('cart');
            this.router.navigateByUrl('/rims/catalog');
        }
        else {
            localStorage.setItem('cart', JSON.stringify(this.cartRims));
        }
        this.toastr.success('Product removed from cart!', 'Success!');
    };
    CartDetailsComponent.prototype.submitOrder = function () {
        var _this = this;
        var data = {
            username: JSON.parse(localStorage.getItem('user')).username,
            userId: JSON.parse(localStorage.getItem('user')).userId,
            cartRims: this.cartRims,
            orderPrice: this.orderPrice
        };
        this.ordersService.submitOrder(data)
            .subscribe(function (data) {
            _this.toastr.success('Successfully submitted order!', 'Success!');
            _this.router.navigateByUrl('/home');
            localStorage.removeItem('cart');
        }, function (err) {
            _this.toastr.error('Something went wrong!', 'Error!');
        });
    };
    CartDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart-details',
            template: __webpack_require__(/*! ./cart-details.component.html */ "./src/app/cart/cart-details/cart-details/cart-details.component.html"),
            styles: [__webpack_require__(/*! ./cart-details.component.css */ "./src/app/cart/cart-details/cart-details/cart-details.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"],
            _orders_orders_service__WEBPACK_IMPORTED_MODULE_2__["OrdersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CartDetailsComponent);
    return CartDetailsComponent;
}());



/***/ }),

/***/ "./src/app/contacts/contacts.component.css":
/*!*************************************************!*\
  !*** ./src/app/contacts/contacts.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#contact .card:hover i,#contact .card:hover h4{\r\n  color: darkblue;\r\n}\r\n"

/***/ }),

/***/ "./src/app/contacts/contacts.component.html":
/*!**************************************************!*\
  !*** ./src/app/contacts/contacts.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"currentPageHeading\">Contact us</h3>\n<div class=\"container\">\n  <p class=\"text-center w-75 m-auto\">Contact us by phone, email or come to our office!</p>\n  <div class=\"row\">\n    <div class=\"col-sm-12 col-md-6 col-lg-3 my-5\">\n      <div class=\"card border-0\">\n        <div class=\"card-body text-center\">\n          <i class=\"fa fa-phone fa-5x mb-3\" aria-hidden=\"true\"></i>\n          <h4 class=\"text-uppercase mb-5\">Call us</h4>\n          <p>+359 895 554848</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-12 col-md-6 col-lg-3 my-5\">\n      <div class=\"card border-0\">\n        <div class=\"card-body text-center\">\n          <i class=\"fa fa-map-marker fa-5x mb-3\" aria-hidden=\"true\"></i>\n          <h4 class=\"text-uppercase mb-5\">Office Location</h4>\n          <address>Berlin Mitte, Friedrichstr. 105a, 10117</address>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-12 col-md-6 col-lg-3 my-5\">\n      <div class=\"card border-0\">\n        <div class=\"card-body text-center\">\n          <i class=\"fa fa-map-marker fa-5x mb-3\" aria-hidden=\"true\"></i>\n          <h4 class=\"text-uppercase mb-5\">Office Location</h4>\n          <address>Berlin Mitte, Torstr. 55, 10115</address>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-12 col-md-6 col-lg-3 my-5\">\n      <div class=\"card border-0\">\n        <div class=\"card-body text-center\">\n          <i class=\"fa fa-globe fa-5x mb-3\" aria-hidden=\"true\"></i>\n          <h4 class=\"text-uppercase mb-5\">Email</h4>\n          <p>rims.mania@gmail.com</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/contacts/contacts.component.ts":
/*!************************************************!*\
  !*** ./src/app/contacts/contacts.component.ts ***!
  \************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactsComponent = /** @class */ (function () {
    function ContactsComponent() {
    }
    ContactsComponent.prototype.ngOnInit = function () {
    };
    ContactsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__(/*! ./contacts.component.html */ "./src/app/contacts/contacts.component.html"),
            styles: [__webpack_require__(/*! ./contacts.component.css */ "./src/app/contacts/contacts.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\r\n  line-height: 25px;\r\n  font-size: large;\r\n  margin-top: 40px;\r\n  padding-top: 25px;\r\n  padding-bottom: 25px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer bg-dark navbar-expand-lg\">\n  <div class=\"container\">\n    <span class=\"text-white\">Just a fancy footer here!</span>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imgBackground {\r\n  width: 100%;\r\n}\r\n\r\n.welcomeText {\r\n  text-align: center;\r\n}\r\n\r\n@media (min-width:300px)  {\r\n  /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */\r\n  .text-dark {\r\n    font-size: 110%;\r\n  }\r\n}\r\n\r\n@media (min-width:480px)  {\r\n  /* smartphones, Android phones, landscape iPhone */\r\n  .text-dark {\r\n    font-size: 115%;\r\n  }\r\n}\r\n\r\n@media (min-width:600px)  {\r\n  /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */\r\n  .text-dark {\r\n    font-size: 120%;\r\n  }\r\n}\r\n\r\n@media (min-width:801px)  {\r\n  /* tablet, landscape iPad, lo-res laptops ands desktops */\r\n  .text-dark {\r\n    font-size: 125%;\r\n  }\r\n}\r\n\r\n@media (min-width:1025px) {\r\n  /* big landscape tablets, laptops, and desktops */\r\n  .text-dark {\r\n    font-size: 130%;\r\n  }\r\n}\r\n\r\n@media (min-width:1281px) {\r\n  /* hi-res laptops and desktops */\r\n  .text-dark {\r\n    font-size: 140%;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"welcomeText\">\n    <h3 class=\"text-dark\">Welcome to Rims Mania!</h3>\n    <h4 *ngIf=\"!authService.isAuthenticated()\" class=\"text-dark\">Only authorized users can access our catalog!</h4>\n    <h4 *ngIf=\"authService.isAuthenticated()\" class=\"text-dark\">Hey, {{username}}! Checkout our <a style=\"text-decoration: underline\" routerLink=\"/rims/catalog\">Catalog</a>!</h4>\n  </div>\n  <img class=\"imgBackground\" [src]=\"currentImage\">\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authentication/auth.service */ "./src/app/authentication/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService) {
        this.authService = authService;
        this.currentImage = '../../assets/slideshow/slide1.jpg';
        if (localStorage.getItem('user')) {
            this.username = JSON.parse(localStorage.getItem('user')).username;
        }
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.currentImage === '../../assets/slideshow/slide1.jpg') {
                _this.currentImage = '../../assets/slideshow/slide2.jpg';
            }
            else if (_this.currentImage === '../../assets/slideshow/slide2.jpg') {
                _this.currentImage = '../../assets/slideshow/slide3.jpg';
            }
            else if (_this.currentImage === '../../assets/slideshow/slide3.jpg') {
                _this.currentImage = '../../assets/slideshow/slide1.jpg';
            }
            _this.ngOnInit();
        }, 3000);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/interceptors/error.interceptor.ts":
/*!***************************************************!*\
  !*** ./src/app/interceptors/error.interceptor.ts ***!
  \***************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(toastr) {
        this.toastr = toastr;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (err) {
            //We can handle requests errors here.
            switch (err.status) {
                case 401:
                    _this.toastr.error(err.error.description, 'Warning!');
                    break;
                case 400:
                    var message = Object.keys(err.error.errors)
                        .map(function (e) { return err.error.errors[e]; })
                        .join('\n');
                    _this.toastr.error(message, 'Warning!');
                    break;
            }
            return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/interceptors/kinvey.interceptor.ts":
/*!****************************************************!*\
  !*** ./src/app/interceptors/kinvey.interceptor.ts ***!
  \****************************************************/
/*! exports provided: KinveyInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KinveyInterceptor", function() { return KinveyInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//Constants
var kinveyAppKey = "kid_SJEtf6PHm";
var kinveyAppSecret = "18804c92e53e442593df679e37044f6d";
var KinveyInterceptor = /** @class */ (function () {
    function KinveyInterceptor(toastr, router) {
        this.toastr = toastr;
        this.router = router;
    }
    KinveyInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        var user = JSON.parse(localStorage.getItem('user'));
        if (user && user.authtoken) {
            request = request.clone({
                setHeaders: {
                    'Authorization': 'Kinvey ' + user.authtoken
                }
            });
        }
        else {
            request = request.clone({
                setHeaders: {
                    'Authorization': 'Basic ' + btoa(kinveyAppKey + ':' + kinveyAppSecret)
                }
            });
        }
        return next.handle(request)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (res) {
            //Login
            if (res instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"] && res.body._kmd && res.body._kmd.authtoken && res.url.endsWith('/login')) {
                _this.saveToken(res.body);
                _this.toastr.success('Logged in!', 'Success!');
                _this.router.navigateByUrl('/account');
            }
            //Register
            if (res instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"] && res.url.endsWith(kinveyAppKey)) {
                _this.toastr.success('Registered!, Please now login.', 'Success!');
                _this.router.navigateByUrl('/login');
            }
            //Create rim ad
            if (res instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"] && res.statusText === 'Created' && res.url.endsWith('rims')) {
                _this.toastr.success('Created rim ad!', 'Success!');
                _this.router.navigateByUrl('/rims/catalog');
            }
        }));
    };
    KinveyInterceptor.prototype.saveToken = function (data) {
        var user = data;
        localStorage.setItem('user', JSON.stringify({
            'username': user.username,
            'authtoken': user._kmd.authtoken,
            'isAdmin': user.isAdmin,
            'userId': user._id
        }));
    };
    KinveyInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], KinveyInterceptor);
    return KinveyInterceptor;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\r\n  height: 85px;\r\n  z-index: 1;\r\n}\r\n.navbar-brand {\r\n  color: whitesmoke;\r\n  text-shadow: 0 0 5px #FF0000;\r\n  font-size: xx-large;\r\n}\r\n.nav-link {\r\n  color: white;\r\n  font-size: 14px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" routerLink=\"/home\">Rims Mania</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"expand()\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse bg-dark\" id=\"navbarResponsive\"\n      [ngClass]=\"{ 'show': navbarOpen }\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/home\" (click)=\"expand()\">Home</a>\n        </li>\n        <li *ngIf=\"!authService.isAuthenticated()\" class=\"nav-item\" (click)=\"expand()\">\n          <a class=\"nav-link\" routerLink=\"/login\">Login</a>\n        </li>\n        <li *ngIf=\"!authService.isAuthenticated()\" class=\"nav-item\" (click)=\"expand()\">\n          <a class=\"nav-link\" routerLink=\"/register\">Register</a>\n        </li>\n        <li *ngIf=\"authService.isAuthenticated()\" class=\"nav-item\" (click)=\"expand()\">\n          <a class=\"nav-link\" routerLink=\"/rims/catalog\">Catalog</a>\n        </li>\n        <li *ngIf=\"authService.isAuthenticated()\" class=\"nav-item\" (click)=\"expand()\">\n          <a class=\"nav-link\" routerLink=\"/account\">Account</a>\n        </li>\n        <li *ngIf=\"authService.isAuthenticated()\" class=\"nav-item\" (click)=\"expand()\">\n          <a class=\"nav-link\" routerLink=\"/cart\">Cart</a>\n        </li>\n        <li *ngIf=\"authService.isAuthenticated()\" class=\"nav-item\" (click)=\"expand()\">\n          <a class=\"nav-link\" routerLink=\"/home\" (click)=\"logout()\">Logout</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/contacts\" (click)=\"expand()\">Contacts</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication/auth.service */ "./src/app/authentication/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(router, authService, toastr) {
        this.router = router;
        this.authService = authService;
        this.toastr = toastr;
        this.navbarOpen = false;
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigateByUrl('/home');
        this.toastr.success('Logged out!', 'Success!');
        this.expand();
    };
    NavigationComponent.prototype.expand = function () {
        this.navbarOpen = !this.navbarOpen;
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAxMC8yOS8xMiKqq3kAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzVxteM2AAABHklEQVRIib2Vyw6EIAxFW5idr///Qx9sfG3pLEyJ3tAwi5EmBqRo7vHawiEEERHS6x7MTMxMVv6+z3tPMUYSkfTM/R0fEaG2bbMv+Gc4nZzn+dN4HAcREa3r+hi3bcuu68jLskhVIlW073tWaYlQ9+F9IpqmSfq+fwskhdO/AwmUTJXrOuaRQNeRkOd5lq7rXmS5InmERKoER/QMvUAPlZDHcZRhGN4CSeGY+aHMqgcks5RrHv/eeh455x5KrMq2yHQdibDO6ncG/KZWL7M8xDyS1/MIO0NJqdULLS81X6/X6aR0nqBSJcPeZnlZrzN477NKURn2Nus8sjzmEII0TfMiyxUuxphVWjpJkbx0btUnshRihVv70Bv8ItXq6Asoi/ZiCbU6YgAAAABJRU5ErkJggg==);}\r\n.error-template {padding: 40px 15px;text-align: center;}\r\n.error-actions {margin-top:15px;margin-bottom:15px;}\r\n.error-actions .btn { margin-right:10px; }\r\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"error-template\">\n        <h1>Oops!</h1>\n        <h2>404 Not Found</h2>\n        <div class=\"error-details\">\n          Sorry, an error has occured, Requested page not found!\n        </div>\n        <div class=\"error-actions\">\n          <a routerLink=\"/home\" class=\"btn btn-primary btn-lg\">Take Me Home</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/orders/all-orders/all-orders.component.css":
/*!************************************************************!*\
  !*** ./src/app/orders/all-orders/all-orders.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n  height: 200px;\r\n}\r\n\r\n.editLink {\r\n  text-align: center;\r\n  float: left;\r\n  background-color: blue;\r\n  padding: 0;\r\n  border: 3px solid white;\r\n  border-radius: 5px;\r\n  box-shadow: 1px 2px 2px grey;\r\n  height: 30px;\r\n  width: 45px;\r\n  font-family: sans-serif;\r\n  font-size: 16px;\r\n  color: white;\r\n  transition: all .2s ease-in-out;\r\n}\r\n\r\n.deleteLink {\r\n  text-align: center;\r\n  float: right;\r\n  background-color: red;\r\n  padding: 0;\r\n  border: 3px solid white;\r\n  border-radius: 5px;\r\n  box-shadow: 1px 2px 2px grey;\r\n  height: 30px;\r\n  width: 45px;\r\n  font-family: sans-serif;\r\n  font-size: 16px;\r\n  color: white;\r\n  transition: all .2s ease-in-out;\r\n}\r\n\r\n.editLink:hover {\r\n  color: blue;\r\n  background-color: white;\r\n  -webkit-transform: scale(1.1);\r\n          transform: scale(1.1);\r\n  cursor: pointer;\r\n}\r\n\r\n.deleteLink:hover {\r\n  color: red;\r\n  background-color: white;\r\n  -webkit-transform: scale(1.1);\r\n          transform: scale(1.1);\r\n  cursor: pointer;\r\n}\r\n\r\n.tableHeader {\r\n  background-color: black;\r\n  font-size: large;\r\n}\r\n"

/***/ }),

/***/ "./src/app/orders/all-orders/all-orders.component.html":
/*!*************************************************************!*\
  !*** ./src/app/orders/all-orders/all-orders.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"currentPageHeading\">Manage orders</h3>\n<div *ngIf=\"orders\" class=\"container\">\n  <div class=\"row\" *ngFor=\"let order of orders\">\n    <div class=\"col-sm\" style=\"border:2px solid gray; margin: 25px\">\n      <div class=\"row\">\n        <div class=\"col-sm\">\n          <table class=\"table table-dark table-bordered table-striped\">\n            <thead>\n            <tr class=\"tableHeader\">\n              <th class=\"tableHeader\">Details for Order ID: {{order._id}}</th>\n              <td class=\"tableHeader\"></td>\n            </tr>\n            </thead>\n            <tbody>\n            <tr>\n              <th>User</th>\n              <td><a class=\"text-white\" routerLink=\"/user/{{order.userId}}\">{{order.username}}</a></td>\n            </tr>\n            <tr>\n              <th>Order price</th>\n              <td>{{order.orderPrice}}</td>\n            </tr>\n            <tr>\n              <th>Actions</th>\n              <td>\n                <div><a (click)=\"archiveOrder(order._id)\"><button class=\"editLink\">&#10004;</button></a></div>\n                <div><a (click)=\"deleteOrder(order._id)\"><button class=\"deleteLink\">&#10006;</button></a></div>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-sm\" *ngFor=\"let rim of order.cartRims\">\n          <div class=\"row\">\n            <div class=\"col-sm item-photo\">\n              <a routerLink=\"/rims/details/{{rim._id}}\"><img style=\"max-width:100%;\" src=\"{{rim.imageUrl}}\" /></a>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm\">\n              <table class=\"table table-dark table-bordered table-hover\">\n                <thead>\n                <tr>\n                  <th>Product ID: {{rim._id}}</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr>\n                  <th>Brand</th>\n                  <td>{{rim.make}}</td>\n                </tr>\n                <tr>\n                  <th>Model</th>\n                  <td>{{rim.model}}</td>\n                </tr>\n                <tr>\n                  <th>Diameter</th>\n                  <td>{{rim.diameter}}</td>\n                </tr>\n                <tr>\n                  <th>Width</th>\n                  <td>{{rim.width}}</td>\n                </tr>\n                <tr>\n                  <th>Offset</th>\n                  <td>{{rim.offset}}</td>\n                </tr>\n                <tr>\n                  <th>P.C.D.</th>\n                  <td>{{rim.pcd}}</td>\n                </tr>\n                <tr>\n                  <th>Holes</th>\n                  <td>{{rim.holes}}</td>\n                </tr>\n                <tr>\n                  <th>Central opening</th>\n                  <td>{{rim.centralOpening}}</td>\n                </tr>\n                <tr>\n                  <th>Count</th>\n                  <td>{{rim.count}}</td>\n                </tr>\n                <tr>\n                  <th>Total price</th>\n                  <td>{{rim.totalPrice.toFixed(2)}} BGN</td>\n                </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n<div *ngIf=\"!orders\" class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm\">\n      <h3>There is no orders at this moment!</h3>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/orders/all-orders/all-orders.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/orders/all-orders/all-orders.component.ts ***!
  \***********************************************************/
/*! exports provided: AllOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllOrdersComponent", function() { return AllOrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../orders.service */ "./src/app/orders/orders.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AllOrdersComponent = /** @class */ (function () {
    function AllOrdersComponent(ordersService, toastr) {
        this.ordersService = ordersService;
        this.toastr = toastr;
    }
    AllOrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ordersService.getAllOrders()
            .subscribe(function (data) {
            _this.orders = data;
            if (_this.orders.length === 0) {
                _this.orders = undefined;
            }
        });
    };
    AllOrdersComponent.prototype.archiveOrder = function (id) {
        var _this = this;
        var body = this.orders.filter(function (order) { return order._id === id; })[0];
        this.ordersService.archiveOrder(body)
            .subscribe(function (data) {
            _this.ordersService.deleteOrder(body._id)
                .subscribe(function (res) {
                _this.toastr.success('Archived order!', 'Success!');
                _this.ngOnInit();
            }, function (err) {
                _this.toastr.error('Could not archive order!', 'Error!');
            });
        }, function (err) {
            _this.toastr.error('Could not archive order!', 'Error!');
        });
    };
    AllOrdersComponent.prototype.deleteOrder = function (id) {
        var _this = this;
        this.ordersService.deleteOrder(id)
            .subscribe(function () {
            _this.ordersService.getAllOrders()
                .subscribe(function (data) {
                _this.orders = data;
                _this.toastr.success('Order deleted successfully!', 'Success!');
            }, function (err) {
                _this.toastr.error('Something went wrong!', 'Error!');
            });
        });
    };
    AllOrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-all-orders',
            template: __webpack_require__(/*! ./all-orders.component.html */ "./src/app/orders/all-orders/all-orders.component.html"),
            styles: [__webpack_require__(/*! ./all-orders.component.css */ "./src/app/orders/all-orders/all-orders.component.css")]
        }),
        __metadata("design:paramtypes", [_orders_service__WEBPACK_IMPORTED_MODULE_1__["OrdersService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], AllOrdersComponent);
    return AllOrdersComponent;
}());



/***/ }),

/***/ "./src/app/orders/orders.service.ts":
/*!******************************************!*\
  !*** ./src/app/orders/orders.service.ts ***!
  \******************************************/
/*! exports provided: OrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersService", function() { return OrdersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Constants
var kinveyBaseUrl = "https://baas.kinvey.com/";
var kinveyAppKey = "kid_SJEtf6PHm";
//Requests URLs.
var createOrderUrl = kinveyBaseUrl + 'appdata/' + kinveyAppKey + '/orders';
var archiveOrderUrl = kinveyBaseUrl + 'appdata/' + kinveyAppKey + '/ordersArchive';
var allOrdersUrl = kinveyBaseUrl + 'appdata/' + kinveyAppKey + '/orders';
var deleteOrderUrl = kinveyBaseUrl + 'appdata/' + kinveyAppKey + '/orders/';
var OrdersService = /** @class */ (function () {
    function OrdersService(http) {
        this.http = http;
    }
    //Create
    OrdersService.prototype.submitOrder = function (body) {
        return this.http.post(createOrderUrl, body);
    };
    OrdersService.prototype.archiveOrder = function (body) {
        return this.http.post(archiveOrderUrl, body);
    };
    //Retrieve
    OrdersService.prototype.getAllOrders = function () {
        return this.http.get(allOrdersUrl);
    };
    //Delete
    OrdersService.prototype.deleteOrder = function (id) {
        return this.http.delete(deleteOrderUrl + id);
    };
    OrdersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OrdersService);
    return OrdersService;
}());



/***/ }),

/***/ "./src/app/rims/all-rims/all-rims.component.css":
/*!******************************************************!*\
  !*** ./src/app/rims/all-rims/all-rims.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-img-top {\r\n  width: 200px;\r\n  height: 200px;\r\n}\r\n\r\n.productActions {\r\n  position: relative;\r\n  top: 0;\r\n  padding: 0;\r\n  margin: 0;\r\n  z-index: 0;\r\n}\r\n\r\n.editLink {\r\n  text-align: center;\r\n  float: left;\r\n  top:50%;\r\n  background-color: blue;\r\n  padding: 0;\r\n  border: 3px solid white;\r\n  border-radius: 5px;\r\n  box-shadow: 1px 2px 2px grey;\r\n  height: 30px;\r\n  width: 30px;\r\n  font-family: sans-serif;\r\n  font-size: 16px;\r\n  color: white;\r\n  transition: all .2s ease-in-out;\r\n}\r\n\r\n.deleteLink {\r\n  text-align: center;\r\n  float: right;\r\n  margin-top: -30px;\r\n  background-color: red;\r\n  padding: 0;\r\n  border: 3px solid white;\r\n  border-radius: 5px;\r\n  box-shadow: 1px 2px 2px grey;\r\n  height: 30px;\r\n  width: 30px;\r\n  font-family: sans-serif;\r\n  font-size: 16px;\r\n  color: white;\r\n  transition: all .2s ease-in-out;\r\n}\r\n\r\n.editLink:hover {\r\n  color: blue;\r\n  background-color: white;\r\n  -webkit-transform: scale(1.1);\r\n          transform: scale(1.1);\r\n  cursor: pointer;\r\n}\r\n\r\n.deleteLink:hover {\r\n  color: red;\r\n  background-color: white;\r\n  -webkit-transform: scale(1.1);\r\n          transform: scale(1.1);\r\n  cursor: pointer;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/rims/all-rims/all-rims.component.html":
/*!*******************************************************!*\
  !*** ./src/app/rims/all-rims/all-rims.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"currentPageHeading\">Rims catalog</h3>\n<div class=\"container\">\n\n  <div class=\"row\">\n\n    <div class=\"col-lg-12\">\n\n      <div class=\"row\">\n\n        <div *ngFor=\"let rim of rims | async | paginate : {\n        id: 'allRims',\n        itemsPerPage: pageSize,\n        currentPage: currentPage\n        }\" class=\"col-lg-4 col-md-6 mb-4\">\n          <div class=\"card h-100\">\n            <a routerLink=\"/rims/details/{{rim._id}}\"><img class=\"card-img-top\" src=\"{{rim.imageUrl}}\" alt=\"\"></a>\n            <div class=\"card-body\">\n              <h4 class=\"card-title\">\n                <a routerLink=\"/rims/details/{{rim._id}}\">{{rim.make}}</a>\n              </h4>\n              <h5>{{rim.model}}</h5>\n              <p class=\"card-text\">{{rim.width}}x{{rim.diameter}}</p>\n              <p class=\"card-text\">{{rim.holes}}x{{rim.centralOpening}}</p>\n            </div>\n            <div class=\"card-footer\">\n              <div *ngIf=\"authService.isAdmin()\" class=\"productActions\"><a routerLink=\"/rims/edit/{{rim._id}}\"><button class=\"editLink\">&#9998;</button></a></div>\n              <h5>Price: {{rim.price}} BGN</h5>\n              <div *ngIf=\"authService.isAdmin()\" class=\"productActions\"><a (click)=\"deleteRimAd(rim._id)\"><button class=\"deleteLink\">&#10006;</button></a></div>\n            </div>\n          </div>\n        </div>\n      </div>\n        <!-- /.row -->\n    </div>\n    <!-- /.col-lg-9 -->\n\n  </div>\n  <pagination-controls\n    id=\"allRims\"\n    (pageChange)=\"changePage($event)\"\n    maxSize=\"9\"\n    directionLinks=\"true\"\n    autoHide=\"true\"\n    previousLabel=\"Previous\"\n    nextLabel=\"Next\"\n    screenReaderPaginationLabel=\"Pagination\"\n    screenReaderPageLabel=\"page\"\n    screenReaderCurrentLabel=\"You're on page\"\n  >\n  </pagination-controls>\n  <!-- /.row -->\n</div>\n<!-- /.container -->\n<div *ngIf=\"!rims\" class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm\">\n      <h3>Currently there is no products available in catalog!</h3>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/rims/all-rims/all-rims.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/rims/all-rims/all-rims.component.ts ***!
  \*****************************************************/
/*! exports provided: AllRimsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllRimsComponent", function() { return AllRimsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rims_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rims.service */ "./src/app/rims/rims.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../authentication/auth.service */ "./src/app/authentication/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AllRimsComponent = /** @class */ (function () {
    function AllRimsComponent(rimsService, toastr, authService) {
        this.rimsService = rimsService;
        this.toastr = toastr;
        this.authService = authService;
        this.currentPage = 1;
        this.pageSize = 6;
    }
    AllRimsComponent.prototype.ngOnInit = function () {
        this.rims = this.rimsService.getAllRims();
    };
    AllRimsComponent.prototype.changePage = function (page) {
        this.currentPage = page;
    };
    AllRimsComponent.prototype.deleteRimAd = function (id) {
        var _this = this;
        this.rimsService.deleteRim(id)
            .subscribe(function () {
            _this.toastr.success('Rim deleted successfully!', 'Success!');
            _this.rims = _this.rimsService.getAllRims();
        });
    };
    AllRimsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-all-rims',
            template: __webpack_require__(/*! ./all-rims.component.html */ "./src/app/rims/all-rims/all-rims.component.html"),
            styles: [__webpack_require__(/*! ./all-rims.component.css */ "./src/app/rims/all-rims/all-rims.component.css")]
        }),
        __metadata("design:paramtypes", [_rims_service__WEBPACK_IMPORTED_MODULE_1__["RimsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AllRimsComponent);
    return AllRimsComponent;
}());



/***/ }),

/***/ "./src/app/rims/create-rim/create-rim.component.css":
/*!**********************************************************!*\
  !*** ./src/app/rims/create-rim/create-rim.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/rims/create-rim/create-rim.component.html":
/*!***********************************************************!*\
  !*** ./src/app/rims/create-rim/create-rim.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"currentPageHeading\">Create rim</h3>\n<div class=\"container\">\n  <form (ngSubmit)=\"create()\" #createForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"make\">Make</label>\n      <input type=\"text\" class=\"form-control\" id=\"make\"\n             minlength=\"2\"\n             required\n             [(ngModel)]=\"createModel.make\"\n             #make=\"ngModel\"\n             name=\"make\">\n\n      <div [hidden]=\"make.valid || make.pristine\" class=\"alert alert-danger\">\n        Make must have at least 2 characters!\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"model\">Model</label>\n      <input type=\"text\" class=\"form-control\" id=\"model\"\n             minlength=\"2\"\n             required\n             [(ngModel)]=\"createModel.model\"\n             #model=\"ngModel\"\n             name=\"model\">\n\n      <div [hidden]=\"model.valid || model.pristine\" class=\"alert alert-danger\">\n        Model must have at least 2 characters!\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"diameter\">Diameter</label>\n      <input type=\"text\" class=\"form-control\" id=\"diameter\"\n             minlength=\"1\"\n             required\n             [(ngModel)]=\"createModel.diameter\"\n             #diameter=\"ngModel\"\n             name=\"diameter\">\n\n      <div [hidden]=\"diameter.valid || diameter.pristine\" class=\"alert alert-danger\">\n       Diameter must have at least 1 character!\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"width\">Width</label>\n      <input type=\"text\" class=\"form-control\" id=\"width\"\n             minlength=\"1\"\n             required\n             [(ngModel)]=\"createModel.width\"\n             #width=\"ngModel\"\n             name=\"width\">\n\n      <div [hidden]=\"width.valid || width.pristine\" class=\"alert alert-danger\">\n        Width must have at least 1 character!\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"offset\">Offset</label>\n      <input type=\"text\" class=\"form-control\" id=\"offset\"\n             minlength=\"1\"\n             required\n             [(ngModel)]=\"createModel.offset\"\n             #offset=\"ngModel\"\n             name=\"offset\">\n\n      <div [hidden]=\"offset.valid || offset.pristine\" class=\"alert alert-danger\">\n        Offset must have at least 1 character!\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"pcd\">P.C.D.</label>\n      <input type=\"text\" class=\"form-control\" id=\"pcd\"\n             minlength=\"1\"\n             required\n             [(ngModel)]=\"createModel.pcd\"\n             #pcd=\"ngModel\"\n             name=\"pcd\">\n\n      <div [hidden]=\"pcd.valid || pcd.pristine\" class=\"alert alert-danger\">\n        P.C.D must have at least 1 character!\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"holes\">Holes</label>\n      <input type=\"text\" class=\"form-control\" id=\"holes\"\n             minlength=\"1\"\n             required\n             [(ngModel)]=\"createModel.holes\"\n             #holes=\"ngModel\"\n             name=\"holes\">\n\n      <div [hidden]=\"holes.valid || holes.pristine\" class=\"alert alert-danger\">\n        Holes must have at least 1 character!\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"centralOpening\">Central opening</label>\n      <input type=\"text\" class=\"form-control\" id=\"centralOpening\"\n             minlength=\"1\"\n             required\n             [(ngModel)]=\"createModel.centralOpening\"\n             #centralOpening=\"ngModel\"\n             name=\"centralOpening\">\n\n      <div [hidden]=\"centralOpening.valid || centralOpening.pristine\" class=\"alert alert-danger\">\n        Central opening must have at least 1 character!\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"form-control-label\" for=\"price\">Price</label>\n      <input type=\"number\" class=\"form-control\" id=\"price\"\n             required\n             pattern=\"^[1-9]+\\.*[0-9]*$\"\n             [(ngModel)]=\"createModel.price\"\n             #price=\"ngModel\"\n             name=\"price\">\n\n      <div [hidden]=\"price.valid || price.pristine\" class=\"alert alert-danger\">\n        Price must be in range [1-99999]!\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"imageUrl\">Image URL</label>\n      <input type=\"text\" class=\"form-control\" id=\"imageUrl\"\n             minlength=\"1\"\n             required\n             [(ngModel)]=\"createModel.imageUrl\"\n             #imageUrl=\"ngModel\"\n             name=\"imageUrl\">\n\n      <div [hidden]=\"imageUrl.valid || imageUrl.pristine\" class=\"alert alert-danger\">\n        Image URL must have at least 1 character!\n      </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-dark\" [disabled]=\"createForm.form.invalid\">Create rim!</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/rims/create-rim/create-rim.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/rims/create-rim/create-rim.component.ts ***!
  \*********************************************************/
/*! exports provided: CreateRimComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateRimComponent", function() { return CreateRimComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_create_rim_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/create-rim-model */ "./src/app/rims/models/create-rim-model.ts");
/* harmony import */ var _rims_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rims.service */ "./src/app/rims/rims.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateRimComponent = /** @class */ (function () {
    function CreateRimComponent(rimsService) {
        this.rimsService = rimsService;
        this.createModel = new _models_create_rim_model__WEBPACK_IMPORTED_MODULE_1__["CreateRimModel"]('', '', '', '', '', '', '', '', 0, '');
    }
    CreateRimComponent.prototype.ngOnInit = function () {
    };
    CreateRimComponent.prototype.create = function () {
        this.rimsService.createRim(this.createModel)
            .subscribe();
    };
    CreateRimComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-rim',
            template: __webpack_require__(/*! ./create-rim.component.html */ "./src/app/rims/create-rim/create-rim.component.html"),
            styles: [__webpack_require__(/*! ./create-rim.component.css */ "./src/app/rims/create-rim/create-rim.component.css")]
        }),
        __metadata("design:paramtypes", [_rims_service__WEBPACK_IMPORTED_MODULE_2__["RimsService"]])
    ], CreateRimComponent);
    return CreateRimComponent;
}());



/***/ }),

/***/ "./src/app/rims/details-rim/details-rim.component.css":
/*!************************************************************!*\
  !*** ./src/app/rims/details-rim/details-rim.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n  width: 400px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/rims/details-rim/details-rim.component.html":
/*!*************************************************************!*\
  !*** ./src/app/rims/details-rim/details-rim.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"currentPageHeading\">Rim details</h3>\n<div *ngIf=\"rimModel | async as rim\" class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm item-photo\">\n      <img style=\"max-width:100%;\" src=\"{{rim.imageUrl}}\" />\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm\" style=\"border:1px solid gray\">\n      <table class=\"table table-dark table-bordered table-striped\">\n        <thead>\n        <tr>\n          <th>Details</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr>\n          <th>Brand</th>\n          <td>{{rim.make}}</td>\n        </tr>\n        <tr>\n          <th>Model</th>\n          <td>{{rim.model}}</td>\n        </tr>\n        <tr>\n          <th>Diameter</th>\n          <td>{{rim.diameter}}</td>\n        </tr>\n        <tr>\n          <th>Width</th>\n          <td>{{rim.width}}</td>\n        </tr>\n        <tr>\n          <th>Offset</th>\n          <td>{{rim.offset}}</td>\n        </tr>\n        <tr>\n          <th>P.C.D.</th>\n          <td>{{rim.pcd}}</td>\n        </tr>\n        <tr>\n          <th>Holes</th>\n          <td>{{rim.holes}}</td>\n        </tr>\n        <tr>\n          <th>Central opening</th>\n          <td>{{rim.centralOpening}}</td>\n        </tr>\n        </tbody>\n      </table>\n\n      <h4 style=\"margin-top:10px;\">Price: {{rim.price.toFixed(2)}} BGN</h4>\n\n      <form (ngSubmit)=\"addToCart()\" #addToCartForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"count\"><h5>Count of rims:</h5></label>\n          <input type=\"number\" class=\"form-control\" id=\"count\"\n                 required\n                 pattern=\"^[1-8]$\"\n                 [(ngModel)]=\"rimsCount\"\n                 #count=\"ngModel\"\n                 name=\"count\">\n\n          <div [hidden]=\"count.valid || count.pristine\" class=\"alert alert-danger\">\n            Please enter the required count of rims in range [1-8]!\n          </div>\n        </div>\n\n        <h4 style=\"margin-top:10px;\">Total price for {{rimsCount}} rims: {{(rimsCount * rim.price).toFixed(2)}} BGN</h4>\n\n        <button type=\"submit\" class=\"btn btn-danger\" [disabled]=\"addToCartForm.form.invalid\">Add to cart!</button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/rims/details-rim/details-rim.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/rims/details-rim/details-rim.component.ts ***!
  \***********************************************************/
/*! exports provided: DetailsRimComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsRimComponent", function() { return DetailsRimComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _rims_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rims.service */ "./src/app/rims/rims.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DetailsRimComponent = /** @class */ (function () {
    function DetailsRimComponent(route, rimsService, toastr, router) {
        this.route = route;
        this.rimsService = rimsService;
        this.toastr = toastr;
        this.router = router;
        this.rimsCount = 4;
        this.id = this.route.snapshot.params['id'];
    }
    DetailsRimComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rimModel = this.rimsService.getRimById(this.id);
        this.rimModel.subscribe(function (data) {
            _this.product = data;
        });
    };
    DetailsRimComponent.prototype.addToCart = function () {
        this.product['count'] = this.rimsCount;
        this.product['totalPrice'] = this.product.price * this.rimsCount;
        //We will set the cart in localStorage, so on logout - cart will discard its products.
        var cart = [];
        var duplicateProduct = false;
        if (!localStorage.getItem('cart')) {
            cart.push(this.product);
        }
        else {
            cart = JSON.parse(localStorage.getItem('cart'));
            for (var i = 0; i < cart.length; i++) {
                var currentItem = cart[i];
                if (currentItem._id === this.product._id) {
                    duplicateProduct = true;
                    break;
                }
            }
            if (!duplicateProduct) {
                cart.push(this.product);
            }
        }
        if (!duplicateProduct) {
            localStorage.setItem('cart', JSON.stringify(cart));
            this.toastr.success('Added product to cart!', 'Success!');
            this.router.navigateByUrl('/rims/catalog');
        }
        else {
            this.toastr.error('You already have that product in your cart!', 'Error!');
        }
    };
    DetailsRimComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details-rim',
            template: __webpack_require__(/*! ./details-rim.component.html */ "./src/app/rims/details-rim/details-rim.component.html"),
            styles: [__webpack_require__(/*! ./details-rim.component.css */ "./src/app/rims/details-rim/details-rim.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _rims_service__WEBPACK_IMPORTED_MODULE_3__["RimsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DetailsRimComponent);
    return DetailsRimComponent;
}());



/***/ }),

/***/ "./src/app/rims/edit-rim/edit-rim.component.css":
/*!******************************************************!*\
  !*** ./src/app/rims/edit-rim/edit-rim.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/rims/edit-rim/edit-rim.component.html":
/*!*******************************************************!*\
  !*** ./src/app/rims/edit-rim/edit-rim.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"currentPageHeading\">Edit rim</h3>\n<div *ngIf=\"editModel\" class=\"container\">\n  <form (ngSubmit)=\"edit()\" #editForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"make\">Make</label>\n      <input type=\"text\" class=\"form-control\" id=\"make\"\n             minlength=\"2\"\n             required\n             [(ngModel)]=\"editModel.make\"\n             #make=\"ngModel\"\n             name=\"make\">\n\n      <div [hidden]=\"make.valid || make.pristine\" class=\"alert alert-danger\">\n        Make must have at least 2 characters!\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"model\">Model</label>\n      <input type=\"text\" class=\"form-control\" id=\"model\"\n             minlength=\"2\"\n             required\n             [(ngModel)]=\"editModel.model\"\n             #model=\"ngModel\"\n             name=\"model\">\n\n      <div [hidden]=\"model.valid || model.pristine\" class=\"alert alert-danger\">\n        Model must have at least 2 characters!\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"diameter\">Diameter</label>\n      <input type=\"text\" class=\"form-control\" id=\"diameter\"\n             minlength=\"1\"\n             required\n             [(ngModel)]=\"editModel.diameter\"\n             #diameter=\"ngModel\"\n             name=\"diameter\">\n\n      <div [hidden]=\"diameter.valid || diameter.pristine\" class=\"alert alert-danger\">\n        Diameter must have at least 1 character!\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"width\">Width</label>\n      <input type=\"text\" class=\"form-control\" id=\"width\"\n             minlength=\"1\"\n             required\n             [(ngModel)]=\"editModel.width\"\n             #width=\"ngModel\"\n             name=\"width\">\n\n      <div [hidden]=\"width.valid || width.pristine\" class=\"alert alert-danger\">\n        Width must have at least 1 character!\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"offset\">Offset</label>\n      <input type=\"text\" class=\"form-control\" id=\"offset\"\n             minlength=\"1\"\n             required\n             [(ngModel)]=\"editModel.offset\"\n             #offset=\"ngModel\"\n             name=\"offset\">\n\n      <div [hidden]=\"offset.valid || offset.pristine\" class=\"alert alert-danger\">\n        Offset must have at least 1 character!\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"pcd\">P.C.D.</label>\n      <input type=\"text\" class=\"form-control\" id=\"pcd\"\n             minlength=\"1\"\n             required\n             [(ngModel)]=\"editModel.pcd\"\n             #pcd=\"ngModel\"\n             name=\"pcd\">\n\n      <div [hidden]=\"pcd.valid || pcd.pristine\" class=\"alert alert-danger\">\n        P.C.D must have at least 1 character!\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"holes\">Holes</label>\n      <input type=\"text\" class=\"form-control\" id=\"holes\"\n             minlength=\"1\"\n             required\n             [(ngModel)]=\"editModel.holes\"\n             #holes=\"ngModel\"\n             name=\"holes\">\n\n      <div [hidden]=\"holes.valid || holes.pristine\" class=\"alert alert-danger\">\n        Holes must have at least 1 character!\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"centralOpening\">Central opening</label>\n      <input type=\"text\" class=\"form-control\" id=\"centralOpening\"\n             minlength=\"1\"\n             required\n             [(ngModel)]=\"editModel.centralOpening\"\n             #centralOpening=\"ngModel\"\n             name=\"centralOpening\">\n\n      <div [hidden]=\"centralOpening.valid || centralOpening.pristine\" class=\"alert alert-danger\">\n        Central opening must have at least 1 character!\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"form-control-label\" for=\"price\">Price</label>\n      <input type=\"text\" class=\"form-control\" id=\"price\"\n             required\n             [(ngModel)]=\"editModel.price\"\n             #price=\"ngModel\"\n             name=\"price\">\n\n      <div [hidden]=\"price.valid || price.pristine\" class=\"alert alert-danger\">\n        Price must be in range [1-99999]!\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"imageUrl\">Image URL</label>\n      <input type=\"text\" class=\"form-control\" id=\"imageUrl\"\n             minlength=\"1\"\n             required\n             [(ngModel)]=\"editModel.imageUrl\"\n             #imageUrl=\"ngModel\"\n             name=\"imageUrl\">\n\n      <div [hidden]=\"imageUrl.valid || imageUrl.pristine\" class=\"alert alert-danger\">\n        Image URL must have at least 1 character!\n      </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-dark\" [disabled]=\"editForm.form.invalid\">Save changes!</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/rims/edit-rim/edit-rim.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/rims/edit-rim/edit-rim.component.ts ***!
  \*****************************************************/
/*! exports provided: EditRimComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditRimComponent", function() { return EditRimComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rims_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rims.service */ "./src/app/rims/rims.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditRimComponent = /** @class */ (function () {
    function EditRimComponent(route, router, rimsService, toastr) {
        this.route = route;
        this.router = router;
        this.rimsService = rimsService;
        this.toastr = toastr;
    }
    EditRimComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rimsService.getRimById(this.route.snapshot.params['id']).subscribe(function (data) {
            _this.editModel = data;
        });
    };
    EditRimComponent.prototype.edit = function () {
        var _this = this;
        this.rimsService
            .editRim(this.editModel._id, this.editModel)
            .subscribe(function () {
            _this.toastr.success('Edited Rim successfully!', 'Success!');
            _this.router.navigateByUrl('/rims/catalog');
        }, function (err) {
            _this.toastr.error('Could not edit rim ad!', 'Error!');
        });
    };
    EditRimComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-rim',
            template: __webpack_require__(/*! ./edit-rim.component.html */ "./src/app/rims/edit-rim/edit-rim.component.html"),
            styles: [__webpack_require__(/*! ./edit-rim.component.css */ "./src/app/rims/edit-rim/edit-rim.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _rims_service__WEBPACK_IMPORTED_MODULE_1__["RimsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], EditRimComponent);
    return EditRimComponent;
}());



/***/ }),

/***/ "./src/app/rims/index.ts":
/*!*******************************!*\
  !*** ./src/app/rims/index.ts ***!
  \*******************************/
/*! exports provided: rimsComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rimsComponents", function() { return rimsComponents; });
/* harmony import */ var _all_rims_all_rims_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-rims/all-rims.component */ "./src/app/rims/all-rims/all-rims.component.ts");
/* harmony import */ var _create_rim_create_rim_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-rim/create-rim.component */ "./src/app/rims/create-rim/create-rim.component.ts");
/* harmony import */ var _edit_rim_edit_rim_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-rim/edit-rim.component */ "./src/app/rims/edit-rim/edit-rim.component.ts");
/* harmony import */ var _details_rim_details_rim_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details-rim/details-rim.component */ "./src/app/rims/details-rim/details-rim.component.ts");




var rimsComponents = [
    _all_rims_all_rims_component__WEBPACK_IMPORTED_MODULE_0__["AllRimsComponent"],
    _create_rim_create_rim_component__WEBPACK_IMPORTED_MODULE_1__["CreateRimComponent"],
    _edit_rim_edit_rim_component__WEBPACK_IMPORTED_MODULE_2__["EditRimComponent"],
    _details_rim_details_rim_component__WEBPACK_IMPORTED_MODULE_3__["DetailsRimComponent"]
];


/***/ }),

/***/ "./src/app/rims/models/create-rim-model.ts":
/*!*************************************************!*\
  !*** ./src/app/rims/models/create-rim-model.ts ***!
  \*************************************************/
/*! exports provided: CreateRimModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateRimModel", function() { return CreateRimModel; });
var CreateRimModel = /** @class */ (function () {
    function CreateRimModel(make, model, diameter, width, offset, pcd, holes, centralOpening, price, imageUrl) {
        this.make = make;
        this.model = model;
        this.diameter = diameter;
        this.width = width;
        this.offset = offset;
        this.pcd = pcd;
        this.holes = holes;
        this.centralOpening = centralOpening;
        this.price = price;
        this.imageUrl = imageUrl;
    }
    return CreateRimModel;
}());



/***/ }),

/***/ "./src/app/rims/rims.module.ts":
/*!*************************************!*\
  !*** ./src/app/rims/rims.module.ts ***!
  \*************************************/
/*! exports provided: RimsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RimsModule", function() { return RimsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _rims_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rims.routing.module */ "./src/app/rims/rims.routing.module.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _rims_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rims.service */ "./src/app/rims/rims.service.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index */ "./src/app/rims/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Modules





//Services

//Components

var RimsModule = /** @class */ (function () {
    function RimsModule() {
    }
    RimsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: _index__WEBPACK_IMPORTED_MODULE_6__["rimsComponents"].slice(),
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _rims_routing_module__WEBPACK_IMPORTED_MODULE_3__["RimsRoutingModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"]
            ],
            providers: [
                _rims_service__WEBPACK_IMPORTED_MODULE_5__["RimsService"]
            ]
        })
    ], RimsModule);
    return RimsModule;
}());



/***/ }),

/***/ "./src/app/rims/rims.routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/rims/rims.routing.module.ts ***!
  \*********************************************/
/*! exports provided: RimsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RimsRoutingModule", function() { return RimsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_guards_admin_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication/guards/admin.guard */ "./src/app/authentication/guards/admin.guard.ts");
/* harmony import */ var _all_rims_all_rims_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all-rims/all-rims.component */ "./src/app/rims/all-rims/all-rims.component.ts");
/* harmony import */ var _create_rim_create_rim_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-rim/create-rim.component */ "./src/app/rims/create-rim/create-rim.component.ts");
/* harmony import */ var _edit_rim_edit_rim_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-rim/edit-rim.component */ "./src/app/rims/edit-rim/edit-rim.component.ts");
/* harmony import */ var _details_rim_details_rim_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details-rim/details-rim.component */ "./src/app/rims/details-rim/details-rim.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//Components




var rimRoutes = [
    { path: 'catalog', component: _all_rims_all_rims_component__WEBPACK_IMPORTED_MODULE_3__["AllRimsComponent"] },
    { path: 'details/:id', component: _details_rim_details_rim_component__WEBPACK_IMPORTED_MODULE_6__["DetailsRimComponent"] },
    { path: 'create', component: _create_rim_create_rim_component__WEBPACK_IMPORTED_MODULE_4__["CreateRimComponent"], canActivate: [_authentication_guards_admin_guard__WEBPACK_IMPORTED_MODULE_2__["AdminGuard"]] },
    { path: 'edit/:id', component: _edit_rim_edit_rim_component__WEBPACK_IMPORTED_MODULE_5__["EditRimComponent"], canActivate: [_authentication_guards_admin_guard__WEBPACK_IMPORTED_MODULE_2__["AdminGuard"]] },
];
var RimsRoutingModule = /** @class */ (function () {
    function RimsRoutingModule() {
    }
    RimsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(rimRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], RimsRoutingModule);
    return RimsRoutingModule;
}());



/***/ }),

/***/ "./src/app/rims/rims.service.ts":
/*!**************************************!*\
  !*** ./src/app/rims/rims.service.ts ***!
  \**************************************/
/*! exports provided: RimsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RimsService", function() { return RimsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Constants
var kinveyBaseUrl = "https://baas.kinvey.com/";
var kinveyAppKey = "kid_SJEtf6PHm";
//Requests URLs.
var allRimsUrl = kinveyBaseUrl + 'appdata/' + kinveyAppKey + '/rims';
var getRimByIdUrl = kinveyBaseUrl + 'appdata/' + kinveyAppKey + '/rims/';
var createRimUrl = kinveyBaseUrl + 'appdata/' + kinveyAppKey + '/rims';
var editRimUrl = kinveyBaseUrl + 'appdata/' + kinveyAppKey + '/rims/';
var deleteRimUrl = kinveyBaseUrl + 'appdata/' + kinveyAppKey + '/rims/';
var RimsService = /** @class */ (function () {
    function RimsService(http) {
        this.http = http;
    }
    //Create
    RimsService.prototype.createRim = function (body) {
        return this.http.post(createRimUrl, body);
    };
    //Retrieve
    RimsService.prototype.getAllRims = function () {
        return this.http.get(allRimsUrl);
    };
    RimsService.prototype.getRimById = function (id) {
        return this.http.get(getRimByIdUrl + id);
    };
    //Update
    RimsService.prototype.editRim = function (id, body) {
        return this.http.put(editRimUrl + id, body);
    };
    //Delete
    RimsService.prototype.deleteRim = function (id) {
        return this.http.delete(deleteRimUrl + id);
    };
    RimsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RimsService);
    return RimsService;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Amal\Desktop\AngularSPA\rims-mania\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map