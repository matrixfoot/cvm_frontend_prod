(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-board/admin-board.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-board/admin-board.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid text-center\">\r\n    <h2>Liste des Utilisateurs</h2>\r\n    <div class=\"users-grid\" >\r\n\r\n        \r\n        \r\n        <table class=\"table table-striped\">\r\n          <thead>\r\n          <tr>\r\n      \r\n            <th>UserId</th>\r\n            \r\n            <th>Email</th>\r\n            <th>Firstname</th>\r\n            \r\n            <th>Lastname</th>\r\n            <th>Fonction</th>\r\n            <th>Clientcode</th>\r\n            <th>Secteur</th>\r\n            <th>Raisonsociale</th>\r\n            <th>Role</th>\r\n            \r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr *ngFor=\"let user of users\">\r\n      \r\n            <td>{{user._id}}</td>\r\n            <td>{{user.email}}</td>\r\n            <td>{{user.firstname}}</td>\r\n            \r\n      \r\n            <td>{{user.lastname}}</td>\r\n            <td>{{user.fonction}}</td>\r\n            <td>{{user.clientcode}}</td>\r\n            <td>{{user.secteur}}</td>\r\n            <td>{{user.raisonsociale}}</td>\r\n            <td>{{user.role}}</td>\r\n            \r\n            \r\n            <td>  <button type=\"button\" class=\"btn btn-success\" (click)=\"getNavigation('view-user',user._id)\">View</button></td>\r\n            \r\n              \r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n  </div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n\r\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\r\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n    <script src=\"https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js\" integrity=\"sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p\" crossorigin=\"anonymous\"></script>\r\n    <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js\" integrity=\"sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT\" crossorigin=\"anonymous\"></script>\r\n  </head>\r\n  <body>\r\n    <nav class=\"navbar navbar-inverse\">\r\n        <div class=\"container-fluid\">\r\n          <ul class=\"nav navbar-nav\">\r\n            <li><a routerLink=\"\" routerLinkActive=\"active\">Acceuil</a></li>\r\n            \r\n            <li><a href=\"#usefullinks\">Liens Utiles</a></li>\r\n          </ul>\r\n          <ul class=\"nav navbar-nav navbar-right\">\r\n            <li><a href=\"#\" class=\"facebook\"><i class=\"fa fa-facebook\"></i></a></li>\r\n            <li><a href=\"#\" class=\"twitter\"><i class=\"fa fa-twitter\"></i></a></li>\r\n            <li><a href=\"#\" class=\"google\"><i class=\"fa fa-google\"></i></a> </li>\r\n            <li><a href=\"#\" class=\"linkedin\"><i class=\"fa fa-linkedin\"></i></a></li>\r\n            <li> <a href=\"#\" class=\"youtube\"><i class=\"fa fa-youtube\"></i></a> </li>\r\n          </ul>\r\n        </div>\r\n      </nav>\r\n      <div class=\"footer\">\r\n    \r\n          <h6>Tous droits réservés</h6>\r\n          \r\n      </div>\r\n    \r\n      \r\n    </body>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\r\n    <script src=\"https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js\" integrity=\"sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p\" crossorigin=\"anonymous\"></script>\r\n    <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js\" integrity=\"sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT\" crossorigin=\"anonymous\"></script>\r\n    \r\n  \r\n  </head>\r\n  <body>\r\n    <div class=\"header\">\r\n  \r\n      <h1>Bienvenue à votre cabinet virtuel MaCompta</h1>\r\n      \r\n  </div>\r\n    <nav class=\"navbar navbar-inverse\">\r\n      <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n          <a class=\"navbar-brand\" routerLink=\"\" routerLinkActive=\"active\">MaCompta</a>\r\n        </div>\r\n        <ul class=\"nav navbar-nav\">\r\n          \r\n          <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Documentation <span class=\"caret\"></span></a>\r\n            <ul class=\"dropdown-menu\">\r\n              <li><a href=\"#\">comptables</a></li>\r\n              <li><a href=\"#\">juridiques</a></li>\r\n              <li><a href=\"#\">fiscales</a></li>\r\n              <li><a href=\"#\">sociales</a></li>\r\n              <li><a href=\"#\">autres</a></li>\r\n            </ul>\r\n          </li>\r\n          <li><a  class=\"btn disabled\"  *ngIf=\"!isLoggedIn\"routerLink=\"who\"   routerLinkActive=\"active\" data-toggle=\"popover\" data-trigger=\"hover\" data-content=\"Some content\">Qui sommes-nous? (veuillez vous inscrire/se connecter)</a></li>\r\n          <li><a  routerLink=\"who\" *ngIf=\"isLoggedIn\" routerLinkActive=\"active\">Qui sommes-nous?</a></li>\r\n          <li><a *ngIf=\"isLoggedIn\" href=\"#clientspace\">Espace clients</a></li>\r\n          <li><a class=\"btn disabled\"  *ngIf=\"!isLoggedIn\" href=\"#clientspace\">Espace clients(veuillez vous inscrire/se connecter)</a></li>\r\n          <li><a routerLink=\"why\" *ngIf=\"isLoggedIn\" routerLinkActive=\"active\">Pourquoi MAcompta?</a></li>\r\n          <li><a class=\"btn disabled\"  *ngIf=\"!isLoggedIn\" routerLink=\"why\" routerLinkActive=\"active\">Pourquoi MAcompta?(veuillez vous inscrire/se connecter)</a></li>\r\n          <li><a routerLink=\"/home/contact\" fragment=\"contactid\" target=”_blank” routerLinkActive=\"active\">Contact</a></li>\r\n          <li><a routerLink=\"why\" *ngIf=\"isLoggedIn\" routerLinkActive=\"active\">Consultation en Ligne</a></li>\r\n          <li><a class=\"btn disabled\"  *ngIf=\"!isLoggedIn\" routerLink=\"why\"routerLinkActive=\"active\">Consultation en Ligne(veuillez vous inscrire/se connecter)</a></li>\r\n          <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Tableau de bord <span class=\"caret\"></span></a>\r\n            <ul class=\"dropdown-menu\">\r\n              <li><a routerLink=\"admin-board\" *ngIf=\"role=='admin'\" routerLinkActive=\"active\">Administrateur</a></li>\r\n              <li><a routerLink=\"moderator-board\" *ngIf=\"role=='supervisor'\"routerLinkActive=\"active\">Modérateur</a></li>\r\n              <li><a routerLink=\"user-board\" *ngIf=\"role=='basic'\"routerLinkActive=\"active\">Utilisateur</a></li>\r\n              \r\n            </ul>\r\n          </li>\r\n        </ul>\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n          <li><a routerLink=\"profil\"  *ngIf=\"isLoggedIn\" routerLinkActive=\"active\">Profil {{username}} {{lastname}}</a></li>\r\n          <li><a class=\"btn disabled\"  *ngIf=\"!isLoggedIn\"  routerLink=\"profil\"  routerLinkActive=\"active\">Profil {{username}} {{lastname}} (veuillez vous inscrire/se connecter)</a></li>\r\n          <li><a href class=\"nav-link\" *ngIf=\"!isLoggedIn\" routerLink=\"signup\" routerLinkActive=\"active\" > <span class=\"glyphicon glyphicon-user\"></span>Inscription</a></li>\r\n          <li><a href class=\"nav-link\" *ngIf=\"!isLoggedIn\" routerLink=\"login\" routerLinkActive=\"active\" > <span class=\"glyphicon glyphicon-log-in\"></span>Connexion</a></li>\r\n          <li class=\"nav-item\">\r\n            <a href class=\"nav-link\" *ngIf=\"isLoggedIn\" (click)=\"logout()\"><span class=\"glyphicon glyphicon-log-out\"></span>Déconnexion</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </nav>\r\n    \r\n      \r\n    </body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/contact/contact.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/contact/contact.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\r\n    <link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\r\n  </head>\r\n<body>\r\n    \r\n\r\n    <div class=\"container-fluid bg-grey\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-5\" id=\"coordon\">\r\n            <p>Coordonnées</p>\r\n            <p><span class=\"glyphicon glyphicon-map-marker\"></span> Ariana Center-Bureau A318-Ariana</p>\r\n            <p><span class=\"glyphicon glyphicon-phone\"></span>(216) 70 73 13 120</p>\r\n            <p><span class=\"glyphicon glyphicon-envelope\"></span> myemail@something.com</p>\r\n          </div>\r\n          \r\n          <div class=\"col-sm-7\">\r\n          <form action=\"\" class=\"w3-container w3-card-4 w3-light-grey w3-text-blue w3-margin\">\r\n          <h2 class=\"w3-center\">Contactez Nous</h2>\r\n           \r\n          <div class=\"w3-row w3-section\">\r\n            <div class=\"w3-col\" style=\"width:50px\"><i class=\"w3-xxlarge fa fa-user\"></i></div>\r\n              <div class=\"w3-rest\">\r\n                <input class=\"w3-input w3-border\" name=\"first\" type=\"text\" placeholder=\"Prénom\">\r\n              </div>\r\n          </div>\r\n          \r\n          <div class=\"w3-row w3-section\">\r\n            <div class=\"w3-col\" style=\"width:50px\"><i class=\"w3-xxlarge fa fa-user\"></i></div>\r\n              <div class=\"w3-rest\">\r\n                <input class=\"w3-input w3-border\" name=\"last\" type=\"text\" placeholder=\"Nom\">\r\n              </div>\r\n          </div>\r\n          \r\n          <div class=\"w3-row w3-section\">\r\n            <div class=\"w3-col\" style=\"width:50px\"><i class=\"w3-xxlarge fa fa-envelope-o\"></i></div>\r\n              <div class=\"w3-rest\">\r\n                <input class=\"w3-input w3-border\" name=\"email\" type=\"text\" placeholder=\"Email\">\r\n              </div>\r\n          </div>\r\n          \r\n          <div class=\"w3-row w3-section\">\r\n            <div class=\"w3-col\" style=\"width:50px\"><i class=\"w3-xxlarge fa fa-phone\"></i></div>\r\n              <div class=\"w3-rest\">\r\n                <input class=\"w3-input w3-border\" name=\"phone\" type=\"text\" placeholder=\"Téléphone\">\r\n              </div>\r\n          </div>\r\n          \r\n          <div class=\"w3-row w3-section\">\r\n            <div class=\"w3-col\" style=\"width:50px\"><i class=\"w3-xxlarge fa fa-pencil\"></i></div>\r\n              <div class=\"w3-rest\">\r\n                <input class=\"w3-input w3-border\" name=\"message\" type=\"text\" placeholder=\"Ecrire ce que vous pensez\">\r\n              </div>\r\n          </div>\r\n          \r\n          <p class=\"w3-center\">\r\n          <button class=\"w3-button w3-section w3-blue w3-ripple\"> Envoyer </button>\r\n          </p>\r\n          </form>\r\n        </div>\r\n        </div>\r\n        </div>\r\n</body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\r\n    <link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\r\n  </head>\r\n  <body onload=\"document.getElementById('id01').style.display='block'\">\r\n    \r\n  \r\n    <div id=\"containid\" class=\"w3-container\" >\r\n      \r\n      <div id=\"id01\" class=\"w3-modal\">\r\n        \r\n        <div class=\"w3-modal-content w3-card-4 w3-animate-zoom\" style=\"max-width:600px\">\r\n    \r\n          <div class=\"w3-center\"><br>\r\n            <span onclick=\"document.getElementById('id01').style.display='none'\" class=\"w3-button w3-xlarge w3-hover-red w3-display-topright\" title=\"Close Modal\">&times;</span>\r\n            <img src=\"../../assets/home_background.jpg\" alt=\"Avatar\" style=\"width:30%\" class=\"w3-circle w3-margin-top\">\r\n            <h4>\r\n              Bienvenue à bord d’un cabinet que vous avez choisi comme « Médecin de famille » de votre entreprise.\r\n              Toute l’équipe du cabinet Macompta  vous souhaite la bienvenue.\r\n              Notre équipe est dotée de compétences dynamiques pour vous assister, au quotidien et sur toute la Tunisie, en matière comptable, fiscale, juridique, sociale, Etc.\r\n              Notre philosophie repose sur le fait que nous n’imposons pas de méthode de travail. Nous nous adaptons à la méthode de travail du client tout en proposant au fur et à mesure des améliorations, raison pour laquelle nous avons créé, outre notre bureau principal, une agence virtuelle.\r\n            </h4>\r\n          </div>\r\n    \r\n          <div class=\"w3-container w3-border-top w3-padding-16 w3-light-grey\">\r\n            <button onclick=\"document.getElementById('id01').style.display='none'\" type=\"button\" class=\"w3-button w3-red\" id=\"buttonwelcome\">Commencer Votre Navigation</button>\r\n            \r\n          </div>\r\n    \r\n        </div>\r\n      </div>\r\n    </div>\r\n  \r\n  \r\n  \r\n  <div class=\"actualitycarousel\">  \r\n      <h2>Actualités de votre cabinet</h2>\r\n  <div id=\"myCarousel\" class=\"carousel slide text-center\" data-ride=\"carousel\">\r\n      <!-- Indicators -->\r\n      <ol class=\"carousel-indicators\">\r\n        <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n        <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n        <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n      </ol>\r\n  \r\n      <!-- Wrapper for slides -->\r\n      <div class=\"carousel-inner\" role=\"listbox\">\r\n        <div class=\"item active\">\r\n          <h4>\"Actualité 1\"<br><span>Autre commentaire</span></h4>\r\n        </div>\r\n        <div class=\"item\">\r\n          <h4>\"Actualité 2\"<br><span>Autre commentaire</span></h4>\r\n        </div>\r\n        <div class=\"item\">\r\n          <h4>\"Actualité 3\"<br><span>Autre commentaire</span></h4>\r\n        </div>\r\n      </div>\r\n  \r\n      <!-- Left and right controls -->\r\n      <a class=\"left carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\r\n        <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Précédent</span>\r\n      </a>\r\n      <a class=\"right carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\r\n        <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Suivant</span>\r\n      </a>\r\n    </div>\r\n  </div>\r\n  \r\n  <!-- Container (Services Section) -->\r\n  <div class=\"container-fluid text-center\">\r\n      <h2>SERVICES</h2>\r\n      <h4>Qu'est ce que nous offrons?</h4>\r\n      <br>\r\n      <div class=\"row\">\r\n        <a href=\"#\"><div class=\"col-sm-4\">\r\n          <span class=\"glyphicon glyphicon-list-alt logo-small\"></span>\r\n          <h4>comptabilité</h4>\r\n          <p>Tenez votre comptabilité</p>\r\n        </div>\r\n      </a>\r\n      <a href=\"#\">\r\n        <div class=\"col-sm-4\">\r\n          <span class=\"glyphicon glyphicon-euro logo-small\"></span>\r\n          <h4>Fiscalité</h4>\r\n          <p>Etablissez vos déclarations fiscales</p>\r\n        </div>\r\n      </a>\r\n      <a href=\"#\">\r\n        <div class=\"col-sm-4\">\r\n          <span class=\"glyphicon glyphicon-bitcoin logo-small\"></span>\r\n          <h4>Paie</h4>\r\n          <p>Préparez vos fiches de paie</p>\r\n        </div>\r\n      </a>\r\n      </div>\r\n      <br><br>\r\n      <div class=\"row\">\r\n          <a href=\"#\">\r\n        <div class=\"col-sm-4_2\" >\r\n          <span class=\"glyphicon glyphicon-flash logo-small\"></span>\r\n          <h4>Conseil</h4>\r\n          <p>Demandez un conseil</p>\r\n        </div>\r\n      </a>\r\n      </div>\r\n    </div>\r\n  \r\n    \r\n  \r\n  <!-- Container (expertise areas section) -->\r\n  <div id=\"expertisecont\" class=\"container-fluid text-center\">\r\n    <h2>Domaines D'expertise</h2>\r\n    <h4>Nos interventions se rapportent à tous les services dans les divers domaines de gestion des entreprises dont notamment :</h4>\r\n    <br>\r\n    <div class=\"row\">\r\n      <a href=\"#\"><div class=\"col-sm-4\">\r\n        <span class=\"glyphicon glyphicon-list-alt logo-small\"></span>\r\n        <h4>création</h4>\r\n        <p>Accompagnement à la création d’entreprise</p>\r\n      </div>\r\n    </a>\r\n    <a href=\"#\">\r\n      <div class=\"col-sm-4\">\r\n        <span class=\"glyphicon glyphicon-list-alt logo-small\"></span>\r\n        <h4>Assistance</h4>\r\n        <p>Assistance comptable, juridique, fiscale et sociale</p>\r\n      </div>\r\n    </a>\r\n    <a href=\"#\">\r\n      <div class=\"col-sm-4\">\r\n        <span class=\"glyphicon glyphicon-list-alt logo-small\"></span>\r\n        <h4>Commissariat</h4>\r\n        <p>Commissariat aux comptes</p>\r\n      </div>\r\n    </a>\r\n    </div>\r\n    <br><br>\r\n    <div class=\"row\">\r\n        <a href=\"#\">\r\n      <div class=\"col-sm-4\" >\r\n        <span class=\"glyphicon glyphicon-list-alt logo-small\"></span>\r\n        <h4>Conseil</h4>\r\n        <p>Conseil en gestion et en choix d’investissement</p>\r\n      </div>\r\n    </a>\r\n      <a href=\"#\">\r\n    <div class=\"col-sm-4\" >\r\n      <span class=\"glyphicon glyphicon-list-alt logo-small\"></span>\r\n      <h4>Organisation</h4>\r\n      <p>Organisation et mise en place de manuels de procédures et de systèmes d’information</p>\r\n    </div>\r\n  </a>\r\n  <a href=\"#\">\r\n    <div class=\"col-sm-4\" >\r\n      <span class=\"glyphicon glyphicon-list-alt logo-small\"></span>\r\n      <h4>Commissariat aux apports</h4>\r\n      <p>Commissariat aux apports et évaluation</p>\r\n    </div>\r\n  </a>\r\n  </div>\r\n  <div class=\"row\">\r\n    <a href=\"#\">\r\n  <div class=\"col-sm-4\" >\r\n    <span class=\"glyphicon glyphicon-list-alt logo-small\"></span>\r\n    <h4>Liquidation</h4>\r\n    <p></p>\r\n  </div>\r\n  </a>\r\n  <a href=\"#\">\r\n  <div class=\"col-sm-4\" >\r\n  <span class=\"glyphicon glyphicon-list-alt logo-small\"></span>\r\n  <h4>Etudes</h4>\r\n  <p>Etudes</p>\r\n  </div>\r\n  </a>\r\n  <a href=\"#\">\r\n  <div class=\"col-sm-4\" >\r\n  <span class=\"glyphicon glyphicon-list-alt logo-small\"></span>\r\n  <h4>Formation</h4>\r\n  <p>Formation</p>\r\n  </div>\r\n  </a>\r\n  </div>\r\n  </div>\r\n  \r\n  <!-- Container (Portfolio Section) -->\r\n  <div class=\"container-fluid_2 text-center bg-grey\">\r\n    <h2>Références</h2><br>\r\n    <div class=\"row text-center\">\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"rounded-circle\">\r\n          <img src=\"../../assets/assad client.png\" alt=\"ASSAD\" >\r\n          <p><strong>ASSAD</strong></p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"rounded-circle\">\r\n          <img src=\"\" alt=\"Autre partenaire\" width=\"400\" height=\"300\">\r\n          <p><strong>Autre partenaire</strong></p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"rounded-circle\">\r\n          <img src=\"\" alt=\"Autre partenaire\" width=\"400\" height=\"300\">\r\n          <p><strong>autre partenaire</strong></p>\r\n        </div>\r\n      </div>\r\n  </div>\r\n  </div>\r\n  <div id=\"contactid\">\r\n  <router-outlet></router-outlet>\r\n  </div>\r\n      \r\n      \r\n      \r\n  \r\n  \r\n      \r\n    </body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\r\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n  </head>\r\n  \r\n \r\n\r\n\r\n  <body>\r\n    <div id=\"loader\" *ngIf=\"loading\"></div>\r\n    <div class=\"container\" *ngIf=\"!loading && !isLoggedIn\">\r\n      \r\n      <form [formGroup]=\"loginForm\" \r\n      \r\n      (ngSubmit)=\"loginform.valid && onSubmit()\"\r\n      \r\n      novalidate>\r\n        <div class=\"row\">\r\n          <h2 style=\"text-align:center\">Connectez vous avec vos réseaux sociaux ou manuellement</h2>\r\n          <div class=\"vl\">\r\n            <span class=\"vl-innertext\">OU</span>\r\n          </div>\r\n    \r\n          <div class=\"col\">\r\n            <a href=\"#\" class=\"fb btn\">\r\n              <i class=\"fa fa-facebook fa-fw\"></i> Connectez vous avec  Facebook\r\n             </a>\r\n            <a href=\"#\" class=\"twitter btn\">\r\n              <i class=\"fa fa-twitter fa-fw\"></i> Connectez vous avec Twitter\r\n            </a>\r\n            <a href=\"#\" class=\"google btn\"><i class=\"fa fa-google fa-fw\">\r\n              </i> Connectez vous avec  Google+\r\n            </a>\r\n          </div>\r\n    \r\n          <div class=\"col\">\r\n            <div class=\"hide-md-lg\">\r\n              <p>Ou Connectez vous manuellement:</p>\r\n            </div>\r\n   \r\n            <input type=\"email\" class=\"formcontrol\" formControlName=\"email\" placeholder=\"Email\" required>\r\n            \r\n            <input type=\"password\" formControlName=\"password\" placeholder=\"Mot De Passe\" required>\r\n            <input type=\"submit\" value=\"Login\" (click)=\"onLogin()\" [disabled]=\"loginForm.invalid\">\r\n          \r\n          </div>\r\n        </div>\r\n      </form>\r\n    \r\n      \r\n    <div class=\"bottom-container\">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <a routerLink=\"signup\" routerLinkActive=\"active\" style=\"color:white\" class=\"btn\">Inscrivez Vous</a>\r\n        </div>\r\n        <div class=\"col\">\r\n          <a  style=\"color:white\" class=\"btn\">Mot de Passe Oublié?</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <p>{{ errorMessage }}</p>\r\n  </div>\r\n  <div class=\"alert alert-success\" *ngIf=\"isLoggedIn\">\r\n  Tu es déja connecté avec le rôle {{role}}\r\n  </div>\r\n    </body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/moderator-board/moderator-board.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/moderator-board/moderator-board.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>moderator-board works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modify-user-admin/modify-user-admin.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modify-user-admin/modify-user-admin.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\r\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n    <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>\r\n</head>\r\n<body>\r\n  \r\n\r\n<div class=\"bodycontainer\">\r\n  <div id=\"loader\" *ngIf=\"loading\"></div>\r\n  \r\n<div class=\"container\" *ngIf=\"!loading\">\r\n   \r\n  \r\n<form  [formGroup]=\"userForm\">\r\n    <h2>Formulaire De Modification Des Données Utilisateurs</h2>\r\n   \r\n    <div class=\"input-container\">\r\n        <div class=\"gender_icon\"><i class=\"fa fa-male\" ></i> <i class=\"fa fa-female\"></i></div>\r\n       \r\n  <select  class=\"input-field\" placeholder=\"Entrer Votre Nom\" id=\"civilite\" formControlName=\"civilite\" name=\"civilite\" >\r\n    <option hidden >Modifier Votre Civilité</option>\r\n    <option value=\"Monsieur\">Monsieur</option>\r\n    <option value=\"Madame\">Madame</option>\r\n    <option value=\"Mademoiselle\">Mademoiselle</option>\r\n  </select>\r\n    </div>\r\n\r\n    <div class=\"input-container\">\r\n        <i class=\"fa fa-user icon\"></i>\r\n        <input class=\"input-field\" type=\"text\" placeholder=\"Modifier Votre Nom\" id=\"lastname\" formControlName=\"lastname\" name=\"lastname\">\r\n      </div>\r\n\r\n      <div class=\"input-container\">\r\n        <i class=\"fa fa-user icon\"></i>\r\n        <input class=\"input-field\" type=\"text\" placeholder=\"Modifier Votre Prenom\" id=\"firstname\" formControlName=\"firstname\">\r\n      </div> \r\n\r\n      <div class=\"input-container\">\r\n        <i class=\"fa fa-fort-awesome icon\"></i>\r\n        <input class=\"input-field\" type=\"text\" placeholder=\"Modifier Votre Raison Sociale\" id=\"raisonsociale\" formControlName=\"raisonsociale\">\r\n      </div>  \r\n\r\n      <div class=\"input-container\">\r\n        <i class=\"fa fa-fort-awesome icon\" ></i> \r\n       \r\n  <select  class=\"input-field\" placeholder=\"Entrer Votre Nom\" id=\"fonction\" formControlName=\"fonction\" name=\"fonction\" >\r\n    <option hidden >Modifier Votre Fonction</option>\r\n    <option value=\"fonction1\">fonction1</option>\r\n    <option value=\"fonction2\">fonction2</option>\r\n    <option value=\"fonction3\">fonction3</option>\r\n  </select>\r\n    </div>\r\n\r\n\r\n    <div class=\"input-container\">\r\n        <i class=\"fa fa-fort-awesome icon\"></i>\r\n        <input class=\"input-field\" type=\"text\" placeholder=\"Modifier Nom Societe\" id=\"nomsociete\" formControlName=\"nomsociete\">\r\n      </div>\r\n\r\n\r\n    <div class=\"input-container\">\r\n        <i class=\"fa fa-fort-awesome icon\" ></i> \r\n       \r\n  <select  class=\"input-field\" id=\"secteur\" formControlName=\"secteur\" name=\"secteur\">\r\n    <option hidden >Modifier Votre Secteur Activité</option>\r\n    <option value=\"secteur1\">secteur1</option>\r\n    <option value=\"secteur2\">secteur2</option>\r\n    <option value=\"secteur3\">secteur3</option>\r\n  </select>\r\n    </div>\r\n    <div class=\"input-container\">\r\n      <i class=\"fa fa-user icon\"></i>\r\n      <input class=\"input-field\" type=\"text\" placeholder=\"code client\" id=\"clientcode\" formControlName=\"clientcode\">\r\n    </div>\r\n\r\n    <div class=\"input-container\">\r\n      <i class=\"fa fa-envelope icon\"></i>\r\n      <input class=\"input-field\" type=\"email\" placeholder=\"Entrez Votre Email\" id=\"email\" formControlName=\"email\">\r\n    </div>\r\n    \r\n    \r\n  \r\n    <button class=\"btn btn-success\" (click)=\"onSubmit()\" >Envoyer Modification</button>\r\n  </form>\r\n  <p>{{ errorMessage }}</p>\r\n  <div class=\"alert alert-success\" *ngIf=\"isSuccessful\">\r\n    Modificaion effectuée avec succès!!\r\n  </div>\r\n</div>\r\n</div>\r\n</body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modify-user/modify-user.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modify-user/modify-user.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\r\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n    <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>\r\n</head>\r\n<body>\r\n  \r\n\r\n<div class=\"bodycontainer\">\r\n  <div id=\"loader\" *ngIf=\"loading\"></div>\r\n  \r\n<div class=\"container\" *ngIf=\"!loading\">\r\n   \r\n  \r\n<form  [formGroup]=\"userForm\">\r\n    <h2>Formulaire De Modification Des Données Utilisateurs</h2>\r\n   \r\n    <div class=\"input-container\">\r\n        <div class=\"gender_icon\"><i class=\"fa fa-male\" ></i> <i class=\"fa fa-female\"></i></div>\r\n       \r\n  <select  class=\"input-field\" placeholder=\"Entrer Votre Nom\" id=\"civilite\" formControlName=\"civilite\" name=\"civilite\" >\r\n    <option hidden >Modifier Votre Civilité</option>\r\n    <option value=\"Monsieur\">Monsieur</option>\r\n    <option value=\"Madame\">Madame</option>\r\n    <option value=\"Mademoiselle\">Mademoiselle</option>\r\n  </select>\r\n    </div>\r\n\r\n    <div class=\"input-container\">\r\n        <i class=\"fa fa-user icon\"></i>\r\n        <input class=\"input-field\" type=\"text\" placeholder=\"Modifier Votre Nom\" id=\"lastname\" formControlName=\"lastname\" name=\"lastname\">\r\n      </div>\r\n\r\n      <div class=\"input-container\">\r\n        <i class=\"fa fa-user icon\"></i>\r\n        <input class=\"input-field\" type=\"text\" placeholder=\"Modifier Votre Prenom\" id=\"firstname\" formControlName=\"firstname\">\r\n      </div> \r\n\r\n      <div class=\"input-container\">\r\n        <i class=\"fa fa-fort-awesome icon\"></i>\r\n        <input class=\"input-field\" type=\"text\" placeholder=\"Modifier Votre Raison Sociale\" id=\"raisonsociale\" formControlName=\"raisonsociale\">\r\n      </div>  \r\n\r\n      <div class=\"input-container\">\r\n        <i class=\"fa fa-fort-awesome icon\" ></i> \r\n       \r\n  <select  class=\"input-field\" placeholder=\"Entrer Votre Nom\" id=\"fonction\" formControlName=\"fonction\" name=\"fonction\" >\r\n    <option hidden >Modifier Votre Fonction</option>\r\n    <option value=\"fonction1\">fonction1</option>\r\n    <option value=\"fonction2\">fonction2</option>\r\n    <option value=\"fonction3\">fonction3</option>\r\n  </select>\r\n    </div>\r\n\r\n\r\n    <div class=\"input-container\">\r\n        <i class=\"fa fa-fort-awesome icon\"></i>\r\n        <input class=\"input-field\" type=\"text\" placeholder=\"Modifier Nom Societe\" id=\"nomsociete\" formControlName=\"nomsociete\">\r\n      </div>\r\n\r\n\r\n    <div class=\"input-container\">\r\n        <i class=\"fa fa-fort-awesome icon\" ></i> \r\n       \r\n  <select  class=\"input-field\" id=\"secteur\" formControlName=\"secteur\" name=\"secteur\">\r\n    <option hidden >Modifier Votre Secteur Activité</option>\r\n    <option value=\"secteur1\">secteur1</option>\r\n    <option value=\"secteur2\">secteur2</option>\r\n    <option value=\"secteur3\">secteur3</option>\r\n  </select>\r\n    </div>\r\n    <div class=\"input-container\">\r\n      <i class=\"fa fa-user icon\"></i>\r\n      <input class=\"input-field\" type=\"text\" placeholder=\"code client\" id=\"clientcode\" formControlName=\"clientcode\">\r\n    </div>\r\n\r\n    <div class=\"input-container\">\r\n      <i class=\"fa fa-envelope icon\"></i>\r\n      <input class=\"input-field\" type=\"email\" placeholder=\"Entrez Votre Email\" id=\"email\" formControlName=\"email\">\r\n    </div>\r\n    \r\n    \r\n  \r\n    <button class=\"btn btn-success\" (click)=\"onSubmit()\" >Envoyer Modification</button>\r\n  </form>\r\n  <p>{{ errorMessage }}</p>\r\n  <div class=\"alert alert-success\" *ngIf=\"isSuccessful\">\r\n    Modificaion effectuée avec succès!!\r\n  </div>\r\n</div>\r\n</div>\r\n</body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profil/profil.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profil/profil.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n  <body>\r\n\r\n    <h2>Informations générales</h2>\r\n    \r\n    <div class=\"card\">\r\n      <img src=\"../../assets/img_avatar.png\" *ngIf=\"currentUser.civilite=='Monsieur'\" else alt=\"Avatar\" style=\"width:30% ;height:30%\">\r\n      <img src=\"../../assets/img_avatar2.png\" *ngIf=\"currentUser.civilite!='Monsieur'\" alt=\"Avatar\" style=\"width:30% ;height:30%\">\r\n      <div class=\"container\">\r\n        <h4>{{ currentUser.civilite }} <b>{{ currentUser.Firstname }} {{ currentUser.Lastname }}</b></h4> \r\n        <p>{{ currentUser.fonction }}</p> \r\n        <p>{{ currentUser.raisonsociale }}</p>\r\n        <p>{{ currentUser.secteur }}</p>\r\n        <p>{{ currentUser.nomsociete }}</p>\r\n        <p>{{ currentUser.email }}</p>\r\n        <h5>{{ currentUser.clientcode }}</h5>\r\n      </div>\r\n      <button type=\"button\" class=\"btn btn-warning\" (click)=\"getNavigation('modify-user', currentUser.userId)\">Modifier</button>\r\n    </div>\r\n    \r\n    </body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\r\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n    <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>\r\n</head>\r\n<body>\r\n  \r\n\r\n<div class=\"bodycontainer\">\r\n  <div id=\"loader\" *ngIf=\"loading\"></div>\r\n  \r\n<div class=\"container\" *ngIf=\"!loading\">\r\n   \r\n  \r\n<form  [formGroup]=\"signupForm\" *ngIf=\"!isSuccessful\"\r\nname=\"form\"\r\n(ngSubmit)=\"signupform.valid && onSubmit()\"\r\n\r\nnovalidate>\r\n    <h2>Formulaire D'inscription</h2>\r\n   \r\n    <div class=\"input-container\">\r\n        <div class=\"gender_icon\"><i class=\"fa fa-male\" ></i> <i class=\"fa fa-female\"></i></div>\r\n       \r\n  <select  class=\"input-field\" placeholder=\"Entrer Votre Nom\" id=\"civilite\" formControlName=\"civilite\" name=\"civilite\" >\r\n    <option hidden >Entrer Votre Civilité</option>\r\n    <option value=\"Monsieur\">Monsieur</option>\r\n    <option value=\"Madame\">Madame</option>\r\n    <option value=\"Mademoiselle\">Mademoiselle</option>\r\n  </select>\r\n    </div>\r\n\r\n    <div class=\"input-container\">\r\n        <i class=\"fa fa-user icon\"></i>\r\n        <input class=\"input-field\" type=\"text\" placeholder=\"Entrer Votre Nom\" id=\"lastname\" formControlName=\"lastname\" name=\"lastname\">\r\n      </div>\r\n\r\n      <div class=\"input-container\">\r\n        <i class=\"fa fa-user icon\"></i>\r\n        <input class=\"input-field\" type=\"text\" placeholder=\"Entrer Votre Prenom\" id=\"firstname\" formControlName=\"firstname\">\r\n      </div> \r\n\r\n      <div class=\"input-container\">\r\n        <i class=\"fa fa-fort-awesome icon\"></i>\r\n        <input class=\"input-field\" type=\"text\" placeholder=\"Entrer Votre Raison Sociale\" id=\"raisonsociale\" formControlName=\"raisonsociale\">\r\n      </div>  \r\n\r\n      <div class=\"input-container\">\r\n        <i class=\"fa fa-fort-awesome icon\" ></i> \r\n       \r\n  <select  class=\"input-field\" id=\"fonction\" formControlName=\"fonction\" >\r\n    <option hidden >Entrer Votre Fonction</option>\r\n    <option value=\"fonction1\">fonction1</option>\r\n    <option value=\"fonction2\">fonction2</option>\r\n    <option value=\"fonction3\">fonction3</option>\r\n  </select>\r\n    </div>\r\n\r\n\r\n    <div class=\"input-container\">\r\n        <i class=\"fa fa-fort-awesome icon\"></i>\r\n        <input class=\"input-field\" type=\"text\" placeholder=\"Entrer Nom Societe\" id=\"nomsociete\" formControlName=\"nomsociete\">\r\n      </div>\r\n\r\n\r\n    <div class=\"input-container\">\r\n        <i class=\"fa fa-fort-awesome icon\" ></i> \r\n       \r\n  <select  class=\"input-field\" id=\"secteur\" formControlName=\"secteur\" >\r\n    <option hidden >Entrer Votre Secteur Activité</option>\r\n    <option value=\"secteur1\">secteur1</option>\r\n    <option value=\"sccteur2\">sccteur2</option>\r\n    <option value=\"secteur3\">secteur3</option>\r\n  </select>\r\n    </div>\r\n    <div class=\"input-container\">\r\n      <i class=\"fa fa-user icon\"></i>\r\n      <input class=\"input-field\" type=\"text\" placeholder=\"code client\" id=\"clientcode\" formControlName=\"clientcode\">\r\n    </div>\r\n\r\n    <div class=\"input-container\">\r\n      <i class=\"fa fa-envelope icon\"></i>\r\n      <input class=\"input-field\" type=\"text\" placeholder=\"Entrez Votre Email\" id=\"email\" formControlName=\"email\" required>\r\n    </div>\r\n  \r\n    <div class=\"input-container\">\r\n      <i class=\"fa fa-key icon\"></i>\r\n      <input class=\"input-field\" type=\"password\" placeholder=\"Entrez Votre Mot De Passe\" id=\"password\" formControlName=\"password\" required>\r\n    </div>\r\n  \r\n    <button class=\"btn btn-success\" (click)=\"onSignup()\" [disabled]=\"signupForm.invalid\">Inscription</button>\r\n  </form>\r\n  <p>{{ errorMessage }}</p>\r\n  <div class=\"alert alert-success\" *ngIf=\"isSuccessful\">\r\n    Your registration is successful!\r\n  </div>\r\n</div>\r\n</div>\r\n</body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-board/user-board.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-board/user-board.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>user-board works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-user/view-user.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-user/view-user.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n  <body>\r\n\r\n    <h2>Informations générales</h2>\r\n    \r\n    <div class=\"card\">\r\n      <img src=\"../../assets/img_avatar.png\" *ngIf=\"user.civilite=='Monsieur'\" else alt=\"Avatar\" style=\"width:30% ;height:30%\">\r\n      <img src=\"../../assets/img_avatar2.png\" *ngIf=\"user.civilite!='Monsieur'\" alt=\"Avatar\" style=\"width:30% ;height:30%\">\r\n      <div class=\"container\">\r\n        <h4>{{ user.civilite }} <b>{{ user.firstname }} {{ user.lastname }}</b></h4> \r\n        <p>{{ user.fonction }}</p> \r\n        <p>{{ user.raisonsociale }}</p>\r\n        <p>{{ user.secteur }}</p>\r\n        <p>{{ user.nomsociete }}</p>\r\n        <p>{{ user.email }}</p>\r\n        <h5>{{ user.clientcode }}</h5>\r\n      </div>\r\n      <button type=\"button\" class=\"btn btn-warning\" (click)=\"getNavigation('modify-user', user.userId)\">Modifier données utilisateur</button>\r\n      <button type=\"button\" class=\"btn btn-success\" *ngIf=\"currentUser.role=='admin'\" (click)=\"getNavigation('modify-user-admin', user._id)\">Modifier données utilisateur (Admin)</button>\r\n      \r\n    </div>\r\n    \r\n    </body>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/who/who.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/who/who.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\r\n    <div class=\"team-section\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12\">\r\n            <h2>Membres De L'équipe MaCompta</h2>\r\n            <p>Notre cabinet a été créé en 1997 par Fayçal BEN AYED, commissaire aux comptes inscrit au tableau de la compagnie et titulaire du Master C.C.A de l’I.A.E de Lyon 3, et ce, après avoir travaillé dans un cabinet d’expertise comptable de renommée nationale et dans un groupe de sociétés.\r\n                Afin de répondre au mieux à vos attentes et de gérer au plus près vos intérêts, notre cabinet est garnie de compétences dynamiques et réactives pour vous accompagner dans toutes les étapes de la vie de votre entreprise, quelle que soit sa forme.\r\n                Notre principal objectif est d’apporter un haut niveau de qualité à la réalisation de nos missions assuré aussi bien par une formation régulière de notre équipe que par une adaptation permanente de notre organisation et de nos méthodes et approches de travail.\r\n                En 2015, nous avons créé notre bureau virtuel Macompta afin d’être à proximité de tous nos clients.\r\n                Notre cabinet adhère totalement à l’emblème de l’ordre des experts comptables de Tunisie : Science, Conscience et Indépendance.\r\n                </p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n              <div class=\"team-member\">\r\n                <div class=\"photo\">\r\n                  <img src=\"\" class=\"img-fluid\" alt=\"image\">\r\n                </div>          \r\n                <h3>Fayçal Ben Ayed</h3>\r\n                <hr>\r\n                <h5>Propriétaire</h5>\r\n                <p>commissaire aux comptes inscrit au tableau de la compagnie et titulaire du Master C.C.A de l’I.A.E de Lyon 3, et ce, après avoir travaillé dans un cabinet d’expertise comptable de renommée nationale et dans un groupe de sociétés</p>\r\n                <p><button class=\"button\">Voir CV</button></p>\r\n                <hr>\r\n                <div class=\"follow-on\">\r\n                  <ul>\r\n                    <li><a href=\"#\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a></li>\r\n                    <li><a href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a></li>\r\n                    <li><a href=\"#\"><i class=\"fa fa-pinterest-p\" aria-hidden=\"true\"></i></a></li>\r\n                    <li><a href=\"#\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a></li>\r\n                    <li><a href=\"#\"><i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i></a></li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            \r\n          </div>\r\n\r\n\r\n        <div class=\"row\">\r\n          \r\n          <div class=\"col-md-6\">\r\n            <div class=\"team-member\">\r\n              <div class=\"photo\">\r\n                <img src=\"\" class=\"img-fluid\" alt=\"image\">\r\n              </div>          \r\n              <h3>Collaborateur 1</h3>\r\n              <hr>\r\n              <h5>Fonction</h5>\r\n              <p>présentation du collaborateur</p>\r\n              <hr>\r\n              \r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"team-member\">\r\n              <div class=\"photo\">\r\n                <img src=\"\" class=\"img-fluid\" alt=\"image\">\r\n              </div>          \r\n              <h3>collaborateur 2</h3>\r\n              <hr>\r\n              <h5>fonction</h5>\r\n              <p>présentation du collaborateur</p>\r\n              <hr>\r\n              \r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    </body>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/why/why.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/why/why.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\r\n\r\n    <div class=\"jumbotron\">\r\n      <div class=\"container text-center\">\r\n        <h1>Agence Virtuelle</h1>      \r\n        <p>C’est quoi une agence virtuelle, quelle est son approche et pourquoi y adhérer ? </p>\r\n      </div>\r\n    </div>\r\n    <div class=\"container_all\">\r\n        \r\n            <p id=\"intro\">\r\n            Macompta est une agence virtuelle de conseil et d’assistance comptable, juridique, fiscale et sociale. L’idée de création de cette agence avec  toute sa philosophie est issue de notre soucis de faire profiter nos clients des avantages des nouvelles technologies d’information et de communication, dont notamment la rapidité, l’efficacité, la fiabilité, la proximité, la minimisation du coût, etc... \r\nTout comme notre bureau principal, l’agence virtuelle de Macompta est une vraie agence de conseil et d’assistance comptable, juridique, fiscale et sociale. Tous les deux offrent les mêmes services mais avec des approches différentes.\r\nToutefois, l’agence virtuelle de Macompta offre d’autres avantages supplémentaires, et nous citons à titre d’exemples 10 bonnes raisons pour la choisir\r\n\r\n        </p>\r\n    \r\n    <div class=\"container\">    \r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"panel panel-primary\">\r\n            <div class=\"panel-heading\">Simplicité d’utilisation</div>\r\n            <div class=\"panel-body\"><img src=\"../../assets/easy_of_use.jpg\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\"></div>\r\n            <div class=\"panel-footer\">Sans aucune connaissance comptable, vous enregistrez simplement toutes les données concernant votre entité (factures de vente, factures d’achat, banque, caisses…), à travers une interface de saisie personnalisée permettant aux non-comptables de saisir leurs écritures sans connaissances particulières. A titre d’exemple, pour les factures traditionnelles de vente, vous saisissez uniquement  le client (ou vous le choisissez dans une liste de vos clients), la date, le montant hors taxe, la TVA, le timbre et le montant T.T.C.</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\"> \r\n          <div class=\"panel panel-danger\">\r\n            <div class=\"panel-heading\">Sécurité</div>\r\n            <div class=\"panel-body\"><img src=\"../../assets/sécurité.jpg\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\"></div>\r\n            <div class=\"panel-footer\">Toutes les informations saisies sont sauvegardées périodiquement et automatiquement sur divers supports</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\"> \r\n          <div class=\"panel panel-success\">\r\n            <div class=\"panel-heading\">Confidentialité</div>\r\n            <div class=\"panel-body\"><img src=\"../../assets/confidentialité.png\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\"></div>\r\n            <div class=\"panel-footer\">Notre plateforme  vous offre les meilleures garanties en terme de confidentialité et de respect des informations transmises</div>\r\n          </div>\r\n        </div>\r\n        \r\n      </div>\r\n    </div><br>\r\n\r\n\r\n    <div class=\"container\">    \r\n        \r\n          <div class=\"col-sm-4\"> \r\n              <div class=\"panel panel-danger\">\r\n                <div class=\"panel-heading\">Disponibilité</div>\r\n                <div class=\"panel-body\"><img src=\"../../assets/disponibilité.jpg\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\"></div>\r\n                <div class=\"panel-footer\">L’agence virtuelle de Macompta est ouverte 7j/7 et 24h/24. En conséquence, la saisie de vos informations peut se faire à n’importe quel moment.</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4\"> \r\n              <div class=\"panel panel-success\">\r\n                <div class=\"panel-heading\">Proximité</div>\r\n                <div class=\"panel-body\"><img src=\"../../assets/proximité.jpg\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\"></div>\r\n                <div class=\"panel-footer\">Partout où vous êtes en Tunisie ou dans le monde, Macompta le plus proche cabinet de chez vous.</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n                <div class=\"panel panel-primary\">\r\n                  <div class=\"panel-heading\">Garde des documents par vous</div>\r\n                  <div class=\"panel-body\"><img src=\"../../assets/garde_document.jpg\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\"></div>\r\n                  <div class=\"panel-footer\">Etre client de l’agence virtuelle de macompta vous évite de vous décharger den vos documents comptables en les remettant à un cabinet selon le concept habituel (Cabinet présentiel) :  Vous saisissez les informations et vous gardez chez vous vos documents. </div>\r\n                </div>\r\n              </div>\r\n        </div><br>\r\n    \r\n    <div class=\"container\">    \r\n        <div class=\"row\">\r\n            \r\n            <div class=\"col-sm-4\"> \r\n              <div class=\"panel panel-danger\">\r\n                <div class=\"panel-heading\">Gratuité de saisie</div>\r\n                <div class=\"panel-body\"><img src=\"../../assets/gratuit.jpg\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\"></div>\r\n                <div class=\"panel-footer\">En utilisant notre plateforme, vous saisissez GRATUITEMENT vos documents comptables</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4\"> \r\n              <div class=\"panel panel-success\">\r\n                <div class=\"panel-heading\">Rapidité</div>\r\n                <div class=\"panel-body\"><img src=\"../../assets/rapidité.jpg\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\"></div>\r\n                <div class=\"panel-footer\">Vous n'avez pas du temps à perdre ? Nous non plus... Notre plateforme a été conçue de telle sorte les informations sont traitées le plus rapidement possible avec toutes les garanties nécessaire de fiabilité.</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4\"> \r\n                <div class=\"panel panel-danger\">\r\n                  <div class=\"panel-heading\">Dépôt à distance de vos déclarations fiscales</div>\r\n                  <div class=\"panel-body\"><img src=\"../../assets/depot distance.jpg\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\"></div>\r\n                  <div class=\"panel-footer\">En utilisant la plateforme de Macompta, vous pouvez opter pour la téléliquidation de toutes vos déclarations fiscales. Ce mécanisme consiste à déclarer à distance (par internet) et à payer à la recette des finances. il suffit de nous autoriser à le faire et nous nous occupons du reste.</div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n              <div class=\"col-sm-6\"> \r\n                <div class=\"panel panel-success\">\r\n                  <div class=\"panel-heading\">Minimisation des coûts</div>\r\n                  <div class=\"panel-body\"><img src=\"../../assets/cout_reduit.jpg\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\"></div>\r\n                  <div class=\"panel-footer\">En utilisant la plateforme de Macompta, vous épargnez beaucoup d’argent en évitant les déplacements, en chargeant l’un de vos agents de faire gratuitement la saisie, et surtout en payant exactement ce qu’il faut payer. Comment ça ? Effectivement, la philosophie de notre agence virtuelle repose sur le fait d’éviter le système de forfait qui, dans tous les cas, lèse ou bien le cabinet ou bien le client. En utilisant notre plateforme, personne n’est plus lésée du fait que nous ne facturons que notre travail effectif valorisé en fonction de nos interventions réellement faites : Nous facturons nos interventions à la minute.</div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-sm-6\"> \r\n                <div class=\"panel panel-success\">\r\n                  <div class=\"panel-heading\">Dématrialisation</div>\r\n                  <div class=\"panel-body\"><img src=\"../../assets/dematrialisation.jpg\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\"></div>\r\n                  <div class=\"panel-footer\">Avec ces 3 zéros, macompta participe avec ses clients à la protection de l’environnement:\r\n\r\n                    ·         Zéro papier\r\n                    \r\n                    ·         Zéro encre\r\n                    \r\n                    ·         Zéro transport</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n    </div><br><br>\r\n    \r\n</div>\r\n    </body>\r\n");

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

