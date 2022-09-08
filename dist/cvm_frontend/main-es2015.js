(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-board/admin-board.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-board/admin-board.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<head>\r\n  <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.5.0/css/all.css\" integrity=\"sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU\" crossorigin=\"anonymous\">\r\n</head>\r\n<body>\r\n  \r\n  \r\n<div class=\"container-fluid\" >\r\n  <div id=\"loader\" *ngIf=\"loading\"></div>\r\n  <div class=\"col-lg-12\" *ngIf=\"!loading\">\r\n    <div class=\"team-member\">\r\n      <h2>Liste des Clients</h2>\r\n      <hr>\r\n      <div class=\"container-fluid\">\r\n      <form [formGroup]=\"searchForm\">\r\n       \r\n        <div class=\"searchbar\">\r\n          \r\n          <input class=\"search_input\" id=\"email\"  formControlName=\"email\"type=\"text\"  placeholder=\"Chercher par Email\">\r\n         <a class=\"search_icon\"(click)=\"getusersbyemail()\" style=\"cursor: pointer;\"> <i class=\"fas fa-search\"></i></a>\r\n        \r\n      </div>\r\n          <div class=\"searchbar\">\r\n          \r\n            <input class=\"search_input\" id=\"lastname\"  formControlName=\"lastname\"type=\"text\"  placeholder=\"Chercher par Nom\">\r\n           <a class=\"search_icon\"(click)=\"getusersbylastname()\" style=\"cursor: pointer;\"> <i class=\"fas fa-search\"></i></a>\r\n          \r\n        </div>\r\n          <div class=\"searchbar\">\r\n          \r\n              <input class=\"search_input\" id=\"firstname\"  formControlName=\"firstname\"type=\"text\"  placeholder=\"Chercher par Prénom\">\r\n             <a class=\"search_icon\"(click)=\"getusersbyfirstname()\" style=\"cursor: pointer;\"> <i class=\"fas fa-search\"></i></a>\r\n            \r\n          </div><br>\r\n          <div class=\"searchbar\" style=\"float: right;\">\r\n            \r\n            <input class=\"search_input\" type=\"text\"  placeholder=\"Cliquer pour chercher tout\" disabled>\r\n           <a class=\"search_icon\"(click)=\"getall()\" style=\"cursor: pointer;\"> <i class=\"fas fa-search\"></i></a>\r\n          \r\n        </div>\r\n          </form> \r\n        </div>     \r\n      <div class=\"users-grid\"  style=\"overflow-x:auto;overflow-y: auto;height: 200px;\">\r\n\r\n        \r\n        \r\n        <table class=\"table table-striped\">\r\n          <thead>\r\n          <tr>\r\n      \r\n            \r\n            <th scope=\"col\">Email <i class=\"fa fa-sort\" aria-hidden=\"true\" [appSort]=\"users\" data-order=\"desc\" data-name=\"email\" ></i></th>\r\n            <th scope=\"col\">Prenom <i class=\"fa fa-sort\" aria-hidden=\"true\" [appSort]=\"users\" data-order=\"desc\" data-name=\"firstname\"  ></i></th>\r\n            <th scope=\"col\">Nom <i class=\"fa fa-sort\" aria-hidden=\"true\" [appSort]=\"users\" data-order=\"desc\" data-name=\"lastname\" ></i></th>\r\n            <th scope=\"col\">Type <i class=\"fa fa-sort\" aria-hidden=\"true\" [appSort]=\"users\" data-order=\"desc\" data-name=\"usertype\" ></i></th>\r\n            <th scope=\"col\">Mobile <i class=\"fa fa-sort\" aria-hidden=\"true\" [appSort]=\"users\" data-order=\"desc\" data-name=\"mobile\" ></i></th>\r\n            <th scope=\"col\">Clientcode <i class=\"fa fa-sort\" aria-hidden=\"true\" [appSort]=\"users\" data-order=\"desc\" data-name=\"clientcode\" ></i></th>\r\n            <th scope=\"col\">Nature-Activité <i class=\"fa fa-sort\" aria-hidden=\"true\" [appSort]=\"users\" data-order=\"desc\" data-name=\"natureactivite\"></i></th>\r\n            <th scope=\"col\">Activité <i class=\"fa fa-sort\" aria-hidden=\"true\" [appSort]=\"users\" data-order=\"desc\" data-name=\"activite\" ></i></th>\r\n            <th scope=\"col\">Sous-Activité <i class=\"fa fa-sort\" aria-hidden=\"true\" [appSort]=\"users\" data-order=\"desc\" data-name=\"sousactivite\" ></i></th>\r\n            <th scope=\"col\">Role <i class=\"fa fa-sort\" aria-hidden=\"true\" [appSort]=\"users\" data-order=\"desc\" data-name=\"role\" ></i></th>\r\n            \r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr *ngFor=\"let user of getclients()\">\r\n      \r\n            \r\n            <td>{{user.email}}</td>\r\n            <td>{{user.firstname}}</td>\r\n            \r\n      \r\n            <td>{{user.lastname}}</td>\r\n            <td >{{user.usertype}}</td>\r\n            <td>{{user.mobile}}</td>\r\n            <td>{{user.clientcode}}</td>\r\n            <td>{{user.natureactivite}}</td>\r\n            <td>{{user.activite}}</td>\r\n            <td>{{user.sousactivite}}</td>\r\n            <td>{{user.role}}</td>\r\n            \r\n            \r\n            <td>  <button type=\"button\" class=\"btn btn-success\" (click)=\"getNavigationusers('view-user',user._id)\">Consulter</button></td>\r\n            \r\n              \r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      \r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"loader\" *ngIf=\"loading\"></div>\r\n  <div class=\"col-lg-12\" *ngIf=\"!loading\">\r\n    <div class=\"team-member\">\r\n      <h2>Liste des Collaborateurs</h2>\r\n      <hr>\r\n            \r\n      <div class=\"users-grid\" style=\"overflow-x:auto;overflow-y: auto;height: 200px;\">\r\n\r\n        \r\n        \r\n        <table class=\"table table-striped\">\r\n          <thead>\r\n          <tr>\r\n      \r\n            \r\n            <th scope=\"col\">Email <i class=\"fa fa-sort\" aria-hidden=\"true\" [appSort]=\"users\" data-order=\"desc\" data-name=\"email\" ></i></th>\r\n            <th scope=\"col\">Prenom <i class=\"fa fa-sort\" aria-hidden=\"true\" [appSort]=\"users\" data-order=\"desc\" data-name=\"firstname\"  ></i></th>\r\n            <th scope=\"col\">Nom <i class=\"fa fa-sort\" aria-hidden=\"true\" [appSort]=\"users\" data-order=\"desc\" data-name=\"lastname\" ></i></th>\r\n            <th scope=\"col\">Type <i class=\"fa fa-sort\" aria-hidden=\"true\" [appSort]=\"users\" data-order=\"desc\" data-name=\"usertype\" ></i></th>\r\n            <th scope=\"col\">Mobile <i class=\"fa fa-sort\" aria-hidden=\"true\" [appSort]=\"users\" data-order=\"desc\" data-name=\"mobile\" ></i></th>\r\n            <th scope=\"col\">Clientcode <i class=\"fa fa-sort\" aria-hidden=\"true\" [appSort]=\"users\" data-order=\"desc\" data-name=\"clientcode\" ></i></th>\r\n            <th scope=\"col\">Nature-Activité <i class=\"fa fa-sort\" aria-hidden=\"true\" [appSort]=\"users\" data-order=\"desc\" data-name=\"natureactivite\"></i></th>\r\n            <th scope=\"col\">Activité <i class=\"fa fa-sort\" aria-hidden=\"true\" [appSort]=\"users\" data-order=\"desc\" data-name=\"activite\" ></i></th>\r\n            <th scope=\"col\">Sous-Activité <i class=\"fa fa-sort\" aria-hidden=\"true\" [appSort]=\"users\" data-order=\"desc\" data-name=\"sousactivite\" ></i></th>\r\n            <th scope=\"col\">Role <i class=\"fa fa-sort\" aria-hidden=\"true\" [appSort]=\"users\" data-order=\"desc\" data-name=\"role\" ></i></th>\r\n            \r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr *ngFor=\"let user of getcollaborateurs()\">\r\n      \r\n            \r\n            <td>{{user.email}}</td>\r\n            <td>{{user.firstname}}</td>\r\n            \r\n      \r\n            <td>{{user.lastname}}</td>\r\n            <td >{{user.usertype}}</td>\r\n            <td>{{user.mobile}}</td>\r\n            <td>{{user.clientcode}}</td>\r\n            <td>{{user.natureactivite}}</td>\r\n            <td>{{user.activite}}</td>\r\n            <td>{{user.sousactivite}}</td>\r\n            <td>{{user.role}}</td>\r\n            \r\n            \r\n            <td>  <button type=\"button\" class=\"btn btn-success\" (click)=\"getNavigationusers('view-user',user._id)\">Consulter</button></td>\r\n            \r\n          \r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      \r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"loader\" *ngIf=\"loading\"></div>\r\n  <div class=\"col-lg-12\" *ngIf=\"!loading\">\r\n    <div class=\"team-member\">\r\n      <h2>Liste des Consultants</h2>\r\n      <hr>\r\n            \r\n      <div class=\"users-grid\" style=\"overflow-x:auto;overflow-y: auto;height: 200px;\">\r\n\r\n        \r\n        \r\n        <table class=\"table table-striped\">\r\n          <thead>\r\n          <tr>\r\n      \r\n            \r\n            <th scope=\"col\">Email <i class=\"fa fa-sort\" aria-hidden=\"true\" [appSort]=\"users\" data-order=\"desc\" data-name=\"email\" ></i></th>\r\n            <th scope=\"col\">Prenom <i class=\"fa fa-sort\" aria-hidden=\"true\" [appSort]=\"users\" data-order=\"desc\" data-name=\"firstname\"  ></i></th>\r\n            <th scope=\"col\">Nom <i class=\"fa fa-sort\" aria-hidden=\"true\" [appSort]=\"users\" data-order=\"desc\" data-name=\"lastname\" ></i></th>\r\n            <th scope=\"col\">Type <i class=\"fa fa-sort\" aria-hidden=\"true\" [appSort]=\"users\" data-order=\"desc\" data-name=\"usertype\" ></i></th>\r\n            <th scope=\"col\">Mobile <i class=\"fa fa-sort\" aria-hidden=\"true\" [appSort]=\"users\" data-order=\"desc\" data-name=\"mobile\" ></i></th>\r\n            <th scope=\"col\">Clientcode <i class=\"fa fa-sort\" aria-hidden=\"true\" [appSort]=\"users\" data-order=\"desc\" data-name=\"clientcode\" ></i></th>\r\n            <th scope=\"col\">Nature-Activité <i class=\"fa fa-sort\" aria-hidden=\"true\" [appSort]=\"users\" data-order=\"desc\" data-name=\"natureactivite\"></i></th>\r\n            <th scope=\"col\">Activité <i class=\"fa fa-sort\" aria-hidden=\"true\" [appSort]=\"users\" data-order=\"desc\" data-name=\"activite\" ></i></th>\r\n            <th scope=\"col\">Sous-Activité <i class=\"fa fa-sort\" aria-hidden=\"true\" [appSort]=\"users\" data-order=\"desc\" data-name=\"sousactivite\" ></i></th>\r\n            <th scope=\"col\">Role <i class=\"fa fa-sort\" aria-hidden=\"true\" [appSort]=\"users\" data-order=\"desc\" data-name=\"role\" ></i></th>\r\n            \r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr *ngFor=\"let user of getconsultants()\">\r\n      \r\n            \r\n            <td>{{user.email}}</td>\r\n            <td>{{user.firstname}}</td>\r\n            \r\n      \r\n            <td>{{user.lastname}}</td>\r\n            <td >{{user.usertype}}</td>\r\n            <td>{{user.mobile}}</td>\r\n            <td>{{user.clientcode}}</td>\r\n            <td>{{user.natureactivite}}</td>\r\n            <td>{{user.activite}}</td>\r\n            <td>{{user.sousactivite}}</td>\r\n            <td>{{user.role}}</td>\r\n            \r\n            \r\n            <td>  <button type=\"button\" class=\"btn btn-success\" (click)=\"getNavigationusers('view-user',user._id)\">Consulter</button></td>\r\n            \r\n          \r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      \r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"loader\" *ngIf=\"loading\"></div>\r\n  <div class=\"col-lg-12\" *ngIf=\"!loading\">\r\n    <div class=\"team-member\">\r\n      <h2>Liste des Candidats</h2>\r\n      <hr>\r\n              \r\n      <div class=\"users-grid\" style=\"overflow-x:auto;overflow-y: auto;height: 200px;\">\r\n\r\n        \r\n        \r\n        <table class=\"table table-striped\">\r\n          <thead>\r\n          <tr>\r\n      \r\n            \r\n            <th scope=\"col\">Email <i class=\"fa fa-sort\" aria-hidden=\"true\" [appSort]=\"users\" data-order=\"desc\" data-name=\"email\" ></i></th>\r\n            <th scope=\"col\">Prenom <i class=\"fa fa-sort\" aria-hidden=\"true\" [appSort]=\"users\" data-order=\"desc\" data-name=\"firstname\"  ></i></th>\r\n            <th scope=\"col\">Nom <i class=\"fa fa-sort\" aria-hidden=\"true\" [appSort]=\"users\" data-order=\"desc\" data-name=\"lastname\" ></i></th>\r\n            <th scope=\"col\">Type <i class=\"fa fa-sort\" aria-hidden=\"true\" [appSort]=\"users\" data-order=\"desc\" data-name=\"usertype\" ></i></th>\r\n            <th scope=\"col\">Mobile <i class=\"fa fa-sort\" aria-hidden=\"true\" [appSort]=\"users\" data-order=\"desc\" data-name=\"mobile\" ></i></th>\r\n            <th scope=\"col\">Clientcode <i class=\"fa fa-sort\" aria-hidden=\"true\" [appSort]=\"users\" data-order=\"desc\" data-name=\"clientcode\" ></i></th>\r\n            <th scope=\"col\">Nature-Activité <i class=\"fa fa-sort\" aria-hidden=\"true\" [appSort]=\"users\" data-order=\"desc\" data-name=\"natureactivite\"></i></th>\r\n            <th scope=\"col\">Activité <i class=\"fa fa-sort\" aria-hidden=\"true\" [appSort]=\"users\" data-order=\"desc\" data-name=\"activite\" ></i></th>\r\n            <th scope=\"col\">Sous-Activité <i class=\"fa fa-sort\" aria-hidden=\"true\" [appSort]=\"users\" data-order=\"desc\" data-name=\"sousactivite\" ></i></th>\r\n            <th scope=\"col\">Role <i class=\"fa fa-sort\" aria-hidden=\"true\" [appSort]=\"users\" data-order=\"desc\" data-name=\"role\" ></i></th>\r\n            \r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr *ngFor=\"let user of getcondidates()\">\r\n      \r\n            \r\n            <td>{{user.email}}</td>\r\n            <td>{{user.firstname}}</td>\r\n            \r\n      \r\n            <td>{{user.lastname}}</td>\r\n            <td >{{user.usertype}}</td>\r\n            <td>{{user.mobile}}</td>\r\n            <td>{{user.clientcode}}</td>\r\n            <td>{{user.natureactivite}}</td>\r\n            <td>{{user.activite}}</td>\r\n            <td>{{user.sousactivite}}</td>\r\n            <td>{{user.role}}</td>\r\n            \r\n            \r\n            <td>  <button type=\"button\" class=\"btn btn-success\" (click)=\"getNavigationusers('view-user',user._id)\">Consulter</button></td>\r\n            \r\n          \r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      \r\n    </div>\r\n  </div>\r\n  <div id=\"loader\" *ngIf=\"loading\"></div>\r\n  <div class=\"col-lg-12\" *ngIf=\"!loading\">\r\n    <div class=\"team-member\">\r\n      <h2>Liste des Candidatures</h2>\r\n      <hr>\r\n              \r\n      <div class=\"users-grid\" style=\"overflow-x:auto;overflow-y: auto;height: 200px;\">\r\n        <form [formGroup]=\"searchForm\">\r\n       \r\n          <div class=\"searchbar\">\r\n            \r\n            <input class=\"search_input\" id=\"email\"  formControlName=\"email\"type=\"text\"  placeholder=\"Chercher par Email\">\r\n           <a class=\"search_icon\"(click)=\"getcondidatesbyemail()\" style=\"cursor: pointer;\"> <i class=\"fas fa-search\"></i></a>\r\n          \r\n        </div>\r\n        <div class=\"searchbar\" style=\"float: right;\">\r\n            \r\n          <input class=\"search_input\" type=\"text\"  placeholder=\"Cliquer pour chercher tout\">\r\n         <a class=\"search_icon\"(click)=\"getcondidatesall()\" style=\"cursor: pointer;\"> <i class=\"fas fa-search\"></i></a>\r\n        \r\n      </div>\r\n            \r\n            </form> \r\n        \r\n        \r\n        <table class=\"table table-striped\">\r\n          <thead>\r\n          <tr>\r\n      \r\n            \r\n            <th>Email <i class=\"fa fa-sort\" aria-hidden=\"true\" [appSort]=\"condidates\" data-order=\"desc\" data-name=\"email\" ></i></th>\r\n            <th>Prenom <i class=\"fa fa-sort\" aria-hidden=\"true\" [appSort]=\"condidates\" data-order=\"desc\" data-name=\"firstname\" ></i></th>\r\n            <th>Nom <i class=\"fa fa-sort\" aria-hidden=\"true\" [appSort]=\"condidates\" data-order=\"desc\" data-name=\"lastname\" ></i></th>\r\n            <th>Adresse <i class=\"fa fa-sort\" aria-hidden=\"true\" [appSort]=\"condidates\" data-order=\"desc\" data-name=\"adresse\" ></i></th>\r\n            <th>Mobile <i class=\"fa fa-sort\" aria-hidden=\"true\" [appSort]=\"condidates\" data-order=\"desc\" data-name=\"mobile\" ></i></th>\r\n            <th>Decision <i class=\"fa fa-sort\" aria-hidden=\"true\" [appSort]=\"condidates\" data-order=\"desc\" data-name=\"decision\" ></i></th>\r\n            <th>CV</th>\r\n            \r\n            \r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr *ngFor=\"let condidate of condidates\">\r\n      \r\n            \r\n            <td>{{condidate.email}}</td>\r\n            <td>{{condidate.firstname}}</td>\r\n            \r\n      \r\n            <td>{{condidate.lastname}}</td>\r\n            <td>{{condidate.adresse}}</td>\r\n            <td>{{condidate.mobile}}</td>\r\n            <td>{{condidate.decision}}</td>\r\n            \r\n            <td><a href=\"{{condidate.ficheUrl}}\" target=\"_blank\">Aperçu CV</a></td>\r\n            \r\n            \r\n            <td>  <button type=\"button\" class=\"btn btn-success\" (click)=\"getNavigationcondidates('view-condidate',condidate._id)\">Consulter</button></td>\r\n            \r\n          \r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      \r\n    </div>\r\n  </div>\r\n  <div id=\"loader\" *ngIf=\"loading\"></div>\r\n  <div class=\"col-lg-12\" *ngIf=\"!loading\">\r\n    <div class=\"team-member\">\r\n      <h2>Liste des Réclamations</h2>\r\n      <hr>\r\n              \r\n      <div class=\"users-grid\" style=\"overflow-x:auto;overflow-y: auto;height: 400px;\">\r\n        <form [formGroup]=\"searchForm\">\r\n       <div class=\"dategroup\">\r\n        <label for=\"date\"> Réclamations Inférieur à:</label>\r\n          <div class=\"searchbar\" title=\"chercher les réclamations avec la date de création inférieur à\">\r\n            \r\n            <input class=\"search_input\" id=\"date\"  formControlName=\"date\"type=\"date\"  placeholder=\"inférieur à:\">\r\n           <a class=\"search_icon\"(click)=\"getcontactreqsbydateinf()\" style=\"cursor: pointer;\"> <i class=\"fas fa-search\"></i></a>\r\n          \r\n        </div>\r\n      </div>\r\n      <div class=\"dategroup\">\r\n        <label for=\"date\"> Réclamations Supérieur à:</label>\r\n        <div class=\"searchbar\"title=\"chercher les réclamations avec la date de création supérieur à\">\r\n            \r\n          <input class=\"search_input\" id=\"date\"  formControlName=\"date\"type=\"date\"  placeholder=\"supérieur à:\">\r\n         <a class=\"search_icon\"(click)=\"getcontactreqsbydatesup()\" style=\"cursor: pointer;\"> <i class=\"fas fa-search\"></i></a>\r\n        \r\n      </div>\r\n    </div>\r\n        <div class=\"searchbar\" style=\"float: right;\">\r\n            \r\n          <input class=\"search_input\" type=\"text\"  placeholder=\"Cliquer pour chercher tout\">\r\n         <a class=\"search_icon\"(click)=\"getcontactsall()\" style=\"cursor: pointer;\"> <i class=\"fas fa-search\"></i></a>\r\n        \r\n      </div>\r\n            \r\n            </form> \r\n        \r\n        \r\n        <table class=\"table table-striped\">\r\n          <thead>\r\n          <tr>\r\n      \r\n            <th>Date Création <i class=\"fa fa-sort\" aria-hidden=\"true\" [appSort]=\"contacts\" data-order=\"desc\" data-name=\"created\" ></i></th>\r\n            <th>Email <i class=\"fa fa-sort\" aria-hidden=\"true\" [appSort]=\"contacts\" data-order=\"desc\" data-name=\"email\" ></i></th>\r\n            <th>Prenom <i class=\"fa fa-sort\" aria-hidden=\"true\" [appSort]=\"contacts\" data-order=\"desc\" data-name=\"firstname\" ></i></th>\r\n            <th>Nom <i class=\"fa fa-sort\" aria-hidden=\"true\" [appSort]=\"contacts\" data-order=\"desc\" data-name=\"lastname\" ></i></th>\r\n            <th>Fichier Joint</th>\r\n            <th>Mobile <i class=\"fa fa-sort\" aria-hidden=\"true\" [appSort]=\"contacts\" data-order=\"desc\" data-name=\"mobile\" ></i></th>\r\n            <th>Description <i class=\"fa fa-sort\" aria-hidden=\"true\" [appSort]=\"contacts\" data-order=\"desc\" data-name=\"description\" ></i></th>\r\n            <th>Statut <i class=\"fa fa-sort\" aria-hidden=\"true\" [appSort]=\"contacts\" data-order=\"desc\" data-name=\"statut\" ></i></th>\r\n            \r\n            \r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr *ngFor=\"let contact of contacts\">\r\n      \r\n            <td>{{contact.created}}</td>\r\n            <td>{{contact.email}}</td>\r\n            <td>{{contact.firstname}}</td>\r\n            \r\n      \r\n            <td>{{contact.lastname}}</td>\r\n            <td><a href=\"{{contact.ficheUrl}}\" target=\"_blank\">Aperçu Fichier</a></td>\r\n            <td>{{contact.mobile}}</td>\r\n            <td>{{contact.description}}</td>\r\n            <td>{{contact.statut}}</td>\r\n            \r\n            \r\n            \r\n            <td>  <button type=\"button\" class=\"btn btn-success\" (click)=\"getNavigationcontacts('view-contactreq',contact._id)\">Consulter</button></td>\r\n            \r\n          \r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      \r\n    </div>\r\n  </div>\r\n</div>\r\n</body>\r\n  \r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/alert/alert.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/alert/alert.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"alerts.length\" class=\"container\">\n    <div class=\"m-3\">\n        <div *ngFor=\"let alert of alerts\" class=\"{{cssClasses(alert)}}\">\n            <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\n            <span [innerHTML]=\"alert.message\"></span>\n            \n        </div>\n    </div> \n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-alert></app-alert>\r\n<app-header></app-header>\r\n<div class=\"left\">\r\n    <div class=\"side\">\r\n<app-due-date-timeline ></app-due-date-timeline>\r\n</div>\r\n<div class=\"main\">\r\n<router-outlet></router-outlet>\r\n</div>\r\n</div>\r\n\r\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/calendar-fiscality/add-event/add-event.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calendar-fiscality/add-event/add-event.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n    <head>\n        <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n        <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>\n    </head>\n    <body>\n      \n    \n    <div class=\"bodycontainer\">\n      \n      <div id=\"loader\" *ngIf=\"loading\"></div>\n  \n      <div class=\"container-fluid\" *ngIf=\"!loading\"> \n       \n      \n    <form  [formGroup]=\"eventform\">\n        <h2>Formulaire D'ajout D'Evenements</h2>\n       \n        \n        \n    \n          <div title=\"indiquer nom évènement\"class=\"input-container\">\n            <i class=\"fa fa-user icon\"></i>\n            <input type=\"text\" class=\"form-control\" formControlName=\"title\" id=\"title\" placeholder=\" Entrez Evènement\">\n          </div> \n          <div title=\"indiquer date évènement\"class=\"input-container\">\n            <i class=\"fa fa-time icon\"></i>\n            <input type=\"date\" class=\"form-control\" formControlName=\"date\" id=\"date\" placeholder=\" Entrez Date Evenement\">\n          </div> \n           <div title=\"indiquer nom évènement\"class=\"input-container\">\n            <i class=\"fa fa-user icon\"></i>\n            <textarea  class=\"form-control\" id=\"description\" formControlName=\"description\"placeholder=\"Entrez votre commentaire\"\n             ></textarea>\n          </div> \n         \n         \n        \n      \n        <button class=\"btn btn-success\" (click)=\"saveEvent()\">Ajouter Evenement</button>\n      </form>\n      <p>{{ errormsg }}</p>\n      \n    </div>\n    </div>\n    </body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/calendar-fiscality/calendar-fiscality.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calendar-fiscality/calendar-fiscality.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <button nbButton outline status=\"success\" (click)=\"getNavigation('add-event')\" class=\"add_event\">Ajouter Evenement</button>\r\n    </div>\r\n    <hr>\r\n  <full-calendar [options]=\"calendarOptions\"></full-calendar>\r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/career/career.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/career/career.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<body>\r\n    <div class=\"container-fluid\">\r\n        <div id=\"loader\" *ngIf=\"loading\"></div>\r\n        <div class=\"row\"*ngIf=\"!loading\">\r\n            <div class=\"col-lg-12\">\r\n                <div class=\"contact-form\">\r\n                    <h1>Déposer votre candidature</h1>\r\n                    <p class=\"hint-text\">Nous sommes dans l'attente d'excellents profils pour intégrer notre équipe</p>\r\n                    <form [formGroup]=\"condidateform\"(ngSubmit)=\"onSubmit()\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"firstname\">Prénom</label>\r\n                                    <input type=\"text\" class=\"form-control\" id=\"firstname\" formControlName=\"firstname\" \r\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.firstname.errors }\"placeholder=\"entrer votre prenom\" required>\r\n                                    <div *ngIf=\"submitted && f.firstname.errors\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"f.firstname.errors.required\">Prénom Obligatoire</div>\r\n                                    </div>\r\n                                </div>\r\n                                \r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"lastname\">Nom</label>\r\n                                    <input type=\"text\" class=\"form-control\" id=\"lastname\" formControlName=\"lastname\" \r\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.lastname.errors }\"placeholder=\"entrer votre nom\"required>\r\n                                    <div *ngIf=\"submitted && f.lastname.errors\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"f.lastname.errors.required\">Nom Obligatoire</div>\r\n                                    </div>\r\n                                </div>\r\n                                \r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"mobile\">Mobile</label>\r\n                                    <input type=\"text\" class=\"form-control\" id=\"mobile\" formControlName=\"mobile\" \r\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.mobile.errors }\"placeholder=\"entrer votre mobile\" required>\r\n                                    <div *ngIf=\"submitted && f.mobile.errors\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"f.mobile.errors.required\">Numéro Mobile Obligatoire</div>\r\n                                    </div>\r\n                                </div>\r\n                               \r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"confirmmobile\">Confirmer Mobile</label>\r\n                                    <input type=\"text\" class=\"form-control\" id=\"confirmmobile\" formControlName=\"confirmmobile\" \r\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.confirmmobile.errors }\"placeholder=\"confimer votre mobile\"required>\r\n                                    <div *ngIf=\"submitted && f.confirmmobile.errors\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"f.confirmmobile.errors.required\">Numéro Mobile Obligatoire</div>\r\n                                        <div *ngIf=\"f.confirmmobile.errors.mustMatch\">Les numéros mobiles ne sont pas identiques</div>\r\n                                    </div>\r\n                                </div>\r\n                                \r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"inputEmail\">Email</label>\r\n                                    <input type=\"email\" class=\"form-control\" id=\"inputEmail\" formControlName=\"email\" \r\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\"placeholder=\"entrer votre email\">\r\n                                    <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"f.email.errors.required\">Email Obligatoire</div>\r\n                                        <div *ngIf=\"f.email.errors.email\">Adresse Email non valides</div>\r\n                                    </div>\r\n                                </div>\r\n                                \r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"inputConfirmEmail\">Confirmer Email</label>\r\n                                    <input type=\"email\" class=\"form-control\" id=\"inputConfirmEmail\" formControlName=\"confirmemail\" \r\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.confirmemail.errors }\"placeholder=\"confimer votre email\">\r\n                                    <div *ngIf=\"submitted && f.confirmemail.errors\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"f.confirmemail.errors.required\">Email Obligatoire</div>\r\n                                        <div *ngIf=\"f.confirmemail.errors.email\">Adresse Email non valides</div>\r\n                                        <div *ngIf=\"f.confirmemail.errors.mustMatch\">Les Emails  ne sont pas identiques</div>\r\n                                      </div>\r\n                                </div>\r\n                               \r\n                            </div>\r\n                        </div>                \r\n                        <div class=\"form-group\">\r\n                            <label for=\"inputAdresse\">Adresse</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"inputAdresse\" formControlName=\"adresse\" \r\n                            [ngClass]=\"{ 'is-invalid': submitted && f.adresse.errors }\"placeholder=\"entrer votre adresse\">\r\n                            <div *ngIf=\"submitted && f.adresse.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.adresse.errors.required\">Adresse Obligatoire</div>\r\n                            </div>\r\n                        </div>\r\n                        <div  class=\"form-group\">\r\n                            <label for=\"inputspecialite\">Spécialité</label>\r\n                            <select  class=\"form-control\" placeholder=\"Choisir Votre Spécialité\" id=\"specialite\" [(ngModel)]=\"optionValue\"\r\n                            [ngClass]=\"{ 'is-invalid': submitted && f.specialite.errors }\"formControlName=\"specialite\" name=\"specialite\" >\r\n                            <option hidden >Choisir Votre Spécialité</option>\r\n                            <option value=\"Comptabilité\">Comptabilité</option>\r\n                            <option value=\"Fiscalité\">Fiscalité</option>\r\n                            <option value=\"Autre\">Autre</option>\r\n                          </select>\r\n                          <div *ngIf=\"submitted && f.specialite.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.specialite.errors.required\">Specialité Obligatoire</div>\r\n                        </div>\r\n                          </div>\r\n                        <div id=\"selectspecialite\"*ngIf=\"optionValue == 'Autre'\">\r\n                        \r\n                            <input class=\"form-control\" type=\"text\" placeholder=\"Choisir Votre Spécialité\" id=\"selectspecialite\" formControlName=\"selectspecialite\">\r\n                          </div>\r\n                        <div class=\"form-group\">\r\n     <label for=\"inputCV\">Attacher Votre CV</label>                   \r\n    <input type=\"file\"  #filePicker (change)=\"onImagePick($event)\" class=\"form-control\" \r\n    accept=\"application/pdf\">\r\n    <div *ngIf=\"submitted && f.image.errors\" class=\"invalid-feedback\">\r\n        <div *ngIf=\"f.image.errors.required\">CV Obligatoire</div>\r\n    </div>\r\n    <div class=\"image-preview\" *ngIf=\"imagePreview\">\r\n      <img [src]=\"imagePreview\" alt=\"\">\r\n    </div>\r\n    <p class=\"text-success\" *ngIf=\"fileUploaded\">Fichier chargé !</p>\r\n   \r\n</div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"inputMessage\">Exprimez vous</label>\r\n                            <textarea class=\"form-control\" id=\"inputMessage\" rows=\"10\" formControlName=\"description\" \r\n                            [ngClass]=\"{ 'is-invalid': submitted && f.description.errors }\"placeholder=\"Présentez vous brièvement\"required></textarea>\r\n                            <div *ngIf=\"submitted && f.description.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.description.errors.required\">Description Obligatoire</div>\r\n                            </div>\r\n                        </div>\r\n                        <input type=\"submit\" class=\"btn btn-primary\" value=\"Envoyer candidature\">\r\n                        <input class=\"btn btn-secondary\" type=\"reset\" (click)=\"onReset()\"value=\"Réinitialiser\">\r\n                        <p class=\"text-success\" >{{successmessage}}</p>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    </body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/collab-user-create/collab-user-create.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/collab-user-create/collab-user-create.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\r\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n    <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>\r\n</head>\r\n<body>\r\n  \r\n\r\n<div class=\"bodycontainer\">\r\n  <div id=\"loader\" *ngIf=\"loading\"></div>\r\n  \r\n<div class=\"container-fluid\" *ngIf=\"!loading\"> \r\n   \r\n  \r\n<form  [formGroup]=\"signupForm\" (ngSubmit)=\"onSignup()\">\r\n    <h2>Formulaire D'inscription</h2>\r\n    <div *ngIf=\"submitted && f.usertype.errors\" class=\"invalid-feedback\">\r\n      <div *ngIf=\"f.usertype.errors.required\">Type Utilisateur est obligatoire</div>\r\n  </div>\r\n    <div title=\"indiquer votre type utilisateur\" class=\"input-container\">\r\n      <label for=\"usertype\"> Type Utilisateur:</label>\r\n      <div class=\"gender_icon\"><i class=\"fa fa-male\" ></i> <i class=\"fa fa-female\"></i></div>\r\n     \r\n<select  class=\"input-field\"  placeholder=\"Entrer Votre Type Utilisateur\"id=\"usertype\" formControlName=\"usertype\" name=\"usertype\"\r\n[ngClass]=\"{ 'is-invalid': submitted && f.usertype.errors }\" >\r\n  <option hidden >Entrer Votre Type Utilisateur</option>\r\n  <option value=\"Consultant\">Consultant</option>\r\n  <option value=\"Collaborateur\">Collaborateur</option>\r\n  \r\n</select>\r\n  </div>\r\n  \r\n  <div *ngIf=\"submitted && f.civilite.errors\" class=\"invalid-feedback\">\r\n    <div *ngIf=\"f.civilite.errors.required\">Civilité est obligatoire</div>\r\n</div>\r\n    <div title=\"indiquer votre civilité\" class=\"input-container\">\r\n     \r\n      <label for=\"civilite\"> Civilité:</label>  \r\n      <div class=\"gender_icon\"><i class=\"fa fa-male\" ></i> <i class=\"fa fa-female\"></i></div>\r\n       \r\n  <select  class=\"input-field\" placeholder=\"Entrer Votre civilite\" id=\"civilite\" formControlName=\"civilite\" name=\"civilite\" >\r\n    <option hidden >Entrer Votre Civilité</option>\r\n    <option value=\"Monsieur\">Monsieur</option>\r\n    <option value=\"Madame\">Madame</option>\r\n    <option value=\"Mademoiselle\">Mademoiselle</option>\r\n  </select>\r\n    </div>\r\n\r\n    <div *ngIf=\"submitted && f.lastname.errors\" class=\"invalid-feedback\">\r\n      <div *ngIf=\"f.lastname.errors.required\">Nom Obligatoire</div>\r\n  </div>\r\n    <div title=\"indiquer votre nom\"class=\"input-container\">\r\n      <label for=\"lastname\"> Nom Utilisateur:</label>\r\n        <i class=\"fa fa-user icon\"></i>\r\n        <input class=\"input-field\" type=\"text\" placeholder=\"Entrer Votre Nom\" id=\"lastname\" \r\n        formControlName=\"lastname\" name=\"lastname\" [ngClass]=\"{ 'is-invalid': submitted && f.lastname.errors }\">\r\n       \r\n      </div>\r\n      \r\n      <div *ngIf=\"submitted && f.firstname.errors\" class=\"invalid-feedback\">\r\n        <div *ngIf=\"f.firstname.errors.required\">Prénom Obligatoire</div>\r\n    </div>\r\n      <div title=\"indiquer votre prenom\"class=\"input-container\">\r\n        <label for=\"firstname\"> Prénom Utilisateur:</label>\r\n        <i class=\"fa fa-user icon\"></i>\r\n        <input class=\"input-field\" type=\"text\" placeholder=\"Entrer Votre Prenom\" id=\"firstname\" \r\n        [ngClass]=\"{ 'is-invalid': submitted && f.firstname.errors }\"formControlName=\"firstname\"name=\"firstname\">\r\n       \r\n      </div> \r\n     \r\n       \r\n      <div title=\"indiquer votre raisonsociale\"class=\"input-container-disabled\">\r\n        <i class=\"fa fa-fort-awesome icon\"></i>\r\n        <input class=\"input-field\" type=\"text\" placeholder=\"Entrer Votre Raison Sociale\" id=\"raisonsociale\" formControlName=\"raisonsociale\">\r\n      </div>\r\n\r\n      <div title=\"indiquer votre fonction\"class=\"input-container-disabled\">\r\n        <i class=\"fa fa-fort-awesome icon\" ></i> \r\n        <input class=\"input-field\" type=\"text\" placeholder=\"Entrer Votre Fonction\" id=\"fonction\" formControlName=\"fonction\">\r\n    </div>\r\n\r\n\r\n    <div title=\"indiquer votre nomsociete\"class=\"input-container-disabled\">\r\n        <i class=\"fa fa-fort-awesome icon\"></i>\r\n        <input class=\"input-field\" type=\"text\" placeholder=\"Entrer Nom Societe\" id=\"nomsociete\" formControlName=\"nomsociete\">\r\n      </div>\r\n\r\n\r\n    <div title=\"indiquer votre secteur\"class=\"input-container-disabled\">\r\n        <i class=\"fa fa-fort-awesome icon\" ></i> \r\n        <input class=\"input-field\" type=\"text\" placeholder=\"Entrer Votre Secteur\" id=\"secteur\" formControlName=\"secteur\">    \r\n  \r\n    </div>\r\n\r\n    <div *ngIf=\"submitted && f.clientcode.errors\" class=\"invalid-feedback\">\r\n      <div *ngIf=\"f.clientcode.errors.required\">Veuillez générer votre code client</div>\r\n  </div>\r\n    <div title=\"indiquer votre clientcode\"class=\"input-container\">\r\n      <label for=\"clientcode\"> Code Client:</label>\r\n      <i class=\"fa fa-user icon\"></i>\r\n      <input class=\"input-field\" type=\"text\" id=\"clientcode\" \r\n      [ngClass]=\"{ 'is-invalid': submitted && f.clientcode.errors }\"formControlName=\"clientcode\"disabled>\r\n      <input type=\"button\" value=\"Générer code client\" (click)=\"randomString()\">&nbsp;\r\n     \r\n    </div>\r\n   \r\n    <div class=\"mobile-container\">\r\n      <div class=\"error-container\">\r\n        <div *ngIf=\"submitted && f.mobile.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"f.mobile.errors.required\">Numéro Mobile Obligatoire</div>\r\n      </div>\r\n      <div class=\"input-container\">\r\n        <label for=\"mobile\"> N° Mobile Utilisateur:</label>\r\n        <i class=\"fa fa-phone icon\"></i>\r\n        <input class=\"input-field\" type=\"text\" placeholder=\"Entrez Votre Numéro Mobile\" id=\"mobile\" \r\n        [ngClass]=\"{ 'is-invalid': submitted && f.mobile.errors }\"formControlName=\"mobile\">\r\n       \r\n      </div>\r\n      \r\n  </div>\r\n  <div class=\"error-container\">\r\n    <div *ngIf=\"submitted && f.confirmmobile.errors\" class=\"invalid-feedback\">\r\n      <div *ngIf=\"f.confirmmobile.errors.required\">Numéro Mobile Obligatoire</div>\r\n      <div *ngIf=\"f.confirmmobile.errors.mustMatch\">Les numéros mobiles ne sont pas identiques</div>\r\n  </div>\r\n      <div class=\"input-container\">\r\n        <label for=\"usertype\"> Confirmer N° Mobile Utilisateur:</label>\r\n        <i class=\"fa fa-phone icon\"></i>\r\n        <input class=\"input-field\" type=\"text\" placeholder=\"Confirmez Votre Numéro Mobile\" id=\"confirmmobile\" \r\n        [ngClass]=\"{ 'is-invalid': submitted && f.confirmmobile.errors }\"formControlName=\"confirmmobile\">\r\n        \r\n      </div>\r\n     \r\n  </div>\r\n    </div>\r\n<div class=\"email-container\">\r\n  <div class=\"error-container\">\r\n    <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n      <div *ngIf=\"f.email.errors.required\">Email Obligatoire</div>\r\n      <div *ngIf=\"f.email.errors.email\">Adresse Email non valides</div>\r\n  </div>\r\n    <div class=\"input-container\">\r\n      <label for=\"email\"> Email Utilisateur:</label>\r\n      <i class=\"fa fa-envelope icon\"></i>\r\n      <input class=\"input-field\" type=\"email\" placeholder=\"Entrez Votre Email\" id=\"email\" \r\n      [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\"formControlName=\"email\">\r\n      \r\n    </div>\r\n   \r\n</div>\r\n<div class=\"error-container\">\r\n  <div *ngIf=\"submitted && f.confirmemail.errors\" class=\"invalid-feedback\">\r\n    <div *ngIf=\"f.confirmemail.errors.required\">Email Obligatoire</div>\r\n    <div *ngIf=\"f.confirmemail.errors.email\">Adresse Email non valides</div>\r\n    <div *ngIf=\"f.confirmemail.errors.mustMatch\">Les Emails  ne sont pas identiques</div>\r\n  </div>\r\n    <div class=\"input-container\">\r\n      <label for=\"confirmemail\"> Confirmer Email Utilisateur:</label>\r\n      <i class=\"fa fa-envelope icon\"></i>\r\n      <input class=\"input-field\" type=\"email\" placeholder=\"Confirmez Votre Email\" id=\"confirmemail\" \r\n      [ngClass]=\"{ 'is-invalid': submitted && f.confirmemail.errors }\"formControlName=\"confirmemail\" required>\r\n     \r\n    </div>\r\n   \r\n  </div>\r\n  </div>\r\n  <div class=\"password-container\">\r\n    <div class=\"error-container\">\r\n      <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n        <div *ngIf=\"f.password.errors.required\">Mot de passe Obligatoire</div>\r\n        \r\n    </div>\r\n    <div class=\"input-container\">\r\n      <label for=\"usertype\"> Mot de Passe Utilisateur:</label>\r\n      <i class=\"fa fa-key icon\"></i>\r\n      <input class=\"input-field\" type=\"password\" placeholder=\"Entrez Votre Mot De Passe\" id=\"password\" \r\n      [ngClass]=\"{ 'is-invalid': submitted && f.confirmemail.errors }\"formControlName=\"password\" required>\r\n     \r\n    </div>\r\n   \r\n</div>\r\n<div class=\"error-container\">\r\n  <div *ngIf=\"submitted && f.confirmpassword.errors\" class=\"invalid-feedback\">\r\n    <div *ngIf=\"f.confirmpassword.errors.required\">Mot de passe Obligatoire</div>\r\n    <div *ngIf=\"f.confirmpassword.errors.mustMatch\">Les Mot de passe  ne sont pas identiques</div>\r\n  </div>\r\n    <div class=\"input-container\">\r\n      <label for=\"usertype\"> Confirmer Mot de Passe Utilisateur:</label>\r\n      <i class=\"fa fa-key icon\"></i>\r\n      <input class=\"input-field\" type=\"password\" placeholder=\"Confirmez Votre Mot De Passe\" id=\"confirmpassword\" \r\n      [ngClass]=\"{ 'is-invalid': submitted && f.confirmemail.errors }\"formControlName=\"confirmpassword\" required>\r\n     \r\n    </div>\r\n   \r\n  </div>\r\n  </div>\r\n    <button class=\"btn btn-success\">Inscription</button>\r\n    <button class=\"btn btn-secondary\" type=\"reset\" (click)=\"onReset()\">Réinitialiser</button>\r\n  </form>\r\n  <p>{{ errorMessage }}</p>\r\n  <div class=\"alert alert-success\" *ngIf=\"isSuccessful\">\r\n    Your registration is successful!\r\n  </div>\r\n</div>\r\n</div>\r\n</body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/coming-soon-page/coming-soon-page.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coming-soon-page/coming-soon-page.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\r\n    <div class=\"container-fluid\">\r\n    \r\n    <div class=\"middle\">\r\n      <h1>Bientôt en Marche</h1>\r\n      <hr>\r\n      <p>Page Introuvable Ou Fonctionnalité En cours de Développement</p>\r\n    </div>\r\n   \r\n  </div>\r\n</body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/complete-profil/complete-profil.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/complete-profil/complete-profil.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\r\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n    <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>\r\n    <script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js\"></script>\r\n</head>\r\n<body>\r\n  \r\n\r\n<div class=\"container-fluid\">\r\n  <div id=\"loader\" *ngIf=\"loading\"></div>\r\n  \r\n<div class=\"container-fluid\" *ngIf=\"!loading\"> \r\n   \r\n  \r\n<form  [formGroup]=\"userForm\">\r\n    <h2>Formulaire De Complétude Du Profil Utilisateur</h2>\r\n    <div *ngIf=\"!user.natureactivite || user.natureactivite=='Autre/null' || !user.activite || user.activite=='Autre/null'\r\n    || !user.sousactivite || user.sousactivite=='Autre/null' || user.regimefiscalimpot=='Autre/null'\r\n    || !user.regimefiscalimpot || !user.matriculefiscale|| !user.adresseactivite || !user.codepostal\">\r\n   <h4 *ngIf=\"user.usertype=='Client'\"> Veuillez renseigner les champs manquants avec des valeurs non vides pour pouvoir bénéficier des services offerts par MaCompta</h4>\r\n  </div>\r\n   \r\n   \r\n   \r\n   \r\n\r\n   \r\n     \r\n      <div title=\"indiquer votre nature d'activité\"class=\"input-container\"id=\"idactivitynature\">\r\n        <label for=\"activitynature\"> Nature D'activité:</label>\r\n        <i class=\"fa fa-fort-awesome icon\"></i>\r\n  <select  class=\"input-field\"  placeholder=\"Entrer Votre Nature Activité\" id=\"activitynature\" [(ngModel)]=\"optionValue\"formControlName=\"activitynature\" name=\"activitynature\" >\r\n    <option hidden [value]=\"user.natureactivite\">{{user.natureactivite}}</option>\r\n    <option value=\"Profession Libérale\">Profession Libérale</option>\r\n    <option hidden value=\"Commerçant\">Commerçant</option>\r\n    <option hidden value=\"Artisan\">Artisan</option>\r\n    <option hidden value=\"Salarié ou Pensionnaire\">Salarié ou Pensionnaire</option>\r\n    <option  hidden value=\"Autre\">Autre</option>\r\n  </select>\r\n    </div>\r\n    <div class=\"input-container\"id=\"selectactivitynature\"*ngIf=\"optionValue == 'Autre'\">\r\n      <label for=\"activitynature\"> Nature D'activité:</label>\r\n      <i class=\"fa fa-fort-awesome icon\"></i>\r\n      <input class=\"input-field\" type=\"text\" placeholder=\"Renseigner votre nature d'activité\" id=\"selectactivitynature\" formControlName=\"selectactivitynature\">\r\n    </div>\r\n    <div title=\"indiquer votre activité\"class=\"input-container\" id=\"idactivity\">\r\n      <label for=\"activity\"> Activité:</label> \r\n      <i class=\"fa fa-fort-awesome icon\"></i>\r\n<select  class=\"input-field\" placeholder=\"Entrer Votre Activité\" id=\"activity\" [(ngModel)]=\"option1Value\"formControlName=\"activity\" name=\"activity\" >\r\n  <option hidden [value]=\"user.activite\">{{user.activite}}</option>\r\n  <option disabled value=\"Médecin\">Médecin</option>\r\n  <option value=\"Avocat\">Avocat</option>\r\n  <option disabled value=\"Ingénieur\">Ingénieur</option>\r\n  <option disabled value=\"Architechte\">Architechte</option>\r\n  <option disabled value=\"médecin dentiste\">médecin dentiste</option>\r\n  <option disabled value=\"médecin vétérinaire\">médecin vétérinaire</option>\r\n  <option value=\"Autre\">Autre</option>\r\n</select>\r\n  </div>\r\n  <div class=\"input-container\"id=\"selectactivity\"*ngIf=\"option1Value == 'Autre'\">\r\n    <label for=\"activity\"> Activité:</label> \r\n    <i class=\"fa fa-fort-awesome icon\"></i>\r\n    <input class=\"input-field\" type=\"text\" placeholder=\"Renseigner votre activité\" id=\"selectactivity\" formControlName=\"selectactivity\">\r\n  </div>\r\n  <div title=\"indiquer votre sous-activité\"class=\"input-container-hidden\"id=\"idunderactivity\">\r\n    <label for=\"underactivity\"> Sous-Activité:</label>    \r\n    <i class=\"fa fa-fort-awesome icon\"></i>\r\n<select  class=\"input-field\" placeholder=\"Entrer Votre Sous-Activité\" id=\"underactivity\" [(ngModel)]=\"option2Value\"formControlName=\"underactivity\" name=\"underactivity\" >\r\n  <option hidden [value]=\"user.sousactivite\">{{user.sousactivite}}</option>\r\n\r\n<option value=\"Avocat\">Avocat</option>\r\n<option value=\"Avocat à la cour d'appel\">Avocat à la cour d'appel</option>\r\n<option value=\"Avocat à la cour de cassation\">Avocat à la cour de cassation</option>\r\n<option value=\"Autre\">Autre</option>\r\n</select>\r\n</div>\r\n<div class=\"input-container-hidden\"id=\"selectunderactivity\"*ngIf=\"option2Value == 'Autre'\">\r\n  <label for=\"underactivity\"> Sous-Activité:</label>\r\n  <i class=\"fa fa-fort-awesome icon\"></i>\r\n  <input class=\"input-field\" type=\"text\" placeholder=\"Renseigner votre Sous-Activité\" id=\"selectunderactivity\" formControlName=\"selectunderactivity\">\r\n</div>\r\n<div title=\"indiquer votre régime fiscal en matières d'impôts directs\"class=\"input-container\"id=\"idfiscalimpot\">\r\n  <label for=\"fiscalimpot\"> Régime Fiscal En Matières D'impôts Directs:</label>     \r\n  <i class=\"fa fa-fort-awesome icon\"></i>\r\n<select  class=\"input-field\" placeholder=\"Entrer Votre régime fiscal en matières d'impôts directs\" id=\"fiscalimpot\" [(ngModel)]=\"option3Value\"formControlName=\"fiscalimpot\" name=\"fiscalimpot\" >\r\n<option hidden [value]=\"user.regimefiscalimpot\">{{user.regimefiscalimpot}}</option>\r\n\r\n\r\n<option value=\"Réel\">Réel</option>\r\n<option value=\"Forfait D'assiette\">Forfait D'assiette</option>\r\n<option value=\"Autre\">Autre</option>\r\n</select>\r\n</div>\r\n<div class=\"input-container\"id=\"selectfiscalimpot\"*ngIf=\"option3Value == 'Autre'\">\r\n  <label for=\"fiscalimpot\"> Régime Fiscal En Matières D'impôts Directs:</label>\r\n  <i class=\"fa fa-fort-awesome icon\"></i>\r\n  <input class=\"input-field\" type=\"text\" placeholder=\"Renseigner régime fiscal en matières d'impôts directs\" id=\"selectfiscalimpot\" formControlName=\"selectfiscalimpot\">\r\n</div>\r\n<div class=\"input-container-disabled\" id=\"idfiscaltvaassobli\">\r\n  <label for=\"fiscaltvaassobli\"> Régime Fiscal En Matières D'impôts TVA:</label>\r\n  <i class=\"fa fa-fort-awesome icon\"></i>\r\n  <input class=\"input-field\" type=\"text\" placeholder=\"Modifier Votre régime fiscal en matières de TVA\" id=\"fiscaltvaassobli\" formControlName=\"fiscaltvaassobli\">\r\n</div>\r\n<div class=\"input-container-disabled\"id=\"idfiscalmat\">\r\n  <label for=\"fiscalmat\"> Matricule Fiscale:</label>\r\n  <i class=\"fa fa-fort-awesome icon\"></i>\r\n  <input class=\"input-field\" type=\"text\" placeholder=\"Modifier Votre Matricule Fiscale\" id=\"fiscalmat\" formControlName=\"fiscalmat\"\r\n  [ngClass]=\"{ 'is-invalid': submitted && f.fiscalmat.errors }\">\r\n  <div *ngIf=\"submitted && f.fiscalmat.errors\" class=\"invalid-feedback\">\r\n    <div *ngIf=\"f.fiscalmat.errors.pattern\">Format Incorrecte</div>\r\n</div> \r\n</div>\r\n<div class=\"input-container-disabled\"id=\"idfiscalmat\">\r\n  <label for=\"adresseactivite\"> Adresse D'activité:</label>\r\n  <i class=\"fa fa-fort-awesome icon\"></i>\r\n  <input class=\"input-field\" type=\"text\" placeholder=\"Modifier Votre Adresse D'activité\" id=\"adresseactivite\" formControlName=\"adresseactivite\">\r\n</div>\r\n<div class=\"input-container-disabled\"id=\"idfiscalmat\">\r\n  <label for=\"codepostal\"> Code Postal:</label>\r\n  <i class=\"fa fa-fort-awesome icon\"></i>\r\n  <input class=\"input-field\" type=\"text\" placeholder=\"Modifier Votre Code Postal\" id=\"codepostal\" formControlName=\"codepostal\">\r\n</div>\r\n     \r\n\r\n     \r\n\r\n\r\n   \r\n\r\n\r\n     \r\n   \r\n\r\n   \r\n    \r\n  \r\n    <button class=\"btn btn-success\" (click)=\"onSubmit()\" id=\"input12\">Envoyer Modification </button>\r\n  </form>\r\n  <p>{{ errormsg }}</p>\r\n  <div class=\"alert alert-success\" *ngIf=\"isSuccessful\">\r\n    Modificaion effectuée avec succès!!\r\n  </div>\r\n</div>\r\n</div>\r\n</body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/declare-fiscality/declare-fiscality.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/declare-fiscality/declare-fiscality.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\r\n    <link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\r\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\r\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\r\n</head>\r\n\r\n\r\n<body>\r\n    \r\n\r\n<div class=\"container-fluid\" style=\"text-align: center;\">\r\n    <h2 id=\"heading\" style=\"text-align: center;\">Déposer Votre Déclaration Fiscale</h2>\r\n    <div class=\"container-fluid-disabled\">\r\n      <p style=\"text-align: center;\">veuillez cocher pour afficher les sections convenables</p>\r\n    <div id=\"check1\" class=\"checkbox-container\">\r\n      \r\n      <div class=\"checkbox-container\">\r\n        \r\n        <div class=\"input-container\" id=\"Check1\">\r\n          <i class=\"fa fa-user icon\"></i>\r\n          <label for=\"myCheck1\">Ma Déclaration</label>\r\n          <input type=\"checkbox\" id=\"myCheck1\" (click)=\"myFunction1()\">\r\n        </div>\r\n        <div class=\"input-container\" id=\"Check2\">\r\n          <i class=\"fa fa-user icon\"></i>\r\n          <label for=\"myCheck2\">Une Déclaration D'Autrui</label>\r\n          <input type=\"checkbox\" id=\"myCheck2\" (click)=\"myFunction2()\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n   </div>\r\n      <div id=\"check2\" style=\"display: none;\" class=\"checkbox-container\"> \r\n      \r\n      <div class=\"checkbox-container\">\r\n        \r\n        <div class=\"input-container\" id=\"Check3\">\r\n          <i class=\"fa fa-user icon\"></i>\r\n          <label for=\"myCheck3\">Personne Physique</label>\r\n          <input type=\"checkbox\" id=\"myCheck3\" (click)=\"myFunction3()\">\r\n        </div>\r\n        <div class=\"input-container\" id=\"Check4\">\r\n          <i class=\"fa fa-user icon\"></i>\r\n          <label for=\"myCheck4\">Personne Morale</label>\r\n          <input type=\"checkbox\" id=\"myCheck4\" (click)=\"myFunction4()\">\r\n        </div>\r\n      </div>\r\n    </div> \r\n           \r\n    <p style=\"text-align: center;\">Veuillez Cochez Le Type De Déclaration Que Vous Souhaitez Faire</p>\r\n                <div class=\"checkbox-container\">\r\n        \r\n                    <div class=\"input-container\" id=\"Check7\"> \r\n                      <i class=\"fa fa-user icon\"></i>\r\n                      <label for=\"myCheck7\">Déclaration Mensuelle</label>\r\n                      <input type=\"checkbox\" id=\"myCheck7\" (click)=\"myFunction7()\">\r\n                    </div>\r\n                    <div class=\"input-container\" id=\"Check5\">\r\n                        <i class=\"fa fa-user icon\"></i>\r\n                        <label for=\"myCheck5\">Acompte Provisionnelle</label>\r\n                        <input type=\"checkbox\" id=\"myCheck5\" (click)=\"myFunction5()\">\r\n                      </div>\r\n                    <div class=\"input-container\" id=\"Check6\">\r\n                      <i class=\"fa fa-user icon\"></i>\r\n                      <label for=\"myCheck6\">Déclaration Annuelle</label>\r\n                      <input type=\"checkbox\" id=\"myCheck6\" (click)=\"myFunction6()\">\r\n                    </div>\r\n                  </div>\r\n    <table class=\"table table-striped\">\r\n       <tbody>\r\n          <tr>\r\n             <td colspan=\"1\">\r\n                \r\n                <form class=\"well form-horizontal\">\r\n                    \r\n                   <fieldset>\r\n                      <div class=\"form-group\">\r\n                         <label class=\"col-md-4 control-label\">Full Name</label>\r\n                         <div class=\"col-md-8 inputGroupContainer\">\r\n                            <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span><input id=\"fullName\" name=\"fullName\" placeholder=\"Full Name\" class=\"form-control\" required=\"true\" value=\"\" type=\"text\"></div>\r\n                         </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                         <label class=\"col-md-4 control-label\">Address Line 1</label>\r\n                         <div class=\"col-md-8 inputGroupContainer\">\r\n                            <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-home\"></i></span><input id=\"addressLine1\" name=\"addressLine1\" placeholder=\"Address Line 1\" class=\"form-control\" required=\"true\" value=\"\" type=\"text\"></div>\r\n                         </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                         <label class=\"col-md-4 control-label\">Address Line 2</label>\r\n                         <div class=\"col-md-8 inputGroupContainer\">\r\n                            <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-home\"></i></span><input id=\"addressLine2\" name=\"addressLine2\" placeholder=\"Address Line 2\" class=\"form-control\" required=\"true\" value=\"\" type=\"text\"></div>\r\n                         </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                         <label class=\"col-md-4 control-label\">City</label>\r\n                         <div class=\"col-md-8 inputGroupContainer\">\r\n                            <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-home\"></i></span><input id=\"city\" name=\"city\" placeholder=\"City\" class=\"form-control\" required=\"true\" value=\"\" type=\"text\"></div>\r\n                         </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                         <label class=\"col-md-4 control-label\">State/Province/Region</label>\r\n                         <div class=\"col-md-8 inputGroupContainer\">\r\n                            <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-home\"></i></span><input id=\"state\" name=\"state\" placeholder=\"State/Province/Region\" class=\"form-control\" required=\"true\" value=\"\" type=\"text\"></div>\r\n                         </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                         <label class=\"col-md-4 control-label\">Postal Code/ZIP</label>\r\n                         <div class=\"col-md-8 inputGroupContainer\">\r\n                            <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-home\"></i></span><input id=\"postcode\" name=\"postcode\" placeholder=\"Postal Code/ZIP\" class=\"form-control\" required=\"true\" value=\"\" type=\"text\"></div>\r\n                         </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                         <label class=\"col-md-4 control-label\">Country</label>\r\n                         <div class=\"col-md-8 inputGroupContainer\">\r\n                            <div class=\"input-group\">\r\n                               <span class=\"input-group-addon\" style=\"max-width: 100%;\"><i class=\"glyphicon glyphicon-list\"></i></span>\r\n                               <select class=\"selectpicker form-control\">\r\n                                  <option>A really long option to push the menu over the edget</option>\r\n                               </select>\r\n                            </div>\r\n                         </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                         <label class=\"col-md-4 control-label\">Email</label>\r\n                         <div class=\"col-md-8 inputGroupContainer\">\r\n                            <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-envelope\"></i></span><input id=\"email\" name=\"email\" placeholder=\"Email\" class=\"form-control\" required=\"true\" value=\"\" type=\"text\"></div>\r\n                         </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                         <label class=\"col-md-4 control-label\">Phone Number</label>\r\n                         <div class=\"col-md-8 inputGroupContainer\">\r\n                            <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-earphone\"></i></span><input id=\"phoneNumber\" name=\"phoneNumber\" placeholder=\"Phone Number\" class=\"form-control\" required=\"true\" value=\"\" type=\"text\"></div>\r\n                         </div>\r\n                      </div>\r\n                   </fieldset>\r\n                </form>\r\n             </td>\r\n             <td colspan=\"1\">\r\n                <form class=\"well form-horizontal\">\r\n                   <fieldset>\r\n                      <div class=\"form-group\">\r\n                         <label class=\"col-md-4 control-label\">Full Name</label>\r\n                         <div class=\"col-md-8 inputGroupContainer\">\r\n                            <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span><input id=\"fullName\" name=\"fullName\" placeholder=\"Full Name\" class=\"form-control\" required=\"true\" value=\"\" type=\"text\"></div>\r\n                         </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                         <label class=\"col-md-4 control-label\">Address Line 1</label>\r\n                         <div class=\"col-md-8 inputGroupContainer\">\r\n                            <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-home\"></i></span><input id=\"addressLine1\" name=\"addressLine1\" placeholder=\"Address Line 1\" class=\"form-control\" required=\"true\" value=\"\" type=\"text\"></div>\r\n                         </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                         <label class=\"col-md-4 control-label\">Address Line 2</label>\r\n                         <div class=\"col-md-8 inputGroupContainer\">\r\n                            <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-home\"></i></span><input id=\"addressLine2\" name=\"addressLine2\" placeholder=\"Address Line 2\" class=\"form-control\" required=\"true\" value=\"\" type=\"text\"></div>\r\n                         </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                         <label class=\"col-md-4 control-label\">City</label>\r\n                         <div class=\"col-md-8 inputGroupContainer\">\r\n                            <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-home\"></i></span><input id=\"city\" name=\"city\" placeholder=\"City\" class=\"form-control\" required=\"true\" value=\"\" type=\"text\"></div>\r\n                         </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                         <label class=\"col-md-4 control-label\">State/Province/Region</label>\r\n                         <div class=\"col-md-8 inputGroupContainer\">\r\n                            <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-home\"></i></span><input id=\"state\" name=\"state\" placeholder=\"State/Province/Region\" class=\"form-control\" required=\"true\" value=\"\" type=\"text\"></div>\r\n                         </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                         <label class=\"col-md-4 control-label\">Postal Code/ZIP</label>\r\n                         <div class=\"col-md-8 inputGroupContainer\">\r\n                            <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-home\"></i></span><input id=\"postcode\" name=\"postcode\" placeholder=\"Postal Code/ZIP\" class=\"form-control\" required=\"true\" value=\"\" type=\"text\"></div>\r\n                         </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                         <label class=\"col-md-4 control-label\">Country</label>\r\n                         <div class=\"col-md-8 inputGroupContainer\">\r\n                            <div class=\"input-group\">\r\n                               <span class=\"input-group-addon\" style=\"max-width: 100%;\"><i class=\"glyphicon glyphicon-list\"></i></span>\r\n                               <select class=\"selectpicker form-control\">\r\n                                  <option>A really long option to push the menu over the edget</option>\r\n                               </select>\r\n                            </div>\r\n                         </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                         <label class=\"col-md-4 control-label\">Email</label>\r\n                         <div class=\"col-md-8 inputGroupContainer\">\r\n                            <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-envelope\"></i></span><input id=\"email\" name=\"email\" placeholder=\"Email\" class=\"form-control\" required=\"true\" value=\"\" type=\"text\"></div>\r\n                         </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                         <label class=\"col-md-4 control-label\">Phone Number</label>\r\n                         <div class=\"col-md-8 inputGroupContainer\">\r\n                            <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-earphone\"></i></span><input id=\"phoneNumber\" name=\"phoneNumber\" placeholder=\"Phone Number\" class=\"form-control\" required=\"true\" value=\"\" type=\"text\"></div>\r\n                         </div>\r\n                      </div>\r\n                   </fieldset>\r\n                </form>\r\n             </td>\r\n          </tr>\r\n       </tbody>\r\n    </table>\r\n </div>\r\n</body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/due-date-timeline/due-date-timeline.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/due-date-timeline/due-date-timeline.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\r\n\t<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.5.0/css/all.css\" integrity=\"sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU\" crossorigin=\"anonymous\">\r\n  </head>\r\n  <body>\r\n\t  \r\n  \r\n<div id=\"loader\" *ngIf=\"loading\"></div>\r\n  <div class=\"col-lg-12\" *ngIf=\"!loading\">\r\n    <div class=\"container-fluid\">\r\n\t\t<h2 style=\"text-align:center\">Rappelez Vous!</h2>\r\n\t\t<hr>\r\n            \r\n      <div class=\"users-grid\" style=\"overflow-x:auto;overflow-y: auto;height: 600px;;\">\r\n\r\n        \r\n        \r\n        <table class=\"table table-striped\">\r\n          \r\n          <tbody>\r\n          <tr *ngFor=\"let event of events\">\r\n      \r\n            <td>{{event.date | date : \"dd-MM-y\"}}</td>\r\n            <td > <a routerLink=\"calendar-fiscality\" routerLinkActive=\"active\"> {{event.title}}</a></td>\r\n            \r\n            \r\n      \r\n           \r\n            \r\n            \r\n            \r\n            \r\n          \r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      \r\n    </div>\r\n  </div>\r\n</body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\r\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n    <script src=\"https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js\" integrity=\"sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p\" crossorigin=\"anonymous\"></script>\r\n    <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js\" integrity=\"sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT\" crossorigin=\"anonymous\"></script>\r\n  </head>\r\n  <body>\r\n    <nav class=\"navbar navbar-inverse\">\r\n        <div class=\"container-fluid\">\r\n          <ul class=\"nav navbar-nav\">\r\n            \r\n            \r\n            <li><a href=\"#usefullinks\">Liens Utiles</a></li>\r\n          </ul>\r\n          <ul class=\"nav navbar-nav navbar-right\">\r\n            <li><a href=\"#\" class=\"facebook\"><i class=\"fa fa-facebook\"></i></a></li>\r\n            <li><a href=\"#\" class=\"twitter\"><i class=\"fa fa-twitter\"></i></a></li>\r\n            <li><a href=\"#\" class=\"google\"><i class=\"fa fa-google\"></i></a> </li>\r\n            <li><a href=\"#\" class=\"linkedin\"><i class=\"fa fa-linkedin\"></i></a></li>\r\n            <li> <a href=\"#\" class=\"youtube\"><i class=\"fa fa-youtube\"></i></a> </li>\r\n          </ul>\r\n        </div>\r\n      </nav>\r\n      <div class=\"footer\">\r\n    \r\n          <h6>Tous droits réservés</h6>\r\n          \r\n      </div>\r\n    \r\n      \r\n    </body>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\r\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n</head>\r\n<body>\r\n    <div class=\"forgot-password-form\">\r\n        <form [formGroup]=\"forgotpasswordform\" (ngSubmit)=\"onSubmit()\">\r\n            <div class=\"avatar\">\r\n                <img src=\"../../assets/forgot pass icon.png\" alt=\"Avatar\">\r\n            </div>\r\n            <h2 class=\"text-center\">Mot de passe oublié</h2>   \r\n            <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" name=\"email\" formControlName=\"email\" placeholder=\"entrer votre email\" required=\"required\">\r\n            </div>\r\n                    \r\n            <div class=\"form-group\">\r\n                <button type=\"submit\"  class=\"btn btn-primary btn-lg btn-block\">Envoyer clé de regénération</button>\r\n            </div>\r\n            \r\n        </form>\r\n        <div *ngIf=\"errormsg\"><p>{{ errormsg }}</p></div>\r\n        <div *ngIf=\"successmsg\"><p>{{ successmsg }}</p></div>\r\n    </div>\r\n    </body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  <body>\r\n    <div class=\"header\">\r\n  \r\n      <h1>Bienvenue à votre cabinet virtuel MaCompta</h1>\r\n      \r\n  </div>\r\n    <nav class=\"navbar navbar-inverse\">\r\n      <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n          <a class=\"navbar-brand\" routerLink=\"home\" routerLinkActive=\"active\">MaCompta</a>\r\n        </div>\r\n        <ul class=\"nav navbar-nav\">\r\n          <li><a routerLink=\"\" routerLinkActive=\"active\">Acceuil</a></li>\r\n          <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" routerLink=\"Documentation\">Documentation <span class=\"caret\"></span></a>\r\n            <ul class=\"dropdown-menu\">\r\n              <li><a routerLink=\"Documentation\">comptables</a></li>\r\n              <li><a routerLink=\"Documentation\">juridiques</a></li>\r\n              <li><a routerLink=\"Documentation\">fiscales</a></li>\r\n              <li><a routerLink=\"Documentation\">sociales</a></li>\r\n              <li><a routerLink=\"Documentation\">autres</a></li>\r\n            </ul>\r\n          </li>\r\n          \r\n          <li title=\" (veuillez vous inscrire/se connecter)\"><a  routerLink=\"login\"*ngIf=\"!isLoggedIn\"routerLinkActive=\"active\">Qui sommes-nous?</a></li>\r\n          <li><a  routerLink=\"who\" *ngIf=\"isLoggedIn\" routerLinkActive=\"active\">Qui sommes-nous?</a></li>\r\n          <li><a *ngIf=\"isLoggedIn\" routerLink=\"Documentation\">Espace clients</a></li>\r\n          <li title=\" (veuillez vous inscrire/se connecter)\"><a routerLink=\"login\"  *ngIf=\"!isLoggedIn\" href=\"#clientspace\">Espace clients</a></li>\r\n          <li><a routerLink=\"why\" *ngIf=\"isLoggedIn\" routerLinkActive=\"active\">Pourquoi MAcompta?</a></li>\r\n          <li title=\" (veuillez vous inscrire/se connecter)\"><a routerLink=\"login\"  *ngIf=\"!isLoggedIn\"  routerLinkActive=\"active\">Pourquoi MAcompta?</a></li>\r\n          <li><a routerLink=\"/home/contact\"  target=”_blank” routerLinkActive=\"active\">Contact</a></li>\r\n          <li><a routerLink=\"Documentation\" *ngIf=\"isLoggedIn\" routerLinkActive=\"active\">Consultation en Ligne</a></li>\r\n          <li title=\" (veuillez vous inscrire/se connecter)\"><a routerLink=\"login\"  *ngIf=\"!isLoggedIn\" routerLinkActive=\"active\">Consultation en Ligne</a></li>\r\n          <li title=\" (Cliquer pour intégrer l'équipe MaCompta)\"><a routerLink=\"career\"  routerLinkActive=\"active\">Carrière</a></li>\r\n          <li class=\"dropdown\" style=\"cursor: pointer;\"><a class=\"dropdown-toggle\" *ngIf=\"isLoggedIn\"data-toggle=\"dropdown\">Suivi & Paramêtrage <span class=\"caret\"></span></a>\r\n            <ul class=\"dropdown-menu\">\r\n              <li><a routerLink=\"admin-board\" *ngIf=\"role=='admin'\" routerLinkActive=\"active\">Tableau de bord Admin</a></li>\r\n              <li><a routerLink=\"settings\" *ngIf=\"role=='admin'\" routerLinkActive=\"active\">Paramêtrage Admin</a></li>\r\n              <li><a routerLink=\"supervisor-board\" *ngIf=\"role=='supervisor'\"routerLinkActive=\"active\">Tableau de bord Superviseur</a></li>\r\n              <li><a routerLink=\"settings\" *ngIf=\"role=='supervisor'\" routerLinkActive=\"active\">Paramêtrage Superviseur</a></li>\r\n              <li><a routerLink=\"user-board\" *ngIf=\"role=='basic'\"routerLinkActive=\"active\">Tableau de bord Utilisateur</a></li>\r\n              <li><a routerLink=\"settings\" *ngIf=\"role=='basic'\" routerLinkActive=\"active\">Paramêtrage Utilisateur</a></li>\r\n              \r\n            </ul>\r\n          </li>\r\n        </ul>\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n          <li><a routerLink=\"profil\"  *ngIf=\"isLoggedIn\" routerLinkActive=\"active\">Profil {{username}} {{lastname}}</a></li>\r\n          <li title=\" (veuillez vous inscrire/se connecter)\"><a routerLink=\"login\"  *ngIf=\"!isLoggedIn\"    routerLinkActive=\"active\">Profil {{username}} {{lastname}}</a></li>\r\n          <li><a href class=\"nav-link\" *ngIf=\"role=='admin'\" routerLink=\"collab-create\" routerLinkActive=\"active\" > <span class=\"glyphicon glyphicon-user\"></span>Ajouter collaborateur</a></li>\r\n          <li><a href class=\"nav-link\" *ngIf=\"!isLoggedIn\" routerLink=\"signup\" routerLinkActive=\"active\" > <span class=\"glyphicon glyphicon-user\"></span>Inscription</a></li>\r\n          <li><a href class=\"nav-link\" *ngIf=\"!isLoggedIn\" routerLink=\"login\" routerLinkActive=\"active\" > <span class=\"glyphicon glyphicon-log-in\"></span>Connexion</a></li>\r\n          <li class=\"nav-item\">\r\n            <a href class=\"nav-link\" *ngIf=\"isLoggedIn\" (click)=\"logout()\"><span class=\"glyphicon glyphicon-log-out\"></span>Déconnexion</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </nav>\r\n    \r\n      \r\n    </body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/contact/contact.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/contact/contact.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\r\n  \r\n  <div id=\"loader\" *ngIf=\"loading\"></div>\r\n<div class=\"container-fluid\"*ngIf=\"!loading\">\r\n  \r\n  <div class=\"section-content\">\r\n    <h1 class=\"section-header\"> <span class=\"content-header wow fadeIn \" data-wow-delay=\"0.2s\" data-wow-duration=\"2s\"> Contatctez Nous</span></h1>\r\n    <h3>Nous vous garantissons l’excellence, la compétence et l’écoute engagée d’un partenaire</h3>\r\n  </div>\r\n  <div class=\"contact-section\" style=\"text-align: center;\">\r\n  <div class=\"container-fluid\">\r\n    <form [formGroup]=\"contactform\"(ngSubmit)=\"onSubmit()\"style=\"text-align: center;\">\r\n      <div class=\"col-md-6 form-line\">\r\n          <div class=\"form-group\">\r\n            <label for=\"lastname\">Nom</label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"lastname\" id=\"lastname\" placeholder=\" Entrez Votre Nom\"\r\n            [ngClass]=\"{ 'is-invalid': submitted && f.lastname.errors }\"placeholder=\"entrer votre nom\"required>\r\n            <div *ngIf=\"submitted && f.lastname.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.lastname.errors.required\">Nom Obligatoire</div>\r\n          </div>         \r\n          </div>\r\n          \r\n          \r\n          <div class=\"form-group\">\r\n            <label for=\"firstname\">Prenom</label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"firstname\" id=\"firstname\" placeholder=\" Entrez Votre Prenom\"\r\n            [ngClass]=\"{ 'is-invalid': submitted && f.firstname.errors }\"placeholder=\"entrer votre prenom\" required>\r\n            <div *ngIf=\"submitted && f.firstname.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.firstname.errors.required\">Prénom Obligatoire</div>\r\n          </div>\r\n          </div>\r\n         \r\n          \r\n<div class=\"form-group\">\r\n            <label for=\"email\">Adresse Email</label>\r\n            <input type=\"email\" class=\"form-control\" formControlName=\"email\"id=\"email\" placeholder=\" Entrez Votre Email\"\r\n            [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\"placeholder=\"entrer votre email\">\r\n            <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.email.errors.required\">Email Obligatoire</div>\r\n              <div *ngIf=\"f.email.errors.email\">Adresse Email non valides</div>\r\n          </div>\r\n          </div>\r\n         \r\n          <div class=\"form-group\">\r\n            <label for=\"mobile\">Numéro Mobile</label>\r\n            <input type=\"tel\" class=\"form-control\" id=\"mobile\" formControlName=\"mobile\"placeholder=\" Entrez Votre Numéro Mobile\"\r\n            [ngClass]=\"{ 'is-invalid': submitted && f.mobile.errors }\"placeholder=\"entrer votre mobile\" required>\r\n            <div *ngIf=\"submitted && f.mobile.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.mobile.errors.required\">Numéro Mobile Obligatoire</div>\r\n          </div>\r\n          </div>\r\n         \r\n          <div class=\"form-group\">\r\n            <label for=\"inputfile\">Attacher Fichier</label>                   \r\n           <input type=\"file\"  #filePicker (change)=\"onImagePick($event)\" class=\"form-control\" \r\n           accept=\"application/pdf\">\r\n           <div class=\"image-preview\" *ngIf=\"imagePreview\">\r\n             <img [src]=\"imagePreview\" alt=\"\">\r\n           </div>\r\n           <p class=\"text-success\" *ngIf=\"fileUploaded\">Fichier chargé !</p>\r\n       \r\n       </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <label for =\"description\"> Description</label>\r\n             <textarea  class=\"form-control\" id=\"description\" formControlName=\"description\"placeholder=\"Rédiger Votre Message\"\r\n             [ngClass]=\"{ 'is-invalid': submitted && f.description.errors }\"placeholder=\"Présentez vous brièvement\"required></textarea>\r\n                            <div *ngIf=\"submitted && f.description.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.description.errors.required\">Description Obligatoire</div>\r\n                            </div>\r\n          </div>\r\n        </div>\r\n          \r\n\r\n            <button type=\"submit\" class=\"btn btn-default submit\"><i class=\"fa fa-paper-plane\" aria-hidden=\"true\"></i>  Envoyer Message</button>\r\n            <button type=\"reset\" class=\"btn btn-default submit\"(click)=\"onReset()\">  Réinitialiser</button>\r\n            \r\n          \r\n       \r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n</div>\r\n</body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\r\n    \r\n  </head>\r\n  <body onload=\"document.getElementById('id01').style.display='block'\">\r\n    \r\n  \r\n    <div id=\"containid\" class=\"w3-container\" >\r\n      \r\n      <div id=\"id01\" class=\"w3-modal\">\r\n        \r\n        <div class=\"w3-modal-content w3-card-4 w3-animate-zoom\" style=\"max-width:600px\">\r\n    \r\n          <div class=\"w3-center\"><br>\r\n            <span onclick=\"document.getElementById('id01').style.display='none'\" class=\"w3-button w3-xlarge w3-hover-red w3-display-topright\" title=\"Close Modal\">&times;</span>\r\n            <img src=\"../../assets/home_background.jpg\" alt=\"Avatar\" style=\"width:30%\" class=\"w3-circle w3-margin-top\">\r\n            <h4>\r\n              Bienvenue à bord d’un cabinet que vous avez choisi comme « Médecin de famille » de votre entreprise.\r\n              Toute l’équipe du cabinet Macompta  vous souhaite la bienvenue.\r\n              Notre équipe est dotée de compétences dynamiques pour vous assister, au quotidien et sur toute la Tunisie, en matière comptable, fiscale, juridique, sociale, Etc.\r\n              Notre philosophie repose sur le fait que nous n’imposons pas de méthode de travail. Nous nous adaptons à la méthode de travail du client tout en proposant au fur et à mesure des améliorations, raison pour laquelle nous avons créé, outre notre bureau principal, une agence virtuelle.\r\n            </h4>\r\n          </div>\r\n    \r\n          <div class=\"w3-container w3-border-top w3-padding-16 w3-light-grey\">\r\n            <button onclick=\"document.getElementById('id01').style.display='none'\" type=\"button\" class=\"w3-button w3-red\" id=\"buttonwelcome\">Commencer Votre Navigation</button>\r\n            \r\n          </div>\r\n    \r\n        </div>\r\n      </div>\r\n    </div>\r\n  \r\n  \r\n  \r\n  <div class=\"actualitycarousel\">  \r\n      <h2>Actualités de votre cabinet</h2>\r\n  <div id=\"myCarousel\" class=\"carousel slide text-center\" data-ride=\"carousel\">\r\n      <!-- Indicators -->\r\n      <ol class=\"carousel-indicators\">\r\n        <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n        <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n        <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n      </ol>\r\n  \r\n      <!-- Wrapper for slides -->\r\n      <div class=\"carousel-inner\" role=\"listbox\">\r\n        <div class=\"item active\">\r\n          <h4>\"Actualité 1\"<br><span>Autre commentaire</span><br><a class=\"btn btn-primary\" href=\"documentation\">Lire Plus</a></h4>\r\n        </div>\r\n        <div class=\"item\">\r\n          <h4>\"Actualité 2\"<br><span>Autre commentaire</span><br><a class=\"btn btn-primary\" href=\"documentation\">Lire Plus</a></h4>\r\n        </div>\r\n        <div class=\"item\">\r\n          <h4>\"Actualité 3\"<br><span>Autre commentaire</span><br><a class=\"btn btn-primary\" href=\"documentation\">Lire Plus</a></h4>\r\n        </div>\r\n      </div>\r\n  \r\n      <!-- Left and right controls -->\r\n      <a class=\"left carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\r\n        <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Précédent</span>\r\n      </a>\r\n      <a class=\"right carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\r\n        <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Suivant</span>\r\n      </a>\r\n    </div>\r\n  </div>\r\n  \r\n  <!-- Container (Services Section) -->\r\n  <div class=\"container-fluid text-center\">\r\n      <h2>SERVICES</h2>\r\n      <h4>Qu'est ce que nous offrons?</h4>\r\n      <br>\r\n      <div class=\"row\">\r\n        <a routerLink=\"Documentation\"><div class=\"col-sm-4\">\r\n          <span class=\"glyphicon glyphicon-list-alt logo-small\"></span>\r\n          <h4>comptabilité</h4>\r\n          <p>Tenez votre comptabilité</p>\r\n        </div>\r\n      </a>\r\n      <a href=\"declare-fiscality\">\r\n        <div class=\"col-sm-4\">\r\n          <span class=\"glyphicon glyphicon-euro logo-small\"></span>\r\n          <h4>Fiscalité</h4>\r\n          <p>Etablissez vos déclarations fiscales</p>\r\n        </div>\r\n      </a>\r\n      <a routerLink=\"Documentation\">\r\n        <div class=\"col-sm-4\">\r\n          <span class=\"glyphicon glyphicon-bitcoin logo-small\"></span>\r\n          <h4>Paie</h4>\r\n          <p>Préparez vos fiches de paie</p>\r\n        </div>\r\n      </a>\r\n      </div>\r\n      <br><br>\r\n      <div class=\"row\">\r\n          <a routerLink=\"Documentation\">\r\n        <div class=\"col-sm-4_2\" >\r\n          <span class=\"glyphicon glyphicon-flash logo-small\"></span>\r\n          <h4>Conseil</h4>\r\n          <p>Demandez un conseil</p>\r\n        </div>\r\n      </a>\r\n      </div>\r\n    </div>\r\n  \r\n    \r\n  \r\n  <!-- Container (expertise areas section) -->\r\n  <div id=\"expertisecont\" class=\"container-fluid text-center\">\r\n    <h2>Domaines D'expertise</h2>\r\n    <h4>Nos interventions se rapportent à tous les services dans les divers domaines de gestion des entreprises dont notamment :</h4>\r\n    <br>\r\n    <div class=\"row\">\r\n      <a routerLink=\"Documentation\"><div class=\"col-sm-4\">\r\n        <span class=\"glyphicon glyphicon-list-alt logo-small\"></span>\r\n        <h4>création</h4>\r\n        <p>Accompagnement à la création d’entreprise</p>\r\n      </div>\r\n    </a>\r\n    <a routerLink=\"Documentation\">\r\n      <div class=\"col-sm-4\">\r\n        <span class=\"glyphicon glyphicon-list-alt logo-small\"></span>\r\n        <h4>Assistance</h4>\r\n        <p>Assistance comptable, juridique, fiscale et sociale</p>\r\n      </div>\r\n    </a>\r\n    <a routerLink=\"Documentation\">\r\n      <div class=\"col-sm-4\">\r\n        <span class=\"glyphicon glyphicon-list-alt logo-small\"></span>\r\n        <h4>Commissariat</h4>\r\n        <p>Commissariat aux comptes</p>\r\n      </div>\r\n    </a>\r\n    </div>\r\n    <br><br>\r\n    <div class=\"row\">\r\n        <a routerLink=\"Documentation\">\r\n      <div class=\"col-sm-4\" >\r\n        <span class=\"glyphicon glyphicon-list-alt logo-small\"></span>\r\n        <h4>Conseil</h4>\r\n        <p>Conseil en gestion et en choix d’investissement</p>\r\n      </div>\r\n    </a>\r\n      <a routerLink=\"Documentation\">\r\n    <div class=\"col-sm-4\" >\r\n      <span class=\"glyphicon glyphicon-list-alt logo-small\"></span>\r\n      <h4>Organisation</h4>\r\n      <p>Organisation et mise en place de manuels de procédures et de systèmes d’information</p>\r\n    </div>\r\n  </a>\r\n  <a routerLink=\"Documentation\">\r\n    <div class=\"col-sm-4\" >\r\n      <span class=\"glyphicon glyphicon-list-alt logo-small\"></span>\r\n      <h4>Commissariat aux apports</h4>\r\n      <p>Commissariat aux apports et évaluation</p>\r\n    </div>\r\n  </a>\r\n  </div>\r\n  <div class=\"row\">\r\n    <a routerLink=\"Documentation\">\r\n  <div class=\"col-sm-4\" >\r\n    <span class=\"glyphicon glyphicon-list-alt logo-small\"></span>\r\n    <h4>Liquidation</h4>\r\n    <p></p>\r\n  </div>\r\n  </a>\r\n  <a routerLink=\"Documentation\">\r\n  <div class=\"col-sm-4\" >\r\n  <span class=\"glyphicon glyphicon-list-alt logo-small\"></span>\r\n  <h4>Etudes</h4>\r\n  <p>Etudes</p>\r\n  </div>\r\n  </a>\r\n  <a routerLink=\"Documentation\">\r\n  <div class=\"col-sm-4\" >\r\n  <span class=\"glyphicon glyphicon-list-alt logo-small\"></span>\r\n  <h4>Formation</h4>\r\n  <p>Formation</p>\r\n  </div>\r\n  </a>\r\n  </div>\r\n  </div>\r\n  \r\n  <!-- Container (Portfolio Section) -->\r\n  <div class=\"container-fluid_2 text-center bg-grey\">\r\n    <h2>Références</h2><br>\r\n    <div class=\"row text-center\">\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"rounded-circle\">\r\n          <img src=\"../../assets/assad client.png\" alt=\"ASSAD\" >\r\n          <p><strong>ASSAD</strong></p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"rounded-circle\">\r\n          <img src=\"\" alt=\"Autre partenaire\" width=\"400\" height=\"300\">\r\n          <p><strong>Autre partenaire</strong></p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"rounded-circle\">\r\n          <img src=\"\" alt=\"Autre partenaire\" width=\"400\" height=\"300\">\r\n          <p><strong>autre partenaire</strong></p>\r\n        </div>\r\n      </div>\r\n  </div>\r\n  </div>\r\n  <div id=\"contactid\">\r\n  <router-outlet></router-outlet>\r\n  </div>\r\n      \r\n      \r\n      \r\n  \r\n  \r\n      \r\n    </body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\r\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n  </head>\r\n  \r\n \r\n\r\n\r\n  <body>\r\n    <div class=\"container-fluid\">\r\n    <div id=\"loader\" *ngIf=\"loading\"></div>\r\n    <div class=\"container-fluid\" *ngIf=\"!loading && !isLoggedIn\">\r\n      \r\n      <form [formGroup]=\"loginForm\" \r\n      \r\n      (ngSubmit)=\"loginform.valid && onSubmit()\"\r\n      \r\n      novalidate>\r\n        <div class=\"row\">\r\n          <h2 style=\"text-align:center\">Connectez vous avec vos réseaux sociaux ou manuellement</h2>\r\n          <div class=\"vl\">\r\n            <span class=\"vl-innertext\">OU</span>\r\n          </div>\r\n    \r\n          <div class=\"col\">\r\n            <a href=\"#\" class=\"fb btn\" style=\"min-width: max-content;\">\r\n              <i class=\"fa fa-facebook fa-fw\"></i> Connectez vous avec  Facebook\r\n             </a>\r\n            <a href=\"#\" class=\"twitter btn\" style=\"min-width: max-content;\">\r\n              <i class=\"fa fa-twitter fa-fw\"></i> Connectez vous avec Twitter\r\n            </a>\r\n            <a href=\"#\" class=\"google btn\" style=\"min-width: max-content;\"><i class=\"fa fa-google fa-fw\">\r\n              </i> Connectez vous avec  Google+\r\n            </a>\r\n          </div>\r\n    \r\n          <div class=\"col\">\r\n            <div class=\"hide-md-lg\">\r\n              <p>Ou Connectez vous manuellement:</p>\r\n            </div>\r\n   \r\n            <input type=\"email\" class=\"formcontrol\" formControlName=\"email\" placeholder=\"Email\" required>\r\n            \r\n            <input type=\"password\" formControlName=\"password\" placeholder=\"Mot De Passe\" required>\r\n            <input type=\"submit\" value=\"Login\" (click)=\"onLogin()\" [disabled]=\"loginForm.invalid\">\r\n            <p style=\"color: red;\">{{ errorMessage }}</p>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    \r\n      \r\n    <div class=\"bottom-container\">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <a routerLink=\"signup\" routerLinkActive=\"active\" style=\"color:white\" class=\"btn\">Inscrivez Vous</a>\r\n        </div>\r\n        <div class=\"col\">\r\n          <a  routerLink=\"forgot-password\" routerLinkActive=\"active\"style=\"color:white\" class=\"btn\">Mot de Passe Oublié?</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n  </div>\r\n  <div class=\"alert alert-success\" *ngIf=\"isLoggedIn\" routerLink=\"forgot-password\">\r\n  Bienvenue {{civilite}} {{ firstname}} {{ lastname}}\r\n  </div>\r\n</div>\r\n    </body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modify-condidate/modify-condidate.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modify-condidate/modify-condidate.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\r\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n    <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>\r\n</head>\r\n<body>\r\n  \r\n\r\n<div class=\"bodycontainer\">\r\n  <div id=\"loader\" *ngIf=\"loading\"></div>\r\n  \r\n<div class=\"container-fluid\" *ngIf=\"!loading\">\r\n   \r\n  \r\n<form  [formGroup]=\"condidateForm\">\r\n    <h2>Formulaire De Décision Du Sort Des Candidatures</h2>\r\n   \r\n    \r\n    \r\n\r\n      <div title=\"indiquer votre décision\"class=\"input-container\">\r\n        <i class=\"fa fa-user icon\"></i>\r\n        <input class=\"input-field\" type=\"text\" placeholder=\"Indiquer votre décision\" id=\"decision\" formControlName=\"decision\"required>\r\n      </div> \r\n      <div title=\"indiquer votre motif\"class=\"input-container\">\r\n        <i class=\"fa fa-user icon\"></i>\r\n        <input class=\"input-field\" type=\"text\" placeholder=\"Indiquer votre motif\" id=\"motif\" formControlName=\"motif\">\r\n      </div> \r\n     \r\n    \r\n  \r\n    <button class=\"btn btn-success\" (click)=\"onSubmit()\">Envoyer Modification</button>\r\n  </form>\r\n  <p>{{ errormsg }}</p>\r\n  <div class=\"alert alert-success\" *ngIf=\"isSuccessful\">\r\n    Modificaion effectuée avec succès!!\r\n  </div>\r\n</div>\r\n</div>\r\n</body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modify-contactreq/modify-contactreq.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modify-contactreq/modify-contactreq.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<head>\r\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n    <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>\r\n</head>\r\n<body>\r\n  \r\n\r\n<div class=\"bodycontainer\">\r\n  <div id=\"loader\" *ngIf=\"loading\"></div>\r\n  \r\n<div class=\"container-fluid\" *ngIf=\"!loading\">\r\n   \r\n  \r\n<form  [formGroup]=\"contactForm\">\r\n    <h2>Formulaire De Décision Du Sort Des Réclamations</h2>\r\n   \r\n    \r\n    \r\n\r\n      <div title=\"indiquer le statut de la réclamation\"class=\"input-container\">\r\n        <i class=\"fa fa-user icon\"></i>\r\n        <input class=\"input-field\" type=\"text\" placeholder=\"Indiquer le statut de la réclamation\" id=\"statut\" formControlName=\"statut\"required>\r\n      </div> \r\n      \r\n     \r\n    \r\n  \r\n    <button class=\"btn btn-success\" (click)=\"onSubmit()\">Envoyer Modification</button>\r\n  </form>\r\n  <p>{{ errormsg }}</p>\r\n  <div class=\"alert alert-success\" *ngIf=\"isSuccessful\">\r\n    Modificaion effectuée avec succès!!\r\n  </div>\r\n</div>\r\n</div>\r\n</body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modify-event/modify-event.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modify-event/modify-event.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<head>\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n    <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>\n</head>\n<body>\n  \n\n<div class=\"bodycontainer\">\n  <div id=\"loader\" *ngIf=\"loading\"></div>\n  \n<div class=\"container-fluid\" *ngIf=\"!loading\">\n   \n  \n<form  [formGroup]=\"eventForm\">\n    <h2>Formulaire De Modificaion Des Evènements</h2>\n   \n    \n    \n\n      <div class=\"input-container\">\n        <i class=\"fa fa-user icon\"></i>\n        <input class=\"input-field\" type=\"text\" placeholder=\"Modifier le titre de l'évènement\" id=\"title\" formControlName=\"title\">\n      </div> \n      <div class=\"input-container\">\n        <i class=\"fa fa-date icon\"></i>\n        <input class=\"input-field\" type=\"date\"  id=\"date\" formControlName=\"date\">\n      </div>\n      <div title=\"indiquer nom évènement\"class=\"input-container\">\n        <i class=\"fa fa-user icon\"></i>\n        <textarea  class=\"form-control\" id=\"description\" formControlName=\"description\"placeholder=\"Entrez votre commentaire\"\n         ></textarea>\n      </div> \n    \n  \n    <button class=\"btn btn-success\" (click)=\"onSubmit()\">Envoyer Modification</button>\n  </form>\n  <p>{{ errormsg }}</p>\n  <div class=\"alert alert-success\" *ngIf=\"isSuccessful\">\n    Modificaion effectuée avec succès!!\n  </div>\n</div>\n</div>\n</body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modify-user-admin/modify-user-admin.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modify-user-admin/modify-user-admin.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\r\n \r\n</head>\r\n<body>\r\n\r\n\r\n<div class=\"bodycontainer\">\r\n<div id=\"loader\" *ngIf=\"loading\"></div>\r\n\r\n<div class=\"container-fluid\" *ngIf=\"!loading\">\r\n \r\n\r\n<form  [formGroup]=\"userForm\">\r\n  <h2>Formulaire De Modification Des Données Utilisateurs</h2> \r\n  <div title=\"indiquer votre type utilisateur\" class=\"input-container\">\r\n    <div class=\"gender_icon\"><i class=\"fa fa-male\" ></i> <i class=\"fa fa-female\"></i></div>\r\n   \r\n<select  class=\"input-field\"  placeholder=\"Entrer Votre Type Utilisateur\"id=\"usertype\" formControlName=\"usertype\" name=\"usertype\" >\r\n<option hidden >Entrer Votre Type Utilisateur</option>\r\n<option value=\"Client\">Client</option>\r\n<option value=\"Collaborateur\">Collaborateur</option>\r\n<option value=\"Candidat\">Candidat</option>\r\n</select>\r\n</div>\r\n  <div title=\"indiquer votre civilite\"class=\"input-container\">\r\n      <div class=\"gender_icon\"><i class=\"fa fa-male\" ></i> <i class=\"fa fa-female\"></i></div>\r\n     \r\n<select  class=\"input-field\" placeholder=\"Entrer Votre Nom\" id=\"civilite\" formControlName=\"civilite\" name=\"civilite\" >\r\n  <option hidden >Modifier Votre Civilité</option>\r\n  <option value=\"Monsieur\">Monsieur</option>\r\n  <option value=\"Madame\">Madame</option>\r\n  <option value=\"Mademoiselle\">Mademoiselle</option>\r\n</select>\r\n  </div>\r\n\r\n  <div title=\"indiquer votre nom\"class=\"input-container\">\r\n      <i class=\"fa fa-user icon\"></i>\r\n      <input class=\"input-field\" type=\"text\" placeholder=\"Modifier Votre Nom\" id=\"lastname\" formControlName=\"lastname\" name=\"lastname\">\r\n    </div>\r\n\r\n    <div title=\"indiquer votre prenom\"class=\"input-container\">\r\n      <i class=\"fa fa-user icon\"></i>\r\n      <input class=\"input-field\" type=\"text\" placeholder=\"Modifier Votre Prenom\" id=\"firstname\" formControlName=\"firstname\">\r\n    </div> \r\n\r\n    <div title=\"indiquer votre raisonsociale\"class=\"input-container\">\r\n      <i class=\"fa fa-fort-awesome icon\"></i>\r\n      <input class=\"input-field\" type=\"text\" placeholder=\"Modifier Votre Raison Sociale\" id=\"raisonsociale\" formControlName=\"raisonsociale\">\r\n    </div>  \r\n\r\n    <div title=\"indiquer votre fonction\"class=\"input-container\">\r\n      <i class=\"fa fa-fort-awesome icon\" ></i>\r\n    <input class=\"input-field\" type=\"text\" [(ngModel)]=\"codeValue\" id=\"fonction\" formControlName=\"fonction\" name=\"fonction\" list=\"fonctions\" />\r\n<datalist id=\"fonctions\">\r\n<option *ngFor=\"let user of users\" [value]=\"user.fonction\" >{{user.fonction}}</option>\r\n</datalist>\r\n    \r\n  </div>\r\n    \r\n    \r\n\r\n\r\n  <div title=\"indiquer votre nomsociete\"class=\"input-container\">\r\n      <i class=\"fa fa-fort-awesome icon\"></i>\r\n      <input class=\"input-field\" type=\"text\" placeholder=\"Modifier Nom Societe\" id=\"nomsociete\" formControlName=\"nomsociete\">\r\n    </div>\r\n\r\n\r\n  <div title=\"indiquer votre secteur\"class=\"input-container\">\r\n      <i class=\"fa fa-fort-awesome icon\" ></i> \r\n     \r\n\r\n  <input class=\"input-field\" type=\"text\" [(ngModel)]=\"secteurValue\" id=\"secteur\" formControlName=\"secteur\" name=\"secteur\" list=\"secteurs\" />\r\n<datalist id=\"secteurs\">\r\n<option *ngFor=\"let user of users\" [value]=\"user.secteur\" >{{user.secteur}}</option>\r\n</datalist>\r\n  </div>\r\n  <div title=\"indiquer votre clientcode\"class=\"input-container\">\r\n    <i class=\"fa fa-user icon\"></i>\r\n    <input class=\"input-field\" type=\"text\" placeholder=\"code client\" id=\"clientcode\" formControlName=\"clientcode\">\r\n  </div>\r\n\r\n  <div title=\"indiquer votre role\"class=\"input-container\">\r\n    <i class=\"fa fa-fort-awesome icon\" ></i> \r\n   \r\n\r\n<input class=\"input-field\" type=\"text\" [(ngModel)]=\"roleValue\" id=\"role\" formControlName=\"role\" name=\"role\" list=\"roles\" />\r\n<datalist id=\"roles\">\r\n<option *ngFor=\"let user of users\" [value]=\"user.role\" >{{user.role}}</option>\r\n</datalist>\r\n</div>\r\n\r\n<div class=\"email-container\">\r\n  <div class=\"input-container\">\r\n    <i class=\"fa fa-envelope icon\"></i>\r\n    <input class=\"input-field\" type=\"email\" placeholder=\"Entrez Votre Email\" id=\"email\" formControlName=\"email\" required>\r\n  </div>\r\n  <div class=\"input-container\">\r\n    <i class=\"fa fa-envelope icon\"></i>\r\n    <input class=\"input-field\" type=\"email\" placeholder=\"Confirmez Votre Email\" id=\"confirmemail\" formControlName=\"confirmemail\" required>\r\n  </div>\r\n</div>\r\n<div class=\"mobile-container\">\r\n  <div class=\"input-container\">\r\n    <i class=\"fa fa-phone icon\"></i>\r\n    <input class=\"input-field\" type=\"text\" placeholder=\"Entrez Votre Numéro Mobile\" id=\"mobile\" formControlName=\"mobile\" required>\r\n  </div>\r\n  <div class=\"input-container\">\r\n    <i class=\"fa fa-phone icon\"></i>\r\n    <input class=\"input-field\" type=\"text\" placeholder=\"Confirmez Votre Numéro Mobile\" id=\"confirmmobile\" formControlName=\"confirmmobile\" required>\r\n  </div>\r\n</div>\r\n  \r\n  \r\n\r\n  <button class=\"btn btn-success\" (click)=\"onSubmit()\" >Envoyer Modification</button>\r\n</form>\r\n<p>{{ errorMessage }}</p>\r\n<div class=\"alert alert-success\" *ngIf=\"isSuccessful\">\r\n  Modificaion effectuée avec succès!!\r\n</div>\r\n</div>\r\n</div>\r\n</body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modify-user/modify-user.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modify-user/modify-user.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\r\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n    <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>\r\n    <script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js\"></script>\r\n</head>\r\n<body>\r\n  \r\n\r\n<div class=\"container-fluid\">\r\n  <div id=\"loader\" *ngIf=\"loading\"></div>\r\n  \r\n<div class=\"container-fluid\" *ngIf=\"!loading\"> \r\n   \r\n  \r\n<form  [formGroup]=\"userForm\">\r\n    <h2>Formulaire De Modification Des Données Utilisateurs</h2>\r\n    \r\n    \r\n    \r\n    \r\n    <div class=\"input-container\" id=\"input1\"title=\"indiquer votre civilité\" >\r\n        \r\n        <label for=\"civilite\"> Civilite:</label>\r\n        <div class=\"gender_icon\"><i class=\"fa fa-male\" ></i> <i class=\"fa fa-female\"></i></div>\r\n  <select  class=\"input-field\" placeholder=\"Entrer Votre Nom\" id=\"civilite\" formControlName=\"civilite\" name=\"civilite\" >\r\n    <option hidden >Modifier Votre Civilité</option>\r\n    <option value=\"Monsieur\">Monsieur</option>\r\n    <option value=\"Madame\">Madame</option>\r\n    <option value=\"Mademoiselle\">Mademoiselle</option>\r\n  </select>\r\n    </div>\r\n\r\n    <div title=\"indiquer votre nom\"class=\"input-container\"  id=\"input2\">\r\n      <label for=\"civilite\"> Nom:</label>\r\n      <i class=\"fa fa-user icon\"></i>\r\n        <input class=\"input-field\" type=\"text\" placeholder=\"Modifier Votre Nom\" id=\"lastname\" formControlName=\"lastname\" name=\"lastname\">\r\n      </div>\r\n\r\n      <div title=\"indiquer votre prenom\"class=\"input-container\"  id=input3>\r\n        <label for=\"civilite\"> Prenom:</label>\r\n        <i class=\"fa fa-user icon\"></i>\r\n        <input class=\"input-field\" type=\"text\" placeholder=\"Modifier Votre Prenom\" id=\"firstname\" formControlName=\"firstname\">\r\n      </div> \r\n      <div class=\"mobile-container\"  id=\"input4\">\r\n        <div class=\"input-container\">\r\n          <label for=\"civilite\"> Numéro Mobile:</label>\r\n          <i class=\"fa fa-phone icon\"></i>\r\n          <input class=\"input-field\" type=\"text\" placeholder=\"Entrez Votre Numéro Mobile\" id=\"mobile\" formControlName=\"mobile\" >\r\n        </div>\r\n        <div class=\"input-container\">\r\n          <label for=\"civilite\"> Confirmer Numéro Mobile:</label>\r\n          <i class=\"fa fa-phone icon\"></i>\r\n          <input class=\"input-field\" type=\"text\" placeholder=\"Confirmez Votre Numéro Mobile\" id=\"confirmmobile\" formControlName=\"confirmmobile\" >\r\n        </div>\r\n      </div>\r\n      <div title=\"indiquer votre nature d'activité\"class=\"input-container\"id=\"idactivitynature\">\r\n        <label for=\"activitynature\"> Nature D'activité:</label>\r\n        <i class=\"fa fa-fort-awesome icon\"></i>\r\n  <select  class=\"input-field\"  placeholder=\"Entrer Votre Nature Activité\" id=\"activitynature\" [(ngModel)]=\"optionValue\"formControlName=\"activitynature\" name=\"activitynature\" >\r\n    <option hidden [value]=\"currentuser.natureactivite\">{{currentuser.natureactivite}}</option>\r\n    <option value=\"Profession Libérale\">Profession Libérale</option>\r\n    <option disabled value=\"Commerçant\">Commerçant</option>\r\n    <option disabled value=\"Artisan\">Artisan</option>\r\n    <option disabled value=\"Salarié ou Pensionnaire\">Salarié ou Pensionnaire</option>\r\n    <option value=\"Autre\">Autre</option>\r\n  </select>\r\n    </div>\r\n    <div class=\"input-container\"id=\"selectactivitynature\"*ngIf=\"optionValue == 'Autre'\">\r\n      <label for=\"activitynature\"> Nature D'activité:</label>\r\n      <i class=\"fa fa-fort-awesome icon\"></i>\r\n      <input class=\"input-field\" type=\"text\" placeholder=\"Renseigner votre nature d'activité\" id=\"selectactivitynature\" formControlName=\"selectactivitynature\">\r\n    </div>\r\n    <div title=\"indiquer votre activité\"class=\"input-container\" id=\"idactivity\">\r\n      <label for=\"activity\"> Activité:</label> \r\n      <i class=\"fa fa-fort-awesome icon\"></i>\r\n<select  class=\"input-field\" placeholder=\"Entrer Votre Activité\" id=\"activity\" [(ngModel)]=\"option1Value\"formControlName=\"activity\" name=\"activity\" >\r\n  <option hidden [value]=\"currentuser.activite\">{{currentuser.activite}}</option>\r\n  <option disabled value=\"Médecin\">Médecin</option>\r\n  <option value=\"Avocat\">Avocat</option>\r\n  <option disabled value=\"Ingénieur\">Ingénieur</option>\r\n  <option disabled value=\"Architechte\">Architechte</option>\r\n  <option value=\"Autre\">Autre</option>\r\n</select>\r\n  </div>\r\n  <div class=\"input-container\"id=\"selectactivity\"*ngIf=\"option1Value == 'Autre'\">\r\n    <label for=\"activity\"> Activité:</label>\r\n    <i class=\"fa fa-fort-awesome icon\"></i>\r\n    <input class=\"input-field\" type=\"text\" placeholder=\"Renseigner votre activité\" id=\"selectactivity\" formControlName=\"selectactivity\">\r\n  </div>\r\n  <div title=\"indiquer votre sous-activité\"class=\"input-container\"id=\"idunderactivity\">\r\n    <label for=\"underactivity\"> Sous-Activité:</label>   \r\n    <i class=\"fa fa-fort-awesome icon\"></i>\r\n<select  class=\"input-field\" placeholder=\"Entrer Votre Sous-Activité\" id=\"underactivity\" [(ngModel)]=\"option2Value\"formControlName=\"underactivity\" name=\"underactivity\" >\r\n  <option hidden [value]=\"currentuser.sousactivite\">{{currentuser.sousactivite}}</option>\r\n\r\n<option value=\"Avocat\">Avocat</option>\r\n<option value=\"Avocat à la cour d'appel\">Avocat à la cour d'appel</option>\r\n<option value=\"Avocat à la cour de cassation\">Avocat à la cour de cassation</option>\r\n<option value=\"Autre\">Autre</option>\r\n</select>\r\n</div>\r\n<div class=\"input-container\"id=\"selectunderactivity\"*ngIf=\"option2Value == 'Autre'\">\r\n  <label for=\"underactivity\"> Sous-Activité:</label>\r\n  <i class=\"fa fa-fort-awesome icon\"></i>\r\n  <input class=\"input-field\" type=\"text\" placeholder=\"Renseigner votre Sous-Activité\" id=\"selectunderactivity\" formControlName=\"selectunderactivity\">\r\n</div>\r\n<div title=\"indiquer votre régime fiscal en matières d'impôts directs\"class=\"input-container\"id=\"idfiscalimpot\">\r\n  <label for=\"fiscalimpot\"> Régime Fiscal En Matières D'impôts Directs:</label>     \r\n  <i class=\"fa fa-fort-awesome icon\"></i>\r\n<select  class=\"input-field\" placeholder=\"Entrer Votre régime fiscal en matières d'impôts directs\" id=\"fiscalimpot\" [(ngModel)]=\"option3Value\"formControlName=\"fiscalimpot\" name=\"fiscalimpot\" >\r\n  <option hidden [value]=\"currentuser.regimefiscalimpot\">{{currentuser.regimefiscalimpot}}</option>\r\n\r\n\r\n<option value=\"Réel\">Réel</option>\r\n<option value=\"Forfait D'assiette\">Forfait D'assiette</option>\r\n<option value=\"Autre\">Autre</option>\r\n</select>\r\n</div>\r\n<div class=\"input-container\"id=\"selectfiscalimpot\"*ngIf=\"option3Value == 'Autre'\">\r\n  <label for=\"fiscalimpot\"> Régime Fiscal En Matières D'impôts Directs:</label>\r\n  <i class=\"fa fa-fort-awesome icon\"></i>\r\n  <input class=\"input-field\" type=\"text\" placeholder=\"Renseigner régime fiscal en matières d'impôts directs\" id=\"selectfiscalimpot\" formControlName=\"selectfiscalimpot\">\r\n</div>\r\n<div class=\"input-container\" id=\"idfiscaltvaassobli\">\r\n  <label for=\"fiscaltvaassobli\"> Régime Fiscal En Matières D'impôts TVA:</label>\r\n  <i class=\"fa fa-fort-awesome icon\"></i>\r\n  <input class=\"input-field\" type=\"text\" placeholder=\"Modifier Votre régime fiscal en matières de TVA\" id=\"fiscaltvaassobli\" formControlName=\"fiscaltvaassobli\">\r\n</div>\r\n<div class=\"input-container\"id=\"idfiscalmat\">\r\n  <label for=\"fiscalmat\"> Matricule Fiscale:</label>\r\n  <i class=\"fa fa-fort-awesome icon\"></i>\r\n  <input class=\"input-field\" type=\"text\" placeholder=\"Modifier Votre Matricule Fiscale\" id=\"fiscalmat\" formControlName=\"fiscalmat\"\r\n  [ngClass]=\"{ 'is-invalid': submitted && f.fiscalmat.errors }\">\r\n  <div *ngIf=\"submitted && f.fiscalmat.errors\" class=\"invalid-feedback\">\r\n    <div *ngIf=\"f.fiscalmat.errors.pattern\">Format Incorrecte</div>\r\n</div>\r\n</div>\r\n<div class=\"input-container-disabled\"id=\"idfiscalmat\">\r\n  <label for=\"adresseactivite\"> Adresse D'activité:</label>\r\n  <i class=\"fa fa-fort-awesome icon\"></i>\r\n  <input class=\"input-field\" type=\"text\" placeholder=\"Modifier Votre Adresse D'activité\" id=\"adresseactivite\" formControlName=\"adresseactivite\">\r\n</div>\r\n<div class=\"input-container-disabled\"id=\"idfiscalmat\">\r\n  <label for=\"codepostal\"> Code Postal:</label>\r\n  <i class=\"fa fa-fort-awesome icon\"></i>\r\n  <input class=\"input-field\" type=\"text\" placeholder=\"Modifier Votre Code Postal\" id=\"codepostal\" formControlName=\"codepostal\">\r\n</div>\r\n      <div title=\"indiquer votre raisonsociale\"class=\"input-container\">\r\n        <label for=\"fiscalmat\"> Raison Sociale:</label>\r\n        <i class=\"fa fa-fort-awesome icon\"></i>\r\n        <input class=\"input-field\" type=\"text\" placeholder=\"Modifier Votre Raison Sociale\" id=\"raisonsociale\" formControlName=\"raisonsociale\">\r\n      </div>  \r\n\r\n      <div title=\"indiquer votre fonction\"class=\"input-container\" id=\"input5\">\r\n        <label for=\"fiscalmat\"> Fonction:</label>\r\n        <i class=\"fa fa-fort-awesome icon\" ></i>\r\n      <input class=\"input-field\" type=\"text\" [(ngModel)]=\"codeValue\" placeholder=\"Fonction actuelle:{{currentuser.fonction}}\"id=\"fonction\" formControlName=\"fonction\" name=\"fonction\" list=\"fonctions\" />\r\n  <datalist id=\"fonctions\">\r\n  <option *ngFor=\"let user of users\" [value]=\"user.fonction\" >{{currentuser.fonction}}</option>\r\n  </datalist>\r\n      \r\n    </div>\r\n\r\n\r\n    <div title=\"indiquer votre nomsociete\"class=\"input-container\" id=\"input6\">\r\n      <label for=\"fiscalmat\"> Nom Societe:</label>  \r\n      <i class=\"fa fa-fort-awesome icon\"></i>\r\n        <input class=\"input-field\" type=\"text\" placeholder=\"Modifier Nom Societe\" id=\"nomsociete\" formControlName=\"nomsociete\">\r\n      </div>\r\n\r\n\r\n      <div title=\"indiquer votre secteur\"class=\"input-container\" id=\"input7\">\r\n        <label for=\"fiscalmat\"> Secteur:</label>\r\n        <i class=\"fa fa-fort-awesome icon\" ></i> \r\n       \r\n  \r\n    <input class=\"input-field\" type=\"text\" [(ngModel)]=\"secteurValue\" placeholder=\"Secteur Actuel:{{currentuser.secteur}}\"id=\"secteur\" formControlName=\"secteur\" name=\"secteur\" list=\"secteurs\" />\r\n  <datalist id=\"secteurs\">\r\n  <option *ngFor=\"let user of users\" [value]=\"user.secteur\" ></option>\r\n  </datalist>\r\n    </div>\r\n    <div title=\"indiquer votre clientcode\"class=\"input-container\" id=\"input8\">\r\n      <label for=\"fiscalmat\"> Code Client:</label>\r\n      <i class=\"fa fa-user icon\"></i>\r\n      <input class=\"input-field\" type=\"text\" placeholder=\"code client\" id=\"clientcode\" formControlName=\"clientcode\">\r\n    </div>\r\n\r\n    <div class=\"email-container\" id=\"input9\">\r\n      <div class=\"input-container\">\r\n        <label for=\"fiscalmat\"> Email:</label>\r\n        <i class=\"fa fa-envelope icon\"></i>\r\n        <input class=\"input-field\" type=\"email\" placeholder=\"Entrez Votre Email\" id=\"email\" formControlName=\"email\" >\r\n      </div>\r\n      <div class=\"input-container\">\r\n        <label for=\"fiscalmat\"> Confirmer Email:</label>\r\n        <i class=\"fa fa-envelope icon\"></i>\r\n        <input class=\"input-field\" type=\"email\" placeholder=\"Confirmez Votre Email\" id=\"confirmemail\" formControlName=\"confirmemail\" >\r\n      </div>\r\n    </div>\r\n    \r\n    <div title=\"Modifier votre Mot de passe\"class=\"input-container\" id=\"input10\">\r\n      <label for=\"fiscalmat\"> Mot De Passe:</label>\r\n      <i class=\"fa fa-key icon\"></i>\r\n      <input class=\"input-field\" type=\"password\" placeholder=\"Modifier votre Mot de passe\" id=\"password\" formControlName=\"password\">\r\n    </div>\r\n    <div title=\"Confirmer votre Mot de passe\"class=\"input-container\" id=\"input11\">\r\n      <label for=\"fiscalmat\"> Confirmer Mot De Passe:</label>\r\n      <i class=\"fa fa-key icon\"></i>\r\n      <input class=\"input-field\" type=\"password\" placeholder=\"confirmer votre Mot de passe\" id=\"confirmpassword\" formControlName=\"confirmpassword\">\r\n    </div>\r\n    \r\n  \r\n    <button class=\"btn btn-success\" (click)=\"onSubmit()\" id=\"input12\">Envoyer Modification </button>\r\n  </form>\r\n  <p>{{ errormsg }}</p>\r\n  <div class=\"alert alert-success\" *ngIf=\"isSuccessful\">\r\n    Modificaion effectuée avec succès!!\r\n  </div>\r\n</div>\r\n</div>\r\n</body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profil/profil.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profil/profil.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n  <body>\r\n\r\n    <h2 style=\"text-align: center;\">Informations générales</h2>\r\n    \r\n    <div class=\"container-fluid\">\r\n      <img src=\"../../assets/img_avatar.png\" *ngIf=\"user.civilite=='Monsieur'\" else alt=\"Avatar\" style=\"width:10% ;height:10%\">\r\n      <img src=\"../../assets/img_avatar2.png\" *ngIf=\"user.civilite!='Monsieur'\" alt=\"Avatar\" style=\"width:10% ;height:10%\">\r\n      <div class=\"container-fluid\">\r\n        <h4 >Utilisateur connecté:</h4><hr><h4>{{ user.civilite }} <b>  {{ user.firstname }} {{ user.lastname }}</b></h4> \r\n        <h4>Crée le(heure GMT):<b>  {{ user.created }}</b></h4>\r\n        <h4>Dernière modificationle(heure GMT):<b>  {{ user.updated }}</b></h4>\r\n        <h4>Numéro mobile:<b>  {{ user.mobile }}</b></h4>\r\n        <h4>Type utilisateur:<b>  {{ user.usertype }}</b></h4>\r\n        <h4>Fonction:<b>  {{ user.fonction }}</b></h4>\r\n        <h4>Raisonsociale:<b>  {{ user.raisonsociale }}</b></h4>\r\n        <h4>Secteur:<b>  {{ user.secteur }}</b></h4>\r\n        <h4>Nomsociete:<b>  {{ user.nomsociete }}</b></h4>\r\n        <h4>Email:<b>  {{ user.email }}</b></h4>\r\n        <h4>Code client<b>  {{ user.clientcode }}</b></h4>\r\n        <h4>Nature Activité:<b>  {{ user.natureactivite }}</b></h4>\r\n        <h4>Activité:<b>  {{ user.activite }}</b></h4>\r\n        <h4>Sous-Activité:<b>  {{ user.sousactivite }}</b></h4>\r\n        <h4>Régime fiscal en matières d'impôts directs:<b>  {{ user.regimefiscalimpot }}</b></h4>\r\n        <h4>Régime fiscal en matières de TVA:<b>  {{ user.regimefiscaltva }}</b></h4>\r\n        <h4>Matricule Fiscale:<b>  {{ user.matriculefiscale }}</b></h4>\r\n        <h4>Adresse D'activité:<b>  {{ user.adresseactivite}}</b></h4>\r\n        <h4>Code Postal:<b>  {{ user.codepostal }}</b></h4>\r\n      </div>\r\n      <div *ngIf=\"user.usertype=='Client'\"><button type=\"button\" class=\"btn btn-success\" (click)=\"getNavigation('complete-profil', currentUser.userId)\" \r\n      *ngIf=\"!user.natureactivite || user.natureactivite=='Autre/null' || !user.activite || user.activite=='Autre/null'\r\n      || !user.sousactivite || user.sousactivite=='Autre/null' || user.regimefiscalimpot=='Autre/null'\r\n      || !user.regimefiscalimpot || !user.matriculefiscale|| !user.adresseactivite || !user.codepostal\"\r\n      >Compléter</button></div>\r\n      <button type=\"button\" class=\"btn btn-warning\" (click)=\"getNavigation('modify-user', currentUser.userId)\">Modifier</button>\r\n      \r\n    </div>\r\n    \r\n    </body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/reset-password/reset-password.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reset-password/reset-password.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\r\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n    <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto|Varela+Round\">\r\n\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\">\r\n</head>\r\n<body>\r\n    <div class=\"team-section\">\r\n        <div class=\"container-fluid\">\r\n        <div class=\"loader\" *ngIf=\"tokenStatus == TokenStatus.Validating\"></div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\" >\r\n              <div class=\"team-member\" *ngIf=\"tokenStatus == TokenStatus.Valid\">\r\n                <div class=\"icon-box-success\">\r\n                    <i class=\"material-icons\">&#xE876;</i>\r\n                </div>\t         \r\n                <h3>{{successmessage}}</h3>\r\n                <hr>\r\n                </div>\r\n            </div>\r\n            \r\n          </div>\r\n        \r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12\" >\r\n              <div class=\"team-member\" *ngIf=\"tokenStatus == TokenStatus.Invalid\">\r\n                <div class=\"icon-box-failure\">\r\n                    <i class=\"material-icons\">&#xE5CD;</i>\r\n                </div>         \r\n                <h3>Vérification échouée, vous pouvez passer par le lien ci-desous</h3>\r\n                <hr>\r\n                </div>\r\n            </div>\r\n            \r\n          </div>\r\n        </div>\r\n        </div>\r\n    \r\n    <div class=\"reset-password-form\">\r\n        \r\n        <form [formGroup]=\"resetpasswordform\" *ngIf=\"tokenStatus == TokenStatus.Valid\"(ngSubmit)=\"onSubmit()\">\r\n            <div class=\"avatar\">\r\n                <img src=\"../../assets/forgot pass icon.png\" alt=\"Avatar\">\r\n            </div>\r\n           \r\n            <h2 class=\"text-center\">Regénérer Mot De Passe</h2>   \r\n            <div class=\"form-group\">\r\n                <input type=\"password\" class=\"form-control\" name=\"password\" formControlName=\"password\" placeholder=\"entrer votre nouveau mot de passe\" required=\"required\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input type=\"password\" class=\"form-control\" name=\"confirmpassword\" formControlName=\"confirmpassword\" placeholder=\"confirmer votre nouveau mot de passe\" required=\"required\">\r\n            </div>\r\n                    \r\n            <div class=\"form-group\">\r\n                <button type=\"submit\"  class=\"btn btn-primary btn-lg btn-block\">Changer mot de passe</button>\r\n            </div>\r\n            \r\n        </form>\r\n        <div *ngIf=\"errormsg\"><p>{{ errormsg }}</p></div>\r\n        <div *ngIf=\"successmsg\"><p>{{ successmsg }}</p></div>\r\n    </div>\r\n    </body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search-bar/search-bar.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search-bar/search-bar.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\n    \n   \n    <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.5.0/css/all.css\" integrity=\"sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU\" crossorigin=\"anonymous\">\n  </head>\n<body>\n    <div class=\"container\">\n        \n    <div class=\"container h-100\" style=\"float: left;\">\n      <div class=\"d-flex justify-content-center h-100 \">\n        <form [formGroup]=\"searchForm\">\n        <div class=\"searchbar\">\n          <input class=\"search_input\" type=\"text\" name=\"\"   placeholder=\"chercher par Email\">\n          <a href=\"#\" class=\"search_icon\"><i class=\"fas fa-search\"></i></a>\n        </div>\n        <div class=\"searchbar\">\n            <input class=\"search_input\" type=\"text\" name=\"\" placeholder=\"Chercher par Mobile\">\n            <a href=\"#\" class=\"search_icon\"><i class=\"fas fa-search\"></i></a>\n          </div>\n          <div class=\"searchbar\">\n            <input class=\"search_input\" type=\"text\" name=\"\" placeholder=\"chercher par Nom\">\n            <a href=\"#\" class=\"search_icon\"><i class=\"fas fa-search\"></i></a>\n          </div>\n          <div class=\"input-container\">\n          \n              <input class=\"search_input\" id=\"firstname\" (click)=\"getusersbyfirstname()\" formControlName=\"firstname\"type=\"text\"  placeholder=\"Chercher par Prénom\">\n              \n            \n          </div>\n          </form>\n      </div>\n    </div>\n</div>\n  </body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><a routerLink=\"calendar-fiscality\" *ngIf=\"currentUser.role=='admin'\"routerLinkActive=\"active\"> Gestion calendrier fiscale</a></h2>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\r\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n    <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>\r\n</head>\r\n<body>\r\n  \r\n\r\n<div class=\"bodycontainer\">\r\n  <div id=\"loader\" *ngIf=\"loading\"></div>\r\n  \r\n<div class=\"container-fluid\" *ngIf=\"!loading\"> \r\n   \r\n  \r\n<form  [formGroup]=\"signupForm\" (ngSubmit)=\"onSignup()\">\r\n    <h2>Formulaire D'inscription</h2>\r\n    <div *ngIf=\"submitted && f.usertype.errors\" class=\"invalid-feedback\">\r\n      <div *ngIf=\"f.usertype.errors.required\">Type Utilisateur est obligatoire</div>\r\n  </div>\r\n    <div title=\"indiquer votre type utilisateur\" class=\"input-container\">\r\n      <label for=\"usertype\"> Type Utilisateur:</label>\r\n      <div class=\"gender_icon\"><i class=\"fa fa-male\" ></i> <i class=\"fa fa-female\"></i></div>\r\n     \r\n<select  class=\"input-field\"  placeholder=\"Entrer Votre Type Utilisateur\"id=\"usertype\" formControlName=\"usertype\" name=\"usertype\"\r\n[ngClass]=\"{ 'is-invalid': submitted && f.usertype.errors }\" >\r\n  <option hidden >Entrer Votre Type Utilisateur</option>\r\n  <option value=\"Client\">Client</option>\r\n  \r\n  <option value=\"Candidat\">Candidat</option>\r\n</select>\r\n  </div>\r\n  \r\n  <div *ngIf=\"submitted && f.civilite.errors\" class=\"invalid-feedback\">\r\n    <div *ngIf=\"f.civilite.errors.required\">Civilité est obligatoire</div>\r\n</div>\r\n    <div title=\"indiquer votre civilité\" class=\"input-container\">\r\n     \r\n      <label for=\"civilite\"> Civilité:</label>  \r\n      <div class=\"gender_icon\"><i class=\"fa fa-male\" ></i> <i class=\"fa fa-female\"></i></div>\r\n       \r\n  <select  class=\"input-field\" placeholder=\"Entrer Votre civilite\" id=\"civilite\" formControlName=\"civilite\" name=\"civilite\" >\r\n    <option hidden >Entrer Votre Civilité</option>\r\n    <option value=\"Monsieur\">Monsieur</option>\r\n    <option value=\"Madame\">Madame</option>\r\n    <option value=\"Mademoiselle\">Mademoiselle</option>\r\n  </select>\r\n    </div>\r\n\r\n    <div *ngIf=\"submitted && f.lastname.errors\" class=\"invalid-feedback\">\r\n      <div *ngIf=\"f.lastname.errors.required\">Nom Obligatoire</div>\r\n  </div>\r\n    <div title=\"indiquer votre nom\"class=\"input-container\">\r\n      <label for=\"lastname\"> Nom Utilisateur:</label>\r\n        <i class=\"fa fa-user icon\"></i>\r\n        <input class=\"input-field\" type=\"text\" placeholder=\"Entrer Votre Nom\" id=\"lastname\" \r\n        formControlName=\"lastname\" name=\"lastname\" [ngClass]=\"{ 'is-invalid': submitted && f.lastname.errors }\">\r\n       \r\n      </div>\r\n      \r\n      <div *ngIf=\"submitted && f.firstname.errors\" class=\"invalid-feedback\">\r\n        <div *ngIf=\"f.firstname.errors.required\">Prénom Obligatoire</div>\r\n    </div>\r\n      <div title=\"indiquer votre prenom\"class=\"input-container\">\r\n        <label for=\"firstname\"> Prénom Utilisateur:</label>\r\n        <i class=\"fa fa-user icon\"></i>\r\n        <input class=\"input-field\" type=\"text\" placeholder=\"Entrer Votre Prenom\" id=\"firstname\" \r\n        [ngClass]=\"{ 'is-invalid': submitted && f.firstname.errors }\"formControlName=\"firstname\"name=\"firstname\">\r\n       \r\n      </div> \r\n     \r\n       \r\n      <div title=\"indiquer votre raisonsociale\"class=\"input-container-disabled\">\r\n        <i class=\"fa fa-fort-awesome icon\"></i>\r\n        <input class=\"input-field\" type=\"text\" placeholder=\"Entrer Votre Raison Sociale\" id=\"raisonsociale\" formControlName=\"raisonsociale\">\r\n      </div>\r\n\r\n      <div title=\"indiquer votre fonction\"class=\"input-container-disabled\">\r\n        <i class=\"fa fa-fort-awesome icon\" ></i> \r\n        <input class=\"input-field\" type=\"text\" placeholder=\"Entrer Votre Fonction\" id=\"fonction\" formControlName=\"fonction\">\r\n    </div>\r\n\r\n\r\n    <div title=\"indiquer votre nomsociete\"class=\"input-container-disabled\">\r\n        <i class=\"fa fa-fort-awesome icon\"></i>\r\n        <input class=\"input-field\" type=\"text\" placeholder=\"Entrer Nom Societe\" id=\"nomsociete\" formControlName=\"nomsociete\">\r\n      </div>\r\n\r\n\r\n    <div title=\"indiquer votre secteur\"class=\"input-container-disabled\">\r\n        <i class=\"fa fa-fort-awesome icon\" ></i> \r\n        <input class=\"input-field\" type=\"text\" placeholder=\"Entrer Votre Secteur\" id=\"secteur\" formControlName=\"secteur\">    \r\n  \r\n    </div>\r\n\r\n    <div *ngIf=\"submitted && f.clientcode.errors\" class=\"invalid-feedback\">\r\n      <div *ngIf=\"f.clientcode.errors.required\">Veuillez générer votre code client</div>\r\n  </div>\r\n    <div title=\"indiquer votre clientcode\"class=\"input-container\">\r\n      <label for=\"clientcode\"> Code Client:</label>\r\n      <i class=\"fa fa-user icon\"></i>\r\n      <input class=\"input-field\" type=\"text\" id=\"clientcode\" \r\n      [ngClass]=\"{ 'is-invalid': submitted && f.clientcode.errors }\"formControlName=\"clientcode\" disabled>\r\n      <input  type=\"button\" value=\"Générer code client\" (click)=\"randomString()\">;\r\n     \r\n    </div>\r\n   \r\n    <div class=\"mobile-container\">\r\n      <div class=\"error-container\">\r\n        <div *ngIf=\"submitted && f.mobile.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"f.mobile.errors.required\">Numéro Mobile Obligatoire</div>\r\n      </div>\r\n      <div class=\"input-container\">\r\n        <label for=\"mobile\"> N° Mobile Utilisateur:</label>\r\n        <i class=\"fa fa-phone icon\"></i>\r\n        <input class=\"input-field\" type=\"text\" placeholder=\"Entrez Votre Numéro Mobile\" id=\"mobile\" \r\n        [ngClass]=\"{ 'is-invalid': submitted && f.mobile.errors }\"formControlName=\"mobile\">\r\n       \r\n      </div>\r\n      \r\n  </div>\r\n  <div class=\"error-container\">\r\n    <div *ngIf=\"submitted && f.confirmmobile.errors\" class=\"invalid-feedback\">\r\n      <div *ngIf=\"f.confirmmobile.errors.required\">Numéro Mobile Obligatoire</div>\r\n      <div *ngIf=\"f.confirmmobile.errors.mustMatch\">Les numéros mobiles ne sont pas identiques</div>\r\n  </div>\r\n      <div class=\"input-container\">\r\n        <label for=\"usertype\"> Confirmer N° Mobile Utilisateur:</label>\r\n        <i class=\"fa fa-phone icon\"></i>\r\n        <input class=\"input-field\" type=\"text\" placeholder=\"Confirmez Votre Numéro Mobile\" id=\"confirmmobile\" \r\n        [ngClass]=\"{ 'is-invalid': submitted && f.confirmmobile.errors }\"formControlName=\"confirmmobile\">\r\n        \r\n      </div>\r\n     \r\n  </div>\r\n    </div>\r\n<div class=\"email-container\">\r\n  <div class=\"error-container\">\r\n    <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n      <div *ngIf=\"f.email.errors.required\">Email Obligatoire</div>\r\n      <div *ngIf=\"f.email.errors.email\">Adresse Email non valides</div>\r\n  </div>\r\n    <div class=\"input-container\">\r\n      <label for=\"email\"> Email Utilisateur:</label>\r\n      <i class=\"fa fa-envelope icon\"></i>\r\n      <input class=\"input-field\" type=\"email\" placeholder=\"Entrez Votre Email\" id=\"email\" \r\n      [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\"formControlName=\"email\">\r\n      \r\n    </div>\r\n   \r\n</div>\r\n<div class=\"error-container\">\r\n  <div *ngIf=\"submitted && f.confirmemail.errors\" class=\"invalid-feedback\">\r\n    <div *ngIf=\"f.confirmemail.errors.required\">Email Obligatoire</div>\r\n    <div *ngIf=\"f.confirmemail.errors.email\">Adresse Email non valides</div>\r\n    <div *ngIf=\"f.confirmemail.errors.mustMatch\">Les Emails  ne sont pas identiques</div>\r\n  </div>\r\n    <div class=\"input-container\">\r\n      <label for=\"confirmemail\"> Confirmer Email Utilisateur:</label>\r\n      <i class=\"fa fa-envelope icon\"></i>\r\n      <input class=\"input-field\" type=\"email\" placeholder=\"Confirmez Votre Email\" id=\"confirmemail\" \r\n      [ngClass]=\"{ 'is-invalid': submitted && f.confirmemail.errors }\"formControlName=\"confirmemail\" required>\r\n     \r\n    </div>\r\n   \r\n  </div>\r\n  </div>\r\n  <div class=\"password-container\">\r\n    <div class=\"error-container\">\r\n      <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n        <div *ngIf=\"f.password.errors.required\">Mot de passe Obligatoire</div>\r\n        \r\n    </div>\r\n    <div class=\"input-container\">\r\n      <label for=\"usertype\"> Mot de Passe Utilisateur:</label>\r\n      <i class=\"fa fa-key icon\"></i>\r\n      <input class=\"input-field\" type=\"password\" placeholder=\"Entrez Votre Mot De Passe\" id=\"password\" \r\n      [ngClass]=\"{ 'is-invalid': submitted && f.confirmemail.errors }\"formControlName=\"password\" required>\r\n     \r\n    </div>\r\n   \r\n</div>\r\n<div class=\"error-container\">\r\n  <div *ngIf=\"submitted && f.confirmpassword.errors\" class=\"invalid-feedback\">\r\n    <div *ngIf=\"f.confirmpassword.errors.required\">Mot de passe Obligatoire</div>\r\n    <div *ngIf=\"f.confirmpassword.errors.mustMatch\">Les Mot de passe  ne sont pas identiques</div>\r\n  </div>\r\n    <div class=\"input-container\">\r\n      <label for=\"usertype\"> Confirmer Mot de Passe Utilisateur:</label>\r\n      <i class=\"fa fa-key icon\"></i>\r\n      <input class=\"input-field\" type=\"password\" placeholder=\"Confirmez Votre Mot De Passe\" id=\"confirmpassword\" \r\n      [ngClass]=\"{ 'is-invalid': submitted && f.confirmemail.errors }\"formControlName=\"confirmpassword\" required>\r\n     \r\n    </div>\r\n   \r\n  </div>\r\n  </div>\r\n    <button class=\"btn btn-success\">Inscription</button>\r\n    <button class=\"btn btn-secondary\" type=\"reset\" (click)=\"onReset()\">Réinitialiser</button>\r\n  </form>\r\n  <p>{{ errorMessage }}</p>\r\n  <div class=\"alert alert-success\" *ngIf=\"isSuccessful\">\r\n    Your registration is successful!\r\n  </div>\r\n</div>\r\n</div>\r\n</body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/supervisor-board/supervisor-board.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/supervisor-board/supervisor-board.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\r\n    <div class=\"container\">\r\n    <div class=\"topleft\">\r\n\r\n    </div>\r\n    <div class=\"middle\">\r\n      <h1>Bientôt en Marche</h1>\r\n      <hr>\r\n      <p>fonctionnalité En cours de Développement</p>\r\n    </div>\r\n    <div class=\"bottomleft\">\r\n      \r\n    </div>\r\n  </div>\r\n</body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-board/user-board.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-board/user-board.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\r\n<div class=\"container-fluid\"> \r\n<div id=\"loader\" *ngIf=\"loading\"></div>\r\n  <div class=\"col-lg-12\" *ngIf=\"!loading\">\r\n    <div class=\"team-member\" *ngIf=\"usertype=='Candidat'\">\r\n      <h2>Liste des Candidatures</h2>\r\n      <hr>        \r\n      <div class=\"users-grid\" style=\"overflow-x:auto;\">\r\n\r\n        \r\n        \r\n        <table class=\"table table-striped\">\r\n          <thead>\r\n          <tr>\r\n      \r\n            \r\n            <th>Email</th>\r\n            <th>Prenom</th>\r\n            <th>Nom</th>\r\n            <th>Adresse</th>\r\n            <th>Mobile</th>\r\n            <th>Decision</th>\r\n            <th>CV</th>\r\n            \r\n            \r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr *ngFor=\"let condidate of condidates\">\r\n      \r\n            \r\n            <td>{{condidate.email}}</td>\r\n            <td>{{condidate.firstname}}</td>\r\n            \r\n      \r\n            <td>{{condidate.lastname}}</td>\r\n            <td>{{condidate.adresse}}</td>\r\n            <td>{{condidate.mobile}}</td>\r\n            <td>{{condidate.decision}}</td>\r\n            <td><a href=\"{{condidate.ficheUrl}}\" target=\"_blank\">Aperçu CV</a></td>\r\n            \r\n            \r\n            \r\n            <td>  <button type=\"button\" class=\"btn btn-success\" (click)=\"getNavigation('view-condidate',condidate._id)\">Consulter</button></td>\r\n            \r\n          \r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      \r\n    </div>\r\n  </div>\r\n</div>  \r\n</body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/verify-email/verify-email.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/verify-email/verify-email.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<head>\r\n    <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto|Varela+Round\">\r\n\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\">\r\n\r\n</head>\r\n<body>\r\n    \r\n\r\n<div class=\"team-section\">\r\n<div class=\"container-fluid\">\r\n<div class=\"loader\" *ngIf=\"emailStatus == EmailStatus.Verifying\"></div>\r\n<div class=\"row\">\r\n\t<div class=\"col-lg-12\" >\r\n\t  <div class=\"team-member\" *ngIf=\"emailStatus == EmailStatus.Success\">\r\n\t\t<div class=\"icon-box-success\">\r\n            <i class=\"material-icons\">&#xE876;</i>\r\n        </div>\t         \r\n\t\t<h3>{{successmsg}}</h3>\r\n\t\t<hr>\r\n\t\t<button  class=\"button-green button5\" (click)=\"onlogin()\">Connexion</button>\r\n\t\t\r\n\t  </div>\r\n\t</div>\r\n\t\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n\t<div class=\"col-lg-12\" >\r\n\t  <div class=\"team-member\" *ngIf=\"emailStatus == EmailStatus.Failed\">\r\n\t\t<div class=\"icon-box-failure\">\r\n            <i class=\"material-icons\">&#xE5CD;</i>\r\n        </div>         \r\n\t\t<h3>Vérification échouée, vous pouvez passer par le lien ci-desous</h3>\r\n\t\t<hr>\r\n\t\t\r\n\t\t<button  class=\"button-red button5\" (click)=\"onforgot()\">Mot de passe oublié</button>\r\n\t\t\r\n\t  </div>\r\n\t</div>\r\n\t\r\n  </div>\r\n</div>\r\n</div>\r\n</body>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-condidate/view-condidate.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-condidate/view-condidate.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n  <body>\r\n\r\n    <h2>Informations générales</h2>\r\n    \r\n    <div class=\"card\">\r\n      \r\n      <div class=\"container-fluid\">\r\n        <h4 >Données Candidature:</h4><hr>\r\n        <h4>Crée le(heure GMT):<b>  {{ condidate.created }}</b></h4>\r\n        <h4>Dernière modification  le(heure GMT):<b>  {{ condidate.updated }}</b></h4>\r\n        <h4>Nom et Prénom:<b>  {{ condidate.firstname }} {{ condidate.lastname }}</b></h4> \r\n        <h4>Mobile:<b>  {{ condidate.mobile }}</b></h4>\r\n        <h4>CV:<b><a href=\"{{condidate.ficheUrl}}\" target=\"_blank\">Aperçu CV</a></b></h4>\r\n        <h4>Spécialité Demandée:<b>  {{ condidate.specialite }}</b></h4>\r\n        <h4>Adresse:<b>  {{ condidate.adresse }}</b></h4>\r\n        <h4>Décision:<b>  {{ condidate.decision }}</b></h4>\r\n        <h4>Motif:<b>  {{ condidate.motif }}</b></h4>\r\n        <h4>Description:<b>  {{ condidate.description }}</b></h4>\r\n      </div>\r\n      \r\n      <button type=\"button\" class=\"btn btn-success\" *ngIf=\"currentUser.role=='admin'\" (click)=\"getNavigation('modify-condidate', condidate._id)\">Modifier Données Candidature  (Admin)</button>\r\n      <button type=\"button\" class=\"btn btn-danger\"(click)=\"onDelete()\">supprimer candidature</button>\r\n\r\n    </div>\r\n    \r\n    </body>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-contactreq/view-contactreq.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-contactreq/view-contactreq.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n  <body>\r\n\r\n    <h2>Informations générales</h2>\r\n    \r\n    <div class=\"card\">\r\n      \r\n      <div class=\"container-fluid\">\r\n        <h4 >Données Réclamation:</h4><hr>\r\n        <h4>Crée le(heure GMT):<b>  {{ contact.created }}</b></h4>\r\n        <h4>Dernière modification  le(heure GMT):<b>  {{ contact.updated }}</b></h4>\r\n        <h4>Nom et Prénom:<b>  {{ contact.firstname }} {{ contact.lastname }}</b></h4> \r\n        <h4>Mobile:<b>  {{ contact.mobile }}</b></h4>\r\n        <h4>Fichier Joint:<b><a href=\"{{contact.ficheUrl}}\" target=\"_blank\">Aperçu Fiche</a></b></h4>\r\n        <h4>Statut:<b>  {{ contact.statut }}</b></h4>\r\n        <h4>Description:<b>  {{ contact.description }}</b></h4>\r\n      </div>\r\n      \r\n      <button type=\"button\" class=\"btn btn-success\" *ngIf=\"currentUser.role=='admin'\" (click)=\"getNavigation('modify-contactreq', contact._id)\">Modifier Statut Réclamation (Admin)</button>\r\n      \r\n\r\n    </div>\r\n    \r\n    </body>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-event/view-event.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-event/view-event.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\r\n\t<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.5.0/css/all.css\" integrity=\"sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU\" crossorigin=\"anonymous\">\r\n  </head>\r\n  <body>\r\n\t  \r\n  \r\n<div id=\"loader\" *ngIf=\"loading\"></div>\r\n  <div class=\"col-lg-12\" *ngIf=\"!loading\">\r\n    <div class=\"container-fluid\">\r\n\t\t<h2 style=\"text-align:center\">Détails De L'évènement!</h2>\r\n\t\t<hr>\r\n            \r\n      <div class=\"users-grid\" style=\"overflow-x:auto;overflow-y: auto;\">\r\n\r\n        \r\n        \r\n        <table class=\"table table-striped\">\r\n            <thead>\r\n                <tr>\r\n            \r\n                  \r\n                  <th>Evenement</th>\r\n                  <th>Date</th>\r\n                  \r\n                  \r\n                  \r\n                </tr>\r\n                </thead>\r\n          <tbody>\r\n          <tr>\r\n      \r\n            <td>{{event.date| date : \"dd-MM-y\"}}</td>\r\n            <td >{{event.title}}</td>\r\n            \r\n            <td>  <button type=\"button\" class=\"btn btn-success\" *ngIf=\"currentUser.role=='admin'\"(click)=\"getNavigation('modify-event',event._id)\">Modifier</button></td>     \r\n            <td>  <button type=\"button\" class=\"btn btn-danger\" *ngIf=\"currentUser.role=='admin'\"(click)=\"onDelete()\">Supprimer</button></td>\r\n            <td>  <button type=\"button\" class=\"btn btn-info\" (click)=\"goback('calendar-fiscality')\">Retour Au Calendrier</button></td>\r\n            \r\n            \r\n            \r\n            \r\n          \r\n          </tr>\r\n          <tr>\r\n            \r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n        <hr>\r\n        <div class=\"center\">\r\n          <p>{{event.description}}</p>\r\n        </div>\r\n      </div>\r\n      \r\n    </div>\r\n  </div>\r\n</body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-user/view-user.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-user/view-user.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n  <body>\r\n\r\n    <h2>Informations générales</h2>\r\n    \r\n    <div class=\"card\">\r\n      <img src=\"../../assets/img_avatar.png\" *ngIf=\"user.civilite=='Monsieur'\" else alt=\"Avatar\" style=\"width:10% ;height:10%\">\r\n      <img src=\"../../assets/img_avatar2.png\" *ngIf=\"user.civilite!='Monsieur'\" alt=\"Avatar\" style=\"width:10% ;height:10%\">\r\n      <div class=\"container-fluid\">\r\n        <h4 >Utilisateur connecté:</h4><hr>\r\n        <h4>Crée le(heure GMT):<b>  {{ user.created }}</b></h4>\r\n        <h4>Dernière modification  le(heure GMT):<b>  {{ user.updated }}</b></h4>\r\n        <h4>{{ user.civilite }} <b>  {{ user.firstname }} {{ user.lastname }}</b></h4> \r\n        <h4>Mobile:<b>  {{ user.mobile }}</b></h4>\r\n        <h4>Type utilisateur:<b>  {{ user.usertype }}</b></h4>\r\n        <h4>Fonction:<b>  {{ user.fonction }}</b></h4>\r\n        <h4>Raisonsociale:<b>  {{ user.raisonsociale }}</b></h4>\r\n        <h4>Secteur:<b>  {{ user.secteur }}</b></h4>\r\n        <h4>Nomsociete:<b>  {{ user.nomsociete }}</b></h4>\r\n        <h4>Email:<b>  {{ user.email }}</b></h4>\r\n        <h4>Code client<b>  {{ user.clientcode }}</b></h4>\r\n        <h4>Nature Activité:<b>  {{ user.natureactivite }}</b></h4>\r\n        <h4>Activité:<b>  {{ user.activite }}</b></h4>\r\n        <h4>Sous-Activité:<b>  {{ user.sousactivite }}</b></h4>\r\n        <h4>Régime fiscal en matières d'impôts directs:<b>  {{ user.regimefiscalimpot }}</b></h4>\r\n        <h4>Régime fiscal en matières de TVA:<b>  {{ user.regimefiscaltva }}</b></h4>\r\n        <h4>Matricule Fiscale:<b>  {{ user.matriculefiscale }}</b></h4>\r\n        <h4>Adresse D'activité:<b>  {{ user.adresseactivite}}</b></h4>\r\n        <h4>Code Postal:<b>  {{ user.codepostal }}</b></h4>\r\n      </div>\r\n      \r\n      <button type=\"button\" class=\"btn btn-success\" *ngIf=\"currentUser.role=='admin'\" (click)=\"getNavigation('modify-user-admin', user._id)\">Modifier données utilisateur (Admin)</button>\r\n      <button type=\"button\" class=\"btn btn-danger\"(click)=\"onDelete()\">supprimer utilisateur</button>\r\n\r\n    </div>\r\n    \r\n    </body>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/who/who.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/who/who.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"team-section\">\r\n      \r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12\">\r\n            <h2>Membres De L'équipe MaCompta</h2>\r\n            <p>Notre cabinet a été créé en 1997 par Fayçal BEN AYED, commissaire aux comptes inscrit au tableau de la compagnie et titulaire du Master C.C.A de l’I.A.E de Lyon 3, et ce, après avoir travaillé dans un cabinet d’expertise comptable de renommée nationale et dans un groupe de sociétés.\r\n                Afin de répondre au mieux à vos attentes et de gérer au plus près vos intérêts, notre cabinet est garnie de compétences dynamiques et réactives pour vous accompagner dans toutes les étapes de la vie de votre entreprise, quelle que soit sa forme.\r\n                Notre principal objectif est d’apporter un haut niveau de qualité à la réalisation de nos missions assuré aussi bien par une formation régulière de notre équipe que par une adaptation permanente de notre organisation et de nos méthodes et approches de travail.\r\n                En 2015, nous avons créé notre bureau virtuel Macompta afin d’être à proximité de tous nos clients.\r\n                Notre cabinet adhère totalement à l’emblème de l’ordre des experts comptables de Tunisie : Science, Conscience et Indépendance.\r\n                </p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n              <div class=\"team-member\">\r\n                <div class=\"photo\">\r\n                  <img src=\"\" class=\"img-fluid\" alt=\"image\">\r\n                </div>          \r\n                <h3>Fayçal Ben Ayed</h3>\r\n                <hr>\r\n                <h5>Propriétaire</h5>\r\n                <p>commissaire aux comptes inscrit au tableau de la compagnie et titulaire du Master C.C.A de l’I.A.E de Lyon 3, et ce, après avoir travaillé dans un cabinet d’expertise comptable de renommée nationale et dans un groupe de sociétés</p>\r\n                <p><button class=\"button\">Voir CV</button></p>\r\n                <hr>\r\n                <div class=\"follow-on\">\r\n                  <ul>\r\n                    <li><a href=\"#\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a></li>\r\n                    <li><a href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a></li>\r\n                    <li><a href=\"#\"><i class=\"fa fa-pinterest-p\" aria-hidden=\"true\"></i></a></li>\r\n                    <li><a href=\"#\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a></li>\r\n                    <li><a href=\"#\"><i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i></a></li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            \r\n          </div>\r\n\r\n\r\n        <div class=\"row\">\r\n          \r\n          <div class=\"col-md-6\">\r\n            <div class=\"team-member\">\r\n              <div class=\"photo\">\r\n                <img src=\"\" class=\"img-fluid\" alt=\"image\">\r\n              </div>          \r\n              <h3>Collaborateur 1</h3>\r\n              <hr>\r\n              <h5>Fonction</h5>\r\n              <p>présentation du collaborateur</p>\r\n              <hr>\r\n              \r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"team-member\">\r\n              <div class=\"photo\">\r\n                <img src=\"\" class=\"img-fluid\" alt=\"image\">\r\n              </div>          \r\n              <h3>collaborateur 2</h3>\r\n              <hr>\r\n              <h5>fonction</h5>\r\n              <p>présentation du collaborateur</p>\r\n              <hr>\r\n              \r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    </body>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/why/why.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/why/why.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\r\n<div class=\"container-fluid\">\r\n    <div class=\"jumbotron\">\r\n      <div class=\"container-fluid text-center\">\r\n        <h1>Agence Virtuelle</h1>      \r\n        <p>C’est quoi une agence virtuelle, quelle est son approche et pourquoi y adhérer ? </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n    <div class=\"container-fluid\">\r\n        \r\n            <p id=\"intro\">\r\n            Macompta est une agence virtuelle de conseil et d’assistance comptable, juridique, fiscale et sociale. L’idée de création de cette agence avec  toute sa philosophie est issue de notre soucis de faire profiter nos clients des avantages des nouvelles technologies d’information et de communication, dont notamment la rapidité, l’efficacité, la fiabilité, la proximité, la minimisation du coût, etc... \r\nTout comme notre bureau principal, l’agence virtuelle de Macompta est une vraie agence de conseil et d’assistance comptable, juridique, fiscale et sociale. Tous les deux offrent les mêmes services mais avec des approches différentes.\r\nToutefois, l’agence virtuelle de Macompta offre d’autres avantages supplémentaires, et nous citons à titre d’exemples 10 bonnes raisons pour la choisir\r\n\r\n        </p>\r\n    \r\n    <div class=\"container-fluid\">    \r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"panel panel-primary\">\r\n            <div class=\"panel-heading\">Simplicité d’utilisation</div>\r\n            <div class=\"panel-body\"><img src=\"../../assets/easy_of_use.jpg\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\"></div>\r\n            <div class=\"panel-footer\">Sans aucune connaissance comptable, vous enregistrez simplement toutes les données concernant votre entité (factures de vente, factures d’achat, banque, caisses…), à travers une interface de saisie personnalisée permettant aux non-comptables de saisir leurs écritures sans connaissances particulières. A titre d’exemple, pour les factures traditionnelles de vente, vous saisissez uniquement  le client (ou vous le choisissez dans une liste de vos clients), la date, le montant hors taxe, la TVA, le timbre et le montant T.T.C.</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\"> \r\n          <div class=\"panel panel-danger\">\r\n            <div class=\"panel-heading\">Sécurité</div>\r\n            <div class=\"panel-body\"><img src=\"../../assets/sécurité.jpg\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\"></div>\r\n            <div class=\"panel-footer\">Toutes les informations saisies sont sauvegardées périodiquement et automatiquement sur divers supports</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\"> \r\n          <div class=\"panel panel-success\">\r\n            <div class=\"panel-heading\">Confidentialité</div>\r\n            <div class=\"panel-body\"><img src=\"../../assets/confidentialité.png\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\"></div>\r\n            <div class=\"panel-footer\">Notre plateforme  vous offre les meilleures garanties en terme de confidentialité et de respect des informations transmises</div>\r\n          </div>\r\n        </div>\r\n        \r\n      </div>\r\n    </div><br>\r\n\r\n\r\n    <div class=\"container-fluid\">    \r\n      <div class=\"row\">\r\n          <div class=\"col-sm-4\"> \r\n              <div class=\"panel panel-danger\">\r\n                <div class=\"panel-heading\">Disponibilité</div>\r\n                <div class=\"panel-body\"><img src=\"../../assets/disponibilité.jpg\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\"></div>\r\n                <div class=\"panel-footer\">L’agence virtuelle de Macompta est ouverte 7j/7 et 24h/24. En conséquence, la saisie de vos informations peut se faire à n’importe quel moment.</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4\"> \r\n              <div class=\"panel panel-success\">\r\n                <div class=\"panel-heading\">Proximité</div>\r\n                <div class=\"panel-body\"><img src=\"../../assets/proximité.jpg\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\"></div>\r\n                <div class=\"panel-footer\">Partout où vous êtes en Tunisie ou dans le monde, Macompta le plus proche cabinet de chez vous.</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n                <div class=\"panel panel-primary\">\r\n                  <div class=\"panel-heading\">Garde des documents par vous</div>\r\n                  <div class=\"panel-body\"><img src=\"../../assets/garde_document.jpg\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\"></div>\r\n                  <div class=\"panel-footer\">Etre client de l’agence virtuelle de macompta vous évite de vous décharger den vos documents comptables en les remettant à un cabinet selon le concept habituel (Cabinet présentiel) :  Vous saisissez les informations et vous gardez chez vous vos documents. </div>\r\n                </div>\r\n              </div>\r\n        </div>\r\n      </div><br>\r\n    \r\n    <div class=\"container-fluid\">    \r\n        <div class=\"row\">\r\n            \r\n            <div class=\"col-sm-4\"> \r\n              <div class=\"panel panel-danger\">\r\n                <div class=\"panel-heading\">Gratuité de saisie</div>\r\n                <div class=\"panel-body\"><img src=\"../../assets/gratuit.jpg\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\"></div>\r\n                <div class=\"panel-footer\">En utilisant notre plateforme, vous saisissez GRATUITEMENT vos documents comptables</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4\"> \r\n              <div class=\"panel panel-success\">\r\n                <div class=\"panel-heading\">Rapidité</div>\r\n                <div class=\"panel-body\"><img src=\"../../assets/rapidité.jpg\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\"></div>\r\n                <div class=\"panel-footer\">Vous n'avez pas du temps à perdre ? Nous non plus... Notre plateforme a été conçue de telle sorte les informations sont traitées le plus rapidement possible avec toutes les garanties nécessaire de fiabilité.</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4\"> \r\n                <div class=\"panel panel-danger\">\r\n                  <div class=\"panel-heading\">Dépôt à distance de vos déclarations fiscales</div>\r\n                  <div class=\"panel-body\"><img src=\"../../assets/depot distance.jpg\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\"></div>\r\n                  <div class=\"panel-footer\">En utilisant la plateforme de Macompta, vous pouvez opter pour la téléliquidation de toutes vos déclarations fiscales. Ce mécanisme consiste à déclarer à distance (par internet) et à payer à la recette des finances. il suffit de nous autoriser à le faire et nous nous occupons du reste.</div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n              <div class=\"col-sm-6\"> \r\n                <div class=\"panel panel-success\">\r\n                  <div class=\"panel-heading\">Minimisation des coûts</div>\r\n                  <div class=\"panel-body\"><img src=\"../../assets/cout_reduit.jpg\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\"></div>\r\n                  <div class=\"panel-footer\">En utilisant la plateforme de Macompta, vous épargnez beaucoup d’argent en évitant les déplacements, en chargeant l’un de vos agents de faire gratuitement la saisie, et surtout en payant exactement ce qu’il faut payer. Comment ça ? Effectivement, la philosophie de notre agence virtuelle repose sur le fait d’éviter le système de forfait qui, dans tous les cas, lèse ou bien le cabinet ou bien le client. En utilisant notre plateforme, personne n’est plus lésée du fait que nous ne facturons que notre travail effectif valorisé en fonction de nos interventions réellement faites : Nous facturons nos interventions à la minute.</div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-sm-6\"> \r\n                <div class=\"panel panel-success\">\r\n                  <div class=\"panel-heading\">Dématrialisation</div>\r\n                  <div class=\"panel-body\"><img src=\"../../assets/dematrialisation.jpg\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\"></div>\r\n                  <div class=\"panel-footer\">Avec ces 3 zéros, macompta participe avec ses clients à la protection de l’environnement:\r\n\r\n                    ·         Zéro papier\r\n                    \r\n                    ·         Zéro encre\r\n                    \r\n                    ·         Zéro transport</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n    </div><br><br>\r\n    \r\n</div>\r\n    </body>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_helpers/alert.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_helpers/alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _models_alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/alert */ "./src/app/models/alert.ts");





let AlertService = class AlertService {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.defaultId = 'default-alert';
    }
    // enable subscribing to alerts observable
    onAlert(id = this.defaultId) {
        return this.subject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(x => x && x.id === id));
    }
    // convenience methods
    success(message, options) {
        this.alert(new _models_alert__WEBPACK_IMPORTED_MODULE_4__["Alert"](Object.assign({}, options, { type: _models_alert__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Success, message })));
    }
    error(message, options) {
        this.alert(new _models_alert__WEBPACK_IMPORTED_MODULE_4__["Alert"](Object.assign({}, options, { type: _models_alert__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Error, message })));
    }
    info(message, options) {
        this.alert(new _models_alert__WEBPACK_IMPORTED_MODULE_4__["Alert"](Object.assign({}, options, { type: _models_alert__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Info, message })));
    }
    warn(message, options) {
        this.alert(new _models_alert__WEBPACK_IMPORTED_MODULE_4__["Alert"](Object.assign({}, options, { type: _models_alert__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Warning, message })));
    }
    // core alert method
    alert(alert) {
        alert.id = alert.id || this.defaultId;
        alert.autoClose = (alert.autoClose === undefined ? true : alert.autoClose);
        this.subject.next(alert);
    }
    // clear alerts
    clear(id = this.defaultId) {
        this.subject.next(new _models_alert__WEBPACK_IMPORTED_MODULE_4__["Alert"]({ id }));
    }
};
AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AlertService);



/***/ }),

/***/ "./src/app/_helpers/mime-type.validator.ts":
/*!*************************************************!*\
  !*** ./src/app/_helpers/mime-type.validator.ts ***!
  \*************************************************/
/*! exports provided: mimeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mimeType", function() { return mimeType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");


const mimeType = (control) => {
    if ((typeof control.value) === 'string') {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    }
    const file = control.value;
    const fileReader = new FileReader();
    const frObs = rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create((observer) => {
        fileReader.addEventListener('loadend', () => {
            const arr = new Uint8Array(fileReader.result).subarray(0, 4);
            let header = '';
            let isValid = false;
            for (let i = 0; i < arr.length; i++) {
                header += arr[i].toString(16);
            }
            switch (header) {
                case '89504e47':
                    isValid = true;
                    break;
                case 'ffd8ffe0':
                case 'ffd8ffe1':
                case 'ffd8ffe2':
                case 'ffd8ffe3':
                case 'ffd8ffe8':
                case '25504446':
                case 'D0CF11E0':
                case 'D0CF11E0':
                case 'D0CF11E0':
                case '504B0304':
                case '504B0506':
                case '504B0708':
                    isValid = true;
                    break;
                default:
                    isValid = false; // Or you can use the blob.type as fallback
                    break;
            }
            if (isValid) {
                observer.next(null);
            }
            else {
                observer.next({ invalidMimeType: true });
            }
            observer.complete();
        });
        fileReader.readAsArrayBuffer(file);
    });
    return frObs;
};


/***/ }),

/***/ "./src/app/_helpers/must-match.validator.ts":
/*!**************************************************!*\
  !*** ./src/app/_helpers/must-match.validator.ts ***!
  \**************************************************/
/*! exports provided: MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return (formGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/app/_helpers/sort.ts":
/*!**********************************!*\
  !*** ./src/app/_helpers/sort.ts ***!
  \**********************************/
/*! exports provided: Sort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sort", function() { return Sort; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Sort {
    constructor() {
        this.sortOrder = 1;
        this.collator = new Intl.Collator(undefined, {
            numeric: true,
            sensitivity: "base",
        });
    }
    startSort(property, order, type = "") {
        if (order === "desc") {
            this.sortOrder = -1;
        }
        return (a, b) => {
            if (type === "date") {
                return this.sortData(new Date(a[property]), new Date(b[property]));
            }
            else {
                return this.collator.compare(a[property], b[property]) * this.sortOrder;
            }
        };
    }
    sortData(a, b) {
        if (a < b) {
            return -1 * this.sortOrder;
        }
        else if (a > b) {
            return 1 * this.sortOrder;
        }
        else {
            return 0 * this.sortOrder;
        }
    }
}


/***/ }),

/***/ "./src/app/admin-board/admin-board.component.scss":
/*!********************************************************!*\
  !*** ./src/app/admin-board/admin-board.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2 {\n  text-align: center;\n}\n\n#loader {\n  position: relative;\n  left: 50%;\n  top: 50%;\n  z-index: 1;\n  width: 120px;\n  height: 120px;\n  border: 16px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 16px solid #3498db;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite;\n  margin-top: 200px;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n  border: 1px solid #ddd;\n}\n\nth, td {\n  text-align: left;\n  padding: 8px;\n  min-width: 150px;\n}\n\ntr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n\n.dategroup {\n  display: block;\n}\n\n.searchbar {\n  margin-bottom: auto;\n  margin-top: auto;\n  height: 60px;\n  background-color: #353b48;\n  border-radius: 30px;\n  padding: 10px;\n  display: inline-flex;\n}\n\n.search_input {\n  color: white;\n  border: 0;\n  outline: 0;\n  background: none;\n  width: 200px;\n  caret-color: transparent;\n  line-height: 40px;\n  transition: width 0.4s linear;\n}\n\n.searchbar:hover > .search_input {\n  padding: 0 10px;\n  width: 100px;\n  caret-color: red;\n  transition: width 0.4s linear;\n}\n\n.searchbar:hover > .search_icon {\n  background: white;\n  color: #e74c3c;\n}\n\n.search_icon {\n  height: 40px;\n  width: 40px;\n  float: right;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  color: white;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tYm9hcmQvQzpcXFVzZXJzXFxVU0VSXFxjdm1cXGN2bV9mcm9udGVuZC9zcmNcXGFwcFxcYWRtaW4tYm9hcmRcXGFkbWluLWJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi1ib2FyZC9hZG1pbi1ib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBRUEsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsMENBQUE7RUFDQSxrQ0FBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FDRUY7O0FEQ0E7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0VGOztBRENBO0VBQW1CLHlCQUFBO0FDR25COztBREZBO0VBQ0UsY0FBQTtBQ0tGOztBREhBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FDTUY7O0FESEU7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QUNNRjs7QURIRTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQ01GOztBREhFO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDTUY7O0FESEU7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDTUYiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi1ib2FyZC9hZG1pbi1ib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgye1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4jbG9hZGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgXHJcbiAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlci10b3A6IDE2cHggc29saWQgIzM0OThkYjtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICBtYXJnaW4tdG9wOiAyMDBweDtcclxuICB9XHJcbnRhYmxlIHtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbn1cclxuXHJcbnRoLCB0ZCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxufVxyXG5cclxudHI6bnRoLWNoaWxkKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjJ9XHJcbi5kYXRlZ3JvdXB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLnNlYXJjaGJhcntcclxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTNiNDg7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaF9pbnB1dHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgY2FyZXQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggMC40cyBsaW5lYXI7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoYmFyOmhvdmVyID4gLnNlYXJjaF9pbnB1dHtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGNhcmV0LWNvbG9yOnJlZDtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjRzIGxpbmVhcjtcclxuICB9XHJcblxyXG4gIC5zZWFyY2hiYXI6aG92ZXIgPiAuc2VhcmNoX2ljb257XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgY29sb3I6ICNlNzRjM2M7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoX2ljb257XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gIH0iLCJoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2xvYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xuICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItdG9wOiAxNnB4IHNvbGlkICMzNDk4ZGI7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgbWFyZ2luLXRvcDogMjAwcHg7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xufVxuXG50aCwgdGQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiA4cHg7XG4gIG1pbi13aWR0aDogMTUwcHg7XG59XG5cbnRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG59XG5cbi5kYXRlZ3JvdXAge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNlYXJjaGJhciB7XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIGhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1M2I0ODtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5cbi5zZWFyY2hfaW5wdXQge1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogMDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgd2lkdGg6IDIwMHB4O1xuICBjYXJldC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjRzIGxpbmVhcjtcbn1cblxuLnNlYXJjaGJhcjpob3ZlciA+IC5zZWFyY2hfaW5wdXQge1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgY2FyZXQtY29sb3I6IHJlZDtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC40cyBsaW5lYXI7XG59XG5cbi5zZWFyY2hiYXI6aG92ZXIgPiAuc2VhcmNoX2ljb24ge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6ICNlNzRjM2M7XG59XG5cbi5zZWFyY2hfaWNvbiB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/admin-board/admin-board.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin-board/admin-board.component.ts ***!
  \******************************************************/
/*! exports provided: AdminBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminBoardComponent", function() { return AdminBoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_condidate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/condidate.service */ "./src/app/services/condidate.service.ts");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/contact.service */ "./src/app/services/contact.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let AdminBoardComponent = class AdminBoardComponent {
    constructor(formBuilder, UserService, cond, cont, router) {
        this.formBuilder = formBuilder;
        this.UserService = UserService;
        this.cond = cond;
        this.cont = cont;
        this.router = router;
        this.users = [];
        this.condidates = [];
        this.contacts = [];
    }
    ngOnInit() {
        this.searchForm = this.formBuilder.group({
            lastname: [null,],
            firstname: [null,],
            email: [null,],
            date: [null,],
        });
        this.contactsSub = this.cont.contactreqs$.subscribe((contacts) => {
            this.contacts = contacts;
            this.loading = false;
        }, (error) => {
            this.loading = false;
            this.errormsg = error.message;
        });
        this.condidatesSub = this.cond.condidates$.subscribe((condidates) => {
            this.condidates = condidates;
            this.loading = false;
        }, (error) => {
            this.loading = false;
            this.errormsg = error.message;
        });
        this.usersSub = this.UserService.users$.subscribe((users) => {
            this.users = users;
            this.loading = false;
        }, (error) => {
            this.loading = false;
            console.log(error);
            this.errormsg = error.message;
        });
    }
    getNavigationusers(link, id) {
        this.UserService.getUserById(id);
        this.router.navigate([link + '/' + id]);
    }
    getNavigationcondidates(link, id) {
        this.cond.getCondidateById(id);
        this.router.navigate([link + '/' + id]);
    }
    getNavigationcontacts(link, id) {
        this.cont.getContactreqById(id);
        this.router.navigate([link + '/' + id]);
    }
    getclients() {
        return this.users.filter((user) => user.usertype === 'Client');
    }
    getcollaborateurs() {
        return this.users.filter((user) => user.usertype === ('Collaborateur' || false));
    }
    getconsultants() {
        return this.users.filter((user) => user.usertype === ('Consultant' || false));
    }
    getcondidates() {
        return this.users.filter((user) => user.usertype === 'Candidat');
    }
    getusersbyfirstname() {
        this.firstname = this.searchForm.get('firstname').value;
        this.UserService.getuserbyfirstname(this.firstname);
    }
    getusersbylastname() {
        this.lastname = this.searchForm.get('lastname').value;
        this.UserService.getuserbylastname(this.lastname);
    }
    getusersbyemail() {
        this.email = this.searchForm.get('email').value;
        this.UserService.getuserbyemail(this.email);
    }
    getall() {
        this.UserService.getAll();
    }
    getcondidatesbyemail() {
        this.email = this.searchForm.get('email').value;
        this.cond.getCondidate(this.email);
    }
    getcondidatesall() {
        this.cond.getCondidates();
    }
    getcontactreqsbydateinf() {
        this.cont.getContactreqsinf(this.searchForm.get('date').value);
    }
    getcontactreqsbydatesup() {
        this.cont.getContactreqssup(this.searchForm.get('date').value);
    }
    getcontactsall() {
        this.cont.getContactreqs();
    }
};
AdminBoardComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _services_condidate_service__WEBPACK_IMPORTED_MODULE_4__["CondidateService"] },
    { type: _services_contact_service__WEBPACK_IMPORTED_MODULE_5__["ContactService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AdminBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-board',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-board.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-board/admin-board.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-board.component.scss */ "./src/app/admin-board/admin-board.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
        _services_condidate_service__WEBPACK_IMPORTED_MODULE_4__["CondidateService"],
        _services_contact_service__WEBPACK_IMPORTED_MODULE_5__["ContactService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], AdminBoardComponent);



/***/ }),

/***/ "./src/app/alert/alert.component.scss":
/*!********************************************!*\
  !*** ./src/app/alert/alert.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/alert/alert.component.ts":
/*!******************************************!*\
  !*** ./src/app/alert/alert.component.ts ***!
  \******************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _models_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/alert */ "./src/app/models/alert.ts");
/* harmony import */ var _helpers_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/alert.service */ "./src/app/_helpers/alert.service.ts");





let AlertComponent = class AlertComponent {
    constructor(router, alertService) {
        this.router = router;
        this.alertService = alertService;
        this.id = 'default-alert';
        this.fade = true;
        this.alerts = [];
    }
    ngOnInit() {
        // subscribe to new alert notifications
        this.alertSubscription = this.alertService.onAlert(this.id)
            .subscribe(alert => {
            // clear alerts when an empty alert is received
            if (!alert.message) {
                // filter out alerts without 'keepAfterRouteChange' flag
                this.alerts = this.alerts.filter(x => x.keepAfterRouteChange);
                // remove 'keepAfterRouteChange' flag on the rest
                this.alerts.forEach(x => delete x.keepAfterRouteChange);
                return;
            }
            // add alert to array
            this.alerts.push(alert);
            // auto close alert if required
            if (alert.autoClose) {
                setTimeout(() => this.removeAlert(alert), 20000);
            }
        });
        // clear alerts on location change
        this.routeSubscription = this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                this.alertService.clear(this.id);
            }
        });
    }
    ngOnDestroy() {
        // unsubscribe to avoid memory leaks
        this.alertSubscription.unsubscribe();
        this.routeSubscription.unsubscribe();
    }
    removeAlert(alert) {
        // check if already removed to prevent error on auto close
        if (!this.alerts.includes(alert))
            return;
        if (this.fade) {
            // fade out alert
            alert.fade = true;
            // remove alert after faded out
            setTimeout(() => {
                this.alerts = this.alerts.filter(x => x !== alert);
            }, 250);
        }
        else {
            // remove alert
            this.alerts = this.alerts.filter(x => x !== alert);
        }
    }
    cssClasses(alert) {
        if (!alert)
            return;
        const classes = ['alert', 'alert-dismissable'];
        const alertTypeClass = {
            [_models_alert__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Success]: 'alert alert-success',
            [_models_alert__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Error]: 'alert alert-danger',
            [_models_alert__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Info]: 'alert alert-info',
            [_models_alert__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Warning]: 'alert alert-warning'
        };
        classes.push(alertTypeClass[alert.type]);
        if (alert.fade) {
            classes.push('fade');
        }
        return classes.join(' ');
    }
};
AlertComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _helpers_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AlertComponent.prototype, "id", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AlertComponent.prototype, "fade", void 0);
AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-alert',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./alert.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/alert/alert.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./alert.component.scss */ "./src/app/alert/alert.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _helpers_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
], AlertComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _home_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/contact/contact.component */ "./src/app/home/contact/contact.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _who_who_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./who/who.component */ "./src/app/who/who.component.ts");
/* harmony import */ var _why_why_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./why/why.component */ "./src/app/why/why.component.ts");
/* harmony import */ var _profil_profil_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profil/profil.component */ "./src/app/profil/profil.component.ts");
/* harmony import */ var _admin_board_admin_board_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin-board/admin-board.component */ "./src/app/admin-board/admin-board.component.ts");
/* harmony import */ var _user_board_user_board_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-board/user-board.component */ "./src/app/user-board/user-board.component.ts");
/* harmony import */ var _supervisor_board_supervisor_board_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./supervisor-board/supervisor-board.component */ "./src/app/supervisor-board/supervisor-board.component.ts");
/* harmony import */ var _modify_user_modify_user_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modify-user/modify-user.component */ "./src/app/modify-user/modify-user.component.ts");
/* harmony import */ var _view_user_view_user_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./view-user/view-user.component */ "./src/app/view-user/view-user.component.ts");
/* harmony import */ var _modify_user_admin_modify_user_admin_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modify-user-admin/modify-user-admin.component */ "./src/app/modify-user-admin/modify-user-admin.component.ts");
/* harmony import */ var _verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./verify-email/verify-email.component */ "./src/app/verify-email/verify-email.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/reset-password/reset-password.component.ts");
/* harmony import */ var _coming_soon_page_coming_soon_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./coming-soon-page/coming-soon-page.component */ "./src/app/coming-soon-page/coming-soon-page.component.ts");
/* harmony import */ var _career_career_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./career/career.component */ "./src/app/career/career.component.ts");
/* harmony import */ var _view_condidate_view_condidate_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./view-condidate/view-condidate.component */ "./src/app/view-condidate/view-condidate.component.ts");
/* harmony import */ var _modify_condidate_modify_condidate_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modify-condidate/modify-condidate.component */ "./src/app/modify-condidate/modify-condidate.component.ts");
/* harmony import */ var _declare_fiscality_declare_fiscality_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./declare-fiscality/declare-fiscality.component */ "./src/app/declare-fiscality/declare-fiscality.component.ts");
/* harmony import */ var _view_contactreq_view_contactreq_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./view-contactreq/view-contactreq.component */ "./src/app/view-contactreq/view-contactreq.component.ts");
/* harmony import */ var _modify_contactreq_modify_contactreq_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./modify-contactreq/modify-contactreq.component */ "./src/app/modify-contactreq/modify-contactreq.component.ts");
/* harmony import */ var _complete_profil_complete_profil_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./complete-profil/complete-profil.component */ "./src/app/complete-profil/complete-profil.component.ts");
/* harmony import */ var _calendar_fiscality_calendar_fiscality_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./calendar-fiscality/calendar-fiscality.component */ "./src/app/calendar-fiscality/calendar-fiscality.component.ts");
/* harmony import */ var _collab_user_create_collab_user_create_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./collab-user-create/collab-user-create.component */ "./src/app/collab-user-create/collab-user-create.component.ts");
/* harmony import */ var _calendar_fiscality_add_event_add_event_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./calendar-fiscality/add-event/add-event.component */ "./src/app/calendar-fiscality/add-event/add-event.component.ts");
/* harmony import */ var _view_event_view_event_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./view-event/view-event.component */ "./src/app/view-event/view-event.component.ts");
/* harmony import */ var _modify_event_modify_event_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./modify-event/modify-event.component */ "./src/app/modify-event/modify-event.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");


































const routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
    },
    { path: 'profil', component: _profil_profil_component__WEBPACK_IMPORTED_MODULE_10__["ProfilComponent"],
    },
    { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_33__["SettingsComponent"],
    },
    { path: 'declare-fiscality', component: _declare_fiscality_declare_fiscality_component__WEBPACK_IMPORTED_MODULE_24__["DeclareFiscalityComponent"],
    },
    { path: 'calendar-fiscality', component: _calendar_fiscality_calendar_fiscality_component__WEBPACK_IMPORTED_MODULE_28__["CalendarFiscalityComponent"],
    },
    { path: 'settings/calendar-fiscality', component: _calendar_fiscality_calendar_fiscality_component__WEBPACK_IMPORTED_MODULE_28__["CalendarFiscalityComponent"],
    },
    { path: 'add-event', component: _calendar_fiscality_add_event_add_event_component__WEBPACK_IMPORTED_MODULE_30__["AddEventComponent"],
    },
    { path: 'modify-user/:id', component: _modify_user_modify_user_component__WEBPACK_IMPORTED_MODULE_14__["ModifyUserComponent"],
    },
    { path: 'complete-profil/:id', component: _complete_profil_complete_profil_component__WEBPACK_IMPORTED_MODULE_27__["CompleteProfilComponent"],
    },
    { path: 'modify-condidate/:id', component: _modify_condidate_modify_condidate_component__WEBPACK_IMPORTED_MODULE_23__["ModifyCondidateComponent"],
    },
    { path: 'modify-contactreq/:id', component: _modify_contactreq_modify_contactreq_component__WEBPACK_IMPORTED_MODULE_26__["ModifyContactreqComponent"],
    },
    { path: 'modify-user-admin/:id', component: _modify_user_admin_modify_user_admin_component__WEBPACK_IMPORTED_MODULE_16__["ModifyUserAdminComponent"],
    },
    { path: 'modify-event/:id', component: _modify_event_modify_event_component__WEBPACK_IMPORTED_MODULE_32__["ModifyEventComponent"],
    },
    { path: 'view-user/:id', component: _view_user_view_user_component__WEBPACK_IMPORTED_MODULE_15__["ViewUserComponent"] },
    { path: 'view-condidate/:id', component: _view_condidate_view_condidate_component__WEBPACK_IMPORTED_MODULE_22__["ViewCondidateComponent"] },
    { path: 'view-contactreq/:id', component: _view_contactreq_view_contactreq_component__WEBPACK_IMPORTED_MODULE_25__["ViewContactreqComponent"] },
    { path: 'view-event/:id', component: _view_event_view_event_component__WEBPACK_IMPORTED_MODULE_31__["ViewEventComponent"] },
    { path: 'verify-email/:token', component: _verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_17__["VerifyEmailComponent"] },
    { path: 'reset-password/:token', component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_19__["ResetPasswordComponent"] },
    { path: 'admin-board', component: _admin_board_admin_board_component__WEBPACK_IMPORTED_MODULE_11__["AdminBoardComponent"],
    },
    { path: 'user-board', component: _user_board_user_board_component__WEBPACK_IMPORTED_MODULE_12__["UserBoardComponent"],
    },
    { path: 'career', component: _career_career_component__WEBPACK_IMPORTED_MODULE_21__["CareerComponent"],
    },
    { path: 'supervisor-board', component: _supervisor_board_supervisor_board_component__WEBPACK_IMPORTED_MODULE_13__["SupervisorBoardComponent"],
    },
    { path: 'home/contact', component: _home_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"],
    },
    { path: 'collab-create', component: _collab_user_create_collab_user_create_component__WEBPACK_IMPORTED_MODULE_29__["CollabUserCreateComponent"],
    },
    { path: 'login/signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"],
    },
    { path: 'login/forgot-password', component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_18__["ForgotPasswordComponent"],
    },
    { path: 'admin-board/profil', component: _profil_profil_component__WEBPACK_IMPORTED_MODULE_10__["ProfilComponent"],
    },
    { path: 'why', component: _why_why_component__WEBPACK_IMPORTED_MODULE_9__["WhyComponent"],
    },
    { path: 'who', component: _who_who_component__WEBPACK_IMPORTED_MODULE_8__["WhoComponent"],
    },
    { path: 'coming-soon', component: _coming_soon_page_coming_soon_page_component__WEBPACK_IMPORTED_MODULE_20__["ComingSoonPageComponent"],
    },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', redirectTo: '/coming-soon' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ],
        providers: [
            _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]
        ]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".left {\n  display: flex;\n}\n\n.side {\n  flex: 30%;\n  background-color: lightgray;\n  min-width: 190px;\n  min-height: 500px;\n}\n\n/* Main column */\n\n.main {\n  flex: 70%;\n  min-height: 500px;\n  padding: 20px;\n  overflow-x: hidden;\n}\n\n@media screen and (max-width: 1200px) {\n  .left {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxVU0VSXFxjdm1cXGN2bV9mcm9udGVuZC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7O0FER0E7RUFDSSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQUo7O0FER0UsZ0JBQUE7O0FBQ0E7RUFDRSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURFRTtFQUNFO0lBQ0Usc0JBQUE7RUNDSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxlZnR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgXHJcbiAgICBcclxufVxyXG4uc2lkZSB7XHJcbiAgICBmbGV4OiAzMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgICBtaW4td2lkdGg6IDE5MHB4O1xyXG4gICAgbWluLWhlaWdodDogNTAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIE1haW4gY29sdW1uICovXHJcbiAgLm1haW4ge1xyXG4gICAgZmxleDogNzAlO1xyXG4gICAgbWluLWhlaWdodDogNTAwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIC5sZWZ0IHsgICBcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICB9XHJcbiAgIiwiLmxlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc2lkZSB7XG4gIGZsZXg6IDMwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICBtaW4td2lkdGg6IDE5MHB4O1xuICBtaW4taGVpZ2h0OiA1MDBweDtcbn1cblxuLyogTWFpbiBjb2x1bW4gKi9cbi5tYWluIHtcbiAgZmxleDogNzAlO1xuICBtaW4taGVpZ2h0OiA1MDBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmxlZnQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn0iXX0= */");

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
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/token-storage.service */ "./src/app/services/token-storage.service.ts");



let AppComponent = class AppComponent {
    constructor(token) {
        this.token = token;
    }
    ngOnInit() {
        this.currentUser = this.token.getUser();
        this.usertype = this.currentUser.usertype;
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]])
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./interceptors/auth-interceptor */ "./src/app/interceptors/auth-interceptor.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _who_who_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./who/who.component */ "./src/app/who/who.component.ts");
/* harmony import */ var _why_why_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./why/why.component */ "./src/app/why/why.component.ts");
/* harmony import */ var _home_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home/contact/contact.component */ "./src/app/home/contact/contact.component.ts");
/* harmony import */ var _profil_profil_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./profil/profil.component */ "./src/app/profil/profil.component.ts");
/* harmony import */ var _admin_board_admin_board_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin-board/admin-board.component */ "./src/app/admin-board/admin-board.component.ts");
/* harmony import */ var _user_board_user_board_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user-board/user-board.component */ "./src/app/user-board/user-board.component.ts");
/* harmony import */ var _supervisor_board_supervisor_board_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./supervisor-board/supervisor-board.component */ "./src/app/supervisor-board/supervisor-board.component.ts");
/* harmony import */ var _modify_user_modify_user_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modify-user/modify-user.component */ "./src/app/modify-user/modify-user.component.ts");
/* harmony import */ var _view_user_view_user_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./view-user/view-user.component */ "./src/app/view-user/view-user.component.ts");
/* harmony import */ var _modify_user_admin_modify_user_admin_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./modify-user-admin/modify-user-admin.component */ "./src/app/modify-user-admin/modify-user-admin.component.ts");
/* harmony import */ var _verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./verify-email/verify-email.component */ "./src/app/verify-email/verify-email.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/reset-password/reset-password.component.ts");
/* harmony import */ var _career_career_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./career/career.component */ "./src/app/career/career.component.ts");
/* harmony import */ var _coming_soon_page_coming_soon_page_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./coming-soon-page/coming-soon-page.component */ "./src/app/coming-soon-page/coming-soon-page.component.ts");
/* harmony import */ var _view_condidate_view_condidate_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./view-condidate/view-condidate.component */ "./src/app/view-condidate/view-condidate.component.ts");
/* harmony import */ var _modify_condidate_modify_condidate_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./modify-condidate/modify-condidate.component */ "./src/app/modify-condidate/modify-condidate.component.ts");
/* harmony import */ var _declare_fiscality_declare_fiscality_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./declare-fiscality/declare-fiscality.component */ "./src/app/declare-fiscality/declare-fiscality.component.ts");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./alert/alert.component */ "./src/app/alert/alert.component.ts");
/* harmony import */ var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./search-bar/search-bar.component */ "./src/app/search-bar/search-bar.component.ts");
/* harmony import */ var _due_date_timeline_due_date_timeline_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./due-date-timeline/due-date-timeline.component */ "./src/app/due-date-timeline/due-date-timeline.component.ts");
/* harmony import */ var _view_contactreq_view_contactreq_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./view-contactreq/view-contactreq.component */ "./src/app/view-contactreq/view-contactreq.component.ts");
/* harmony import */ var _modify_contactreq_modify_contactreq_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./modify-contactreq/modify-contactreq.component */ "./src/app/modify-contactreq/modify-contactreq.component.ts");
/* harmony import */ var _complete_profil_complete_profil_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./complete-profil/complete-profil.component */ "./src/app/complete-profil/complete-profil.component.ts");
/* harmony import */ var _calendar_fiscality_calendar_fiscality_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./calendar-fiscality/calendar-fiscality.component */ "./src/app/calendar-fiscality/calendar-fiscality.component.ts");
/* harmony import */ var _collab_user_create_collab_user_create_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./collab-user-create/collab-user-create.component */ "./src/app/collab-user-create/collab-user-create.component.ts");
/* harmony import */ var _directive_sort_directive__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./directive/sort.directive */ "./src/app/directive/sort.directive.ts");
/* harmony import */ var _calendar_fiscality_add_event_add_event_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./calendar-fiscality/add-event/add-event.component */ "./src/app/calendar-fiscality/add-event/add-event.component.ts");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @fullcalendar/angular */ "./node_modules/@fullcalendar/angular/fesm2015/fullcalendar-angular.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/main.js");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @fullcalendar/interaction */ "./node_modules/@fullcalendar/interaction/main.js");
/* harmony import */ var _view_event_view_event_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./view-event/view-event.component */ "./src/app/view-event/view-event.component.ts");
/* harmony import */ var _modify_event_modify_event_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./modify-event/modify-event.component */ "./src/app/modify-event/modify-event.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./interceptors/error-interceptor */ "./src/app/interceptors/error-interceptor.ts");











































 // the main connector. must go first
 // a plugin





_fullcalendar_angular__WEBPACK_IMPORTED_MODULE_43__["FullCalendarModule"].registerPlugins([
    _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_44__["default"],
    _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_45__["default"]
]);
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
            _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
            _who_who_component__WEBPACK_IMPORTED_MODULE_15__["WhoComponent"],
            _why_why_component__WEBPACK_IMPORTED_MODULE_16__["WhyComponent"],
            _home_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"],
            _profil_profil_component__WEBPACK_IMPORTED_MODULE_18__["ProfilComponent"],
            _admin_board_admin_board_component__WEBPACK_IMPORTED_MODULE_19__["AdminBoardComponent"],
            _user_board_user_board_component__WEBPACK_IMPORTED_MODULE_20__["UserBoardComponent"],
            _supervisor_board_supervisor_board_component__WEBPACK_IMPORTED_MODULE_21__["SupervisorBoardComponent"],
            _modify_user_modify_user_component__WEBPACK_IMPORTED_MODULE_22__["ModifyUserComponent"],
            _view_user_view_user_component__WEBPACK_IMPORTED_MODULE_23__["ViewUserComponent"],
            _modify_user_admin_modify_user_admin_component__WEBPACK_IMPORTED_MODULE_24__["ModifyUserAdminComponent"],
            _verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_25__["VerifyEmailComponent"],
            _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_26__["ForgotPasswordComponent"],
            _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_27__["ResetPasswordComponent"],
            _career_career_component__WEBPACK_IMPORTED_MODULE_28__["CareerComponent"],
            _coming_soon_page_coming_soon_page_component__WEBPACK_IMPORTED_MODULE_29__["ComingSoonPageComponent"],
            _view_condidate_view_condidate_component__WEBPACK_IMPORTED_MODULE_30__["ViewCondidateComponent"],
            _modify_condidate_modify_condidate_component__WEBPACK_IMPORTED_MODULE_31__["ModifyCondidateComponent"],
            _declare_fiscality_declare_fiscality_component__WEBPACK_IMPORTED_MODULE_32__["DeclareFiscalityComponent"],
            _alert_alert_component__WEBPACK_IMPORTED_MODULE_33__["AlertComponent"],
            _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_34__["SearchBarComponent"],
            _due_date_timeline_due_date_timeline_component__WEBPACK_IMPORTED_MODULE_35__["DueDateTimelineComponent"],
            _view_contactreq_view_contactreq_component__WEBPACK_IMPORTED_MODULE_36__["ViewContactreqComponent"],
            _modify_contactreq_modify_contactreq_component__WEBPACK_IMPORTED_MODULE_37__["ModifyContactreqComponent"],
            _complete_profil_complete_profil_component__WEBPACK_IMPORTED_MODULE_38__["CompleteProfilComponent"],
            _calendar_fiscality_calendar_fiscality_component__WEBPACK_IMPORTED_MODULE_39__["CalendarFiscalityComponent"],
            _collab_user_create_collab_user_create_component__WEBPACK_IMPORTED_MODULE_40__["CollabUserCreateComponent"],
            _directive_sort_directive__WEBPACK_IMPORTED_MODULE_41__["SortDirective"],
            _calendar_fiscality_add_event_add_event_component__WEBPACK_IMPORTED_MODULE_42__["AddEventComponent"],
            _view_event_view_event_component__WEBPACK_IMPORTED_MODULE_46__["ViewEventComponent"],
            _modify_event_modify_event_component__WEBPACK_IMPORTED_MODULE_47__["ModifyEventComponent"],
            _settings_settings_component__WEBPACK_IMPORTED_MODULE_48__["SettingsComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_43__["FullCalendarModule"]
        ],
        providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"], useClass: _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__["AuthInterceptor"], multi: true }, {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
                useClass: _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_49__["HttpErrorInterceptor"],
                multi: true
            }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/calendar-fiscality/add-event/add-event.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/calendar-fiscality/add-event/add-event.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.container-fluid {\n  background-color: rgba(187, 202, 202, 0.774);\n  padding: 30px;\n}\n\nform {\n  border: 3px solid #f1f1f1;\n}\n\n/* Style the input container */\n\n.input-container {\n  display: flex;\n  width: 100%;\n  margin-bottom: 15px;\n}\n\n/* Style the form icons */\n\n.icon {\n  padding: 10px;\n  background: dodgerblue;\n  color: white;\n  min-width: 50px;\n  text-align: center;\n}\n\n.gender_icon {\n  padding: 10px;\n  background: dodgerblue;\n  color: white;\n  min-width: 50px;\n  text-align: center;\n}\n\n/* Style the input fields */\n\n.input-field {\n  width: 100%;\n  padding: 10px;\n  outline: none;\n}\n\n.input-field:focus {\n  border: 2px solid dodgerblue;\n}\n\n/* Set a style for the submit button */\n\n.btn {\n  background-color: dodgerblue;\n  color: white;\n  padding: 15px 20px;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  opacity: 0.9;\n}\n\n#loader {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  z-index: 1;\n  width: 120px;\n  height: 120px;\n  border: 16px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 16px solid #3498db;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite;\n  margin-top: 200px;\n}\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.btn:hover {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsZW5kYXItZmlzY2FsaXR5L2FkZC1ldmVudC9DOlxcVXNlcnNcXFVTRVJcXGN2bVxcY3ZtX2Zyb250ZW5kL3NyY1xcYXBwXFxjYWxlbmRhci1maXNjYWxpdHlcXGFkZC1ldmVudFxcYWRkLWV2ZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYWxlbmRhci1maXNjYWxpdHkvYWRkLWV2ZW50L2FkZC1ldmVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLDRDQUFBO0VBQ0EsYUFBQTtBQ0FGOztBREVBO0VBQ0kseUJBQUE7QUNDSjs7QURFQSw4QkFBQTs7QUFDQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQSx5QkFBQTs7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURDQTtFQUVRLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNDUjs7QURHQSwyQkFBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQ0FGOztBREdBO0VBQ0UsNEJBQUE7QUNBRjs7QURHQSxzQ0FBQTs7QUFDQTtFQUVFLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0RGOztBRElBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUVBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQkFBQTtBQ0ZGOztBREtBO0VBQ0U7SUFBSywrQkFBQTtFQ0RMO0VERUE7SUFBTyxpQ0FBQTtFQ0NQO0FBQ0Y7O0FEQ0E7RUFDRTtJQUFLLHVCQUFBO0VDRUw7RUREQTtJQUFPLHlCQUFBO0VDSVA7QUFDRjs7QURGSTtFQUNFLFVBQUE7QUNJTiIsImZpbGUiOiJzcmMvYXBwL2NhbGVuZGFyLWZpc2NhbGl0eS9hZGQtZXZlbnQvYWRkLWV2ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmNvbnRhaW5lci1mbHVpZHtcclxuICAgIFxyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg3LCAyMDIsIDIwMiwgMC43NzQpO1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuZm9ybSB7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxO1xyXG4gIH1cclxuXHJcbi8qIFN0eWxlIHRoZSBpbnB1dCBjb250YWluZXIgKi9cclxuLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4vKiBTdHlsZSB0aGUgZm9ybSBpY29ucyAqL1xyXG4uaWNvbiB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kOiBkb2RnZXJibHVlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtaW4td2lkdGg6IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5nZW5kZXJfaWNvbntcclxuICAgIFxyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogZG9kZ2VyYmx1ZTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgbWluLXdpZHRoOiA1MHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgXHJcbn1cclxuXHJcbi8qIFN0eWxlIHRoZSBpbnB1dCBmaWVsZHMgKi9cclxuLmlucHV0LWZpZWxkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5pbnB1dC1maWVsZDpmb2N1cyB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgZG9kZ2VyYmx1ZTtcclxufVxyXG5cclxuLyogU2V0IGEgc3R5bGUgZm9yIHRoZSBzdWJtaXQgYnV0dG9uICovXHJcbi5idG4ge1xyXG4gICAgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3BhY2l0eTogMC45O1xyXG4gIFxyXG59XHJcbiNsb2FkZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgei1pbmRleDogMTtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxuICBcclxuICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMztcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjMzQ5OGRiO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xyXG4gIG1hcmdpbi10b3A6IDIwMHB4O1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XHJcbiAgMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNwaW4ge1xyXG4gIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG59XHJcblxyXG4gICAgLmJ0bjpob3ZlciB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9IiwiZGl2LmNvbnRhaW5lci1mbHVpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg3LCAyMDIsIDIwMiwgMC43NzQpO1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG5mb3JtIHtcbiAgYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTtcbn1cblxuLyogU3R5bGUgdGhlIGlucHV0IGNvbnRhaW5lciAqL1xuLmlucHV0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4vKiBTdHlsZSB0aGUgZm9ybSBpY29ucyAqL1xuLmljb24ge1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiBkb2RnZXJibHVlO1xuICBjb2xvcjogd2hpdGU7XG4gIG1pbi13aWR0aDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZ2VuZGVyX2ljb24ge1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiBkb2RnZXJibHVlO1xuICBjb2xvcjogd2hpdGU7XG4gIG1pbi13aWR0aDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiBTdHlsZSB0aGUgaW5wdXQgZmllbGRzICovXG4uaW5wdXQtZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmlucHV0LWZpZWxkOmZvY3VzIHtcbiAgYm9yZGVyOiAycHggc29saWQgZG9kZ2VyYmx1ZTtcbn1cblxuLyogU2V0IGEgc3R5bGUgZm9yIHRoZSBzdWJtaXQgYnV0dG9uICovXG4uYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTAwJTtcbiAgb3BhY2l0eTogMC45O1xufVxuXG4jbG9hZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci10b3A6IDE2cHggc29saWQgIzM0OThkYjtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xuICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xuICBtYXJnaW4tdG9wOiAyMDBweDtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG4uYnRuOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/calendar-fiscality/add-event/add-event.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/calendar-fiscality/add-event/add-event.component.ts ***!
  \*********************************************************************/
/*! exports provided: AddEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEventComponent", function() { return AddEventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _models_event_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/event.model */ "./src/app/models/event.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let AddEventComponent = class AddEventComponent {
    constructor(formBuilder, apiService, router) {
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.router = router;
        this.loading = false;
        this.event = {
            title: '',
            date: '',
            description: ''
        };
    }
    ngOnInit() {
        this.eventform = this.formBuilder.group({
            title: [''],
            date: [''],
            description: [''],
        });
    }
    saveEvent() {
        this.loading = true;
        const event = new _models_event_model__WEBPACK_IMPORTED_MODULE_5__["Events"]();
        event.title = this.eventform.get('title').value;
        event.description = this.eventform.get('description').value;
        event.date = this.eventform.get('date').value;
        this.apiService.addEvent(event)
            .then((response) => {
            this.eventform.reset();
            this.loading = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                position: 'center',
                icon: 'success',
                title: 'Your Event has been added successfully',
                showConfirmButton: false,
                timer: 3000
            });
            this.router.navigate(['calendar-fiscality']);
            this.reloadPage();
        }, err => {
            this.loading = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                position: 'center',
                icon: 'error',
                title: JSON.stringify(err.error.error),
                timer: 3000
            });
        });
    }
    reloadPage() {
        setTimeout(() => window.location.reload(), 3500);
    }
};
AddEventComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _services_event_service__WEBPACK_IMPORTED_MODULE_4__["ApiServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AddEventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-event',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-event.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/calendar-fiscality/add-event/add-event.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-event.component.scss */ "./src/app/calendar-fiscality/add-event/add-event.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        _services_event_service__WEBPACK_IMPORTED_MODULE_4__["ApiServiceService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AddEventComponent);



/***/ }),

/***/ "./src/app/calendar-fiscality/calendar-fiscality.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/calendar-fiscality/calendar-fiscality.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbGVuZGFyLWZpc2NhbGl0eS9jYWxlbmRhci1maXNjYWxpdHkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/calendar-fiscality/calendar-fiscality.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/calendar-fiscality/calendar-fiscality.component.ts ***!
  \********************************************************************/
/*! exports provided: CalendarFiscalityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarFiscalityComponent", function() { return CalendarFiscalityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _fullcalendar_core_locales_fr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fullcalendar/core/locales/fr */ "./node_modules/@fullcalendar/core/locales/fr.js");
/* harmony import */ var _fullcalendar_core_locales_fr__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_core_locales_fr__WEBPACK_IMPORTED_MODULE_6__);







let CalendarFiscalityComponent = class CalendarFiscalityComponent {
    constructor(http, apiService, router) {
        this.http = http;
        this.apiService = apiService;
        this.router = router;
    }
    handleDateClick(arg) {
    }
    onSelectx(event) {
    }
    ngOnInit() {
        this.getAllEvents();
    }
    deleteEvent(id) {
        this.apiService.deleteSingleEvent(id).then((data) => { });
    }
    viewevent(id) {
        this.apiService.geteventreqById(id).then((data) => { });
        this.router.navigate(['view-event/' + id]);
    }
    getNavigation(link) {
        this.router.navigate([link]);
    }
    getAllEvents() {
        this.apiService.getAllEvents().subscribe((data) => {
            const self = this;
            this.calendarOptions = {
                initialView: 'dayGridMonth,timeGridWeek,timeGridDay',
                selectable: true,
                editable: false,
                displayEventTime: false,
                locale: _fullcalendar_core_locales_fr__WEBPACK_IMPORTED_MODULE_6___default.a,
                // dateClick: this.handleDateClick.bind(this),
                select: this.handleDateClick.bind(this),
                events: data,
                headerToolbar: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,dayGridWeek,dayGridDay,dayGridlist'
                },
                eventClick(evetData) {
                    // tslint:disable-next-line:variable-name
                    const event_id = evetData.event._def.extendedProps._id;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                        title: 'Actions Possibles',
                        icon: 'info',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Consulter',
                        timer: 30000,
                    }).then((result) => {
                        if (result.value) {
                            self.viewevent(event_id);
                            self.getAllEvents();
                        }
                    }).catch(() => {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Failed!', 'There was something went wrong.');
                    });
                }
            };
        });
    }
};
CalendarFiscalityComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _services_event_service__WEBPACK_IMPORTED_MODULE_3__["ApiServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
CalendarFiscalityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-calendar-fiscality',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./calendar-fiscality.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/calendar-fiscality/calendar-fiscality.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./calendar-fiscality.component.scss */ "./src/app/calendar-fiscality/calendar-fiscality.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _services_event_service__WEBPACK_IMPORTED_MODULE_3__["ApiServiceService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], CalendarFiscalityComponent);



/***/ }),

/***/ "./src/app/career/career.component.scss":
/*!**********************************************!*\
  !*** ./src/app/career/career.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-fluid {\n  text-align: center;\n}\n\n#loader {\n  position: relative;\n  left: 50%;\n  top: 50%;\n  z-index: 1;\n  width: 120px;\n  height: 120px;\n  border: 16px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 16px solid #3498db;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite;\n  margin-top: 200px;\n}\n\n.contact-form {\n  padding: 50px;\n  margin: 30px 0;\n}\n\n.contact-form h1 {\n  text-transform: uppercase;\n  margin: 0 0 15px;\n}\n\n.contact-form .form-control, .contact-form .btn {\n  min-height: 38px;\n  border-radius: 2px;\n}\n\n.contact-form .btn-primary {\n  min-width: 150px;\n  background: #299be4;\n  border: none;\n}\n\n.contact-form .btn-primary:hover {\n  background: #1c8cd7;\n}\n\n.contact-form .btn-secondary {\n  min-width: 150px;\n  background: grey;\n  border: none;\n  color: white;\n}\n\n.contact-form .btn-primary:hover {\n  background: grey;\n}\n\n.contact-form label {\n  opacity: 0.9;\n}\n\n.invalid-feedback {\n  color: red;\n  float: left;\n}\n\n.contact-form textarea {\n  resize: vertical;\n}\n\n.hint-text {\n  font-size: 15px;\n  padding-bottom: 15px;\n  opacity: 0.8;\n}\n\n.bs-example {\n  margin: 20px;\n}\n\n.row {\n  margin: 0 0 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZWVyL0M6XFxVc2Vyc1xcVVNFUlxcY3ZtXFxjdm1fZnJvbnRlbmQvc3JjXFxhcHBcXGNhcmVlclxcY2FyZWVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYXJlZXIvY2FyZWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7QUNBSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFFQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FDQ0o7O0FEQ0E7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FDR0o7O0FEREE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0lKOztBREZBO0VBQ0ksbUJBQUE7QUNLSjs7QURIQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ01KOztBREpBO0VBQ0ksZ0JBQUE7QUNPSjs7QURMQTtFQUNJLFlBQUE7QUNRSjs7QUROQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FDU0o7O0FEUEE7RUFDSSxnQkFBQTtBQ1VKOztBRFJBO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQ1dKOztBRFRBO0VBQ0ksWUFBQTtBQ1lKOztBRFZBO0VBQ0ksZUFBQTtBQ2FKIiwiZmlsZSI6InNyYy9hcHAvY2FyZWVyL2NhcmVlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY29udGFpbmVyLWZsdWlke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiNsb2FkZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIFxyXG4gICAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXItdG9wOiAxNnB4IHNvbGlkICMzNDk4ZGI7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMjAwcHg7XHJcbiAgICB9XHJcbi5jb250YWN0LWZvcm0ge1xyXG4gICAgcGFkZGluZzogNTBweDtcclxuICAgIG1hcmdpbjogMzBweCAwO1xyXG59XHJcbi5jb250YWN0LWZvcm0gaDEge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG1hcmdpbjogMCAwIDE1cHg7XHJcbn1cclxuLmNvbnRhY3QtZm9ybSAuZm9ybS1jb250cm9sLCAuY29udGFjdC1mb3JtIC5idG4gIHtcclxuICAgIG1pbi1oZWlnaHQ6IDM4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuLmNvbnRhY3QtZm9ybSAuYnRuLXByaW1hcnkge1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIGJhY2tncm91bmQ6ICMyOTliZTQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLmNvbnRhY3QtZm9ybSAuYnRuLXByaW1hcnk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzFjOGNkNzsgXHJcbn1cclxuLmNvbnRhY3QtZm9ybSAuYnRuLXNlY29uZGFyeSB7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogZ3JleTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uY29udGFjdC1mb3JtIC5idG4tcHJpbWFyeTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBncmV5OyBcclxufVxyXG4uY29udGFjdC1mb3JtIGxhYmVsIHtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxufVxyXG4uaW52YWxpZC1mZWVkYmFja3tcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICB9XHJcbi5jb250YWN0LWZvcm0gdGV4dGFyZWEge1xyXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcclxufVxyXG4uaGludC10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG59XHJcbi5icy1leGFtcGxlIHtcclxuICAgIG1hcmdpbjogMjBweDtcclxufVxyXG4ucm93e1xyXG4gICAgbWFyZ2luOiAwIDAgMCAwO1xyXG59IiwiLmNvbnRhaW5lci1mbHVpZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2xvYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xuICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItdG9wOiAxNnB4IHNvbGlkICMzNDk4ZGI7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgbWFyZ2luLXRvcDogMjAwcHg7XG59XG5cbi5jb250YWN0LWZvcm0ge1xuICBwYWRkaW5nOiA1MHB4O1xuICBtYXJnaW46IDMwcHggMDtcbn1cblxuLmNvbnRhY3QtZm9ybSBoMSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbjogMCAwIDE1cHg7XG59XG5cbi5jb250YWN0LWZvcm0gLmZvcm0tY29udHJvbCwgLmNvbnRhY3QtZm9ybSAuYnRuIHtcbiAgbWluLWhlaWdodDogMzhweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4uY29udGFjdC1mb3JtIC5idG4tcHJpbWFyeSB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIGJhY2tncm91bmQ6ICMyOTliZTQ7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmNvbnRhY3QtZm9ybSAuYnRuLXByaW1hcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMWM4Y2Q3O1xufVxuXG4uY29udGFjdC1mb3JtIC5idG4tc2Vjb25kYXJ5IHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgYmFja2dyb3VuZDogZ3JleTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb250YWN0LWZvcm0gLmJ0bi1wcmltYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogZ3JleTtcbn1cblxuLmNvbnRhY3QtZm9ybSBsYWJlbCB7XG4gIG9wYWNpdHk6IDAuOTtcbn1cblxuLmludmFsaWQtZmVlZGJhY2sge1xuICBjb2xvcjogcmVkO1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmNvbnRhY3QtZm9ybSB0ZXh0YXJlYSB7XG4gIHJlc2l6ZTogdmVydGljYWw7XG59XG5cbi5oaW50LXRleHQge1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbi5icy1leGFtcGxlIHtcbiAgbWFyZ2luOiAyMHB4O1xufVxuXG4ucm93IHtcbiAgbWFyZ2luOiAwIDAgMCAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/career/career.component.ts":
/*!********************************************!*\
  !*** ./src/app/career/career.component.ts ***!
  \********************************************/
/*! exports provided: CareerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareerComponent", function() { return CareerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_condidate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/condidate.service */ "./src/app/services/condidate.service.ts");
/* harmony import */ var _helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/must-match.validator */ "./src/app/_helpers/must-match.validator.ts");
/* harmony import */ var _models_condidate_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/condidate.model */ "./src/app/models/condidate.model.ts");
/* harmony import */ var _helpers_mime_type_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_helpers/mime-type.validator */ "./src/app/_helpers/mime-type.validator.ts");
/* harmony import */ var _helpers_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_helpers/alert.service */ "./src/app/_helpers/alert.service.ts");









let CareerComponent = class CareerComponent {
    constructor(formBuilder, router, cond, alertService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.cond = cond;
        this.alertService = alertService;
        this.loading = false;
        this.fileUploaded = false;
        this.submitted = false;
    }
    ngOnInit() {
        this.condidateform = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            firstname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            confirmemail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            confirmmobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            specialite: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            selectspecialite: [''],
            adresse: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            image: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _helpers_mime_type_validator__WEBPACK_IMPORTED_MODULE_7__["mimeType"]]
        }, {
            validator: [Object(_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_5__["MustMatch"])('email', 'confirmemail'), Object(_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_5__["MustMatch"])('mobile', 'confirmmobile')]
        });
    }
    get f() { return this.condidateform.controls; }
    onSubmit() {
        this.loading = true;
        this.submitted = true;
        if (this.condidateform.invalid) {
            return this.loading = false;
        }
        const condidate = new _models_condidate_model__WEBPACK_IMPORTED_MODULE_6__["Condidate"]();
        condidate.email = this.condidateform.get('email').value;
        condidate.mobile = this.condidateform.get('mobile').value;
        condidate.firstname = this.condidateform.get('firstname').value;
        condidate.lastname = this.condidateform.get('lastname').value;
        condidate.adresse = this.condidateform.get('adresse').value;
        condidate.description = this.condidateform.get('description').value;
        if (this.condidateform.get('specialite').value == "Autre") {
            condidate.specialite = this.condidateform.get('specialite').value + '/' + this.condidateform.get('selectspecialite').value;
        }
        else {
            condidate.specialite = this.condidateform.get('specialite').value;
        }
        ;
        condidate.ficheUrl = '';
        this.cond.create(condidate, this.condidateform.get('image').value).then((data) => {
            this.condidateform.reset();
            this.loading = false;
            this.alertService.success('Création effectuée avec succès, veuillez vous connecter pour consulter votre demande');
            window.scrollTo(0, 0);
        }, (error) => {
            this.loading = false;
            this.alertService.error(error.error.error);
            window.scrollTo(0, 0);
        });
    }
    onImagePick(event) {
        const file = event.target.files[0];
        this.condidateform.get('image').patchValue(file);
        this.condidateform.get('image').updateValueAndValidity();
        const reader = new FileReader();
        reader.onload = () => {
            if (this.condidateform.get('image').valid) {
                this.imagePreview = reader.result;
                this.fileUploaded = true;
            }
            else {
                this.imagePreview = null;
            }
        };
        reader.readAsDataURL(file);
    }
    onReset() {
        this.submitted = false;
        this.condidateform.reset();
    }
};
CareerComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_condidate_service__WEBPACK_IMPORTED_MODULE_4__["CondidateService"] },
    { type: _helpers_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"] }
];
CareerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-career',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./career.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/career/career.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./career.component.scss */ "./src/app/career/career.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_condidate_service__WEBPACK_IMPORTED_MODULE_4__["CondidateService"],
        _helpers_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"]])
], CareerComponent);



/***/ }),

/***/ "./src/app/collab-user-create/collab-user-create.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/collab-user-create/collab-user-create.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2 {\n  text-align: center;\n}\n\nlabel {\n  width: 20%;\n}\n\n.error-container {\n  display: inline-flex;\n  width: 100%;\n}\n\n.email-container {\n  display: inline-flex;\n  width: 100%;\n}\n\n.mobile-container {\n  display: inline-flex;\n  width: 100%;\n}\n\n.password-container {\n  display: inline-flex;\n  width: 100%;\n}\n\ndiv.container-fluid {\n  background-color: rgba(187, 202, 202, 0.774);\n  padding: 30px;\n}\n\nform {\n  border: 3px solid #f1f1f1;\n}\n\n/* Style the input container */\n\n.input-container {\n  display: flex;\n  width: 100%;\n  margin-bottom: 15px;\n}\n\n.input-container-disabled {\n  display: none;\n}\n\n/* Style the form icons */\n\n.icon {\n  padding: 10px;\n  background: dodgerblue;\n  color: white;\n  min-width: 50px;\n  text-align: center;\n}\n\n.gender_icon {\n  padding: 10px;\n  background: dodgerblue;\n  color: white;\n  min-width: 50px;\n  text-align: center;\n}\n\n/* Style the input fields */\n\n.input-field {\n  width: 100%;\n  padding: 10px;\n  outline: none;\n}\n\n.input-field:focus {\n  border: 2px solid dodgerblue;\n}\n\n.error-container {\n  display: block;\n}\n\n/* Set a style for the submit button */\n\n.btn {\n  color: black;\n  padding: 15px 20px;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  opacity: 0.9;\n}\n\n.invalid-feedback {\n  color: red;\n  float: right;\n}\n\n/* Center the loader */\n\n#loader {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  z-index: 1;\n  width: 120px;\n  height: 120px;\n  border: 16px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 16px solid #3498db;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite;\n  margin-top: 200px;\n}\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.btn:hover {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29sbGFiLXVzZXItY3JlYXRlL0M6XFxVc2Vyc1xcVVNFUlxcY3ZtXFxjdm1fZnJvbnRlbmQvc3JjXFxhcHBcXGNvbGxhYi11c2VyLWNyZWF0ZVxcY29sbGFiLXVzZXItY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb2xsYWItdXNlci1jcmVhdGUvY29sbGFiLXVzZXItY3JlYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURDQTtFQUNFLFVBQUE7QUNFRjs7QURBQTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtBQ0dGOztBRERBO0VBQ0Usb0JBQUE7RUFDQSxXQUFBO0FDSUY7O0FERkE7RUFDRSxvQkFBQTtFQUNBLFdBQUE7QUNLRjs7QURIQTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtBQ01GOztBREpBO0VBR00sNENBQUE7RUFDQSxhQUFBO0FDS047O0FESEk7RUFDSSx5QkFBQTtBQ01SOztBREhJLDhCQUFBOztBQUNBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ01OOztBREpLO0VBQ0MsYUFBQTtBQ09OOztBREhJLHlCQUFBOztBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ01OOztBREpJO0VBRVEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ01aOztBREZJLDJCQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FDS047O0FERkk7RUFDRSw0QkFBQTtBQ0tOOztBREhJO0VBQ0UsY0FBQTtBQ01OOztBREhJLHNDQUFBOztBQUNBO0VBR0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0lOOztBRERJO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUNJTjs7QURESSxzQkFBQTs7QUFDSjtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFFQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUJBQUE7QUNHRjs7QURBQTtFQUNFO0lBQUssK0JBQUE7RUNJTDtFREhBO0lBQU8saUNBQUE7RUNNUDtBQUNGOztBREpBO0VBQ0U7SUFBSyx1QkFBQTtFQ09MO0VETkE7SUFBTyx5QkFBQTtFQ1NQO0FBQ0Y7O0FEUEk7RUFDRSxVQUFBO0FDU04iLCJmaWxlIjoic3JjL2FwcC9jb2xsYWItdXNlci1jcmVhdGUvY29sbGFiLXVzZXItY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxubGFiZWx7XHJcbiAgd2lkdGg6IDIwJTtcclxufVxyXG4uZXJyb3ItY29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5lbWFpbC1jb250YWluZXJ7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm1vYmlsZS1jb250YWluZXJ7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnBhc3N3b3JkLWNvbnRhaW5lcntcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5kaXYuY29udGFpbmVyLWZsdWlke1xyXG4gICAgXHJcbiAgICAgIFxyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NywgMjAyLCAyMDIsIDAuNzc0KTtcclxuICAgICAgcGFkZGluZzogMzBweDtcclxuICAgIH1cclxuICAgIGZvcm0ge1xyXG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNmMWYxZjE7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgLyogU3R5bGUgdGhlIGlucHV0IGNvbnRhaW5lciAqL1xyXG4gICAgLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgIC5pbnB1dC1jb250YWluZXItZGlzYWJsZWQge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyogU3R5bGUgdGhlIGZvcm0gaWNvbnMgKi9cclxuICAgIC5pY29uIHtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgYmFja2dyb3VuZDogZG9kZ2VyYmx1ZTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBtaW4td2lkdGg6IDUwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5nZW5kZXJfaWNvbntcclxuICAgICAgICBcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogZG9kZ2VyYmx1ZTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKiBTdHlsZSB0aGUgaW5wdXQgZmllbGRzICovXHJcbiAgICAuaW5wdXQtZmllbGQge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmlucHV0LWZpZWxkOmZvY3VzIHtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgZG9kZ2VyYmx1ZTtcclxuICAgIH1cclxuICAgIC5lcnJvci1jb250YWluZXJ7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKiBTZXQgYSBzdHlsZSBmb3IgdGhlIHN1Ym1pdCBidXR0b24gKi9cclxuICAgIC5idG4ge1xyXG4gICAgICAgIFxyXG4gICAgICBcclxuICAgICAgY29sb3I6YmxhY2s7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgLmludmFsaWQtZmVlZGJhY2t7XHJcbiAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyogQ2VudGVyIHRoZSBsb2FkZXIgKi9cclxuI2xvYWRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDUwJTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG4gIFxyXG4gIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXItdG9wOiAxNnB4IHNvbGlkICMzNDk4ZGI7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgbWFyZ2luLXRvcDogMjAwcHg7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbn1cclxuXHJcbiAgICAuYnRuOmhvdmVyIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH0iLCJoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxubGFiZWwge1xuICB3aWR0aDogMjAlO1xufVxuXG4uZXJyb3ItY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZW1haWwtY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubW9iaWxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnBhc3N3b3JkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuZGl2LmNvbnRhaW5lci1mbHVpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg3LCAyMDIsIDIwMiwgMC43NzQpO1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG5mb3JtIHtcbiAgYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTtcbn1cblxuLyogU3R5bGUgdGhlIGlucHV0IGNvbnRhaW5lciAqL1xuLmlucHV0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uaW5wdXQtY29udGFpbmVyLWRpc2FibGVkIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogU3R5bGUgdGhlIGZvcm0gaWNvbnMgKi9cbi5pY29uIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogZG9kZ2VyYmx1ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBtaW4td2lkdGg6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmdlbmRlcl9pY29uIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogZG9kZ2VyYmx1ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBtaW4td2lkdGg6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogU3R5bGUgdGhlIGlucHV0IGZpZWxkcyAqL1xuLmlucHV0LWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5pbnB1dC1maWVsZDpmb2N1cyB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGRvZGdlcmJsdWU7XG59XG5cbi5lcnJvci1jb250YWluZXIge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogU2V0IGEgc3R5bGUgZm9yIHRoZSBzdWJtaXQgYnV0dG9uICovXG4uYnRuIHtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTAwJTtcbiAgb3BhY2l0eTogMC45O1xufVxuXG4uaW52YWxpZC1mZWVkYmFjayB7XG4gIGNvbG9yOiByZWQ7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLyogQ2VudGVyIHRoZSBsb2FkZXIgKi9cbiNsb2FkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjMzQ5OGRiO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG4gIG1hcmdpbi10b3A6IDIwMHB4O1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbi5idG46aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/collab-user-create/collab-user-create.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/collab-user-create/collab-user-create.component.ts ***!
  \********************************************************************/
/*! exports provided: CollabUserCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollabUserCreateComponent", function() { return CollabUserCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/must-match.validator */ "./src/app/_helpers/must-match.validator.ts");
/* harmony import */ var _helpers_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_helpers/alert.service */ "./src/app/_helpers/alert.service.ts");







let CollabUserCreateComponent = class CollabUserCreateComponent {
    constructor(formBuilder, router, auth, alertService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.auth = auth;
        this.alertService = alertService;
        this.loading = false;
        this.isSuccessful = false;
        this.isSignUpFailed = false;
        this.submitted = false;
    }
    ngOnInit() {
        this.signupForm = this.formBuilder.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            confirmpassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            firstname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            confirmemail: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            mobile: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            confirmmobile: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            usertype: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fonction: [null],
            secteur: [null],
            civilite: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            raisonsociale: [null],
            nomsociete: [null],
            clientcode: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            role: [{ value: "basic", disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        }, {
            validator: [Object(_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_5__["MustMatch"])('email', 'confirmemail'), Object(_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_5__["MustMatch"])('mobile', 'confirmmobile')]
        });
        this.signupForm.reset();
    }
    get f() { return this.signupForm.controls; }
    randomString() {
        var chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        var string_length = 1;
        var randomstring = '';
        var chars2 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        var string_length2 = 2;
        var randomstring2 = '';
        for (var i = 0; i < string_length; i++) {
            var rnum = Math.floor(Math.random() * chars.length);
            randomstring += chars.substring(rnum, rnum + 1);
        }
        for (var j = 0; j < string_length2; j++) {
            var rnum2 = Math.floor(Math.random() * chars2.length);
            randomstring2 += chars2.substring(rnum2, rnum2 + 1);
        }
        this.signupForm.patchValue({ clientcode: randomstring + randomstring2 });
    }
    onSignup() {
        this.loading = true;
        this.submitted = true;
        if (this.signupForm.invalid) {
            return this.loading = false;
        }
        const email = this.signupForm.get('email').value;
        const mobile = this.signupForm.get('mobile').value;
        const usertype = this.signupForm.get('usertype').value;
        const password = this.signupForm.get('password').value;
        const confirmpassword = this.signupForm.get('confirmpassword').value;
        const firstname = this.signupForm.get('firstname').value;
        const lastname = this.signupForm.get('lastname').value;
        const fonction = this.signupForm.get('fonction').value;
        const secteur = this.signupForm.get('secteur').value;
        const civilite = this.signupForm.get('civilite').value;
        const raisonsociale = this.signupForm.get('raisonsociale').value;
        const nomsociete = this.signupForm.get('nomsociete').value;
        const clientcode = this.signupForm.get('clientcode').value;
        const role = this.signupForm.get('role').value;
        this.auth.register(email, password, confirmpassword, mobile, usertype, firstname, lastname, fonction, secteur, civilite, raisonsociale, nomsociete, clientcode, role).subscribe({
            next: data => {
                this.alertService.success(data.message);
                window.scrollTo(0, 0);
                this.isSuccessful = true;
                this.isSignUpFailed = false;
                this.loading = false;
                this.router.navigate(['admin-board']);
            },
            error: error => {
                this.alertService.error(error.error.error);
                window.scrollTo(0, 0);
                this.loading = false;
                this.isSignUpFailed = true;
            }
        });
    }
    onReset() {
        this.submitted = false;
        this.signupForm.reset();
    }
};
CollabUserCreateComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _helpers_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] }
];
CollabUserCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-collab-user-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./collab-user-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/collab-user-create/collab-user-create.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./collab-user-create.component.scss */ "./src/app/collab-user-create/collab-user-create.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _helpers_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]])
], CollabUserCreateComponent);



/***/ }),

/***/ "./src/app/coming-soon-page/coming-soon-page.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/coming-soon-page/coming-soon-page.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-fluid {\n  background-image: url('coming-soon.jpg');\n  background-position: center;\n  background-size: cover;\n  position: relative;\n  color: black;\n  height: 500px;\n  font-size: 25px;\n}\n\n.topleft {\n  position: relative;\n  top: 0;\n  left: 16px;\n}\n\n.bottomleft {\n  position: relative;\n  bottom: 0;\n  left: 16px;\n}\n\n.middle {\n  position: relative;\n  top: 20%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n\nhr {\n  margin: auto;\n  width: 40%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29taW5nLXNvb24tcGFnZS9DOlxcVXNlcnNcXFVTRVJcXGN2bVxcY3ZtX2Zyb250ZW5kL3NyY1xcYXBwXFxjb21pbmctc29vbi1wYWdlXFxjb21pbmctc29vbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21pbmctc29vbi1wYWdlL2NvbWluZy1zb29uLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRU07RUFFRSx3Q0FBQTtFQUVBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ0hSOztBRE1NO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQ0hSOztBRE1NO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0hSOztBRE1NO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7QUNIUjs7QURNTTtFQUNFLFlBQUE7RUFDQSxVQUFBO0FDSFIiLCJmaWxlIjoic3JjL2FwcC9jb21pbmctc29vbi1wYWdlL2NvbWluZy1zb29uLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIFxyXG4gICAgICAuY29udGFpbmVyLWZsdWlkIHtcclxuICAgICAgICBcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9jb21pbmctc29vbi5qcGcnKTtcclxuICAgICAgICBcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgLnRvcGxlZnQge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMTZweDtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIC5ib3R0b21sZWZ0IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGxlZnQ6IDE2cHg7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICAubWlkZGxlIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdG9wOiAyMCU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIGhyIHtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgfSIsIi5jb250YWluZXItZmx1aWQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvY29taW5nLXNvb24uanBnXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IGJsYWNrO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi50b3BsZWZ0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDE2cHg7XG59XG5cbi5ib3R0b21sZWZ0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDE2cHg7XG59XG5cbi5taWRkbGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmhyIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/coming-soon-page/coming-soon-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/coming-soon-page/coming-soon-page.component.ts ***!
  \****************************************************************/
/*! exports provided: ComingSoonPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingSoonPageComponent", function() { return ComingSoonPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ComingSoonPageComponent = class ComingSoonPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
ComingSoonPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-coming-soon-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./coming-soon-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/coming-soon-page/coming-soon-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./coming-soon-page.component.scss */ "./src/app/coming-soon-page/coming-soon-page.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ComingSoonPageComponent);



/***/ }),

/***/ "./src/app/complete-profil/complete-profil.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/complete-profil/complete-profil.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2 {\n  text-align: center;\n}\n\nh4 {\n  text-align: center;\n  color: red;\n}\n\nlabel {\n  width: 260px;\n}\n\n.mobile-container {\n  display: inline-flex;\n  width: 100%;\n}\n\n.checkbox-container {\n  display: inline-flex;\n  width: 100%;\n}\n\n.email-container {\n  display: inline-flex;\n  width: 100%;\n}\n\ndiv.container-fluid {\n  background-color: rgba(187, 202, 202, 0.774);\n  padding: 30px;\n}\n\nform {\n  border: 3px solid #f1f1f1;\n}\n\n/* Style the input container */\n\n.input-container {\n  display: flex;\n  width: 100%;\n  margin-bottom: 15px;\n}\n\n.input-container-hidden {\n  display: none;\n}\n\n/* Style the form icons */\n\n.icon {\n  padding: 10px;\n  background: dodgerblue;\n  color: white;\n  min-width: 50px;\n  text-align: center;\n}\n\n.input-container-disabled {\n  display: flex;\n  width: 100%;\n  margin-bottom: 15px;\n}\n\n.gender_icon {\n  padding: 10px;\n  background: dodgerblue;\n  color: white;\n  min-width: 50px;\n  text-align: center;\n}\n\n/* Style the input fields */\n\n.input-field {\n  width: 100%;\n  padding: 10px;\n  outline: none;\n}\n\n.input-field:focus {\n  border: 2px solid dodgerblue;\n}\n\n/* Set a style for the submit button */\n\n.btn {\n  background-color: dodgerblue;\n  color: white;\n  padding: 15px 20px;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  opacity: 0.9;\n  text-align: center;\n}\n\n/* Center the loader */\n\n#loader {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  z-index: 1;\n  width: 120px;\n  height: 120px;\n  border: 16px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 16px solid #3498db;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite;\n  margin-top: 200px;\n}\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.btn:hover {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGxldGUtcHJvZmlsL0M6XFxVc2Vyc1xcVVNFUlxcY3ZtXFxjdm1fZnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBsZXRlLXByb2ZpbFxcY29tcGxldGUtcHJvZmlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wbGV0ZS1wcm9maWwvY29tcGxldGUtcHJvZmlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURDQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQ0VGOztBRENBO0VBQ0UsWUFBQTtBQ0VGOztBREFBO0VBQ0Usb0JBQUE7RUFDQSxXQUFBO0FDR0Y7O0FEREE7RUFDRSxvQkFBQTtFQUNBLFdBQUE7QUNJRjs7QURGQTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtBQ0tGOztBREhBO0VBRU0sNENBQUE7RUFDQSxhQUFBO0FDS047O0FESEk7RUFDSSx5QkFBQTtBQ01SOztBREhJLDhCQUFBOztBQUNBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ01OOztBREpJO0VBQ0UsYUFBQTtBQ09OOztBRExJLHlCQUFBOztBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ1FOOztBRE5JO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ1NOOztBRFBJO0VBRVEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ1NaOztBRExJLDJCQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FDUU47O0FETEk7RUFDRSw0QkFBQTtBQ1FOOztBRExJLHNDQUFBOztBQUNBO0VBRUUsNEJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNPTjs7QURGSSxzQkFBQTs7QUFDSjtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFFQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUJBQUE7QUNJRjs7QUREQTtFQUNFO0lBQUssK0JBQUE7RUNLTDtFREpBO0lBQU8saUNBQUE7RUNPUDtBQUNGOztBRExBO0VBQ0U7SUFBSyx1QkFBQTtFQ1FMO0VEUEE7SUFBTyx5QkFBQTtFQ1VQO0FBQ0Y7O0FEUkk7RUFDRSxVQUFBO0FDVU4iLCJmaWxlIjoic3JjL2FwcC9jb21wbGV0ZS1wcm9maWwvY29tcGxldGUtcHJvZmlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaDR7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbmxhYmVse1xyXG4gIHdpZHRoOiAyNjBweDtcclxufVxyXG4ubW9iaWxlLWNvbnRhaW5lcntcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uY2hlY2tib3gtY29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5lbWFpbC1jb250YWluZXJ7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuZGl2LmNvbnRhaW5lci1mbHVpZHtcclxuICAgIFxyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NywgMjAyLCAyMDIsIDAuNzc0KTtcclxuICAgICAgcGFkZGluZzogMzBweDtcclxuICAgIH1cclxuICAgIGZvcm0ge1xyXG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNmMWYxZjE7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgLyogU3R5bGUgdGhlIGlucHV0IGNvbnRhaW5lciAqL1xyXG4gICAgLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLmlucHV0LWNvbnRhaW5lci1oaWRkZW4ge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLyogU3R5bGUgdGhlIGZvcm0gaWNvbnMgKi9cclxuICAgIC5pY29uIHtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgYmFja2dyb3VuZDogZG9kZ2VyYmx1ZTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBtaW4td2lkdGg6IDUwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5pbnB1dC1jb250YWluZXItZGlzYWJsZWQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIH1cclxuICAgIC5nZW5kZXJfaWNvbntcclxuICAgICAgICBcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogZG9kZ2VyYmx1ZTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKiBTdHlsZSB0aGUgaW5wdXQgZmllbGRzICovXHJcbiAgICAuaW5wdXQtZmllbGQge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmlucHV0LWZpZWxkOmZvY3VzIHtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgZG9kZ2VyYmx1ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyogU2V0IGEgc3R5bGUgZm9yIHRoZSBzdWJtaXQgYnV0dG9uICovXHJcbiAgICAuYnRuIHtcclxuICAgICAgICBcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyogQ2VudGVyIHRoZSBsb2FkZXIgKi9cclxuI2xvYWRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDUwJTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG4gIFxyXG4gIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXItdG9wOiAxNnB4IHNvbGlkICMzNDk4ZGI7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgbWFyZ2luLXRvcDogMjAwcHg7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbn1cclxuXHJcbiAgICAuYnRuOmhvdmVyIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH0iLCJoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaDQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiByZWQ7XG59XG5cbmxhYmVsIHtcbiAgd2lkdGg6IDI2MHB4O1xufVxuXG4ubW9iaWxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNoZWNrYm94LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmVtYWlsLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuZGl2LmNvbnRhaW5lci1mbHVpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg3LCAyMDIsIDIwMiwgMC43NzQpO1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG5mb3JtIHtcbiAgYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTtcbn1cblxuLyogU3R5bGUgdGhlIGlucHV0IGNvbnRhaW5lciAqL1xuLmlucHV0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uaW5wdXQtY29udGFpbmVyLWhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIFN0eWxlIHRoZSBmb3JtIGljb25zICovXG4uaWNvbiB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IGRvZGdlcmJsdWU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWluLXdpZHRoOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbnB1dC1jb250YWluZXItZGlzYWJsZWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmdlbmRlcl9pY29uIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogZG9kZ2VyYmx1ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBtaW4td2lkdGg6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogU3R5bGUgdGhlIGlucHV0IGZpZWxkcyAqL1xuLmlucHV0LWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5pbnB1dC1maWVsZDpmb2N1cyB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGRvZGdlcmJsdWU7XG59XG5cbi8qIFNldCBhIHN0eWxlIGZvciB0aGUgc3VibWl0IGJ1dHRvbiAqL1xuLmJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTVweCAyMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG9wYWNpdHk6IDAuOTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiBDZW50ZXIgdGhlIGxvYWRlciAqL1xuI2xvYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xuICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItdG9wOiAxNnB4IHNvbGlkICMzNDk4ZGI7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgbWFyZ2luLXRvcDogMjAwcHg7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuLmJ0bjpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59Il19 */");

/***/ }),

/***/ "./src/app/complete-profil/complete-profil.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/complete-profil/complete-profil.component.ts ***!
  \**************************************************************/
/*! exports provided: CompleteProfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleteProfilComponent", function() { return CompleteProfilComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/token-storage.service */ "./src/app/services/token-storage.service.ts");
/* harmony import */ var _helpers_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_helpers/alert.service */ "./src/app/_helpers/alert.service.ts");









let CompleteProfilComponent = class CompleteProfilComponent {
    constructor(formBuilder, userservice, route, router, auth, tokenStorage, alertService) {
        this.formBuilder = formBuilder;
        this.userservice = userservice;
        this.route = route;
        this.router = router;
        this.auth = auth;
        this.tokenStorage = tokenStorage;
        this.alertService = alertService;
        this.isloggedin = false;
        this.loading = false;
        this.submitted = true;
        this.fiscalmatPattern = "^[1-9]{7}[A-Z]{1}AP\[0-9]{3}$";
    }
    ngOnInit() {
        this.loading = true;
        if (this.tokenStorage.getToken()) {
            this.isloggedin = true;
            this.currentuser = this.tokenStorage.getUser();
            this.userservice.getUserById(this.currentuser.userId).then((user) => {
                this.loading = false;
                this.user = user;
                this.userForm = this.formBuilder.group({
                    role: [this.user.role,],
                    firstname: [this.user.firstname,],
                    lastname: [this.user.lastname,],
                    confirmemail: [null],
                    mobile: [this.user.mobile,],
                    confirmmobile: [null],
                    usertype: [this.user.usertype,],
                    email: [this.user.email,],
                    fonction: [this.user.fonction,],
                    password: [null,],
                    confirmpassword: [null,],
                    secteur: [this.user.secteur,],
                    civilite: [this.user.civilite,],
                    raisonsociale: [this.user.raisonsociale,],
                    activitynature: [{ value: this.user.natureactivite, }],
                    selectactivitynature: [null,],
                    activity: [this.user.activite,],
                    selectactivity: [null,],
                    adresseactivite: [this.user.adresseactivite,],
                    codepostal: [this.user.codepostal,],
                    underactivity: [this.user.sousactivite,],
                    selectunderactivity: [null,],
                    fiscalimpot: [this.user.regimefiscalimpot,],
                    selectfiscalimpot: [null,],
                    fiscaltvaassobli: [{ value: "Assujeti Obligatoire", disabled: true }],
                    fiscalmat: [this.user.matriculefiscale, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.fiscalmatPattern)]],
                    nomsociete: [this.user.nomsociete,],
                    clientcode: [{ value: this.user.clientcode, disabled: true },],
                });
                this.optionValue = this.user.natureactivite;
                this.option1Value = this.user.activite;
                this.option2Value = this.user.sousactivite;
                this.option3Value = this.user.regimefiscalimpot;
                this.loading = false;
            });
        }
        else {
            this.router.navigate(['login']);
        }
        ;
    }
    get f() { return this.userForm.controls; }
    onSubmit() {
        this.loading = true;
        this.submitted = true;
        if (this.userForm.invalid) {
            return this.loading = false;
        }
        this.alertService.clear();
        const user = new _models_user_model__WEBPACK_IMPORTED_MODULE_5__["User"]();
        user.userId = this.user.userId;
        user.role = this.userForm.get('role').value;
        user.email = this.userForm.get('email').value;
        user.password = this.userForm.get('password').value;
        user.mobile = this.userForm.get('mobile').value;
        user.usertype = this.userForm.get('usertype').value;
        user.confirmpassword = this.userForm.get('confirmpassword').value;
        user.firstname = this.userForm.get('firstname').value;
        user.lastname = this.userForm.get('lastname').value;
        user.fonction = this.userForm.get('fonction').value;
        if (this.userForm.get('activitynature').value == "Autre") {
            user.natureactivite = this.userForm.get('activitynature').value + '/' + this.userForm.get('selectactivitynature').value;
        }
        else {
            user.natureactivite = this.userForm.get('activitynature').value;
        }
        ;
        if (this.userForm.get('activity').value == "Autre") {
            user.activite = this.userForm.get('activity').value + '/' + this.userForm.get('selectactivity').value;
        }
        else {
            user.activite = this.userForm.get('activity').value;
        }
        ;
        if (this.userForm.get('underactivity').value == "Autre") {
            user.sousactivite = this.userForm.get('underactivity').value + '/' + this.userForm.get('selectunderactivity').value;
        }
        else {
            user.sousactivite = this.userForm.get('underactivity').value;
        }
        ;
        if (this.userForm.get('fiscalimpot').value == "Autre") {
            user.regimefiscalimpot = this.userForm.get('fiscalimpot').value + '/' + this.userForm.get('selectfiscalimpot').value;
        }
        else {
            user.regimefiscalimpot = this.userForm.get('fiscalimpot').value;
        }
        ;
        user.matriculefiscale = this.userForm.get('fiscalmat').value;
        user.regimefiscaltva = this.userForm.get('fiscaltvaassobli').value;
        user.adresseactivite = this.userForm.get('adresseactivite').value;
        user.codepostal = this.userForm.get('codepostal').value;
        user.matriculefiscale = this.userForm.get('fiscalmat').value;
        user.secteur = this.userForm.get('secteur').value;
        user.civilite = this.userForm.get('civilite').value;
        user.raisonsociale = this.userForm.get('raisonsociale').value;
        user.nomsociete = this.userForm.get('nomsociete').value;
        user.clientcode = this.userForm.get('clientcode').value;
        this.userservice.completeUserById(this.currentuser.userId, user).then(() => {
            this.userForm.reset();
            this.loading = false;
            this.alertService.success('Modification effectuée avec succès!', { keepAfterRouteChange: true });
            window.scrollTo(0, 0);
            this.router.navigate(['home']);
        }, (error) => {
            this.loading = false;
            this.alertService.error(JSON.stringify(error.error.error));
            window.scrollTo(0, 0);
        });
    }
    reloadPage() {
        setTimeout(() => window.location.reload(), 3000);
    }
};
CompleteProfilComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_7__["TokenStorageService"] },
    { type: _helpers_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"] }
];
CompleteProfilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-complete-profil',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./complete-profil.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/complete-profil/complete-profil.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./complete-profil.component.scss */ "./src/app/complete-profil/complete-profil.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
        _services_token_storage_service__WEBPACK_IMPORTED_MODULE_7__["TokenStorageService"],
        _helpers_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"]])
], CompleteProfilComponent);



/***/ }),

/***/ "./src/app/declare-fiscality/declare-fiscality.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/declare-fiscality/declare-fiscality.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".checkbox-container {\n  display: inline-flex;\n  margin: auto;\n  width: 100%;\n  padding: 10px;\n  text-align: center;\n}\n\n.container-fluid-disabled {\n  display: none;\n  padding: 10px;\n  text-align: center;\n}\n\n.input-container {\n  display: flex;\n  width: 100%;\n  margin-bottom: 15px;\n  text-align: center;\n}\n\np {\n  color: grey;\n}\n\n#heading {\n  text-transform: uppercase;\n  color: #673AB7;\n  font-weight: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVjbGFyZS1maXNjYWxpdHkvQzpcXFVzZXJzXFxVU0VSXFxjdm1cXGN2bV9mcm9udGVuZC9zcmNcXGFwcFxcZGVjbGFyZS1maXNjYWxpdHlcXGRlY2xhcmUtZmlzY2FsaXR5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZWNsYXJlLWZpc2NhbGl0eS9kZWNsYXJlLWZpc2NhbGl0eS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLG9CQUFBO0VBQ0EsWUFBQTtFQUNGLFdBQUE7RUFFQSxhQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURHRTtFQUNFLGFBQUE7RUFFRixhQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURHRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0FKOztBRElBO0VBQ0ksV0FBQTtBQ0RKOztBRElBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2RlY2xhcmUtZmlzY2FsaXR5L2RlY2xhcmUtZmlzY2FsaXR5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jaGVja2JveC1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxuICBcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmNvbnRhaW5lci1mbHVpZC1kaXNhYmxlZHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgXHJcbiAgcGFkZGluZzogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5pbnB1dC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG5cclxucCB7XHJcbiAgICBjb2xvcjogZ3JleVxyXG59XHJcblxyXG4jaGVhZGluZyB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6ICM2NzNBQjc7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsXHJcbn1cclxuXHJcbiIsIi5jaGVja2JveC1jb250YWluZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGFpbmVyLWZsdWlkLWRpc2FibGVkIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW5wdXQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxucCB7XG4gIGNvbG9yOiBncmV5O1xufVxuXG4jaGVhZGluZyB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjNjczQUI3O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/declare-fiscality/declare-fiscality.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/declare-fiscality/declare-fiscality.component.ts ***!
  \******************************************************************/
/*! exports provided: DeclareFiscalityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeclareFiscalityComponent", function() { return DeclareFiscalityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/token-storage.service */ "./src/app/services/token-storage.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _helpers_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/alert.service */ "./src/app/_helpers/alert.service.ts");






let DeclareFiscalityComponent = class DeclareFiscalityComponent {
    constructor(token, router, route, alertService, usersservice) {
        this.token = token;
        this.router = router;
        this.route = route;
        this.alertService = alertService;
        this.usersservice = usersservice;
        this.isLoggedIn = false;
        this.loading = false;
    }
    ngOnInit() {
        this.isLoggedIn = !!this.token.getToken();
        if (this.isLoggedIn) {
            this.currentUser = this.token.getUser();
        }
        else
            (this.alertService.warn('Veuillez compléter votre profil pour pouvoir déposer votre déclaration'), this.router.navigate(['login']));
        this.usersservice.getUserById(this.currentUser.userId).then((user) => {
            this.loading = false;
            this.user = user;
            this.natureactivite = this.user.natureactivite;
            this.activite = this.user.activite;
            this.sousactivite = this.user.sousactivite;
            this.regimefiscalimpot = this.user.regimefiscalimpot;
            this.matriculefiscale = this.user.matriculefiscale;
            if (!user.natureactivite || user.natureactivite == 'Autre/null' || !user.activite || user.activite == 'Autre/null'
                || !user.sousactivite || user.sousactivite == 'Autre/null' || user.regimefiscalimpot == 'Autre/null'
                || !user.regimefiscalimpot || !user.matriculefiscale)
                return (this.router.navigate(['complete-profil/' + this.currentUser.userId]));
        });
    }
    myFunction6() {
        var checkbox = document.getElementById("myCheck6");
        var text2 = document.getElementById("Check5");
        var text3 = document.getElementById("Check7");
        if (checkbox.checked == true) {
            text3.style.display = "none";
            text2.style.display = "none";
        }
        else {
            text3.style.display = "block";
            text2.style.display = "block";
        }
    }
    myFunction7() {
        var checkbox = document.getElementById("myCheck7");
        var text2 = document.getElementById("Check5");
        var text3 = document.getElementById("Check6");
        if (checkbox.checked == true) {
            text2.style.display = "none";
            text3.style.display = "none";
        }
        else {
            text2.style.display = "block";
            text3.style.display = "block";
        }
    }
    myFunction5() {
        var checkbox = document.getElementById("myCheck5");
        var text2 = document.getElementById("Check7");
        var text3 = document.getElementById("Check6");
        if (checkbox.checked == true) {
            text2.style.display = "none";
            text3.style.display = "none";
        }
        else {
            text2.style.display = "block";
            text3.style.display = "block";
        }
    }
    myFunction1() {
        var checkbox = document.getElementById("myCheck1");
        var text6 = document.getElementById("Check2");
        if (checkbox.checked == true) {
            text6.style.display = "none";
        }
        else {
            text6.style.display = "block";
        }
    }
    myFunction3() {
        var checkbox = document.getElementById("myCheck3");
        var text6 = document.getElementById("Check4");
        if (checkbox.checked == true) {
            text6.style.display = "none";
        }
        else {
            text6.style.display = "block";
        }
    }
    myFunction4() {
        var checkbox = document.getElementById("myCheck4");
        var text2 = document.getElementById("Check3");
        if (checkbox.checked == true) {
            text2.style.display = "none";
        }
        else {
            text2.style.display = "block";
        }
    }
    myFunction2() {
        var checkbox = document.getElementById("myCheck2");
        var text = document.getElementById("check2");
        var text3 = document.getElementById("Check1");
        if (checkbox.checked == true) {
            text.style.display = "block";
            text3.style.display = "none";
        }
        else {
            text.style.display = "none";
            text3.style.display = "block";
        }
    }
};
DeclareFiscalityComponent.ctorParameters = () => [
    { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _helpers_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
DeclareFiscalityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-declare-fiscality',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./declare-fiscality.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/declare-fiscality/declare-fiscality.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./declare-fiscality.component.scss */ "./src/app/declare-fiscality/declare-fiscality.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _helpers_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
], DeclareFiscalityComponent);



/***/ }),

/***/ "./src/app/directive/sort.directive.ts":
/*!*********************************************!*\
  !*** ./src/app/directive/sort.directive.ts ***!
  \*********************************************/
/*! exports provided: SortDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortDirective", function() { return SortDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _helpers_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/sort */ "./src/app/_helpers/sort.ts");



let SortDirective = class SortDirective {
    constructor(renderer, targetElement) {
        this.renderer = renderer;
        this.targetElement = targetElement;
    }
    sortData() {
        const sort = new _helpers_sort__WEBPACK_IMPORTED_MODULE_2__["Sort"]();
        const elem = this.targetElement.nativeElement;
        const order = elem.getAttribute("data-order");
        const type = elem.getAttribute("data-type");
        const property = elem.getAttribute("data-name");
        if (order === "desc") {
            this.appSort.sort(sort.startSort(property, order, type));
            elem.setAttribute("data-order", "asc");
        }
        else {
            this.appSort.sort(sort.startSort(property, order, type));
            elem.setAttribute("data-order", "desc");
        }
    }
};
SortDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], SortDirective.prototype, "appSort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("click"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], SortDirective.prototype, "sortData", null);
SortDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appSort]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], SortDirective);



/***/ }),

/***/ "./src/app/due-date-timeline/due-date-timeline.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/due-date-timeline/due-date-timeline.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#loader {\n  position: relative;\n  left: 50%;\n  top: 50%;\n  z-index: 1;\n  width: 120px;\n  height: 120px;\n  border: 16px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 16px solid #3498db;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite;\n  margin-top: 200px;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n  border: 1px solid #ddd;\n}\n\n.container-fluid {\n  margin-top: 20px;\n}\n\nth, td {\n  text-align: left;\n  padding: 8px;\n  min-width: 150px;\n}\n\ntr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHVlLWRhdGUtdGltZWxpbmUvQzpcXFVzZXJzXFxVU0VSXFxjdm1cXGN2bV9mcm9udGVuZC9zcmNcXGFwcFxcZHVlLWRhdGUtdGltZWxpbmVcXGR1ZS1kYXRlLXRpbWVsaW5lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kdWUtZGF0ZS10aW1lbGluZS9kdWUtZGF0ZS10aW1lbGluZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFFQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBRUEsc0JBQUE7QUNBRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQW1CLHlCQUFBO0FDRW5CIiwiZmlsZSI6InNyYy9hcHAvZHVlLWRhdGUtdGltZWxpbmUvZHVlLWRhdGUtdGltZWxpbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbG9hZGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgXHJcbiAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlci10b3A6IDE2cHggc29saWQgIzM0OThkYjtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICBtYXJnaW4tdG9wOiAyMDBweDtcclxuICB9XHJcbnRhYmxlIHtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIFxyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbn1cclxuLmNvbnRhaW5lci1mbHVpZHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIFxyXG59XHJcbnRoLCB0ZCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxufVxyXG5cclxudHI6bnRoLWNoaWxkKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjJ9IiwiI2xvYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xuICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItdG9wOiAxNnB4IHNvbGlkICMzNDk4ZGI7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgbWFyZ2luLXRvcDogMjAwcHg7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xufVxuXG4uY29udGFpbmVyLWZsdWlkIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxudGgsIHRkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogOHB4O1xuICBtaW4td2lkdGg6IDE1MHB4O1xufVxuXG50cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/due-date-timeline/due-date-timeline.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/due-date-timeline/due-date-timeline.component.ts ***!
  \******************************************************************/
/*! exports provided: DueDateTimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DueDateTimelineComponent", function() { return DueDateTimelineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let DueDateTimelineComponent = class DueDateTimelineComponent {
    constructor(formBuilder, UserService, eve, router) {
        this.formBuilder = formBuilder;
        this.UserService = UserService;
        this.eve = eve;
        this.router = router;
        this.events = [];
    }
    ngOnInit() {
        this.eventsSub = this.eve.getcomingEvents().subscribe((events) => {
            this.events = events;
            this.loading = false;
        }, (error) => {
            this.loading = false;
            this.errormsg = error.message;
        });
    }
    getNavigationusers(link, id) {
        this.UserService.getUserById(id);
        this.router.navigate([link + '/' + id]);
    }
};
DueDateTimelineComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _services_event_service__WEBPACK_IMPORTED_MODULE_4__["ApiServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
DueDateTimelineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-due-date-timeline',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./due-date-timeline.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/due-date-timeline/due-date-timeline.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./due-date-timeline.component.scss */ "./src/app/due-date-timeline/due-date-timeline.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
        _services_event_service__WEBPACK_IMPORTED_MODULE_4__["ApiServiceService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], DueDateTimelineComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer {\n  padding: 5px;\n  /* some padding */\n  text-align: center;\n  /* center the text */\n  background: #1abc9c;\n  /* green background */\n  color: white;\n  /* white text color */\n  bottom: 0;\n  width: 100%;\n}\n\n.navbar {\n  padding: 0px;\n  margin: auto;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0M6XFxVc2Vyc1xcVVNFUlxcY3ZtXFxjdm1fZnJvbnRlbmQvc3JjXFxhcHBcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUFjLGlCQUFBO0VBQ2Qsa0JBQUE7RUFBb0Isb0JBQUE7RUFDcEIsbUJBQUE7RUFBcUIscUJBQUE7RUFDckIsWUFBQTtFQUFjLHFCQUFBO0VBQ2QsU0FBQTtFQUNBLFdBQUE7QUNLSjs7QURGRztFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0tMIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gICAgcGFkZGluZzogNXB4OyAvKiBzb21lIHBhZGRpbmcgKi9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgLyogY2VudGVyIHRoZSB0ZXh0ICovXHJcbiAgICBiYWNrZ3JvdW5kOiAjMWFiYzljOyAvKiBncmVlbiBiYWNrZ3JvdW5kICovXHJcbiAgICBjb2xvcjogd2hpdGU7IC8qIHdoaXRlIHRleHQgY29sb3IgKi9cclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAgLm5hdmJhciB7XHJcbiAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgIG1hcmdpbjogYXV0bztcclxuICAgICB3aWR0aDogMTAwJTtcclxuICAgfSIsIi5mb290ZXIge1xuICBwYWRkaW5nOiA1cHg7XG4gIC8qIHNvbWUgcGFkZGluZyAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC8qIGNlbnRlciB0aGUgdGV4dCAqL1xuICBiYWNrZ3JvdW5kOiAjMWFiYzljO1xuICAvKiBncmVlbiBiYWNrZ3JvdW5kICovXG4gIGNvbG9yOiB3aGl0ZTtcbiAgLyogd2hpdGUgdGV4dCBjb2xvciAqL1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubmF2YmFyIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  color: #fff;\n  background: #d47677;\n}\n\n.form-control {\n  min-height: 41px;\n  background: #fff;\n  box-shadow: none !important;\n  border-color: #e3e3e3;\n}\n\n.form-control:focus {\n  border-color: #70c5c0;\n}\n\n.form-control, .btn {\n  border-radius: 2px;\n}\n\n.forgot-password-form {\n  width: 350px;\n  margin: 0 auto;\n  padding: 100px 0 30px;\n}\n\n.forgot-password-form form {\n  color: #7a7a7a;\n  border-radius: 2px;\n  margin-bottom: 15px;\n  font-size: 13px;\n  background: #ececec;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n  padding: 30px;\n  position: relative;\n}\n\n.forgot-password-form h2 {\n  font-size: 22px;\n  margin: 35px 0 25px;\n}\n\n.forgot-password-form .avatar {\n  position: absolute;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  top: -50px;\n  width: 95px;\n  height: 95px;\n  border-radius: 50%;\n  z-index: 9;\n  background: #70c5c0;\n  padding: 15px;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);\n}\n\n.forgot-password-form .avatar img {\n  width: 100%;\n}\n\n.forgot-password-form input[type=checkbox] {\n  position: relative;\n  top: 1px;\n}\n\n.forgot-password-form .btn, .forgot-password-form .btn:active {\n  font-size: 16px;\n  font-weight: bold;\n  background: #70c5c0 !important;\n  border: none;\n  margin-bottom: 20px;\n}\n\n.forgot-password-form .btn:hover, .forgot-password-form .btn:focus {\n  background: #50b8b3 !important;\n}\n\n.forgot-password-form a {\n  color: #fff;\n  text-decoration: underline;\n}\n\n.forgot-password-form a:hover {\n  text-decoration: none;\n}\n\n.forgot-password-form form a {\n  color: #7a7a7a;\n  text-decoration: none;\n}\n\n.forgot-password-form form a:hover {\n  text-decoration: underline;\n}\n\n.forgot-password-form .bottom-action {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ290LXBhc3N3b3JkL0M6XFxVc2Vyc1xcVVNFUlxcY3ZtXFxjdm1fZnJvbnRlbmQvc3JjXFxhcHBcXGZvcmdvdC1wYXNzd29yZFxcZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsV0FBQTtFQUNBLG1CQUFBO0FDQ0Q7O0FEQ0E7RUFDQyxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtBQ0VEOztBREFBO0VBQ0MscUJBQUE7QUNHRDs7QUREQTtFQUNDLGtCQUFBO0FDSUQ7O0FERkE7RUFDQyxZQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FDS0Q7O0FESEE7RUFDQyxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDTUQ7O0FESkE7RUFDQyxlQUFBO0VBQ0EsbUJBQUE7QUNPRDs7QURMQTtFQUNDLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsMENBQUE7QUNRRDs7QUROQTtFQUNDLFdBQUE7QUNTRDs7QURQQTtFQUNDLGtCQUFBO0VBQ0EsUUFBQTtBQ1VEOztBRFJBO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNXRDs7QURUQTtFQUNDLDhCQUFBO0FDWUQ7O0FEVkE7RUFDQyxXQUFBO0VBQ0EsMEJBQUE7QUNhRDs7QURYQTtFQUNDLHFCQUFBO0FDY0Q7O0FEWkE7RUFDQyxjQUFBO0VBQ0EscUJBQUE7QUNlRDs7QURiQTtFQUNDLDBCQUFBO0FDZ0JEOztBRGRBO0VBQ0MsZUFBQTtBQ2lCRCIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRiYWNrZ3JvdW5kOiAjZDQ3Njc3O1xyXG59XHJcbi5mb3JtLWNvbnRyb2wge1xyXG5cdG1pbi1oZWlnaHQ6IDQxcHg7XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcblx0Ym9yZGVyLWNvbG9yOiAjZTNlM2UzO1xyXG59XHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG5cdGJvcmRlci1jb2xvcjogIzcwYzVjMDtcclxufVxyXG4uZm9ybS1jb250cm9sLCAuYnRuIHsgICAgICAgIFxyXG5cdGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG4uZm9yZ290LXBhc3N3b3JkLWZvcm0ge1xyXG5cdHdpZHRoOiAzNTBweDtcclxuXHRtYXJnaW46IDAgYXV0bztcclxuXHRwYWRkaW5nOiAxMDBweCAwIDMwcHg7XHRcdFxyXG59XHJcbi5mb3Jnb3QtcGFzc3dvcmQtZm9ybSBmb3JtIHtcclxuXHRjb2xvcjogIzdhN2E3YTtcclxuXHRib3JkZXItcmFkaXVzOiAycHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHRmb250LXNpemU6IDEzcHg7XHJcblx0YmFja2dyb3VuZDogI2VjZWNlYztcclxuXHRib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcblx0cGFkZGluZzogMzBweDtcdFxyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcdFxyXG59XHJcbi5mb3Jnb3QtcGFzc3dvcmQtZm9ybSBoMiB7XHJcblx0Zm9udC1zaXplOiAyMnB4O1xyXG5cdG1hcmdpbjogMzVweCAwIDI1cHg7XHJcbn1cclxuLmZvcmdvdC1wYXNzd29yZC1mb3JtIC5hdmF0YXIge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRtYXJnaW46IDAgYXV0bztcclxuXHRsZWZ0OiAwO1xyXG5cdHJpZ2h0OiAwO1xyXG5cdHRvcDogLTUwcHg7XHJcblx0d2lkdGg6IDk1cHg7XHJcblx0aGVpZ2h0OiA5NXB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHR6LWluZGV4OiA5O1xyXG5cdGJhY2tncm91bmQ6ICM3MGM1YzA7XHJcblx0cGFkZGluZzogMTVweDtcclxuXHRib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuLmZvcmdvdC1wYXNzd29yZC1mb3JtIC5hdmF0YXIgaW1nIHtcclxuXHR3aWR0aDogMTAwJTtcclxufVx0XHJcbi5mb3Jnb3QtcGFzc3dvcmQtZm9ybSBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR0b3A6IDFweDtcclxufVxyXG4uZm9yZ290LXBhc3N3b3JkLWZvcm0gLmJ0biwgLmZvcmdvdC1wYXNzd29yZC1mb3JtIC5idG46YWN0aXZlIHsgICAgICAgIFxyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRiYWNrZ3JvdW5kOiAjNzBjNWMwICFpbXBvcnRhbnQ7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLmZvcmdvdC1wYXNzd29yZC1mb3JtIC5idG46aG92ZXIsIC5mb3Jnb3QtcGFzc3dvcmQtZm9ybSAuYnRuOmZvY3VzIHtcclxuXHRiYWNrZ3JvdW5kOiAjNTBiOGIzICFpbXBvcnRhbnQ7XHJcbn0gICAgXHJcbi5mb3Jnb3QtcGFzc3dvcmQtZm9ybSBhIHtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4uZm9yZ290LXBhc3N3b3JkLWZvcm0gYTpob3ZlciB7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5mb3Jnb3QtcGFzc3dvcmQtZm9ybSBmb3JtIGEge1xyXG5cdGNvbG9yOiAjN2E3YTdhO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uZm9yZ290LXBhc3N3b3JkLWZvcm0gZm9ybSBhOmhvdmVyIHtcclxuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4uZm9yZ290LXBhc3N3b3JkLWZvcm0gLmJvdHRvbS1hY3Rpb24ge1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxufSIsImJvZHkge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogI2Q0NzY3Nztcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIG1pbi1oZWlnaHQ6IDQxcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjZTNlM2UzO1xufVxuXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjNzBjNWMwO1xufVxuXG4uZm9ybS1jb250cm9sLCAuYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4uZm9yZ290LXBhc3N3b3JkLWZvcm0ge1xuICB3aWR0aDogMzUwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAxMDBweCAwIDMwcHg7XG59XG5cbi5mb3Jnb3QtcGFzc3dvcmQtZm9ybSBmb3JtIHtcbiAgY29sb3I6ICM3YTdhN2E7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBiYWNrZ3JvdW5kOiAjZWNlY2VjO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmZvcmdvdC1wYXNzd29yZC1mb3JtIGgyIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBtYXJnaW46IDM1cHggMCAyNXB4O1xufVxuXG4uZm9yZ290LXBhc3N3b3JkLWZvcm0gLmF2YXRhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IC01MHB4O1xuICB3aWR0aDogOTVweDtcbiAgaGVpZ2h0OiA5NXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHotaW5kZXg6IDk7XG4gIGJhY2tncm91bmQ6ICM3MGM1YzA7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmZvcmdvdC1wYXNzd29yZC1mb3JtIC5hdmF0YXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb3Jnb3QtcGFzc3dvcmQtZm9ybSBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxcHg7XG59XG5cbi5mb3Jnb3QtcGFzc3dvcmQtZm9ybSAuYnRuLCAuZm9yZ290LXBhc3N3b3JkLWZvcm0gLmJ0bjphY3RpdmUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kOiAjNzBjNWMwICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmZvcmdvdC1wYXNzd29yZC1mb3JtIC5idG46aG92ZXIsIC5mb3Jnb3QtcGFzc3dvcmQtZm9ybSAuYnRuOmZvY3VzIHtcbiAgYmFja2dyb3VuZDogIzUwYjhiMyAhaW1wb3J0YW50O1xufVxuXG4uZm9yZ290LXBhc3N3b3JkLWZvcm0gYSB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmZvcmdvdC1wYXNzd29yZC1mb3JtIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5mb3Jnb3QtcGFzc3dvcmQtZm9ybSBmb3JtIGEge1xuICBjb2xvcjogIzdhN2E3YTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZm9yZ290LXBhc3N3b3JkLWZvcm0gZm9ybSBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5mb3Jnb3QtcGFzc3dvcmQtZm9ybSAuYm90dG9tLWFjdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _helpers_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/alert.service */ "./src/app/_helpers/alert.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");





let ForgotPasswordComponent = class ForgotPasswordComponent {
    constructor(formBuilder, accountService, alertService) {
        this.formBuilder = formBuilder;
        this.accountService = accountService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
    }
    ngOnInit() {
        this.forgotpasswordform = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]]
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.forgotpasswordform.controls; }
    onSubmit() {
        this.submitted = true;
        this.loading = true;
        this.accountService.forgotPassword(this.f.email.value).then((success) => {
            this.alertService.success(success.message);
            window.scrollTo(0, 0);
        }, (error) => {
            this.alertService.error(error.error.error);
            window.scrollTo(0, 0);
        });
    }
};
ForgotPasswordComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _helpers_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }
];
ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgot-password.component.scss */ "./src/app/forgot-password/forgot-password.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        _helpers_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
], ForgotPasswordComponent);



/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\n  padding: 20px;\n  /* some padding */\n  text-align: center;\n  /* center the text */\n  background: #1abc9c;\n  /* green background */\n  color: white;\n  /* white text color */\n}\n\n.navbar-brand {\n  background-position: center center;\n  background-size: cover;\n  background-image: url('company_logo.jpg');\n  font-size: 25px;\n  margin: 0%;\n}\n\n.navbar {\n  padding: 0px;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcVVNFUlxcY3ZtXFxjdm1fZnJvbnRlbmQvc3JjXFxhcHBcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUFlLGlCQUFBO0VBQ2Ysa0JBQUE7RUFBb0Isb0JBQUE7RUFDcEIsbUJBQUE7RUFBcUIscUJBQUE7RUFDckIsWUFBQTtFQUFjLHFCQUFBO0FDS2xCOztBREhFO0VBQ0Usa0NBQUE7RUFBb0Msc0JBQUE7RUFDbkMseUNBQUE7RUFFQSxlQUFBO0VBQ0EsVUFBQTtBQ01MOztBREhHO0VBQ0UsWUFBQTtFQUNBLFNBQUE7QUNNTCIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7IC8qIHNvbWUgcGFkZGluZyAqL1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAvKiBjZW50ZXIgdGhlIHRleHQgKi9cclxuICAgIGJhY2tncm91bmQ6ICMxYWJjOWM7IC8qIGdyZWVuIGJhY2tncm91bmQgKi9cclxuICAgIGNvbG9yOiB3aGl0ZTsgLyogd2hpdGUgdGV4dCBjb2xvciAqL1xyXG4gIH1cclxuICAubmF2YmFyLWJyYW5kIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7IGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxyXG4gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2NvbXBhbnlfbG9nby5qcGcnKTtcclxuICAgICBcclxuICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgbWFyZ2luOiAwJTtcclxuICAgXHJcbiAgIH1cclxuICAgLm5hdmJhciB7XHJcbiAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgIG1hcmdpbjogMDtcclxuICAgfVxyXG4gICBcclxuICBcclxuICAiLCIuaGVhZGVyIHtcbiAgcGFkZGluZzogMjBweDtcbiAgLyogc29tZSBwYWRkaW5nICovXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLyogY2VudGVyIHRoZSB0ZXh0ICovXG4gIGJhY2tncm91bmQ6ICMxYWJjOWM7XG4gIC8qIGdyZWVuIGJhY2tncm91bmQgKi9cbiAgY29sb3I6IHdoaXRlO1xuICAvKiB3aGl0ZSB0ZXh0IGNvbG9yICovXG59XG5cbi5uYXZiYXItYnJhbmQge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvY29tcGFueV9sb2dvLmpwZ1wiKTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBtYXJnaW46IDAlO1xufVxuXG4ubmF2YmFyIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/token-storage.service */ "./src/app/services/token-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let HeaderComponent = class HeaderComponent {
    constructor(router, Auth) {
        this.router = router;
        this.Auth = Auth;
        this.isLoggedIn = false;
        this.showAdminBoard = false;
        this.showModeratorBoard = false;
    }
    ngOnInit() {
        this.isLoggedIn = !!this.Auth.getToken();
        if (this.isLoggedIn) {
            const user = this.Auth.getUser();
            this.role = user.role;
            this.username = user.Firstname;
            this.lastname = user.Lastname;
        }
    }
    logout() {
        this.Auth.signOut();
        this.reloadPage();
    }
    reloadPage() {
        setTimeout(() => window.location.reload(), 3000);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]])
], HeaderComponent);



/***/ }),

/***/ "./src/app/home/contact/contact.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/home/contact/contact.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*Contact sectiom*/\n.content-header {\n  font-family: \"Oleo Script\", cursive;\n  color: #fcc500;\n  font-size: 45px;\n}\n#loader {\n  position: relative;\n  left: 50%;\n  top: 50%;\n  z-index: 1;\n  width: 120px;\n  height: 120px;\n  border: 16px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 16px solid #3498db;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite;\n  margin-top: 200px;\n}\n.section-content {\n  text-align: center;\n}\n.container-fluid {\n  font-family: \"Teko\", sans-serif;\n  background: #3a6186;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to left, #3a6186, #89253e);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  color: #fff;\n}\n.contact-section {\n  padding-top: 40px;\n}\n.contact-section .col-md-6 {\n  width: 50%;\n}\n.form-line {\n  border-right: 1px solid #B29999;\n}\nbody {\n  height: 100%;\n  margin: 0;\n}\n#contact {\n  height: 100%;\n  margin: 0;\n  text-align: center;\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n}\n.form-group {\n  margin-top: 10px;\n}\nlabel {\n  font-size: 1.3em;\n  line-height: 1em;\n  font-weight: normal;\n}\n.form-control {\n  font-size: 1.3em;\n  color: #080808;\n}\ntextarea.form-control {\n  height: 135px;\n  /* margin-top: px;*/\n}\n.invalid-feedback {\n  color: red;\n  float: left;\n}\n.submit {\n  font-size: 1.1em;\n  float: right;\n  width: 150px;\n  background-color: transparent;\n  color: #fff;\n}\n.btn {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.btn-secondary {\n  font-size: 1.1em;\n  float: right;\n  width: 150px;\n  background-color: transparent;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb250YWN0L0M6XFxVc2Vyc1xcVVNFUlxcY3ZtXFxjdm1fZnJvbnRlbmQvc3JjXFxhcHBcXGhvbWVcXGNvbnRhY3RcXGNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFBO0FBRUE7RUFDRSxtQ0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDQUY7QURFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFFQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUJBQUE7QUNBRjtBREVBO0VBQ0Usa0JBQUE7QUNDRjtBREVBO0VBRUUsK0JBQUE7RUFFQSxtQkFBQTtFQUFxQiw4QkFBQTtFQUM0QywrQkFBQTtFQUNqRSxzREFBQTtFQUF5RCxxRUFBQTtFQUN2RCxXQUFBO0FDRUo7QURBQTtFQUNFLGlCQUFBO0FDR0Y7QUREQTtFQUNFLFVBQUE7QUNJRjtBRERBO0VBQ0UsK0JBQUE7QUNJRjtBRERBO0VBQ0UsWUFBQTtFQUNBLFNBQUE7QUNJRjtBREZBO0VBQ0UsWUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQUEsMkJBQUE7RUFBQSxzQkFBQTtBQ0tGO0FESEE7RUFDRSxnQkFBQTtBQ01GO0FESkE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNPRjtBRExBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FDUUY7QUROQTtFQUNJLGFBQUE7RUFDRCxtQkFBQTtBQ1NIO0FEUEE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQ1VGO0FEUEE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0FDVUY7QURQQTtFQUNFLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtBQ1VGO0FEUkE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFFQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0FDVUYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qQ29udGFjdCBzZWN0aW9tKi9cclxuXHJcbi5jb250ZW50LWhlYWRlcntcclxuICBmb250LWZhbWlseTogJ09sZW8gU2NyaXB0JywgY3Vyc2l2ZTtcclxuICBjb2xvcjojZmNjNTAwO1xyXG4gIGZvbnQtc2l6ZTogNDVweDtcclxufVxyXG4jbG9hZGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgXHJcbiAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlci10b3A6IDE2cHggc29saWQgIzM0OThkYjtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICBtYXJnaW4tdG9wOiAyMDBweDtcclxuICB9XHJcbi5zZWN0aW9uLWNvbnRlbnR7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuXHJcbn1cclxuLmNvbnRhaW5lci1mbHVpZHtcclxuICAgIFxyXG4gIGZvbnQtZmFtaWx5OiAnVGVrbycsIHNhbnMtc2VyaWY7XHJcbiBcclxuICBiYWNrZ3JvdW5kOiAjM2E2MTg2OyAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzNhNjE4NiAsICM4OTI1M2UpOyAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjM2E2MTg2ICwgIzg5MjUzZSk7IC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cclxuICAgIGNvbG9yIDogI2ZmZjsgICAgXHJcbn1cclxuLmNvbnRhY3Qtc2VjdGlvbntcclxuICBwYWRkaW5nLXRvcDogNDBweDtcclxufVxyXG4uY29udGFjdC1zZWN0aW9uIC5jb2wtbWQtNntcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4uZm9ybS1saW5le1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNCMjk5OTk7XHJcbn1cclxuXHJcbmJvZHl7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4jY29udGFjdHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xyXG59XHJcbi5mb3JtLWdyb3Vwe1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxubGFiZWx7XHJcbiAgZm9udC1zaXplOiAxLjNlbTtcclxuICBsaW5lLWhlaWdodDogMWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuLmZvcm0tY29udHJvbHtcclxuICBmb250LXNpemU6IDEuM2VtO1xyXG4gIGNvbG9yOiAjMDgwODA4O1xyXG59XHJcbnRleHRhcmVhLmZvcm0tY29udHJvbCB7XHJcbiAgICBoZWlnaHQ6IDEzNXB4O1xyXG4gICAvKiBtYXJnaW4tdG9wOiBweDsqL1xyXG59XHJcbi5pbnZhbGlkLWZlZWRiYWNre1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5zdWJtaXR7XHJcbiAgZm9udC1zaXplOiAxLjFlbTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG5cclxufVxyXG4uYnRue1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxufVxyXG4uYnRuLXNlY29uZGFyeSB7XHJcbiAgZm9udC1zaXplOiAxLjFlbTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgXHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbiIsIi8qQ29udGFjdCBzZWN0aW9tKi9cbi5jb250ZW50LWhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiBcIk9sZW8gU2NyaXB0XCIsIGN1cnNpdmU7XG4gIGNvbG9yOiAjZmNjNTAwO1xuICBmb250LXNpemU6IDQ1cHg7XG59XG5cbiNsb2FkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjMzQ5OGRiO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG4gIG1hcmdpbi10b3A6IDIwMHB4O1xufVxuXG4uc2VjdGlvbi1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGFpbmVyLWZsdWlkIHtcbiAgZm9udC1mYW1pbHk6IFwiVGVrb1wiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kOiAjM2E2MTg2O1xuICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMzYTYxODYsICM4OTI1M2UpO1xuICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzNhNjE4NiwgIzg5MjUzZSk7XG4gIC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cbiAgY29sb3I6ICNmZmY7XG59XG5cbi5jb250YWN0LXNlY3Rpb24ge1xuICBwYWRkaW5nLXRvcDogNDBweDtcbn1cblxuLmNvbnRhY3Qtc2VjdGlvbiAuY29sLW1kLTYge1xuICB3aWR0aDogNTAlO1xufVxuXG4uZm9ybS1saW5lIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0IyOTk5OTtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFjdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxubGFiZWwge1xuICBmb250LXNpemU6IDEuM2VtO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgY29sb3I6ICMwODA4MDg7XG59XG5cbnRleHRhcmVhLmZvcm0tY29udHJvbCB7XG4gIGhlaWdodDogMTM1cHg7XG4gIC8qIG1hcmdpbi10b3A6IHB4OyovXG59XG5cbi5pbnZhbGlkLWZlZWRiYWNrIHtcbiAgY29sb3I6IHJlZDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5zdWJtaXQge1xuICBmb250LXNpemU6IDEuMWVtO1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiAxNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYnRuIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG4uYnRuLXNlY29uZGFyeSB7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDE1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNmZmY7XG59Il19 */");

/***/ }),

/***/ "./src/app/home/contact/contact.component.ts":
/*!***************************************************!*\
  !*** ./src/app/home/contact/contact.component.ts ***!
  \***************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/contact.service */ "./src/app/services/contact.service.ts");
/* harmony import */ var _models_contact_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/contact.model */ "./src/app/models/contact.model.ts");
/* harmony import */ var _helpers_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_helpers/alert.service */ "./src/app/_helpers/alert.service.ts");







let ContactComponent = class ContactComponent {
    constructor(formBuilder, router, cont, alertService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.cont = cont;
        this.alertService = alertService;
        this.loading = false;
        this.fileUploaded = false;
        this.submitted = false;
    }
    ngOnInit() {
        this.contactform = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            firstname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            image: [null],
        });
    }
    get f() { return this.contactform.controls; }
    onSubmit() {
        this.loading = true;
        this.submitted = true;
        if (this.contactform.invalid) {
            return (this.loading = false);
        }
        const contact = new _models_contact_model__WEBPACK_IMPORTED_MODULE_5__["Contact"]();
        contact.email = this.contactform.get('email').value;
        contact.mobile = this.contactform.get('mobile').value;
        contact.firstname = this.contactform.get('firstname').value;
        contact.lastname = this.contactform.get('lastname').value;
        contact.description = this.contactform.get('description').value;
        contact.ficheUrl = '';
        if (this.contactform.get('image').value == null) {
            return (this.cont.createwithoutimage(contact).then((data) => {
                this.contactform.reset();
                this.loading = false;
                this.alertService.success('Votre requête a été envoyé avec succès!');
                window.scrollTo(0, 0);
            }, (error) => {
                this.loading = false;
                this.alertService.error(error.error.error);
                window.scrollTo(0, 0);
            }));
        }
        this.cont.create(contact, this.contactform.get('image').value).then((data) => {
            this.contactform.reset();
            this.loading = false;
            this.alertService.success('Votre requête a été envoyé avec succès!');
            window.scrollTo(0, 0);
        }, (error) => {
            this.loading = false;
            this.alertService.error(error.error.error);
            window.scrollTo(0, 0);
        });
    }
    onImagePick(event) {
        const file = event.target.files[0];
        this.contactform.get('image').patchValue(file);
        this.contactform.get('image').updateValueAndValidity();
        const reader = new FileReader();
        reader.onload = () => {
            if (this.contactform.get('image').valid) {
                this.imagePreview = reader.result;
                this.fileUploaded = true;
            }
            else {
                this.imagePreview = null;
            }
        };
        reader.readAsDataURL(file);
    }
    onReset() {
        this.submitted = false;
        this.contactform.reset();
    }
};
ContactComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_contact_service__WEBPACK_IMPORTED_MODULE_4__["ContactService"] },
    { type: _helpers_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] }
];
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.scss */ "./src/app/home/contact/contact.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_contact_service__WEBPACK_IMPORTED_MODULE_4__["ContactService"],
        _helpers_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]])
], ContactComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2 {\n  text-align: center;\n  margin: 0;\n}\n\n#contactid {\n  width: 100%;\n}\n\n.w3-button:hover {\n  color: #000 !important;\n  background-color: #ccc !important;\n}\n\n.w3-btn, .w3-button {\n  border: none;\n  display: inline-block;\n  padding: 8px 16px;\n  vertical-align: middle;\n  overflow: hidden;\n  text-decoration: none;\n  color: inherit;\n  background-color: inherit;\n  text-align: center;\n  cursor: pointer;\n  white-space: nowrap;\n}\n\n.w3-btn:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.w3-btn, .w3-button {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.w3-disabled, .w3-btn:disabled, .w3-button:disabled {\n  cursor: not-allowed;\n  opacity: 0.3;\n}\n\n.w3-disabled *, :disabled * {\n  pointer-events: none;\n}\n\n.w3-btn.w3-disabled:hover, .w3-btn:disabled:hover {\n  box-shadow: none;\n}\n\n.w3-button:first-child, .w3-dropdown-click:hover > .w3-button:first-child {\n  background-color: #ccc;\n  color: #000;\n}\n\n.w3-xlarge {\n  font-size: 24px !important;\n}\n\n.w3-margin-top {\n  margin-top: 16px !important;\n}\n\n.w3-circle {\n  border-radius: 50%;\n}\n\n.w3-center {\n  text-align: center !important;\n}\n\n.w3-center .w3-bar {\n  display: inline-block;\n  width: auto;\n}\n\n.w3-modal {\n  z-index: 3;\n  display: none;\n  padding-top: 100px;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.w3-modal-content {\n  margin: auto;\n  background-color: #fff;\n  position: relative;\n  padding: 0;\n  outline: 0;\n  width: 600px;\n}\n\n.w3-button:hover {\n  color: #000 !important;\n  background-color: #ccc !important;\n}\n\n.w3-modal {\n  display: none;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: black;\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4);\n  /* Black w/ opacity */\n}\n\n.w3-button {\n  width: 100%;\n}\n\n.actualitycarousel {\n  background-position: center center;\n  background-size: cover;\n  background-image: url('carousel background.jpg');\n  margin: 0;\n  padding: 0;\n  font-size: 25px;\n}\n\n.carousel-control.right, .carousel-control.left {\n  background-image: none;\n  color: #f4511e;\n}\n\n.carousel-indicators li {\n  border-color: #f4511e;\n}\n\n.carousel-indicators li.active {\n  background-color: #f4511e;\n}\n\n.item h4 {\n  font-size: 19px;\n  line-height: 1.375em;\n  font-weight: 400;\n  font-style: italic;\n  margin: 70px 0;\n}\n\n.item span {\n  font-style: normal;\n}\n\n.container-fluid {\n  padding: 60px 50px;\n  background-position: center center;\n  background-size: cover;\n  background-image: url('service background.jpg');\n  font-size: 25px;\n}\n\n#expertisecont {\n  padding: 60px 50px;\n  background-position: center center;\n  background-size: cover;\n  background-image: url('expertiseback.jpg');\n  font-size: 25px;\n}\n\n.logo-small {\n  color: #f4511e;\n  font-size: 50px;\n}\n\n.col-sm-4 {\n  color: red;\n}\n\n.col-sm-4_2 {\n  color: red;\n  text-align: center;\n}\n\na:link {\n  text-decoration: none;\n}\n\n.container-fluid_2 {\n  padding: 60px 50px;\n  background-position: center center;\n  background-size: cover;\n  background-image: url('reference background.png');\n  font-size: 25px;\n}\n\n.w3-container, .w3-panel {\n  padding: 0.01em 16px;\n}\n\n.w3-panel {\n  margin-top: 16px;\n  margin-bottom: 16px;\n}\n\n.w3-container {\n  background-image: none;\n}\n\n.w3-card, .w3-card-2 {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n}\n\n.w3-card-4, .w3-hover-shadow:hover {\n  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n@media (max-width: 600px) {\n  .w3-modal-content {\n    margin: 0 10px;\n    width: auto !important;\n  }\n\n  .w3-modal {\n    padding-top: 30px;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .col-sm-4 {\n    text-align: center;\n    margin: 25px 0;\n  }\n}\n\n.w3-container:after, .w3-container:before, .w3-panel:after, .w3-panel:before, .w3-row:after, .w3-row:before, .w3-row-padding:after, .w3-row-padding:before,\n.w3-cell-row:before, .w3-cell-row:after, .w3-clear:after, .w3-clear:before, .w3-bar:before, .w3-bar:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.w3-display-topright {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.w3-image {\n  max-width: 100%;\n  height: auto;\n}\n\nimg {\n  vertical-align: middle;\n}\n\na {\n  color: inherit;\n}\n\n.w3-table, .w3-table-all {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n  display: table;\n}\n\n.w3-table-all {\n  border: 1px solid #ccc;\n}\n\n.w3-bordered tr, .w3-table-all tr {\n  border-bottom: 1px solid #ddd;\n}\n\n.w3-striped tbody tr:nth-child(even) {\n  background-color: #f1f1f1;\n}\n\n.w3-table-all tr:nth-child(odd) {\n  background-color: #fff;\n}\n\n.w3-table-all tr:nth-child(even) {\n  background-color: #f1f1f1;\n}\n\n.w3-hoverable tbody tr:hover, .w3-ul.w3-hoverable li:hover {\n  background-color: #ccc;\n}\n\n.w3-centered tr th, .w3-centered tr td {\n  text-align: center;\n}\n\n.w3-table td, .w3-table th, .w3-table-all td, .w3-table-all th {\n  padding: 8px 8px;\n  display: table-cell;\n  text-align: left;\n  vertical-align: top;\n}\n\n.w3-table th:first-child, .w3-table td:first-child, .w3-table-all th:first-child, .w3-table-all td:first-child {\n  padding-left: 16px;\n}\n\n/* Colors */\n\n.w3-amber, .w3-hover-amber:hover {\n  color: #000 !important;\n  background-color: #ffc107 !important;\n}\n\n.w3-aqua, .w3-hover-aqua:hover {\n  color: #000 !important;\n  background-color: #00ffff !important;\n}\n\n.w3-blue, .w3-hover-blue:hover {\n  color: #fff !important;\n  background-color: #2196F3 !important;\n}\n\n.w3-light-blue, .w3-hover-light-blue:hover {\n  color: #000 !important;\n  background-color: #87CEEB !important;\n}\n\n.w3-brown, .w3-hover-brown:hover {\n  color: #fff !important;\n  background-color: #795548 !important;\n}\n\n.w3-cyan, .w3-hover-cyan:hover {\n  color: #000 !important;\n  background-color: #00bcd4 !important;\n}\n\n.w3-blue-grey, .w3-hover-blue-grey:hover, .w3-blue-gray, .w3-hover-blue-gray:hover {\n  color: #fff !important;\n  background-color: #607d8b !important;\n}\n\n.w3-green, .w3-hover-green:hover {\n  color: #fff !important;\n  background-color: #4CAF50 !important;\n}\n\n.w3-light-green, .w3-hover-light-green:hover {\n  color: #000 !important;\n  background-color: #8bc34a !important;\n}\n\n.w3-indigo, .w3-hover-indigo:hover {\n  color: #fff !important;\n  background-color: #3f51b5 !important;\n}\n\n.w3-khaki, .w3-hover-khaki:hover {\n  color: #000 !important;\n  background-color: #f0e68c !important;\n}\n\n.w3-lime, .w3-hover-lime:hover {\n  color: #000 !important;\n  background-color: #cddc39 !important;\n}\n\n.w3-orange, .w3-hover-orange:hover {\n  color: #000 !important;\n  background-color: #ff9800 !important;\n}\n\n.w3-deep-orange, .w3-hover-deep-orange:hover {\n  color: #fff !important;\n  background-color: #ff5722 !important;\n}\n\n.w3-pink, .w3-hover-pink:hover {\n  color: #fff !important;\n  background-color: #e91e63 !important;\n}\n\n.w3-purple, .w3-hover-purple:hover {\n  color: #fff !important;\n  background-color: #9c27b0 !important;\n}\n\n.w3-deep-purple, .w3-hover-deep-purple:hover {\n  color: #fff !important;\n  background-color: #673ab7 !important;\n}\n\n.w3-red, .w3-hover-red:hover {\n  color: #fff !important;\n  background-color: #f44336 !important;\n}\n\n.w3-sand, .w3-hover-sand:hover {\n  color: #000 !important;\n  background-color: #fdf5e6 !important;\n}\n\n.w3-teal, .w3-hover-teal:hover {\n  color: #fff !important;\n  background-color: #009688 !important;\n}\n\n.w3-yellow, .w3-hover-yellow:hover {\n  color: #000 !important;\n  background-color: #ffeb3b !important;\n}\n\n.w3-white, .w3-hover-white:hover {\n  color: #000 !important;\n  background-color: #fff !important;\n}\n\n.w3-black, .w3-hover-black:hover {\n  color: #fff !important;\n  background-color: #000 !important;\n}\n\n.w3-grey, .w3-hover-grey:hover, .w3-gray, .w3-hover-gray:hover {\n  color: #000 !important;\n  background-color: #9e9e9e !important;\n}\n\n.w3-light-grey, .w3-hover-light-grey:hover, .w3-light-gray, .w3-hover-light-gray:hover {\n  color: #000 !important;\n  background-color: #f1f1f1 !important;\n}\n\n.w3-dark-grey, .w3-hover-dark-grey:hover, .w3-dark-gray, .w3-hover-dark-gray:hover {\n  color: #fff !important;\n  background-color: #616161 !important;\n}\n\n.w3-pale-red, .w3-hover-pale-red:hover {\n  color: #000 !important;\n  background-color: #ffdddd !important;\n}\n\n.w3-pale-green, .w3-hover-pale-green:hover {\n  color: #000 !important;\n  background-color: #ddffdd !important;\n}\n\n.w3-pale-yellow, .w3-hover-pale-yellow:hover {\n  color: #000 !important;\n  background-color: #ffffcc !important;\n}\n\n.w3-pale-blue, .w3-hover-pale-blue:hover {\n  color: #000 !important;\n  background-color: #ddffff !important;\n}\n\n.w3-text-amber, .w3-hover-text-amber:hover {\n  color: #ffc107 !important;\n}\n\n.w3-text-aqua, .w3-hover-text-aqua:hover {\n  color: #00ffff !important;\n}\n\n.w3-text-blue, .w3-hover-text-blue:hover {\n  color: #2196F3 !important;\n}\n\n.w3-text-light-blue, .w3-hover-text-light-blue:hover {\n  color: #87CEEB !important;\n}\n\n.w3-text-brown, .w3-hover-text-brown:hover {\n  color: #795548 !important;\n}\n\n.w3-text-cyan, .w3-hover-text-cyan:hover {\n  color: #00bcd4 !important;\n}\n\n.w3-text-blue-grey, .w3-hover-text-blue-grey:hover, .w3-text-blue-gray, .w3-hover-text-blue-gray:hover {\n  color: #607d8b !important;\n}\n\n.w3-text-green, .w3-hover-text-green:hover {\n  color: #4CAF50 !important;\n}\n\n.w3-text-light-green, .w3-hover-text-light-green:hover {\n  color: #8bc34a !important;\n}\n\n.w3-text-indigo, .w3-hover-text-indigo:hover {\n  color: #3f51b5 !important;\n}\n\n.w3-text-khaki, .w3-hover-text-khaki:hover {\n  color: #b4aa50 !important;\n}\n\n.w3-text-lime, .w3-hover-text-lime:hover {\n  color: #cddc39 !important;\n}\n\n.w3-text-orange, .w3-hover-text-orange:hover {\n  color: #ff9800 !important;\n}\n\n.w3-text-deep-orange, .w3-hover-text-deep-orange:hover {\n  color: #ff5722 !important;\n}\n\n.w3-text-pink, .w3-hover-text-pink:hover {\n  color: #e91e63 !important;\n}\n\n.w3-text-purple, .w3-hover-text-purple:hover {\n  color: #9c27b0 !important;\n}\n\n.w3-text-deep-purple, .w3-hover-text-deep-purple:hover {\n  color: #673ab7 !important;\n}\n\n.w3-text-red, .w3-hover-text-red:hover {\n  color: #f44336 !important;\n}\n\n.w3-text-sand, .w3-hover-text-sand:hover {\n  color: #fdf5e6 !important;\n}\n\n.w3-text-teal, .w3-hover-text-teal:hover {\n  color: #009688 !important;\n}\n\n.w3-text-yellow, .w3-hover-text-yellow:hover {\n  color: #d2be0e !important;\n}\n\n.w3-text-white, .w3-hover-text-white:hover {\n  color: #fff !important;\n}\n\n.w3-text-black, .w3-hover-text-black:hover {\n  color: #000 !important;\n}\n\n.w3-text-grey, .w3-hover-text-grey:hover, .w3-text-gray, .w3-hover-text-gray:hover {\n  color: #757575 !important;\n}\n\n.w3-text-light-grey, .w3-hover-text-light-grey:hover, .w3-text-light-gray, .w3-hover-text-light-gray:hover {\n  color: #f1f1f1 !important;\n}\n\n.w3-text-dark-grey, .w3-hover-text-dark-grey:hover, .w3-text-dark-gray, .w3-hover-text-dark-gray:hover {\n  color: #3a3a3a !important;\n}\n\n.w3-border-amber, .w3-hover-border-amber:hover {\n  border-color: #ffc107 !important;\n}\n\n.w3-border-aqua, .w3-hover-border-aqua:hover {\n  border-color: #00ffff !important;\n}\n\n.w3-border-blue, .w3-hover-border-blue:hover {\n  border-color: #2196F3 !important;\n}\n\n.w3-border-light-blue, .w3-hover-border-light-blue:hover {\n  border-color: #87CEEB !important;\n}\n\n.w3-border-brown, .w3-hover-border-brown:hover {\n  border-color: #795548 !important;\n}\n\n.w3-border-cyan, .w3-hover-border-cyan:hover {\n  border-color: #00bcd4 !important;\n}\n\n.w3-border-blue-grey, .w3-hover-border-blue-grey:hover, .w3-border-blue-gray, .w3-hover-border-blue-gray:hover {\n  border-color: #607d8b !important;\n}\n\n.w3-border-green, .w3-hover-border-green:hover {\n  border-color: #4CAF50 !important;\n}\n\n.w3-border-light-green, .w3-hover-border-light-green:hover {\n  border-color: #8bc34a !important;\n}\n\n.w3-border-indigo, .w3-hover-border-indigo:hover {\n  border-color: #3f51b5 !important;\n}\n\n.w3-border-khaki, .w3-hover-border-khaki:hover {\n  border-color: #f0e68c !important;\n}\n\n.w3-border-lime, .w3-hover-border-lime:hover {\n  border-color: #cddc39 !important;\n}\n\n.w3-border-orange, .w3-hover-border-orange:hover {\n  border-color: #ff9800 !important;\n}\n\n.w3-border-deep-orange, .w3-hover-border-deep-orange:hover {\n  border-color: #ff5722 !important;\n}\n\n.w3-border-pink, .w3-hover-border-pink:hover {\n  border-color: #e91e63 !important;\n}\n\n.w3-border-purple, .w3-hover-border-purple:hover {\n  border-color: #9c27b0 !important;\n}\n\n.w3-border-deep-purple, .w3-hover-border-deep-purple:hover {\n  border-color: #673ab7 !important;\n}\n\n.w3-border-red, .w3-hover-border-red:hover {\n  border-color: #f44336 !important;\n}\n\n.w3-border-sand, .w3-hover-border-sand:hover {\n  border-color: #fdf5e6 !important;\n}\n\n.w3-border-teal, .w3-hover-border-teal:hover {\n  border-color: #009688 !important;\n}\n\n.w3-border-yellow, .w3-hover-border-yellow:hover {\n  border-color: #ffeb3b !important;\n}\n\n.w3-border-white, .w3-hover-border-white:hover {\n  border-color: #fff !important;\n}\n\n.w3-border-black, .w3-hover-border-black:hover {\n  border-color: #000 !important;\n}\n\n.w3-border-grey, .w3-hover-border-grey:hover, .w3-border-gray, .w3-hover-border-gray:hover {\n  border-color: #9e9e9e !important;\n}\n\n.w3-border-light-grey, .w3-hover-border-light-grey:hover, .w3-border-light-gray, .w3-hover-border-light-gray:hover {\n  border-color: #f1f1f1 !important;\n}\n\n.w3-border-dark-grey, .w3-hover-border-dark-grey:hover, .w3-border-dark-gray, .w3-hover-border-dark-gray:hover {\n  border-color: #616161 !important;\n}\n\n.w3-border-pale-red, .w3-hover-border-pale-red:hover {\n  border-color: #ffe7e7 !important;\n}\n\n.w3-border-pale-green, .w3-hover-border-pale-green:hover {\n  border-color: #e7ffe7 !important;\n}\n\n.w3-border-pale-yellow, .w3-hover-border-pale-yellow:hover {\n  border-color: #ffffcc !important;\n}\n\n.w3-border-pale-blue, .w3-hover-border-pale-blue:hover {\n  border-color: #e7ffff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXFVTRVJcXGN2bVxcY3ZtX2Zyb250ZW5kL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7QUNDSjs7QURDRTtFQUNFLFdBQUE7QUNFSjs7QURBRTtFQUFpQixzQkFBQTtFQUFxQixpQ0FBQTtBQ0t4Qzs7QURKRTtFQUFtQixZQUFBO0VBQVkscUJBQUE7RUFBcUIsaUJBQUE7RUFBaUIsc0JBQUE7RUFBc0IsZ0JBQUE7RUFBZ0IscUJBQUE7RUFBcUIsY0FBQTtFQUFjLHlCQUFBO0VBQXlCLGtCQUFBO0VBQWtCLGVBQUE7RUFBZSxtQkFBQTtBQ2tCMU07O0FEakJFO0VBQWMsNkVBQUE7QUNxQmhCOztBRHBCRTtFQUFtQiwyQkFBQTtFQUEyQix5QkFBQTtFQUFpRCxzQkFBQTtFQUFzQixxQkFBQTtFQUFxQixpQkFBQTtBQzZCNUk7O0FENUJFO0VBQWtELG1CQUFBO0VBQW1CLFlBQUE7QUNpQ3ZFOztBRGpDbUY7RUFBMkIsb0JBQUE7QUNxQzlHOztBRHBDRTtFQUFpRCxnQkFBQTtBQ3dDbkQ7O0FEdkNFO0VBQXlFLHNCQUFBO0VBQXNCLFdBQUE7QUM0Q2pHOztBRDNDRTtFQUFXLDBCQUFBO0FDK0NiOztBRDdDRTtFQUFlLDJCQUFBO0FDaURqQjs7QURoREU7RUFBVyxrQkFBQTtBQ29EYjs7QURuREU7RUFBVyw2QkFBQTtBQ3VEYjs7QUR0REU7RUFBbUIscUJBQUE7RUFBcUIsV0FBQTtBQzJEMUM7O0FEMURFO0VBQVUsVUFBQTtFQUFVLGFBQUE7RUFBYSxrQkFBQTtFQUFrQixlQUFBO0VBQWUsT0FBQTtFQUFPLE1BQUE7RUFBTSxXQUFBO0VBQVcsWUFBQTtFQUFZLGNBQUE7RUFBYyx1QkFBQTtFQUE0QixvQ0FBQTtBQ3dFbEo7O0FEdkVBO0VBQWtCLFlBQUE7RUFBWSxzQkFBQTtFQUFzQixrQkFBQTtFQUFrQixVQUFBO0VBQVUsVUFBQTtFQUFVLFlBQUE7QUNnRjFGOztBRC9FQTtFQUFpQixzQkFBQTtFQUFxQixpQ0FBQTtBQ29GdEM7O0FEbkZBO0VBR0ksYUFBQTtFQUFlLHNCQUFBO0VBQ2YsZUFBQTtFQUFpQixrQkFBQTtFQUNqQixVQUFBO0VBQVksZUFBQTtFQUNaLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUFhLGVBQUE7RUFDYixZQUFBO0VBQWMsZ0JBQUE7RUFDZCxjQUFBO0VBQWdCLDRCQUFBO0VBQ2hCLHVCQUFBO0VBQThCLG1CQUFBO0VBQzlCLG9DQUFBO0VBQW1DLHFCQUFBO0FDNEZ2Qzs7QUQxRkU7RUFDRSxXQUFBO0FDNkZKOztBRDNGRTtFQUNFLGtDQUFBO0VBQW9DLHNCQUFBO0VBQ25DLGdEQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDK0ZMOztBRDNGRTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtBQzhGSjs7QUQ1Rkc7RUFDRSxxQkFBQTtBQytGTDs7QUQ3Rkc7RUFDRSx5QkFBQTtBQ2dHTDs7QUQ5Rkc7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ2lHTDs7QUQvRkc7RUFDRSxrQkFBQTtBQ2tHTDs7QUQvRkc7RUFDQyxrQkFBQTtFQUNBLGtDQUFBO0VBQW9DLHNCQUFBO0VBQ25DLCtDQUFBO0VBRUEsZUFBQTtBQ2tHTDs7QURoR0c7RUFDQyxrQkFBQTtFQUNBLGtDQUFBO0VBQW9DLHNCQUFBO0VBQ25DLDBDQUFBO0VBRUEsZUFBQTtBQ21HTDs7QURqR0c7RUFDQyxjQUFBO0VBQ0EsZUFBQTtBQ29HSjs7QURsR0c7RUFDRSxVQUFBO0FDcUdMOztBRG5HRztFQUNDLFVBQUE7RUFDQSxrQkFBQTtBQ3NHSjs7QURwR0U7RUFDRSxxQkFBQTtBQ3VHSjs7QURyR0U7RUFDRSxrQkFBQTtFQUNBLGtDQUFBO0VBQW9DLHNCQUFBO0VBQ25DLGlEQUFBO0VBRUEsZUFBQTtBQ3dHTDs7QUR0R0c7RUFBd0Isb0JBQUE7QUMwRzNCOztBRDFHK0M7RUFBVSxnQkFBQTtFQUFnQixtQkFBQTtBQytHekU7O0FEOUdHO0VBQ0Usc0JBQUE7QUNpSEw7O0FEOUdHO0VBQW9CLDZFQUFBO0FDa0h2Qjs7QURqSEE7RUFBa0MsNkVBQUE7QUNxSGxDOztBRHBIQTtFQUF5QjtJQUFrQixjQUFBO0lBQWMsc0JBQUE7RUMwSHZEOztFRDFINEU7SUFBVSxpQkFBQTtFQzhIdEY7QUFDRjs7QUQ5SEc7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsY0FBQTtFQ2dJTDtBQUNGOztBRDVIRzs7RUFDa0csV0FBQTtFQUFXLGNBQUE7RUFBYyxXQUFBO0FDaUk5SDs7QURoSUE7RUFBcUIsa0JBQUE7RUFBa0IsUUFBQTtFQUFRLE1BQUE7QUNzSS9DOztBRHJJQTtFQUFVLGVBQUE7RUFBZSxZQUFBO0FDMEl6Qjs7QUQxSXFDO0VBQUksc0JBQUE7QUM4SXpDOztBRDlJK0Q7RUFBRSxjQUFBO0FDa0pqRTs7QURqSkE7RUFBd0IseUJBQUE7RUFBeUIsaUJBQUE7RUFBaUIsV0FBQTtFQUFXLGNBQUE7QUN3SjdFOztBRHhKMkY7RUFBYyxzQkFBQTtBQzRKekc7O0FEM0pBO0VBQWlDLDZCQUFBO0FDK0pqQzs7QUQvSjhEO0VBQXFDLHlCQUFBO0FDbUtuRzs7QURsS0E7RUFBZ0Msc0JBQUE7QUNzS2hDOztBRHRLc0Q7RUFBaUMseUJBQUE7QUMwS3ZGOztBRHpLQTtFQUEwRCxzQkFBQTtBQzZLMUQ7O0FEN0tnRjtFQUFzQyxrQkFBQTtBQ2lMdEg7O0FEaExBO0VBQTRELGdCQUFBO0VBQWdCLG1CQUFBO0VBQW1CLGdCQUFBO0VBQWdCLG1CQUFBO0FDdUwvRzs7QUR0TEE7RUFBNEcsa0JBQUE7QUMwTDVHOztBRHhMRyxXQUFBOztBQUNIO0VBQWdDLHNCQUFBO0VBQXFCLG9DQUFBO0FDNkxyRDs7QUQ1TEE7RUFBOEIsc0JBQUE7RUFBcUIsb0NBQUE7QUNpTW5EOztBRGhNQTtFQUE4QixzQkFBQTtFQUFxQixvQ0FBQTtBQ3FNbkQ7O0FEcE1BO0VBQTBDLHNCQUFBO0VBQXFCLG9DQUFBO0FDeU0vRDs7QUR4TUE7RUFBZ0Msc0JBQUE7RUFBcUIsb0NBQUE7QUM2TXJEOztBRDVNQTtFQUE4QixzQkFBQTtFQUFxQixvQ0FBQTtBQ2lObkQ7O0FEaE5BO0VBQWdGLHNCQUFBO0VBQXFCLG9DQUFBO0FDcU5yRzs7QURwTkE7RUFBZ0Msc0JBQUE7RUFBcUIsb0NBQUE7QUN5TnJEOztBRHhOQTtFQUE0QyxzQkFBQTtFQUFxQixvQ0FBQTtBQzZOakU7O0FENU5BO0VBQWtDLHNCQUFBO0VBQXFCLG9DQUFBO0FDaU92RDs7QURoT0E7RUFBZ0Msc0JBQUE7RUFBcUIsb0NBQUE7QUNxT3JEOztBRHBPQTtFQUE4QixzQkFBQTtFQUFxQixvQ0FBQTtBQ3lPbkQ7O0FEeE9BO0VBQWtDLHNCQUFBO0VBQXFCLG9DQUFBO0FDNk92RDs7QUQ1T0E7RUFBNEMsc0JBQUE7RUFBcUIsb0NBQUE7QUNpUGpFOztBRGhQQTtFQUE4QixzQkFBQTtFQUFxQixvQ0FBQTtBQ3FQbkQ7O0FEcFBBO0VBQWtDLHNCQUFBO0VBQXFCLG9DQUFBO0FDeVB2RDs7QUR4UEE7RUFBNEMsc0JBQUE7RUFBcUIsb0NBQUE7QUM2UGpFOztBRDVQQTtFQUE0QixzQkFBQTtFQUFxQixvQ0FBQTtBQ2lRakQ7O0FEaFFBO0VBQThCLHNCQUFBO0VBQXFCLG9DQUFBO0FDcVFuRDs7QURwUUE7RUFBOEIsc0JBQUE7RUFBcUIsb0NBQUE7QUN5UW5EOztBRHhRQTtFQUFrQyxzQkFBQTtFQUFxQixvQ0FBQTtBQzZRdkQ7O0FENVFBO0VBQWdDLHNCQUFBO0VBQXFCLGlDQUFBO0FDaVJyRDs7QURoUkE7RUFBZ0Msc0JBQUE7RUFBcUIsaUNBQUE7QUNxUnJEOztBRHBSQTtFQUE0RCxzQkFBQTtFQUFxQixvQ0FBQTtBQ3lSakY7O0FEeFJBO0VBQW9GLHNCQUFBO0VBQXFCLG9DQUFBO0FDNlJ6Rzs7QUQ1UkE7RUFBZ0Ysc0JBQUE7RUFBcUIsb0NBQUE7QUNpU3JHOztBRGhTQTtFQUFzQyxzQkFBQTtFQUFxQixvQ0FBQTtBQ3FTM0Q7O0FEcFNBO0VBQTBDLHNCQUFBO0VBQXFCLG9DQUFBO0FDeVMvRDs7QUR4U0E7RUFBNEMsc0JBQUE7RUFBcUIsb0NBQUE7QUM2U2pFOztBRDVTQTtFQUF3QyxzQkFBQTtFQUFxQixvQ0FBQTtBQ2lUN0Q7O0FEaFRBO0VBQTBDLHlCQUFBO0FDb1QxQzs7QURuVEE7RUFBd0MseUJBQUE7QUN1VHhDOztBRHRUQTtFQUF3Qyx5QkFBQTtBQzBUeEM7O0FEelRBO0VBQW9ELHlCQUFBO0FDNlRwRDs7QUQ1VEE7RUFBMEMseUJBQUE7QUNnVTFDOztBRC9UQTtFQUF3Qyx5QkFBQTtBQ21VeEM7O0FEbFVBO0VBQW9HLHlCQUFBO0FDc1VwRzs7QURyVUE7RUFBMEMseUJBQUE7QUN5VTFDOztBRHhVQTtFQUFzRCx5QkFBQTtBQzRVdEQ7O0FEM1VBO0VBQTRDLHlCQUFBO0FDK1U1Qzs7QUQ5VUE7RUFBMEMseUJBQUE7QUNrVjFDOztBRGpWQTtFQUF3Qyx5QkFBQTtBQ3FWeEM7O0FEcFZBO0VBQTRDLHlCQUFBO0FDd1Y1Qzs7QUR2VkE7RUFBc0QseUJBQUE7QUMyVnREOztBRDFWQTtFQUF3Qyx5QkFBQTtBQzhWeEM7O0FEN1ZBO0VBQTRDLHlCQUFBO0FDaVc1Qzs7QURoV0E7RUFBc0QseUJBQUE7QUNvV3REOztBRG5XQTtFQUFzQyx5QkFBQTtBQ3VXdEM7O0FEdFdBO0VBQXdDLHlCQUFBO0FDMFd4Qzs7QUR6V0E7RUFBd0MseUJBQUE7QUM2V3hDOztBRDVXQTtFQUE0Qyx5QkFBQTtBQ2dYNUM7O0FEL1dBO0VBQTBDLHNCQUFBO0FDbVgxQzs7QURsWEE7RUFBMEMsc0JBQUE7QUNzWDFDOztBRHJYQTtFQUFnRix5QkFBQTtBQ3lYaEY7O0FEeFhBO0VBQXdHLHlCQUFBO0FDNFh4Rzs7QUQzWEE7RUFBb0cseUJBQUE7QUMrWHBHOztBRDlYQTtFQUE4QyxnQ0FBQTtBQ2tZOUM7O0FEallBO0VBQTRDLGdDQUFBO0FDcVk1Qzs7QURwWUE7RUFBNEMsZ0NBQUE7QUN3WTVDOztBRHZZQTtFQUF3RCxnQ0FBQTtBQzJZeEQ7O0FEMVlBO0VBQThDLGdDQUFBO0FDOFk5Qzs7QUQ3WUE7RUFBNEMsZ0NBQUE7QUNpWjVDOztBRGhaQTtFQUE0RyxnQ0FBQTtBQ29aNUc7O0FEblpBO0VBQThDLGdDQUFBO0FDdVo5Qzs7QUR0WkE7RUFBMEQsZ0NBQUE7QUMwWjFEOztBRHpaQTtFQUFnRCxnQ0FBQTtBQzZaaEQ7O0FENVpBO0VBQThDLGdDQUFBO0FDZ2E5Qzs7QUQvWkE7RUFBNEMsZ0NBQUE7QUNtYTVDOztBRGxhQTtFQUFnRCxnQ0FBQTtBQ3NhaEQ7O0FEcmFBO0VBQTBELGdDQUFBO0FDeWExRDs7QUR4YUE7RUFBNEMsZ0NBQUE7QUM0YTVDOztBRDNhQTtFQUFnRCxnQ0FBQTtBQythaEQ7O0FEOWFBO0VBQTBELGdDQUFBO0FDa2IxRDs7QURqYkE7RUFBMEMsZ0NBQUE7QUNxYjFDOztBRHBiQTtFQUE0QyxnQ0FBQTtBQ3diNUM7O0FEdmJBO0VBQTRDLGdDQUFBO0FDMmI1Qzs7QUQxYkE7RUFBZ0QsZ0NBQUE7QUM4YmhEOztBRDdiQTtFQUE4Qyw2QkFBQTtBQ2ljOUM7O0FEaGNBO0VBQThDLDZCQUFBO0FDb2M5Qzs7QURuY0E7RUFBd0YsZ0NBQUE7QUN1Y3hGOztBRHRjQTtFQUFnSCxnQ0FBQTtBQzBjaEg7O0FEemNBO0VBQTRHLGdDQUFBO0FDNmM1Rzs7QUQ1Y0E7RUFBb0QsZ0NBQUE7QUNnZHBEOztBRGhkbUY7RUFBd0QsZ0NBQUE7QUNvZDNJOztBRG5kQTtFQUEwRCxnQ0FBQTtBQ3VkMUQ7O0FEdmR5RjtFQUFzRCxnQ0FBQTtBQzJkL0kiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgI2NvbnRhY3RpZHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAudzMtYnV0dG9uOmhvdmVye2NvbG9yOiMwMDAhaW1wb3J0YW50O2JhY2tncm91bmQtY29sb3I6I2NjYyFpbXBvcnRhbnR9XHJcbiAgLnczLWJ0biwudzMtYnV0dG9ue2JvcmRlcjpub25lO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3BhZGRpbmc6OHB4IDE2cHg7dmVydGljYWwtYWxpZ246bWlkZGxlO292ZXJmbG93OmhpZGRlbjt0ZXh0LWRlY29yYXRpb246bm9uZTtjb2xvcjppbmhlcml0O2JhY2tncm91bmQtY29sb3I6aW5oZXJpdDt0ZXh0LWFsaWduOmNlbnRlcjtjdXJzb3I6cG9pbnRlcjt3aGl0ZS1zcGFjZTpub3dyYXB9XHJcbiAgLnczLWJ0bjpob3Zlcntib3gtc2hhZG93OjAgOHB4IDE2cHggMCByZ2JhKDAsMCwwLDAuMiksMCA2cHggMjBweCAwIHJnYmEoMCwwLDAsMC4xOSl9XHJcbiAgLnczLWJ0biwudzMtYnV0dG9uey13ZWJraXQtdG91Y2gtY2FsbG91dDpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTsta2h0bWwtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX0gICBcclxuICAudzMtZGlzYWJsZWQsLnczLWJ0bjpkaXNhYmxlZCwudzMtYnV0dG9uOmRpc2FibGVke2N1cnNvcjpub3QtYWxsb3dlZDtvcGFjaXR5OjAuM30udzMtZGlzYWJsZWQgKiw6ZGlzYWJsZWQgKntwb2ludGVyLWV2ZW50czpub25lfVxyXG4gIC53My1idG4udzMtZGlzYWJsZWQ6aG92ZXIsLnczLWJ0bjpkaXNhYmxlZDpob3Zlcntib3gtc2hhZG93Om5vbmV9XHJcbiAgLnczLWJ1dHRvbjpmaXJzdC1jaGlsZCwudzMtZHJvcGRvd24tY2xpY2s6aG92ZXIgPiAudzMtYnV0dG9uOmZpcnN0LWNoaWxke2JhY2tncm91bmQtY29sb3I6I2NjYztjb2xvcjojMDAwfVxyXG4gIC53My14bGFyZ2V7Zm9udC1zaXplOjI0cHghaW1wb3J0YW50fVxyXG5cclxuICAudzMtbWFyZ2luLXRvcHttYXJnaW4tdG9wOjE2cHghaW1wb3J0YW50fVxyXG4gIC53My1jaXJjbGV7Ym9yZGVyLXJhZGl1czo1MCV9XHJcbiAgLnczLWNlbnRlcnt0ZXh0LWFsaWduOmNlbnRlciFpbXBvcnRhbnR9XHJcbiAgLnczLWNlbnRlciAudzMtYmFye2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOmF1dG99XHJcbiAgLnczLW1vZGFse3otaW5kZXg6MztkaXNwbGF5Om5vbmU7cGFkZGluZy10b3A6MTAwcHg7cG9zaXRpb246Zml4ZWQ7bGVmdDowO3RvcDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7b3ZlcmZsb3c6YXV0bztiYWNrZ3JvdW5kLWNvbG9yOnJnYigwLDAsMCk7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLDAuNCl9XHJcbi53My1tb2RhbC1jb250ZW50e21hcmdpbjphdXRvO2JhY2tncm91bmQtY29sb3I6I2ZmZjtwb3NpdGlvbjpyZWxhdGl2ZTtwYWRkaW5nOjA7b3V0bGluZTowO3dpZHRoOjYwMHB4fVxyXG4udzMtYnV0dG9uOmhvdmVye2NvbG9yOiMwMDAhaW1wb3J0YW50O2JhY2tncm91bmQtY29sb3I6I2NjYyFpbXBvcnRhbnR9ICBcclxuLnczLW1vZGFse1xyXG4gICAgXHJcbiAgXHJcbiAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xyXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXHJcbiAgICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cclxuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cclxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xyXG4gIH1cclxuICAudzMtYnV0dG9ue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5hY3R1YWxpdHljYXJvdXNlbCB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyOyBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcclxuICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9jYXJvdXNlbFxcIGJhY2tncm91bmQuanBnJyk7XHJcbiAgICAgbWFyZ2luOiAwO1xyXG4gICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgIFxyXG4gICBcclxuICAgfVxyXG4gIC5jYXJvdXNlbC1jb250cm9sLnJpZ2h0LCAuY2Fyb3VzZWwtY29udHJvbC5sZWZ0IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICBjb2xvcjogI2Y0NTExZTtcclxuICAgfVxyXG4gICAuY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaSB7XHJcbiAgICAgYm9yZGVyLWNvbG9yOiAjZjQ1MTFlO1xyXG4gICB9XHJcbiAgIC5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpLmFjdGl2ZSB7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NTExZTtcclxuICAgfVxyXG4gICAuaXRlbSBoNCB7XHJcbiAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgIGxpbmUtaGVpZ2h0OiAxLjM3NWVtO1xyXG4gICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgIG1hcmdpbjogNzBweCAwO1xyXG4gICB9XHJcbiAgIC5pdGVtIHNwYW4ge1xyXG4gICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgfVxyXG4gICBcclxuICAgLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICBwYWRkaW5nOiA2MHB4IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyOyBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcclxuICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9zZXJ2aWNlXFwgYmFja2dyb3VuZC5qcGcnKTtcclxuICAgICBcclxuICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgIH1cclxuICAgI2V4cGVydGlzZWNvbnR7XHJcbiAgICBwYWRkaW5nOiA2MHB4IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyOyBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcclxuICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9leHBlcnRpc2ViYWNrLmpwZycpO1xyXG4gICAgIFxyXG4gICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgfVxyXG4gICAubG9nby1zbWFsbCB7XHJcbiAgICBjb2xvcjogI2Y0NTExZTtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgfVxyXG4gICAuY29sLXNtLTR7XHJcbiAgICAgY29sb3I6IHJlZDtcclxuICAgfVxyXG4gICAuY29sLXNtLTRfMntcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIGE6bGlua3tcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgLmNvbnRhaW5lci1mbHVpZF8yIHtcclxuICAgIHBhZGRpbmc6IDYwcHggNTBweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7IGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxyXG4gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL3JlZmVyZW5jZVxcIGJhY2tncm91bmQucG5nJyk7XHJcbiAgICAgXHJcbiAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICB9XHJcbiAgIC53My1jb250YWluZXIsLnczLXBhbmVse3BhZGRpbmc6MC4wMWVtIDE2cHh9LnczLXBhbmVse21hcmdpbi10b3A6MTZweDttYXJnaW4tYm90dG9tOjE2cHh9XHJcbiAgIC53My1jb250YWluZXJ7XHJcbiAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgIFxyXG4gICB9XHJcbiAgIC53My1jYXJkLC53My1jYXJkLTJ7Ym94LXNoYWRvdzowIDJweCA1cHggMCByZ2JhKDAsMCwwLDAuMTYpLDAgMnB4IDEwcHggMCByZ2JhKDAsMCwwLDAuMTIpfVxyXG4udzMtY2FyZC00LC53My1ob3Zlci1zaGFkb3c6aG92ZXJ7Ym94LXNoYWRvdzowIDRweCAxMHB4IDAgcmdiYSgwLDAsMCwwLjIpLDAgNHB4IDIwcHggMCByZ2JhKDAsMCwwLDAuMTkpfVxyXG5AbWVkaWEgKG1heC13aWR0aDo2MDBweCl7LnczLW1vZGFsLWNvbnRlbnR7bWFyZ2luOjAgMTBweDt3aWR0aDphdXRvIWltcG9ydGFudH0udzMtbW9kYWx7cGFkZGluZy10b3A6MzBweH19XHJcbiAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgLmNvbC1zbS00IHtcclxuICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgIG1hcmdpbjogMjVweCAwO1xyXG4gICAgIH1cclxuICAgICBcclxuICAgfVxyXG4gICBcclxuICAgLnczLWNvbnRhaW5lcjphZnRlciwudzMtY29udGFpbmVyOmJlZm9yZSwudzMtcGFuZWw6YWZ0ZXIsLnczLXBhbmVsOmJlZm9yZSwudzMtcm93OmFmdGVyLC53My1yb3c6YmVmb3JlLC53My1yb3ctcGFkZGluZzphZnRlciwudzMtcm93LXBhZGRpbmc6YmVmb3JlLFxyXG4udzMtY2VsbC1yb3c6YmVmb3JlLC53My1jZWxsLXJvdzphZnRlciwudzMtY2xlYXI6YWZ0ZXIsLnczLWNsZWFyOmJlZm9yZSwudzMtYmFyOmJlZm9yZSwudzMtYmFyOmFmdGVye2NvbnRlbnQ6XCJcIjtkaXNwbGF5OnRhYmxlO2NsZWFyOmJvdGh9XHJcbi53My1kaXNwbGF5LXRvcHJpZ2h0e3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjA7dG9wOjB9XHJcbi53My1pbWFnZXttYXgtd2lkdGg6MTAwJTtoZWlnaHQ6YXV0b31pbWd7dmVydGljYWwtYWxpZ246bWlkZGxlfWF7Y29sb3I6aW5oZXJpdH1cclxuLnczLXRhYmxlLC53My10YWJsZS1hbGx7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO2JvcmRlci1zcGFjaW5nOjA7d2lkdGg6MTAwJTtkaXNwbGF5OnRhYmxlfS53My10YWJsZS1hbGx7Ym9yZGVyOjFweCBzb2xpZCAjY2NjfVxyXG4udzMtYm9yZGVyZWQgdHIsLnczLXRhYmxlLWFsbCB0cntib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZGRkfS53My1zdHJpcGVkIHRib2R5IHRyOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiNmMWYxZjF9XHJcbi53My10YWJsZS1hbGwgdHI6bnRoLWNoaWxkKG9kZCl7YmFja2dyb3VuZC1jb2xvcjojZmZmfS53My10YWJsZS1hbGwgdHI6bnRoLWNoaWxkKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6I2YxZjFmMX1cclxuLnczLWhvdmVyYWJsZSB0Ym9keSB0cjpob3ZlciwudzMtdWwudzMtaG92ZXJhYmxlIGxpOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2NjY30udzMtY2VudGVyZWQgdHIgdGgsLnczLWNlbnRlcmVkIHRyIHRke3RleHQtYWxpZ246Y2VudGVyfVxyXG4udzMtdGFibGUgdGQsLnczLXRhYmxlIHRoLC53My10YWJsZS1hbGwgdGQsLnczLXRhYmxlLWFsbCB0aHtwYWRkaW5nOjhweCA4cHg7ZGlzcGxheTp0YWJsZS1jZWxsO3RleHQtYWxpZ246bGVmdDt2ZXJ0aWNhbC1hbGlnbjp0b3B9XHJcbi53My10YWJsZSB0aDpmaXJzdC1jaGlsZCwudzMtdGFibGUgdGQ6Zmlyc3QtY2hpbGQsLnczLXRhYmxlLWFsbCB0aDpmaXJzdC1jaGlsZCwudzMtdGFibGUtYWxsIHRkOmZpcnN0LWNoaWxke3BhZGRpbmctbGVmdDoxNnB4fVxyXG5cclxuICAgLyogQ29sb3JzICovXHJcbi53My1hbWJlciwudzMtaG92ZXItYW1iZXI6aG92ZXJ7Y29sb3I6IzAwMCFpbXBvcnRhbnQ7YmFja2dyb3VuZC1jb2xvcjojZmZjMTA3IWltcG9ydGFudH1cclxuLnczLWFxdWEsLnczLWhvdmVyLWFxdWE6aG92ZXJ7Y29sb3I6IzAwMCFpbXBvcnRhbnQ7YmFja2dyb3VuZC1jb2xvcjojMDBmZmZmIWltcG9ydGFudH1cclxuLnczLWJsdWUsLnczLWhvdmVyLWJsdWU6aG92ZXJ7Y29sb3I6I2ZmZiFpbXBvcnRhbnQ7YmFja2dyb3VuZC1jb2xvcjojMjE5NkYzIWltcG9ydGFudH1cclxuLnczLWxpZ2h0LWJsdWUsLnczLWhvdmVyLWxpZ2h0LWJsdWU6aG92ZXJ7Y29sb3I6IzAwMCFpbXBvcnRhbnQ7YmFja2dyb3VuZC1jb2xvcjojODdDRUVCIWltcG9ydGFudH1cclxuLnczLWJyb3duLC53My1ob3Zlci1icm93bjpob3Zlcntjb2xvcjojZmZmIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOiM3OTU1NDghaW1wb3J0YW50fVxyXG4udzMtY3lhbiwudzMtaG92ZXItY3lhbjpob3Zlcntjb2xvcjojMDAwIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOiMwMGJjZDQhaW1wb3J0YW50fVxyXG4udzMtYmx1ZS1ncmV5LC53My1ob3Zlci1ibHVlLWdyZXk6aG92ZXIsLnczLWJsdWUtZ3JheSwudzMtaG92ZXItYmx1ZS1ncmF5OmhvdmVye2NvbG9yOiNmZmYhaW1wb3J0YW50O2JhY2tncm91bmQtY29sb3I6IzYwN2Q4YiFpbXBvcnRhbnR9XHJcbi53My1ncmVlbiwudzMtaG92ZXItZ3JlZW46aG92ZXJ7Y29sb3I6I2ZmZiFpbXBvcnRhbnQ7YmFja2dyb3VuZC1jb2xvcjojNENBRjUwIWltcG9ydGFudH1cclxuLnczLWxpZ2h0LWdyZWVuLC53My1ob3Zlci1saWdodC1ncmVlbjpob3Zlcntjb2xvcjojMDAwIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOiM4YmMzNGEhaW1wb3J0YW50fVxyXG4udzMtaW5kaWdvLC53My1ob3Zlci1pbmRpZ286aG92ZXJ7Y29sb3I6I2ZmZiFpbXBvcnRhbnQ7YmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1IWltcG9ydGFudH1cclxuLnczLWtoYWtpLC53My1ob3Zlci1raGFraTpob3Zlcntjb2xvcjojMDAwIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOiNmMGU2OGMhaW1wb3J0YW50fVxyXG4udzMtbGltZSwudzMtaG92ZXItbGltZTpob3Zlcntjb2xvcjojMDAwIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOiNjZGRjMzkhaW1wb3J0YW50fVxyXG4udzMtb3JhbmdlLC53My1ob3Zlci1vcmFuZ2U6aG92ZXJ7Y29sb3I6IzAwMCFpbXBvcnRhbnQ7YmFja2dyb3VuZC1jb2xvcjojZmY5ODAwIWltcG9ydGFudH1cclxuLnczLWRlZXAtb3JhbmdlLC53My1ob3Zlci1kZWVwLW9yYW5nZTpob3Zlcntjb2xvcjojZmZmIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOiNmZjU3MjIhaW1wb3J0YW50fVxyXG4udzMtcGluaywudzMtaG92ZXItcGluazpob3Zlcntjb2xvcjojZmZmIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOiNlOTFlNjMhaW1wb3J0YW50fVxyXG4udzMtcHVycGxlLC53My1ob3Zlci1wdXJwbGU6aG92ZXJ7Y29sb3I6I2ZmZiFpbXBvcnRhbnQ7YmFja2dyb3VuZC1jb2xvcjojOWMyN2IwIWltcG9ydGFudH1cclxuLnczLWRlZXAtcHVycGxlLC53My1ob3Zlci1kZWVwLXB1cnBsZTpob3Zlcntjb2xvcjojZmZmIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOiM2NzNhYjchaW1wb3J0YW50fVxyXG4udzMtcmVkLC53My1ob3Zlci1yZWQ6aG92ZXJ7Y29sb3I6I2ZmZiFpbXBvcnRhbnQ7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2IWltcG9ydGFudH1cclxuLnczLXNhbmQsLnczLWhvdmVyLXNhbmQ6aG92ZXJ7Y29sb3I6IzAwMCFpbXBvcnRhbnQ7YmFja2dyb3VuZC1jb2xvcjojZmRmNWU2IWltcG9ydGFudH1cclxuLnczLXRlYWwsLnczLWhvdmVyLXRlYWw6aG92ZXJ7Y29sb3I6I2ZmZiFpbXBvcnRhbnQ7YmFja2dyb3VuZC1jb2xvcjojMDA5Njg4IWltcG9ydGFudH1cclxuLnczLXllbGxvdywudzMtaG92ZXIteWVsbG93OmhvdmVye2NvbG9yOiMwMDAhaW1wb3J0YW50O2JhY2tncm91bmQtY29sb3I6I2ZmZWIzYiFpbXBvcnRhbnR9XHJcbi53My13aGl0ZSwudzMtaG92ZXItd2hpdGU6aG92ZXJ7Y29sb3I6IzAwMCFpbXBvcnRhbnQ7YmFja2dyb3VuZC1jb2xvcjojZmZmIWltcG9ydGFudH1cclxuLnczLWJsYWNrLC53My1ob3Zlci1ibGFjazpob3Zlcntjb2xvcjojZmZmIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOiMwMDAhaW1wb3J0YW50fVxyXG4udzMtZ3JleSwudzMtaG92ZXItZ3JleTpob3ZlciwudzMtZ3JheSwudzMtaG92ZXItZ3JheTpob3Zlcntjb2xvcjojMDAwIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOiM5ZTllOWUhaW1wb3J0YW50fVxyXG4udzMtbGlnaHQtZ3JleSwudzMtaG92ZXItbGlnaHQtZ3JleTpob3ZlciwudzMtbGlnaHQtZ3JheSwudzMtaG92ZXItbGlnaHQtZ3JheTpob3Zlcntjb2xvcjojMDAwIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOiNmMWYxZjEhaW1wb3J0YW50fVxyXG4udzMtZGFyay1ncmV5LC53My1ob3Zlci1kYXJrLWdyZXk6aG92ZXIsLnczLWRhcmstZ3JheSwudzMtaG92ZXItZGFyay1ncmF5OmhvdmVye2NvbG9yOiNmZmYhaW1wb3J0YW50O2JhY2tncm91bmQtY29sb3I6IzYxNjE2MSFpbXBvcnRhbnR9XHJcbi53My1wYWxlLXJlZCwudzMtaG92ZXItcGFsZS1yZWQ6aG92ZXJ7Y29sb3I6IzAwMCFpbXBvcnRhbnQ7YmFja2dyb3VuZC1jb2xvcjojZmZkZGRkIWltcG9ydGFudH1cclxuLnczLXBhbGUtZ3JlZW4sLnczLWhvdmVyLXBhbGUtZ3JlZW46aG92ZXJ7Y29sb3I6IzAwMCFpbXBvcnRhbnQ7YmFja2dyb3VuZC1jb2xvcjojZGRmZmRkIWltcG9ydGFudH1cclxuLnczLXBhbGUteWVsbG93LC53My1ob3Zlci1wYWxlLXllbGxvdzpob3Zlcntjb2xvcjojMDAwIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmY2MhaW1wb3J0YW50fVxyXG4udzMtcGFsZS1ibHVlLC53My1ob3Zlci1wYWxlLWJsdWU6aG92ZXJ7Y29sb3I6IzAwMCFpbXBvcnRhbnQ7YmFja2dyb3VuZC1jb2xvcjojZGRmZmZmIWltcG9ydGFudH1cclxuLnczLXRleHQtYW1iZXIsLnczLWhvdmVyLXRleHQtYW1iZXI6aG92ZXJ7Y29sb3I6I2ZmYzEwNyFpbXBvcnRhbnR9XHJcbi53My10ZXh0LWFxdWEsLnczLWhvdmVyLXRleHQtYXF1YTpob3Zlcntjb2xvcjojMDBmZmZmIWltcG9ydGFudH1cclxuLnczLXRleHQtYmx1ZSwudzMtaG92ZXItdGV4dC1ibHVlOmhvdmVye2NvbG9yOiMyMTk2RjMhaW1wb3J0YW50fVxyXG4udzMtdGV4dC1saWdodC1ibHVlLC53My1ob3Zlci10ZXh0LWxpZ2h0LWJsdWU6aG92ZXJ7Y29sb3I6Izg3Q0VFQiFpbXBvcnRhbnR9XHJcbi53My10ZXh0LWJyb3duLC53My1ob3Zlci10ZXh0LWJyb3duOmhvdmVye2NvbG9yOiM3OTU1NDghaW1wb3J0YW50fVxyXG4udzMtdGV4dC1jeWFuLC53My1ob3Zlci10ZXh0LWN5YW46aG92ZXJ7Y29sb3I6IzAwYmNkNCFpbXBvcnRhbnR9XHJcbi53My10ZXh0LWJsdWUtZ3JleSwudzMtaG92ZXItdGV4dC1ibHVlLWdyZXk6aG92ZXIsLnczLXRleHQtYmx1ZS1ncmF5LC53My1ob3Zlci10ZXh0LWJsdWUtZ3JheTpob3Zlcntjb2xvcjojNjA3ZDhiIWltcG9ydGFudH1cclxuLnczLXRleHQtZ3JlZW4sLnczLWhvdmVyLXRleHQtZ3JlZW46aG92ZXJ7Y29sb3I6IzRDQUY1MCFpbXBvcnRhbnR9XHJcbi53My10ZXh0LWxpZ2h0LWdyZWVuLC53My1ob3Zlci10ZXh0LWxpZ2h0LWdyZWVuOmhvdmVye2NvbG9yOiM4YmMzNGEhaW1wb3J0YW50fVxyXG4udzMtdGV4dC1pbmRpZ28sLnczLWhvdmVyLXRleHQtaW5kaWdvOmhvdmVye2NvbG9yOiMzZjUxYjUhaW1wb3J0YW50fVxyXG4udzMtdGV4dC1raGFraSwudzMtaG92ZXItdGV4dC1raGFraTpob3Zlcntjb2xvcjojYjRhYTUwIWltcG9ydGFudH1cclxuLnczLXRleHQtbGltZSwudzMtaG92ZXItdGV4dC1saW1lOmhvdmVye2NvbG9yOiNjZGRjMzkhaW1wb3J0YW50fVxyXG4udzMtdGV4dC1vcmFuZ2UsLnczLWhvdmVyLXRleHQtb3JhbmdlOmhvdmVye2NvbG9yOiNmZjk4MDAhaW1wb3J0YW50fVxyXG4udzMtdGV4dC1kZWVwLW9yYW5nZSwudzMtaG92ZXItdGV4dC1kZWVwLW9yYW5nZTpob3Zlcntjb2xvcjojZmY1NzIyIWltcG9ydGFudH1cclxuLnczLXRleHQtcGluaywudzMtaG92ZXItdGV4dC1waW5rOmhvdmVye2NvbG9yOiNlOTFlNjMhaW1wb3J0YW50fVxyXG4udzMtdGV4dC1wdXJwbGUsLnczLWhvdmVyLXRleHQtcHVycGxlOmhvdmVye2NvbG9yOiM5YzI3YjAhaW1wb3J0YW50fVxyXG4udzMtdGV4dC1kZWVwLXB1cnBsZSwudzMtaG92ZXItdGV4dC1kZWVwLXB1cnBsZTpob3Zlcntjb2xvcjojNjczYWI3IWltcG9ydGFudH1cclxuLnczLXRleHQtcmVkLC53My1ob3Zlci10ZXh0LXJlZDpob3Zlcntjb2xvcjojZjQ0MzM2IWltcG9ydGFudH1cclxuLnczLXRleHQtc2FuZCwudzMtaG92ZXItdGV4dC1zYW5kOmhvdmVye2NvbG9yOiNmZGY1ZTYhaW1wb3J0YW50fVxyXG4udzMtdGV4dC10ZWFsLC53My1ob3Zlci10ZXh0LXRlYWw6aG92ZXJ7Y29sb3I6IzAwOTY4OCFpbXBvcnRhbnR9XHJcbi53My10ZXh0LXllbGxvdywudzMtaG92ZXItdGV4dC15ZWxsb3c6aG92ZXJ7Y29sb3I6I2QyYmUwZSFpbXBvcnRhbnR9XHJcbi53My10ZXh0LXdoaXRlLC53My1ob3Zlci10ZXh0LXdoaXRlOmhvdmVye2NvbG9yOiNmZmYhaW1wb3J0YW50fVxyXG4udzMtdGV4dC1ibGFjaywudzMtaG92ZXItdGV4dC1ibGFjazpob3Zlcntjb2xvcjojMDAwIWltcG9ydGFudH1cclxuLnczLXRleHQtZ3JleSwudzMtaG92ZXItdGV4dC1ncmV5OmhvdmVyLC53My10ZXh0LWdyYXksLnczLWhvdmVyLXRleHQtZ3JheTpob3Zlcntjb2xvcjojNzU3NTc1IWltcG9ydGFudH1cclxuLnczLXRleHQtbGlnaHQtZ3JleSwudzMtaG92ZXItdGV4dC1saWdodC1ncmV5OmhvdmVyLC53My10ZXh0LWxpZ2h0LWdyYXksLnczLWhvdmVyLXRleHQtbGlnaHQtZ3JheTpob3Zlcntjb2xvcjojZjFmMWYxIWltcG9ydGFudH1cclxuLnczLXRleHQtZGFyay1ncmV5LC53My1ob3Zlci10ZXh0LWRhcmstZ3JleTpob3ZlciwudzMtdGV4dC1kYXJrLWdyYXksLnczLWhvdmVyLXRleHQtZGFyay1ncmF5OmhvdmVye2NvbG9yOiMzYTNhM2EhaW1wb3J0YW50fVxyXG4udzMtYm9yZGVyLWFtYmVyLC53My1ob3Zlci1ib3JkZXItYW1iZXI6aG92ZXJ7Ym9yZGVyLWNvbG9yOiNmZmMxMDchaW1wb3J0YW50fVxyXG4udzMtYm9yZGVyLWFxdWEsLnczLWhvdmVyLWJvcmRlci1hcXVhOmhvdmVye2JvcmRlci1jb2xvcjojMDBmZmZmIWltcG9ydGFudH1cclxuLnczLWJvcmRlci1ibHVlLC53My1ob3Zlci1ib3JkZXItYmx1ZTpob3Zlcntib3JkZXItY29sb3I6IzIxOTZGMyFpbXBvcnRhbnR9XHJcbi53My1ib3JkZXItbGlnaHQtYmx1ZSwudzMtaG92ZXItYm9yZGVyLWxpZ2h0LWJsdWU6aG92ZXJ7Ym9yZGVyLWNvbG9yOiM4N0NFRUIhaW1wb3J0YW50fVxyXG4udzMtYm9yZGVyLWJyb3duLC53My1ob3Zlci1ib3JkZXItYnJvd246aG92ZXJ7Ym9yZGVyLWNvbG9yOiM3OTU1NDghaW1wb3J0YW50fVxyXG4udzMtYm9yZGVyLWN5YW4sLnczLWhvdmVyLWJvcmRlci1jeWFuOmhvdmVye2JvcmRlci1jb2xvcjojMDBiY2Q0IWltcG9ydGFudH1cclxuLnczLWJvcmRlci1ibHVlLWdyZXksLnczLWhvdmVyLWJvcmRlci1ibHVlLWdyZXk6aG92ZXIsLnczLWJvcmRlci1ibHVlLWdyYXksLnczLWhvdmVyLWJvcmRlci1ibHVlLWdyYXk6aG92ZXJ7Ym9yZGVyLWNvbG9yOiM2MDdkOGIhaW1wb3J0YW50fVxyXG4udzMtYm9yZGVyLWdyZWVuLC53My1ob3Zlci1ib3JkZXItZ3JlZW46aG92ZXJ7Ym9yZGVyLWNvbG9yOiM0Q0FGNTAhaW1wb3J0YW50fVxyXG4udzMtYm9yZGVyLWxpZ2h0LWdyZWVuLC53My1ob3Zlci1ib3JkZXItbGlnaHQtZ3JlZW46aG92ZXJ7Ym9yZGVyLWNvbG9yOiM4YmMzNGEhaW1wb3J0YW50fVxyXG4udzMtYm9yZGVyLWluZGlnbywudzMtaG92ZXItYm9yZGVyLWluZGlnbzpob3Zlcntib3JkZXItY29sb3I6IzNmNTFiNSFpbXBvcnRhbnR9XHJcbi53My1ib3JkZXIta2hha2ksLnczLWhvdmVyLWJvcmRlci1raGFraTpob3Zlcntib3JkZXItY29sb3I6I2YwZTY4YyFpbXBvcnRhbnR9XHJcbi53My1ib3JkZXItbGltZSwudzMtaG92ZXItYm9yZGVyLWxpbWU6aG92ZXJ7Ym9yZGVyLWNvbG9yOiNjZGRjMzkhaW1wb3J0YW50fVxyXG4udzMtYm9yZGVyLW9yYW5nZSwudzMtaG92ZXItYm9yZGVyLW9yYW5nZTpob3Zlcntib3JkZXItY29sb3I6I2ZmOTgwMCFpbXBvcnRhbnR9XHJcbi53My1ib3JkZXItZGVlcC1vcmFuZ2UsLnczLWhvdmVyLWJvcmRlci1kZWVwLW9yYW5nZTpob3Zlcntib3JkZXItY29sb3I6I2ZmNTcyMiFpbXBvcnRhbnR9XHJcbi53My1ib3JkZXItcGluaywudzMtaG92ZXItYm9yZGVyLXBpbms6aG92ZXJ7Ym9yZGVyLWNvbG9yOiNlOTFlNjMhaW1wb3J0YW50fVxyXG4udzMtYm9yZGVyLXB1cnBsZSwudzMtaG92ZXItYm9yZGVyLXB1cnBsZTpob3Zlcntib3JkZXItY29sb3I6IzljMjdiMCFpbXBvcnRhbnR9XHJcbi53My1ib3JkZXItZGVlcC1wdXJwbGUsLnczLWhvdmVyLWJvcmRlci1kZWVwLXB1cnBsZTpob3Zlcntib3JkZXItY29sb3I6IzY3M2FiNyFpbXBvcnRhbnR9XHJcbi53My1ib3JkZXItcmVkLC53My1ob3Zlci1ib3JkZXItcmVkOmhvdmVye2JvcmRlci1jb2xvcjojZjQ0MzM2IWltcG9ydGFudH1cclxuLnczLWJvcmRlci1zYW5kLC53My1ob3Zlci1ib3JkZXItc2FuZDpob3Zlcntib3JkZXItY29sb3I6I2ZkZjVlNiFpbXBvcnRhbnR9XHJcbi53My1ib3JkZXItdGVhbCwudzMtaG92ZXItYm9yZGVyLXRlYWw6aG92ZXJ7Ym9yZGVyLWNvbG9yOiMwMDk2ODghaW1wb3J0YW50fVxyXG4udzMtYm9yZGVyLXllbGxvdywudzMtaG92ZXItYm9yZGVyLXllbGxvdzpob3Zlcntib3JkZXItY29sb3I6I2ZmZWIzYiFpbXBvcnRhbnR9XHJcbi53My1ib3JkZXItd2hpdGUsLnczLWhvdmVyLWJvcmRlci13aGl0ZTpob3Zlcntib3JkZXItY29sb3I6I2ZmZiFpbXBvcnRhbnR9XHJcbi53My1ib3JkZXItYmxhY2ssLnczLWhvdmVyLWJvcmRlci1ibGFjazpob3Zlcntib3JkZXItY29sb3I6IzAwMCFpbXBvcnRhbnR9XHJcbi53My1ib3JkZXItZ3JleSwudzMtaG92ZXItYm9yZGVyLWdyZXk6aG92ZXIsLnczLWJvcmRlci1ncmF5LC53My1ob3Zlci1ib3JkZXItZ3JheTpob3Zlcntib3JkZXItY29sb3I6IzllOWU5ZSFpbXBvcnRhbnR9XHJcbi53My1ib3JkZXItbGlnaHQtZ3JleSwudzMtaG92ZXItYm9yZGVyLWxpZ2h0LWdyZXk6aG92ZXIsLnczLWJvcmRlci1saWdodC1ncmF5LC53My1ob3Zlci1ib3JkZXItbGlnaHQtZ3JheTpob3Zlcntib3JkZXItY29sb3I6I2YxZjFmMSFpbXBvcnRhbnR9XHJcbi53My1ib3JkZXItZGFyay1ncmV5LC53My1ob3Zlci1ib3JkZXItZGFyay1ncmV5OmhvdmVyLC53My1ib3JkZXItZGFyay1ncmF5LC53My1ob3Zlci1ib3JkZXItZGFyay1ncmF5OmhvdmVye2JvcmRlci1jb2xvcjojNjE2MTYxIWltcG9ydGFudH1cclxuLnczLWJvcmRlci1wYWxlLXJlZCwudzMtaG92ZXItYm9yZGVyLXBhbGUtcmVkOmhvdmVye2JvcmRlci1jb2xvcjojZmZlN2U3IWltcG9ydGFudH0udzMtYm9yZGVyLXBhbGUtZ3JlZW4sLnczLWhvdmVyLWJvcmRlci1wYWxlLWdyZWVuOmhvdmVye2JvcmRlci1jb2xvcjojZTdmZmU3IWltcG9ydGFudH1cclxuLnczLWJvcmRlci1wYWxlLXllbGxvdywudzMtaG92ZXItYm9yZGVyLXBhbGUteWVsbG93OmhvdmVye2JvcmRlci1jb2xvcjojZmZmZmNjIWltcG9ydGFudH0udzMtYm9yZGVyLXBhbGUtYmx1ZSwudzMtaG92ZXItYm9yZGVyLXBhbGUtYmx1ZTpob3Zlcntib3JkZXItY29sb3I6I2U3ZmZmZiFpbXBvcnRhbnR9XHJcbiIsImgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWN0aWQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnczLWJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2MgIWltcG9ydGFudDtcbn1cblxuLnczLWJ0biwgLnczLWJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi53My1idG46aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLnczLWJ0biwgLnczLWJ1dHRvbiB7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4udzMtZGlzYWJsZWQsIC53My1idG46ZGlzYWJsZWQsIC53My1idXR0b246ZGlzYWJsZWQge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICBvcGFjaXR5OiAwLjM7XG59XG5cbi53My1kaXNhYmxlZCAqLCA6ZGlzYWJsZWQgKiB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4udzMtYnRuLnczLWRpc2FibGVkOmhvdmVyLCAudzMtYnRuOmRpc2FibGVkOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLnczLWJ1dHRvbjpmaXJzdC1jaGlsZCwgLnczLWRyb3Bkb3duLWNsaWNrOmhvdmVyID4gLnczLWJ1dHRvbjpmaXJzdC1jaGlsZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4udzMteGxhcmdlIHtcbiAgZm9udC1zaXplOiAyNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi53My1tYXJnaW4tdG9wIHtcbiAgbWFyZ2luLXRvcDogMTZweCAhaW1wb3J0YW50O1xufVxuXG4udzMtY2lyY2xlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4udzMtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi53My1jZW50ZXIgLnczLWJhciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IGF1dG87XG59XG5cbi53My1tb2RhbCB7XG4gIHotaW5kZXg6IDM7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4udzMtbW9kYWwtY29udGVudCB7XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwO1xuICBvdXRsaW5lOiAwO1xuICB3aWR0aDogNjAwcHg7XG59XG5cbi53My1idXR0b246aG92ZXIge1xuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjICFpbXBvcnRhbnQ7XG59XG5cbi53My1tb2RhbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgLyogU3RheSBpbiBwbGFjZSAqL1xuICB6LWluZGV4OiAxO1xuICAvKiBTaXQgb24gdG9wICovXG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIEZ1bGwgd2lkdGggKi9cbiAgaGVpZ2h0OiAxMDAlO1xuICAvKiBGdWxsIGhlaWdodCAqL1xuICBvdmVyZmxvdzogYXV0bztcbiAgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIC8qIEZhbGxiYWNrIGNvbG9yICovXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xufVxuXG4udzMtYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hY3R1YWxpdHljYXJvdXNlbCB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9jYXJvdXNlbCBiYWNrZ3JvdW5kLmpwZ1wiKTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5jYXJvdXNlbC1jb250cm9sLnJpZ2h0LCAuY2Fyb3VzZWwtY29udHJvbC5sZWZ0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgY29sb3I6ICNmNDUxMWU7XG59XG5cbi5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpIHtcbiAgYm9yZGVyLWNvbG9yOiAjZjQ1MTFlO1xufVxuXG4uY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ1MTFlO1xufVxuXG4uaXRlbSBoNCB7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgbGluZS1oZWlnaHQ6IDEuMzc1ZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbWFyZ2luOiA3MHB4IDA7XG59XG5cbi5pdGVtIHNwYW4ge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5jb250YWluZXItZmx1aWQge1xuICBwYWRkaW5nOiA2MHB4IDUwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9zZXJ2aWNlIGJhY2tncm91bmQuanBnXCIpO1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbiNleHBlcnRpc2Vjb250IHtcbiAgcGFkZGluZzogNjBweCA1MHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvZXhwZXJ0aXNlYmFjay5qcGdcIik7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmxvZ28tc21hbGwge1xuICBjb2xvcjogI2Y0NTExZTtcbiAgZm9udC1zaXplOiA1MHB4O1xufVxuXG4uY29sLXNtLTQge1xuICBjb2xvcjogcmVkO1xufVxuXG4uY29sLXNtLTRfMiB7XG4gIGNvbG9yOiByZWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuYTpsaW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY29udGFpbmVyLWZsdWlkXzIge1xuICBwYWRkaW5nOiA2MHB4IDUwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9yZWZlcmVuY2UgYmFja2dyb3VuZC5wbmdcIik7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLnczLWNvbnRhaW5lciwgLnczLXBhbmVsIHtcbiAgcGFkZGluZzogMC4wMWVtIDE2cHg7XG59XG5cbi53My1wYW5lbCB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi53My1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xufVxuXG4udzMtY2FyZCwgLnczLWNhcmQtMiB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4udzMtY2FyZC00LCAudzMtaG92ZXItc2hhZG93OmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCA0cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA0cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAudzMtbW9kYWwtY29udGVudCB7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuXG4gIC53My1tb2RhbCB7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb2wtc20tNCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMjVweCAwO1xuICB9XG59XG4udzMtY29udGFpbmVyOmFmdGVyLCAudzMtY29udGFpbmVyOmJlZm9yZSwgLnczLXBhbmVsOmFmdGVyLCAudzMtcGFuZWw6YmVmb3JlLCAudzMtcm93OmFmdGVyLCAudzMtcm93OmJlZm9yZSwgLnczLXJvdy1wYWRkaW5nOmFmdGVyLCAudzMtcm93LXBhZGRpbmc6YmVmb3JlLFxuLnczLWNlbGwtcm93OmJlZm9yZSwgLnczLWNlbGwtcm93OmFmdGVyLCAudzMtY2xlYXI6YWZ0ZXIsIC53My1jbGVhcjpiZWZvcmUsIC53My1iYXI6YmVmb3JlLCAudzMtYmFyOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4udzMtZGlzcGxheS10b3ByaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbn1cblxuLnczLWltYWdlIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbmltZyB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbmEge1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLnczLXRhYmxlLCAudzMtdGFibGUtYWxsIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuLnczLXRhYmxlLWFsbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG5cbi53My1ib3JkZXJlZCB0ciwgLnczLXRhYmxlLWFsbCB0ciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xufVxuXG4udzMtc3RyaXBlZCB0Ym9keSB0cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xufVxuXG4udzMtdGFibGUtYWxsIHRyOm50aC1jaGlsZChvZGQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLnczLXRhYmxlLWFsbCB0cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xufVxuXG4udzMtaG92ZXJhYmxlIHRib2R5IHRyOmhvdmVyLCAudzMtdWwudzMtaG92ZXJhYmxlIGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbn1cblxuLnczLWNlbnRlcmVkIHRyIHRoLCAudzMtY2VudGVyZWQgdHIgdGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi53My10YWJsZSB0ZCwgLnczLXRhYmxlIHRoLCAudzMtdGFibGUtYWxsIHRkLCAudzMtdGFibGUtYWxsIHRoIHtcbiAgcGFkZGluZzogOHB4IDhweDtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLnczLXRhYmxlIHRoOmZpcnN0LWNoaWxkLCAudzMtdGFibGUgdGQ6Zmlyc3QtY2hpbGQsIC53My10YWJsZS1hbGwgdGg6Zmlyc3QtY2hpbGQsIC53My10YWJsZS1hbGwgdGQ6Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG59XG5cbi8qIENvbG9ycyAqL1xuLnczLWFtYmVyLCAudzMtaG92ZXItYW1iZXI6aG92ZXIge1xuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMTA3ICFpbXBvcnRhbnQ7XG59XG5cbi53My1hcXVhLCAudzMtaG92ZXItYXF1YTpob3ZlciB7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGZmZmYgIWltcG9ydGFudDtcbn1cblxuLnczLWJsdWUsIC53My1ob3Zlci1ibHVlOmhvdmVyIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMyAhaW1wb3J0YW50O1xufVxuXG4udzMtbGlnaHQtYmx1ZSwgLnczLWhvdmVyLWxpZ2h0LWJsdWU6aG92ZXIge1xuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODdDRUVCICFpbXBvcnRhbnQ7XG59XG5cbi53My1icm93biwgLnczLWhvdmVyLWJyb3duOmhvdmVyIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc5NTU0OCAhaW1wb3J0YW50O1xufVxuXG4udzMtY3lhbiwgLnczLWhvdmVyLWN5YW46aG92ZXIge1xuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiY2Q0ICFpbXBvcnRhbnQ7XG59XG5cbi53My1ibHVlLWdyZXksIC53My1ob3Zlci1ibHVlLWdyZXk6aG92ZXIsIC53My1ibHVlLWdyYXksIC53My1ob3Zlci1ibHVlLWdyYXk6aG92ZXIge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3ZDhiICFpbXBvcnRhbnQ7XG59XG5cbi53My1ncmVlbiwgLnczLWhvdmVyLWdyZWVuOmhvdmVyIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MCAhaW1wb3J0YW50O1xufVxuXG4udzMtbGlnaHQtZ3JlZW4sIC53My1ob3Zlci1saWdodC1ncmVlbjpob3ZlciB7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4YmMzNGEgIWltcG9ydGFudDtcbn1cblxuLnczLWluZGlnbywgLnczLWhvdmVyLWluZGlnbzpob3ZlciB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjUgIWltcG9ydGFudDtcbn1cblxuLnczLWtoYWtpLCAudzMtaG92ZXIta2hha2k6aG92ZXIge1xuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBlNjhjICFpbXBvcnRhbnQ7XG59XG5cbi53My1saW1lLCAudzMtaG92ZXItbGltZTpob3ZlciB7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZGRjMzkgIWltcG9ydGFudDtcbn1cblxuLnczLW9yYW5nZSwgLnczLWhvdmVyLW9yYW5nZTpob3ZlciB7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjk4MDAgIWltcG9ydGFudDtcbn1cblxuLnczLWRlZXAtb3JhbmdlLCAudzMtaG92ZXItZGVlcC1vcmFuZ2U6aG92ZXIge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1NzIyICFpbXBvcnRhbnQ7XG59XG5cbi53My1waW5rLCAudzMtaG92ZXItcGluazpob3ZlciB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOTFlNjMgIWltcG9ydGFudDtcbn1cblxuLnczLXB1cnBsZSwgLnczLWhvdmVyLXB1cnBsZTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5YzI3YjAgIWltcG9ydGFudDtcbn1cblxuLnczLWRlZXAtcHVycGxlLCAudzMtaG92ZXItZGVlcC1wdXJwbGU6aG92ZXIge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjczYWI3ICFpbXBvcnRhbnQ7XG59XG5cbi53My1yZWQsIC53My1ob3Zlci1yZWQ6aG92ZXIge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2ICFpbXBvcnRhbnQ7XG59XG5cbi53My1zYW5kLCAudzMtaG92ZXItc2FuZDpob3ZlciB7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGY1ZTYgIWltcG9ydGFudDtcbn1cblxuLnczLXRlYWwsIC53My1ob3Zlci10ZWFsOmhvdmVyIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTY4OCAhaW1wb3J0YW50O1xufVxuXG4udzMteWVsbG93LCAudzMtaG92ZXIteWVsbG93OmhvdmVyIHtcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWIzYiAhaW1wb3J0YW50O1xufVxuXG4udzMtd2hpdGUsIC53My1ob3Zlci13aGl0ZTpob3ZlciB7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLnczLWJsYWNrLCAudzMtaG92ZXItYmxhY2s6aG92ZXIge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG59XG5cbi53My1ncmV5LCAudzMtaG92ZXItZ3JleTpob3ZlciwgLnczLWdyYXksIC53My1ob3Zlci1ncmF5OmhvdmVyIHtcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzllOWU5ZSAhaW1wb3J0YW50O1xufVxuXG4udzMtbGlnaHQtZ3JleSwgLnczLWhvdmVyLWxpZ2h0LWdyZXk6aG92ZXIsIC53My1saWdodC1ncmF5LCAudzMtaG92ZXItbGlnaHQtZ3JheTpob3ZlciB7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjEgIWltcG9ydGFudDtcbn1cblxuLnczLWRhcmstZ3JleSwgLnczLWhvdmVyLWRhcmstZ3JleTpob3ZlciwgLnczLWRhcmstZ3JheSwgLnczLWhvdmVyLWRhcmstZ3JheTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MTYxNjEgIWltcG9ydGFudDtcbn1cblxuLnczLXBhbGUtcmVkLCAudzMtaG92ZXItcGFsZS1yZWQ6aG92ZXIge1xuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkZGRkICFpbXBvcnRhbnQ7XG59XG5cbi53My1wYWxlLWdyZWVuLCAudzMtaG92ZXItcGFsZS1ncmVlbjpob3ZlciB7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGZmZGQgIWltcG9ydGFudDtcbn1cblxuLnczLXBhbGUteWVsbG93LCAudzMtaG92ZXItcGFsZS15ZWxsb3c6aG92ZXIge1xuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmNjICFpbXBvcnRhbnQ7XG59XG5cbi53My1wYWxlLWJsdWUsIC53My1ob3Zlci1wYWxlLWJsdWU6aG92ZXIge1xuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRmZmZmICFpbXBvcnRhbnQ7XG59XG5cbi53My10ZXh0LWFtYmVyLCAudzMtaG92ZXItdGV4dC1hbWJlcjpob3ZlciB7XG4gIGNvbG9yOiAjZmZjMTA3ICFpbXBvcnRhbnQ7XG59XG5cbi53My10ZXh0LWFxdWEsIC53My1ob3Zlci10ZXh0LWFxdWE6aG92ZXIge1xuICBjb2xvcjogIzAwZmZmZiAhaW1wb3J0YW50O1xufVxuXG4udzMtdGV4dC1ibHVlLCAudzMtaG92ZXItdGV4dC1ibHVlOmhvdmVyIHtcbiAgY29sb3I6ICMyMTk2RjMgIWltcG9ydGFudDtcbn1cblxuLnczLXRleHQtbGlnaHQtYmx1ZSwgLnczLWhvdmVyLXRleHQtbGlnaHQtYmx1ZTpob3ZlciB7XG4gIGNvbG9yOiAjODdDRUVCICFpbXBvcnRhbnQ7XG59XG5cbi53My10ZXh0LWJyb3duLCAudzMtaG92ZXItdGV4dC1icm93bjpob3ZlciB7XG4gIGNvbG9yOiAjNzk1NTQ4ICFpbXBvcnRhbnQ7XG59XG5cbi53My10ZXh0LWN5YW4sIC53My1ob3Zlci10ZXh0LWN5YW46aG92ZXIge1xuICBjb2xvcjogIzAwYmNkNCAhaW1wb3J0YW50O1xufVxuXG4udzMtdGV4dC1ibHVlLWdyZXksIC53My1ob3Zlci10ZXh0LWJsdWUtZ3JleTpob3ZlciwgLnczLXRleHQtYmx1ZS1ncmF5LCAudzMtaG92ZXItdGV4dC1ibHVlLWdyYXk6aG92ZXIge1xuICBjb2xvcjogIzYwN2Q4YiAhaW1wb3J0YW50O1xufVxuXG4udzMtdGV4dC1ncmVlbiwgLnczLWhvdmVyLXRleHQtZ3JlZW46aG92ZXIge1xuICBjb2xvcjogIzRDQUY1MCAhaW1wb3J0YW50O1xufVxuXG4udzMtdGV4dC1saWdodC1ncmVlbiwgLnczLWhvdmVyLXRleHQtbGlnaHQtZ3JlZW46aG92ZXIge1xuICBjb2xvcjogIzhiYzM0YSAhaW1wb3J0YW50O1xufVxuXG4udzMtdGV4dC1pbmRpZ28sIC53My1ob3Zlci10ZXh0LWluZGlnbzpob3ZlciB7XG4gIGNvbG9yOiAjM2Y1MWI1ICFpbXBvcnRhbnQ7XG59XG5cbi53My10ZXh0LWtoYWtpLCAudzMtaG92ZXItdGV4dC1raGFraTpob3ZlciB7XG4gIGNvbG9yOiAjYjRhYTUwICFpbXBvcnRhbnQ7XG59XG5cbi53My10ZXh0LWxpbWUsIC53My1ob3Zlci10ZXh0LWxpbWU6aG92ZXIge1xuICBjb2xvcjogI2NkZGMzOSAhaW1wb3J0YW50O1xufVxuXG4udzMtdGV4dC1vcmFuZ2UsIC53My1ob3Zlci10ZXh0LW9yYW5nZTpob3ZlciB7XG4gIGNvbG9yOiAjZmY5ODAwICFpbXBvcnRhbnQ7XG59XG5cbi53My10ZXh0LWRlZXAtb3JhbmdlLCAudzMtaG92ZXItdGV4dC1kZWVwLW9yYW5nZTpob3ZlciB7XG4gIGNvbG9yOiAjZmY1NzIyICFpbXBvcnRhbnQ7XG59XG5cbi53My10ZXh0LXBpbmssIC53My1ob3Zlci10ZXh0LXBpbms6aG92ZXIge1xuICBjb2xvcjogI2U5MWU2MyAhaW1wb3J0YW50O1xufVxuXG4udzMtdGV4dC1wdXJwbGUsIC53My1ob3Zlci10ZXh0LXB1cnBsZTpob3ZlciB7XG4gIGNvbG9yOiAjOWMyN2IwICFpbXBvcnRhbnQ7XG59XG5cbi53My10ZXh0LWRlZXAtcHVycGxlLCAudzMtaG92ZXItdGV4dC1kZWVwLXB1cnBsZTpob3ZlciB7XG4gIGNvbG9yOiAjNjczYWI3ICFpbXBvcnRhbnQ7XG59XG5cbi53My10ZXh0LXJlZCwgLnczLWhvdmVyLXRleHQtcmVkOmhvdmVyIHtcbiAgY29sb3I6ICNmNDQzMzYgIWltcG9ydGFudDtcbn1cblxuLnczLXRleHQtc2FuZCwgLnczLWhvdmVyLXRleHQtc2FuZDpob3ZlciB7XG4gIGNvbG9yOiAjZmRmNWU2ICFpbXBvcnRhbnQ7XG59XG5cbi53My10ZXh0LXRlYWwsIC53My1ob3Zlci10ZXh0LXRlYWw6aG92ZXIge1xuICBjb2xvcjogIzAwOTY4OCAhaW1wb3J0YW50O1xufVxuXG4udzMtdGV4dC15ZWxsb3csIC53My1ob3Zlci10ZXh0LXllbGxvdzpob3ZlciB7XG4gIGNvbG9yOiAjZDJiZTBlICFpbXBvcnRhbnQ7XG59XG5cbi53My10ZXh0LXdoaXRlLCAudzMtaG92ZXItdGV4dC13aGl0ZTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi53My10ZXh0LWJsYWNrLCAudzMtaG92ZXItdGV4dC1ibGFjazpob3ZlciB7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG59XG5cbi53My10ZXh0LWdyZXksIC53My1ob3Zlci10ZXh0LWdyZXk6aG92ZXIsIC53My10ZXh0LWdyYXksIC53My1ob3Zlci10ZXh0LWdyYXk6aG92ZXIge1xuICBjb2xvcjogIzc1NzU3NSAhaW1wb3J0YW50O1xufVxuXG4udzMtdGV4dC1saWdodC1ncmV5LCAudzMtaG92ZXItdGV4dC1saWdodC1ncmV5OmhvdmVyLCAudzMtdGV4dC1saWdodC1ncmF5LCAudzMtaG92ZXItdGV4dC1saWdodC1ncmF5OmhvdmVyIHtcbiAgY29sb3I6ICNmMWYxZjEgIWltcG9ydGFudDtcbn1cblxuLnczLXRleHQtZGFyay1ncmV5LCAudzMtaG92ZXItdGV4dC1kYXJrLWdyZXk6aG92ZXIsIC53My10ZXh0LWRhcmstZ3JheSwgLnczLWhvdmVyLXRleHQtZGFyay1ncmF5OmhvdmVyIHtcbiAgY29sb3I6ICMzYTNhM2EgIWltcG9ydGFudDtcbn1cblxuLnczLWJvcmRlci1hbWJlciwgLnczLWhvdmVyLWJvcmRlci1hbWJlcjpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogI2ZmYzEwNyAhaW1wb3J0YW50O1xufVxuXG4udzMtYm9yZGVyLWFxdWEsIC53My1ob3Zlci1ib3JkZXItYXF1YTpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogIzAwZmZmZiAhaW1wb3J0YW50O1xufVxuXG4udzMtYm9yZGVyLWJsdWUsIC53My1ob3Zlci1ib3JkZXItYmx1ZTpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogIzIxOTZGMyAhaW1wb3J0YW50O1xufVxuXG4udzMtYm9yZGVyLWxpZ2h0LWJsdWUsIC53My1ob3Zlci1ib3JkZXItbGlnaHQtYmx1ZTpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogIzg3Q0VFQiAhaW1wb3J0YW50O1xufVxuXG4udzMtYm9yZGVyLWJyb3duLCAudzMtaG92ZXItYm9yZGVyLWJyb3duOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjNzk1NTQ4ICFpbXBvcnRhbnQ7XG59XG5cbi53My1ib3JkZXItY3lhbiwgLnczLWhvdmVyLWJvcmRlci1jeWFuOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjMDBiY2Q0ICFpbXBvcnRhbnQ7XG59XG5cbi53My1ib3JkZXItYmx1ZS1ncmV5LCAudzMtaG92ZXItYm9yZGVyLWJsdWUtZ3JleTpob3ZlciwgLnczLWJvcmRlci1ibHVlLWdyYXksIC53My1ob3Zlci1ib3JkZXItYmx1ZS1ncmF5OmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjNjA3ZDhiICFpbXBvcnRhbnQ7XG59XG5cbi53My1ib3JkZXItZ3JlZW4sIC53My1ob3Zlci1ib3JkZXItZ3JlZW46aG92ZXIge1xuICBib3JkZXItY29sb3I6ICM0Q0FGNTAgIWltcG9ydGFudDtcbn1cblxuLnczLWJvcmRlci1saWdodC1ncmVlbiwgLnczLWhvdmVyLWJvcmRlci1saWdodC1ncmVlbjpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogIzhiYzM0YSAhaW1wb3J0YW50O1xufVxuXG4udzMtYm9yZGVyLWluZGlnbywgLnczLWhvdmVyLWJvcmRlci1pbmRpZ286aG92ZXIge1xuICBib3JkZXItY29sb3I6ICMzZjUxYjUgIWltcG9ydGFudDtcbn1cblxuLnczLWJvcmRlci1raGFraSwgLnczLWhvdmVyLWJvcmRlci1raGFraTpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogI2YwZTY4YyAhaW1wb3J0YW50O1xufVxuXG4udzMtYm9yZGVyLWxpbWUsIC53My1ob3Zlci1ib3JkZXItbGltZTpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogI2NkZGMzOSAhaW1wb3J0YW50O1xufVxuXG4udzMtYm9yZGVyLW9yYW5nZSwgLnczLWhvdmVyLWJvcmRlci1vcmFuZ2U6aG92ZXIge1xuICBib3JkZXItY29sb3I6ICNmZjk4MDAgIWltcG9ydGFudDtcbn1cblxuLnczLWJvcmRlci1kZWVwLW9yYW5nZSwgLnczLWhvdmVyLWJvcmRlci1kZWVwLW9yYW5nZTpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogI2ZmNTcyMiAhaW1wb3J0YW50O1xufVxuXG4udzMtYm9yZGVyLXBpbmssIC53My1ob3Zlci1ib3JkZXItcGluazpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogI2U5MWU2MyAhaW1wb3J0YW50O1xufVxuXG4udzMtYm9yZGVyLXB1cnBsZSwgLnczLWhvdmVyLWJvcmRlci1wdXJwbGU6aG92ZXIge1xuICBib3JkZXItY29sb3I6ICM5YzI3YjAgIWltcG9ydGFudDtcbn1cblxuLnczLWJvcmRlci1kZWVwLXB1cnBsZSwgLnczLWhvdmVyLWJvcmRlci1kZWVwLXB1cnBsZTpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogIzY3M2FiNyAhaW1wb3J0YW50O1xufVxuXG4udzMtYm9yZGVyLXJlZCwgLnczLWhvdmVyLWJvcmRlci1yZWQ6aG92ZXIge1xuICBib3JkZXItY29sb3I6ICNmNDQzMzYgIWltcG9ydGFudDtcbn1cblxuLnczLWJvcmRlci1zYW5kLCAudzMtaG92ZXItYm9yZGVyLXNhbmQ6aG92ZXIge1xuICBib3JkZXItY29sb3I6ICNmZGY1ZTYgIWltcG9ydGFudDtcbn1cblxuLnczLWJvcmRlci10ZWFsLCAudzMtaG92ZXItYm9yZGVyLXRlYWw6aG92ZXIge1xuICBib3JkZXItY29sb3I6ICMwMDk2ODggIWltcG9ydGFudDtcbn1cblxuLnczLWJvcmRlci15ZWxsb3csIC53My1ob3Zlci1ib3JkZXIteWVsbG93OmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmZlYjNiICFpbXBvcnRhbnQ7XG59XG5cbi53My1ib3JkZXItd2hpdGUsIC53My1ob3Zlci1ib3JkZXItd2hpdGU6aG92ZXIge1xuICBib3JkZXItY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLnczLWJvcmRlci1ibGFjaywgLnczLWhvdmVyLWJvcmRlci1ibGFjazpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogIzAwMCAhaW1wb3J0YW50O1xufVxuXG4udzMtYm9yZGVyLWdyZXksIC53My1ob3Zlci1ib3JkZXItZ3JleTpob3ZlciwgLnczLWJvcmRlci1ncmF5LCAudzMtaG92ZXItYm9yZGVyLWdyYXk6aG92ZXIge1xuICBib3JkZXItY29sb3I6ICM5ZTllOWUgIWltcG9ydGFudDtcbn1cblxuLnczLWJvcmRlci1saWdodC1ncmV5LCAudzMtaG92ZXItYm9yZGVyLWxpZ2h0LWdyZXk6aG92ZXIsIC53My1ib3JkZXItbGlnaHQtZ3JheSwgLnczLWhvdmVyLWJvcmRlci1saWdodC1ncmF5OmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjZjFmMWYxICFpbXBvcnRhbnQ7XG59XG5cbi53My1ib3JkZXItZGFyay1ncmV5LCAudzMtaG92ZXItYm9yZGVyLWRhcmstZ3JleTpob3ZlciwgLnczLWJvcmRlci1kYXJrLWdyYXksIC53My1ob3Zlci1ib3JkZXItZGFyay1ncmF5OmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjNjE2MTYxICFpbXBvcnRhbnQ7XG59XG5cbi53My1ib3JkZXItcGFsZS1yZWQsIC53My1ob3Zlci1ib3JkZXItcGFsZS1yZWQ6aG92ZXIge1xuICBib3JkZXItY29sb3I6ICNmZmU3ZTcgIWltcG9ydGFudDtcbn1cblxuLnczLWJvcmRlci1wYWxlLWdyZWVuLCAudzMtaG92ZXItYm9yZGVyLXBhbGUtZ3JlZW46aG92ZXIge1xuICBib3JkZXItY29sb3I6ICNlN2ZmZTcgIWltcG9ydGFudDtcbn1cblxuLnczLWJvcmRlci1wYWxlLXllbGxvdywgLnczLWhvdmVyLWJvcmRlci1wYWxlLXllbGxvdzpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogI2ZmZmZjYyAhaW1wb3J0YW50O1xufVxuXG4udzMtYm9yZGVyLXBhbGUtYmx1ZSwgLnczLWhvdmVyLWJvcmRlci1wYWxlLWJsdWU6aG92ZXIge1xuICBib3JkZXItY29sb3I6ICNlN2ZmZmYgIWltcG9ydGFudDtcbn0iXX0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomeComponent);



/***/ }),

/***/ "./src/app/interceptors/auth-interceptor.ts":
/*!**************************************************!*\
  !*** ./src/app/interceptors/auth-interceptor.ts ***!
  \**************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/token-storage.service */ "./src/app/services/token-storage.service.ts");



const TOKEN_HEADER_KEY = 'Authorization'; // for Spring Boot back-end
let AuthInterceptor = class AuthInterceptor {
    constructor(token) {
        this.token = token;
    }
    intercept(req, next) {
        let authReq = req;
        const token = this.token.getToken();
        if (token != null) {
            authReq = req.clone({ headers: req.headers.set('x-access-token', token) });
        }
        return next.handle(authReq);
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"] }
];
AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]])
], AuthInterceptor);



/***/ }),

/***/ "./src/app/interceptors/error-interceptor.ts":
/*!***************************************************!*\
  !*** ./src/app/interceptors/error-interceptor.ts ***!
  \***************************************************/
/*! exports provided: HttpErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorInterceptor", function() { return HttpErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);




class HttpErrorInterceptor {
    intercept(request, next) {
        return next.handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
            let errorMsg = '';
            if (error.error instanceof ErrorEvent) {
                console.log('this is client side error');
                errorMsg = `Error: ${error.error.message}`;
            }
            else {
                console.log('this is server side error');
                errorMsg = `Error Code: ${error.status},  Message: ${JSON.stringify(error.error.error)}`;
            }
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                position: 'center',
                icon: 'error',
                title: JSON.stringify(error.error.error),
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMsg);
        }));
    }
}


/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  font-family: Arial, Helvetica, sans-serif;\n  height: 100%;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n/* style the container */\n\n/* style inputs and link buttons */\n\ninput,\n.btn {\n  width: 100%;\n  padding: 12px;\n  border: none;\n  border-radius: 4px;\n  margin: 5px 0;\n  opacity: 0.85;\n  display: inline-block;\n  font-size: 17px;\n  line-height: 20px;\n}\n\ninput:hover,\n.btn:hover {\n  opacity: 1;\n}\n\n/* add appropriate colors to fb, twitter and google buttons */\n\n.fb {\n  background-color: #3B5998;\n  color: white;\n}\n\n.twitter {\n  background-color: #55ACEE;\n  color: white;\n}\n\n.google {\n  background-color: #dd4b39;\n  color: white;\n}\n\n/* style the submit button */\n\ninput[type=submit] {\n  background-color: #04AA6D;\n  color: white;\n  cursor: pointer;\n}\n\ninput[type=submit]:hover {\n  background-color: #45a049;\n}\n\n/* Two-column layout */\n\n.col {\n  float: left;\n  width: 50%;\n  margin: auto;\n  padding: 0 50px;\n  margin-top: 6px;\n}\n\n/* Clear floats after the columns */\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n/* vertical line */\n\n.vl {\n  position: absolute;\n  margin-left: 30%;\n  transform: translate(-50%);\n  border: 2px solid #ddd;\n  height: 175px;\n}\n\n/* text inside the vertical line */\n\n.vl-innertext {\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #f1f1f1;\n  border: 1px solid #ccc;\n  border-radius: 50%;\n  padding: 8px 10px;\n}\n\n/* hide some text on medium and large screens */\n\n.hide-md-lg {\n  display: none;\n}\n\n/* bottom container */\n\n.bottom-container {\n  text-align: center;\n  background-color: #666;\n  border-radius: 0px 0px 4px 4px;\n}\n\n/* Center the loader */\n\n#loader {\n  position: relative;\n  left: 50%;\n  top: 50%;\n  z-index: 1;\n  width: 120px;\n  height: 120px;\n  margin: -76px 0 0 -76px;\n  border: 16px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 16px solid #3498db;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite;\n  margin-top: 200px;\n}\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n/* Responsive layout - when the screen is less than 650px wide, make the two columns stack on top of each other instead of next to each other */\n\n@media screen and (max-width: 650px) {\n  .col {\n    width: 100%;\n    margin-top: 0;\n  }\n\n  /* hide the vertical line */\n  .vl {\n    display: none;\n  }\n\n  /* show the hidden text on small screens */\n  .hide-md-lg {\n    display: block;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxVU0VSXFxjdm1cXGN2bV9mcm9udGVuZC9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlDQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRElFO0VBQ0Usc0JBQUE7QUNESjs7QURJRSx3QkFBQTs7QUFHQSxrQ0FBQTs7QUFDQTs7RUFFRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNISjs7QURPRTs7RUFFRSxVQUFBO0FDSko7O0FET0UsNkRBQUE7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUNKSjs7QURPRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ0pKOztBRE9FO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FDSko7O0FET0UsNEJBQUE7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDSko7O0FET0U7RUFDRSx5QkFBQTtBQ0pKOztBRE9FLHNCQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNKSjs7QURPRSxtQ0FBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0pKOztBRE9FLGtCQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUVBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDTEo7O0FEUUUsa0NBQUE7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDTEo7O0FEUUUsK0NBQUE7O0FBQ0E7RUFDRSxhQUFBO0FDTEo7O0FEUUUscUJBQUE7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUNMSjs7QURRRSxzQkFBQTs7QUFDRjtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQkFBQTtBQ0xGOztBRFFBO0VBQ0U7SUFBSywrQkFBQTtFQ0pMO0VES0E7SUFBTyxpQ0FBQTtFQ0ZQO0FBQ0Y7O0FESUE7RUFDRTtJQUFLLHVCQUFBO0VDREw7RURFQTtJQUFPLHlCQUFBO0VDQ1A7QUFDRjs7QURDRSwrSUFBQTs7QUFDQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGFBQUE7RUNDSjs7RURDRSwyQkFBQTtFQUNBO0lBQ0UsYUFBQTtFQ0VKOztFREFFLDBDQUFBO0VBQ0E7SUFDRSxjQUFBO0lBQ0Esa0JBQUE7RUNHSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgXHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICBcclxuICAvKiBzdHlsZSB0aGUgY29udGFpbmVyICovXHJcblxyXG4gIFxyXG4gIC8qIHN0eWxlIGlucHV0cyBhbmQgbGluayBidXR0b25zICovXHJcbiAgaW5wdXQsXHJcbiAgLmJ0biB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgb3BhY2l0eTogMC44NTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICBcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQ6aG92ZXIsXHJcbiAgLmJ0bjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICBcclxuICAvKiBhZGQgYXBwcm9wcmlhdGUgY29sb3JzIHRvIGZiLCB0d2l0dGVyIGFuZCBnb29nbGUgYnV0dG9ucyAqL1xyXG4gIC5mYiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0I1OTk4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAudHdpdHRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTVBQ0VFO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAuZ29vZ2xlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZDRiMzk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIHN0eWxlIHRoZSBzdWJtaXQgYnV0dG9uICovXHJcbiAgaW5wdXRbdHlwZT1zdWJtaXRdIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNEFBNkQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDVhMDQ5O1xyXG4gIH1cclxuICBcclxuICAvKiBUd28tY29sdW1uIGxheW91dCAqL1xyXG4gIC5jb2wge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMCA1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gIH1cclxuICBcclxuICAvKiBDbGVhciBmbG9hdHMgYWZ0ZXIgdGhlIGNvbHVtbnMgKi9cclxuICAucm93OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gIH1cclxuICBcclxuICAvKiB2ZXJ0aWNhbCBsaW5lICovXHJcbiAgLnZsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbiAgICBcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2RkZDtcclxuICAgIGhlaWdodDogMTc1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIHRleHQgaW5zaWRlIHRoZSB2ZXJ0aWNhbCBsaW5lICovXHJcbiAgLnZsLWlubmVydGV4dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwYWRkaW5nOiA4cHggMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLyogaGlkZSBzb21lIHRleHQgb24gbWVkaXVtIGFuZCBsYXJnZSBzY3JlZW5zICovXHJcbiAgLmhpZGUtbWQtbGcge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLyogYm90dG9tIGNvbnRhaW5lciAqL1xyXG4gIC5ib3R0b20tY29udGFpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDRweCA0cHg7XHJcbiAgfVxyXG5cclxuICAvKiBDZW50ZXIgdGhlIGxvYWRlciAqL1xyXG4jbG9hZGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgbWFyZ2luOiAtNzZweCAwIDAgLTc2cHg7XHJcbiAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlci10b3A6IDE2cHggc29saWQgIzM0OThkYjtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICBtYXJnaW4tdG9wOiAyMDBweDtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xyXG4gIDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxufVxyXG4gIFxyXG4gIC8qIFJlc3BvbnNpdmUgbGF5b3V0IC0gd2hlbiB0aGUgc2NyZWVuIGlzIGxlc3MgdGhhbiA2NTBweCB3aWRlLCBtYWtlIHRoZSB0d28gY29sdW1ucyBzdGFjayBvbiB0b3Agb2YgZWFjaCBvdGhlciBpbnN0ZWFkIG9mIG5leHQgdG8gZWFjaCBvdGhlciAqL1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICAuY29sIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB9XHJcbiAgICAvKiBoaWRlIHRoZSB2ZXJ0aWNhbCBsaW5lICovXHJcbiAgICAudmwge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLyogc2hvdyB0aGUgaGlkZGVuIHRleHQgb24gc21hbGwgc2NyZWVucyAqL1xyXG4gICAgLmhpZGUtbWQtbGcge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIH0iLCJib2R5IHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qIHN0eWxlIHRoZSBjb250YWluZXIgKi9cbi8qIHN0eWxlIGlucHV0cyBhbmQgbGluayBidXR0b25zICovXG5pbnB1dCxcbi5idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTJweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbjogNXB4IDA7XG4gIG9wYWNpdHk6IDAuODU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxN3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuaW5wdXQ6aG92ZXIsXG4uYnRuOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLyogYWRkIGFwcHJvcHJpYXRlIGNvbG9ycyB0byBmYiwgdHdpdHRlciBhbmQgZ29vZ2xlIGJ1dHRvbnMgKi9cbi5mYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzQjU5OTg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnR3aXR0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTVBQ0VFO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5nb29nbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQ0YjM5O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi8qIHN0eWxlIHRoZSBzdWJtaXQgYnV0dG9uICovXG5pbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDRBQTZEO1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTA0OTtcbn1cblxuLyogVHdvLWNvbHVtbiBsYXlvdXQgKi9cbi5jb2wge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAwIDUwcHg7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cblxuLyogQ2xlYXIgZmxvYXRzIGFmdGVyIHRoZSBjb2x1bW5zICovXG4ucm93OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4vKiB2ZXJ0aWNhbCBsaW5lICovXG4udmwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiAzMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZGRkO1xuICBoZWlnaHQ6IDE3NXB4O1xufVxuXG4vKiB0ZXh0IGluc2lkZSB0aGUgdmVydGljYWwgbGluZSAqL1xuLnZsLWlubmVydGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDhweCAxMHB4O1xufVxuXG4vKiBoaWRlIHNvbWUgdGV4dCBvbiBtZWRpdW0gYW5kIGxhcmdlIHNjcmVlbnMgKi9cbi5oaWRlLW1kLWxnIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogYm90dG9tIGNvbnRhaW5lciAqL1xuLmJvdHRvbS1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NjY7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNHB4IDRweDtcbn1cblxuLyogQ2VudGVyIHRoZSBsb2FkZXIgKi9cbiNsb2FkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgbWFyZ2luOiAtNzZweCAwIDAgLTc2cHg7XG4gIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci10b3A6IDE2cHggc29saWQgIzM0OThkYjtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xuICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xuICBtYXJnaW4tdG9wOiAyMDBweDtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG4vKiBSZXNwb25zaXZlIGxheW91dCAtIHdoZW4gdGhlIHNjcmVlbiBpcyBsZXNzIHRoYW4gNjUwcHggd2lkZSwgbWFrZSB0aGUgdHdvIGNvbHVtbnMgc3RhY2sgb24gdG9wIG9mIGVhY2ggb3RoZXIgaW5zdGVhZCBvZiBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XG4gIC5jb2wge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cblxuICAvKiBoaWRlIHRoZSB2ZXJ0aWNhbCBsaW5lICovXG4gIC52bCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC8qIHNob3cgdGhlIGhpZGRlbiB0ZXh0IG9uIHNtYWxsIHNjcmVlbnMgKi9cbiAgLmhpZGUtbWQtbGcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/token-storage.service */ "./src/app/services/token-storage.service.ts");






let LoginComponent = class LoginComponent {
    constructor(formBuilder, router, auth, tokenStorage) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.auth = auth;
        this.tokenStorage = tokenStorage;
        this.loading = false;
        this.isLoggedIn = false;
        this.isLoginFailed = false;
    }
    ngOnInit() {
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            this.role = this.tokenStorage.getUser();
            this.email = this.tokenStorage.getUser();
            this.firstname = this.tokenStorage.getUser().Firstname;
            this.lastname = this.tokenStorage.getUser().Lastname;
            this.civilite = this.tokenStorage.getUser().civilite;
            this.role = this.tokenStorage.getUser().role;
        }
        this.loginForm = this.formBuilder.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    onLogin() {
        this.loading = true;
        const email = this.loginForm.get('email').value;
        const password = this.loginForm.get('password').value;
        this.auth.login(email, password).subscribe({
            next: data => {
                this.tokenStorage.saveToken(data.accessToken);
                this.tokenStorage.saveUser(data);
                this.isLoginFailed = false;
                this.isLoggedIn = true;
                this.role = this.tokenStorage.getUser().role;
                this.firstname = this.tokenStorage.getUser().Firstname;
                this.lastname = this.tokenStorage.getUser().Lastname;
                this.civilite = this.tokenStorage.getUser().civilite;
                this.router.navigate(['home']);
                this.reloadPage();
            },
            error: error => {
                this.loading = false;
                this.errorMessage = JSON.stringify(error.error.error);
                this.isLoginFailed = true;
            }
        });
    }
    reloadPage() {
        setTimeout(() => window.location.reload(), 1000);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_5__["TokenStorageService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _services_token_storage_service__WEBPACK_IMPORTED_MODULE_5__["TokenStorageService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/models/alert.ts":
/*!*********************************!*\
  !*** ./src/app/models/alert.ts ***!
  \*********************************/
/*! exports provided: Alert, AlertType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return AlertType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Alert {
    constructor(init) {
        Object.assign(this, init);
    }
}
var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));


/***/ }),

/***/ "./src/app/models/condidate.model.ts":
/*!*******************************************!*\
  !*** ./src/app/models/condidate.model.ts ***!
  \*******************************************/
/*! exports provided: Condidate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Condidate", function() { return Condidate; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Condidate {
}


/***/ }),

/***/ "./src/app/models/contact.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/contact.model.ts ***!
  \*****************************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Contact {
}


/***/ }),

/***/ "./src/app/models/event.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/event.model.ts ***!
  \***************************************/
/*! exports provided: Events */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Events", function() { return Events; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Events {
}


/***/ }),

/***/ "./src/app/models/user.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
}


/***/ }),

/***/ "./src/app/modify-condidate/modify-condidate.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/modify-condidate/modify-condidate.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2 {\n  text-align: center;\n}\n\n.mobile-container {\n  display: inline-flex;\n  width: 100%;\n}\n\n.email-container {\n  display: inline-flex;\n  width: 100%;\n}\n\ndiv.container-fluid {\n  background-color: rgba(187, 202, 202, 0.774);\n  padding: 30px;\n}\n\nform {\n  border: 3px solid #f1f1f1;\n}\n\n/* Style the input container */\n\n.input-container {\n  display: flex;\n  width: 100%;\n  margin-bottom: 15px;\n}\n\n/* Style the form icons */\n\n.icon {\n  padding: 10px;\n  background: dodgerblue;\n  color: white;\n  min-width: 50px;\n  text-align: center;\n}\n\n.gender_icon {\n  padding: 10px;\n  background: dodgerblue;\n  color: white;\n  min-width: 50px;\n  text-align: center;\n}\n\n/* Style the input fields */\n\n.input-field {\n  width: 100%;\n  padding: 10px;\n  outline: none;\n}\n\n.input-field:focus {\n  border: 2px solid dodgerblue;\n}\n\n/* Set a style for the submit button */\n\n.btn {\n  background-color: dodgerblue;\n  color: white;\n  padding: 15px 20px;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  opacity: 0.9;\n}\n\n/* Center the loader */\n\n#loader {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  z-index: 1;\n  width: 120px;\n  height: 120px;\n  border: 16px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 16px solid #3498db;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite;\n  margin-top: 200px;\n}\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.btn:hover {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kaWZ5LWNvbmRpZGF0ZS9DOlxcVXNlcnNcXFVTRVJcXGN2bVxcY3ZtX2Zyb250ZW5kL3NyY1xcYXBwXFxtb2RpZnktY29uZGlkYXRlXFxtb2RpZnktY29uZGlkYXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2RpZnktY29uZGlkYXRlL21vZGlmeS1jb25kaWRhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0Usb0JBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxvQkFBQTtFQUNBLFdBQUE7QUNFRjs7QURBQTtFQUVNLDRDQUFBO0VBQ0EsYUFBQTtBQ0VOOztBREFJO0VBQ0kseUJBQUE7QUNHUjs7QURBSSw4QkFBQTs7QUFDQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNHTjs7QURBSSx5QkFBQTs7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNHTjs7QURESTtFQUVRLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNHWjs7QURDSSwyQkFBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQ0VOOztBRENJO0VBQ0UsNEJBQUE7QUNFTjs7QURDSSxzQ0FBQTs7QUFDQTtFQUVFLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NOOztBREdJLHNCQUFBOztBQUNKO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUVBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQkFBQTtBQ0RGOztBRElBO0VBQ0U7SUFBSywrQkFBQTtFQ0FMO0VEQ0E7SUFBTyxpQ0FBQTtFQ0VQO0FBQ0Y7O0FEQUE7RUFDRTtJQUFLLHVCQUFBO0VDR0w7RURGQTtJQUFPLHlCQUFBO0VDS1A7QUFDRjs7QURISTtFQUNFLFVBQUE7QUNLTiIsImZpbGUiOiJzcmMvYXBwL21vZGlmeS1jb25kaWRhdGUvbW9kaWZ5LWNvbmRpZGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubW9iaWxlLWNvbnRhaW5lcntcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uZW1haWwtY29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbmRpdi5jb250YWluZXItZmx1aWR7XHJcbiAgICBcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODcsIDIwMiwgMjAyLCAwLjc3NCk7XHJcbiAgICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICB9XHJcbiAgICBmb3JtIHtcclxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgIC8qIFN0eWxlIHRoZSBpbnB1dCBjb250YWluZXIgKi9cclxuICAgIC5pbnB1dC1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyogU3R5bGUgdGhlIGZvcm0gaWNvbnMgKi9cclxuICAgIC5pY29uIHtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgYmFja2dyb3VuZDogZG9kZ2VyYmx1ZTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBtaW4td2lkdGg6IDUwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5nZW5kZXJfaWNvbntcclxuICAgICAgICBcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogZG9kZ2VyYmx1ZTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKiBTdHlsZSB0aGUgaW5wdXQgZmllbGRzICovXHJcbiAgICAuaW5wdXQtZmllbGQge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmlucHV0LWZpZWxkOmZvY3VzIHtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgZG9kZ2VyYmx1ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyogU2V0IGEgc3R5bGUgZm9yIHRoZSBzdWJtaXQgYnV0dG9uICovXHJcbiAgICAuYnRuIHtcclxuICAgICAgICBcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyogQ2VudGVyIHRoZSBsb2FkZXIgKi9cclxuI2xvYWRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDUwJTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG4gIFxyXG4gIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXItdG9wOiAxNnB4IHNvbGlkICMzNDk4ZGI7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgbWFyZ2luLXRvcDogMjAwcHg7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbn1cclxuXHJcbiAgICAuYnRuOmhvdmVyIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH0iLCJoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1vYmlsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5lbWFpbC1jb250YWluZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmRpdi5jb250YWluZXItZmx1aWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NywgMjAyLCAyMDIsIDAuNzc0KTtcbiAgcGFkZGluZzogMzBweDtcbn1cblxuZm9ybSB7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNmMWYxZjE7XG59XG5cbi8qIFN0eWxlIHRoZSBpbnB1dCBjb250YWluZXIgKi9cbi5pbnB1dC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLyogU3R5bGUgdGhlIGZvcm0gaWNvbnMgKi9cbi5pY29uIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogZG9kZ2VyYmx1ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBtaW4td2lkdGg6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmdlbmRlcl9pY29uIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogZG9kZ2VyYmx1ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBtaW4td2lkdGg6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogU3R5bGUgdGhlIGlucHV0IGZpZWxkcyAqL1xuLmlucHV0LWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5pbnB1dC1maWVsZDpmb2N1cyB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGRvZGdlcmJsdWU7XG59XG5cbi8qIFNldCBhIHN0eWxlIGZvciB0aGUgc3VibWl0IGJ1dHRvbiAqL1xuLmJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTVweCAyMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG9wYWNpdHk6IDAuOTtcbn1cblxuLyogQ2VudGVyIHRoZSBsb2FkZXIgKi9cbiNsb2FkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjMzQ5OGRiO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG4gIG1hcmdpbi10b3A6IDIwMHB4O1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbi5idG46aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modify-condidate/modify-condidate.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modify-condidate/modify-condidate.component.ts ***!
  \****************************************************************/
/*! exports provided: ModifyCondidateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyCondidateComponent", function() { return ModifyCondidateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/token-storage.service */ "./src/app/services/token-storage.service.ts");
/* harmony import */ var _services_condidate_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/condidate.service */ "./src/app/services/condidate.service.ts");
/* harmony import */ var _models_condidate_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/condidate.model */ "./src/app/models/condidate.model.ts");
/* harmony import */ var _helpers_alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_helpers/alert.service */ "./src/app/_helpers/alert.service.ts");










let ModifyCondidateComponent = class ModifyCondidateComponent {
    constructor(formBuilder, userservice, route, router, cond, auth, tokenStorage, alertService) {
        this.formBuilder = formBuilder;
        this.userservice = userservice;
        this.route = route;
        this.router = router;
        this.cond = cond;
        this.auth = auth;
        this.tokenStorage = tokenStorage;
        this.alertService = alertService;
        this.users = [];
        this.loading = false;
    }
    ngOnInit() {
        this.loading = true;
        this.route.params.subscribe((params) => {
            this.cond.getCondidateById(params.id).then((condidate) => {
                this.condidate = condidate;
                this.condidateForm = this.formBuilder.group({
                    decision: [this.condidate.decision, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    motif: [this.condidate.motif, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                });
                this.loading = false;
            });
        });
    }
    onSubmit() {
        this.loading = true;
        const condidate = new _models_condidate_model__WEBPACK_IMPORTED_MODULE_8__["Condidate"]();
        condidate.decision = this.condidateForm.get('decision').value;
        condidate.motif = this.condidateForm.get('motif').value;
        this.cond.modifycondidateById(this.condidate._id, condidate).then((data) => {
            this.condidateForm.reset();
            this.loading = false;
            this.alertService.success(data.message);
            window.scrollTo(0, 0);
            this.router.navigate(['admin-board']);
        }, (error) => {
            this.loading = false;
            this.alertService.error(error.error.message);
            window.scrollTo(0, 0);
        });
    }
    reloadPage() {
        window.location.reload();
    }
};
ModifyCondidateComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_condidate_service__WEBPACK_IMPORTED_MODULE_7__["CondidateService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_6__["TokenStorageService"] },
    { type: _helpers_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"] }
];
ModifyCondidateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modify-condidate',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modify-condidate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modify-condidate/modify-condidate.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modify-condidate.component.scss */ "./src/app/modify-condidate/modify-condidate.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_condidate_service__WEBPACK_IMPORTED_MODULE_7__["CondidateService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _services_token_storage_service__WEBPACK_IMPORTED_MODULE_6__["TokenStorageService"],
        _helpers_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"]])
], ModifyCondidateComponent);



/***/ }),

/***/ "./src/app/modify-contactreq/modify-contactreq.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/modify-contactreq/modify-contactreq.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2 {\n  text-align: center;\n}\n\n.mobile-container {\n  display: inline-flex;\n  width: 100%;\n}\n\n.email-container {\n  display: inline-flex;\n  width: 100%;\n}\n\ndiv.container-fluid {\n  background-color: rgba(187, 202, 202, 0.774);\n  padding: 30px;\n}\n\nform {\n  border: 3px solid #f1f1f1;\n}\n\n/* Style the input container */\n\n.input-container {\n  display: flex;\n  width: 100%;\n  margin-bottom: 15px;\n}\n\n/* Style the form icons */\n\n.icon {\n  padding: 10px;\n  background: dodgerblue;\n  color: white;\n  min-width: 50px;\n  text-align: center;\n}\n\n.gender_icon {\n  padding: 10px;\n  background: dodgerblue;\n  color: white;\n  min-width: 50px;\n  text-align: center;\n}\n\n/* Style the input fields */\n\n.input-field {\n  width: 100%;\n  padding: 10px;\n  outline: none;\n}\n\n.input-field:focus {\n  border: 2px solid dodgerblue;\n}\n\n/* Set a style for the submit button */\n\n.btn {\n  background-color: dodgerblue;\n  color: white;\n  padding: 15px 20px;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  opacity: 0.9;\n}\n\n/* Center the loader */\n\n#loader {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  z-index: 1;\n  width: 120px;\n  height: 120px;\n  border: 16px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 16px solid #3498db;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite;\n  margin-top: 200px;\n}\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.btn:hover {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kaWZ5LWNvbnRhY3RyZXEvQzpcXFVzZXJzXFxVU0VSXFxjdm1cXGN2bV9mcm9udGVuZC9zcmNcXGFwcFxcbW9kaWZ5LWNvbnRhY3RyZXFcXG1vZGlmeS1jb250YWN0cmVxLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2RpZnktY29udGFjdHJlcS9tb2RpZnktY29udGFjdHJlcS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDRSxvQkFBQTtFQUNBLFdBQUE7QUNDRjs7QURDQTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtBQ0VGOztBREFBO0VBRU0sNENBQUE7RUFDQSxhQUFBO0FDRU47O0FEQUk7RUFDSSx5QkFBQTtBQ0dSOztBREFJLDhCQUFBOztBQUNBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0dOOztBREFJLHlCQUFBOztBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0dOOztBRERJO0VBRVEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0daOztBRENJLDJCQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FDRU47O0FEQ0k7RUFDRSw0QkFBQTtBQ0VOOztBRENJLHNDQUFBOztBQUNBO0VBRUUsNEJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ047O0FER0ksc0JBQUE7O0FBQ0o7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBRUEsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsMENBQUE7RUFDQSxrQ0FBQTtFQUNBLGlCQUFBO0FDREY7O0FESUE7RUFDRTtJQUFLLCtCQUFBO0VDQUw7RURDQTtJQUFPLGlDQUFBO0VDRVA7QUFDRjs7QURBQTtFQUNFO0lBQUssdUJBQUE7RUNHTDtFREZBO0lBQU8seUJBQUE7RUNLUDtBQUNGOztBREhJO0VBQ0UsVUFBQTtBQ0tOIiwiZmlsZSI6InNyYy9hcHAvbW9kaWZ5LWNvbnRhY3RyZXEvbW9kaWZ5LWNvbnRhY3RyZXEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1vYmlsZS1jb250YWluZXJ7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmVtYWlsLWNvbnRhaW5lcntcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5kaXYuY29udGFpbmVyLWZsdWlke1xyXG4gICAgXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg3LCAyMDIsIDIwMiwgMC43NzQpO1xyXG4gICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgZm9ybSB7XHJcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAvKiBTdHlsZSB0aGUgaW5wdXQgY29udGFpbmVyICovXHJcbiAgICAuaW5wdXQtY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qIFN0eWxlIHRoZSBmb3JtIGljb25zICovXHJcbiAgICAuaWNvbiB7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IGRvZGdlcmJsdWU7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgbWluLXdpZHRoOiA1MHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuZ2VuZGVyX2ljb257XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGRvZGdlcmJsdWU7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyogU3R5bGUgdGhlIGlucHV0IGZpZWxkcyAqL1xyXG4gICAgLmlucHV0LWZpZWxkIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5pbnB1dC1maWVsZDpmb2N1cyB7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGRvZGdlcmJsdWU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qIFNldCBhIHN0eWxlIGZvciB0aGUgc3VibWl0IGJ1dHRvbiAqL1xyXG4gICAgLmJ0biB7XHJcbiAgICAgICAgXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qIENlbnRlciB0aGUgbG9hZGVyICovXHJcbiNsb2FkZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgei1pbmRleDogMTtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxuICBcclxuICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMztcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjMzQ5OGRiO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xyXG4gIG1hcmdpbi10b3A6IDIwMHB4O1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XHJcbiAgMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNwaW4ge1xyXG4gIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG59XHJcblxyXG4gICAgLmJ0bjpob3ZlciB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9IiwiaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tb2JpbGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZW1haWwtY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5kaXYuY29udGFpbmVyLWZsdWlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODcsIDIwMiwgMjAyLCAwLjc3NCk7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG5cbmZvcm0ge1xuICBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxO1xufVxuXG4vKiBTdHlsZSB0aGUgaW5wdXQgY29udGFpbmVyICovXG4uaW5wdXQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi8qIFN0eWxlIHRoZSBmb3JtIGljb25zICovXG4uaWNvbiB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IGRvZGdlcmJsdWU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWluLXdpZHRoOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5nZW5kZXJfaWNvbiB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IGRvZGdlcmJsdWU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWluLXdpZHRoOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIFN0eWxlIHRoZSBpbnB1dCBmaWVsZHMgKi9cbi5pbnB1dC1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uaW5wdXQtZmllbGQ6Zm9jdXMge1xuICBib3JkZXI6IDJweCBzb2xpZCBkb2RnZXJibHVlO1xufVxuXG4vKiBTZXQgYSBzdHlsZSBmb3IgdGhlIHN1Ym1pdCBidXR0b24gKi9cbi5idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBvcGFjaXR5OiAwLjk7XG59XG5cbi8qIENlbnRlciB0aGUgbG9hZGVyICovXG4jbG9hZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci10b3A6IDE2cHggc29saWQgIzM0OThkYjtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xuICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xuICBtYXJnaW4tdG9wOiAyMDBweDtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG4uYnRuOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modify-contactreq/modify-contactreq.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modify-contactreq/modify-contactreq.component.ts ***!
  \******************************************************************/
/*! exports provided: ModifyContactreqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyContactreqComponent", function() { return ModifyContactreqComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/token-storage.service */ "./src/app/services/token-storage.service.ts");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/contact.service */ "./src/app/services/contact.service.ts");
/* harmony import */ var _models_contact_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/contact.model */ "./src/app/models/contact.model.ts");
/* harmony import */ var _helpers_alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_helpers/alert.service */ "./src/app/_helpers/alert.service.ts");










let ModifyContactreqComponent = class ModifyContactreqComponent {
    constructor(formBuilder, userservice, route, router, cont, auth, tokenStorage, alertService) {
        this.formBuilder = formBuilder;
        this.userservice = userservice;
        this.route = route;
        this.router = router;
        this.cont = cont;
        this.auth = auth;
        this.tokenStorage = tokenStorage;
        this.alertService = alertService;
        this.users = [];
        this.loading = false;
    }
    ngOnInit() {
        this.loading = true;
        this.route.params.subscribe((params) => {
            this.cont.getContactreqById(params.id).then((contact) => {
                this.contact = contact;
                this.contactForm = this.formBuilder.group({
                    statut: [this.contact.statut, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                });
                this.loading = false;
            });
        });
    }
    onSubmit() {
        this.loading = true;
        const contactreq = new _models_contact_model__WEBPACK_IMPORTED_MODULE_8__["Contact"]();
        contactreq.statut = this.contactForm.get('statut').value;
        this.cont.modifycontactreqById(this.contact._id, contactreq).then((data) => {
            this.contactForm.reset();
            this.loading = false;
            this.alertService.success(data.message);
            window.scrollTo(0, 0);
            this.router.navigate(['admin-board']);
        }, (error) => {
            this.loading = false;
            this.alertService.error(error.error.message);
            window.scrollTo(0, 0);
        });
    }
    reloadPage() {
        window.location.reload();
    }
};
ModifyContactreqComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_contact_service__WEBPACK_IMPORTED_MODULE_7__["ContactService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_6__["TokenStorageService"] },
    { type: _helpers_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"] }
];
ModifyContactreqComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modify-contactreq',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modify-contactreq.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modify-contactreq/modify-contactreq.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modify-contactreq.component.scss */ "./src/app/modify-contactreq/modify-contactreq.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_contact_service__WEBPACK_IMPORTED_MODULE_7__["ContactService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _services_token_storage_service__WEBPACK_IMPORTED_MODULE_6__["TokenStorageService"],
        _helpers_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"]])
], ModifyContactreqComponent);



/***/ }),

/***/ "./src/app/modify-event/modify-event.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/modify-event/modify-event.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2 {\n  text-align: center;\n}\n\nh4 {\n  text-align: center;\n  color: red;\n}\n\nlabel {\n  width: 20%;\n}\n\n.mobile-container {\n  display: inline-flex;\n  width: 100%;\n}\n\n.checkbox-container {\n  display: inline-flex;\n  width: 100%;\n}\n\n.email-container {\n  display: inline-flex;\n  width: 100%;\n}\n\ndiv.container-fluid {\n  background-color: rgba(187, 202, 202, 0.774);\n  padding: 30px;\n}\n\nform {\n  border: 3px solid #f1f1f1;\n}\n\n/* Style the input container */\n\n.input-container {\n  display: flex;\n  width: 100%;\n  margin-bottom: 15px;\n}\n\n/* Style the form icons */\n\n.icon {\n  padding: 10px;\n  background: dodgerblue;\n  color: white;\n  min-width: 50px;\n  text-align: center;\n}\n\n.input-container-disabled {\n  display: flex;\n  width: 100%;\n  margin-bottom: 15px;\n}\n\n.gender_icon {\n  padding: 10px;\n  background: dodgerblue;\n  color: white;\n  min-width: 50px;\n  text-align: center;\n}\n\n/* Style the input fields */\n\n.input-field {\n  width: 100%;\n  padding: 10px;\n  outline: none;\n}\n\n.input-field:focus {\n  border: 2px solid dodgerblue;\n}\n\n/* Set a style for the submit button */\n\n.btn {\n  background-color: dodgerblue;\n  color: white;\n  padding: 15px 20px;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  opacity: 0.9;\n  text-align: center;\n}\n\n/* Center the loader */\n\n#loader {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  z-index: 1;\n  width: 120px;\n  height: 120px;\n  border: 16px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 16px solid #3498db;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite;\n  margin-top: 200px;\n}\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.btn:hover {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kaWZ5LWV2ZW50L0M6XFxVc2Vyc1xcVVNFUlxcY3ZtXFxjdm1fZnJvbnRlbmQvc3JjXFxhcHBcXG1vZGlmeS1ldmVudFxcbW9kaWZ5LWV2ZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2RpZnktZXZlbnQvbW9kaWZ5LWV2ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURDQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQ0VGOztBREFBO0VBQ0UsVUFBQTtBQ0dGOztBREFBO0VBQ0Usb0JBQUE7RUFDQSxXQUFBO0FDR0Y7O0FEREE7RUFDRSxvQkFBQTtFQUNBLFdBQUE7QUNJRjs7QURGQTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtBQ0tGOztBREhBO0VBRU0sNENBQUE7RUFDQSxhQUFBO0FDS047O0FESEk7RUFDSSx5QkFBQTtBQ01SOztBREhJLDhCQUFBOztBQUNBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ01OOztBREhJLHlCQUFBOztBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ01OOztBREpJO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ09OOztBRExJO0VBRVEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ09aOztBREhJLDJCQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FDTU47O0FESEk7RUFDRSw0QkFBQTtBQ01OOztBREhJLHNDQUFBOztBQUNBO0VBRUUsNEJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNLTjs7QURBSSxzQkFBQTs7QUFDSjtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFFQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUJBQUE7QUNFRjs7QURDQTtFQUNFO0lBQUssK0JBQUE7RUNHTDtFREZBO0lBQU8saUNBQUE7RUNLUDtBQUNGOztBREhBO0VBQ0U7SUFBSyx1QkFBQTtFQ01MO0VETEE7SUFBTyx5QkFBQTtFQ1FQO0FBQ0Y7O0FETkk7RUFDRSxVQUFBO0FDUU4iLCJmaWxlIjoic3JjL2FwcC9tb2RpZnktZXZlbnQvbW9kaWZ5LWV2ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaDR7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxubGFiZWx7XHJcbiAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuLm1vYmlsZS1jb250YWluZXJ7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNoZWNrYm94LWNvbnRhaW5lcntcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uZW1haWwtY29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbmRpdi5jb250YWluZXItZmx1aWR7XHJcbiAgICBcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODcsIDIwMiwgMjAyLCAwLjc3NCk7XHJcbiAgICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICB9XHJcbiAgICBmb3JtIHtcclxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgIC8qIFN0eWxlIHRoZSBpbnB1dCBjb250YWluZXIgKi9cclxuICAgIC5pbnB1dC1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyogU3R5bGUgdGhlIGZvcm0gaWNvbnMgKi9cclxuICAgIC5pY29uIHtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgYmFja2dyb3VuZDogZG9kZ2VyYmx1ZTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBtaW4td2lkdGg6IDUwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5pbnB1dC1jb250YWluZXItZGlzYWJsZWQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIH1cclxuICAgIC5nZW5kZXJfaWNvbntcclxuICAgICAgICBcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogZG9kZ2VyYmx1ZTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKiBTdHlsZSB0aGUgaW5wdXQgZmllbGRzICovXHJcbiAgICAuaW5wdXQtZmllbGQge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmlucHV0LWZpZWxkOmZvY3VzIHtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgZG9kZ2VyYmx1ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyogU2V0IGEgc3R5bGUgZm9yIHRoZSBzdWJtaXQgYnV0dG9uICovXHJcbiAgICAuYnRuIHtcclxuICAgICAgICBcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyogQ2VudGVyIHRoZSBsb2FkZXIgKi9cclxuI2xvYWRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDUwJTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG4gIFxyXG4gIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXItdG9wOiAxNnB4IHNvbGlkICMzNDk4ZGI7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgbWFyZ2luLXRvcDogMjAwcHg7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbn1cclxuXHJcbiAgICAuYnRuOmhvdmVyIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH0iLCJoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaDQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiByZWQ7XG59XG5cbmxhYmVsIHtcbiAgd2lkdGg6IDIwJTtcbn1cblxuLm1vYmlsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jaGVja2JveC1jb250YWluZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5lbWFpbC1jb250YWluZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmRpdi5jb250YWluZXItZmx1aWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NywgMjAyLCAyMDIsIDAuNzc0KTtcbiAgcGFkZGluZzogMzBweDtcbn1cblxuZm9ybSB7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNmMWYxZjE7XG59XG5cbi8qIFN0eWxlIHRoZSBpbnB1dCBjb250YWluZXIgKi9cbi5pbnB1dC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLyogU3R5bGUgdGhlIGZvcm0gaWNvbnMgKi9cbi5pY29uIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogZG9kZ2VyYmx1ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBtaW4td2lkdGg6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmlucHV0LWNvbnRhaW5lci1kaXNhYmxlZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uZ2VuZGVyX2ljb24ge1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiBkb2RnZXJibHVlO1xuICBjb2xvcjogd2hpdGU7XG4gIG1pbi13aWR0aDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiBTdHlsZSB0aGUgaW5wdXQgZmllbGRzICovXG4uaW5wdXQtZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmlucHV0LWZpZWxkOmZvY3VzIHtcbiAgYm9yZGVyOiAycHggc29saWQgZG9kZ2VyYmx1ZTtcbn1cblxuLyogU2V0IGEgc3R5bGUgZm9yIHRoZSBzdWJtaXQgYnV0dG9uICovXG4uYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTAwJTtcbiAgb3BhY2l0eTogMC45O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIENlbnRlciB0aGUgbG9hZGVyICovXG4jbG9hZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci10b3A6IDE2cHggc29saWQgIzM0OThkYjtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xuICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xuICBtYXJnaW4tdG9wOiAyMDBweDtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG4uYnRuOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modify-event/modify-event.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modify-event/modify-event.component.ts ***!
  \********************************************************/
/*! exports provided: ModifyEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyEventComponent", function() { return ModifyEventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _models_event_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/event.model */ "./src/app/models/event.model.ts");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _helpers_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_helpers/alert.service */ "./src/app/_helpers/alert.service.ts");







let ModifyEventComponent = class ModifyEventComponent {
    constructor(formBuilder, route, router, apiservice, alertService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.apiservice = apiservice;
        this.alertService = alertService;
        this.loading = false;
    }
    ngOnInit() {
        this.loading = true;
        this.route.params.subscribe((params) => {
            this.apiservice.geteventreqById(params.id).then((event) => {
                this.event = event;
                this.eventForm = this.formBuilder.group({
                    title: [this.event.title],
                    date: [this.event.date],
                    description: [this.event.description],
                });
                this.loading = false;
            });
        });
    }
    onSubmit() {
        this.loading = true;
        const event = new _models_event_model__WEBPACK_IMPORTED_MODULE_4__["Events"]();
        event.title = this.eventForm.get('title').value;
        event.date = this.eventForm.get('date').value;
        event.description = this.eventForm.get('description').value;
        this.apiservice.modifyeventById(this.event._id, event).then((data) => {
            this.eventForm.reset();
            this.loading = false;
            this.alertService.success(data.message);
            window.scrollTo(0, 0);
            this.router.navigate(['calendar-fiscality']);
            this.reloadPage();
        }, (error) => {
            this.loading = false;
            this.alertService.error(error.error.message);
            window.scrollTo(0, 0);
        });
    }
    reloadPage() {
        setTimeout(() => window.location.reload(), 3000);
    }
};
ModifyEventComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_event_service__WEBPACK_IMPORTED_MODULE_5__["ApiServiceService"] },
    { type: _helpers_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] }
];
ModifyEventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modify-event',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modify-event.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modify-event/modify-event.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modify-event.component.scss */ "./src/app/modify-event/modify-event.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_event_service__WEBPACK_IMPORTED_MODULE_5__["ApiServiceService"],
        _helpers_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]])
], ModifyEventComponent);



/***/ }),

/***/ "./src/app/modify-user-admin/modify-user-admin.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/modify-user-admin/modify-user-admin.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2 {\n  text-align: center;\n}\n\ndiv.container-fluid {\n  background-color: rgba(187, 202, 202, 0.774);\n  padding: 30px;\n}\n\n.mobile-container {\n  display: inline-flex;\n  width: 100%;\n}\n\n.email-container {\n  display: inline-flex;\n  width: 100%;\n}\n\nform {\n  border: 3px solid #f1f1f1;\n}\n\n/* Style the input container */\n\n.input-container {\n  display: flex;\n  width: 100%;\n  margin-bottom: 15px;\n}\n\n/* Style the form icons */\n\n.icon {\n  padding: 10px;\n  background: dodgerblue;\n  color: white;\n  min-width: 50px;\n  text-align: center;\n}\n\n.gender_icon {\n  padding: 10px;\n  background: dodgerblue;\n  color: white;\n  min-width: 50px;\n  text-align: center;\n}\n\n/* Style the input fields */\n\n.input-field {\n  width: 100%;\n  padding: 10px;\n  outline: none;\n}\n\n.input-field:focus {\n  border: 2px solid dodgerblue;\n}\n\n/* Set a style for the submit button */\n\n.btn {\n  background-color: dodgerblue;\n  color: white;\n  padding: 15px 20px;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  opacity: 0.9;\n}\n\n/* Center the loader */\n\n#loader {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  z-index: 1;\n  width: 120px;\n  height: 120px;\n  border: 16px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 16px solid #3498db;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite;\n  margin-top: 200px;\n}\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.btn:hover {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kaWZ5LXVzZXItYWRtaW4vQzpcXFVzZXJzXFxVU0VSXFxjdm1cXGN2bV9mcm9udGVuZC9zcmNcXGFwcFxcbW9kaWZ5LXVzZXItYWRtaW5cXG1vZGlmeS11c2VyLWFkbWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2RpZnktdXNlci1hZG1pbi9tb2RpZnktdXNlci1hZG1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFFSSw0Q0FBQTtFQUNBLGFBQUE7QUNBSjs7QURFRTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtBQ0NKOztBRENFO0VBQ0Usb0JBQUE7RUFDQSxXQUFBO0FDRUo7O0FEQUU7RUFDSSx5QkFBQTtBQ0dOOztBREFFLDhCQUFBOztBQUNBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0dKOztBREFFLHlCQUFBOztBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0dKOztBRERFO0VBRVEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0dWOztBRENFLDJCQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FDRUo7O0FEQ0U7RUFDRSw0QkFBQTtBQ0VKOztBRENFLHNDQUFBOztBQUNBO0VBRUUsNEJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FER0Usc0JBQUE7O0FBQ0Y7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBRUEsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsMENBQUE7RUFDQSxrQ0FBQTtFQUNBLGlCQUFBO0FDREE7O0FESUE7RUFDQTtJQUFLLCtCQUFBO0VDQUg7RURDRjtJQUFPLGlDQUFBO0VDRUw7QUFDRjs7QURBQTtFQUNBO0lBQUssdUJBQUE7RUNHSDtFREZGO0lBQU8seUJBQUE7RUNLTDtBQUNGOztBREhFO0VBQ0UsVUFBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvbW9kaWZ5LXVzZXItYWRtaW4vbW9kaWZ5LXVzZXItYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmRpdi5jb250YWluZXItZmx1aWR7XHJcbiAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NywgMjAyLCAyMDIsIDAuNzc0KTtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgfVxyXG4gIC5tb2JpbGUtY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmVtYWlsLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIGZvcm0ge1xyXG4gICAgICBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxO1xyXG4gICAgfVxyXG4gIFxyXG4gIC8qIFN0eWxlIHRoZSBpbnB1dCBjb250YWluZXIgKi9cclxuICAuaW5wdXQtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFN0eWxlIHRoZSBmb3JtIGljb25zICovXHJcbiAgLmljb24ge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQ6IGRvZGdlcmJsdWU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtaW4td2lkdGg6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5nZW5kZXJfaWNvbntcclxuICAgICAgXHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogZG9kZ2VyYmx1ZTtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIG1pbi13aWR0aDogNTBweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBcclxuICB9XHJcbiAgXHJcbiAgLyogU3R5bGUgdGhlIGlucHV0IGZpZWxkcyAqL1xyXG4gIC5pbnB1dC1maWVsZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICBcclxuICAuaW5wdXQtZmllbGQ6Zm9jdXMge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgZG9kZ2VyYmx1ZTtcclxuICB9XHJcbiAgXHJcbiAgLyogU2V0IGEgc3R5bGUgZm9yIHRoZSBzdWJtaXQgYnV0dG9uICovXHJcbiAgLmJ0biB7XHJcbiAgICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIC8qIENlbnRlciB0aGUgbG9hZGVyICovXHJcbiNsb2FkZXIge1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbmxlZnQ6IDUwJTtcclxudG9wOiA1MCU7XHJcbnotaW5kZXg6IDE7XHJcbndpZHRoOiAxMjBweDtcclxuaGVpZ2h0OiAxMjBweDtcclxuXHJcbmJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzO1xyXG5ib3JkZXItcmFkaXVzOiA1MCU7XHJcbmJvcmRlci10b3A6IDE2cHggc29saWQgIzM0OThkYjtcclxuLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xyXG5hbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xyXG5tYXJnaW4tdG9wOiAyMDBweDtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xyXG4wJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNwaW4ge1xyXG4wJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbjEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbn1cclxuXHJcbiAgLmJ0bjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH0iLCJoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuZGl2LmNvbnRhaW5lci1mbHVpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg3LCAyMDIsIDIwMiwgMC43NzQpO1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG4ubW9iaWxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmVtYWlsLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuZm9ybSB7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNmMWYxZjE7XG59XG5cbi8qIFN0eWxlIHRoZSBpbnB1dCBjb250YWluZXIgKi9cbi5pbnB1dC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLyogU3R5bGUgdGhlIGZvcm0gaWNvbnMgKi9cbi5pY29uIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogZG9kZ2VyYmx1ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBtaW4td2lkdGg6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmdlbmRlcl9pY29uIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogZG9kZ2VyYmx1ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBtaW4td2lkdGg6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogU3R5bGUgdGhlIGlucHV0IGZpZWxkcyAqL1xuLmlucHV0LWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5pbnB1dC1maWVsZDpmb2N1cyB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGRvZGdlcmJsdWU7XG59XG5cbi8qIFNldCBhIHN0eWxlIGZvciB0aGUgc3VibWl0IGJ1dHRvbiAqL1xuLmJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTVweCAyMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG9wYWNpdHk6IDAuOTtcbn1cblxuLyogQ2VudGVyIHRoZSBsb2FkZXIgKi9cbiNsb2FkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjMzQ5OGRiO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG4gIG1hcmdpbi10b3A6IDIwMHB4O1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbi5idG46aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modify-user-admin/modify-user-admin.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modify-user-admin/modify-user-admin.component.ts ***!
  \******************************************************************/
/*! exports provided: ModifyUserAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyUserAdminComponent", function() { return ModifyUserAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_helpers/must-match.validator */ "./src/app/_helpers/must-match.validator.ts");
/* harmony import */ var _helpers_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_helpers/alert.service */ "./src/app/_helpers/alert.service.ts");









let ModifyUserAdminComponent = class ModifyUserAdminComponent {
    constructor(formBuilder, userservice, route, router, auth, alertService) {
        this.formBuilder = formBuilder;
        this.userservice = userservice;
        this.route = route;
        this.router = router;
        this.auth = auth;
        this.alertService = alertService;
        this.users = [];
        this.loading = false;
    }
    ngOnInit() {
        this.loading = true;
        this.route.params.subscribe((params) => {
            this.userservice.getUserById(params.id).then((user) => {
                this.user = user;
                this.userForm = this.formBuilder.group({
                    role: [this.user.role, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    firstname: [this.user.firstname, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    lastname: [this.user.lastname, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    confirmemail: [null,],
                    mobile: [this.user.mobile,],
                    confirmmobile: [null,],
                    usertype: [this.user.usertype,],
                    email: [{ value: this.user.email, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    fonction: [this.user.fonction, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    password: [this.user.password, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    secteur: [this.user.secteur, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    civilite: [this.user.civilite, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    raisonsociale: [this.user.raisonsociale, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    nomsociete: [this.user.nomsociete, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    clientcode: [{ value: this.user.clientcode, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                }, {
                    validator: [Object(_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_7__["MustMatch"])('email', 'confirmemail'), Object(_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_7__["MustMatch"])('mobile', 'confirmmobile')]
                });
                this.loading = false;
            });
        });
        this.usersSub = this.userservice.users$.subscribe((users) => {
            this.users = users;
            this.loading = false;
        }, (error) => {
            this.loading = false;
            console.log(error);
            this.errormsg = error.message;
        });
        this.userservice.getAll();
    }
    onSubmit() {
        this.loading = true;
        const user = new _models_user_model__WEBPACK_IMPORTED_MODULE_5__["User"]();
        user.userId = this.user._id;
        user.role = this.userForm.get('role').value;
        user.email = this.userForm.get('email').value;
        user.password = this.userForm.get('password').value;
        user.firstname = this.userForm.get('firstname').value;
        user.mobile = this.userForm.get('mobile').value;
        user.usertype = this.userForm.get('usertype').value;
        user.lastname = this.userForm.get('lastname').value;
        user.fonction = this.userForm.get('fonction').value;
        user.secteur = this.userForm.get('secteur').value;
        user.civilite = this.userForm.get('civilite').value;
        user.raisonsociale = this.userForm.get('raisonsociale').value;
        user.nomsociete = this.userForm.get('nomsociete').value;
        user.clientcode = this.userForm.get('clientcode').value;
        this.userservice.modifyUserById(user.userId, user).then((data) => {
            this.userForm.reset();
            this.loading = false;
            this.alertService.success(data.message);
            window.scrollTo(0, 0);
            this.router.navigate(['admin-board']);
        }, (error) => {
            this.loading = false;
            this.alertService.error(error.error.message);
            window.scrollTo(0, 0);
        });
    }
    reloadPage() {
        window.location.reload();
    }
};
ModifyUserAdminComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _helpers_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"] }
];
ModifyUserAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modify-user-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modify-user-admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modify-user-admin/modify-user-admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modify-user-admin.component.scss */ "./src/app/modify-user-admin/modify-user-admin.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
        _helpers_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"]])
], ModifyUserAdminComponent);



/***/ }),

/***/ "./src/app/modify-user/modify-user.component.scss":
/*!********************************************************!*\
  !*** ./src/app/modify-user/modify-user.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2 {\n  text-align: center;\n}\n\nh4 {\n  text-align: center;\n  color: red;\n}\n\nlabel {\n  width: 20%;\n}\n\n.mobile-container {\n  display: inline-flex;\n  width: 100%;\n}\n\n.checkbox-container {\n  display: inline-flex;\n  width: 100%;\n}\n\n.email-container {\n  display: inline-flex;\n  width: 100%;\n}\n\ndiv.container-fluid {\n  background-color: rgba(187, 202, 202, 0.774);\n  padding: 30px;\n}\n\nform {\n  border: 3px solid #f1f1f1;\n}\n\n/* Style the input container */\n\n.input-container {\n  display: flex;\n  width: 100%;\n  margin-bottom: 15px;\n}\n\n/* Style the form icons */\n\n.icon {\n  padding: 10px;\n  background: dodgerblue;\n  color: white;\n  min-width: 50px;\n  text-align: center;\n}\n\n.input-container-disabled {\n  display: flex;\n  width: 100%;\n  margin-bottom: 15px;\n}\n\n.gender_icon {\n  padding: 10px;\n  background: dodgerblue;\n  color: white;\n  min-width: 50px;\n  text-align: center;\n}\n\n/* Style the input fields */\n\n.input-field {\n  width: 100%;\n  padding: 10px;\n  outline: none;\n}\n\n.input-field:focus {\n  border: 2px solid dodgerblue;\n}\n\n/* Set a style for the submit button */\n\n.btn {\n  background-color: dodgerblue;\n  color: white;\n  padding: 15px 20px;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  opacity: 0.9;\n  text-align: center;\n}\n\n/* Center the loader */\n\n#loader {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  z-index: 1;\n  width: 120px;\n  height: 120px;\n  border: 16px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 16px solid #3498db;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite;\n  margin-top: 200px;\n}\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.btn:hover {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kaWZ5LXVzZXIvQzpcXFVzZXJzXFxVU0VSXFxjdm1cXGN2bV9mcm9udGVuZC9zcmNcXGFwcFxcbW9kaWZ5LXVzZXJcXG1vZGlmeS11c2VyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2RpZnktdXNlci9tb2RpZnktdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUNFRjs7QURBQTtFQUNFLFVBQUE7QUNHRjs7QURBQTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtBQ0dGOztBRERBO0VBQ0Usb0JBQUE7RUFDQSxXQUFBO0FDSUY7O0FERkE7RUFDRSxvQkFBQTtFQUNBLFdBQUE7QUNLRjs7QURIQTtFQUVNLDRDQUFBO0VBQ0EsYUFBQTtBQ0tOOztBREhJO0VBQ0kseUJBQUE7QUNNUjs7QURISSw4QkFBQTs7QUFDQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNNTjs7QURISSx5QkFBQTs7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNNTjs7QURKSTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNPTjs7QURMSTtFQUVRLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNPWjs7QURISSwyQkFBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQ01OOztBREhJO0VBQ0UsNEJBQUE7QUNNTjs7QURISSxzQ0FBQTs7QUFDQTtFQUVFLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDS047O0FEQUksc0JBQUE7O0FBQ0o7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBRUEsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsMENBQUE7RUFDQSxrQ0FBQTtFQUNBLGlCQUFBO0FDRUY7O0FEQ0E7RUFDRTtJQUFLLCtCQUFBO0VDR0w7RURGQTtJQUFPLGlDQUFBO0VDS1A7QUFDRjs7QURIQTtFQUNFO0lBQUssdUJBQUE7RUNNTDtFRExBO0lBQU8seUJBQUE7RUNRUDtBQUNGOztBRE5JO0VBQ0UsVUFBQTtBQ1FOIiwiZmlsZSI6InNyYy9hcHAvbW9kaWZ5LXVzZXIvbW9kaWZ5LXVzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5oNHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5sYWJlbHtcclxuICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4ubW9iaWxlLWNvbnRhaW5lcntcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uY2hlY2tib3gtY29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5lbWFpbC1jb250YWluZXJ7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuZGl2LmNvbnRhaW5lci1mbHVpZHtcclxuICAgIFxyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NywgMjAyLCAyMDIsIDAuNzc0KTtcclxuICAgICAgcGFkZGluZzogMzBweDtcclxuICAgIH1cclxuICAgIGZvcm0ge1xyXG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNmMWYxZjE7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgLyogU3R5bGUgdGhlIGlucHV0IGNvbnRhaW5lciAqL1xyXG4gICAgLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKiBTdHlsZSB0aGUgZm9ybSBpY29ucyAqL1xyXG4gICAgLmljb24ge1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiBkb2RnZXJibHVlO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIG1pbi13aWR0aDogNTBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmlucHV0LWNvbnRhaW5lci1kaXNhYmxlZCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLmdlbmRlcl9pY29ue1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBkb2RnZXJibHVlO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogNTBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qIFN0eWxlIHRoZSBpbnB1dCBmaWVsZHMgKi9cclxuICAgIC5pbnB1dC1maWVsZCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaW5wdXQtZmllbGQ6Zm9jdXMge1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCBkb2RnZXJibHVlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKiBTZXQgYSBzdHlsZSBmb3IgdGhlIHN1Ym1pdCBidXR0b24gKi9cclxuICAgIC5idG4ge1xyXG4gICAgICAgIFxyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKiBDZW50ZXIgdGhlIGxvYWRlciAqL1xyXG4jbG9hZGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgXHJcbiAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlci10b3A6IDE2cHggc29saWQgIzM0OThkYjtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICBtYXJnaW4tdG9wOiAyMDBweDtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xyXG4gIDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxufVxyXG5cclxuICAgIC5idG46aG92ZXIge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfSIsImgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5oNCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHJlZDtcbn1cblxubGFiZWwge1xuICB3aWR0aDogMjAlO1xufVxuXG4ubW9iaWxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNoZWNrYm94LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmVtYWlsLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuZGl2LmNvbnRhaW5lci1mbHVpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg3LCAyMDIsIDIwMiwgMC43NzQpO1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG5mb3JtIHtcbiAgYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTtcbn1cblxuLyogU3R5bGUgdGhlIGlucHV0IGNvbnRhaW5lciAqL1xuLmlucHV0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4vKiBTdHlsZSB0aGUgZm9ybSBpY29ucyAqL1xuLmljb24ge1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiBkb2RnZXJibHVlO1xuICBjb2xvcjogd2hpdGU7XG4gIG1pbi13aWR0aDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW5wdXQtY29udGFpbmVyLWRpc2FibGVkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5nZW5kZXJfaWNvbiB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IGRvZGdlcmJsdWU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWluLXdpZHRoOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIFN0eWxlIHRoZSBpbnB1dCBmaWVsZHMgKi9cbi5pbnB1dC1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uaW5wdXQtZmllbGQ6Zm9jdXMge1xuICBib3JkZXI6IDJweCBzb2xpZCBkb2RnZXJibHVlO1xufVxuXG4vKiBTZXQgYSBzdHlsZSBmb3IgdGhlIHN1Ym1pdCBidXR0b24gKi9cbi5idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBvcGFjaXR5OiAwLjk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogQ2VudGVyIHRoZSBsb2FkZXIgKi9cbiNsb2FkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjMzQ5OGRiO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG4gIG1hcmdpbi10b3A6IDIwMHB4O1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbi5idG46aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modify-user/modify-user.component.ts":
/*!******************************************************!*\
  !*** ./src/app/modify-user/modify-user.component.ts ***!
  \******************************************************/
/*! exports provided: ModifyUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyUserComponent", function() { return ModifyUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/token-storage.service */ "./src/app/services/token-storage.service.ts");
/* harmony import */ var _helpers_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_helpers/alert.service */ "./src/app/_helpers/alert.service.ts");









let ModifyUserComponent = class ModifyUserComponent {
    constructor(formBuilder, userservice, route, router, auth, tokenStorage, alertService) {
        this.formBuilder = formBuilder;
        this.userservice = userservice;
        this.route = route;
        this.router = router;
        this.auth = auth;
        this.tokenStorage = tokenStorage;
        this.alertService = alertService;
        this.isloggedin = false;
        this.loading = false;
        this.submitted = false;
        this.fiscalmatPattern = "^[1-9]{7}[A-Z]{1}AP\[0-9]{3}$";
    }
    ngOnInit() {
        this.loading = true;
        if (this.tokenStorage.getToken()) {
            this.isloggedin = true;
            this.currentuser = this.tokenStorage.getUser();
            this.userservice.getUserById(this.currentuser.userId).then((user) => {
                this.loading = false;
                this.user = user;
                console.log(user);
                this.userForm = this.formBuilder.group({
                    role: [this.user.role,],
                    firstname: [this.user.firstname,],
                    lastname: [this.user.lastname,],
                    confirmemail: [null],
                    mobile: [this.user.mobile,],
                    confirmmobile: [null],
                    usertype: [this.user.usertype,],
                    email: [this.user.email,],
                    fonction: [this.user.fonction,],
                    password: [null,],
                    confirmpassword: [null,],
                    secteur: [this.user.secteur,],
                    civilite: [this.user.civilite,],
                    raisonsociale: [this.user.raisonsociale,],
                    activitynature: [{ value: this.user.natureactivite, }],
                    selectactivitynature: [null,],
                    activity: [this.user.activite,],
                    selectactivity: [null,],
                    underactivity: [this.user.sousactivite,],
                    selectunderactivity: [null,],
                    fiscalimpot: [this.user.regimefiscalimpot,],
                    selectfiscalimpot: [null,],
                    fiscaltvaassobli: [{ value: "Assujeti Obligatoire", disabled: true }],
                    fiscalmat: [this.user.matriculefiscale, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.fiscalmatPattern)]],
                    adresseactivite: [this.user.adresseactivite,],
                    codepostal: [this.user.codepostal,],
                    nomsociete: [this.user.nomsociete,],
                    clientcode: [{ value: this.user.clientcode, disabled: true }],
                });
                this.optionValue = this.user.natureactivite;
                this.option1Value = this.user.activite;
                this.option2Value = this.user.sousactivite;
                this.option3Value = this.user.regimefiscalimpot;
                this.loading = false;
            });
        }
        else {
            this.router.navigate(['login']);
        }
        ;
    }
    get f() { return this.userForm.controls; }
    onSubmit() {
        this.loading = true;
        this.submitted = true;
        if (this.userForm.invalid) {
            return this.loading = false;
        }
        this.alertService.clear();
        const user = new _models_user_model__WEBPACK_IMPORTED_MODULE_5__["User"]();
        user.userId = this.currentuser.userId;
        user.role = this.userForm.get('role').value;
        user.email = this.userForm.get('email').value;
        user.password = this.userForm.get('password').value;
        user.mobile = this.userForm.get('mobile').value;
        user.usertype = this.userForm.get('usertype').value;
        user.confirmpassword = this.userForm.get('confirmpassword').value;
        user.firstname = this.userForm.get('firstname').value;
        user.lastname = this.userForm.get('lastname').value;
        user.fonction = this.userForm.get('fonction').value;
        if (this.userForm.get('activitynature').value == "Autre") {
            user.natureactivite = this.userForm.get('activitynature').value + '/' + this.userForm.get('selectactivitynature').value;
        }
        else {
            user.natureactivite = this.userForm.get('activitynature').value;
        }
        ;
        if (this.userForm.get('activity').value == "Autre") {
            user.activite = this.userForm.get('activity').value + '/' + this.userForm.get('selectactivity').value;
        }
        else {
            user.activite = this.userForm.get('activity').value;
        }
        ;
        if (this.userForm.get('underactivity').value == "Autre") {
            user.sousactivite = this.userForm.get('underactivity').value + '/' + this.userForm.get('selectunderactivity').value;
        }
        else {
            user.sousactivite = this.userForm.get('underactivity').value;
        }
        ;
        if (this.userForm.get('fiscalimpot').value == "Autre") {
            user.regimefiscalimpot = this.userForm.get('fiscalimpot').value + '/' + this.userForm.get('selectfiscalimpot').value;
        }
        else {
            user.regimefiscalimpot = this.userForm.get('fiscalimpot').value;
        }
        ;
        user.matriculefiscale = this.userForm.get('fiscalmat').value;
        user.regimefiscaltva = this.userForm.get('fiscaltvaassobli').value;
        user.matriculefiscale = this.userForm.get('fiscalmat').value;
        user.adresseactivite = this.userForm.get('adresseactivite').value;
        user.codepostal = this.userForm.get('codepostal').value;
        user.secteur = this.userForm.get('secteur').value;
        user.civilite = this.userForm.get('civilite').value;
        user.raisonsociale = this.userForm.get('raisonsociale').value;
        user.nomsociete = this.userForm.get('nomsociete').value;
        user.clientcode = this.userForm.get('clientcode').value;
        this.userservice.modifyUserById(user.userId, user).then(() => {
            this.userForm.reset();
            this.loading = false;
            this.alertService.success('Modification effectuée avec succès!', { keepAfterRouteChange: true });
            window.scrollTo(0, 0);
            this.router.navigate(['profil']);
        }, (error) => {
            this.loading = false;
            this.alertService.error(JSON.stringify(error.error.error));
            window.scrollTo(0, 0);
        });
    }
    reloadPage() {
        setTimeout(() => window.location.reload(), 3000);
    }
};
ModifyUserComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_7__["TokenStorageService"] },
    { type: _helpers_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"] }
];
ModifyUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modify-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modify-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modify-user/modify-user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modify-user.component.scss */ "./src/app/modify-user/modify-user.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
        _services_token_storage_service__WEBPACK_IMPORTED_MODULE_7__["TokenStorageService"],
        _helpers_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"]])
], ModifyUserComponent);



/***/ }),

/***/ "./src/app/profil/profil.component.scss":
/*!**********************************************!*\
  !*** ./src/app/profil/profil.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-fluid {\n  /* Add shadows to create the \"card\" effect */\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  text-align: center;\n  padding: 150px 0;\n}\n\n/* On mouse-over, add a deeper shadow */\n\n.container:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n\n/* Add some padding inside the card container */\n\n.container {\n  padding: 2px 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsL0M6XFxVc2Vyc1xcVVNFUlxcY3ZtXFxjdm1fZnJvbnRlbmQvc3JjXFxhcHBcXHByb2ZpbFxccHJvZmlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9maWwvcHJvZmlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksNENBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0VBRUEsa0JBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBRE1FLHVDQUFBOztBQUNBO0VBQ0UsMkNBQUE7QUNISjs7QURNRSwrQ0FBQTs7QUFDQTtFQUNFLGlCQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9wcm9maWwvcHJvZmlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uY29udGFpbmVyLWZsdWlkIHtcclxuICAgIC8qIEFkZCBzaGFkb3dzIHRvIGNyZWF0ZSB0aGUgXCJjYXJkXCIgZWZmZWN0ICovXHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNTBweCAwO1xyXG4gIH1cclxuICBcclxuICBcclxuICAvKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBkZWVwZXIgc2hhZG93ICovXHJcbiAgLmNvbnRhaW5lcjpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjIpO1xyXG4gIH1cclxuICBcclxuICAvKiBBZGQgc29tZSBwYWRkaW5nIGluc2lkZSB0aGUgY2FyZCBjb250YWluZXIgKi9cclxuICAuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDJweCAxNnB4O1xyXG4gIH1cclxuICAiLCIuY29udGFpbmVyLWZsdWlkIHtcbiAgLyogQWRkIHNoYWRvd3MgdG8gY3JlYXRlIHRoZSBcImNhcmRcIiBlZmZlY3QgKi9cbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1MHB4IDA7XG59XG5cbi8qIE9uIG1vdXNlLW92ZXIsIGFkZCBhIGRlZXBlciBzaGFkb3cgKi9cbi5jb250YWluZXI6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4vKiBBZGQgc29tZSBwYWRkaW5nIGluc2lkZSB0aGUgY2FyZCBjb250YWluZXIgKi9cbi5jb250YWluZXIge1xuICBwYWRkaW5nOiAycHggMTZweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/profil/profil.component.ts":
/*!********************************************!*\
  !*** ./src/app/profil/profil.component.ts ***!
  \********************************************/
/*! exports provided: ProfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilComponent", function() { return ProfilComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/token-storage.service */ "./src/app/services/token-storage.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _helpers_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/alert.service */ "./src/app/_helpers/alert.service.ts");






let ProfilComponent = class ProfilComponent {
    constructor(token, router, route, alertService, usersservice) {
        this.token = token;
        this.router = router;
        this.route = route;
        this.alertService = alertService;
        this.usersservice = usersservice;
        this.loading = false;
    }
    ngOnInit() {
        this.currentUser = this.token.getUser();
        this.usersservice.getUserById(this.currentUser.userId).then((user) => {
            this.loading = false;
            this.user = user;
        });
    }
    getNavigation(link, id) {
        this.router.navigate([link + '/' + id]);
    }
    onDelete() {
        this.loading = true;
        this.usersservice.deleteUserById(this.currentUser.userId).then((data) => {
            this.loading = false;
            this.alertService.success(data.message + 'veuillez se déconnecter pour voir les changements');
            window.scrollTo(0, 0);
        }, (error) => {
            this.loading = false;
            this.alertService.error(error.error.error);
            window.scrollTo(0, 0);
        });
    }
    reloadPage() {
        window.location.reload();
    }
};
ProfilComponent.ctorParameters = () => [
    { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _helpers_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
ProfilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profil',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profil.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profil/profil.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profil.component.scss */ "./src/app/profil/profil.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _helpers_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
], ProfilComponent);



/***/ }),

/***/ "./src/app/reset-password/reset-password.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  color: #fff;\n  background: green;\n}\n\n.form-control {\n  min-height: 41px;\n  background: #fff;\n  box-shadow: none !important;\n  border-color: #e3e3e3;\n}\n\n.form-control:focus {\n  border-color: #70c5c0;\n}\n\n.form-control, .btn {\n  border-radius: 2px;\n}\n\n.reset-password-form {\n  width: 350px;\n  margin: 0 auto;\n  padding: 100px 0 30px;\n}\n\n.reset-password-form form {\n  color: #7a7a7a;\n  border-radius: 2px;\n  margin-bottom: 15px;\n  font-size: 13px;\n  background: #ececec;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n  padding: 30px;\n  position: relative;\n}\n\n.reset-password-form h2 {\n  font-size: 22px;\n  margin: 35px 0 25px;\n}\n\n.reset-password-form .avatar {\n  position: absolute;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  top: -50px;\n  width: 95px;\n  height: 95px;\n  border-radius: 50%;\n  z-index: 9;\n  background: #70c5c0;\n  padding: 15px;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);\n}\n\n.reset-password-form .avatar img {\n  width: 100%;\n}\n\n.reset-password-form input[type=checkbox] {\n  position: relative;\n  top: 1px;\n}\n\n.reset-password-form .btn, .reset-password-form .btn:active {\n  font-size: 16px;\n  font-weight: bold;\n  background: #70c5c0 !important;\n  border: none;\n  margin-bottom: 20px;\n}\n\n.reset-password-form .btn:hover, .reset-password-form .btn:focus {\n  background: #50b8b3 !important;\n}\n\n.reset-password-form a {\n  color: #fff;\n  text-decoration: underline;\n}\n\n.reset-password-form a:hover {\n  text-decoration: none;\n}\n\n.reset-password-form form a {\n  color: #7a7a7a;\n  text-decoration: none;\n}\n\n.reset-password-form form a:hover {\n  text-decoration: underline;\n}\n\n.reset-password-form .bottom-action {\n  font-size: 14px;\n}\n\n.team-member .icon-box-success {\n  color: #fff;\n  position: relative;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  top: -70px;\n  width: 95px;\n  height: 95px;\n  border-radius: 50%;\n  z-index: 9;\n  background: #82ce34;\n  padding: 15px;\n  text-align: center;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);\n}\n\n.team-member .icon-box-success i {\n  font-size: 58px;\n  position: relative;\n  top: 3px;\n}\n\n.team-member .icon-box-failure {\n  color: #fff;\n  position: relative;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  top: -70px;\n  width: 95px;\n  height: 95px;\n  border-radius: 50%;\n  z-index: 9;\n  background: red;\n  padding: 15px;\n  text-align: center;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);\n}\n\n.team-member .icon-box-failure i {\n  font-size: 58px;\n  position: relative;\n  top: 3px;\n}\n\n.team-section {\n  font-family: arial;\n  text-align: center;\n  padding: 70px 0px;\n  background-color: #d0d5da;\n}\n\na {\n  color: black;\n}\n\n.button-green {\n  background-color: #4CAF50;\n  /* Green */\n  border: none;\n  color: white;\n  padding: 20px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px 2px;\n  cursor: pointer;\n}\n\n.button5 {\n  border-radius: 50%;\n}\n\n.button-red {\n  background-color: red;\n  /* Green */\n  border: none;\n  color: white;\n  padding: 20px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px 2px;\n  cursor: pointer;\n}\n\n.team-section h2 {\n  color: #3b5997;\n  font-size: 40px;\n}\n\n.team-section p {\n  font-size: 16px;\n  color: #656565;\n  margin: 0px 0px 20px;\n  text-align: center;\n}\n\n.team-member {\n  width: 100%;\n  float: left;\n  padding: 25px 15px;\n  background-color: #fff;\n  border-radius: 10px;\n  border: 1px solid #eee;\n  margin-top: 30px;\n  box-shadow: 0px 8px 0px 0px #9E9E9E;\n  transition: 0.5s;\n}\n\n.team-member:hover {\n  box-shadow: 0px -8px 0px 0px #9e9e9e;\n}\n\n.team-member h3 {\n  font-size: 24px;\n  margin: 15px 0px 0px;\n}\n\n.team-member h5 {\n  margin: 10px 0px 10px;\n  color: #8a8a8a;\n  display: inline-block;\n}\n\n.team-member p {\n  font-size: 16px;\n  color: #8a8a8a;\n}\n\n.team-member .photo {\n  width: 90px;\n  height: 90px;\n  border-radius: 100%;\n  overflow: hidden;\n  border: 1px solid #9E9E9E;\n  margin: 0 auto;\n  background-color: #ffffff;\n  padding: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzZXQtcGFzc3dvcmQvQzpcXFVzZXJzXFxVU0VSXFxjdm1cXGN2bV9mcm9udGVuZC9zcmNcXGFwcFxccmVzZXQtcGFzc3dvcmRcXHJlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFdBQUE7RUFDQSxpQkFBQTtBQ0NEOztBRENBO0VBQ0MsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7QUNFRDs7QURBQTtFQUNDLHFCQUFBO0FDR0Q7O0FEREE7RUFDQyxrQkFBQTtBQ0lEOztBREZBO0VBQ0MsWUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQ0tEOztBREhBO0VBQ0MsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ01EOztBREpBO0VBQ0MsZUFBQTtFQUNBLG1CQUFBO0FDT0Q7O0FETEE7RUFDQyxrQkFBQTtFQUNBLGNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDBDQUFBO0FDUUQ7O0FETkE7RUFDQyxXQUFBO0FDU0Q7O0FEUEE7RUFDQyxrQkFBQTtFQUNBLFFBQUE7QUNVRDs7QURSQTtFQUNDLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDV0Q7O0FEVEE7RUFDQyw4QkFBQTtBQ1lEOztBRFZBO0VBQ0MsV0FBQTtFQUNBLDBCQUFBO0FDYUQ7O0FEWEE7RUFDQyxxQkFBQTtBQ2NEOztBRFpBO0VBQ0MsY0FBQTtFQUNBLHFCQUFBO0FDZUQ7O0FEYkE7RUFDQywwQkFBQTtBQ2dCRDs7QURkQTtFQUNDLGVBQUE7QUNpQkQ7O0FEZkE7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0FDa0JEOztBRGhCQTtFQUNDLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUNtQkQ7O0FEakJBO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0FDb0JEOztBRGxCQTtFQUNDLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUNxQkQ7O0FEbkJFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUNzQko7O0FEcEJBO0VBQ0ksWUFBQTtBQ3VCSjs7QURyQkE7RUFDSSx5QkFBQTtFQUEyQixVQUFBO0VBQzNCLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ3lCSjs7QURyQkU7RUFBVSxrQkFBQTtBQ3lCWjs7QUR4QkU7RUFDRSxxQkFBQTtFQUFzQixVQUFBO0VBQ3RCLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQzRCSjs7QUQxQkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQzZCSjs7QUQxQkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUM2Qko7O0FEM0JBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtBQzhCSjs7QUQ1QkE7RUFDSSxvQ0FBQTtBQytCSjs7QUQ3QkE7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7QUNnQ0o7O0FEOUJBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNpQ0o7O0FEL0JBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNrQ0o7O0FEaENBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDbUNKIiwiZmlsZSI6InNyYy9hcHAvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRiYWNrZ3JvdW5kOmdyZWVuO1xyXG59XHJcbi5mb3JtLWNvbnRyb2wge1xyXG5cdG1pbi1oZWlnaHQ6IDQxcHg7XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcblx0Ym9yZGVyLWNvbG9yOiAjZTNlM2UzO1xyXG59XHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG5cdGJvcmRlci1jb2xvcjogIzcwYzVjMDtcclxufVxyXG4uZm9ybS1jb250cm9sLCAuYnRuIHsgICAgICAgIFxyXG5cdGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG4ucmVzZXQtcGFzc3dvcmQtZm9ybSB7XHJcblx0d2lkdGg6IDM1MHB4O1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG5cdHBhZGRpbmc6IDEwMHB4IDAgMzBweDtcdFx0XHJcbn1cclxuLnJlc2V0LXBhc3N3b3JkLWZvcm0gZm9ybSB7XHJcblx0Y29sb3I6ICM3YTdhN2E7XHJcblx0Ym9yZGVyLXJhZGl1czogMnB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDE1cHg7XHJcblx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdGJhY2tncm91bmQ6ICNlY2VjZWM7XHJcblx0Ym94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG5cdHBhZGRpbmc6IDMwcHg7XHRcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHRcclxufVxyXG4ucmVzZXQtcGFzc3dvcmQtZm9ybSBoMiB7XHJcblx0Zm9udC1zaXplOiAyMnB4O1xyXG5cdG1hcmdpbjogMzVweCAwIDI1cHg7XHJcbn1cclxuLnJlc2V0LXBhc3N3b3JkLWZvcm0gLmF2YXRhciB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG5cdGxlZnQ6IDA7XHJcblx0cmlnaHQ6IDA7XHJcblx0dG9wOiAtNTBweDtcclxuXHR3aWR0aDogOTVweDtcclxuXHRoZWlnaHQ6IDk1cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdHotaW5kZXg6IDk7XHJcblx0YmFja2dyb3VuZDogIzcwYzVjMDtcclxuXHRwYWRkaW5nOiAxNXB4O1xyXG5cdGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG4ucmVzZXQtcGFzc3dvcmQtZm9ybSAuYXZhdGFyIGltZyB7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cdFxyXG4ucmVzZXQtcGFzc3dvcmQtZm9ybSBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR0b3A6IDFweDtcclxufVxyXG4ucmVzZXQtcGFzc3dvcmQtZm9ybSAuYnRuLCAucmVzZXQtcGFzc3dvcmQtZm9ybSAuYnRuOmFjdGl2ZSB7ICAgICAgICBcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0YmFja2dyb3VuZDogIzcwYzVjMCAhaW1wb3J0YW50O1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5yZXNldC1wYXNzd29yZC1mb3JtIC5idG46aG92ZXIsIC5yZXNldC1wYXNzd29yZC1mb3JtIC5idG46Zm9jdXMge1xyXG5cdGJhY2tncm91bmQ6ICM1MGI4YjMgIWltcG9ydGFudDtcclxufSAgICBcclxuLnJlc2V0LXBhc3N3b3JkLWZvcm0gYSB7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuLnJlc2V0LXBhc3N3b3JkLWZvcm0gYTpob3ZlciB7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5yZXNldC1wYXNzd29yZC1mb3JtIGZvcm0gYSB7XHJcblx0Y29sb3I6ICM3YTdhN2E7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5yZXNldC1wYXNzd29yZC1mb3JtIGZvcm0gYTpob3ZlciB7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuLnJlc2V0LXBhc3N3b3JkLWZvcm0gLmJvdHRvbS1hY3Rpb24ge1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4udGVhbS1tZW1iZXIgLmljb24tYm94LXN1Y2Nlc3Mge1xyXG5cdGNvbG9yOiAjZmZmO1x0XHRcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcblx0bGVmdDogMDtcclxuXHRyaWdodDogMDtcclxuXHR0b3A6IC03MHB4O1xyXG5cdHdpZHRoOiA5NXB4O1xyXG5cdGhlaWdodDogOTVweDtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0ei1pbmRleDogOTtcclxuXHRiYWNrZ3JvdW5kOiAjODJjZTM0O1xyXG5cdHBhZGRpbmc6IDE1cHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG4udGVhbS1tZW1iZXIgLmljb24tYm94LXN1Y2Nlc3MgaSB7XHJcblx0Zm9udC1zaXplOiA1OHB4O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR0b3A6IDNweDtcclxufVxyXG4udGVhbS1tZW1iZXIgLmljb24tYm94LWZhaWx1cmUge1xyXG5cdGNvbG9yOiAjZmZmO1x0XHRcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcblx0bGVmdDogMDtcclxuXHRyaWdodDogMDtcclxuXHR0b3A6IC03MHB4O1xyXG5cdHdpZHRoOiA5NXB4O1xyXG5cdGhlaWdodDogOTVweDtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0ei1pbmRleDogOTtcclxuXHRiYWNrZ3JvdW5kOnJlZDtcclxuXHRwYWRkaW5nOiAxNXB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuLnRlYW0tbWVtYmVyIC5pY29uLWJveC1mYWlsdXJlIGkge1xyXG5cdGZvbnQtc2l6ZTogNThweDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0dG9wOiAzcHg7XHJcbn1cclxuICAudGVhbS1zZWN0aW9uIHtcclxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDcwcHggMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QwZDVkYTtcclxufVxyXG5he1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5idXR0b24tZ3JlZW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDsgLyogR3JlZW4gKi9cclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW46IDRweCAycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5idXR0b241IHtib3JkZXItcmFkaXVzOiA1MCU7fVxyXG4gIC5idXR0b24tcmVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmVkOyAvKiBHcmVlbiAqL1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbjogNHB4IDJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbi50ZWFtLXNlY3Rpb24gaDIge1xyXG4gICAgY29sb3I6ICMzYjU5OTc7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBcclxufVxyXG4udGVhbS1zZWN0aW9uIHAge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM2NTY1NjU7XHJcbiAgICBtYXJnaW46IDBweCAwcHggMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udGVhbS1tZW1iZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmc6IDI1cHggMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDBweCAwcHggIzlFOUU5RTtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuLnRlYW0tbWVtYmVyOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAtOHB4IDBweCAwcHggIzllOWU5ZTtcclxufVxyXG4udGVhbS1tZW1iZXIgaDMge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbWFyZ2luOiAxNXB4IDBweCAwcHg7XHJcbn1cclxuLnRlYW0tbWVtYmVyIGg1IHtcclxuICAgIG1hcmdpbjogMTBweCAwcHggMTBweDtcclxuICAgIGNvbG9yOiAjOGE4YThhO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi50ZWFtLW1lbWJlciBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjOGE4YThhO1xyXG59XHJcbi50ZWFtLW1lbWJlciAucGhvdG8ge1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5RTlFOUU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbn0iLCJib2R5IHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6IGdyZWVuO1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgbWluLWhlaWdodDogNDFweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNlM2UzZTM7XG59XG5cbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICM3MGM1YzA7XG59XG5cbi5mb3JtLWNvbnRyb2wsIC5idG4ge1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5yZXNldC1wYXNzd29yZC1mb3JtIHtcbiAgd2lkdGg6IDM1MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMTAwcHggMCAzMHB4O1xufVxuXG4ucmVzZXQtcGFzc3dvcmQtZm9ybSBmb3JtIHtcbiAgY29sb3I6ICM3YTdhN2E7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBiYWNrZ3JvdW5kOiAjZWNlY2VjO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnJlc2V0LXBhc3N3b3JkLWZvcm0gaDIge1xuICBmb250LXNpemU6IDIycHg7XG4gIG1hcmdpbjogMzVweCAwIDI1cHg7XG59XG5cbi5yZXNldC1wYXNzd29yZC1mb3JtIC5hdmF0YXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAtNTBweDtcbiAgd2lkdGg6IDk1cHg7XG4gIGhlaWdodDogOTVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiA5O1xuICBiYWNrZ3JvdW5kOiAjNzBjNWMwO1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5yZXNldC1wYXNzd29yZC1mb3JtIC5hdmF0YXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5yZXNldC1wYXNzd29yZC1mb3JtIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDFweDtcbn1cblxuLnJlc2V0LXBhc3N3b3JkLWZvcm0gLmJ0biwgLnJlc2V0LXBhc3N3b3JkLWZvcm0gLmJ0bjphY3RpdmUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kOiAjNzBjNWMwICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnJlc2V0LXBhc3N3b3JkLWZvcm0gLmJ0bjpob3ZlciwgLnJlc2V0LXBhc3N3b3JkLWZvcm0gLmJ0bjpmb2N1cyB7XG4gIGJhY2tncm91bmQ6ICM1MGI4YjMgIWltcG9ydGFudDtcbn1cblxuLnJlc2V0LXBhc3N3b3JkLWZvcm0gYSB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLnJlc2V0LXBhc3N3b3JkLWZvcm0gYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnJlc2V0LXBhc3N3b3JkLWZvcm0gZm9ybSBhIHtcbiAgY29sb3I6ICM3YTdhN2E7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnJlc2V0LXBhc3N3b3JkLWZvcm0gZm9ybSBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5yZXNldC1wYXNzd29yZC1mb3JtIC5ib3R0b20tYWN0aW9uIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4udGVhbS1tZW1iZXIgLmljb24tYm94LXN1Y2Nlc3Mge1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogLTcwcHg7XG4gIHdpZHRoOiA5NXB4O1xuICBoZWlnaHQ6IDk1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgei1pbmRleDogOTtcbiAgYmFja2dyb3VuZDogIzgyY2UzNDtcbiAgcGFkZGluZzogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi50ZWFtLW1lbWJlciAuaWNvbi1ib3gtc3VjY2VzcyBpIHtcbiAgZm9udC1zaXplOiA1OHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogM3B4O1xufVxuXG4udGVhbS1tZW1iZXIgLmljb24tYm94LWZhaWx1cmUge1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogLTcwcHg7XG4gIHdpZHRoOiA5NXB4O1xuICBoZWlnaHQ6IDk1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgei1pbmRleDogOTtcbiAgYmFja2dyb3VuZDogcmVkO1xuICBwYWRkaW5nOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLnRlYW0tbWVtYmVyIC5pY29uLWJveC1mYWlsdXJlIGkge1xuICBmb250LXNpemU6IDU4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAzcHg7XG59XG5cbi50ZWFtLXNlY3Rpb24ge1xuICBmb250LWZhbWlseTogYXJpYWw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNzBweCAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMGQ1ZGE7XG59XG5cbmEge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5idXR0b24tZ3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICAvKiBHcmVlbiAqL1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDRweCAycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ1dHRvbjUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5idXR0b24tcmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAvKiBHcmVlbiAqL1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDRweCAycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRlYW0tc2VjdGlvbiBoMiB7XG4gIGNvbG9yOiAjM2I1OTk3O1xuICBmb250LXNpemU6IDQwcHg7XG59XG5cbi50ZWFtLXNlY3Rpb24gcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM2NTY1NjU7XG4gIG1hcmdpbjogMHB4IDBweCAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50ZWFtLW1lbWJlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMjVweCAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBib3gtc2hhZG93OiAwcHggOHB4IDBweCAwcHggIzlFOUU5RTtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLnRlYW0tbWVtYmVyOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMHB4IC04cHggMHB4IDBweCAjOWU5ZTllO1xufVxuXG4udGVhbS1tZW1iZXIgaDMge1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbjogMTVweCAwcHggMHB4O1xufVxuXG4udGVhbS1tZW1iZXIgaDUge1xuICBtYXJnaW46IDEwcHggMHB4IDEwcHg7XG4gIGNvbG9yOiAjOGE4YThhO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi50ZWFtLW1lbWJlciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzhhOGE4YTtcbn1cblxuLnRlYW0tbWVtYmVyIC5waG90byB7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5RTlFOUU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiA0cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/reset-password/reset-password.component.ts":
/*!************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.ts ***!
  \************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _helpers_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/alert.service */ "./src/app/_helpers/alert.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");






var TokenStatus;
(function (TokenStatus) {
    TokenStatus[TokenStatus["Validating"] = 0] = "Validating";
    TokenStatus[TokenStatus["Valid"] = 1] = "Valid";
    TokenStatus[TokenStatus["Invalid"] = 2] = "Invalid";
})(TokenStatus || (TokenStatus = {}));
let ResetPasswordComponent = class ResetPasswordComponent {
    constructor(formBuilder, route, router, accountService, alertService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.accountService = accountService;
        this.alertService = alertService;
        this.TokenStatus = TokenStatus;
        this.tokenStatus = TokenStatus.Validating;
        this.token = null;
        this.loading = false;
        this.submitted = false;
    }
    ngOnInit() {
        this.resetpasswordform = this.formBuilder.group({
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            confirmpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        }, {});
        this.route.params.subscribe((params) => {
            this.token = params.token;
        });
        // remove token from url to prevent http referer leakage
        this.router.navigate([], { relativeTo: this.route, replaceUrl: true });
        this.accountService.validateResetToken(this.token).then((success) => {
            this.alertService.success(success.message);
            window.scrollTo(0, 0);
            this.tokenStatus = TokenStatus.Valid;
        }, (error) => {
            this.tokenStatus = TokenStatus.Invalid;
            this.alertService.error(error.error.error);
            window.scrollTo(0, 0);
        });
        // convenience getter for easy access to form fields
    }
    onSubmit() {
        this.submitted = true;
        // reset alerts on submit
        this.loading = true;
        const password = this.resetpasswordform.get('password').value;
        const confirmpassword = this.resetpasswordform.get('confirmpassword').value;
        this.accountService.resetPassword(this.token, password, confirmpassword).then((success) => {
            this.alertService.success(success.message);
            window.scrollTo(0, 0);
        }, (error) => {
            this.loading = false;
            this.tokenStatus = TokenStatus.Invalid;
            this.alertService.error(error.error.error);
            window.scrollTo(0, 0);
        });
    }
};
ResetPasswordComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _helpers_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }
];
ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reset-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reset-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/reset-password/reset-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reset-password.component.scss */ "./src/app/reset-password/reset-password.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
        _helpers_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
], ResetPasswordComponent);



/***/ }),

/***/ "./src/app/search-bar/search-bar.component.scss":
/*!******************************************************!*\
  !*** ./src/app/search-bar/search-bar.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body, html {\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  background: grey;\n}\n\n.d-flex {\n  display: inline-flex;\n}\n\n.searchbar {\n  margin-bottom: auto;\n  margin-top: auto;\n  height: 60px;\n  background-color: #353b48;\n  border-radius: 30px;\n  padding: 10px;\n  display: inline-flex;\n  width: 200px;\n}\n\n.search_input {\n  color: white;\n  border: 0;\n  outline: 0;\n  background: none;\n  width: 0;\n  caret-color: transparent;\n  line-height: 40px;\n  transition: width 0.4s linear;\n}\n\n.searchbar:hover > .search_input {\n  padding: 0 10px;\n  width: 300px;\n  caret-color: red;\n  transition: width 0.4s linear;\n}\n\n.searchbar:hover > .search_icon {\n  background: white;\n  color: #e74c3c;\n}\n\n.search_icon {\n  height: 40px;\n  width: 40px;\n  float: right;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  color: white;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLWJhci9DOlxcVXNlcnNcXFVTRVJcXGN2bVxcY3ZtX2Zyb250ZW5kL3NyY1xcYXBwXFxzZWFyY2gtYmFyXFxzZWFyY2gtYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZWFyY2gtYmFyL3NlYXJjaC1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNBUjs7QURFUTtFQUNJLG9CQUFBO0FDQ1o7O0FERVE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FDQ1I7O0FERVE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QUNDUjs7QURFUTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQ0NSOztBREVRO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDQ1I7O0FERVE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDQ1IiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gtYmFyL3NlYXJjaC1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGJvZHksaHRtbHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogZ3JleTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmQtZmxleHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLnNlYXJjaGJhcntcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTNiNDg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAuc2VhcmNoX2lucHV0e1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgIGNhcmV0LWNvbG9yOnRyYW5zcGFyZW50O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNHMgbGluZWFyO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC5zZWFyY2hiYXI6aG92ZXIgPiAuc2VhcmNoX2lucHV0e1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgY2FyZXQtY29sb3I6cmVkO1xyXG4gICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNHMgbGluZWFyO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC5zZWFyY2hiYXI6aG92ZXIgPiAuc2VhcmNoX2ljb257XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgY29sb3I6ICNlNzRjM2M7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLnNlYXJjaF9pY29ue1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgICAgICB9IiwiYm9keSwgaHRtbCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZDogZ3JleTtcbn1cblxuLmQtZmxleCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuXG4uc2VhcmNoYmFyIHtcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgaGVpZ2h0OiA2MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUzYjQ4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uc2VhcmNoX2lucHV0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHdpZHRoOiAwO1xuICBjYXJldC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjRzIGxpbmVhcjtcbn1cblxuLnNlYXJjaGJhcjpob3ZlciA+IC5zZWFyY2hfaW5wdXQge1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgY2FyZXQtY29sb3I6IHJlZDtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC40cyBsaW5lYXI7XG59XG5cbi5zZWFyY2hiYXI6aG92ZXIgPiAuc2VhcmNoX2ljb24ge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6ICNlNzRjM2M7XG59XG5cbi5zZWFyY2hfaWNvbiB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/search-bar/search-bar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/search-bar/search-bar.component.ts ***!
  \****************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SearchBarComponent = class SearchBarComponent {
    constructor() { }
    ngOnInit() {
    }
};
SearchBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/search-bar/search-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-bar.component.scss */ "./src/app/search-bar/search-bar.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SearchBarComponent);



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let AuthGuard = class AuthGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate(route, state) {
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create((observer) => {
        });
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AuthGuard);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





const authurllocal = 'http://localhost:3000/api/users/';
const authurlcloud = 'https://cvm-backend.herokuapp.com/api/users/';
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
let AuthService = class AuthService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.userrole$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
    }
    register(email, password, confirmpassword, mobile, usertype, firstname, lastname, fonction, secteur, civilite, raisonsociale, nomsociete, clientcode, role) {
        return this.http.post(authurlcloud + 'signup', {
            email, password, confirmpassword, firstname, lastname, fonction, secteur, civilite, mobile, usertype, raisonsociale, nomsociete, clientcode, role
        }, httpOptions);
    }
    login(email, password) {
        return this.http.post(authurlcloud + 'login', {
            email,
            password
        }, httpOptions);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
], AuthService);



/***/ }),

/***/ "./src/app/services/condidate.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/condidate.service.ts ***!
  \***********************************************/
/*! exports provided: CondidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CondidateService", function() { return CondidateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




const API_URL_test = 'http://localhost:3000/api/condidates/';
const API_URL_cloud = 'https://cvm-backend.herokuapp.com/api/condidates/';
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
let CondidateService = class CondidateService {
    constructor(http) {
        this.http = http;
        this.condidates = [];
        this.condidates$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    getCondidates() {
        this.http.get(API_URL_cloud).subscribe((condidates) => {
            if (condidates) {
                this.condidates = condidates;
                this.emitCondidates();
            }
        }, (error) => {
            console.log(error);
        });
    }
    emitCondidates() {
        this.condidates$.next(this.condidates);
    }
    getCondidateById(id) {
        return new Promise((resolve, reject) => {
            this.http.get(API_URL_cloud + id).subscribe((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            });
        });
    }
    getCondidate(email) {
        return new Promise((resolve, reject) => {
            this.http.post(API_URL_cloud + 'condidate', { email }).subscribe((condidates) => {
                if (condidates) {
                    this.condidates = condidates;
                    this.emitCondidates();
                }
            }, (error) => {
                console.log(error);
            });
        });
    }
    create(condidate, image) {
        return new Promise((resolve, reject) => {
            const condidateData = new FormData();
            condidateData.append('condidate', JSON.stringify(condidate));
            condidateData.append('image', image, condidate.firstname);
            this.http.post(API_URL_cloud + 'createcondidate', condidateData).subscribe((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            });
        });
    }
    modify(id, condidate, image) {
        return new Promise((resolve, reject) => {
            let condidateData;
            if (typeof image === 'string') {
                condidate.ficheUrl = image;
                condidateData = condidate;
            }
            else {
                condidateData = new FormData();
                condidateData.append('condidate', JSON.stringify(condidate));
                condidateData.append('image', image, condidate.email);
            }
            this.http.put(API_URL_cloud + id, condidateData).subscribe((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            });
        });
    }
    modifycondidateById(id, condidate) {
        return new Promise((resolve, reject) => {
            this.http.put(API_URL_cloud + id, condidate).subscribe((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            });
        });
    }
    deleteCondidate(id) {
        return new Promise((resolve, reject) => {
            this.http.delete(API_URL_cloud + id).subscribe((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            });
        });
    }
};
CondidateService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CondidateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], CondidateService);



/***/ }),

/***/ "./src/app/services/contact.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/contact.service.ts ***!
  \*********************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




const API_URL_test = 'http://localhost:3000/api/contactreqs/';
const API_URL_cloud = 'https://cvm-backend.herokuapp.com/api/contactreqs/';
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
let ContactService = class ContactService {
    constructor(http) {
        this.http = http;
        this.contactreqs = [];
        this.contactreqs$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    getContactreqs() {
        this.http.get(API_URL_cloud).subscribe((contactreqs) => {
            if (contactreqs) {
                this.contactreqs = contactreqs;
                this.emitContactreqs();
            }
        }, (error) => {
            console.log(error);
        });
    }
    emitContactreqs() {
        this.contactreqs$.next(this.contactreqs);
    }
    getContactreqById(id) {
        return new Promise((resolve, reject) => {
            this.http.get(API_URL_cloud + id).subscribe((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            });
        });
    }
    getContactreqssup(date) {
        return new Promise((resolve, reject) => {
            this.http.post(API_URL_cloud + 'filtercontactreqsup', { date }).subscribe((contactreqs) => {
                if (contactreqs) {
                    this.contactreqs = contactreqs;
                    this.emitContactreqs();
                }
            }, (error) => {
                console.log(error);
            });
        });
    }
    getContactreqsinf(date) {
        return new Promise((resolve, reject) => {
            this.http.post(API_URL_cloud + 'filtercontactreqinf', { date }).subscribe((contactreqs) => {
                if (contactreqs) {
                    this.contactreqs = contactreqs;
                    this.emitContactreqs();
                }
            }, (error) => {
                console.log(error);
            });
        });
    }
    create(contact, image) {
        return new Promise((resolve, reject) => {
            const contactData = new FormData();
            contactData.append('contact', JSON.stringify(contact));
            contactData.append('image', image, contact.firstname);
            this.http.post(API_URL_cloud + 'createcontactreq', contactData).subscribe((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            });
        });
    }
    createwithoutimage(contact) {
        return new Promise((resolve, reject) => {
            this.http.post(API_URL_cloud + 'createcontactreqwithoutimage', contact).subscribe((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            });
        });
    }
    modify(id, contactreq, image) {
        return new Promise((resolve, reject) => {
            let contactreqData;
            if (typeof image === 'string') {
                contactreq.ficheUrl = image;
                contactreqData = contactreq;
            }
            else {
                contactreqData = new FormData();
                contactreqData.append('contactreq', JSON.stringify(contactreq));
                contactreqData.append('image', image, contactreq.email);
            }
            this.http.put(API_URL_cloud + id, contactreqData).subscribe((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            });
        });
    }
    modifycontactreqById(id, contactreq) {
        return new Promise((resolve, reject) => {
            this.http.put(API_URL_cloud + id, contactreq).subscribe((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            });
        });
    }
};
ContactService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ContactService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ContactService);



/***/ }),

/***/ "./src/app/services/event.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/event.service.ts ***!
  \*******************************************/
/*! exports provided: ApiServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiServiceService", function() { return ApiServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let ApiServiceService = class ApiServiceService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.API_URL_cloud = 'https://cvm-backend.herokuapp.com/api/events/';
        this.API_URL_test = 'http://localhost:3000/api/events/';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        this.currentUser = {};
    }
    // Add Event to Calender//
    addEvent(event) {
        return new Promise((resolve, reject) => {
            this.http.post(this.API_URL_cloud + 'add_events', event).subscribe((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            });
        });
    }
    // Get All Events //
    getAllEvents() {
        return this.http.get(this.API_URL_cloud).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
            console.log(data);
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])('Something went wrong');
        }));
    }
    geteventreqById(id) {
        return new Promise((resolve, reject) => {
            this.http.get(this.API_URL_cloud + id).subscribe((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            });
        });
    }
    getcomingEvents() {
        return this.http.get(this.API_URL_cloud + 'coming_events').
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
            console.log(data);
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])('Something went wrong');
        }));
    }
    // Delete Single Event//
    deleteSingleEvent(id) {
        return new Promise((resolve, reject) => {
            this.http.delete(this.API_URL_cloud + id).subscribe((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            });
        });
    }
    modifyeventById(id, event) {
        return new Promise((resolve, reject) => {
            this.http.put(this.API_URL_cloud + id, event).subscribe((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            });
        });
    }
};
ApiServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ApiServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], ApiServiceService);



/***/ }),

/***/ "./src/app/services/token-storage.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/token-storage.service.ts ***!
  \***************************************************/
/*! exports provided: TokenStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStorageService", function() { return TokenStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const TOKEN_KEY = 'x-access-token';
const USER_KEY = 'user';
let TokenStorageService = class TokenStorageService {
    constructor(router) {
        this.router = router;
    }
    signOut() {
        window.localStorage.clear();
        this.router.navigate(['home']);
    }
    saveToken(token) {
        window.localStorage.removeItem(TOKEN_KEY);
        window.localStorage.setItem(TOKEN_KEY, token);
    }
    getToken() {
        return window.localStorage.getItem(TOKEN_KEY);
    }
    saveUser(user) {
        window.localStorage.removeItem(USER_KEY);
        window.localStorage.setItem(USER_KEY, JSON.stringify(user));
    }
    getUser() {
        const user = window.localStorage.getItem(USER_KEY);
        if (user) {
            return JSON.parse(user);
        }
        return {};
    }
};
TokenStorageService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
TokenStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], TokenStorageService);



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




const API_URL_test = 'http://localhost:3000/api/users/';
const API_URL_cloud = 'https://cvm-backend.herokuapp.com/api/users/';
let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.users = [];
        this.users$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    getAll() {
        this.http.get(API_URL_cloud).subscribe((users) => {
            if (users) {
                this.users = users;
                this.emitusers();
            }
        }, (error) => {
            console.log(error);
        });
    }
    emitusers() {
        this.users$.next(this.users);
    }
    getUserById(id) {
        return new Promise((resolve, reject) => {
            this.http.get(API_URL_cloud + id).subscribe((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            });
        });
    }
    modifyUserById(id, user) {
        return new Promise((resolve, reject) => {
            this.http.put(API_URL_cloud + id, user).subscribe((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            });
        });
    }
    completeUserById(id, user) {
        return new Promise((resolve, reject) => {
            this.http.put(API_URL_cloud + 'complete/' + id, user).subscribe((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            });
        });
    }
    deleteUserById(id) {
        return new Promise((resolve, reject) => {
            this.http.delete(API_URL_cloud + id).subscribe((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            });
        });
    }
    verifyEmail(token) {
        return new Promise((resolve, reject) => {
            this.http.post(API_URL_cloud + 'verify-email', { token }).subscribe((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            });
        });
    }
    forgotPassword(email) {
        return new Promise((resolve, reject) => {
            this.http.post(API_URL_cloud + 'forgot-password', { email }).subscribe((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            });
        });
    }
    validateResetToken(token) {
        return new Promise((resolve, reject) => {
            this.http.post(API_URL_cloud + 'validate-reset-token', { token }).subscribe((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            });
        });
    }
    resetPassword(token, password, confirmPassword) {
        return new Promise((resolve, reject) => {
            this.http.post(API_URL_cloud + 'reset-password', { token, password, confirmPassword }).subscribe((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            });
        });
    }
    getuserbyfirstname(firstname) {
        this.http.post(API_URL_cloud + 'filteruserfirstname', { firstname }).subscribe((users) => {
            if (users) {
                this.users = users;
                this.emitusers();
            }
        }, (error) => {
            console.log(error);
        });
    }
    getuserbylastname(lastname) {
        this.http.post(API_URL_cloud + 'filteruserlastname', { lastname }).subscribe((users) => {
            if (users) {
                this.users = users;
                this.emitusers();
            }
        }, (error) => {
            console.log(error);
        });
    }
    getuserbyemail(email) {
        this.http.post(API_URL_cloud + 'filteruseremail', { email }).subscribe((users) => {
            if (users) {
                this.users = users;
                this.emitusers();
            }
        }, (error) => {
            console.log(error);
        });
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], UserService);



/***/ }),

/***/ "./src/app/settings/settings.component.scss":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/token-storage.service */ "./src/app/services/token-storage.service.ts");



let SettingsComponent = class SettingsComponent {
    constructor(token) {
        this.token = token;
    }
    ngOnInit() {
        this.currentUser = this.token.getUser();
    }
};
SettingsComponent.ctorParameters = () => [
    { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"] }
];
SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./settings.component.scss */ "./src/app/settings/settings.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]])
], SettingsComponent);



/***/ }),

/***/ "./src/app/signup/signup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2 {\n  text-align: center;\n}\n\nlabel {\n  width: 20%;\n}\n\n.error-container {\n  display: inline-flex;\n  width: 100%;\n}\n\n.email-container {\n  display: inline-flex;\n  width: 100%;\n}\n\n.mobile-container {\n  display: inline-flex;\n  width: 100%;\n}\n\n.password-container {\n  display: inline-flex;\n  width: 100%;\n}\n\ndiv.container-fluid {\n  background-color: rgba(187, 202, 202, 0.774);\n  padding: 30px;\n}\n\nform {\n  border: 3px solid #f1f1f1;\n}\n\n/* Style the input container */\n\n.input-container {\n  display: flex;\n  width: 100%;\n  margin-bottom: 15px;\n}\n\n.input-container-disabled {\n  display: none;\n}\n\n/* Style the form icons */\n\n.icon {\n  padding: 10px;\n  background: dodgerblue;\n  color: white;\n  min-width: 50px;\n  text-align: center;\n}\n\n.gender_icon {\n  padding: 10px;\n  background: dodgerblue;\n  color: white;\n  min-width: 50px;\n  text-align: center;\n}\n\n/* Style the input fields */\n\n.input-field {\n  width: 100%;\n  padding: 10px;\n  outline: none;\n}\n\n.input-field:focus {\n  border: 2px solid dodgerblue;\n}\n\n.error-container {\n  display: block;\n}\n\n/* Set a style for the submit button */\n\n.btn {\n  color: black;\n  padding: 15px 20px;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  opacity: 0.9;\n}\n\n.invalid-feedback {\n  color: red;\n  float: right;\n}\n\n/* Center the loader */\n\n#loader {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  z-index: 1;\n  width: 120px;\n  height: 120px;\n  border: 16px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 16px solid #3498db;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite;\n  margin-top: 200px;\n}\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.btn:hover {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL0M6XFxVc2Vyc1xcVVNFUlxcY3ZtXFxjdm1fZnJvbnRlbmQvc3JjXFxhcHBcXHNpZ251cFxcc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURDQTtFQUNFLFVBQUE7QUNFRjs7QURBQTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtBQ0dGOztBRERBO0VBQ0Usb0JBQUE7RUFDQSxXQUFBO0FDSUY7O0FERkE7RUFDRSxvQkFBQTtFQUNBLFdBQUE7QUNLRjs7QURIQTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtBQ01GOztBREpBO0VBR00sNENBQUE7RUFDQSxhQUFBO0FDS047O0FESEk7RUFDSSx5QkFBQTtBQ01SOztBREhJLDhCQUFBOztBQUNBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ01OOztBREpLO0VBQ0MsYUFBQTtBQ09OOztBREhJLHlCQUFBOztBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ01OOztBREpJO0VBRVEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ01aOztBREZJLDJCQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FDS047O0FERkk7RUFDRSw0QkFBQTtBQ0tOOztBREhJO0VBQ0UsY0FBQTtBQ01OOztBREhJLHNDQUFBOztBQUNBO0VBR0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0lOOztBRERJO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUNJTjs7QURESSxzQkFBQTs7QUFDSjtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFFQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUJBQUE7QUNHRjs7QURBQTtFQUNFO0lBQUssK0JBQUE7RUNJTDtFREhBO0lBQU8saUNBQUE7RUNNUDtBQUNGOztBREpBO0VBQ0U7SUFBSyx1QkFBQTtFQ09MO0VETkE7SUFBTyx5QkFBQTtFQ1NQO0FBQ0Y7O0FEUEk7RUFDRSxVQUFBO0FDU04iLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxubGFiZWx7XHJcbiAgd2lkdGg6IDIwJTtcclxufVxyXG4uZXJyb3ItY29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5lbWFpbC1jb250YWluZXJ7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm1vYmlsZS1jb250YWluZXJ7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnBhc3N3b3JkLWNvbnRhaW5lcntcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5kaXYuY29udGFpbmVyLWZsdWlke1xyXG4gICAgXHJcbiAgICAgIFxyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NywgMjAyLCAyMDIsIDAuNzc0KTtcclxuICAgICAgcGFkZGluZzogMzBweDtcclxuICAgIH1cclxuICAgIGZvcm0ge1xyXG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNmMWYxZjE7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgLyogU3R5bGUgdGhlIGlucHV0IGNvbnRhaW5lciAqL1xyXG4gICAgLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgIC5pbnB1dC1jb250YWluZXItZGlzYWJsZWQge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyogU3R5bGUgdGhlIGZvcm0gaWNvbnMgKi9cclxuICAgIC5pY29uIHtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgYmFja2dyb3VuZDogZG9kZ2VyYmx1ZTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBtaW4td2lkdGg6IDUwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5nZW5kZXJfaWNvbntcclxuICAgICAgICBcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogZG9kZ2VyYmx1ZTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKiBTdHlsZSB0aGUgaW5wdXQgZmllbGRzICovXHJcbiAgICAuaW5wdXQtZmllbGQge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmlucHV0LWZpZWxkOmZvY3VzIHtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgZG9kZ2VyYmx1ZTtcclxuICAgIH1cclxuICAgIC5lcnJvci1jb250YWluZXJ7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKiBTZXQgYSBzdHlsZSBmb3IgdGhlIHN1Ym1pdCBidXR0b24gKi9cclxuICAgIC5idG4ge1xyXG4gICAgICAgIFxyXG4gICAgICBcclxuICAgICAgY29sb3I6YmxhY2s7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgLmludmFsaWQtZmVlZGJhY2t7XHJcbiAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyogQ2VudGVyIHRoZSBsb2FkZXIgKi9cclxuI2xvYWRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDUwJTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG4gIFxyXG4gIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXItdG9wOiAxNnB4IHNvbGlkICMzNDk4ZGI7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgbWFyZ2luLXRvcDogMjAwcHg7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbn1cclxuXHJcbiAgICAuYnRuOmhvdmVyIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH0iLCJoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxubGFiZWwge1xuICB3aWR0aDogMjAlO1xufVxuXG4uZXJyb3ItY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZW1haWwtY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubW9iaWxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnBhc3N3b3JkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuZGl2LmNvbnRhaW5lci1mbHVpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg3LCAyMDIsIDIwMiwgMC43NzQpO1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG5mb3JtIHtcbiAgYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTtcbn1cblxuLyogU3R5bGUgdGhlIGlucHV0IGNvbnRhaW5lciAqL1xuLmlucHV0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uaW5wdXQtY29udGFpbmVyLWRpc2FibGVkIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogU3R5bGUgdGhlIGZvcm0gaWNvbnMgKi9cbi5pY29uIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogZG9kZ2VyYmx1ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBtaW4td2lkdGg6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmdlbmRlcl9pY29uIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogZG9kZ2VyYmx1ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBtaW4td2lkdGg6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogU3R5bGUgdGhlIGlucHV0IGZpZWxkcyAqL1xuLmlucHV0LWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5pbnB1dC1maWVsZDpmb2N1cyB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGRvZGdlcmJsdWU7XG59XG5cbi5lcnJvci1jb250YWluZXIge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogU2V0IGEgc3R5bGUgZm9yIHRoZSBzdWJtaXQgYnV0dG9uICovXG4uYnRuIHtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTAwJTtcbiAgb3BhY2l0eTogMC45O1xufVxuXG4uaW52YWxpZC1mZWVkYmFjayB7XG4gIGNvbG9yOiByZWQ7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLyogQ2VudGVyIHRoZSBsb2FkZXIgKi9cbiNsb2FkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjMzQ5OGRiO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG4gIG1hcmdpbi10b3A6IDIwMHB4O1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbi5idG46aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/must-match.validator */ "./src/app/_helpers/must-match.validator.ts");
/* harmony import */ var _helpers_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_helpers/alert.service */ "./src/app/_helpers/alert.service.ts");







let SignupComponent = class SignupComponent {
    constructor(formBuilder, router, auth, alertService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.auth = auth;
        this.alertService = alertService;
        this.loading = false;
        this.isSuccessful = false;
        this.isSignUpFailed = false;
        this.submitted = false;
    }
    ngOnInit() {
        this.signupForm = this.formBuilder.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            confirmpassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            firstname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            confirmemail: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            mobile: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            confirmmobile: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            usertype: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fonction: [null],
            secteur: [null],
            civilite: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            raisonsociale: [null],
            nomsociete: [null],
            clientcode: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            role: [{ value: "basic", disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        }, {
            validator: [Object(_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_5__["MustMatch"])('email', 'confirmemail'), Object(_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_5__["MustMatch"])('mobile', 'confirmmobile')]
        });
        this.signupForm.reset();
    }
    get f() { return this.signupForm.controls; }
    randomString() {
        var chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
        var string_length = 1;
        var randomstring = '';
        var chars2 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ";
        var string_length2 = 2;
        var randomstring2 = '';
        for (var i = 0; i < string_length; i++) {
            var rnum = Math.floor(Math.random() * chars.length);
            randomstring += chars.substring(rnum, rnum + 1);
        }
        for (var j = 0; j < string_length2; j++) {
            var rnum2 = Math.floor(Math.random() * chars2.length);
            randomstring2 += chars2.substring(rnum2, rnum2 + 1);
        }
        this.signupForm.patchValue({ clientcode: randomstring + randomstring2 });
    }
    onSignup() {
        this.loading = true;
        this.submitted = true;
        if (this.signupForm.invalid) {
            return this.loading = false;
        }
        const email = this.signupForm.get('email').value;
        const mobile = this.signupForm.get('mobile').value;
        const usertype = this.signupForm.get('usertype').value;
        const password = this.signupForm.get('password').value;
        const confirmpassword = this.signupForm.get('confirmpassword').value;
        const firstname = this.signupForm.get('firstname').value;
        const lastname = this.signupForm.get('lastname').value;
        const fonction = this.signupForm.get('fonction').value;
        const secteur = this.signupForm.get('secteur').value;
        const civilite = this.signupForm.get('civilite').value;
        const raisonsociale = this.signupForm.get('raisonsociale').value;
        const nomsociete = this.signupForm.get('nomsociete').value;
        const clientcode = this.signupForm.get('clientcode').value;
        const role = this.signupForm.get('role').value;
        this.auth.register(email, password, confirmpassword, mobile, usertype, firstname, lastname, fonction, secteur, civilite, raisonsociale, nomsociete, clientcode, role).subscribe({
            next: data => {
                this.alertService.success(data.message);
                window.scrollTo(0, 0);
                this.isSuccessful = true;
                this.isSignUpFailed = false;
                this.loading = false;
                this.router.navigate(['login']);
            },
            error: error => {
                this.alertService.error(error.error.error);
                window.scrollTo(0, 0);
                this.loading = false;
                this.isSignUpFailed = true;
            }
        });
    }
    onReset() {
        this.submitted = false;
        this.signupForm.reset();
    }
};
SignupComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _helpers_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.scss */ "./src/app/signup/signup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _helpers_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]])
], SignupComponent);



/***/ }),

/***/ "./src/app/supervisor-board/supervisor-board.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/supervisor-board/supervisor-board.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  color: black;\n  margin: 0;\n  font-size: 25px;\n}\n\n.topleft {\n  position: relative;\n  top: 0;\n  left: 16px;\n}\n\n.bottomleft {\n  position: relative;\n  bottom: 0;\n  left: 16px;\n}\n\n.middle {\n  position: relative;\n  top: 20%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n\nhr {\n  margin: auto;\n  width: 40%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VwZXJ2aXNvci1ib2FyZC9DOlxcVXNlcnNcXFVTRVJcXGN2bVxcY3ZtX2Zyb250ZW5kL3NyY1xcYXBwXFxzdXBlcnZpc29yLWJvYXJkXFxzdXBlcnZpc29yLWJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdXBlcnZpc29yLWJvYXJkL3N1cGVydmlzb3ItYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFHRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDSEo7O0FETUU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FDSEo7O0FETUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDSEo7O0FETUU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtBQ0hKOztBRE1FO0VBQ0UsWUFBQTtFQUNBLFVBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL3N1cGVydmlzb3ItYm9hcmQvc3VwZXJ2aXNvci1ib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuICAuY29udGFpbmVyIHtcclxuICAgIFxyXG4gICAgXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICB9XHJcblxyXG4gIC50b3BsZWZ0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAuYm90dG9tbGVmdCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLm1pZGRsZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDIwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgaHIge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICB9IiwiLmNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLnRvcGxlZnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgbGVmdDogMTZweDtcbn1cblxuLmJvdHRvbWxlZnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMTZweDtcbn1cblxuLm1pZGRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyMCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaHIge1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA0MCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/supervisor-board/supervisor-board.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/supervisor-board/supervisor-board.component.ts ***!
  \****************************************************************/
/*! exports provided: SupervisorBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupervisorBoardComponent", function() { return SupervisorBoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SupervisorBoardComponent = class SupervisorBoardComponent {
    constructor() { }
    ngOnInit() {
    }
};
SupervisorBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-supervisor-board',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./supervisor-board.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/supervisor-board/supervisor-board.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./supervisor-board.component.scss */ "./src/app/supervisor-board/supervisor-board.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SupervisorBoardComponent);



/***/ }),

/***/ "./src/app/user-board/user-board.component.scss":
/*!******************************************************!*\
  !*** ./src/app/user-board/user-board.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2 {\n  text-align: center;\n}\n\n#loader {\n  position: relative;\n  left: 50%;\n  top: 50%;\n  z-index: 1;\n  width: 120px;\n  height: 120px;\n  border: 16px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 16px solid #3498db;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite;\n  margin-top: 200px;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n  border: 1px solid #ddd;\n}\n\nth, td {\n  text-align: left;\n  padding: 8px;\n}\n\ntr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1ib2FyZC9DOlxcVXNlcnNcXFVTRVJcXGN2bVxcY3ZtX2Zyb250ZW5kL3NyY1xcYXBwXFx1c2VyLWJvYXJkXFx1c2VyLWJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91c2VyLWJvYXJkL3VzZXItYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxrQkFBQTtBQ0ZKOztBRElFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUVBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQkFBQTtBQ0ZKOztBRElFO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQ0RKOztBRElFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FDREo7O0FESUU7RUFBbUIseUJBQUE7QUNBckIiLCJmaWxlIjoic3JjL2FwcC91c2VyLWJvYXJkL3VzZXItYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG5oMntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgI2xvYWRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgXHJcbiAgICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlci10b3A6IDE2cHggc29saWQgIzM0OThkYjtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICBtYXJnaW4tdG9wOiAyMDBweDtcclxuICAgIH1cclxuICB0YWJsZSB7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgfVxyXG4gIFxyXG4gIHRoLCB0ZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gIH1cclxuICBcclxuICB0cjpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMn0iLCJoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2xvYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xuICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItdG9wOiAxNnB4IHNvbGlkICMzNDk4ZGI7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgbWFyZ2luLXRvcDogMjAwcHg7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xufVxuXG50aCwgdGQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbnRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG59Il19 */");

/***/ }),

/***/ "./src/app/user-board/user-board.component.ts":
/*!****************************************************!*\
  !*** ./src/app/user-board/user-board.component.ts ***!
  \****************************************************/
/*! exports provided: UserBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserBoardComponent", function() { return UserBoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/token-storage.service */ "./src/app/services/token-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_condidate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/condidate.service */ "./src/app/services/condidate.service.ts");





let UserBoardComponent = class UserBoardComponent {
    constructor(Auth, cond, router) {
        this.Auth = Auth;
        this.cond = cond;
        this.router = router;
        this.isLoggedIn = false;
        this.loading = false;
        this.condidates = [];
    }
    ngOnInit() {
        const user = this.Auth.getUser();
        this.usertype = user.usertype;
        this.email = user.email;
        this.loading = true;
        this.condidatesSub = this.cond.condidates$.subscribe((condidates) => {
            this.condidates = condidates;
            this.loading = false;
        }, (error) => {
            this.loading = false;
            this.errormsg = error.message;
        });
        this.cond.getCondidate(this.email);
    }
    getNavigation(link, id) {
        this.cond.getCondidateById(id);
        this.router.navigate([link + '/' + id]);
    }
};
UserBoardComponent.ctorParameters = () => [
    { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"] },
    { type: _services_condidate_service__WEBPACK_IMPORTED_MODULE_4__["CondidateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
UserBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-board',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-board.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-board/user-board.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-board.component.scss */ "./src/app/user-board/user-board.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"],
        _services_condidate_service__WEBPACK_IMPORTED_MODULE_4__["CondidateService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], UserBoardComponent);



/***/ }),

/***/ "./src/app/verify-email/verify-email.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/verify-email/verify-email.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Center the loader */\n.loader {\n  position: relative;\n  left: 50%;\n  top: 50%;\n  z-index: 1;\n  width: 120px;\n  height: 120px;\n  border: 16px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 16px solid #3498db;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite;\n  margin-top: 200px;\n}\n.team-member .icon-box-success {\n  color: #fff;\n  position: relative;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  top: -70px;\n  width: 95px;\n  height: 95px;\n  border-radius: 50%;\n  z-index: 9;\n  background: #82ce34;\n  padding: 15px;\n  text-align: center;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);\n}\n.team-member .icon-box-success i {\n  font-size: 58px;\n  position: relative;\n  top: 3px;\n}\n.team-member .icon-box-failure {\n  color: #fff;\n  position: relative;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  top: -70px;\n  width: 95px;\n  height: 95px;\n  border-radius: 50%;\n  z-index: 9;\n  background: red;\n  padding: 15px;\n  text-align: center;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);\n}\n.team-member .icon-box-failure i {\n  font-size: 58px;\n  position: relative;\n  top: 3px;\n}\n.team-section {\n  font-family: arial;\n  text-align: center;\n  padding: 70px 0px;\n  background-color: #d0d5da;\n}\na {\n  color: black;\n}\n.button-green {\n  background-color: #4CAF50;\n  /* Green */\n  border: none;\n  color: white;\n  padding: 20px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px 2px;\n  cursor: pointer;\n}\n.button5 {\n  border-radius: 50%;\n}\n.button-red {\n  background-color: red;\n  /* Green */\n  border: none;\n  color: white;\n  padding: 20px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px 2px;\n  cursor: pointer;\n}\n.team-section h2 {\n  color: #3b5997;\n  font-size: 40px;\n}\n.team-section p {\n  font-size: 16px;\n  color: #656565;\n  margin: 0px 0px 20px;\n  text-align: center;\n}\n.team-member {\n  width: 100%;\n  float: left;\n  padding: 25px 15px;\n  background-color: #fff;\n  border-radius: 10px;\n  border: 1px solid #eee;\n  margin-top: 30px;\n  box-shadow: 0px 8px 0px 0px #9E9E9E;\n  transition: 0.5s;\n}\n.team-member:hover {\n  box-shadow: 0px -8px 0px 0px #9e9e9e;\n}\n.team-member h3 {\n  font-size: 24px;\n  margin: 15px 0px 0px;\n}\n.team-member h5 {\n  margin: 10px 0px 10px;\n  color: #8a8a8a;\n  display: inline-block;\n}\n.team-member p {\n  font-size: 16px;\n  color: #8a8a8a;\n}\n.team-member .photo {\n  width: 90px;\n  height: 90px;\n  border-radius: 100%;\n  overflow: hidden;\n  border: 1px solid #9E9E9E;\n  margin: 0 auto;\n  background-color: #ffffff;\n  padding: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVyaWZ5LWVtYWlsL0M6XFxVc2Vyc1xcVVNFUlxcY3ZtXFxjdm1fZnJvbnRlbmQvc3JjXFxhcHBcXHZlcmlmeS1lbWFpbFxcdmVyaWZ5LWVtYWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92ZXJpZnktZW1haWwvdmVyaWZ5LWVtYWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNCQUFBO0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBRUEsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsMENBQUE7RUFDQSxrQ0FBQTtFQUNBLGlCQUFBO0FDQUo7QURFRTtFQUNELFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7QUNDRDtBRENBO0VBQ0MsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQ0VEO0FEQUE7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7QUNHRDtBRERBO0VBQ0MsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQ0lEO0FERkU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQ0tKO0FESEE7RUFDSSxZQUFBO0FDTUo7QURKQTtFQUNJLHlCQUFBO0VBQTJCLFVBQUE7RUFDM0IsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDUUo7QURKRTtFQUFVLGtCQUFBO0FDUVo7QURQRTtFQUNFLHFCQUFBO0VBQXNCLFVBQUE7RUFDdEIsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDV0o7QURUQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDWUo7QURUQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ1lKO0FEVkE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0FDYUo7QURYQTtFQUNJLG9DQUFBO0FDY0o7QURaQTtFQUNJLGVBQUE7RUFDQSxvQkFBQTtBQ2VKO0FEYkE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQ2dCSjtBRGRBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNpQko7QURmQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ2tCSiIsImZpbGUiOiJzcmMvYXBwL3ZlcmlmeS1lbWFpbC92ZXJpZnktZW1haWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDZW50ZXIgdGhlIGxvYWRlciAqL1xyXG4ubG9hZGVyIHtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlIDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICBcclxuICAgIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjMzQ5OGRiO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIG1hcmdpbi10b3A6IDIwMHB4O1xyXG4gIH1cclxuICAudGVhbS1tZW1iZXIgLmljb24tYm94LXN1Y2Nlc3Mge1xyXG5cdGNvbG9yOiAjZmZmO1x0XHRcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcblx0bGVmdDogMDtcclxuXHRyaWdodDogMDtcclxuXHR0b3A6IC03MHB4O1xyXG5cdHdpZHRoOiA5NXB4O1xyXG5cdGhlaWdodDogOTVweDtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0ei1pbmRleDogOTtcclxuXHRiYWNrZ3JvdW5kOiAjODJjZTM0O1xyXG5cdHBhZGRpbmc6IDE1cHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG4udGVhbS1tZW1iZXIgLmljb24tYm94LXN1Y2Nlc3MgaSB7XHJcblx0Zm9udC1zaXplOiA1OHB4O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR0b3A6IDNweDtcclxufVxyXG4udGVhbS1tZW1iZXIgLmljb24tYm94LWZhaWx1cmUge1xyXG5cdGNvbG9yOiAjZmZmO1x0XHRcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcblx0bGVmdDogMDtcclxuXHRyaWdodDogMDtcclxuXHR0b3A6IC03MHB4O1xyXG5cdHdpZHRoOiA5NXB4O1xyXG5cdGhlaWdodDogOTVweDtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0ei1pbmRleDogOTtcclxuXHRiYWNrZ3JvdW5kOnJlZDtcclxuXHRwYWRkaW5nOiAxNXB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuLnRlYW0tbWVtYmVyIC5pY29uLWJveC1mYWlsdXJlIGkge1xyXG5cdGZvbnQtc2l6ZTogNThweDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0dG9wOiAzcHg7XHJcbn1cclxuICAudGVhbS1zZWN0aW9uIHtcclxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDcwcHggMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QwZDVkYTtcclxufVxyXG5he1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5idXR0b24tZ3JlZW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDsgLyogR3JlZW4gKi9cclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW46IDRweCAycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5idXR0b241IHtib3JkZXItcmFkaXVzOiA1MCU7fVxyXG4gIC5idXR0b24tcmVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmVkOyAvKiBHcmVlbiAqL1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbjogNHB4IDJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbi50ZWFtLXNlY3Rpb24gaDIge1xyXG4gICAgY29sb3I6ICMzYjU5OTc7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBcclxufVxyXG4udGVhbS1zZWN0aW9uIHAge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM2NTY1NjU7XHJcbiAgICBtYXJnaW46IDBweCAwcHggMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udGVhbS1tZW1iZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmc6IDI1cHggMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDBweCAwcHggIzlFOUU5RTtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuLnRlYW0tbWVtYmVyOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAtOHB4IDBweCAwcHggIzllOWU5ZTtcclxufVxyXG4udGVhbS1tZW1iZXIgaDMge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbWFyZ2luOiAxNXB4IDBweCAwcHg7XHJcbn1cclxuLnRlYW0tbWVtYmVyIGg1IHtcclxuICAgIG1hcmdpbjogMTBweCAwcHggMTBweDtcclxuICAgIGNvbG9yOiAjOGE4YThhO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi50ZWFtLW1lbWJlciBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjOGE4YThhO1xyXG59XHJcbi50ZWFtLW1lbWJlciAucGhvdG8ge1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5RTlFOUU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbn1cclxuIiwiLyogQ2VudGVyIHRoZSBsb2FkZXIgKi9cbi5sb2FkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjMzQ5OGRiO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG4gIG1hcmdpbi10b3A6IDIwMHB4O1xufVxuXG4udGVhbS1tZW1iZXIgLmljb24tYm94LXN1Y2Nlc3Mge1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogLTcwcHg7XG4gIHdpZHRoOiA5NXB4O1xuICBoZWlnaHQ6IDk1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgei1pbmRleDogOTtcbiAgYmFja2dyb3VuZDogIzgyY2UzNDtcbiAgcGFkZGluZzogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi50ZWFtLW1lbWJlciAuaWNvbi1ib3gtc3VjY2VzcyBpIHtcbiAgZm9udC1zaXplOiA1OHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogM3B4O1xufVxuXG4udGVhbS1tZW1iZXIgLmljb24tYm94LWZhaWx1cmUge1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogLTcwcHg7XG4gIHdpZHRoOiA5NXB4O1xuICBoZWlnaHQ6IDk1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgei1pbmRleDogOTtcbiAgYmFja2dyb3VuZDogcmVkO1xuICBwYWRkaW5nOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLnRlYW0tbWVtYmVyIC5pY29uLWJveC1mYWlsdXJlIGkge1xuICBmb250LXNpemU6IDU4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAzcHg7XG59XG5cbi50ZWFtLXNlY3Rpb24ge1xuICBmb250LWZhbWlseTogYXJpYWw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNzBweCAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMGQ1ZGE7XG59XG5cbmEge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5idXR0b24tZ3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICAvKiBHcmVlbiAqL1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDRweCAycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ1dHRvbjUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5idXR0b24tcmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAvKiBHcmVlbiAqL1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDRweCAycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRlYW0tc2VjdGlvbiBoMiB7XG4gIGNvbG9yOiAjM2I1OTk3O1xuICBmb250LXNpemU6IDQwcHg7XG59XG5cbi50ZWFtLXNlY3Rpb24gcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM2NTY1NjU7XG4gIG1hcmdpbjogMHB4IDBweCAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50ZWFtLW1lbWJlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMjVweCAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBib3gtc2hhZG93OiAwcHggOHB4IDBweCAwcHggIzlFOUU5RTtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLnRlYW0tbWVtYmVyOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMHB4IC04cHggMHB4IDBweCAjOWU5ZTllO1xufVxuXG4udGVhbS1tZW1iZXIgaDMge1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbjogMTVweCAwcHggMHB4O1xufVxuXG4udGVhbS1tZW1iZXIgaDUge1xuICBtYXJnaW46IDEwcHggMHB4IDEwcHg7XG4gIGNvbG9yOiAjOGE4YThhO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi50ZWFtLW1lbWJlciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzhhOGE4YTtcbn1cblxuLnRlYW0tbWVtYmVyIC5waG90byB7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5RTlFOUU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiA0cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/verify-email/verify-email.component.ts":
/*!********************************************************!*\
  !*** ./src/app/verify-email/verify-email.component.ts ***!
  \********************************************************/
/*! exports provided: VerifyEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyEmailComponent", function() { return VerifyEmailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _helpers_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/alert.service */ "./src/app/_helpers/alert.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");





var EmailStatus;
(function (EmailStatus) {
    EmailStatus[EmailStatus["Verifying"] = 0] = "Verifying";
    EmailStatus[EmailStatus["Failed"] = 1] = "Failed";
    EmailStatus[EmailStatus["Success"] = 2] = "Success";
})(EmailStatus || (EmailStatus = {}));
let VerifyEmailComponent = class VerifyEmailComponent {
    constructor(route, router, accountService, alertService) {
        this.route = route;
        this.router = router;
        this.accountService = accountService;
        this.alertService = alertService;
        this.EmailStatus = EmailStatus;
        this.emailStatus = EmailStatus.Verifying;
    }
    ngOnInit() {
        this.emailStatus = EmailStatus.Verifying;
        this.route.params.subscribe((params) => {
            this.token = params.token;
        });
        // remove token from url to prevent http referer leakage
        this.router.navigate([], { relativeTo: this.route, replaceUrl: true });
        this.accountService.verifyEmail(this.token).then((success) => {
            this.alertService.success(success.message);
            window.scrollTo(0, 0);
            this.emailStatus = EmailStatus.Success;
        }, (error) => {
            this.emailStatus = EmailStatus.Failed;
            this.alertService.error(error.error.error);
            window.scrollTo(0, 0);
        });
    }
    onlogin() {
        this.router.navigate(['login']);
        this.reloadPage();
    }
    reloadPage() {
        setTimeout(() => window.location.reload(), 3000);
    }
    onforgot() {
        this.router.navigate(['forgot-password']);
    }
};
VerifyEmailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _helpers_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }
];
VerifyEmailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ selector: 'app-verify-email',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./verify-email.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/verify-email/verify-email.component.html")).default, styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./verify-email.component.scss */ "./src/app/verify-email/verify-email.component.scss")).default] }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        _helpers_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
], VerifyEmailComponent);



/***/ }),

/***/ "./src/app/view-condidate/view-condidate.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/view-condidate/view-condidate.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  /* Add shadows to create the \"card\" effect */\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  margin-left: 20%;\n}\n\nh2 {\n  margin-left: 20%;\n}\n\n/* On mouse-over, add a deeper shadow */\n\n.card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n\n/* Add some padding inside the card container */\n\n.container-fluid {\n  padding: 2px 16px;\n}\n\nbutton {\n  margin-left: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1jb25kaWRhdGUvQzpcXFVzZXJzXFxVU0VSXFxjdm1cXGN2bV9mcm9udGVuZC9zcmNcXGFwcFxcdmlldy1jb25kaWRhdGVcXHZpZXctY29uZGlkYXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3LWNvbmRpZGF0ZS92aWV3LWNvbmRpZGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRDQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxnQkFBQTtBQ0VKOztBRENFLHVDQUFBOztBQUNBO0VBQ0UsMkNBQUE7QUNFSjs7QURDRSwrQ0FBQTs7QUFDQTtFQUNFLGlCQUFBO0FDRUo7O0FEQUU7RUFDRSxnQkFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvdmlldy1jb25kaWRhdGUvdmlldy1jb25kaWRhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgICAvKiBBZGQgc2hhZG93cyB0byBjcmVhdGUgdGhlIFwiY2FyZFwiIGVmZmVjdCAqL1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgfVxyXG4gIGgye1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICB9XHJcbiAgXHJcbiAgLyogT24gbW91c2Utb3ZlciwgYWRkIGEgZGVlcGVyIHNoYWRvdyAqL1xyXG4gIC5jYXJkOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEFkZCBzb21lIHBhZGRpbmcgaW5zaWRlIHRoZSBjYXJkIGNvbnRhaW5lciAqL1xyXG4gIC5jb250YWluZXItZmx1aWQge1xyXG4gICAgcGFkZGluZzogMnB4IDE2cHg7XHJcbiAgfVxyXG4gIGJ1dHRvbntcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgfSIsIi5jYXJkIHtcbiAgLyogQWRkIHNoYWRvd3MgdG8gY3JlYXRlIHRoZSBcImNhcmRcIiBlZmZlY3QgKi9cbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBtYXJnaW4tbGVmdDogMjAlO1xufVxuXG5oMiB7XG4gIG1hcmdpbi1sZWZ0OiAyMCU7XG59XG5cbi8qIE9uIG1vdXNlLW92ZXIsIGFkZCBhIGRlZXBlciBzaGFkb3cgKi9cbi5jYXJkOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLyogQWRkIHNvbWUgcGFkZGluZyBpbnNpZGUgdGhlIGNhcmQgY29udGFpbmVyICovXG4uY29udGFpbmVyLWZsdWlkIHtcbiAgcGFkZGluZzogMnB4IDE2cHg7XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/view-condidate/view-condidate.component.ts":
/*!************************************************************!*\
  !*** ./src/app/view-condidate/view-condidate.component.ts ***!
  \************************************************************/
/*! exports provided: ViewCondidateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCondidateComponent", function() { return ViewCondidateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/token-storage.service */ "./src/app/services/token-storage.service.ts");
/* harmony import */ var _services_condidate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/condidate.service */ "./src/app/services/condidate.service.ts");





let ViewCondidateComponent = class ViewCondidateComponent {
    constructor(router, route, cond, token) {
        this.router = router;
        this.route = route;
        this.cond = cond;
        this.token = token;
    }
    ngOnInit() {
        this.loading = true;
        this.currentUser = this.token.getUser();
        this.route.params.subscribe((params) => {
            this.cond.getCondidateById(params.id).then((condidate) => {
                this.loading = false;
                this.condidate = condidate;
            });
        });
    }
    getNavigation(link, id) {
        this.router.navigate([link + '/' + id]);
    }
    onDelete() {
        this.loading = true;
        this.route.params.subscribe((params) => {
            this.cond.deleteCondidate(params.id).then(() => {
                this.loading = false;
                this.router.navigate(['']);
            }, (error) => {
                this.loading = false;
                this.errormsg = error.error;
                this.router.navigate(['home']);
            });
        });
    }
};
ViewCondidateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_condidate_service__WEBPACK_IMPORTED_MODULE_4__["CondidateService"] },
    { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"] }
];
ViewCondidateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-condidate',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-condidate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-condidate/view-condidate.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-condidate.component.scss */ "./src/app/view-condidate/view-condidate.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_condidate_service__WEBPACK_IMPORTED_MODULE_4__["CondidateService"],
        _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]])
], ViewCondidateComponent);



/***/ }),

/***/ "./src/app/view-contactreq/view-contactreq.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/view-contactreq/view-contactreq.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  /* Add shadows to create the \"card\" effect */\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  margin-left: 20%;\n}\n\nh2 {\n  margin-left: 20%;\n}\n\n/* On mouse-over, add a deeper shadow */\n\n.card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n\n/* Add some padding inside the card container */\n\n.container-fluid {\n  padding: 2px 16px;\n}\n\nbutton {\n  margin-left: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1jb250YWN0cmVxL0M6XFxVc2Vyc1xcVVNFUlxcY3ZtXFxjdm1fZnJvbnRlbmQvc3JjXFxhcHBcXHZpZXctY29udGFjdHJlcVxcdmlldy1jb250YWN0cmVxLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3LWNvbnRhY3RyZXEvdmlldy1jb250YWN0cmVxLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNENBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDRTtFQUNFLGdCQUFBO0FDRUo7O0FEQ0UsdUNBQUE7O0FBQ0E7RUFDRSwyQ0FBQTtBQ0VKOztBRENFLCtDQUFBOztBQUNBO0VBQ0UsaUJBQUE7QUNFSjs7QURBRTtFQUNFLGdCQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC92aWV3LWNvbnRhY3RyZXEvdmlldy1jb250YWN0cmVxLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gICAgLyogQWRkIHNoYWRvd3MgdG8gY3JlYXRlIHRoZSBcImNhcmRcIiBlZmZlY3QgKi9cclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gIH1cclxuICBoMntcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIE9uIG1vdXNlLW92ZXIsIGFkZCBhIGRlZXBlciBzaGFkb3cgKi9cclxuICAuY2FyZDpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjIpO1xyXG4gIH1cclxuICBcclxuICAvKiBBZGQgc29tZSBwYWRkaW5nIGluc2lkZSB0aGUgY2FyZCBjb250YWluZXIgKi9cclxuICAuY29udGFpbmVyLWZsdWlkIHtcclxuICAgIHBhZGRpbmc6IDJweCAxNnB4O1xyXG4gIH1cclxuICBidXR0b257XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gIH0iLCIuY2FyZCB7XG4gIC8qIEFkZCBzaGFkb3dzIHRvIGNyZWF0ZSB0aGUgXCJjYXJkXCIgZWZmZWN0ICovXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcbn1cblxuaDIge1xuICBtYXJnaW4tbGVmdDogMjAlO1xufVxuXG4vKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBkZWVwZXIgc2hhZG93ICovXG4uY2FyZDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi8qIEFkZCBzb21lIHBhZGRpbmcgaW5zaWRlIHRoZSBjYXJkIGNvbnRhaW5lciAqL1xuLmNvbnRhaW5lci1mbHVpZCB7XG4gIHBhZGRpbmc6IDJweCAxNnB4O1xufVxuXG5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMTAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/view-contactreq/view-contactreq.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/view-contactreq/view-contactreq.component.ts ***!
  \**************************************************************/
/*! exports provided: ViewContactreqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewContactreqComponent", function() { return ViewContactreqComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/token-storage.service */ "./src/app/services/token-storage.service.ts");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/contact.service */ "./src/app/services/contact.service.ts");





let ViewContactreqComponent = class ViewContactreqComponent {
    constructor(router, route, cont, token) {
        this.router = router;
        this.route = route;
        this.cont = cont;
        this.token = token;
    }
    ngOnInit() {
        this.loading = true;
        this.currentUser = this.token.getUser();
        this.route.params.subscribe((params) => {
            this.cont.getContactreqById(params.id).then((contact) => {
                this.loading = false;
                this.contact = contact;
            });
        });
    }
    getNavigation(link, id) {
        this.router.navigate([link + '/' + id]);
    }
};
ViewContactreqComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_contact_service__WEBPACK_IMPORTED_MODULE_4__["ContactService"] },
    { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"] }
];
ViewContactreqComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-contactreq',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-contactreq.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-contactreq/view-contactreq.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-contactreq.component.scss */ "./src/app/view-contactreq/view-contactreq.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_contact_service__WEBPACK_IMPORTED_MODULE_4__["ContactService"],
        _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]])
], ViewContactreqComponent);



/***/ }),

/***/ "./src/app/view-event/view-event.component.scss":
/*!******************************************************!*\
  !*** ./src/app/view-event/view-event.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#loader {\n  position: relative;\n  left: 50%;\n  top: 50%;\n  z-index: 1;\n  width: 120px;\n  height: 120px;\n  border: 16px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 16px solid #3498db;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite;\n  margin-top: 200px;\n}\n\n.center {\n  text-align: center;\n  border: 3px solid lightgrey;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n  border: 1px solid #ddd;\n}\n\nth, td {\n  text-align: left;\n  padding: 8px;\n  min-width: 150px;\n}\n\ntr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1ldmVudC9DOlxcVXNlcnNcXFVTRVJcXGN2bVxcY3ZtX2Zyb250ZW5kL3NyY1xcYXBwXFx2aWV3LWV2ZW50XFx2aWV3LWV2ZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3LWV2ZW50L3ZpZXctZXZlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBRUEsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsMENBQUE7RUFDQSxrQ0FBQTtFQUNBLGlCQUFBO0FDQUo7O0FERUk7RUFDRSxrQkFBQTtFQUNBLDJCQUFBO0FDQ047O0FEQ0U7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FDRUo7O0FEQ0U7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0VKOztBRENFO0VBQW1CLHlCQUFBO0FDR3JCIiwiZmlsZSI6InNyYy9hcHAvdmlldy1ldmVudC92aWV3LWV2ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xvYWRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgXHJcbiAgICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlci10b3A6IDE2cHggc29saWQgIzM0OThkYjtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICBtYXJnaW4tdG9wOiAyMDBweDtcclxuICAgIH1cclxuICAgIC5jZW50ZXIge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGJvcmRlcjogM3B4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICAgIH1cclxuICB0YWJsZSB7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgfVxyXG4gIFxyXG4gIHRoLCB0ZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICB9XHJcbiAgXHJcbiAgdHI6bnRoLWNoaWxkKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjJ9IiwiI2xvYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xuICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItdG9wOiAxNnB4IHNvbGlkICMzNDk4ZGI7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgbWFyZ2luLXRvcDogMjAwcHg7XG59XG5cbi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogM3B4IHNvbGlkIGxpZ2h0Z3JleTtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG59XG5cbnRoLCB0ZCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWluLXdpZHRoOiAxNTBweDtcbn1cblxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/view-event/view-event.component.ts":
/*!****************************************************!*\
  !*** ./src/app/view-event/view-event.component.ts ***!
  \****************************************************/
/*! exports provided: ViewEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEventComponent", function() { return ViewEventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/token-storage.service */ "./src/app/services/token-storage.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _helpers_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/alert.service */ "./src/app/_helpers/alert.service.ts");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/event.service */ "./src/app/services/event.service.ts");







let ViewEventComponent = class ViewEventComponent {
    constructor(router, route, usersservice, apiservice, token, alertService) {
        this.router = router;
        this.route = route;
        this.usersservice = usersservice;
        this.apiservice = apiservice;
        this.token = token;
        this.alertService = alertService;
    }
    ngOnInit() {
        this.loading = true;
        this.currentUser = this.token.getUser();
        this.route.params.subscribe((params) => {
            this.apiservice.geteventreqById(params.id).then((event) => {
                this.loading = false;
                this.event = event;
            });
        });
    }
    getNavigation(link, id) {
        this.router.navigate([link + '/' + id]);
    }
    goback(link) {
        this.router.navigate([link]);
    }
    onDelete() {
        this.loading = true;
        this.route.params.subscribe((params) => {
            this.apiservice.deleteSingleEvent(params.id).then((data) => {
                this.loading = false;
                this.alertService.success(data.message);
                window.scrollTo(0, 0);
                this.router.navigate(['calendar-fiscality']);
                this.reloadPage();
            }, (error) => {
                this.loading = false;
                this.alertService.error(error.error.error);
                window.scrollTo(0, 0);
            });
        });
    }
    reloadPage() {
        setTimeout(() => window.location.reload(), 3000);
    }
};
ViewEventComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _services_event_service__WEBPACK_IMPORTED_MODULE_6__["ApiServiceService"] },
    { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"] },
    { type: _helpers_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
];
ViewEventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-event',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-event.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-event/view-event.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-event.component.scss */ "./src/app/view-event/view-event.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        _services_event_service__WEBPACK_IMPORTED_MODULE_6__["ApiServiceService"],
        _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"],
        _helpers_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])
], ViewEventComponent);



/***/ }),

/***/ "./src/app/view-user/view-user.component.scss":
/*!****************************************************!*\
  !*** ./src/app/view-user/view-user.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  /* Add shadows to create the \"card\" effect */\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  margin-left: 20%;\n}\n\nh2 {\n  margin-left: 20%;\n}\n\n/* On mouse-over, add a deeper shadow */\n\n.card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n\n/* Add some padding inside the card container */\n\n.container-fluid {\n  padding: 2px 16px;\n}\n\nbutton {\n  margin-left: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy11c2VyL0M6XFxVc2Vyc1xcVVNFUlxcY3ZtXFxjdm1fZnJvbnRlbmQvc3JjXFxhcHBcXHZpZXctdXNlclxcdmlldy11c2VyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3LXVzZXIvdmlldy11c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNENBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDRTtFQUNFLGdCQUFBO0FDRUo7O0FEQ0UsdUNBQUE7O0FBQ0E7RUFDRSwyQ0FBQTtBQ0VKOztBRENFLCtDQUFBOztBQUNBO0VBQ0UsaUJBQUE7QUNFSjs7QURBRTtFQUNFLGdCQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC92aWV3LXVzZXIvdmlldy11c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gICAgLyogQWRkIHNoYWRvd3MgdG8gY3JlYXRlIHRoZSBcImNhcmRcIiBlZmZlY3QgKi9cclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gIH1cclxuICBoMntcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIE9uIG1vdXNlLW92ZXIsIGFkZCBhIGRlZXBlciBzaGFkb3cgKi9cclxuICAuY2FyZDpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjIpO1xyXG4gIH1cclxuICBcclxuICAvKiBBZGQgc29tZSBwYWRkaW5nIGluc2lkZSB0aGUgY2FyZCBjb250YWluZXIgKi9cclxuICAuY29udGFpbmVyLWZsdWlkIHtcclxuICAgIHBhZGRpbmc6IDJweCAxNnB4O1xyXG4gIH1cclxuICBidXR0b257XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gIH0iLCIuY2FyZCB7XG4gIC8qIEFkZCBzaGFkb3dzIHRvIGNyZWF0ZSB0aGUgXCJjYXJkXCIgZWZmZWN0ICovXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcbn1cblxuaDIge1xuICBtYXJnaW4tbGVmdDogMjAlO1xufVxuXG4vKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBkZWVwZXIgc2hhZG93ICovXG4uY2FyZDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi8qIEFkZCBzb21lIHBhZGRpbmcgaW5zaWRlIHRoZSBjYXJkIGNvbnRhaW5lciAqL1xuLmNvbnRhaW5lci1mbHVpZCB7XG4gIHBhZGRpbmc6IDJweCAxNnB4O1xufVxuXG5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMTAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/view-user/view-user.component.ts":
/*!**************************************************!*\
  !*** ./src/app/view-user/view-user.component.ts ***!
  \**************************************************/
/*! exports provided: ViewUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewUserComponent", function() { return ViewUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/token-storage.service */ "./src/app/services/token-storage.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _helpers_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/alert.service */ "./src/app/_helpers/alert.service.ts");






let ViewUserComponent = class ViewUserComponent {
    constructor(router, route, usersservice, token, alertService) {
        this.router = router;
        this.route = route;
        this.usersservice = usersservice;
        this.token = token;
        this.alertService = alertService;
    }
    ngOnInit() {
        this.loading = true;
        this.currentUser = this.token.getUser();
        this.route.params.subscribe((params) => {
            this.usersservice.getUserById(params.id).then((user) => {
                this.loading = false;
                this.user = user;
                this.alertService.info('Données Utilisateur Chargées Avec Succès');
                window.scrollTo(0, 0);
            });
        });
    }
    getNavigation(link, id) {
        this.router.navigate([link + '/' + id]);
    }
    onDelete() {
        this.loading = true;
        this.route.params.subscribe((params) => {
            this.usersservice.deleteUserById(params.id).then((data) => {
                this.loading = false;
                this.alertService.success(data.message);
                window.scrollTo(0, 0);
                this.router.navigate(['admin-board']);
            }, (error) => {
                this.loading = false;
                this.alertService.error(error.error.error);
                window.scrollTo(0, 0);
                this.router.navigate(['admin-board']);
            });
        });
    }
};
ViewUserComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"] },
    { type: _helpers_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
];
ViewUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-user/view-user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-user.component.scss */ "./src/app/view-user/view-user.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"],
        _helpers_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])
], ViewUserComponent);



/***/ }),

/***/ "./src/app/who/who.component.scss":
/*!****************************************!*\
  !*** ./src/app/who/who.component.scss ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html, body {\n  height: 100%;\n  margin: 0;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.team-section {\n  font-family: arial;\n  text-align: center;\n  padding: 70px 0px;\n  background-color: #d0d5da;\n  height: 100%;\n  margin: 0;\n}\n\n.team-section h2 {\n  color: #3b5997;\n  font-size: 40px;\n}\n\n.team-section p {\n  font-size: 16px;\n  color: #656565;\n  margin: 0px 0px 20px;\n  text-align: center;\n}\n\n.team-member {\n  width: 100%;\n  float: left;\n  padding: 25px 15px;\n  background-color: #fff;\n  border-radius: 10px;\n  border: 1px solid #eee;\n  margin-top: 30px;\n  box-shadow: 0px 8px 0px 0px #9E9E9E;\n  transition: 0.5s;\n}\n\n.team-member:hover {\n  box-shadow: 0px -8px 0px 0px #9e9e9e;\n}\n\n.team-member h3 {\n  font-size: 24px;\n  margin: 15px 0px 0px;\n}\n\n.team-member h5 {\n  margin: 10px 0px 10px;\n  color: #8a8a8a;\n  display: inline-block;\n}\n\n.team-member p {\n  font-size: 16px;\n  color: #8a8a8a;\n}\n\n.team-member .photo {\n  width: 90px;\n  height: 90px;\n  border-radius: 100%;\n  overflow: hidden;\n  border: 1px solid #9E9E9E;\n  margin: 0 auto;\n  background-color: #ffffff;\n  padding: 4px;\n}\n\n.follow-on ul {\n  padding: 0px;\n  margin: 0px;\n}\n\n.follow-on ul li {\n  float: left;\n  list-style: none;\n  font-size: 20px;\n  text-align: center;\n  margin: 10px 0px 10px;\n  width: 20%;\n}\n\n.follow-on ul li a i {\n  color: #fff;\n  border-radius: 100%;\n  height: 30px;\n  width: 30px;\n  line-height: 31px;\n  font-size: 16px;\n}\n\n.follow-on ul li a i:hover {\n  opacity: 0.8;\n}\n\n.follow-on ul li a i.fa.fa-facebook {\n  background-color: #3b5997;\n}\n\n.follow-on ul li a i.fa.fa-twitter {\n  background-color: #57aced;\n}\n\n.follow-on ul li a i.fa.fa-pinterest-p {\n  background-color: #cb2026;\n}\n\n.follow-on ul li a i.fa.fa-instagram {\n  background-color: #3e729a;\n}\n\n.follow-on ul li a i.fa.fa-google-plus {\n  background-color: #db4d41;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2hvL0M6XFxVc2Vyc1xcVVNFUlxcY3ZtXFxjdm1fZnJvbnRlbmQvc3JjXFxhcHBcXHdob1xcd2hvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC93aG8vd2hvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFNBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUNDSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUNBSjs7QURHQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDQTtFQUNJLG9DQUFBO0FDRUo7O0FEQUE7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7QUNHSjs7QUREQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FDSUo7O0FERkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0tKOztBREhBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDTUo7O0FESkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ09KOztBRExBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0FDUUo7O0FETkE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ1NKOztBRFBBO0VBQ0ksWUFBQTtBQ1VKOztBRFJBO0VBQ0kseUJBQUE7QUNXSjs7QURUQTtFQUNJLHlCQUFBO0FDWUo7O0FEVkE7RUFDSSx5QkFBQTtBQ2FKOztBRFhBO0VBQ0kseUJBQUE7QUNjSjs7QURaQTtFQUNJLHlCQUFBO0FDZUoiLCJmaWxlIjoic3JjL2FwcC93aG8vd2hvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCwgYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcblxyXG4gIH1cclxuICBcclxuLnRlYW0tc2VjdGlvbiB7XHJcbiAgICBmb250LWZhbWlseTogYXJpYWw7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA3MHB4IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMGQ1ZGE7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi50ZWFtLXNlY3Rpb24gaDIge1xyXG4gICAgY29sb3I6ICMzYjU5OTc7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBcclxufVxyXG4udGVhbS1zZWN0aW9uIHAge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM2NTY1NjU7XHJcbiAgICBtYXJnaW46IDBweCAwcHggMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udGVhbS1tZW1iZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmc6IDI1cHggMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDBweCAwcHggIzlFOUU5RTtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuLnRlYW0tbWVtYmVyOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAtOHB4IDBweCAwcHggIzllOWU5ZTtcclxufVxyXG4udGVhbS1tZW1iZXIgaDMge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbWFyZ2luOiAxNXB4IDBweCAwcHg7XHJcbn1cclxuLnRlYW0tbWVtYmVyIGg1IHtcclxuICAgIG1hcmdpbjogMTBweCAwcHggMTBweDtcclxuICAgIGNvbG9yOiAjOGE4YThhO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi50ZWFtLW1lbWJlciBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjOGE4YThhO1xyXG59XHJcbi50ZWFtLW1lbWJlciAucGhvdG8ge1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5RTlFOUU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbn1cclxuLmZvbGxvdy1vbiB1bHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcbi5mb2xsb3ctb24gdWwgbGkge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweCAxMHB4O1xyXG4gICAgd2lkdGg6IDIwJTtcclxufVxyXG4uZm9sbG93LW9uIHVsIGxpIGEgaSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMXB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5mb2xsb3ctb24gdWwgbGkgYSBpOmhvdmVye1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG59XHJcbi5mb2xsb3ctb24gdWwgbGkgYSBpLmZhLmZhLWZhY2Vib29rIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTc7XHJcbn1cclxuLmZvbGxvdy1vbiB1bCBsaSBhIGkuZmEuZmEtdHdpdHRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTdhY2VkO1xyXG59XHJcbi5mb2xsb3ctb24gdWwgbGkgYSBpLmZhLmZhLXBpbnRlcmVzdC1wIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYjIwMjY7XHJcbn1cclxuLmZvbGxvdy1vbiB1bCBsaSBhIGkuZmEuZmEtaW5zdGFncmFtIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZTcyOWE7XHJcbn1cclxuLmZvbGxvdy1vbiB1bCBsaSBhIGkuZmEuZmEtZ29vZ2xlLXBsdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiNGQ0MTtcclxufSIsImh0bWwsIGJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG4udGVhbS1zZWN0aW9uIHtcbiAgZm9udC1mYW1pbHk6IGFyaWFsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDcwcHggMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDBkNWRhO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbn1cblxuLnRlYW0tc2VjdGlvbiBoMiB7XG4gIGNvbG9yOiAjM2I1OTk3O1xuICBmb250LXNpemU6IDQwcHg7XG59XG5cbi50ZWFtLXNlY3Rpb24gcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM2NTY1NjU7XG4gIG1hcmdpbjogMHB4IDBweCAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50ZWFtLW1lbWJlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMjVweCAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBib3gtc2hhZG93OiAwcHggOHB4IDBweCAwcHggIzlFOUU5RTtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLnRlYW0tbWVtYmVyOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMHB4IC04cHggMHB4IDBweCAjOWU5ZTllO1xufVxuXG4udGVhbS1tZW1iZXIgaDMge1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbjogMTVweCAwcHggMHB4O1xufVxuXG4udGVhbS1tZW1iZXIgaDUge1xuICBtYXJnaW46IDEwcHggMHB4IDEwcHg7XG4gIGNvbG9yOiAjOGE4YThhO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi50ZWFtLW1lbWJlciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzhhOGE4YTtcbn1cblxuLnRlYW0tbWVtYmVyIC5waG90byB7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5RTlFOUU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiA0cHg7XG59XG5cbi5mb2xsb3ctb24gdWwge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uZm9sbG93LW9uIHVsIGxpIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDEwcHggMHB4IDEwcHg7XG4gIHdpZHRoOiAyMCU7XG59XG5cbi5mb2xsb3ctb24gdWwgbGkgYSBpIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMXB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5mb2xsb3ctb24gdWwgbGkgYSBpOmhvdmVyIHtcbiAgb3BhY2l0eTogMC44O1xufVxuXG4uZm9sbG93LW9uIHVsIGxpIGEgaS5mYS5mYS1mYWNlYm9vayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTc7XG59XG5cbi5mb2xsb3ctb24gdWwgbGkgYSBpLmZhLmZhLXR3aXR0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTdhY2VkO1xufVxuXG4uZm9sbG93LW9uIHVsIGxpIGEgaS5mYS5mYS1waW50ZXJlc3QtcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjYjIwMjY7XG59XG5cbi5mb2xsb3ctb24gdWwgbGkgYSBpLmZhLmZhLWluc3RhZ3JhbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZTcyOWE7XG59XG5cbi5mb2xsb3ctb24gdWwgbGkgYSBpLmZhLmZhLWdvb2dsZS1wbHVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiNGQ0MTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/who/who.component.ts":
/*!**************************************!*\
  !*** ./src/app/who/who.component.ts ***!
  \**************************************/
/*! exports provided: WhoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhoComponent", function() { return WhoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WhoComponent = class WhoComponent {
    constructor() { }
    ngOnInit() {
    }
};
WhoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-who',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./who.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/who/who.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./who.component.scss */ "./src/app/who/who.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], WhoComponent);



/***/ }),

/***/ "./src/app/why/why.component.scss":
/*!****************************************!*\
  !*** ./src/app/why/why.component.scss ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".panel-heading {\n  text-align: center;\n}\n\n.jumbotron {\n  background-image: url('cabinet_virtuel_background.jpg');\n  background-position: center center;\n  color: white;\n  margin: 0;\n}\n\n#intro {\n  border-radius: 25px;\n  padding: 20px;\n}\n\n.img-responsive {\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2h5L0M6XFxVc2Vyc1xcVVNFUlxcY3ZtXFxjdm1fZnJvbnRlbmQvc3JjXFxhcHBcXHdoeVxcd2h5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC93aHkvd2h5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURDQTtFQUNJLHVEQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQ0VKOztBREFBO0VBQ0ksbUJBQUE7RUFFRixhQUFBO0FDRUY7O0FEQ0E7RUFDSSxhQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC93aHkvd2h5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhbmVsLWhlYWRpbmd7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmp1bWJvdHJvbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiLi4vLi4vYXNzZXRzL2NhYmluZXRfdmlydHVlbF9iYWNrZ3JvdW5kLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7IFxyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbiNpbnRyb3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgXHJcbiAgcGFkZGluZzogMjBweDsgXHJcbiAgIFxyXG59XHJcbi5pbWctcmVzcG9uc2l2ZXtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn1cclxuIFxyXG4iLCIucGFuZWwtaGVhZGluZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmp1bWJvdHJvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9jYWJpbmV0X3ZpcnR1ZWxfYmFja2dyb3VuZC5qcGdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAwO1xufVxuXG4jaW50cm8ge1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uaW1nLXJlc3BvbnNpdmUge1xuICBoZWlnaHQ6IDIwMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/why/why.component.ts":
/*!**************************************!*\
  !*** ./src/app/why/why.component.ts ***!
  \**************************************/
/*! exports provided: WhyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhyComponent", function() { return WhyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WhyComponent = class WhyComponent {
    constructor() { }
    ngOnInit() {
    }
};
WhyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-why',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./why.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/why/why.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./why.component.scss */ "./src/app/why/why.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], WhyComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\USER\cvm\cvm_frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map