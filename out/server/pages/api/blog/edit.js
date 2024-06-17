"use strict";
(() => {
var exports = {};
exports.id = 387;
exports.ids = [387];
exports.modules = {

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 3367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);



function handler(req, res) {
    const postsfolder = (0,path__WEBPACK_IMPORTED_MODULE_1__.join)(process.cwd(), `/_posts/`);
    if (true) {
        if (req.method === "POST") {
            const { date , title , tagline , preview , image  } = req.body.variables;
            fs__WEBPACK_IMPORTED_MODULE_0___default().writeFile(postsfolder + req.body.slug + ".md", gray_matter__WEBPACK_IMPORTED_MODULE_2___default().stringify(req.body.content, {
                date,
                title,
                tagline,
                preview,
                image
            }), "utf-8", (err)=>console.log(err)
            );
            res.status(200).json({
                status: "DONE"
            });
        } else {
            res.status(200).json({
                name: "This route works in development mode only"
            });
        }
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3367));
module.exports = __webpack_exports__;

})();