/***/ "./src/app/admin-board/admin-board.component.scss":
/*!********************************************************!*\
  !*** ./src/app/admin-board/admin-board.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-fluid {\n  padding: 60px 50px;\n  background-position: center center;\n  background-size: cover;\n  background-image: url('service background.jpg');\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tYm9hcmQvQzpcXFVzZXJzXFxVU0VSXFxjdm1fZnJvbnRlbmQvc3JjXFxhcHBcXGFkbWluLWJvYXJkXFxhZG1pbi1ib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4tYm9hcmQvYWRtaW4tYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGtDQUFBO0VBQW9DLHNCQUFBO0VBQ25DLCtDQUFBO0VBRUEsZUFBQTtBQ0NMIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4tYm9hcmQvYWRtaW4tYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcclxuICAgIHBhZGRpbmc6IDYwcHggNTBweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7IGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxyXG4gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL3NlcnZpY2VcXCBiYWNrZ3JvdW5kLmpwZycpO1xyXG4gICAgIFxyXG4gICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgfSIsIi5jb250YWluZXItZmx1aWQge1xuICBwYWRkaW5nOiA2MHB4IDUwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9zZXJ2aWNlIGJhY2tncm91bmQuanBnXCIpO1xuICBmb250LXNpemU6IDI1cHg7XG59Il19 */");

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




let AdminBoardComponent = class AdminBoardComponent {
    constructor(UserService, router) {
        this.UserService = UserService;
        this.router = router;
        this.users = [];
    }
    ngOnInit() {
        this.loading = true;
        this.usersSub = this.UserService.users$.subscribe((users) => {
            this.users = users;
            this.loading = false;
        }, (error) => {
            this.loading = false;
            console.log(error);
            this.errormsg = error.message;
        });
        this.UserService.getAll();
        this.loading = false;
    }
    getNavigation(link, id) {
        this.UserService.getUserById(id);
        this.router.navigate([link + '/' + id]);
    }
};
AdminBoardComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AdminBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-board',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-board.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-board/admin-board.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-board.component.scss */ "./src/app/admin-board/admin-board.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], AdminBoardComponent);



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
/* harmony import */ var _moderator_board_moderator_board_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./moderator-board/moderator-board.component */ "./src/app/moderator-board/moderator-board.component.ts");
/* harmony import */ var _modify_user_modify_user_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modify-user/modify-user.component */ "./src/app/modify-user/modify-user.component.ts");
/* harmony import */ var _view_user_view_user_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./view-user/view-user.component */ "./src/app/view-user/view-user.component.ts");
/* harmony import */ var _modify_user_admin_modify_user_admin_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modify-user-admin/modify-user-admin.component */ "./src/app/modify-user-admin/modify-user-admin.component.ts");

















const routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
    },
    { path: 'profil', component: _profil_profil_component__WEBPACK_IMPORTED_MODULE_10__["ProfilComponent"],
    },
    { path: 'modify-user/:id', component: _modify_user_modify_user_component__WEBPACK_IMPORTED_MODULE_14__["ModifyUserComponent"],
    },
    { path: 'modify-user-admin/:id', component: _modify_user_admin_modify_user_admin_component__WEBPACK_IMPORTED_MODULE_16__["ModifyUserAdminComponent"],
    },
    { path: 'view-user/:id', component: _view_user_view_user_component__WEBPACK_IMPORTED_MODULE_15__["ViewUserComponent"] },
    { path: 'admin-board', component: _admin_board_admin_board_component__WEBPACK_IMPORTED_MODULE_11__["AdminBoardComponent"],
    },
    { path: 'user-board', component: _user_board_user_board_component__WEBPACK_IMPORTED_MODULE_12__["UserBoardComponent"],
    },
    { path: 'moderator-board', component: _moderator_board_moderator_board_component__WEBPACK_IMPORTED_MODULE_13__["ModeratorBoardComponent"],
    },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
    },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"],
    },
    { path: 'login/signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"],
    },
    { path: 'admin-board/profil', component: _profil_profil_component__WEBPACK_IMPORTED_MODULE_10__["ProfilComponent"],
    },
    { path: 'why', component: _why_why_component__WEBPACK_IMPORTED_MODULE_9__["WhyComponent"],
    },
    { path: 'who', component: _who_who_component__WEBPACK_IMPORTED_MODULE_8__["WhoComponent"],
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        children: [
            { path: 'home/contact', component: _home_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"] },
        ]
    }
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
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");



let AppComponent = class AppComponent {
    constructor(auth) {
        this.auth = auth;
        this.title = 'cvm_frontend';
    }
    ngOnInit() {
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
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
/* harmony import */ var _moderator_board_moderator_board_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./moderator-board/moderator-board.component */ "./src/app/moderator-board/moderator-board.component.ts");
/* harmony import */ var _modify_user_modify_user_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modify-user/modify-user.component */ "./src/app/modify-user/modify-user.component.ts");
/* harmony import */ var _view_user_view_user_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./view-user/view-user.component */ "./src/app/view-user/view-user.component.ts");
/* harmony import */ var _modify_user_admin_modify_user_admin_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./modify-user-admin/modify-user-admin.component */ "./src/app/modify-user-admin/modify-user-admin.component.ts");

























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
            _moderator_board_moderator_board_component__WEBPACK_IMPORTED_MODULE_21__["ModeratorBoardComponent"],
            _modify_user_modify_user_component__WEBPACK_IMPORTED_MODULE_22__["ModifyUserComponent"],
            _view_user_view_user_component__WEBPACK_IMPORTED_MODULE_23__["ViewUserComponent"],
            _modify_user_admin_modify_user_admin_component__WEBPACK_IMPORTED_MODULE_24__["ModifyUserAdminComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]
        ],
        providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"], useClass: _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__["AuthInterceptor"], multi: true }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer {\n  padding: 5px;\n  /* some padding */\n  text-align: center;\n  /* center the text */\n  background: #1abc9c;\n  /* green background */\n  color: white;\n  /* white text color */\n  bottom: 0;\n  width: 100%;\n}\n\n.navbar {\n  padding: 0px;\n  margin: auto;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0M6XFxVc2Vyc1xcVVNFUlxcY3ZtX2Zyb250ZW5kL3NyY1xcYXBwXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFBYyxpQkFBQTtFQUNkLGtCQUFBO0VBQW9CLG9CQUFBO0VBQ3BCLG1CQUFBO0VBQXFCLHFCQUFBO0VBQ3JCLFlBQUE7RUFBYyxxQkFBQTtFQUNkLFNBQUE7RUFDQSxXQUFBO0FDS0o7O0FERkc7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNLTCIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcclxuICAgIHBhZGRpbmc6IDVweDsgLyogc29tZSBwYWRkaW5nICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IC8qIGNlbnRlciB0aGUgdGV4dCAqL1xyXG4gICAgYmFja2dyb3VuZDogIzFhYmM5YzsgLyogZ3JlZW4gYmFja2dyb3VuZCAqL1xyXG4gICAgY29sb3I6IHdoaXRlOyAvKiB3aGl0ZSB0ZXh0IGNvbG9yICovXHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgIC5uYXZiYXIge1xyXG4gICAgIHBhZGRpbmc6IDBweDtcclxuICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgIH0iLCIuZm9vdGVyIHtcbiAgcGFkZGluZzogNXB4O1xuICAvKiBzb21lIHBhZGRpbmcgKi9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAvKiBjZW50ZXIgdGhlIHRleHQgKi9cbiAgYmFja2dyb3VuZDogIzFhYmM5YztcbiAgLyogZ3JlZW4gYmFja2dyb3VuZCAqL1xuICBjb2xvcjogd2hpdGU7XG4gIC8qIHdoaXRlIHRleHQgY29sb3IgKi9cbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm5hdmJhciB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */");

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

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\n  padding: 20px;\n  /* some padding */\n  text-align: center;\n  /* center the text */\n  background: #1abc9c;\n  /* green background */\n  color: white;\n  /* white text color */\n}\n\n.navbar-brand {\n  background-position: center center;\n  background-size: cover;\n  background-image: url('company_logo.jpg');\n  font-size: 25px;\n  margin: 0%;\n}\n\n.navbar {\n  padding: 0px;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcVVNFUlxcY3ZtX2Zyb250ZW5kL3NyY1xcYXBwXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFBZSxpQkFBQTtFQUNmLGtCQUFBO0VBQW9CLG9CQUFBO0VBQ3BCLG1CQUFBO0VBQXFCLHFCQUFBO0VBQ3JCLFlBQUE7RUFBYyxxQkFBQTtBQ0tsQjs7QURIRTtFQUNFLGtDQUFBO0VBQW9DLHNCQUFBO0VBQ25DLHlDQUFBO0VBRUEsZUFBQTtFQUNBLFVBQUE7QUNNTDs7QURIRztFQUNFLFlBQUE7RUFDQSxTQUFBO0FDTUwiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAyMHB4OyAvKiBzb21lIHBhZGRpbmcgKi9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgLyogY2VudGVyIHRoZSB0ZXh0ICovXHJcbiAgICBiYWNrZ3JvdW5kOiAjMWFiYzljOyAvKiBncmVlbiBiYWNrZ3JvdW5kICovXHJcbiAgICBjb2xvcjogd2hpdGU7IC8qIHdoaXRlIHRleHQgY29sb3IgKi9cclxuICB9XHJcbiAgLm5hdmJhci1icmFuZCB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyOyBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcclxuICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9jb21wYW55X2xvZ28uanBnJyk7XHJcbiAgICAgXHJcbiAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgIG1hcmdpbjogMCU7XHJcbiAgIFxyXG4gICB9XHJcbiAgIC5uYXZiYXIge1xyXG4gICAgIHBhZGRpbmc6IDBweDtcclxuICAgICBtYXJnaW46IDA7XHJcbiAgIH1cclxuICBcclxuICAiLCIuaGVhZGVyIHtcbiAgcGFkZGluZzogMjBweDtcbiAgLyogc29tZSBwYWRkaW5nICovXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLyogY2VudGVyIHRoZSB0ZXh0ICovXG4gIGJhY2tncm91bmQ6ICMxYWJjOWM7XG4gIC8qIGdyZWVuIGJhY2tncm91bmQgKi9cbiAgY29sb3I6IHdoaXRlO1xuICAvKiB3aGl0ZSB0ZXh0IGNvbG9yICovXG59XG5cbi5uYXZiYXItYnJhbmQge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvY29tcGFueV9sb2dvLmpwZ1wiKTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBtYXJnaW46IDAlO1xufVxuXG4ubmF2YmFyIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDA7XG59Il19 */");

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



let HeaderComponent = class HeaderComponent {
    constructor(Auth) {
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
        window.location.reload();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]])
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
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  font-family: Arial, Helvetica, sans-serif;\n  width: 100%;\n}\n\n.col-sm-5 {\n  color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb250YWN0L0M6XFxVc2Vyc1xcVVNFUlxcY3ZtX2Zyb250ZW5kL3NyY1xcYXBwXFxob21lXFxjb250YWN0XFxjb250YWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlDQUFBO0VBRUYsV0FBQTtBQ0FGOztBREVBO0VBRUksV0FBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNvbC1zbS01e1xyXG4gICAgXHJcbiAgICBjb2xvcjpibHVlO1xyXG4gIH0iLCJib2R5IHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29sLXNtLTUge1xuICBjb2xvcjogYmx1ZTtcbn0iXX0= */");

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


let ContactComponent = class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.scss */ "./src/app/home/contact/contact.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony default export */ __webpack_exports__["default"] = ("h2 {\n  text-align: center;\n  margin: 0;\n}\n\n.w3-modal {\n  display: none;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: black;\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4);\n  /* Black w/ opacity */\n}\n\n.w3-button {\n  width: 100%;\n}\n\n.actualitycarousel {\n  background-position: center center;\n  background-size: cover;\n  background-image: url('carousel background.jpg');\n  margin: 0;\n  padding: 0;\n  font-size: 25px;\n}\n\n.carousel-control.right, .carousel-control.left {\n  background-image: none;\n  color: #f4511e;\n}\n\n.carousel-indicators li {\n  border-color: #f4511e;\n}\n\n.carousel-indicators li.active {\n  background-color: #f4511e;\n}\n\n.item h4 {\n  font-size: 19px;\n  line-height: 1.375em;\n  font-weight: 400;\n  font-style: italic;\n  margin: 70px 0;\n}\n\n.item span {\n  font-style: normal;\n}\n\n.container-fluid {\n  padding: 60px 50px;\n  background-position: center center;\n  background-size: cover;\n  background-image: url('service background.jpg');\n  font-size: 25px;\n}\n\n#expertisecont {\n  padding: 60px 50px;\n  background-position: center center;\n  background-size: cover;\n  background-image: url('expertiseback.jpg');\n  font-size: 25px;\n}\n\n.logo-small {\n  color: #f4511e;\n  font-size: 50px;\n}\n\n.col-sm-4 {\n  color: red;\n}\n\n.col-sm-4_2 {\n  color: red;\n  text-align: center;\n}\n\na:link {\n  text-decoration: none;\n}\n\n.container-fluid_2 {\n  padding: 60px 50px;\n  background-position: center center;\n  background-size: cover;\n  background-image: url('reference background.png');\n  font-size: 25px;\n}\n\n.w3-container {\n  background-image: none;\n}\n\n@media screen and (max-width: 768px) {\n  .col-sm-4 {\n    text-align: center;\n    margin: 25px 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXFVTRVJcXGN2bV9mcm9udGVuZC9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0FDQ0o7O0FEQ0U7RUFHRSxhQUFBO0VBQWUsc0JBQUE7RUFDZixlQUFBO0VBQWlCLGtCQUFBO0VBQ2pCLFVBQUE7RUFBWSxlQUFBO0VBQ1osT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQWEsZUFBQTtFQUNiLFlBQUE7RUFBYyxnQkFBQTtFQUNkLGNBQUE7RUFBZ0IsNEJBQUE7RUFDaEIsdUJBQUE7RUFBOEIsbUJBQUE7RUFDOUIsb0NBQUE7RUFBbUMscUJBQUE7QUNRdkM7O0FETkU7RUFDRSxXQUFBO0FDU0o7O0FEUEU7RUFDRSxrQ0FBQTtFQUFvQyxzQkFBQTtFQUNuQyxnREFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ1dMOztBRFBFO0VBQ0Usc0JBQUE7RUFDQSxjQUFBO0FDVUo7O0FEUkc7RUFDRSxxQkFBQTtBQ1dMOztBRFRHO0VBQ0UseUJBQUE7QUNZTDs7QURWRztFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDYUw7O0FEWEc7RUFDRSxrQkFBQTtBQ2NMOztBRFhHO0VBQ0Msa0JBQUE7RUFDQSxrQ0FBQTtFQUFvQyxzQkFBQTtFQUNuQywrQ0FBQTtFQUVBLGVBQUE7QUNjTDs7QURaRztFQUNDLGtCQUFBO0VBQ0Esa0NBQUE7RUFBb0Msc0JBQUE7RUFDbkMsMENBQUE7RUFFQSxlQUFBO0FDZUw7O0FEYkc7RUFDQyxjQUFBO0VBQ0EsZUFBQTtBQ2dCSjs7QURkRztFQUNFLFVBQUE7QUNpQkw7O0FEZkc7RUFDQyxVQUFBO0VBQ0Esa0JBQUE7QUNrQko7O0FEaEJFO0VBQ0UscUJBQUE7QUNtQko7O0FEakJFO0VBQ0Usa0JBQUE7RUFDQSxrQ0FBQTtFQUFvQyxzQkFBQTtFQUNuQyxpREFBQTtFQUVBLGVBQUE7QUNvQkw7O0FEbEJHO0VBQ0Usc0JBQUE7QUNxQkw7O0FEakJHO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLGNBQUE7RUNvQkw7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICAudzMtbW9kYWx7XHJcbiAgICBcclxuICBcclxuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cclxuICAgIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xyXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXHJcbiAgfVxyXG4gIC53My1idXR0b257XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmFjdHVhbGl0eWNhcm91c2VsIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7IGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxyXG4gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2Nhcm91c2VsXFwgYmFja2dyb3VuZC5qcGcnKTtcclxuICAgICBtYXJnaW46IDA7XHJcbiAgICAgcGFkZGluZzogMDtcclxuICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgXHJcbiAgIFxyXG4gICB9XHJcbiAgLmNhcm91c2VsLWNvbnRyb2wucmlnaHQsIC5jYXJvdXNlbC1jb250cm9sLmxlZnQge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgIGNvbG9yOiAjZjQ1MTFlO1xyXG4gICB9XHJcbiAgIC5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpIHtcclxuICAgICBib3JkZXItY29sb3I6ICNmNDUxMWU7XHJcbiAgIH1cclxuICAgLmNhcm91c2VsLWluZGljYXRvcnMgbGkuYWN0aXZlIHtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ1MTFlO1xyXG4gICB9XHJcbiAgIC5pdGVtIGg0IHtcclxuICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgbGluZS1oZWlnaHQ6IDEuMzc1ZW07XHJcbiAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgbWFyZ2luOiA3MHB4IDA7XHJcbiAgIH1cclxuICAgLml0ZW0gc3BhbiB7XHJcbiAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICB9XHJcbiAgIFxyXG4gICAuY29udGFpbmVyLWZsdWlkIHtcclxuICAgIHBhZGRpbmc6IDYwcHggNTBweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7IGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxyXG4gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL3NlcnZpY2VcXCBiYWNrZ3JvdW5kLmpwZycpO1xyXG4gICAgIFxyXG4gICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgfVxyXG4gICAjZXhwZXJ0aXNlY29udHtcclxuICAgIHBhZGRpbmc6IDYwcHggNTBweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7IGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxyXG4gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2V4cGVydGlzZWJhY2suanBnJyk7XHJcbiAgICAgXHJcbiAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICB9XHJcbiAgIC5sb2dvLXNtYWxsIHtcclxuICAgIGNvbG9yOiAjZjQ1MTFlO1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICB9XHJcbiAgIC5jb2wtc20tNHtcclxuICAgICBjb2xvcjogcmVkO1xyXG4gICB9XHJcbiAgIC5jb2wtc20tNF8ye1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgYTpsaW5re1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICAuY29udGFpbmVyLWZsdWlkXzIge1xyXG4gICAgcGFkZGluZzogNjBweCA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjsgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXHJcbiAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvcmVmZXJlbmNlXFwgYmFja2dyb3VuZC5wbmcnKTtcclxuICAgICBcclxuICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgIH1cclxuICAgLnczLWNvbnRhaW5lcntcclxuICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgXHJcbiAgIH1cclxuICBcclxuICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAuY29sLXNtLTQge1xyXG4gICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgbWFyZ2luOiAyNXB4IDA7XHJcbiAgICAgfVxyXG4gICB9IiwiaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbn1cblxuLnczLW1vZGFsIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgcG9zaXRpb246IGZpeGVkO1xuICAvKiBTdGF5IGluIHBsYWNlICovXG4gIHotaW5kZXg6IDE7XG4gIC8qIFNpdCBvbiB0b3AgKi9cbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgLyogRnVsbCB3aWR0aCAqL1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8qIEZ1bGwgaGVpZ2h0ICovXG4gIG92ZXJmbG93OiBhdXRvO1xuICAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgLyogRmFsbGJhY2sgY29sb3IgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAvKiBCbGFjayB3LyBvcGFjaXR5ICovXG59XG5cbi53My1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFjdHVhbGl0eWNhcm91c2VsIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2Nhcm91c2VsIGJhY2tncm91bmQuanBnXCIpO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmNhcm91c2VsLWNvbnRyb2wucmlnaHQsIC5jYXJvdXNlbC1jb250cm9sLmxlZnQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBjb2xvcjogI2Y0NTExZTtcbn1cblxuLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xuICBib3JkZXItY29sb3I6ICNmNDUxMWU7XG59XG5cbi5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDUxMWU7XG59XG5cbi5pdGVtIGg0IHtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBsaW5lLWhlaWdodDogMS4zNzVlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBtYXJnaW46IDcwcHggMDtcbn1cblxuLml0ZW0gc3BhbiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLmNvbnRhaW5lci1mbHVpZCB7XG4gIHBhZGRpbmc6IDYwcHggNTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3NlcnZpY2UgYmFja2dyb3VuZC5qcGdcIik7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuI2V4cGVydGlzZWNvbnQge1xuICBwYWRkaW5nOiA2MHB4IDUwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9leHBlcnRpc2ViYWNrLmpwZ1wiKTtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4ubG9nby1zbWFsbCB7XG4gIGNvbG9yOiAjZjQ1MTFlO1xuICBmb250LXNpemU6IDUwcHg7XG59XG5cbi5jb2wtc20tNCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5jb2wtc20tNF8yIHtcbiAgY29sb3I6IHJlZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5hOmxpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jb250YWluZXItZmx1aWRfMiB7XG4gIHBhZGRpbmc6IDYwcHggNTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3JlZmVyZW5jZSBiYWNrZ3JvdW5kLnBuZ1wiKTtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4udzMtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbC1zbS00IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAyNXB4IDA7XG4gIH1cbn0iXX0= */");

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

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  font-family: Arial, Helvetica, sans-serif;\n  height: 800px;\n  width: 100%;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n/* style the container */\n\n.container {\n  position: relative;\n  border-radius: 5px;\n  background-color: #f2f2f2;\n  padding: 20px 20px 30px 20px;\n  margin-top: 300px;\n}\n\n/* style inputs and link buttons */\n\ninput,\n.btn {\n  width: 100%;\n  padding: 12px;\n  border: none;\n  border-radius: 4px;\n  margin: 5px 0;\n  opacity: 0.85;\n  display: inline-block;\n  font-size: 17px;\n  line-height: 20px;\n}\n\ninput:hover,\n.btn:hover {\n  opacity: 1;\n}\n\n/* add appropriate colors to fb, twitter and google buttons */\n\n.fb {\n  background-color: #3B5998;\n  color: white;\n}\n\n.twitter {\n  background-color: #55ACEE;\n  color: white;\n}\n\n.google {\n  background-color: #dd4b39;\n  color: white;\n}\n\n/* style the submit button */\n\ninput[type=submit] {\n  background-color: #04AA6D;\n  color: white;\n  cursor: pointer;\n}\n\ninput[type=submit]:hover {\n  background-color: #45a049;\n}\n\n/* Two-column layout */\n\n.col {\n  float: left;\n  width: 50%;\n  margin: auto;\n  padding: 0 50px;\n  margin-top: 6px;\n}\n\n/* Clear floats after the columns */\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n/* vertical line */\n\n.vl {\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%);\n  border: 2px solid #ddd;\n  height: 175px;\n}\n\n/* text inside the vertical line */\n\n.vl-innertext {\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #f1f1f1;\n  border: 1px solid #ccc;\n  border-radius: 50%;\n  padding: 8px 10px;\n}\n\n/* hide some text on medium and large screens */\n\n.hide-md-lg {\n  display: none;\n}\n\n/* bottom container */\n\n.bottom-container {\n  text-align: center;\n  background-color: #666;\n  border-radius: 0px 0px 4px 4px;\n}\n\n/* Center the loader */\n\n#loader {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  z-index: 1;\n  width: 120px;\n  height: 120px;\n  margin: -76px 0 0 -76px;\n  border: 16px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 16px solid #3498db;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite;\n  margin-top: 200px;\n}\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n/* Responsive layout - when the screen is less than 650px wide, make the two columns stack on top of each other instead of next to each other */\n\n@media screen and (max-width: 650px) {\n  .col {\n    width: 100%;\n    margin-top: 0;\n  }\n\n  /* hide the vertical line */\n  .vl {\n    display: none;\n  }\n\n  /* show the hidden text on small screens */\n  .hide-md-lg {\n    display: block;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxVU0VSXFxjdm1fZnJvbnRlbmQvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5Q0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDQ0o7O0FER0U7RUFDRSxzQkFBQTtBQ0FKOztBREdFLHdCQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREtFLGtDQUFBOztBQUNBOztFQUVFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0ZKOztBRE1FOztFQUVFLFVBQUE7QUNISjs7QURNRSw2REFBQTs7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ0hKOztBRE1FO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FDSEo7O0FETUU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUNISjs7QURNRSw0QkFBQTs7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNISjs7QURNRTtFQUNFLHlCQUFBO0FDSEo7O0FETUUsc0JBQUE7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0hKOztBRE1FLG1DQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDSEo7O0FETUUsa0JBQUE7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQ0hKOztBRE1FLGtDQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0hKOztBRE1FLCtDQUFBOztBQUNBO0VBQ0UsYUFBQTtBQ0hKOztBRE1FLHFCQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FDSEo7O0FETUUsc0JBQUE7O0FBQ0Y7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUJBQUE7QUNIRjs7QURNQTtFQUNFO0lBQUssK0JBQUE7RUNGTDtFREdBO0lBQU8saUNBQUE7RUNBUDtBQUNGOztBREVBO0VBQ0U7SUFBSyx1QkFBQTtFQ0NMO0VEQUE7SUFBTyx5QkFBQTtFQ0dQO0FBQ0Y7O0FEREUsK0lBQUE7O0FBQ0E7RUFDRTtJQUNFLFdBQUE7SUFDQSxhQUFBO0VDR0o7O0VEREUsMkJBQUE7RUFDQTtJQUNFLGFBQUE7RUNJSjs7RURGRSwwQ0FBQTtFQUNBO0lBQ0UsY0FBQTtJQUNBLGtCQUFBO0VDS0o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGhlaWdodDogODAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICAqIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIHN0eWxlIHRoZSBjb250YWluZXIgKi9cclxuICAuY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICAgIHBhZGRpbmc6IDIwcHggMjBweCAzMHB4IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMDBweDtcclxuICAgIFxyXG4gICAgXHJcbiAgfSBcclxuICBcclxuICAvKiBzdHlsZSBpbnB1dHMgYW5kIGxpbmsgYnV0dG9ucyAqL1xyXG4gIGlucHV0LFxyXG4gIC5idG4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxuICAgIG9wYWNpdHk6IDAuODU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgXHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0OmhvdmVyLFxyXG4gIC5idG46aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgXHJcbiAgLyogYWRkIGFwcHJvcHJpYXRlIGNvbG9ycyB0byBmYiwgdHdpdHRlciBhbmQgZ29vZ2xlIGJ1dHRvbnMgKi9cclxuICAuZmIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNCNTk5ODtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLnR3aXR0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1QUNFRTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLmdvb2dsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQ0YjM5O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAvKiBzdHlsZSB0aGUgc3VibWl0IGJ1dHRvbiAqL1xyXG4gIGlucHV0W3R5cGU9c3VibWl0XSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDRBQTZEO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTA0OTtcclxuICB9XHJcbiAgXHJcbiAgLyogVHdvLWNvbHVtbiBsYXlvdXQgKi9cclxuICAuY29sIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDAgNTBweDtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxuICB9XHJcbiAgXHJcbiAgLyogQ2xlYXIgZmxvYXRzIGFmdGVyIHRoZSBjb2x1bW5zICovXHJcbiAgLnJvdzphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICB9XHJcbiAgXHJcbiAgLyogdmVydGljYWwgbGluZSAqL1xyXG4gIC52bCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkZGQ7XHJcbiAgICBoZWlnaHQ6IDE3NXB4O1xyXG4gIH1cclxuICBcclxuICAvKiB0ZXh0IGluc2lkZSB0aGUgdmVydGljYWwgbGluZSAqL1xyXG4gIC52bC1pbm5lcnRleHQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcGFkZGluZzogOHB4IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIGhpZGUgc29tZSB0ZXh0IG9uIG1lZGl1bSBhbmQgbGFyZ2Ugc2NyZWVucyAqL1xyXG4gIC5oaWRlLW1kLWxnIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIGJvdHRvbSBjb250YWluZXIgKi9cclxuICAuYm90dG9tLWNvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA0cHggNHB4O1xyXG4gIH1cclxuXHJcbiAgLyogQ2VudGVyIHRoZSBsb2FkZXIgKi9cclxuI2xvYWRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDUwJTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG4gIG1hcmdpbjogLTc2cHggMCAwIC03NnB4O1xyXG4gIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXItdG9wOiAxNnB4IHNvbGlkICMzNDk4ZGI7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgbWFyZ2luLXRvcDogMjAwcHg7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbn1cclxuICBcclxuICAvKiBSZXNwb25zaXZlIGxheW91dCAtIHdoZW4gdGhlIHNjcmVlbiBpcyBsZXNzIHRoYW4gNjUwcHggd2lkZSwgbWFrZSB0aGUgdHdvIGNvbHVtbnMgc3RhY2sgb24gdG9wIG9mIGVhY2ggb3RoZXIgaW5zdGVhZCBvZiBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgLmNvbCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgfVxyXG4gICAgLyogaGlkZSB0aGUgdmVydGljYWwgbGluZSAqL1xyXG4gICAgLnZsIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC8qIHNob3cgdGhlIGhpZGRlbiB0ZXh0IG9uIHNtYWxsIHNjcmVlbnMgKi9cclxuICAgIC5oaWRlLW1kLWxnIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9IiwiYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBoZWlnaHQ6IDgwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qIHN0eWxlIHRoZSBjb250YWluZXIgKi9cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgcGFkZGluZzogMjBweCAyMHB4IDMwcHggMjBweDtcbiAgbWFyZ2luLXRvcDogMzAwcHg7XG59XG5cbi8qIHN0eWxlIGlucHV0cyBhbmQgbGluayBidXR0b25zICovXG5pbnB1dCxcbi5idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTJweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbjogNXB4IDA7XG4gIG9wYWNpdHk6IDAuODU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxN3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuaW5wdXQ6aG92ZXIsXG4uYnRuOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLyogYWRkIGFwcHJvcHJpYXRlIGNvbG9ycyB0byBmYiwgdHdpdHRlciBhbmQgZ29vZ2xlIGJ1dHRvbnMgKi9cbi5mYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzQjU5OTg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnR3aXR0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTVBQ0VFO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5nb29nbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQ0YjM5O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi8qIHN0eWxlIHRoZSBzdWJtaXQgYnV0dG9uICovXG5pbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDRBQTZEO1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTA0OTtcbn1cblxuLyogVHdvLWNvbHVtbiBsYXlvdXQgKi9cbi5jb2wge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAwIDUwcHg7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cblxuLyogQ2xlYXIgZmxvYXRzIGFmdGVyIHRoZSBjb2x1bW5zICovXG4ucm93OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4vKiB2ZXJ0aWNhbCBsaW5lICovXG4udmwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNkZGQ7XG4gIGhlaWdodDogMTc1cHg7XG59XG5cbi8qIHRleHQgaW5zaWRlIHRoZSB2ZXJ0aWNhbCBsaW5lICovXG4udmwtaW5uZXJ0ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogOHB4IDEwcHg7XG59XG5cbi8qIGhpZGUgc29tZSB0ZXh0IG9uIG1lZGl1bSBhbmQgbGFyZ2Ugc2NyZWVucyAqL1xuLmhpZGUtbWQtbGcge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBib3R0b20gY29udGFpbmVyICovXG4uYm90dG9tLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA0cHggNHB4O1xufVxuXG4vKiBDZW50ZXIgdGhlIGxvYWRlciAqL1xuI2xvYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xuICBtYXJnaW46IC03NnB4IDAgMCAtNzZweDtcbiAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjMzQ5OGRiO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG4gIG1hcmdpbi10b3A6IDIwMHB4O1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbi8qIFJlc3BvbnNpdmUgbGF5b3V0IC0gd2hlbiB0aGUgc2NyZWVuIGlzIGxlc3MgdGhhbiA2NTBweCB3aWRlLCBtYWtlIHRoZSB0d28gY29sdW1ucyBzdGFjayBvbiB0b3Agb2YgZWFjaCBvdGhlciBpbnN0ZWFkIG9mIG5leHQgdG8gZWFjaCBvdGhlciAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcbiAgLmNvbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuXG4gIC8qIGhpZGUgdGhlIHZlcnRpY2FsIGxpbmUgKi9cbiAgLnZsIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLyogc2hvdyB0aGUgaGlkZGVuIHRleHQgb24gc21hbGwgc2NyZWVucyAqL1xuICAuaGlkZS1tZC1sZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59Il19 */");

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
                this.civilite = this.tokenStorage.getUser().civilite;
                this.reloadPage();
            },
            error: err => {
                this.loading = false;
                this.errorMessage = err.message;
                this.isLoginFailed = true;
            }
        });
    }
    reloadPage() {
        window.location.reload();
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

/***/ "./src/app/moderator-board/moderator-board.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/moderator-board/moderator-board.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGVyYXRvci1ib2FyZC9tb2RlcmF0b3ItYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/moderator-board/moderator-board.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/moderator-board/moderator-board.component.ts ***!
  \**************************************************************/
/*! exports provided: ModeratorBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeratorBoardComponent", function() { return ModeratorBoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ModeratorBoardComponent = class ModeratorBoardComponent {
    constructor() { }
    ngOnInit() {
    }
};
ModeratorBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-moderator-board',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./moderator-board.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/moderator-board/moderator-board.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./moderator-board.component.scss */ "./src/app/moderator-board/moderator-board.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ModeratorBoardComponent);



/***/ }),

/***/ "./src/app/modify-user-admin/modify-user-admin.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/modify-user-admin/modify-user-admin.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2 {\n  text-align: center;\n}\n\n.bodycontainer {\n  height: 1000px;\n  width: 100%;\n  background-color: white;\n}\n\ndiv.container {\n  margin-top: 10%;\n  width: 50%;\n  background-color: rgba(187, 202, 202, 0.774);\n  padding: 30px;\n}\n\nform {\n  border: 3px solid #f1f1f1;\n}\n\n/* Style the input container */\n\n.input-container {\n  display: flex;\n  width: 100%;\n  margin-bottom: 15px;\n}\n\n/* Style the form icons */\n\n.icon {\n  padding: 10px;\n  background: dodgerblue;\n  color: white;\n  min-width: 50px;\n  text-align: center;\n}\n\n.gender_icon {\n  padding: 10px;\n  background: dodgerblue;\n  color: white;\n  min-width: 50px;\n  text-align: center;\n}\n\n/* Style the input fields */\n\n.input-field {\n  width: 100%;\n  padding: 10px;\n  outline: none;\n}\n\n.input-field:focus {\n  border: 2px solid dodgerblue;\n}\n\n/* Set a style for the submit button */\n\n.btn {\n  background-color: dodgerblue;\n  color: white;\n  padding: 15px 20px;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  opacity: 0.9;\n}\n\n/* Center the loader */\n\n#loader {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  z-index: 1;\n  width: 120px;\n  height: 120px;\n  border: 16px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 16px solid #3498db;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite;\n  margin-top: 200px;\n}\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.btn:hover {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kaWZ5LXVzZXItYWRtaW4vQzpcXFVzZXJzXFxVU0VSXFxjdm1fZnJvbnRlbmQvc3JjXFxhcHBcXG1vZGlmeS11c2VyLWFkbWluXFxtb2RpZnktdXNlci1hZG1pbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kaWZ5LXVzZXItYWRtaW4vbW9kaWZ5LXVzZXItYWRtaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBRENBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQ0VGOztBREFBO0VBQ0ksZUFBQTtFQUNFLFVBQUE7RUFDQSw0Q0FBQTtFQUNBLGFBQUE7QUNHTjs7QURESTtFQUNJLHlCQUFBO0FDSVI7O0FEREksOEJBQUE7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDSU47O0FEREkseUJBQUE7O0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDSU47O0FERkk7RUFFUSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDSVo7O0FEQUksMkJBQUE7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUNHTjs7QURBSTtFQUNFLDRCQUFBO0FDR047O0FEQUksc0NBQUE7O0FBQ0E7RUFFRSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNFTjs7QURFSSxzQkFBQTs7QUFDSjtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFFQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFO0lBQUssK0JBQUE7RUNDTDtFREFBO0lBQU8saUNBQUE7RUNHUDtBQUNGOztBRERBO0VBQ0U7SUFBSyx1QkFBQTtFQ0lMO0VESEE7SUFBTyx5QkFBQTtFQ01QO0FBQ0Y7O0FESkk7RUFDRSxVQUFBO0FDTU4iLCJmaWxlIjoic3JjL2FwcC9tb2RpZnktdXNlci1hZG1pbi9tb2RpZnktdXNlci1hZG1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5ib2R5Y29udGFpbmVye1xyXG4gIGhlaWdodDogMTAwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbmRpdi5jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg3LCAyMDIsIDIwMiwgMC43NzQpO1xyXG4gICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgZm9ybSB7XHJcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAvKiBTdHlsZSB0aGUgaW5wdXQgY29udGFpbmVyICovXHJcbiAgICAuaW5wdXQtY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qIFN0eWxlIHRoZSBmb3JtIGljb25zICovXHJcbiAgICAuaWNvbiB7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IGRvZGdlcmJsdWU7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgbWluLXdpZHRoOiA1MHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuZ2VuZGVyX2ljb257XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGRvZGdlcmJsdWU7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyogU3R5bGUgdGhlIGlucHV0IGZpZWxkcyAqL1xyXG4gICAgLmlucHV0LWZpZWxkIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5pbnB1dC1maWVsZDpmb2N1cyB7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGRvZGdlcmJsdWU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qIFNldCBhIHN0eWxlIGZvciB0aGUgc3VibWl0IGJ1dHRvbiAqL1xyXG4gICAgLmJ0biB7XHJcbiAgICAgICAgXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qIENlbnRlciB0aGUgbG9hZGVyICovXHJcbiNsb2FkZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgei1pbmRleDogMTtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxuICBcclxuICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMztcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjMzQ5OGRiO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xyXG4gIG1hcmdpbi10b3A6IDIwMHB4O1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XHJcbiAgMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNwaW4ge1xyXG4gIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG59XHJcblxyXG4gICAgLmJ0bjpob3ZlciB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9IiwiaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ib2R5Y29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuZGl2LmNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgd2lkdGg6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODcsIDIwMiwgMjAyLCAwLjc3NCk7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG5cbmZvcm0ge1xuICBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxO1xufVxuXG4vKiBTdHlsZSB0aGUgaW5wdXQgY29udGFpbmVyICovXG4uaW5wdXQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi8qIFN0eWxlIHRoZSBmb3JtIGljb25zICovXG4uaWNvbiB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IGRvZGdlcmJsdWU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWluLXdpZHRoOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5nZW5kZXJfaWNvbiB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IGRvZGdlcmJsdWU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWluLXdpZHRoOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIFN0eWxlIHRoZSBpbnB1dCBmaWVsZHMgKi9cbi5pbnB1dC1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uaW5wdXQtZmllbGQ6Zm9jdXMge1xuICBib3JkZXI6IDJweCBzb2xpZCBkb2RnZXJibHVlO1xufVxuXG4vKiBTZXQgYSBzdHlsZSBmb3IgdGhlIHN1Ym1pdCBidXR0b24gKi9cbi5idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBvcGFjaXR5OiAwLjk7XG59XG5cbi8qIENlbnRlciB0aGUgbG9hZGVyICovXG4jbG9hZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci10b3A6IDE2cHggc29saWQgIzM0OThkYjtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xuICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xuICBtYXJnaW4tdG9wOiAyMDBweDtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG4uYnRuOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn0iXX0= */");

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







let ModifyUserAdminComponent = class ModifyUserAdminComponent {
    constructor(formBuilder, userservice, route, router, auth) {
        this.formBuilder = formBuilder;
        this.userservice = userservice;
        this.route = route;
        this.router = router;
        this.auth = auth;
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
                    email: [{ value: this.user.email, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    fonction: [this.user.fonction, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    password: [this.user.password, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    secteur: [this.user.secteur, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    civilite: [this.user.civilite, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    raisonsociale: [this.user.raisonsociale, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    nomsociete: [this.user.nomsociete, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    clientcode: [{ value: this.user.clientcode, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                });
                this.loading = false;
            });
        });
    }
    onSubmit() {
        this.loading = true;
        const user = new _models_user_model__WEBPACK_IMPORTED_MODULE_5__["User"]();
        user.userId = this.user._id;
        user.role = this.userForm.get('role').value;
        user.email = this.userForm.get('email').value;
        user.password = this.userForm.get('password').value;
        user.firstname = this.userForm.get('firstname').value;
        user.lastname = this.userForm.get('lastname').value;
        user.fonction = this.userForm.get('fonction').value;
        user.secteur = this.userForm.get('secteur').value;
        user.civilite = this.userForm.get('civilite').value;
        user.raisonsociale = this.userForm.get('raisonsociale').value;
        user.nomsociete = this.userForm.get('nomsociete').value;
        user.clientcode = this.userForm.get('clientcode').value;
        this.userservice.modifyUserById(user.userId, user).then(() => {
            this.userForm.reset();
            this.loading = false;
            this.router.navigate(['admin-board']);
        }, (error) => {
            this.loading = false;
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
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
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
        _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
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
/* harmony default export */ __webpack_exports__["default"] = ("h2 {\n  text-align: center;\n}\n\n.bodycontainer {\n  height: 1000px;\n  width: 100%;\n  background-color: white;\n}\n\ndiv.container {\n  margin-top: 10%;\n  width: 50%;\n  background-color: rgba(187, 202, 202, 0.774);\n  padding: 30px;\n}\n\nform {\n  border: 3px solid #f1f1f1;\n}\n\n/* Style the input container */\n\n.input-container {\n  display: flex;\n  width: 100%;\n  margin-bottom: 15px;\n}\n\n/* Style the form icons */\n\n.icon {\n  padding: 10px;\n  background: dodgerblue;\n  color: white;\n  min-width: 50px;\n  text-align: center;\n}\n\n.gender_icon {\n  padding: 10px;\n  background: dodgerblue;\n  color: white;\n  min-width: 50px;\n  text-align: center;\n}\n\n/* Style the input fields */\n\n.input-field {\n  width: 100%;\n  padding: 10px;\n  outline: none;\n}\n\n.input-field:focus {\n  border: 2px solid dodgerblue;\n}\n\n/* Set a style for the submit button */\n\n.btn {\n  background-color: dodgerblue;\n  color: white;\n  padding: 15px 20px;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  opacity: 0.9;\n}\n\n/* Center the loader */\n\n#loader {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  z-index: 1;\n  width: 120px;\n  height: 120px;\n  border: 16px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 16px solid #3498db;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite;\n  margin-top: 200px;\n}\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.btn:hover {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kaWZ5LXVzZXIvQzpcXFVzZXJzXFxVU0VSXFxjdm1fZnJvbnRlbmQvc3JjXFxhcHBcXG1vZGlmeS11c2VyXFxtb2RpZnktdXNlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kaWZ5LXVzZXIvbW9kaWZ5LXVzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBRENBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQ0VGOztBREFBO0VBQ0ksZUFBQTtFQUNFLFVBQUE7RUFDQSw0Q0FBQTtFQUNBLGFBQUE7QUNHTjs7QURESTtFQUNJLHlCQUFBO0FDSVI7O0FEREksOEJBQUE7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDSU47O0FEREkseUJBQUE7O0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDSU47O0FERkk7RUFFUSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDSVo7O0FEQUksMkJBQUE7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUNHTjs7QURBSTtFQUNFLDRCQUFBO0FDR047O0FEQUksc0NBQUE7O0FBQ0E7RUFFRSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNFTjs7QURFSSxzQkFBQTs7QUFDSjtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFFQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFO0lBQUssK0JBQUE7RUNDTDtFREFBO0lBQU8saUNBQUE7RUNHUDtBQUNGOztBRERBO0VBQ0U7SUFBSyx1QkFBQTtFQ0lMO0VESEE7SUFBTyx5QkFBQTtFQ01QO0FBQ0Y7O0FESkk7RUFDRSxVQUFBO0FDTU4iLCJmaWxlIjoic3JjL2FwcC9tb2RpZnktdXNlci9tb2RpZnktdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5ib2R5Y29udGFpbmVye1xyXG4gIGhlaWdodDogMTAwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbmRpdi5jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg3LCAyMDIsIDIwMiwgMC43NzQpO1xyXG4gICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgZm9ybSB7XHJcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAvKiBTdHlsZSB0aGUgaW5wdXQgY29udGFpbmVyICovXHJcbiAgICAuaW5wdXQtY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qIFN0eWxlIHRoZSBmb3JtIGljb25zICovXHJcbiAgICAuaWNvbiB7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IGRvZGdlcmJsdWU7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgbWluLXdpZHRoOiA1MHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuZ2VuZGVyX2ljb257XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGRvZGdlcmJsdWU7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyogU3R5bGUgdGhlIGlucHV0IGZpZWxkcyAqL1xyXG4gICAgLmlucHV0LWZpZWxkIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5pbnB1dC1maWVsZDpmb2N1cyB7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGRvZGdlcmJsdWU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qIFNldCBhIHN0eWxlIGZvciB0aGUgc3VibWl0IGJ1dHRvbiAqL1xyXG4gICAgLmJ0biB7XHJcbiAgICAgICAgXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qIENlbnRlciB0aGUgbG9hZGVyICovXHJcbiNsb2FkZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgei1pbmRleDogMTtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxuICBcclxuICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMztcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjMzQ5OGRiO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xyXG4gIG1hcmdpbi10b3A6IDIwMHB4O1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XHJcbiAgMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNwaW4ge1xyXG4gIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG59XHJcblxyXG4gICAgLmJ0bjpob3ZlciB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9IiwiaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ib2R5Y29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuZGl2LmNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgd2lkdGg6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODcsIDIwMiwgMjAyLCAwLjc3NCk7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG5cbmZvcm0ge1xuICBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxO1xufVxuXG4vKiBTdHlsZSB0aGUgaW5wdXQgY29udGFpbmVyICovXG4uaW5wdXQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi8qIFN0eWxlIHRoZSBmb3JtIGljb25zICovXG4uaWNvbiB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IGRvZGdlcmJsdWU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWluLXdpZHRoOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5nZW5kZXJfaWNvbiB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IGRvZGdlcmJsdWU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWluLXdpZHRoOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIFN0eWxlIHRoZSBpbnB1dCBmaWVsZHMgKi9cbi5pbnB1dC1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uaW5wdXQtZmllbGQ6Zm9jdXMge1xuICBib3JkZXI6IDJweCBzb2xpZCBkb2RnZXJibHVlO1xufVxuXG4vKiBTZXQgYSBzdHlsZSBmb3IgdGhlIHN1Ym1pdCBidXR0b24gKi9cbi5idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBvcGFjaXR5OiAwLjk7XG59XG5cbi8qIENlbnRlciB0aGUgbG9hZGVyICovXG4jbG9hZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci10b3A6IDE2cHggc29saWQgIzM0OThkYjtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xuICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xuICBtYXJnaW4tdG9wOiAyMDBweDtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG4uYnRuOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn0iXX0= */");

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








let ModifyUserComponent = class ModifyUserComponent {
    constructor(formBuilder, userservice, route, router, auth, tokenStorage) {
        this.formBuilder = formBuilder;
        this.userservice = userservice;
        this.route = route;
        this.router = router;
        this.auth = auth;
        this.tokenStorage = tokenStorage;
        this.loading = false;
    }
    ngOnInit() {
        this.loading = true;
        this.user = this.tokenStorage.getUser();
        this.userForm = this.formBuilder.group({
            role: [this.user.role, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            firstname: [this.user.Firstname, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastname: [this.user.Lastname, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: [{ value: this.user.email, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fonction: [this.user.fonction, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: [this.user.password, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            secteur: [this.user.secteur, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            civilite: [this.user.civilite, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            raisonsociale: [this.user.raisonsociale, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            nomsociete: [this.user.nomsociete, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            clientcode: [{ value: this.user.clientcode, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.loading = false;
    }
    onSubmit() {
        this.loading = true;
        const user = new _models_user_model__WEBPACK_IMPORTED_MODULE_5__["User"]();
        user.userId = this.user.userId;
        user.role = this.userForm.get('role').value;
        user.email = this.userForm.get('email').value;
        user.password = this.userForm.get('password').value;
        user.firstname = this.userForm.get('firstname').value;
        user.lastname = this.userForm.get('lastname').value;
        user.fonction = this.userForm.get('fonction').value;
        user.secteur = this.userForm.get('secteur').value;
        user.civilite = this.userForm.get('civilite').value;
        user.raisonsociale = this.userForm.get('raisonsociale').value;
        user.nomsociete = this.userForm.get('nomsociete').value;
        user.clientcode = this.userForm.get('clientcode').value;
        this.userservice.modifyUserById(this.user.userId, user).then(() => {
            this.userForm.reset();
            this.loading = false;
            this.tokenStorage.signOut();
            this.reloadPage();
            this.router.navigate(['login']);
        }, (error) => {
            this.loading = false;
        });
    }
    reloadPage() {
        window.location.reload();
    }
};
ModifyUserComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_7__["TokenStorageService"] }
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
        _services_token_storage_service__WEBPACK_IMPORTED_MODULE_7__["TokenStorageService"]])
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
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  /* Add shadows to create the \"card\" effect */\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  margin-left: 20%;\n}\n\nh2 {\n  margin-left: 20%;\n}\n\n/* On mouse-over, add a deeper shadow */\n\n.card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n\n/* Add some padding inside the card container */\n\n.container {\n  padding: 2px 16px;\n}\n\nbutton {\n  margin-left: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsL0M6XFxVc2Vyc1xcVVNFUlxcY3ZtX2Zyb250ZW5kL3NyY1xcYXBwXFxwcm9maWxcXHByb2ZpbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZmlsL3Byb2ZpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRDQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxnQkFBQTtBQ0VKOztBRENFLHVDQUFBOztBQUNBO0VBQ0UsMkNBQUE7QUNFSjs7QURDRSwrQ0FBQTs7QUFDQTtFQUNFLGlCQUFBO0FDRUo7O0FEQUU7RUFDRSxnQkFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsL3Byb2ZpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAgIC8qIEFkZCBzaGFkb3dzIHRvIGNyZWF0ZSB0aGUgXCJjYXJkXCIgZWZmZWN0ICovXHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICB9XHJcbiAgaDJ7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gIH1cclxuICBcclxuICAvKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBkZWVwZXIgc2hhZG93ICovXHJcbiAgLmNhcmQ6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwwLDAsMC4yKTtcclxuICB9XHJcbiAgXHJcbiAgLyogQWRkIHNvbWUgcGFkZGluZyBpbnNpZGUgdGhlIGNhcmQgY29udGFpbmVyICovXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAycHggMTZweDtcclxuICB9XHJcbiAgYnV0dG9ue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICB9IiwiLmNhcmQge1xuICAvKiBBZGQgc2hhZG93cyB0byBjcmVhdGUgdGhlIFwiY2FyZFwiIGVmZmVjdCAqL1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIG1hcmdpbi1sZWZ0OiAyMCU7XG59XG5cbmgyIHtcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcbn1cblxuLyogT24gbW91c2Utb3ZlciwgYWRkIGEgZGVlcGVyIHNoYWRvdyAqL1xuLmNhcmQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4vKiBBZGQgc29tZSBwYWRkaW5nIGluc2lkZSB0aGUgY2FyZCBjb250YWluZXIgKi9cbi5jb250YWluZXIge1xuICBwYWRkaW5nOiAycHggMTZweDtcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn0iXX0= */");

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




let ProfilComponent = class ProfilComponent {
    constructor(token, router) {
        this.token = token;
        this.router = router;
    }
    ngOnInit() {
        this.currentUser = this.token.getUser();
        console.log(this.currentUser.raisonsociale);
    }
    getNavigation(link, id) {
        this.router.navigate([link + '/' + id]);
    }
};
ProfilComponent.ctorParameters = () => [
    { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ProfilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profil',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profil.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profil/profil.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profil.component.scss */ "./src/app/profil/profil.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ProfilComponent);



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





authurllocal: 'http://localhost:3000/api/';
const authurlcloud = 'https://cvm-backend.herokuapp.com/api/';
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
let AuthService = class AuthService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.userrole$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
    }
    register(email, password, firstname, lastname, fonction, secteur, civilite, raisonsociale, nomsociete, clientcode, role) {
        return this.http.post(authurlcloud + 'signup', {
            email, password, firstname, lastname, fonction, secteur, civilite, raisonsociale, nomsociete, clientcode, role
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


const TOKEN_KEY = 'x-access-token';
const USER_KEY = 'user';
let TokenStorageService = class TokenStorageService {
    constructor() { }
    signOut() {
        window.sessionStorage.clear();
    }
    saveToken(token) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    }
    getToken() {
        return window.sessionStorage.getItem(TOKEN_KEY);
    }
    saveUser(user) {
        window.sessionStorage.removeItem(USER_KEY);
        window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    }
    getUser() {
        const user = window.sessionStorage.getItem(USER_KEY);
        if (user) {
            return JSON.parse(user);
        }
        return {};
    }
};
TokenStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
        this.http.get('https://cvm-backend.herokuapp.com/api/users/').subscribe((users) => {
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
            this.http.get('https://cvm-backend.herokuapp.com/api/users/' + id).subscribe((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            });
        });
    }
    modifyUserById(id, user) {
        return new Promise((resolve, reject) => {
            this.http.put('https://cvm-backend.herokuapp.com/api/users/' + id, user).subscribe((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            });
        });
    }
    deleteUserById(id) {
        return new Promise((resolve, reject) => {
            this.http.delete('API_URL_cloud' + id).subscribe((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            });
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

/***/ "./src/app/signup/signup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2 {\n  text-align: center;\n}\n\n.bodycontainer {\n  height: 1000px;\n  width: 100%;\n  background-color: white;\n}\n\ndiv.container {\n  margin-top: 10%;\n  width: 50%;\n  background-color: rgba(187, 202, 202, 0.774);\n  padding: 30px;\n}\n\nform {\n  border: 3px solid #f1f1f1;\n}\n\n/* Style the input container */\n\n.input-container {\n  display: flex;\n  width: 100%;\n  margin-bottom: 15px;\n}\n\n/* Style the form icons */\n\n.icon {\n  padding: 10px;\n  background: dodgerblue;\n  color: white;\n  min-width: 50px;\n  text-align: center;\n}\n\n.gender_icon {\n  padding: 10px;\n  background: dodgerblue;\n  color: white;\n  min-width: 50px;\n  text-align: center;\n}\n\n/* Style the input fields */\n\n.input-field {\n  width: 100%;\n  padding: 10px;\n  outline: none;\n}\n\n.input-field:focus {\n  border: 2px solid dodgerblue;\n}\n\n/* Set a style for the submit button */\n\n.btn {\n  background-color: dodgerblue;\n  color: white;\n  padding: 15px 20px;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  opacity: 0.9;\n}\n\n/* Center the loader */\n\n#loader {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  z-index: 1;\n  width: 120px;\n  height: 120px;\n  border: 16px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 16px solid #3498db;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite;\n  margin-top: 200px;\n}\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.btn:hover {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL0M6XFxVc2Vyc1xcVVNFUlxcY3ZtX2Zyb250ZW5kL3NyY1xcYXBwXFxzaWdudXBcXHNpZ251cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FDRUY7O0FEQUE7RUFDSSxlQUFBO0VBQ0UsVUFBQTtFQUNBLDRDQUFBO0VBQ0EsYUFBQTtBQ0dOOztBRERJO0VBQ0kseUJBQUE7QUNJUjs7QURESSw4QkFBQTs7QUFDQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNJTjs7QURESSx5QkFBQTs7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNJTjs7QURGSTtFQUVRLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNJWjs7QURBSSwyQkFBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQ0dOOztBREFJO0VBQ0UsNEJBQUE7QUNHTjs7QURBSSxzQ0FBQTs7QUFDQTtFQUVFLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0VOOztBREVJLHNCQUFBOztBQUNKO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUVBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0U7SUFBSywrQkFBQTtFQ0NMO0VEQUE7SUFBTyxpQ0FBQTtFQ0dQO0FBQ0Y7O0FEREE7RUFDRTtJQUFLLHVCQUFBO0VDSUw7RURIQTtJQUFPLHlCQUFBO0VDTVA7QUFDRjs7QURKSTtFQUNFLFVBQUE7QUNNTiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYm9keWNvbnRhaW5lcntcclxuICBoZWlnaHQ6IDEwMDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5kaXYuY29udGFpbmVye1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NywgMjAyLCAyMDIsIDAuNzc0KTtcclxuICAgICAgcGFkZGluZzogMzBweDtcclxuICAgIH1cclxuICAgIGZvcm0ge1xyXG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNmMWYxZjE7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgLyogU3R5bGUgdGhlIGlucHV0IGNvbnRhaW5lciAqL1xyXG4gICAgLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKiBTdHlsZSB0aGUgZm9ybSBpY29ucyAqL1xyXG4gICAgLmljb24ge1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiBkb2RnZXJibHVlO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIG1pbi13aWR0aDogNTBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmdlbmRlcl9pY29ue1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBkb2RnZXJibHVlO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogNTBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qIFN0eWxlIHRoZSBpbnB1dCBmaWVsZHMgKi9cclxuICAgIC5pbnB1dC1maWVsZCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaW5wdXQtZmllbGQ6Zm9jdXMge1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCBkb2RnZXJibHVlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKiBTZXQgYSBzdHlsZSBmb3IgdGhlIHN1Ym1pdCBidXR0b24gKi9cclxuICAgIC5idG4ge1xyXG4gICAgICAgIFxyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKiBDZW50ZXIgdGhlIGxvYWRlciAqL1xyXG4jbG9hZGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgXHJcbiAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlci10b3A6IDE2cHggc29saWQgIzM0OThkYjtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICBtYXJnaW4tdG9wOiAyMDBweDtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xyXG4gIDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxufVxyXG5cclxuICAgIC5idG46aG92ZXIge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfSIsImgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYm9keWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbmRpdi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIHdpZHRoOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg3LCAyMDIsIDIwMiwgMC43NzQpO1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG5mb3JtIHtcbiAgYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTtcbn1cblxuLyogU3R5bGUgdGhlIGlucHV0IGNvbnRhaW5lciAqL1xuLmlucHV0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4vKiBTdHlsZSB0aGUgZm9ybSBpY29ucyAqL1xuLmljb24ge1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiBkb2RnZXJibHVlO1xuICBjb2xvcjogd2hpdGU7XG4gIG1pbi13aWR0aDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZ2VuZGVyX2ljb24ge1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiBkb2RnZXJibHVlO1xuICBjb2xvcjogd2hpdGU7XG4gIG1pbi13aWR0aDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiBTdHlsZSB0aGUgaW5wdXQgZmllbGRzICovXG4uaW5wdXQtZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmlucHV0LWZpZWxkOmZvY3VzIHtcbiAgYm9yZGVyOiAycHggc29saWQgZG9kZ2VyYmx1ZTtcbn1cblxuLyogU2V0IGEgc3R5bGUgZm9yIHRoZSBzdWJtaXQgYnV0dG9uICovXG4uYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTAwJTtcbiAgb3BhY2l0eTogMC45O1xufVxuXG4vKiBDZW50ZXIgdGhlIGxvYWRlciAqL1xuI2xvYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xuICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItdG9wOiAxNnB4IHNvbGlkICMzNDk4ZGI7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgbWFyZ2luLXRvcDogMjAwcHg7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuLmJ0bjpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59Il19 */");

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





let SignupComponent = class SignupComponent {
    constructor(formBuilder, router, auth) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.auth = auth;
        this.loading = false;
        this.isSuccessful = false;
        this.isSignUpFailed = false;
    }
    ngOnInit() {
        this.signupForm = this.formBuilder.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            firstname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fonction: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            secteur: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            civilite: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            raisonsociale: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            nomsociete: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            clientcode: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            role: [{ value: "basic", disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    onSignup() {
        this.loading = true;
        const email = this.signupForm.get('email').value;
        const password = this.signupForm.get('password').value;
        const firstname = this.signupForm.get('firstname').value;
        const lastname = this.signupForm.get('lastname').value;
        const fonction = this.signupForm.get('fonction').value;
        const secteur = this.signupForm.get('secteur').value;
        const civilite = this.signupForm.get('civilite').value;
        const raisonsociale = this.signupForm.get('raisonsociale').value;
        const nomsociete = this.signupForm.get('nomsociete').value;
        const clientcode = this.signupForm.get('clientcode').value;
        const role = this.signupForm.get('role').value;
        this.auth.register(email, password, firstname, lastname, fonction, secteur, civilite, raisonsociale, nomsociete, clientcode, role).subscribe({
            next: data => {
                console.log(data);
                this.isSuccessful = true;
                this.isSignUpFailed = false;
                this.loading = false;
                this.router.navigate(['login']);
            },
            error: err => {
                this.errorMessage = err.error.message;
                this.isSignUpFailed = true;
            }
        });
    }
};
SignupComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.scss */ "./src/app/signup/signup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
], SignupComponent);



/***/ }),

/***/ "./src/app/user-board/user-board.component.scss":
/*!******************************************************!*\
  !*** ./src/app/user-board/user-board.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItYm9hcmQvdXNlci1ib2FyZC5jb21wb25lbnQuc2NzcyJ9 */");

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


let UserBoardComponent = class UserBoardComponent {
    constructor() { }
    ngOnInit() {
    }
};
UserBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-board',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-board.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-board/user-board.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-board.component.scss */ "./src/app/user-board/user-board.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], UserBoardComponent);



/***/ }),

/***/ "./src/app/view-user/view-user.component.scss":
/*!****************************************************!*\
  !*** ./src/app/view-user/view-user.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  /* Add shadows to create the \"card\" effect */\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  margin-left: 20%;\n}\n\nh2 {\n  margin-left: 20%;\n}\n\n/* On mouse-over, add a deeper shadow */\n\n.card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n\n/* Add some padding inside the card container */\n\n.container {\n  padding: 2px 16px;\n}\n\nbutton {\n  margin-left: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy11c2VyL0M6XFxVc2Vyc1xcVVNFUlxcY3ZtX2Zyb250ZW5kL3NyY1xcYXBwXFx2aWV3LXVzZXJcXHZpZXctdXNlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlldy11c2VyL3ZpZXctdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRDQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxnQkFBQTtBQ0VKOztBRENFLHVDQUFBOztBQUNBO0VBQ0UsMkNBQUE7QUNFSjs7QURDRSwrQ0FBQTs7QUFDQTtFQUNFLGlCQUFBO0FDRUo7O0FEQUU7RUFDRSxnQkFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvdmlldy11c2VyL3ZpZXctdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAgIC8qIEFkZCBzaGFkb3dzIHRvIGNyZWF0ZSB0aGUgXCJjYXJkXCIgZWZmZWN0ICovXHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICB9XHJcbiAgaDJ7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gIH1cclxuICBcclxuICAvKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBkZWVwZXIgc2hhZG93ICovXHJcbiAgLmNhcmQ6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwwLDAsMC4yKTtcclxuICB9XHJcbiAgXHJcbiAgLyogQWRkIHNvbWUgcGFkZGluZyBpbnNpZGUgdGhlIGNhcmQgY29udGFpbmVyICovXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAycHggMTZweDtcclxuICB9XHJcbiAgYnV0dG9ue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICB9IiwiLmNhcmQge1xuICAvKiBBZGQgc2hhZG93cyB0byBjcmVhdGUgdGhlIFwiY2FyZFwiIGVmZmVjdCAqL1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIG1hcmdpbi1sZWZ0OiAyMCU7XG59XG5cbmgyIHtcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcbn1cblxuLyogT24gbW91c2Utb3ZlciwgYWRkIGEgZGVlcGVyIHNoYWRvdyAqL1xuLmNhcmQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4vKiBBZGQgc29tZSBwYWRkaW5nIGluc2lkZSB0aGUgY2FyZCBjb250YWluZXIgKi9cbi5jb250YWluZXIge1xuICBwYWRkaW5nOiAycHggMTZweDtcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn0iXX0= */");

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





let ViewUserComponent = class ViewUserComponent {
    constructor(router, route, usersservice, token) {
        this.router = router;
        this.route = route;
        this.usersservice = usersservice;
        this.token = token;
    }
    ngOnInit() {
        this.loading = true;
        this.currentUser = this.token.getUser();
        this.route.params.subscribe((params) => {
            this.usersservice.getUserById(params.id).then((user) => {
                this.loading = false;
                this.user = user;
                console.log(user);
            });
        });
    }
    getNavigation(link, id) {
        this.router.navigate([link + '/' + id]);
    }
};
ViewUserComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"] }
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
        _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]])
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
/* harmony default export */ __webpack_exports__["default"] = (".team-section {\n  font-family: arial;\n  text-align: center;\n  padding: 70px 0px;\n  background-color: #d0d5da;\n}\n\n.team-section h2 {\n  color: #3b5997;\n  font-size: 40px;\n}\n\n.team-section p {\n  font-size: 16px;\n  color: #656565;\n  margin: 0px 0px 20px;\n  text-align: center;\n}\n\n.team-member {\n  width: 100%;\n  float: left;\n  padding: 25px 15px;\n  background-color: #fff;\n  border-radius: 10px;\n  border: 1px solid #eee;\n  margin-top: 30px;\n  box-shadow: 0px 8px 0px 0px #9E9E9E;\n  transition: 0.5s;\n}\n\n.team-member:hover {\n  box-shadow: 0px -8px 0px 0px #9e9e9e;\n}\n\n.team-member h3 {\n  font-size: 24px;\n  margin: 15px 0px 0px;\n}\n\n.team-member h5 {\n  margin: 10px 0px 10px;\n  color: #8a8a8a;\n  display: inline-block;\n}\n\n.team-member p {\n  font-size: 16px;\n  color: #8a8a8a;\n}\n\n.team-member .photo {\n  width: 90px;\n  height: 90px;\n  border-radius: 100%;\n  overflow: hidden;\n  border: 1px solid #9E9E9E;\n  margin: 0 auto;\n  background-color: #ffffff;\n  padding: 4px;\n}\n\n.follow-on ul {\n  padding: 0px;\n  margin: 0px;\n}\n\n.follow-on ul li {\n  float: left;\n  list-style: none;\n  font-size: 20px;\n  text-align: center;\n  margin: 10px 0px 10px;\n  width: 20%;\n}\n\n.follow-on ul li a i {\n  color: #fff;\n  border-radius: 100%;\n  height: 30px;\n  width: 30px;\n  line-height: 31px;\n  font-size: 16px;\n}\n\n.follow-on ul li a i:hover {\n  opacity: 0.8;\n}\n\n.follow-on ul li a i.fa.fa-facebook {\n  background-color: #3b5997;\n}\n\n.follow-on ul li a i.fa.fa-twitter {\n  background-color: #57aced;\n}\n\n.follow-on ul li a i.fa.fa-pinterest-p {\n  background-color: #cb2026;\n}\n\n.follow-on ul li a i.fa.fa-instagram {\n  background-color: #3e729a;\n}\n\n.follow-on ul li a i.fa.fa-google-plus {\n  background-color: #db4d41;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2hvL0M6XFxVc2Vyc1xcVVNFUlxcY3ZtX2Zyb250ZW5kL3NyY1xcYXBwXFx3aG9cXHdoby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvd2hvL3doby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQUE7RUFDSSxvQ0FBQTtBQ0dKOztBRERBO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0FDSUo7O0FERkE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQ0tKOztBREhBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNNSjs7QURKQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ09KOztBRExBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNRSjs7QUROQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtBQ1NKOztBRFBBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNVSjs7QURSQTtFQUNJLFlBQUE7QUNXSjs7QURUQTtFQUNJLHlCQUFBO0FDWUo7O0FEVkE7RUFDSSx5QkFBQTtBQ2FKOztBRFhBO0VBQ0kseUJBQUE7QUNjSjs7QURaQTtFQUNJLHlCQUFBO0FDZUo7O0FEYkE7RUFDSSx5QkFBQTtBQ2dCSiIsImZpbGUiOiJzcmMvYXBwL3doby93aG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVhbS1zZWN0aW9uIHtcclxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDcwcHggMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QwZDVkYTtcclxufVxyXG5cclxuLnRlYW0tc2VjdGlvbiBoMiB7XHJcbiAgICBjb2xvcjogIzNiNTk5NztcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIFxyXG59XHJcbi50ZWFtLXNlY3Rpb24gcCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzY1NjU2NTtcclxuICAgIG1hcmdpbjogMHB4IDBweCAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi50ZWFtLW1lbWJlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMjVweCAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMHB4IDBweCAjOUU5RTlFO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG4udGVhbS1tZW1iZXI6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IC04cHggMHB4IDBweCAjOWU5ZTllO1xyXG59XHJcbi50ZWFtLW1lbWJlciBoMyB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBtYXJnaW46IDE1cHggMHB4IDBweDtcclxufVxyXG4udGVhbS1tZW1iZXIgaDUge1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweCAxMHB4O1xyXG4gICAgY29sb3I6ICM4YThhOGE7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLnRlYW0tbWVtYmVyIHAge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM4YThhOGE7XHJcbn1cclxuLnRlYW0tbWVtYmVyIC5waG90byB7XHJcbiAgICB3aWR0aDogOTBweDtcclxuICAgIGhlaWdodDogOTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzlFOUU5RTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDRweDtcclxufVxyXG4uZm9sbG93LW9uIHVse1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLmZvbGxvdy1vbiB1bCBsaSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDEwcHggMHB4IDEwcHg7XHJcbiAgICB3aWR0aDogMjAlO1xyXG59XHJcbi5mb2xsb3ctb24gdWwgbGkgYSBpIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMxcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLmZvbGxvdy1vbiB1bCBsaSBhIGk6aG92ZXJ7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuLmZvbGxvdy1vbiB1bCBsaSBhIGkuZmEuZmEtZmFjZWJvb2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiNTk5NztcclxufVxyXG4uZm9sbG93LW9uIHVsIGxpIGEgaS5mYS5mYS10d2l0dGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1N2FjZWQ7XHJcbn1cclxuLmZvbGxvdy1vbiB1bCBsaSBhIGkuZmEuZmEtcGludGVyZXN0LXAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NiMjAyNjtcclxufVxyXG4uZm9sbG93LW9uIHVsIGxpIGEgaS5mYS5mYS1pbnN0YWdyYW0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNlNzI5YTtcclxufVxyXG4uZm9sbG93LW9uIHVsIGxpIGEgaS5mYS5mYS1nb29nbGUtcGx1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGI0ZDQxO1xyXG59IiwiLnRlYW0tc2VjdGlvbiB7XG4gIGZvbnQtZmFtaWx5OiBhcmlhbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA3MHB4IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QwZDVkYTtcbn1cblxuLnRlYW0tc2VjdGlvbiBoMiB7XG4gIGNvbG9yOiAjM2I1OTk3O1xuICBmb250LXNpemU6IDQwcHg7XG59XG5cbi50ZWFtLXNlY3Rpb24gcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM2NTY1NjU7XG4gIG1hcmdpbjogMHB4IDBweCAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50ZWFtLW1lbWJlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMjVweCAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBib3gtc2hhZG93OiAwcHggOHB4IDBweCAwcHggIzlFOUU5RTtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLnRlYW0tbWVtYmVyOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMHB4IC04cHggMHB4IDBweCAjOWU5ZTllO1xufVxuXG4udGVhbS1tZW1iZXIgaDMge1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbjogMTVweCAwcHggMHB4O1xufVxuXG4udGVhbS1tZW1iZXIgaDUge1xuICBtYXJnaW46IDEwcHggMHB4IDEwcHg7XG4gIGNvbG9yOiAjOGE4YThhO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi50ZWFtLW1lbWJlciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzhhOGE4YTtcbn1cblxuLnRlYW0tbWVtYmVyIC5waG90byB7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5RTlFOUU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiA0cHg7XG59XG5cbi5mb2xsb3ctb24gdWwge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uZm9sbG93LW9uIHVsIGxpIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDEwcHggMHB4IDEwcHg7XG4gIHdpZHRoOiAyMCU7XG59XG5cbi5mb2xsb3ctb24gdWwgbGkgYSBpIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMXB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5mb2xsb3ctb24gdWwgbGkgYSBpOmhvdmVyIHtcbiAgb3BhY2l0eTogMC44O1xufVxuXG4uZm9sbG93LW9uIHVsIGxpIGEgaS5mYS5mYS1mYWNlYm9vayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTc7XG59XG5cbi5mb2xsb3ctb24gdWwgbGkgYSBpLmZhLmZhLXR3aXR0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTdhY2VkO1xufVxuXG4uZm9sbG93LW9uIHVsIGxpIGEgaS5mYS5mYS1waW50ZXJlc3QtcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjYjIwMjY7XG59XG5cbi5mb2xsb3ctb24gdWwgbGkgYSBpLmZhLmZhLWluc3RhZ3JhbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZTcyOWE7XG59XG5cbi5mb2xsb3ctb24gdWwgbGkgYSBpLmZhLmZhLWdvb2dsZS1wbHVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiNGQ0MTtcbn0iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = (".panel-heading {\n  text-align: center;\n}\n\n.jumbotron {\n  background-image: url('cabinet_virtuel_background.jpg');\n  background-position: center center;\n  color: white;\n  margin: 0;\n}\n\n#intro {\n  border-radius: 25px;\n  border: 2px solid #73AD21;\n  padding: 20px;\n  width: 100%;\n  height: 100%;\n}\n\n.container_all {\n  background-color: beige;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2h5L0M6XFxVc2Vyc1xcVVNFUlxcY3ZtX2Zyb250ZW5kL3NyY1xcYXBwXFx3aHlcXHdoeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvd2h5L3doeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSx1REFBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUNFSjs7QURBQTtFQUNJLG1CQUFBO0VBQ0YseUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNHRjs7QUREQTtFQUNJLHVCQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC93aHkvd2h5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhbmVsLWhlYWRpbmd7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmp1bWJvdHJvbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiLi4vLi4vYXNzZXRzL2NhYmluZXRfdmlydHVlbF9iYWNrZ3JvdW5kLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7IFxyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbiNpbnRyb3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzczQUQyMTtcclxuICBwYWRkaW5nOiAyMHB4OyBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7IFxyXG59XHJcbi5jb250YWluZXJfYWxse1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XHJcbn1cclxuIiwiLnBhbmVsLWhlYWRpbmcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5qdW1ib3Ryb24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvY2FiaW5ldF92aXJ0dWVsX2JhY2tncm91bmQuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMDtcbn1cblxuI2ludHJvIHtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzczQUQyMTtcbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lcl9hbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcbn0iXX0= */");

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

module.exports = __webpack_require__(/*! C:\Users\USER\cvm_frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map