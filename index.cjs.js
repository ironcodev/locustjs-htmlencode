"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.htmlEncode = exports.htmlDecode = exports.HtmlEntities = exports.HtmlEncodeMap = exports.HtmlDecodeMap = void 0;
var _base = require("@locustjs/base");
var _HtmlDecodeMap;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var HtmlEntities = exports.HtmlEntities = [{
  entity: "&Tab;",
  "char": "TAB",
  code: "U+0009",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&NewLine;",
  "char": "LF",
  code: "U+000A",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&DownBreve;",
  "char": "̑",
  code: "U+0311",
  standard: ["MathML 2.0", "HTML 5.0"],
  dtd: "",
  desc: ""
}, {
  entity: ["&tdot;", "&TripleDot;"],
  "char": "⃛",
  code: "U+20DB",
  standard: ["MathML 2.0", "HTML 5.0"],
  dtd: "",
  desc: ""
}, {
  entity: "&DotDot;",
  "char": "⃜",
  code: "U+20DC",
  standard: ["MathML 2.0", "HTML 5.0"],
  dtd: "",
  desc: ""
}, {
  entity: "&excl;",
  "char": "!",
  code: "U+0021",
  standard: "HTML 5.0",
  dtd: "",
  desc: "ISOnum"
}, {
  entity: ["&quot;", "&QUOT;"],
  "char": '"',
  code: "U+0022",
  standard: ["XML 1.0", "HTML 5.0"],
  dtd: "html.dtd[f] HTMLspecial",
  desc: "ISOnum"
}, {
  entity: "&num;",
  "char": "#",
  code: "U+0023",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&dollar;",
  "char": "$",
  code: "U+0024",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&percnt;",
  "char": "%",
  code: "U+0025",
  standard: "HTML 5.0",
  dtd: "",
  desc: "ISOnum"
}, {
  entity: ["&amp;", "&AMP;"],
  "char": "&",
  code: "U+0026",
  standard: ["XML 1.0", "HTML 5.0"],
  dtd: "html.dtd HTMLspecial",
  desc: "ISOnum"
}, {
  entity: "&apos;",
  "char": "'",
  code: "U+0027",
  standard: "XML 1.0",
  dtd: "HTMLspecial",
  desc: "ISOnum"
}, {
  entity: "&lpar;",
  "char": "(",
  code: "U+0028",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&rpar;",
  "char": ")",
  code: "U+0029",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&ast;", "&midast;"],
  "char": "*",
  code: "U+002A",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&plus;",
  "char": "+",
  code: "U+002B",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&comma;",
  "char": ",",
  code: "U+002C",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&period;",
  "char": ".",
  code: "U+002E",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&sol;",
  "char": "/",
  code: "U+002F",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&colon;",
  "char": ":",
  code: "U+003A",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&semi;",
  "char": ";",
  code: "U+003B",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&lt;", "&LT;"],
  "char": "<",
  code: "U+003C",
  standard: ["XML 1.0", "HTML 5.0"],
  dtd: "html.dtd HTMLspecial",
  desc: "ISOnum"
}, {
  entity: "&nvlt;",
  "char": "<⃒",
  code: ["U+003C", "U+20D2"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&equals;",
  "char": "=",
  code: "U+003D",
  standard: "HTML 5.0",
  dtd: "",
  desc: "ISOnum"
}, {
  entity: "&bne;",
  "char": "=⃥",
  code: ["U+003D", "U+20E5"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&gt;", "&GT;"],
  "char": ">",
  code: "U+003E",
  standard: ["XML 1.0", "HTML 5.0"],
  dtd: "html.dtd HTMLspecial",
  desc: "ISOnum"
}, {
  entity: "&nvgt;",
  "char": ">⃒",
  code: ["U+003E", "U+20D2"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&quest;",
  "char": "?",
  code: "U+003F",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&commat;",
  "char": "@",
  code: "U+0040",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&lsqb;", "&lbrack;"],
  "char": "[",
  code: "U+005B",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&bsol;",
  "char": "\\",
  code: "U+005C",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&rsqb;", "&rbrack;"],
  "char": "]",
  code: "U+005D",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Hat;",
  "char": "^",
  code: "U+005E",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&lowbar;", "&UnderBar;"],
  "char": "_",
  code: "U+005F",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&grave;", "&DiacriticalGrave;"],
  "char": "`",
  code: "U+0060",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&fjlig;",
  "char": "fj",
  code: ["U+0066", "U+006A"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&lcub;", "&lbrace;"],
  "char": "{",
  code: "U+007B",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&verbar;", "&vert;", "&VerticalLine;"],
  "char": "|",
  code: "U+007C",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&rcub;", "&rbrace;"],
  "char": "}",
  code: "U+007D",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&nbsp;", "&NonBreakingSpace;"],
  "char": " ",
  code: "U+00A0",
  standard: ["HTML 3.2", "HTML 5.0"],
  dtd: "HTMLlat1",
  desc: "ISOnum"
}, {
  entity: "&iexcl;",
  "char": "¡",
  code: "U+00A1",
  standard: "HTML 3.2",
  dtd: "HTMLlat1",
  desc: "ISOnum"
}, {
  entity: "&cent;",
  "char": "¢",
  code: "U+00A2",
  standard: "HTML 3.2",
  dtd: "HTMLlat1",
  desc: "ISOnum"
}, {
  entity: "&pound;",
  "char": "£",
  code: "U+00A3",
  standard: "HTML 3.2",
  dtd: "HTMLlat1",
  desc: "ISOnum"
}, {
  entity: "&curren;",
  "char": "¤",
  code: "U+00A4",
  standard: "HTML 3.2",
  dtd: "HTMLlat1",
  desc: "ISOnum"
}, {
  entity: "&yen;",
  "char": "¥",
  code: "U+00A5",
  standard: "HTML 3.2",
  dtd: "HTMLlat1",
  desc: "ISOnum"
}, {
  entity: "&brvbar;",
  "char": "¦",
  code: "U+00A6",
  standard: "HTML 3.2",
  dtd: "HTMLlat1",
  desc: "ISOnum"
}, {
  entity: "&sect;",
  "char": "§",
  code: "U+00A7",
  standard: "HTML 3.2",
  dtd: "HTMLlat1",
  desc: "ISOnum"
}, {
  entity: ["&Dot;", "&die;", "&DoubleDot;", "&uml;"],
  "char": "¨",
  code: "U+00A8",
  standard: ["HTML 3.2", "HTML 5.0", "HTML 5.0", "HTML 5.0"],
  dtd: "HTMLlat1",
  desc: "ISOdia"
}, {
  entity: ["&copy;", "&COPY;"],
  "char": "©",
  code: "U+00A9",
  standard: ["HTML 3.2", "HTML 5.0"],
  dtd: "HTMLlat1",
  desc: "ISOnum"
}, {
  entity: "&ordf;",
  "char": "ª",
  code: "U+00AA",
  standard: "HTML 3.2",
  dtd: "HTMLlat1",
  desc: "ISOnum"
}, {
  entity: "&laquo;",
  "char": "«",
  code: "U+00AB",
  standard: "HTML 3.2",
  dtd: "HTMLlat1",
  desc: "ISOnum"
}, {
  entity: "&not;",
  "char": "¬",
  code: "U+00AC",
  standard: "HTML 3.2",
  dtd: "HTMLlat1",
  desc: "ISOnum"
}, {
  entity: "&shy;",
  "char": "SHY",
  code: "U+00AD",
  standard: "HTML 3.2",
  dtd: "HTMLlat1",
  desc: "ISOnum"
}, {
  entity: ["&reg;", "&circledR;", "&REG;"],
  "char": "®",
  code: "U+00AE",
  standard: ["HTML 3.2", "HTML 5.0", "HTML 5.0"],
  dtd: "HTMLlat1",
  desc: "ISOnum"
}, {
  entity: ["&macr;", "&strns;"],
  "char": "¯",
  code: "U+00AF",
  standard: ["HTML 3.2", "HTML 5.0"],
  dtd: "HTMLlat1",
  desc: "ISOdia"
}, {
  entity: "&deg;",
  "char": "°",
  code: "U+00B0",
  standard: "HTML 3.2",
  dtd: "HTMLlat1",
  desc: "ISOnum"
}, {
  entity: ["&plusmn;", "&pm;", "&PlusMinus;"],
  "char": "±",
  code: "U+00B1",
  standard: ["HTML 3.2", "HTML 5.0", "HTML 5.0"],
  dtd: "HTMLlat1",
  desc: "ISOnum"
}, {
  entity: "&sup2;",
  "char": "²",
  code: "U+00B2",
  standard: "HTML 3.2",
  dtd: "HTMLlat1",
  desc: "ISOnum"
}, {
  entity: "&sup3;",
  "char": "³",
  code: "U+00B3",
  standard: "HTML 3.2",
  dtd: "HTMLlat1",
  desc: "ISOnum"
}, {
  entity: ["&acute;", "&DiacriticalAcute;"],
  "char": "´",
  code: "U+00B4",
  standard: ["HTML 3.2", "HTML 5.0"],
  dtd: "HTMLlat1",
  desc: "ISOdia"
}, {
  entity: "&micro;",
  "char": "µ",
  code: "U+00B5",
  standard: "HTML 3.2",
  dtd: "HTMLlat1",
  desc: "ISOnum"
}, {
  entity: "&para;",
  "char": "¶",
  code: "U+00B6",
  standard: "HTML 3.2",
  dtd: "HTMLlat1",
  desc: "ISOnum"
}, {
  entity: ["&middot;", "&centerdot;", "&CenterDot;"],
  "char": "·",
  code: "U+00B7",
  standard: ["HTML 3.2", "HTML 5.0", "HTML 5.0"],
  dtd: "HTMLlat1",
  desc: "ISOnum"
}, {
  entity: ["&cedil;", "&Cedilla;"],
  "char": "¸",
  code: "U+00B8",
  standard: ["HTML 3.2", "HTML 5.0"],
  dtd: "HTMLlat1",
  desc: "ISOdia"
}, {
  entity: "&sup1;",
  "char": "¹",
  code: "U+00B9",
  standard: "HTML 3.2",
  dtd: "HTMLlat1",
  desc: "ISOnum"
}, {
  entity: "&ordm;",
  "char": "º",
  code: "U+00BA",
  standard: "HTML 3.2",
  dtd: "HTMLlat1",
  desc: "ISOnum"
}, {
  entity: "&raquo;",
  "char": "»",
  code: "U+00BB",
  standard: "HTML 3.2",
  dtd: "HTMLlat1",
  desc: "ISOnum"
}, {
  entity: "&frac14;",
  "char": "¼",
  code: "U+00BC",
  standard: "HTML 3.2",
  dtd: "HTMLlat1",
  desc: "ISOnum"
}, {
  entity: ["&frac12;", "&half;"],
  "char": "½",
  code: "U+00BD",
  standard: ["HTML 3.2", "HTML 5.0"],
  dtd: "HTMLlat1",
  desc: "ISOnum"
}, {
  entity: "&frac34;",
  "char": "¾",
  code: "U+00BE",
  standard: "HTML 3.2",
  dtd: "HTMLlat1",
  desc: "ISOnum"
}, {
  entity: "&iquest;",
  "char": "¿",
  code: "U+00BF",
  standard: "HTML 3.2",
  dtd: "HTMLlat1",
  desc: "ISOnum"
}, {
  entity: "&Agrave;",
  "char": "À",
  code: "U+00C0",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&Aacute;",
  "char": "Á",
  code: "U+00C1",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&Acirc;",
  "char": "Â",
  code: "U+00C2",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&Atilde;",
  "char": "Ã",
  code: "U+00C3",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&Auml;",
  "char": "Ä",
  code: "U+00C4",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: ["&Aring;", "&angst;"],
  "char": "Å",
  code: "U+00C5",
  standard: ["HTML 2.0", "HTML 5.0"],
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&AElig;",
  "char": "Æ",
  code: "U+00C6",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&Ccedil;",
  "char": "Ç",
  code: "U+00C7",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&Egrave;",
  "char": "È",
  code: "U+00C8",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&Eacute;",
  "char": "É",
  code: "U+00C9",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&Ecirc;",
  "char": "Ê",
  code: "U+00CA",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&Euml;",
  "char": "Ë",
  code: "U+00CB",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&Igrave;",
  "char": "Ì",
  code: "U+00CC",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&Iacute;",
  "char": "Í",
  code: "U+00CD",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&Icirc;",
  "char": "Î",
  code: "U+00CE",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&Iuml;",
  "char": "Ï",
  code: "U+00CF",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&ETH;",
  "char": "Ð",
  code: "U+00D0",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&Ntilde;",
  "char": "Ñ",
  code: "U+00D1",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&Ograve;",
  "char": "Ò",
  code: "U+00D2",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&Oacute;",
  "char": "Ó",
  code: "U+00D3",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&Ocirc;",
  "char": "Ô",
  code: "U+00D4",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&Otilde;",
  "char": "Õ",
  code: "U+00D5",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&Ouml;",
  "char": "Ö",
  code: "U+00D6",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&times;",
  "char": "×",
  code: "U+00D7",
  standard: "HTML 3.2",
  dtd: "HTMLlat1",
  desc: "ISOnum"
}, {
  entity: "&Oslash;",
  "char": "Ø",
  code: "U+00D8",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&Ugrave;",
  "char": "Ù",
  code: "U+00D9",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&Uacute;",
  "char": "Ú",
  code: "U+00DA",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&Ucirc;",
  "char": "Û",
  code: "U+00DB",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&Uuml;",
  "char": "Ü",
  code: "U+00DC",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&Yacute;",
  "char": "Ý",
  code: "U+00DD",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&THORN;",
  "char": "Þ",
  code: "U+00DE",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&szlig;",
  "char": "ß",
  code: "U+00DF",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&agrave;",
  "char": "à",
  code: "U+00E0",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&aacute;",
  "char": "á",
  code: "U+00E1",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&acirc;",
  "char": "â",
  code: "U+00E2",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&atilde;",
  "char": "ã",
  code: "U+00E3",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&auml;",
  "char": "ä",
  code: "U+00E4",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&aring;",
  "char": "å",
  code: "U+00E5",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&aelig;",
  "char": "æ",
  code: "U+00E6",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&ccedil;",
  "char": "ç",
  code: "U+00E7",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&egrave;",
  "char": "è",
  code: "U+00E8",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&eacute;",
  "char": "é",
  code: "U+00E9",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&ecirc;",
  "char": "ê",
  code: "U+00EA",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&euml;",
  "char": "ë",
  code: "U+00EB",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&igrave;",
  "char": "ì",
  code: "U+00EC",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&iacute;",
  "char": "í",
  code: "U+00ED",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&icirc;",
  "char": "î",
  code: "U+00EE",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&iuml;",
  "char": "ï",
  code: "U+00EF",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&eth;",
  "char": "ð",
  code: "U+00F0",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&ntilde;",
  "char": "ñ",
  code: "U+00F1",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&ograve;",
  "char": "ò",
  code: "U+00F2",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&oacute;",
  "char": "ó",
  code: "U+00F3",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&ocirc;",
  "char": "ô",
  code: "U+00F4",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&otilde;",
  "char": "õ",
  code: "U+00F5",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&ouml;",
  "char": "ö",
  code: "U+00F6",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: ["&divide;", "&div;"],
  "char": "÷",
  code: "U+00F7",
  standard: ["HTML 3.2", "HTML 5.0"],
  dtd: "HTMLlat1",
  desc: "ISOnum"
}, {
  entity: "&oslash;",
  "char": "ø",
  code: "U+00F8",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&ugrave;",
  "char": "ù",
  code: "U+00F9",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&uacute;",
  "char": "ú",
  code: "U+00FA",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&ucirc;",
  "char": "û",
  code: "U+00FB",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&uuml;",
  "char": "ü",
  code: "U+00FC",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&yacute;",
  "char": "ý",
  code: "U+00FD",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&thorn;",
  "char": "þ",
  code: "U+00FE",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&yuml;",
  "char": "ÿ",
  code: "U+00FF",
  standard: "HTML 2.0",
  dtd: "HTMLlat1",
  desc: "ISOlat1"
}, {
  entity: "&Amacr;",
  "char": "Ā",
  code: "U+0100",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&amacr;",
  "char": "ā",
  code: "U+0101",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Abreve;",
  "char": "Ă",
  code: "U+0102",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&abreve;",
  "char": "ă",
  code: "U+0103",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Aogon;",
  "char": "Ą",
  code: "U+0104",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&aogon;",
  "char": "ą",
  code: "U+0105",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Cacute;",
  "char": "Ć",
  code: "U+0106",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&cacute;",
  "char": "ć",
  code: "U+0107",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Ccirc;",
  "char": "Ĉ",
  code: "U+0108",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ccirc;",
  "char": "ĉ",
  code: "U+0109",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Cdot;",
  "char": "Ċ",
  code: "U+010A",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&cdot;",
  "char": "ċ",
  code: "U+010B",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Ccaron;",
  "char": "Č",
  code: "U+010C",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ccaron;",
  "char": "č",
  code: "U+010D",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Dcaron;",
  "char": "Ď",
  code: "U+010E",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&dcaron;",
  "char": "ď",
  code: "U+010F",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Dstrok;",
  "char": "Đ",
  code: "U+0110",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&dstrok;",
  "char": "đ",
  code: "U+0111",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Emacr;",
  "char": "Ē",
  code: "U+0112",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&emacr;",
  "char": "ē",
  code: "U+0113",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Edot;",
  "char": "Ė",
  code: "U+0116",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&edot;",
  "char": "ė",
  code: "U+0117",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Eogon;",
  "char": "Ę",
  code: "U+0118",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&eogon;",
  "char": "ę",
  code: "U+0119",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Ecaron;",
  "char": "Ě",
  code: "U+011A",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ecaron;",
  "char": "ě",
  code: "U+011B",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Gcirc;",
  "char": "Ĝ",
  code: "U+011C",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&gcirc;",
  "char": "ĝ",
  code: "U+011D",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Gbreve;",
  "char": "Ğ",
  code: "U+011E",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&gbreve;",
  "char": "ğ",
  code: "U+011F",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Gdot;",
  "char": "Ġ",
  code: "U+0120",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&gdot;",
  "char": "ġ",
  code: "U+0121",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Gcedil;",
  "char": "Ģ",
  code: "U+0122",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Hcirc;",
  "char": "Ĥ",
  code: "U+0124",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&hcirc;",
  "char": "ĥ",
  code: "U+0125",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Hstrok;",
  "char": "Ħ",
  code: "U+0126",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&hstrok;",
  "char": "ħ",
  code: "U+0127",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Itilde;",
  "char": "Ĩ",
  code: "U+0128",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&itilde;",
  "char": "ĩ",
  code: "U+0129",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Imacr;",
  "char": "Ī",
  code: "U+012A",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&imacr;",
  "char": "ī",
  code: "U+012B",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Iogon;",
  "char": "Į",
  code: "U+012E",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&iogon;",
  "char": "į",
  code: "U+012F",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Idot;",
  "char": "İ",
  code: "U+0130",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&imath;", "&inodot;"],
  "char": "ı",
  code: "U+0131",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&IJlig;",
  "char": "Ĳ",
  code: "U+0132",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ijlig;",
  "char": "ĳ",
  code: "U+0133",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Jcirc;",
  "char": "Ĵ",
  code: "U+0134",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&jcirc;",
  "char": "ĵ",
  code: "U+0135",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Kcedil;",
  "char": "Ķ",
  code: "U+0136",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&kcedil;",
  "char": "ķ",
  code: "U+0137",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&kgreen;",
  "char": "ĸ",
  code: "U+0138",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Lacute;",
  "char": "Ĺ",
  code: "U+0139",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&lacute;",
  "char": "ĺ",
  code: "U+013A",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Lcedil;",
  "char": "Ļ",
  code: "U+013B",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&lcedil;",
  "char": "ļ",
  code: "U+013C",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Lcaron;",
  "char": "Ľ",
  code: "U+013D",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&lcaron;",
  "char": "ľ",
  code: "U+013E",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Lmidot;",
  "char": "Ŀ",
  code: "U+013F",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&lmidot;",
  "char": "ŀ",
  code: "U+0140",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Lstrok;",
  "char": "Ł",
  code: "U+0141",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&lstrok;",
  "char": "ł",
  code: "U+0142",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Nacute;",
  "char": "Ń",
  code: "U+0143",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&nacute;",
  "char": "ń",
  code: "U+0144",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Ncedil;",
  "char": "Ņ",
  code: "U+0145",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ncedil;",
  "char": "ņ",
  code: "U+0146",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Ncaron;",
  "char": "Ň",
  code: "U+0147",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ncaron;",
  "char": "ň",
  code: "U+0148",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&napos;",
  "char": "ŉ",
  code: "U+0149",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ENG;",
  "char": "Ŋ",
  code: "U+014A",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&eng;",
  "char": "ŋ",
  code: "U+014B",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Omacr;",
  "char": "Ō",
  code: "U+014C",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&omacr;",
  "char": "ō",
  code: "U+014D",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Odblac;",
  "char": "Ő",
  code: "U+0150",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&odblac;",
  "char": "ő",
  code: "U+0151",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&OElig;",
  "char": "Œ",
  code: "U+0152",
  standard: "HTML 4.0",
  dtd: "HTMLspecial",
  desc: "ISOlat2"
}, {
  entity: "&oelig;",
  "char": "œ",
  code: "U+0153",
  standard: "HTML 4.0",
  dtd: "HTMLspecial",
  desc: "ISOlat2"
}, {
  entity: "&Racute;",
  "char": "Ŕ",
  code: "U+0154",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&racute;",
  "char": "ŕ",
  code: "U+0155",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Rcedil;",
  "char": "Ŗ",
  code: "U+0156",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&rcedil;",
  "char": "ŗ",
  code: "U+0157",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Rcaron;",
  "char": "Ř",
  code: "U+0158",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&rcaron;",
  "char": "ř",
  code: "U+0159",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Sacute;",
  "char": "Ś",
  code: "U+015A",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&sacute;",
  "char": "ś",
  code: "U+015B",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Scirc;",
  "char": "Ŝ",
  code: "U+015C",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&scirc;",
  "char": "ŝ",
  code: "U+015D",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Scedil;",
  "char": "Ş",
  code: "U+015E",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&scedil;",
  "char": "ş",
  code: "U+015F",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Scaron;",
  "char": "Š",
  code: "U+0160",
  standard: "HTML 4.0",
  dtd: "HTMLspecial",
  desc: "ISOlat2"
}, {
  entity: "&scaron;",
  "char": "š",
  code: "U+0161",
  standard: "HTML 4.0",
  dtd: "HTMLspecial",
  desc: "ISOlat2"
}, {
  entity: "&Tcedil;",
  "char": "Ţ",
  code: "U+0162",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&tcedil;",
  "char": "ţ",
  code: "U+0163",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Tcaron;",
  "char": "Ť",
  code: "U+0164",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&tcaron;",
  "char": "ť",
  code: "U+0165",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Tstrok;",
  "char": "Ŧ",
  code: "U+0166",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&tstrok;",
  "char": "ŧ",
  code: "U+0167",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Utilde;",
  "char": "Ũ",
  code: "U+0168",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&utilde;",
  "char": "ũ",
  code: "U+0169",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Umacr;",
  "char": "Ū",
  code: "U+016A",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&umacr;",
  "char": "ū",
  code: "U+016B",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Ubreve;",
  "char": "Ŭ",
  code: "U+016C",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ubreve;",
  "char": "ŭ",
  code: "U+016D",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Uring;",
  "char": "Ů",
  code: "U+016E",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&uring;",
  "char": "ů",
  code: "U+016F",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Udblac;",
  "char": "Ű",
  code: "U+0170",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&udblac;",
  "char": "ű",
  code: "U+0171",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Uogon;",
  "char": "Ų",
  code: "U+0172",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&uogon;",
  "char": "ų",
  code: "U+0173",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Wcirc;",
  "char": "Ŵ",
  code: "U+0174",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&wcirc;",
  "char": "ŵ",
  code: "U+0175",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Ycirc;",
  "char": "Ŷ",
  code: "U+0176",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ycirc;",
  "char": "ŷ",
  code: "U+0177",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Yuml;",
  "char": "Ÿ",
  code: "U+0178",
  standard: "HTML 4.0",
  dtd: "HTMLspecial",
  desc: "ISOlat2"
}, {
  entity: "&Zacute;",
  "char": "Ź",
  code: "U+0179",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&zacute;",
  "char": "ź",
  code: "U+017A",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Zdot;",
  "char": "Ż",
  code: "U+017B",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&zdot;",
  "char": "ż",
  code: "U+017C",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Zcaron;",
  "char": "Ž",
  code: "U+017D",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&zcaron;",
  "char": "ž",
  code: "U+017E",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&fnof;",
  "char": "ƒ",
  code: "U+0192",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: "ISOtech"
}, {
  entity: "&imped;",
  "char": "Ƶ",
  code: "U+01B5",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&gacute;",
  "char": "ǵ",
  code: "U+01F5",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&jmath;",
  "char": "ȷ",
  code: "U+0237",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&circ;",
  "char": "ˆ",
  code: "U+02C6",
  standard: "HTML 4.0",
  dtd: "HTMLspecial",
  desc: "ISOpub"
}, {
  entity: ["&caron;", "&Hacek;"],
  "char": "ˇ",
  code: "U+02C7",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&breve;", "&Breve;"],
  "char": "˘",
  code: "U+02D8",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&dot;", "&DiacriticalDot;"],
  "char": "˙",
  code: "U+02D9",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ring;",
  "char": "˚",
  code: "U+02DA",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ogon;",
  "char": "˛",
  code: "U+02DB",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&tilde;", "&DiacriticalTilde;"],
  "char": "˜",
  code: "U+02DC",
  standard: ["HTML 4.0", "HTML 5.0"],
  dtd: "HTMLspecial",
  desc: "ISOdia"
}, {
  entity: ["&dblac;", "&DiacriticalDoubleAcute;"],
  "char": "˝",
  code: "U+02DD",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Alpha;",
  "char": "Α",
  code: "U+0391",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: ""
}, {
  entity: "&Beta;",
  "char": "Β",
  code: "U+0392",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: ""
}, {
  entity: "&Gamma;",
  "char": "Γ",
  code: "U+0393",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: "ISOgrk3"
}, {
  entity: "&Delta;",
  "char": "Δ",
  code: "U+0394",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: "ISOgrk3"
}, {
  entity: "&Epsilon;",
  "char": "Ε",
  code: "U+0395",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: ""
}, {
  entity: "&Zeta;",
  "char": "Ζ",
  code: "U+0396",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: ""
}, {
  entity: "&Eta;",
  "char": "Η",
  code: "U+0397",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: ""
}, {
  entity: "&Theta;",
  "char": "Θ",
  code: "U+0398",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: "ISOgrk3"
}, {
  entity: "&Iota;",
  "char": "Ι",
  code: "U+0399",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: ""
}, {
  entity: "&Kappa;",
  "char": "Κ",
  code: "U+039A",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: ""
}, {
  entity: "&Lambda;",
  "char": "Λ",
  code: "U+039B",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: "ISOgrk3"
}, {
  entity: "&Mu;",
  "char": "Μ",
  code: "U+039C",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: ""
}, {
  entity: "&Nu;",
  "char": "Ν",
  code: "U+039D",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: ""
}, {
  entity: "&Xi;",
  "char": "Ξ",
  code: "U+039E",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: "ISOgrk3"
}, {
  entity: "&Omicron;",
  "char": "Ο",
  code: "U+039F",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: ""
}, {
  entity: "&Pi;",
  "char": "Π",
  code: "U+03A0",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: ""
}, {
  entity: "&Rho;",
  "char": "Ρ",
  code: "U+03A1",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: ""
}, {
  entity: "&Sigma;",
  "char": "Σ",
  code: "U+03A3",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: "ISOgrk3"
}, {
  entity: "&Tau;",
  "char": "Τ",
  code: "U+03A4",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: ""
}, {
  entity: "&Upsilon;",
  "char": "Υ",
  code: "U+03A5",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: "ISOgrk3"
}, {
  entity: "&Phi;",
  "char": "Φ",
  code: "U+03A6",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: "ISOgrk3"
}, {
  entity: "&Chi;",
  "char": "Χ",
  code: "U+03A7",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: ""
}, {
  entity: "&Psi;",
  "char": "Ψ",
  code: "U+03A8",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: "ISOgrk3"
}, {
  entity: ["&Omega;", "&ohm;"],
  "char": "Ω",
  code: "U+03A9",
  standard: ["HTML 4.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOgrk3"
}, {
  entity: "&alpha;",
  "char": "α",
  code: "U+03B1",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: "ISOgrk3"
}, {
  entity: "&beta;",
  "char": "β",
  code: "U+03B2",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: "ISOgrk3"
}, {
  entity: "&gamma;",
  "char": "γ",
  code: "U+03B3",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: "ISOgrk3"
}, {
  entity: "&delta;",
  "char": "δ",
  code: "U+03B4",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: "ISOgrk3"
}, {
  entity: ["&epsi;", "&epsilon;"],
  "char": "ε",
  code: "U+03B5",
  standard: ["HTML 4.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOgrk3"
}, {
  entity: "&zeta;",
  "char": "ζ",
  code: "U+03B6",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: "ISOgrk3"
}, {
  entity: "&eta;",
  "char": "η",
  code: "U+03B7",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: "ISOgrk3"
}, {
  entity: "&theta;",
  "char": "θ",
  code: "U+03B8",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: "ISOgrk3"
}, {
  entity: "&iota;",
  "char": "ι",
  code: "U+03B9",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: "ISOgrk3"
}, {
  entity: "&kappa;",
  "char": "κ",
  code: "U+03BA",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: "ISOgrk3"
}, {
  entity: "&lambda;",
  "char": "λ",
  code: "U+03BB",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: "ISOgrk3"
}, {
  entity: "&mu;",
  "char": "μ",
  code: "U+03BC",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: "ISOgrk3"
}, {
  entity: "&nu;",
  "char": "ν",
  code: "U+03BD",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: "ISOgrk3"
}, {
  entity: "&xi;",
  "char": "ξ",
  code: "U+03BE",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: "ISOgrk3"
}, {
  entity: "&omicron;",
  "char": "ο",
  code: "U+03BF",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: "New"
}, {
  entity: "&pi;",
  "char": "π",
  code: "U+03C0",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: "ISOgrk3"
}, {
  entity: "&rho;",
  "char": "ρ",
  code: "U+03C1",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: "ISOgrk3"
}, {
  entity: ["&sigmav;", "&varsigma;", "&sigmaf;"],
  "char": "ς",
  code: "U+03C2",
  standard: ["HTML 4.0", "HTML 5.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOgrk3"
}, {
  entity: "&sigma;",
  "char": "σ",
  code: "U+03C3",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: "ISOgrk3"
}, {
  entity: "&tau;",
  "char": "τ",
  code: "U+03C4",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: "ISOgrk3"
}, {
  entity: ["&upsi;", "&upsilon;"],
  "char": "υ",
  code: "U+03C5",
  standard: ["HTML 4.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOgrk3"
}, {
  entity: "&phi;",
  "char": "φ",
  code: "U+03C6",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: "ISOgrk3"
}, {
  entity: "&chi;",
  "char": "χ",
  code: "U+03C7",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: "ISOgrk3"
}, {
  entity: "&psi;",
  "char": "ψ",
  code: "U+03C8",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: "ISOgrk3"
}, {
  entity: "&omega;",
  "char": "ω",
  code: "U+03C9",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: "ISOgrk3"
}, {
  entity: ["&thetav;", "&vartheta;", "&thetasym;"],
  "char": "ϑ",
  code: "U+03D1",
  standard: ["HTML 4.0", "HTML 5.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "New"
}, {
  entity: ["&Upsi;", "&upsih;"],
  "char": "ϒ",
  code: "U+03D2",
  standard: ["HTML 4.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "New"
}, {
  entity: ["&straightphi;", "&phiv;", "&varphi;"],
  "char": "ϕ",
  code: "U+03D5",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&piv;", "&varpi;"],
  "char": "ϖ",
  code: "U+03D6",
  standard: ["HTML 4.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOgrk3"
}, {
  entity: "&Gammad;",
  "char": "Ϝ",
  code: "U+03DC",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&gammad;", "&digamma;"],
  "char": "ϝ",
  code: "U+03DD",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&kappav;", "&varkappa;"],
  "char": "ϰ",
  code: "U+03F0",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&rhov;", "&varrho;"],
  "char": "ϱ",
  code: "U+03F1",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&epsiv;", "&varepsilon;", "&straightepsilon;"],
  "char": "ϵ",
  code: "U+03F5",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&bepsi;", "&backepsilon;"],
  "char": "϶",
  code: "U+03F6",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&IOcy;",
  "char": "Ё",
  code: "U+0401",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&DJcy;",
  "char": "Ђ",
  code: "U+0402",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&GJcy;",
  "char": "Ѓ",
  code: "U+0403",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Jukcy;",
  "char": "Є",
  code: "U+0404",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&DScy;",
  "char": "Ѕ",
  code: "U+0405",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Iukcy;",
  "char": "І",
  code: "U+0406",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&YIcy;",
  "char": "Ї",
  code: "U+0407",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Jsercy;",
  "char": "Ј",
  code: "U+0408",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&LJcy;",
  "char": "Љ",
  code: "U+0409",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&NJcy;",
  "char": "Њ",
  code: "U+040A",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&TSHcy;",
  "char": "Ћ",
  code: "U+040B",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&KJcy;",
  "char": "Ќ",
  code: "U+040C",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Ubrcy;",
  "char": "Ў",
  code: "U+040E",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&DZcy;",
  "char": "Џ",
  code: "U+040F",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Acy;",
  "char": "А",
  code: "U+0410",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Bcy;",
  "char": "Б",
  code: "U+0411",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Vcy;",
  "char": "В",
  code: "U+0412",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Gcy;",
  "char": "Г",
  code: "U+0413",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Dcy;",
  "char": "Д",
  code: "U+0414",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&IEcy;",
  "char": "Е",
  code: "U+0415",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ZHcy;",
  "char": "Ж",
  code: "U+0416",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Zcy;",
  "char": "З",
  code: "U+0417",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Icy;",
  "char": "И",
  code: "U+0418",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Jcy;",
  "char": "Й",
  code: "U+0419",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Kcy;",
  "char": "К",
  code: "U+041A",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Lcy;",
  "char": "Л",
  code: "U+041B",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Mcy;",
  "char": "М",
  code: "U+041C",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Ncy;",
  "char": "Н",
  code: "U+041D",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Ocy;",
  "char": "О",
  code: "U+041E",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Pcy;",
  "char": "П",
  code: "U+041F",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Rcy;",
  "char": "Р",
  code: "U+0420",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Scy;",
  "char": "С",
  code: "U+0421",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Tcy;",
  "char": "Т",
  code: "U+0422",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Ucy;",
  "char": "У",
  code: "U+0423",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Fcy;",
  "char": "Ф",
  code: "U+0424",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&KHcy;",
  "char": "Х",
  code: "U+0425",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&TScy;",
  "char": "Ц",
  code: "U+0426",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&CHcy;",
  "char": "Ч",
  code: "U+0427",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&SHcy;",
  "char": "Ш",
  code: "U+0428",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&SHCHcy;",
  "char": "Щ",
  code: "U+0429",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&HARDcy;",
  "char": "Ъ",
  code: "U+042A",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Ycy;",
  "char": "Ы",
  code: "U+042B",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&SOFTcy;",
  "char": "Ь",
  code: "U+042C",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Ecy;",
  "char": "Э",
  code: "U+042D",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&YUcy;",
  "char": "Ю",
  code: "U+042E",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&YAcy;",
  "char": "Я",
  code: "U+042F",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&acy;",
  "char": "а",
  code: "U+0430",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&bcy;",
  "char": "б",
  code: "U+0431",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&vcy;",
  "char": "в",
  code: "U+0432",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&gcy;",
  "char": "г",
  code: "U+0433",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&dcy;",
  "char": "д",
  code: "U+0434",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&iecy;",
  "char": "е",
  code: "U+0435",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&zhcy;",
  "char": "ж",
  code: "U+0436",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&zcy;",
  "char": "з",
  code: "U+0437",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&icy;",
  "char": "и",
  code: "U+0438",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&jcy;",
  "char": "й",
  code: "U+0439",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&kcy;",
  "char": "к",
  code: "U+043A",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&lcy;",
  "char": "л",
  code: "U+043B",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&mcy;",
  "char": "м",
  code: "U+043C",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ncy;",
  "char": "н",
  code: "U+043D",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ocy;",
  "char": "о",
  code: "U+043E",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&pcy;",
  "char": "п",
  code: "U+043F",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&rcy;",
  "char": "р",
  code: "U+0440",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&scy;",
  "char": "с",
  code: "U+0441",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&tcy;",
  "char": "т",
  code: "U+0442",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ucy;",
  "char": "у",
  code: "U+0443",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&fcy;",
  "char": "ф",
  code: "U+0444",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&khcy;",
  "char": "х",
  code: "U+0445",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&tscy;",
  "char": "ц",
  code: "U+0446",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&chcy;",
  "char": "ч",
  code: "U+0447",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&shcy;",
  "char": "ш",
  code: "U+0448",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&shchcy;",
  "char": "щ",
  code: "U+0449",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&hardcy;",
  "char": "ъ",
  code: "U+044A",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ycy;",
  "char": "ы",
  code: "U+044B",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&softcy;",
  "char": "ь",
  code: "U+044C",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ecy;",
  "char": "э",
  code: "U+044D",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&yucy;",
  "char": "ю",
  code: "U+044E",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&yacy;",
  "char": "я",
  code: "U+044F",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&iocy;",
  "char": "ё",
  code: "U+0451",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&djcy;",
  "char": "ђ",
  code: "U+0452",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&gjcy;",
  "char": "ѓ",
  code: "U+0453",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&jukcy;",
  "char": "є",
  code: "U+0454",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&dscy;",
  "char": "ѕ",
  code: "U+0455",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&iukcy;",
  "char": "і",
  code: "U+0456",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&yicy;",
  "char": "ї",
  code: "U+0457",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&jsercy;",
  "char": "ј",
  code: "U+0458",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ljcy;",
  "char": "љ",
  code: "U+0459",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&njcy;",
  "char": "њ",
  code: "U+045A",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&tshcy;",
  "char": "ћ",
  code: "U+045B",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&kjcy;",
  "char": "ќ",
  code: "U+045C",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ubrcy;",
  "char": "ў",
  code: "U+045E",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&dzcy;",
  "char": "џ",
  code: "U+045F",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ensp;",
  "char": " ",
  code: "U+2002",
  standard: "HTML 4.0",
  dtd: "HTMLspecial",
  desc: "ISOpub"
}, {
  entity: "&emsp;",
  "char": " ",
  code: "U+2003",
  standard: "HTML 4.0",
  dtd: "HTMLspecial",
  desc: "ISOpub"
}, {
  entity: "&emsp13;",
  "char": " ",
  code: "U+2004",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&emsp14;",
  "char": " ",
  code: "U+2005",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&numsp;",
  "char": " ",
  code: "U+2007",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&puncsp;",
  "char": " ",
  code: "U+2008",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&thinsp;", "&ThinSpace;"],
  "char": " ",
  code: "U+2009",
  standard: ["HTML 4.0", "HTML 5.0"],
  dtd: "HTMLspecial",
  desc: "ISOpub"
}, {
  entity: ["&hairsp;", "&VeryThinSpace;"],
  "char": " ",
  code: "U+200A",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&ZeroWidthSpace;", "&NegativeVeryThinSpace;", "&NegativeThinSpace;", "&NegativeMediumSpace;", "&NegativeThickSpace;"],
  "char": "ZWSP",
  code: "U+200B",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&zwnj;",
  "char": "ZWNJ",
  code: "U+200C",
  standard: "HTML 4.0",
  dtd: "HTMLspecial",
  desc: "NEW RFC 2070"
}, {
  entity: "&zwj;",
  "char": "ZWJ",
  code: "U+200D",
  standard: "HTML 4.0",
  dtd: "HTMLspecial",
  desc: "NEW RFC 2070"
}, {
  entity: "&lrm;",
  "char": "LRM",
  code: "U+200E",
  standard: "HTML 4.0",
  dtd: "HTMLspecial",
  desc: "NEW RFC 2070"
}, {
  entity: "&rlm;",
  "char": "RLM",
  code: "U+200F",
  standard: "HTML 4.0",
  dtd: "HTMLspecial",
  desc: "NEW RFC 2070"
}, {
  entity: ["&hyphen;", "&dash;"],
  "char": "‐",
  code: "U+2010",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ndash;",
  "char": "–",
  code: "U+2013",
  standard: "HTML 4.0",
  dtd: "HTMLspecial",
  desc: "ISOpub"
}, {
  entity: "&mdash;",
  "char": "—",
  code: "U+2014",
  standard: "HTML 4.0",
  dtd: "HTMLspecial",
  desc: "ISOpub"
}, {
  entity: "&horbar;",
  "char": "―",
  code: "U+2015",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&Verbar;", "&Vert;"],
  "char": "‖",
  code: "U+2016",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&lsquo;", "&OpenCurlyQuote;"],
  "char": "‘",
  code: "U+2018",
  standard: ["HTML 4.0", "HTML 5.0"],
  dtd: "HTMLspecial",
  desc: "ISOnum"
}, {
  entity: ["&rsquo;", "&rsquor;", "&CloseCurlyQuote;"],
  "char": "’",
  code: "U+2019",
  standard: ["HTML 4.0", "HTML 5.0", "HTML 5.0"],
  dtd: "HTMLspecial",
  desc: "ISOnum"
}, {
  entity: ["&sbquo;", "&lsquor;"],
  "char": "‚",
  code: "U+201A",
  standard: ["HTML 4.0", "HTML 5.0"],
  dtd: "HTMLspecial",
  desc: "New"
}, {
  entity: ["&ldquo;", "&OpenCurlyDoubleQuote;"],
  "char": "“",
  code: "U+201C",
  standard: ["HTML 4.0", "HTML 5.0"],
  dtd: "HTMLspecial",
  desc: "ISOnum"
}, {
  entity: ["&rdquo;", "&rdquor;", "&CloseCurlyDoubleQuote;"],
  "char": "”",
  code: "U+201D",
  standard: ["HTML 4.0", "HTML 5.0", "HTML 5.0"],
  dtd: "HTMLspecial",
  desc: "ISOnum"
}, {
  entity: ["&bdquo;", "&ldquor;"],
  "char": "„",
  code: "U+201E",
  standard: ["HTML 4.0", "HTML 5.0"],
  dtd: "HTMLspecial",
  desc: "New"
}, {
  entity: "&dagger;",
  "char": "†",
  code: "U+2020",
  standard: "HTML 4.0",
  dtd: "HTMLspecial",
  desc: "ISOpub"
}, {
  entity: ["&Dagger;", "&ddagger;"],
  "char": "‡",
  code: "U+2021",
  standard: ["HTML 4.0", "HTML 5.0"],
  dtd: "HTMLspecial",
  desc: "ISOpub"
}, {
  entity: ["&bull;", "&bullet;"],
  "char": "•",
  code: "U+2022",
  standard: ["HTML 4.0", "HTML 5.0"],
  dtd: "HTMLspecial",
  desc: "ISOpub"
}, {
  entity: "&nldr;",
  "char": "‥",
  code: "U+2025",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&hellip;", "&mldr;"],
  "char": "…",
  code: "U+2026",
  standard: ["HTML 4.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOpub"
}, {
  entity: "&permil;",
  "char": "‰",
  code: "U+2030",
  standard: "HTML 4.0",
  dtd: "HTMLspecial",
  desc: "ISOtech"
}, {
  entity: "&pertenk;",
  "char": "‱",
  code: "U+2031",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&prime;",
  "char": "′",
  code: "U+2032",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: "ISOtech"
}, {
  entity: "&Prime;",
  "char": "″",
  code: "U+2033",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: "ISOtech"
}, {
  entity: "&tprime;",
  "char": "‴",
  code: "U+2034",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&bprime;", "&backprime;"],
  "char": "‵",
  code: "U+2035",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&lsaquo;",
  "char": "‹",
  code: "U+2039",
  standard: "HTML 4.0",
  dtd: "HTMLspecial",
  desc: "ISO proposed"
}, {
  entity: "&rsaquo;",
  "char": "›",
  code: "U+203A",
  standard: "HTML 4.0",
  dtd: "HTMLspecial",
  desc: "ISO proposed"
}, {
  entity: ["&oline;", "&OverBar;"],
  "char": "‾",
  code: "U+203E",
  standard: ["HTML 4.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "New"
}, {
  entity: "&caret;",
  "char": "⁁",
  code: "U+2041",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&hybull;",
  "char": "⁃",
  code: "U+2043",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&frasl;",
  "char": "⁄",
  code: "U+2044",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: "New"
}, {
  entity: "&bsemi;",
  "char": "⁏",
  code: "U+204F",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&qprime;",
  "char": "⁗",
  code: "U+2057",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&MediumSpace;",
  "char": " ",
  code: "U+205F",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ThickSpace;",
  "char": " ",
  code: ["U+205F", "U+200A"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&NoBreak;",
  "char": "WJ",
  code: "U+2060",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&ApplyFunction;", "&af;"],
  "char": "()",
  code: "U+2061",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&InvisibleTimes;", "&it;"],
  "char": "×",
  code: "U+2062",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&InvisibleComma;", "&ic;"],
  "char": ",",
  code: "U+2063",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&euro;",
  "char": "€",
  code: "U+20AC",
  standard: "HTML 4.0",
  dtd: "HTMLspecial",
  desc: "New"
}, {
  entity: ["&Copf;", "&complexes;"],
  "char": "ℂ",
  code: "U+2102",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&incare;",
  "char": "℅",
  code: "U+2105",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&gscr;",
  "char": "ℊ",
  code: "U+210A",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&hamilt;", "&HilbertSpace;", "&Hscr;"],
  "char": "ℋ",
  code: "U+210B",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&Hfr;", "&Poincareplane;"],
  "char": "ℌ",
  code: "U+210C",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&quaternions;", "&Hopf;"],
  "char": "ℍ",
  code: "U+210D",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&planckh;",
  "char": "ℎ",
  code: "U+210E",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&planck;", "&hbar;", "&plankv;", "&hslash;"],
  "char": "ℏ",
  code: "U+210F",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&Iscr;", "&imagline;"],
  "char": "ℐ",
  code: "U+2110",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&image;", "&Im;", "&imagpart;", "&Ifr;"],
  "char": "ℑ",
  code: "U+2111",
  standard: ["HTML 4.0", "HTML 5.0", "HTML 5.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOamso"
}, {
  entity: ["&Lscr;", "&lagran;", "&Laplacetrf;"],
  "char": "ℒ",
  code: "U+2112",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ell;",
  "char": "ℓ",
  code: "U+2113",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&Nopf;", "&naturals;"],
  "char": "ℕ",
  code: "U+2115",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&numero;",
  "char": "№",
  code: "U+2116",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&copysr;",
  "char": "℗",
  code: "U+2117",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&weierp;", "&wp;"],
  "char": "℘",
  code: "U+2118",
  standard: ["HTML 4.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOamso"
}, {
  entity: ["&Popf;", "&primes;"],
  "char": "ℙ",
  code: "U+2119",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&rationals;", "&Qopf;"],
  "char": "ℚ",
  code: "U+211A",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&Rscr;", "&realine;"],
  "char": "ℛ",
  code: "U+211B",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&real;", "&Re;", "&realpart;", "&Rfr;"],
  "char": "ℜ",
  code: "U+211C",
  standard: ["HTML 4.0", "HTML 5.0", "HTML 5.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOamso"
}, {
  entity: ["&reals;", "&Ropf;"],
  "char": "ℝ",
  code: "U+211D",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&rx;",
  "char": "℞",
  code: "U+211E",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&trade;", "&TRADE;"],
  "char": "™",
  code: "U+2122",
  standard: ["HTML 4.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOnum"
}, {
  entity: ["&integers;", "&Zopf;"],
  "char": "ℤ",
  code: "U+2124",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&mho;",
  "char": "℧",
  code: "U+2127",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&Zfr;", "&zeetrf;"],
  "char": "ℨ",
  code: "U+2128",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&iiota;",
  "char": "℩",
  code: "U+2129",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&bernou;", "&Bernoullis;", "&Bscr;"],
  "char": "ℬ",
  code: "U+212C",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&Cfr;", "&Cayleys;"],
  "char": "ℭ",
  code: "U+212D",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&escr;",
  "char": "ℯ",
  code: "U+212F",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&Escr;", "&expectation;"],
  "char": "ℰ",
  code: "U+2130",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&Fscr;", "&Fouriertrf;"],
  "char": "ℱ",
  code: "U+2131",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&phmmat;", "&Mellintrf;", "&Mscr;"],
  "char": "ℳ",
  code: "U+2133",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&order;", "&orderof;", "&oscr;"],
  "char": "ℴ",
  code: "U+2134",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&alefsym;", "&aleph;"],
  "char": "ℵ",
  code: "U+2135",
  standard: ["HTML 4.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "New"
}, {
  entity: "&beth;",
  "char": "ℶ",
  code: "U+2136",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&gimel;",
  "char": "ℷ",
  code: "U+2137",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&daleth;",
  "char": "ℸ",
  code: "U+2138",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&CapitalDifferentialD;", "&DD;"],
  "char": "ⅅ",
  code: "U+2145",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&DifferentialD;", "&dd;"],
  "char": "ⅆ",
  code: "U+2146",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&ExponentialE;", "&ee;"],
  "char": "ⅇ",
  code: "U+2147",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&ImaginaryI;", "&ii;"],
  "char": "ⅈ",
  code: "U+2148",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&frac13;",
  "char": "⅓",
  code: "U+2153",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&frac23;",
  "char": "⅔",
  code: "U+2154",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&frac15;",
  "char": "⅕",
  code: "U+2155",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&frac25;",
  "char": "⅖",
  code: "U+2156",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&frac35;",
  "char": "⅗",
  code: "U+2157",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&frac45;",
  "char": "⅘",
  code: "U+2158",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&frac16;",
  "char": "⅙",
  code: "U+2159",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&frac56;",
  "char": "⅚",
  code: "U+215A",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&frac18;",
  "char": "⅛",
  code: "U+215B",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&frac38;",
  "char": "⅜",
  code: "U+215C",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&frac58;",
  "char": "⅝",
  code: "U+215D",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&frac78;",
  "char": "⅞",
  code: "U+215E",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&larr;", "&leftarrow;", "&LeftArrow;", "&slarr;", "&ShortLeftArrow;"],
  "char": "←",
  code: "U+2190",
  standard: ["HTML 4.0", "HTML 5.0", "HTML 5.0", "HTML 5.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOnum"
}, {
  entity: ["&uarr;", "&uparrow;", "&UpArrow;", "&ShortUpArrow;"],
  "char": "↑",
  code: "U+2191",
  standard: ["HTML 4.0", "HTML 5.0", "HTML 5.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOnum"
}, {
  entity: ["&rarr;", "&rightarrow;", "&RightArrow;", "&srarr;", "&ShortRightArrow;"],
  "char": "→",
  code: "U+2192",
  standard: ["HTML 4.0", "HTML 5.0", "HTML 5.0", "HTML 5.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOnum"
}, {
  entity: ["&darr;", "&downarrow;", "&DownArrow;", "&ShortDownArrow;"],
  "char": "↓",
  code: "U+2193",
  standard: ["HTML 4.0", "HTML 5.0", "HTML 5.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOnum"
}, {
  entity: ["&harr;", "&leftrightarrow;", "&LeftRightArrow;"],
  "char": "↔",
  code: "U+2194",
  standard: ["HTML 4.0", "HTML 5.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOamsa"
}, {
  entity: ["&varr;", "&updownarrow;", "&UpDownArrow;"],
  "char": "↕",
  code: "U+2195",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&nwarr;", "&UpperLeftArrow;", "&nwarrow;"],
  "char": "↖",
  code: "U+2196",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&nearr;", "&UpperRightArrow;", "&nearrow;"],
  "char": "↗",
  code: "U+2197",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&searr;", "&searrow;", "&LowerRightArrow;"],
  "char": "↘",
  code: "U+2198",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&swarr;", "&swarrow;", "&LowerLeftArrow;"],
  "char": "↙",
  code: "U+2199",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&nlarr;", "&nleftarrow;"],
  "char": "↚",
  code: "U+219A",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&nrarr;", "&nrightarrow;"],
  "char": "↛",
  code: "U+219B",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&rarrw;", "&rightsquigarrow;"],
  "char": "↝",
  code: "U+219D",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&nrarrw;",
  "char": "↝̸",
  code: ["U+219D", "U+0338"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&Larr;", "&twoheadleftarrow;"],
  "char": "↞",
  code: "U+219E",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Uarr;",
  "char": "↟",
  code: "U+219F",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&Rarr;", "&twoheadrightarrow;"],
  "char": "↠",
  code: "U+21A0",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Darr;",
  "char": "↡",
  code: "U+21A1",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&larrtl;", "&leftarrowtail;"],
  "char": "↢",
  code: "U+21A2",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&rarrtl;", "&rightarrowtail;"],
  "char": "↣",
  code: "U+21A3",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&LeftTeeArrow;", "&mapstoleft;"],
  "char": "↤",
  code: "U+21A4",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&UpTeeArrow;", "&mapstoup;"],
  "char": "↥",
  code: "U+21A5",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&map;", "&RightTeeArrow;", "&mapsto;"],
  "char": "↦",
  code: "U+21A6",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&DownTeeArrow;", "&mapstodown;"],
  "char": "↧",
  code: "U+21A7",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&larrhk;", "&hookleftarrow;"],
  "char": "↩",
  code: "U+21A9",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&rarrhk;", "&hookrightarrow;"],
  "char": "↪",
  code: "U+21AA",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&larrlp;", "&looparrowleft;"],
  "char": "↫",
  code: "U+21AB",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&rarrlp;", "&looparrowright;"],
  "char": "↬",
  code: "U+21AC",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&harrw;", "&leftrightsquigarrow;"],
  "char": "↭",
  code: "U+21AD",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&nharr;", "&nleftrightarrow;"],
  "char": "↮",
  code: "U+21AE",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&lsh;", "&Lsh;"],
  "char": "↰",
  code: "U+21B0",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&rsh;", "&Rsh;"],
  "char": "↱",
  code: "U+21B1",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ldsh;",
  "char": "↲",
  code: "U+21B2",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&rdsh;",
  "char": "↳",
  code: "U+21B3",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&crarr;",
  "char": "↵",
  code: "U+21B5",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: "New"
}, {
  entity: ["&cularr;", "&curvearrowleft;"],
  "char": "↶",
  code: "U+21B6",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&curarr;", "&curvearrowright;"],
  "char": "↷",
  code: "U+21B7",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&olarr;", "&circlearrowleft;"],
  "char": "↺",
  code: "U+21BA",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&orarr;", "&circlearrowright;"],
  "char": "↻",
  code: "U+21BB",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&lharu;", "&LeftVector;", "&leftharpoonup;"],
  "char": "↼",
  code: "U+21BC",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&lhard;", "&leftharpoondown;", "&DownLeftVector;"],
  "char": "↽",
  code: "U+21BD",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&uharr;", "&upharpoonright;", "&RightUpVector;"],
  "char": "↾",
  code: "U+21BE",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&uharl;", "&upharpoonleft;", "&LeftUpVector;"],
  "char": "↿",
  code: "U+21BF",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&rharu;", "&RightVector;", "&rightharpoonup;"],
  "char": "⇀",
  code: "U+21C0",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&rhard;", "&rightharpoondown;", "&DownRightVector;"],
  "char": "⇁",
  code: "U+21C1",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&dharr;", "&RightDownVector;", "&downharpoonright;"],
  "char": "⇂",
  code: "U+21C2",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&dharl;", "&LeftDownVector;", "&downharpoonleft;"],
  "char": "⇃",
  code: "U+21C3",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&rlarr;", "&rightleftarrows;", "&RightArrowLeftArrow;"],
  "char": "⇄",
  code: "U+21C4",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&udarr;", "&UpArrowDownArrow;"],
  "char": "⇅",
  code: "U+21C5",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&lrarr;", "&leftrightarrows;", "&LeftArrowRightArrow;"],
  "char": "⇆",
  code: "U+21C6",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&llarr;", "&leftleftarrows;"],
  "char": "⇇",
  code: "U+21C7",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&uuarr;", "&upuparrows;"],
  "char": "⇈",
  code: "U+21C8",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&rrarr;", "&rightrightarrows;"],
  "char": "⇉",
  code: "U+21C9",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&ddarr;", "&downdownarrows;"],
  "char": "⇊",
  code: "U+21CA",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&lrhar;", "&ReverseEquilibrium;", "&leftrightharpoons;"],
  "char": "⇋",
  code: "U+21CB",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&rlhar;", "&rightleftharpoons;", "&Equilibrium;"],
  "char": "⇌",
  code: "U+21CC",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&nlArr;", "&nLeftarrow;"],
  "char": "⇍",
  code: "U+21CD",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&nhArr;", "&nLeftrightarrow;"],
  "char": "⇎",
  code: "U+21CE",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&nrArr;", "&nRightarrow;"],
  "char": "⇏",
  code: "U+21CF",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&lArr;", "&Leftarrow;", "&DoubleLeftArrow;"],
  "char": "⇐",
  code: "U+21D0",
  standard: ["HTML 4.0", "HTML 5.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOtech"
}, {
  entity: ["&uArr;", "&Uparrow;", "&DoubleUpArrow;"],
  "char": "⇑",
  code: "U+21D1",
  standard: ["HTML 4.0", "HTML 5.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOamsa"
}, {
  entity: ["&rArr;", "&Rightarrow;", "&Implies;", "&DoubleRightArrow;"],
  "char": "⇒",
  code: "U+21D2",
  standard: ["HTML 4.0", "HTML 5.0", "HTML 5.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOnum"
}, {
  entity: ["&dArr;", "&Downarrow;", "&DoubleDownArrow;"],
  "char": "⇓",
  code: "U+21D3",
  standard: ["HTML 4.0", "HTML 5.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOamsa"
}, {
  entity: ["&hArr;", "&Leftrightarrow;", "&DoubleLeftRightArrow;", "&iff;"],
  "char": "⇔",
  code: "U+21D4",
  standard: ["HTML 4.0", "HTML 5.0", "HTML 5.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOamsa"
}, {
  entity: ["&vArr;", "&Updownarrow;", "&DoubleUpDownArrow;"],
  "char": "⇕",
  code: "U+21D5",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&nwArr;",
  "char": "⇖",
  code: "U+21D6",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&neArr;",
  "char": "⇗",
  code: "U+21D7",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&seArr;",
  "char": "⇘",
  code: "U+21D8",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&swArr;",
  "char": "⇙",
  code: "U+21D9",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&lAarr;", "&Lleftarrow;"],
  "char": "⇚",
  code: "U+21DA",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&rAarr;", "&Rrightarrow;"],
  "char": "⇛",
  code: "U+21DB",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&zigrarr;",
  "char": "⇝",
  code: "U+21DD",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&larrb;", "&LeftArrowBar;"],
  "char": "⇤",
  code: "U+21E4",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&rarrb;", "&RightArrowBar;"],
  "char": "⇥",
  code: "U+21E5",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&duarr;", "&DownArrowUpArrow;"],
  "char": "⇵",
  code: "U+21F5",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&loarr;",
  "char": "⇽",
  code: "U+21FD",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&roarr;",
  "char": "⇾",
  code: "U+21FE",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&hoarr;",
  "char": "⇿",
  code: "U+21FF",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&forall;", "&ForAll;"],
  "char": "∀",
  code: "U+2200",
  standard: ["HTML 4.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOtech"
}, {
  entity: ["&comp;", "&complement;"],
  "char": "∁",
  code: "U+2201",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&part;", "&PartialD;"],
  "char": "∂",
  code: "U+2202",
  standard: ["HTML 4.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOtech"
}, {
  entity: "&npart;",
  "char": "∂̸",
  code: ["U+2202", "U+0338"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&exist;", "&Exists;"],
  "char": "∃",
  code: "U+2203",
  standard: ["HTML 4.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOtech"
}, {
  entity: ["&nexist;", "&NotExists;", "&nexists;"],
  "char": "∄",
  code: "U+2204",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&empty;", "&emptyset;", "&emptyv;", "&varnothing;"],
  "char": "∅",
  code: "U+2205",
  standard: ["HTML 4.0", "HTML 5.0", "HTML 5.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOamso"
}, {
  entity: ["&nabla;", "&Del;"],
  "char": "∇",
  code: "U+2207",
  standard: ["HTML 4.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOtech"
}, {
  entity: ["&isin;", "&isinv;", "&Element;", "&in;"],
  "char": "∈",
  code: "U+2208",
  standard: ["HTML 4.0", "HTML 5.0", "HTML 5.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOtech"
}, {
  entity: ["&notin;", "&NotElement;", "&notinva;"],
  "char": "∉",
  code: "U+2209",
  standard: ["HTML 4.0", "HTML 5.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOtech"
}, {
  entity: ["&niv;", "&ReverseElement;", "&ni;", "&SuchThat;"],
  "char": "∋",
  code: "U+220B",
  standard: ["HTML 4.0", "HTML 5.0", "HTML 5.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOtech"
}, {
  entity: ["&notni;", "&notniva;", "&NotReverseElement;"],
  "char": "∌",
  code: "U+220C",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&prod;", "&Product;"],
  "char": "∏",
  code: "U+220F",
  standard: ["HTML 4.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOamsb"
}, {
  entity: ["&coprod;", "&Coproduct;"],
  "char": "∐",
  code: "U+2210",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&sum;", "&Sum;"],
  "char": "∑",
  code: "U+2211",
  standard: ["HTML 4.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOamsb"
}, {
  entity: "&minus;",
  "char": "−",
  code: "U+2212",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: "ISOtech"
}, {
  entity: ["&mnplus;", "&mp;", "&MinusPlus;"],
  "char": "∓",
  code: "U+2213",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&plusdo;", "&dotplus;"],
  "char": "∔",
  code: "U+2214",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&setmn;", "&setminus;", "&Backslash;", "&ssetmn;", "&smallsetminus;"],
  "char": "∖",
  code: "U+2216",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&lowast;",
  "char": "∗",
  code: "U+2217",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: "ISOtech"
}, {
  entity: ["&compfn;", "&SmallCircle;"],
  "char": "∘",
  code: "U+2218",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&radic;", "&Sqrt;"],
  "char": "√",
  code: "U+221A",
  standard: ["HTML 4.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOtech"
}, {
  entity: ["&prop;", "&propto;", "&Proportional;", "&vprop;", "&varpropto;"],
  "char": "∝",
  code: "U+221D",
  standard: ["HTML 4.0", "HTML 5.0", "HTML 5.0", "HTML 5.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOtech"
}, {
  entity: "&infin;",
  "char": "∞",
  code: "U+221E",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: "ISOtech"
}, {
  entity: "&angrt;",
  "char": "∟",
  code: "U+221F",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&ang;", "&angle;"],
  "char": "∠",
  code: "U+2220",
  standard: ["HTML 4.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOamso"
}, {
  entity: "&nang;",
  "char": "∠⃒",
  code: ["U+2220", "U+20D2"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&angmsd;", "&measuredangle;"],
  "char": "∡",
  code: "U+2221",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&angsph;",
  "char": "∢",
  code: "U+2222",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&mid;", "&VerticalBar;", "&smid;", "&shortmid;"],
  "char": "∣",
  code: "U+2223",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&nmid;", "&NotVerticalBar;", "&nsmid;", "&nshortmid;"],
  "char": "∤",
  code: "U+2224",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&par;", "&parallel;", "&DoubleVerticalBar;", "&spar;", "&shortparallel;"],
  "char": "∥",
  code: "U+2225",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&npar;", "&nparallel;", "&NotDoubleVerticalBar;", "&nspar;", "&nshortparallel;"],
  "char": "∦",
  code: "U+2226",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&and;", "&wedge;"],
  "char": "∧",
  code: "U+2227",
  standard: ["HTML 4.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOtech"
}, {
  entity: ["&or;", "&vee;"],
  "char": "∨",
  code: "U+2228",
  standard: ["HTML 4.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOtech"
}, {
  entity: "&cap;",
  "char": "∩",
  code: "U+2229",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: "ISOtech"
}, {
  entity: "&caps;",
  "char": "∩︀",
  code: ["U+2229", "U+FE00"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&cup;",
  "char": "∪",
  code: "U+222A",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: "ISOtech"
}, {
  entity: "&cups;",
  "char": "∪︀",
  code: ["U+222A", "U+FE00"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&int;", "&Integral;"],
  "char": "∫",
  code: "U+222B",
  standard: ["HTML 4.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOtech"
}, {
  entity: "&Int;",
  "char": "∬",
  code: "U+222C",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&tint;", "&iiint;"],
  "char": "∭",
  code: "U+222D",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&conint;", "&oint;", "&ContourIntegral;"],
  "char": "∮",
  code: "U+222E",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&Conint;", "&DoubleContourIntegral;"],
  "char": "∯",
  code: "U+222F",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Cconint;",
  "char": "∰",
  code: "U+2230",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&cwint;",
  "char": "∱",
  code: "U+2231",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&cwconint;", "&ClockwiseContourIntegral;"],
  "char": "∲",
  code: "U+2232",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&awconint;", "&CounterClockwiseContourIntegral;"],
  "char": "∳",
  code: "U+2233",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&there4;", "&therefore;", "&Therefore;"],
  "char": "∴",
  code: "U+2234",
  standard: ["HTML 4.0", "HTML 5.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOtech"
}, {
  entity: ["&becaus;", "&because;", "&Because;"],
  "char": "∵",
  code: "U+2235",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ratio;",
  "char": "∶",
  code: "U+2236",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&Colon;", "&Proportion;"],
  "char": "∷",
  code: "U+2237",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&minusd;", "&dotminus;"],
  "char": "∸",
  code: "U+2238",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&mDDot;",
  "char": "∺",
  code: "U+223A",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&homtht;",
  "char": "∻",
  code: "U+223B",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&sim;", "&Tilde;", "&thksim;", "&thicksim;"],
  "char": "∼",
  code: "U+223C",
  standard: ["HTML 4.0", "HTML 5.0", "HTML 5.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOtech"
}, {
  entity: "&nvsim;",
  "char": "∼⃒",
  code: ["U+223C", "U+20D2"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&bsim;", "&backsim;"],
  "char": "∽",
  code: "U+223D",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&race;",
  "char": "∽̱",
  code: ["U+223D", "U+0331"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&ac;", "&mstpos;"],
  "char": "∾",
  code: "U+223E",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&acE;",
  "char": "∾̳",
  code: ["U+223E", "U+0333"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&acd;",
  "char": "∿",
  code: "U+223F",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&wreath;", "&VerticalTilde;", "&wr;"],
  "char": "≀",
  code: "U+2240",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&nsim;", "&NotTilde;"],
  "char": "≁",
  code: "U+2241",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&esim;", "&EqualTilde;", "&eqsim;"],
  "char": "≂",
  code: "U+2242",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&nesim;", "&NotEqualTilde;"],
  "char": "≂̸",
  code: ["U+2242", "U+0338"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&sime;", "&TildeEqual;", "&simeq;"],
  "char": "≃",
  code: "U+2243",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&nsime;", "&nsimeq;", "&NotTildeEqual;"],
  "char": "≄",
  code: "U+2244",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&cong;", "&TildeFullEqual;"],
  "char": "≅",
  code: "U+2245",
  standard: ["HTML 4.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOtech"
}, {
  entity: "&simne;",
  "char": "≆",
  code: "U+2246",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&ncong;", "&NotTildeFullEqual;"],
  "char": "≇",
  code: "U+2247",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&asymp;", "&ap;", "&TildeTilde;", "&approx;", "&thkap;", "&thickapprox;"],
  "char": "≈",
  code: "U+2248",
  standard: ["HTML 4.0", "HTML 5.0", "HTML 5.0", "HTML 5.0", "HTML 5.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOamsr"
}, {
  entity: ["&nap;", "&NotTildeTilde;", "&napprox;"],
  "char": "≉",
  code: "U+2249",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&ape;", "&approxeq;"],
  "char": "≊",
  code: "U+224A",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&apid;",
  "char": "≋",
  code: "U+224B",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&napid;",
  "char": "≋̸",
  code: ["U+224B", "U+0338"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&bcong;", "&backcong;"],
  "char": "≌",
  code: "U+224C",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&asympeq;", "&CupCap;"],
  "char": "≍",
  code: "U+224D",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&nvap;",
  "char": "≍⃒",
  code: ["U+224D", "U+20D2"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&bump;", "&HumpDownHump;", "&Bumpeq;"],
  "char": "≎",
  code: "U+224E",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&nbump;", "&NotHumpDownHump;"],
  "char": "≎̸",
  code: ["U+224E", "U+0338"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&bumpe;", "&HumpEqual;", "&bumpeq;"],
  "char": "≏",
  code: "U+224F",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&nbumpe;", "&NotHumpEqual;"],
  "char": "≏̸",
  code: ["U+224F", "U+0338"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&esdot;", "&DotEqual;", "&doteq;"],
  "char": "≐",
  code: "U+2250",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&nedot;",
  "char": "≐̸",
  code: ["U+2250", "U+0338"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&eDot;", "&doteqdot;"],
  "char": "≑",
  code: "U+2251",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&efDot;", "&fallingdotseq;"],
  "char": "≒",
  code: "U+2252",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&erDot;", "&risingdotseq;"],
  "char": "≓",
  code: "U+2253",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&colone;", "&coloneq;", "&Assign;"],
  "char": "≔",
  code: "U+2254",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&ecolon;", "&eqcolon;"],
  "char": "≕",
  code: "U+2255",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&ecir;", "&eqcirc;"],
  "char": "≖",
  code: "U+2256",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&cire;", "&circeq;"],
  "char": "≗",
  code: "U+2257",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&wedgeq;",
  "char": "≙",
  code: "U+2259",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&veeeq;",
  "char": "≚",
  code: "U+225A",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&trie;", "&triangleq;"],
  "char": "≜",
  code: "U+225C",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&equest;", "&questeq;"],
  "char": "≟",
  code: "U+225F",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&ne;", "&NotEqual;"],
  "char": "≠",
  code: "U+2260",
  standard: ["HTML 4.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOtech"
}, {
  entity: ["&equiv;", "&Congruent;"],
  "char": "≡",
  code: "U+2261",
  standard: ["HTML 4.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOtech"
}, {
  entity: "&bnequiv;",
  "char": "≡⃥",
  code: ["U+2261", "U+20E5"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&nequiv;", "&NotCongruent;"],
  "char": "≢",
  code: "U+2262",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&le;", "&leq;"],
  "char": "≤",
  code: "U+2264",
  standard: ["HTML 4.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOtech"
}, {
  entity: "&nvle;",
  "char": "≤⃒",
  code: ["U+2264", "U+20D2"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&ge;", "&GreaterEqual;", "&geq;"],
  "char": "≥",
  code: "U+2265",
  standard: ["HTML 4.0", "HTML 5.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOtech"
}, {
  entity: "&nvge;",
  "char": "≥⃒",
  code: ["U+2265", "U+20D2"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&lE;", "&LessFullEqual;", "&leqq;"],
  "char": "≦",
  code: "U+2266",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&nlE;", "&nleqq;"],
  "char": "≦̸",
  code: ["U+2266", "U+0338"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&gE;", "&GreaterFullEqual;", "&geqq;"],
  "char": "≧",
  code: "U+2267",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&ngE;", "&ngeqq;", "&NotGreaterFullEqual;"],
  "char": "≧̸",
  code: ["U+2267", "U+0338"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&lnE;", "&lneqq;"],
  "char": "≨",
  code: "U+2268",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&lvertneqq;", "&lvnE;"],
  "char": "≨︀",
  code: ["U+2268", "U+FE00"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&gnE;", "&gneqq;"],
  "char": "≩",
  code: "U+2269",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&gvertneqq;", "&gvnE;"],
  "char": "≩︀",
  code: ["U+2269", "U+FE00"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&Lt;", "&NestedLessLess;", "&ll;"],
  "char": "≪",
  code: "U+226A",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&nLtv;", "&NotLessLess;"],
  "char": "≪̸",
  code: ["U+226A", "U+0338"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&nLt;",
  "char": "≪⃒",
  code: ["U+226A", "U+20D2"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&Gt;", "&NestedGreaterGreater;", "&gg;"],
  "char": "≫",
  code: "U+226B",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&nGtv;", "&NotGreaterGreater;"],
  "char": "≫̸",
  code: ["U+226B", "U+0338"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&nGt;",
  "char": "≫⃒",
  code: ["U+226B", "U+20D2"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&twixt;", "&between;"],
  "char": "≬",
  code: "U+226C",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&NotCupCap;",
  "char": "≭",
  code: "U+226D",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&nlt;", "&NotLess;", "&nless;"],
  "char": "≮",
  code: "U+226E",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&ngt;", "&NotGreater;", "&ngtr;"],
  "char": "≯",
  code: "U+226F",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&nle;", "&NotLessEqual;", "&nleq;"],
  "char": "≰",
  code: "U+2270",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&nge;", "&NotGreaterEqual;", "&ngeq;"],
  "char": "≱",
  code: "U+2271",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&lsim;", "&LessTilde;", "&lesssim;"],
  "char": "≲",
  code: "U+2272",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&gsim;", "&gtrsim;", "&GreaterTilde;"],
  "char": "≳",
  code: "U+2273",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&nlsim;", "&NotLessTilde;"],
  "char": "≴",
  code: "U+2274",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&ngsim;", "&NotGreaterTilde;"],
  "char": "≵",
  code: "U+2275",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&lg;", "&lessgtr;", "&LessGreater;"],
  "char": "≶",
  code: "U+2276",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&gl;", "&gtrless;", "&GreaterLess;"],
  "char": "≷",
  code: "U+2277",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&ntlg;", "&NotLessGreater;"],
  "char": "≸",
  code: "U+2278",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&ntgl;", "&NotGreaterLess;"],
  "char": "≹",
  code: "U+2279",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&pr;", "&Precedes;", "&prec;"],
  "char": "≺",
  code: "U+227A",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&sc;", "&Succeeds;", "&succ;"],
  "char": "≻",
  code: "U+227B",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&prcue;", "&PrecedesSlantEqual;", "&preccurlyeq;"],
  "char": "≼",
  code: "U+227C",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&sccue;", "&SucceedsSlantEqual;", "&succcurlyeq;"],
  "char": "≽",
  code: "U+227D",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&prsim;", "&precsim;", "&PrecedesTilde;"],
  "char": "≾",
  code: "U+227E",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&scsim;", "&succsim;", "&SucceedsTilde;"],
  "char": "≿",
  code: "U+227F",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&NotSucceedsTilde;",
  "char": "≿̸",
  code: ["U+227F", "U+0338"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&npr;", "&nprec;", "&NotPrecedes;"],
  "char": "⊀",
  code: "U+2280",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&nsc;", "&nsucc;", "&NotSucceeds;"],
  "char": "⊁",
  code: "U+2281",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&sub;", "&subset;"],
  "char": "⊂",
  code: "U+2282",
  standard: ["HTML 4.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOtech"
}, {
  entity: ["&NotSubset;", "&nsubset;", "&vnsub;"],
  "char": "⊂⃒",
  code: ["U+2282", "U+20D2"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&sup;", "&supset;", "&Superset;"],
  "char": "⊃",
  code: "U+2283",
  standard: ["HTML 4.0", "HTML 5.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOtech"
}, {
  entity: ["&NotSuperset;", "&nsupset;", "&vnsup;"],
  "char": "⊃⃒",
  code: ["U+2283", "U+20D2"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&nsub;",
  "char": "⊄",
  code: "U+2284",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: "ISOamsn"
}, {
  entity: "&nsup;",
  "char": "⊅",
  code: "U+2285",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: "ISOamsn"
}, {
  entity: ["&sube;", "&SubsetEqual;", "&subseteq;"],
  "char": "⊆",
  code: "U+2286",
  standard: ["HTML 4.0", "HTML 5.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOtech"
}, {
  entity: ["&supe;", "&supseteq;", "&SupersetEqual;"],
  "char": "⊇",
  code: "U+2287",
  standard: ["HTML 4.0", "HTML 5.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOtech"
}, {
  entity: ["&nsube;", "&nsubseteq;", "&NotSubsetEqual;"],
  "char": "⊈",
  code: "U+2288",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&nsupe;", "&nsupseteq;", "&NotSupersetEqual;"],
  "char": "⊉",
  code: "U+2289",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&subne;", "&subsetneq;"],
  "char": "⊊",
  code: "U+228A",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&varsubsetneq;", "&vsubne;"],
  "char": "⊊︀",
  code: ["U+228A", "U+FE00"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&supne;", "&supsetneq;"],
  "char": "⊋",
  code: "U+228B",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&varsupsetneq;", "&vsupne;"],
  "char": "⊋︀",
  code: ["U+228B", "U+FE00"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&cupdot;",
  "char": "⊍",
  code: "U+228D",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&uplus;", "&UnionPlus;"],
  "char": "⊎",
  code: "U+228E",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&sqsub;", "&SquareSubset;", "&sqsubset;"],
  "char": "⊏",
  code: "U+228F",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&NotSquareSubset;",
  "char": "⊏̸",
  code: ["U+228F", "U+0338"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&sqsup;", "&SquareSuperset;", "&sqsupset;"],
  "char": "⊐",
  code: "U+2290",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&NotSquareSuperset;",
  "char": "⊐̸",
  code: ["U+2290", "U+0338"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&sqsube;", "&SquareSubsetEqual;", "&sqsubseteq;"],
  "char": "⊑",
  code: "U+2291",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&sqsupe;", "&SquareSupersetEqual;", "&sqsupseteq;"],
  "char": "⊒",
  code: "U+2292",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&sqcap;", "&SquareIntersection;"],
  "char": "⊓",
  code: "U+2293",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&sqcaps;",
  "char": "⊓︀",
  code: ["U+2293", "U+FE00"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&sqcup;", "&SquareUnion;"],
  "char": "⊔",
  code: "U+2294",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&sqcups;",
  "char": "⊔︀",
  code: ["U+2294", "U+FE00"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&oplus;", "&CirclePlus;"],
  "char": "⊕",
  code: "U+2295",
  standard: ["HTML 4.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOamsb"
}, {
  entity: ["&ominus;", "&CircleMinus;"],
  "char": "⊖",
  code: "U+2296",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&otimes;", "&CircleTimes;"],
  "char": "⊗",
  code: "U+2297",
  standard: ["HTML 4.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOamsb"
}, {
  entity: "&osol;",
  "char": "⊘",
  code: "U+2298",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&odot;", "&CircleDot;"],
  "char": "⊙",
  code: "U+2299",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&ocir;", "&circledcirc;"],
  "char": "⊚",
  code: "U+229A",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&oast;", "&circledast;"],
  "char": "⊛",
  code: "U+229B",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&odash;", "&circleddash;"],
  "char": "⊝",
  code: "U+229D",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&plusb;", "&boxplus;"],
  "char": "⊞",
  code: "U+229E",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&minusb;", "&boxminus;"],
  "char": "⊟",
  code: "U+229F",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&timesb;", "&boxtimes;"],
  "char": "⊠",
  code: "U+22A0",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&sdotb;", "&dotsquare;"],
  "char": "⊡",
  code: "U+22A1",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&vdash;", "&RightTee;"],
  "char": "⊢",
  code: "U+22A2",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&dashv;", "&LeftTee;"],
  "char": "⊣",
  code: "U+22A3",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&top;", "&DownTee;"],
  "char": "⊤",
  code: "U+22A4",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&bottom;", "&bot;", "&perp;", "&UpTee;"],
  "char": "⊥",
  code: "U+22A5",
  standard: ["HTML 4.0", "HTML 5.0", "HTML 5.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOtech"
}, {
  entity: "&models;",
  "char": "⊧",
  code: "U+22A7",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&vDash;", "&DoubleRightTee;"],
  "char": "⊨",
  code: "U+22A8",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Vdash;",
  "char": "⊩",
  code: "U+22A9",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Vvdash;",
  "char": "⊪",
  code: "U+22AA",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&VDash;",
  "char": "⊫",
  code: "U+22AB",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&nvdash;",
  "char": "⊬",
  code: "U+22AC",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&nvDash;",
  "char": "⊭",
  code: "U+22AD",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&nVdash;",
  "char": "⊮",
  code: "U+22AE",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&nVDash;",
  "char": "⊯",
  code: "U+22AF",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&prurel;",
  "char": "⊰",
  code: "U+22B0",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&vltri;", "&vartriangleleft;", "&LeftTriangle;"],
  "char": "⊲",
  code: "U+22B2",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&vrtri;", "&vartriangleright;", "&RightTriangle;"],
  "char": "⊳",
  code: "U+22B3",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&ltrie;", "&trianglelefteq;", "&LeftTriangleEqual;"],
  "char": "⊴",
  code: "U+22B4",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&nvltrie;",
  "char": "⊴⃒",
  code: ["U+22B4", "U+20D2"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&rtrie;", "&trianglerighteq;", "&RightTriangleEqual;"],
  "char": "⊵",
  code: "U+22B5",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&nvrtrie;",
  "char": "⊵⃒",
  code: ["U+22B5", "U+20D2"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&origof;",
  "char": "⊶",
  code: "U+22B6",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&imof;",
  "char": "⊷",
  code: "U+22B7",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&mumap;", "&multimap;"],
  "char": "⊸",
  code: "U+22B8",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&hercon;",
  "char": "⊹",
  code: "U+22B9",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&intcal;", "&intercal;"],
  "char": "⊺",
  code: "U+22BA",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&veebar;",
  "char": "⊻",
  code: "U+22BB",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&barvee;",
  "char": "⊽",
  code: "U+22BD",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&angrtvb;",
  "char": "⊾",
  code: "U+22BE",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&lrtri;",
  "char": "⊿",
  code: "U+22BF",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&xwedge;", "&Wedge;", "&bigwedge;"],
  "char": "⋀",
  code: "U+22C0",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&xvee;", "&Vee;", "&bigvee;"],
  "char": "⋁",
  code: "U+22C1",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&xcap;", "&Intersection;", "&bigcap;"],
  "char": "⋂",
  code: "U+22C2",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&xcup;", "&Union;", "&bigcup;"],
  "char": "⋃",
  code: "U+22C3",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&diam;", "&diamond;", "&Diamond;"],
  "char": "⋄",
  code: "U+22C4",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&sdot;",
  "char": "⋅",
  code: "U+22C5",
  standard: "HTML 4.0",
  dtd: "HTMLsymbol",
  desc: "ISOamsb"
}, {
  entity: ["&sstarf;", "&Star;"],
  "char": "⋆",
  code: "U+22C6",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&divonx;", "&divideontimes;"],
  "char": "⋇",
  code: "U+22C7",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&bowtie;",
  "char": "⋈",
  code: "U+22C8",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ltimes;",
  "char": "⋉",
  code: "U+22C9",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&rtimes;",
  "char": "⋊",
  code: "U+22CA",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&lthree;", "&leftthreetimes;"],
  "char": "⋋",
  code: "U+22CB",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&rthree;", "&rightthreetimes;"],
  "char": "⋌",
  code: "U+22CC",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&bsime;", "&backsimeq;"],
  "char": "⋍",
  code: "U+22CD",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&cuvee;", "&curlyvee;"],
  "char": "⋎",
  code: "U+22CE",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&cuwed;", "&curlywedge;"],
  "char": "⋏",
  code: "U+22CF",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&Sub;", "&Subset;"],
  "char": "⋐",
  code: "U+22D0",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&Sup;", "&Supset;"],
  "char": "⋑",
  code: "U+22D1",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Cap;",
  "char": "⋒",
  code: "U+22D2",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Cup;",
  "char": "⋓",
  code: "U+22D3",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&fork;", "&pitchfork;"],
  "char": "⋔",
  code: "U+22D4",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&epar;",
  "char": "⋕",
  code: "U+22D5",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&ltdot;", "&lessdot;"],
  "char": "⋖",
  code: "U+22D6",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&gtdot;", "&gtrdot;"],
  "char": "⋗",
  code: "U+22D7",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Ll;",
  "char": "⋘",
  code: "U+22D8",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&nLl;",
  "char": "⋘̸",
  code: ["U+22D8", "U+0338"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&Gg;", "&ggg;"],
  "char": "⋙",
  code: "U+22D9",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&nGg;",
  "char": "⋙̸",
  code: ["U+22D9", "U+0338"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&leg;", "&LessEqualGreater;", "&lesseqgtr;"],
  "char": "⋚",
  code: "U+22DA",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&lesg;",
  "char": "⋚︀",
  code: ["U+22DA", "U+FE00"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&gel;", "&gtreqless;", "&GreaterEqualLess;"],
  "char": "⋛",
  code: "U+22DB",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&gesl;",
  "char": "⋛︀",
  code: ["U+22DB", "U+FE00"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&cuepr;", "&curlyeqprec;"],
  "char": "⋞",
  code: "U+22DE",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&cuesc;", "&curlyeqsucc;"],
  "char": "⋟",
  code: "U+22DF",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&nprcue;", "&NotPrecedesSlantEqual;"],
  "char": "⋠",
  code: "U+22E0",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&nsccue;", "&NotSucceedsSlantEqual;"],
  "char": "⋡",
  code: "U+22E1",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&nsqsube;", "&NotSquareSubsetEqual;"],
  "char": "⋢",
  code: "U+22E2",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&nsqsupe;", "&NotSquareSupersetEqual;"],
  "char": "⋣",
  code: "U+22E3",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&lnsim;",
  "char": "⋦",
  code: "U+22E6",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&gnsim;",
  "char": "⋧",
  code: "U+22E7",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&prnsim;", "&precnsim;"],
  "char": "⋨",
  code: "U+22E8",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&scnsim;", "&succnsim;"],
  "char": "⋩",
  code: "U+22E9",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&nltri;", "&ntriangleleft;", "&NotLeftTriangle;"],
  "char": "⋪",
  code: "U+22EA",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&nrtri;", "&ntriangleright;", "&NotRightTriangle;"],
  "char": "⋫",
  code: "U+22EB",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&nltrie;", "&ntrianglelefteq;", "&NotLeftTriangleEqual;"],
  "char": "⋬",
  code: "U+22EC",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&nrtrie;", "&ntrianglerighteq;", "&NotRightTriangleEqual;"],
  "char": "⋭",
  code: "U+22ED",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&vellip;",
  "char": "⋮",
  code: "U+22EE",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ctdot;",
  "char": "⋯",
  code: "U+22EF",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&utdot;",
  "char": "⋰",
  code: "U+22F0",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&dtdot;",
  "char": "⋱",
  code: "U+22F1",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&disin;",
  "char": "⋲",
  code: "U+22F2",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&isinsv;",
  "char": "⋳",
  code: "U+22F3",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&isins;",
  "char": "⋴",
  code: "U+22F4",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&isindot;",
  "char": "⋵",
  code: "U+22F5",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&notindot;",
  "char": "⋵̸",
  code: ["U+22F5", "U+0338"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&notinvc;",
  "char": "⋶",
  code: "U+22F6",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&notinvb;",
  "char": "⋷",
  code: "U+22F7",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&isinE;",
  "char": "⋹",
  code: "U+22F9",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&notinE;",
  "char": "⋹̸",
  code: ["U+22F9", "U+0338"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&nisd;",
  "char": "⋺",
  code: "U+22FA",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&xnis;",
  "char": "⋻",
  code: "U+22FB",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&nis;",
  "char": "⋼",
  code: "U+22FC",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&notnivc;",
  "char": "⋽",
  code: "U+22FD",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&notnivb;",
  "char": "⋾",
  code: "U+22FE",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&barwed;", "&barwedge;"],
  "char": "⌅",
  code: "U+2305",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&Barwed;", "&doublebarwedge;"],
  "char": "⌆",
  code: "U+2306",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&lceil;", "&LeftCeiling;"],
  "char": "⌈",
  code: "U+2308",
  standard: ["HTML 4.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOamsc"
}, {
  entity: ["&rceil;", "&RightCeiling;"],
  "char": "⌉",
  code: "U+2309",
  standard: ["HTML 4.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOamsc"
}, {
  entity: ["&lfloor;", "&LeftFloor;"],
  "char": "⌊",
  code: "U+230A",
  standard: ["HTML 4.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOamsc"
}, {
  entity: ["&rfloor;", "&RightFloor;"],
  "char": "⌋",
  code: "U+230B",
  standard: ["HTML 4.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOamsc"
}, {
  entity: "&drcrop;",
  "char": "⌌",
  code: "U+230C",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&dlcrop;",
  "char": "⌍",
  code: "U+230D",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&urcrop;",
  "char": "⌎",
  code: "U+230E",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ulcrop;",
  "char": "⌏",
  code: "U+230F",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&bnot;",
  "char": "⌐",
  code: "U+2310",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&profline;",
  "char": "⌒",
  code: "U+2312",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&profsurf;",
  "char": "⌓",
  code: "U+2313",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&telrec;",
  "char": "⌕",
  code: "U+2315",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&target;",
  "char": "⌖",
  code: "U+2316",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&ulcorn;", "&ulcorner;"],
  "char": "⌜",
  code: "U+231C",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&urcorn;", "&urcorner;"],
  "char": "⌝",
  code: "U+231D",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&dlcorn;", "&llcorner;"],
  "char": "⌞",
  code: "U+231E",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&drcorn;", "&lrcorner;"],
  "char": "⌟",
  code: "U+231F",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&frown;", "&sfrown;"],
  "char": "⌢",
  code: "U+2322",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&smile;", "&ssmile;"],
  "char": "⌣",
  code: "U+2323",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&cylcty;",
  "char": "⌭",
  code: "U+232D",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&profalar;",
  "char": "⌮",
  code: "U+232E",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&topbot;",
  "char": "⌶",
  code: "U+2336",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ovbar;",
  "char": "⌽",
  code: "U+233D",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&solbar;",
  "char": "⌿",
  code: "U+233F",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&", "angzarr;"],
  "char": "⍼",
  code: "U+237C",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&lmoust;", "&lmoustache;"],
  "char": "⎰",
  code: "U+23B0",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&rmoust;", "&rmoustache;"],
  "char": "⎱",
  code: "U+23B1",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&tbrk;", "&OverBracket;"],
  "char": "⎴",
  code: "U+23B4",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&bbrk;", "&UnderBracket;"],
  "char": "⎵",
  code: "U+23B5",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&bbrktbrk;",
  "char": "⎶",
  code: "U+23B6",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&OverParenthesis;",
  "char": "⏜",
  code: "U+23DC",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&UnderParenthesis;",
  "char": "⏝",
  code: "U+23DD",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&OverBrace;",
  "char": "⏞",
  code: "U+23DE",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&UnderBrace;",
  "char": "⏟",
  code: "U+23DF",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&trpezium;",
  "char": "⏢",
  code: "U+23E2",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&elinters;",
  "char": "⏧",
  code: "U+23E7",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&blank;",
  "char": "␣",
  code: "U+2423",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&oS;", "&circledS;"],
  "char": "Ⓢ",
  code: "U+24C8",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&boxh;", "&HorizontalLine;"],
  "char": "─",
  code: "U+2500",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&boxv;",
  "char": "│",
  code: "U+2502",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&boxdr;",
  "char": "┌",
  code: "U+250C",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&boxdl;",
  "char": "┐",
  code: "U+2510",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&boxur;",
  "char": "└",
  code: "U+2514",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&boxul;",
  "char": "┘",
  code: "U+2518",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&boxvr;",
  "char": "├",
  code: "U+251C",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&boxvl;",
  "char": "┤",
  code: "U+2524",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&boxhd;",
  "char": "┬",
  code: "U+252C",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&boxhu;",
  "char": "┴",
  code: "U+2534",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&boxvh;",
  "char": "┼",
  code: "U+253C",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&boxH;",
  "char": "═",
  code: "U+2550",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&boxV;",
  "char": "║",
  code: "U+2551",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&boxdR;",
  "char": "╒",
  code: "U+2552",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&boxDr;",
  "char": "╓",
  code: "U+2553",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&boxDR;",
  "char": "╔",
  code: "U+2554",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&boxdL;",
  "char": "╕",
  code: "U+2555",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&boxDl;",
  "char": "╖",
  code: "U+2556",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&boxDL;",
  "char": "╗",
  code: "U+2557",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&boxuR;",
  "char": "╘",
  code: "U+2558",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&boxUr;",
  "char": "╙",
  code: "U+2559",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&boxUR;",
  "char": "╚",
  code: "U+255A",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&boxuL;",
  "char": "╛",
  code: "U+255B",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&boxUl;",
  "char": "╜",
  code: "U+255C",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&boxUL;",
  "char": "╝",
  code: "U+255D",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&boxvR;",
  "char": "╞",
  code: "U+255E",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&boxVr;",
  "char": "╟",
  code: "U+255F",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&boxVR;",
  "char": "╠",
  code: "U+2560",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&boxvL;",
  "char": "╡",
  code: "U+2561",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&boxVl;",
  "char": "╢",
  code: "U+2562",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&boxVL;",
  "char": "╣",
  code: "U+2563",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&boxHd;",
  "char": "╤",
  code: "U+2564",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&boxhD;",
  "char": "╥",
  code: "U+2565",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&boxHD;",
  "char": "╦",
  code: "U+2566",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&boxHu;",
  "char": "╧",
  code: "U+2567",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&boxhU;",
  "char": "╨",
  code: "U+2568",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&boxHU;",
  "char": "╩",
  code: "U+2569",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&boxvH;",
  "char": "╪",
  code: "U+256A",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&boxVh;",
  "char": "╫",
  code: "U+256B",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&boxVH;",
  "char": "╬",
  code: "U+256C",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&uhblk;",
  "char": "▀",
  code: "U+2580",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&lhblk;",
  "char": "▄",
  code: "U+2584",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&block;",
  "char": "█",
  code: "U+2588",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&blk14;",
  "char": "░",
  code: "U+2591",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&blk12;",
  "char": "▒",
  code: "U+2592",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&blk34;",
  "char": "▓",
  code: "U+2593",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&squ;", "&square;", "&Square;"],
  "char": "□",
  code: "U+25A1",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&squf;", "&squarf;", "&blacksquare;", "&FilledVerySmallSquare;"],
  "char": "▪",
  code: "U+25AA",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&EmptyVerySmallSquare;",
  "char": "▫",
  code: "U+25AB",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&rect;",
  "char": "▭",
  code: "U+25AD",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&marker;",
  "char": "▮",
  code: "U+25AE",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&fltns;",
  "char": "▱",
  code: "U+25B1",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&xutri;", "&bigtriangleup;"],
  "char": "△",
  code: "U+25B3",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&utrif;", "&blacktriangle;"],
  "char": "▴",
  code: "U+25B4",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&utri;", "&triangle;"],
  "char": "▵",
  code: "U+25B5",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&rtrif;", "&blacktriangleright;"],
  "char": "▸",
  code: "U+25B8",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&rtri;", "&triangleright;"],
  "char": "▹",
  code: "U+25B9",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&xdtri;", "&bigtriangledown;"],
  "char": "▽",
  code: "U+25BD",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&dtrif;", "&blacktriangledown;"],
  "char": "▾",
  code: "U+25BE",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&dtri;", "&triangledown;"],
  "char": "▿",
  code: "U+25BF",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&ltrif;", "&blacktriangleleft;"],
  "char": "◂",
  code: "U+25C2",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&ltri;", "&triangleleft;"],
  "char": "◃",
  code: "U+25C3",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&loz;", "&lozenge;"],
  "char": "◊",
  code: "U+25CA",
  standard: ["HTML 4.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOpub"
}, {
  entity: "&cir;",
  "char": "○",
  code: "U+25CB",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&tridot;",
  "char": "◬",
  code: "U+25EC",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&xcirc;", "&bigcirc;"],
  "char": "◯",
  code: "U+25EF",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ultri;",
  "char": "◸",
  code: "U+25F8",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&urtri;",
  "char": "◹",
  code: "U+25F9",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&lltri;",
  "char": "◺",
  code: "U+25FA",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&EmptySmallSquare;",
  "char": "◻",
  code: "U+25FB",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&FilledSmallSquare;",
  "char": "◼",
  code: "U+25FC",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&starf;", "&bigstar;"],
  "char": "★",
  code: "U+2605",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&star;",
  "char": "☆",
  code: "U+2606",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&phone;",
  "char": "☎",
  code: "U+260E",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&female;",
  "char": "♀",
  code: "U+2640",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&male;",
  "char": "♂",
  code: "U+2642",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&spades;", "&spadesuit;"],
  "char": "♠",
  code: "U+2660",
  standard: ["HTML 4.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOpub"
}, {
  entity: ["&clubs;", "&clubsuit;"],
  "char": "♣",
  code: "U+2663",
  standard: ["HTML 4.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOpub"
}, {
  entity: ["&hearts;", "&heartsuit;"],
  "char": "♥",
  code: "U+2665",
  standard: ["HTML 4.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOpub"
}, {
  entity: ["&diams;", "&diamondsuit;"],
  "char": "♦",
  code: "U+2666",
  standard: ["HTML 4.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOpub"
}, {
  entity: "&sung;",
  "char": "♪",
  code: "U+266A",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&flat;",
  "char": "♭",
  code: "U+266D",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&natur;", "&natural;"],
  "char": "♮",
  code: "U+266E",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&sharp;",
  "char": "♯",
  code: "U+266F",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&check;", "&checkmark;"],
  "char": "✓",
  code: "U+2713",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&cross;",
  "char": "✗",
  code: "U+2717",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&malt;", "&maltese;"],
  "char": "✠",
  code: "U+2720",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&sext;",
  "char": "✶",
  code: "U+2736",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&VerticalSeparator;",
  "char": "❘",
  code: "U+2758",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&lbbrk;",
  "char": "❲",
  code: "U+2772",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&rbbrk;",
  "char": "❳",
  code: "U+2773",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&bsolhsub;",
  "char": "⟈",
  code: "U+27C8",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&suphsol;",
  "char": "⟉",
  code: "U+27C9",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&lobrk;", "&LeftDoubleBracket;"],
  "char": "⟦",
  code: "U+27E6",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&robrk;", "&RightDoubleBracket;"],
  "char": "⟧",
  code: "U+27E7",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&lang;", "&LeftAngleBracket;", "&langle;"],
  "char": "⟨",
  code: ["U+27E8;previously", "U+2329"],
  standard: ["HTML 4.0", "HTML 5.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOtech"
}, {
  entity: ["&rang;", "&RightAngleBracket;", "&rangle;"],
  "char": "⟩",
  code: ["U+27E9;previously", "U+232A"],
  standard: ["HTML 4.0", "HTML 5.0", "HTML 5.0"],
  dtd: "HTMLsymbol",
  desc: "ISOtech"
}, {
  entity: "&Lang;",
  "char": "⟪",
  code: "U+27EA",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Rang;",
  "char": "⟫",
  code: "U+27EB",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&loang;",
  "char": "⟬",
  code: "U+27EC",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&roang;",
  "char": "⟭",
  code: "U+27ED",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&xlarr;", "&longleftarrow;", "&LongLeftArrow;"],
  "char": "⟵",
  code: "U+27F5",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&xrarr;", "&longrightarrow;", "&LongRightArrow;"],
  "char": "⟶",
  code: "U+27F6",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&xharr;", "&longleftrightarrow;", "&LongLeftRightArrow;"],
  "char": "⟷",
  code: "U+27F7",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&xlArr;", "&Longleftarrow;", "&DoubleLongLeftArrow;"],
  "char": "⟸",
  code: "U+27F8",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&xrArr;", "&Longrightarrow;", "&DoubleLongRightArrow;"],
  "char": "⟹",
  code: "U+27F9",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&xhArr;", "&Longleftrightarrow;", "&DoubleLongLeftRightArrow;"],
  "char": "⟺",
  code: "U+27FA",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&xmap;", "&longmapsto;"],
  "char": "⟼",
  code: "U+27FC",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&dzigrarr;",
  "char": "⟿",
  code: "U+27FF",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&nvlArr;",
  "char": "⤂",
  code: "U+2902",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&nvrArr;",
  "char": "⤃",
  code: "U+2903",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&nvHarr;",
  "char": "⤄",
  code: "U+2904",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Map;",
  "char": "⤅",
  code: "U+2905",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&lbarr;",
  "char": "⤌",
  code: "U+290C",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&rbarr;", "&bkarow;"],
  "char": "⤍",
  code: "U+290D",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&lBarr;",
  "char": "⤎",
  code: "U+290E",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&rBarr;", "&dbkarow;"],
  "char": "⤏",
  code: "U+290F",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&RBarr;", "&drbkarow;"],
  "char": "⤐",
  code: "U+2910",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&DDotrahd;",
  "char": "⤑",
  code: "U+2911",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&UpArrowBar;",
  "char": "⤒",
  code: "U+2912",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&DownArrowBar;",
  "char": "⤓",
  code: "U+2913",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Rarrtl;",
  "char": "⤖",
  code: "U+2916",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&latail;",
  "char": "⤙",
  code: "U+2919",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ratail;",
  "char": "⤚",
  code: "U+291A",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&lAtail;",
  "char": "⤛",
  code: "U+291B",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&rAtail;",
  "char": "⤜",
  code: "U+291C",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&larrfs;",
  "char": "⤝",
  code: "U+291D",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&rarrfs;",
  "char": "⤞",
  code: "U+291E",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&larrbfs;",
  "char": "⤟",
  code: "U+291F",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&rarrbfs;",
  "char": "⤠",
  code: "U+2920",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&nwarhk;",
  "char": "⤣",
  code: "U+2923",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&nearhk;",
  "char": "⤤",
  code: "U+2924",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&searhk;", "&hksearow;"],
  "char": "⤥",
  code: "U+2925",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&swarhk;", "&hkswarow;"],
  "char": "⤦",
  code: "U+2926",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&nwnear;",
  "char": "⤧",
  code: "U+2927",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&nesear;", "&toea;"],
  "char": "⤨",
  code: "U+2928",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&seswar;", "&tosa;"],
  "char": "⤩",
  code: "U+2929",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&swnwar;",
  "char": "⤪",
  code: "U+292A",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&rarrc;",
  "char": "⤳",
  code: "U+2933",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&nrarrc;",
  "char": "⤳̸",
  code: ["U+2933", "U+0338"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&cudarrr;",
  "char": "⤵",
  code: "U+2935",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ldca;",
  "char": "⤶",
  code: "U+2936",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&rdca;",
  "char": "⤷",
  code: "U+2937",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&cudarrl;",
  "char": "⤸",
  code: "U+2938",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&larrpl;",
  "char": "⤹",
  code: "U+2939",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&curarrm;",
  "char": "⤼",
  code: "U+293C",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&cularrp;",
  "char": "⤽",
  code: "U+293D",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&rarrpl;",
  "char": "⥅",
  code: "U+2945",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&harrcir;",
  "char": "⥈",
  code: "U+2948",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Uarrocir;",
  "char": "⥉",
  code: "U+2949",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&lurdshar;",
  "char": "⥊",
  code: "U+294A",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ldrushar;",
  "char": "⥋",
  code: "U+294B",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&LeftRightVector;",
  "char": "⥎",
  code: "U+294E",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&RightUpDownVector;",
  "char": "⥏",
  code: "U+294F",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&DownLeftRightVector;",
  "char": "⥐",
  code: "U+2950",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&LeftUpDownVector;",
  "char": "⥑",
  code: "U+2951",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&LeftVectorBar;",
  "char": "⥒",
  code: "U+2952",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&RightVectorBar;",
  "char": "⥓",
  code: "U+2953",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&RightUpVectorBar;",
  "char": "⥔",
  code: "U+2954",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&RightDownVectorBar;",
  "char": "⥕",
  code: "U+2955",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&DownLeftVectorBar;",
  "char": "⥖",
  code: "U+2956",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&DownRightVectorBar;",
  "char": "⥗",
  code: "U+2957",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&LeftUpVectorBar;",
  "char": "⥘",
  code: "U+2958",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&LeftDownVectorBar;",
  "char": "⥙",
  code: "U+2959",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&LeftTeeVector;",
  "char": "⥚",
  code: "U+295A",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&RightTeeVector;",
  "char": "⥛",
  code: "U+295B",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&RightUpTeeVector;",
  "char": "⥜",
  code: "U+295C",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&RightDownTeeVector;",
  "char": "⥝",
  code: "U+295D",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&DownLeftTeeVector;",
  "char": "⥞",
  code: "U+295E",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&DownRightTeeVector;",
  "char": "⥟",
  code: "U+295F",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&LeftUpTeeVector;",
  "char": "⥠",
  code: "U+2960",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&LeftDownTeeVector;",
  "char": "⥡",
  code: "U+2961",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&lHar;",
  "char": "⥢",
  code: "U+2962",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&uHar;",
  "char": "⥣",
  code: "U+2963",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&rHar;",
  "char": "⥤",
  code: "U+2964",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&dHar;",
  "char": "⥥",
  code: "U+2965",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&luruhar;",
  "char": "⥦",
  code: "U+2966",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ldrdhar;",
  "char": "⥧",
  code: "U+2967",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ruluhar;",
  "char": "⥨",
  code: "U+2968",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&rdldhar;",
  "char": "⥩",
  code: "U+2969",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&lharul;",
  "char": "⥪",
  code: "U+296A",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&llhard;",
  "char": "⥫",
  code: "U+296B",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&rharul;",
  "char": "⥬",
  code: "U+296C",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&lrhard;",
  "char": "⥭",
  code: "U+296D",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&udhar;", "&UpEquilibrium;"],
  "char": "⥮",
  code: "U+296E",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&duhar;", "&ReverseUpEquilibrium;"],
  "char": "⥯",
  code: "U+296F",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&RoundImplies;",
  "char": "⥰",
  code: "U+2970",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&erarr;",
  "char": "⥱",
  code: "U+2971",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&simrarr;",
  "char": "⥲",
  code: "U+2972",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&larrsim;",
  "char": "⥳",
  code: "U+2973",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&rarrsim;",
  "char": "⥴",
  code: "U+2974",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&rarrap;",
  "char": "⥵",
  code: "U+2975",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ltlarr;",
  "char": "⥶",
  code: "U+2976",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&gtrarr;",
  "char": "⥸",
  code: "U+2978",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&subrarr;",
  "char": "⥹",
  code: "U+2979",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&suplarr;",
  "char": "⥻",
  code: "U+297B",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&lfisht;",
  "char": "⥼",
  code: "U+297C",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&rfisht;",
  "char": "⥽",
  code: "U+297D",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ufisht;",
  "char": "⥾",
  code: "U+297E",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&dfisht;",
  "char": "⥿",
  code: "U+297F",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&lopar;",
  "char": "⦅",
  code: "U+2985",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ropar;",
  "char": "⦆",
  code: "U+2986",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&lbrke;",
  "char": "⦋",
  code: "U+298B",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&rbrke;",
  "char": "⦌",
  code: "U+298C",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&lbrkslu;",
  "char": "⦍",
  code: "U+298D",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&rbrksld;",
  "char": "⦎",
  code: "U+298E",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&lbrksld;",
  "char": "⦏",
  code: "U+298F",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&rbrkslu;",
  "char": "⦐",
  code: "U+2990",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&langd;",
  "char": "⦑",
  code: "U+2991",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&rangd;",
  "char": "⦒",
  code: "U+2992",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&lparlt;",
  "char": "⦓",
  code: "U+2993",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&rpargt;",
  "char": "⦔",
  code: "U+2994",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&gtlPar;",
  "char": "⦕",
  code: "U+2995",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ltrPar;",
  "char": "⦖",
  code: "U+2996",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&vzigzag;",
  "char": "⦚",
  code: "U+299A",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&vangrt;",
  "char": "⦜",
  code: "U+299C",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&angrtvbd;",
  "char": "⦝",
  code: "U+299D",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ange;",
  "char": "⦤",
  code: "U+29A4",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&range;",
  "char": "⦥",
  code: "U+29A5",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&dwangle;",
  "char": "⦦",
  code: "U+29A6",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&uwangle;",
  "char": "⦧",
  code: "U+29A7",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&angmsdaa;",
  "char": "⦨",
  code: "U+29A8",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&angmsdab;",
  "char": "⦩",
  code: "U+29A9",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&angmsdac;",
  "char": "⦪",
  code: "U+29AA",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&angmsdad;",
  "char": "⦫",
  code: "U+29AB",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&angmsdae;",
  "char": "⦬",
  code: "U+29AC",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&angmsdaf;",
  "char": "⦭",
  code: "U+29AD",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&angmsdag;",
  "char": "⦮",
  code: "U+29AE",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&angmsdah;",
  "char": "⦯",
  code: "U+29AF",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&bemptyv;",
  "char": "⦰",
  code: "U+29B0",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&demptyv;",
  "char": "⦱",
  code: "U+29B1",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&cemptyv;",
  "char": "⦲",
  code: "U+29B2",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&raemptyv;",
  "char": "⦳",
  code: "U+29B3",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&laemptyv;",
  "char": "⦴",
  code: "U+29B4",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ohbar;",
  "char": "⦵",
  code: "U+29B5",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&omid;",
  "char": "⦶",
  code: "U+29B6",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&opar;",
  "char": "⦷",
  code: "U+29B7",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&operp;",
  "char": "⦹",
  code: "U+29B9",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&olcross;",
  "char": "⦻",
  code: "U+29BB",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&odsold;",
  "char": "⦼",
  code: "U+29BC",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&olcir;",
  "char": "⦾",
  code: "U+29BE",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ofcir;",
  "char": "⦿",
  code: "U+29BF",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&olt;",
  "char": "⧀",
  code: "U+29C0",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ogt;",
  "char": "⧁",
  code: "U+29C1",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&cirscir;",
  "char": "⧂",
  code: "U+29C2",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&cirE;",
  "char": "⧃",
  code: "U+29C3",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&solb;",
  "char": "⧄",
  code: "U+29C4",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&bsolb;",
  "char": "⧅",
  code: "U+29C5",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&boxbox;",
  "char": "⧉",
  code: "U+29C9",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&trisb;",
  "char": "⧍",
  code: "U+29CD",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&rtriltri;",
  "char": "⧎",
  code: "U+29CE",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&LeftTriangleBar;",
  "char": "⧏",
  code: "U+29CF",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&NotLeftTriangleBar;",
  "char": "⧏̸",
  code: ["U+29CF", "U+0338"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&RightTriangleBar;",
  "char": "⧐",
  code: "U+29D0",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&NotRightTriangleBar;",
  "char": "⧐̸",
  code: ["U+29D0", "U+0338"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&iinfin;",
  "char": "⧜",
  code: "U+29DC",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&infintie;",
  "char": "⧝",
  code: "U+29DD",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&nvinfin;",
  "char": "⧞",
  code: "U+29DE",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&eparsl;",
  "char": "⧣",
  code: "U+29E3",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&smeparsl;",
  "char": "⧤",
  code: "U+29E4",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&eqvparsl;",
  "char": "⧥",
  code: "U+29E5",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&lozf;", "&blacklozenge;"],
  "char": "⧫",
  code: "U+29EB",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&RuleDelayed;",
  "char": "⧴",
  code: "U+29F4",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&dsol;",
  "char": "⧶",
  code: "U+29F6",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&xodot;", "&bigodot;"],
  "char": "⨀",
  code: "U+2A00",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&xoplus;", "&bigoplus;"],
  "char": "⨁",
  code: "U+2A01",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&xotime;", "&bigotimes;"],
  "char": "⨂",
  code: "U+2A02",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&xuplus;", "&biguplus;"],
  "char": "⨄",
  code: "U+2A04",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&xsqcup;", "&bigsqcup;"],
  "char": "⨆",
  code: "U+2A06",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&qint;", "&iiiint;"],
  "char": "⨌",
  code: "U+2A0C",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&fpartint;",
  "char": "⨍",
  code: "U+2A0D",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&cirfnint;",
  "char": "⨐",
  code: "U+2A10",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&awint;",
  "char": "⨑",
  code: "U+2A11",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&rppolint;",
  "char": "⨒",
  code: "U+2A12",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&scpolint;",
  "char": "⨓",
  code: "U+2A13",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&npolint;",
  "char": "⨔",
  code: "U+2A14",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&pointint;",
  "char": "⨕",
  code: "U+2A15",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&quatint;",
  "char": "⨖",
  code: "U+2A16",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&intlarhk;",
  "char": "⨗",
  code: "U+2A17",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&pluscir;",
  "char": "⨢",
  code: "U+2A22",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&plusacir;",
  "char": "⨣",
  code: "U+2A23",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&simplus;",
  "char": "⨤",
  code: "U+2A24",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&plusdu;",
  "char": "⨥",
  code: "U+2A25",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&plussim;",
  "char": "⨦",
  code: "U+2A26",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&plustwo;",
  "char": "⨧",
  code: "U+2A27",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&mcomma;",
  "char": "⨩",
  code: "U+2A29",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&minusdu;",
  "char": "⨪",
  code: "U+2A2A",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&loplus;",
  "char": "⨭",
  code: "U+2A2D",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&roplus;",
  "char": "⨮",
  code: "U+2A2E",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Cross;",
  "char": "⨯",
  code: "U+2A2F",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&timesd;",
  "char": "⨰",
  code: "U+2A30",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&timesbar;",
  "char": "⨱",
  code: "U+2A31",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&smashp;",
  "char": "⨳",
  code: "U+2A33",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&lotimes;",
  "char": "⨴",
  code: "U+2A34",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&rotimes;",
  "char": "⨵",
  code: "U+2A35",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&otimesas;",
  "char": "⨶",
  code: "U+2A36",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Otimes;",
  "char": "⨷",
  code: "U+2A37",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&odiv;",
  "char": "⨸",
  code: "U+2A38",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&triplus;",
  "char": "⨹",
  code: "U+2A39",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&triminus;",
  "char": "⨺",
  code: "U+2A3A",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&tritime;",
  "char": "⨻",
  code: "U+2A3B",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&iprod;", "&intprod;"],
  "char": "⨼",
  code: "U+2A3C",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&amalg;",
  "char": "⨿",
  code: "U+2A3F",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&capdot;",
  "char": "⩀",
  code: "U+2A40",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ncup;",
  "char": "⩂",
  code: "U+2A42",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ncap;",
  "char": "⩃",
  code: "U+2A43",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&capand;",
  "char": "⩄",
  code: "U+2A44",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&cupor;",
  "char": "⩅",
  code: "U+2A45",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&cupcap;",
  "char": "⩆",
  code: "U+2A46",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&capcup;",
  "char": "⩇",
  code: "U+2A47",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&cupbrcap;",
  "char": "⩈",
  code: "U+2A48",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&capbrcup;",
  "char": "⩉",
  code: "U+2A49",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&cupcup;",
  "char": "⩊",
  code: "U+2A4A",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&capcap;",
  "char": "⩋",
  code: "U+2A4B",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ccups;",
  "char": "⩌",
  code: "U+2A4C",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ccaps;",
  "char": "⩍",
  code: "U+2A4D",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ccupssm;",
  "char": "⩐",
  code: "U+2A50",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&And;",
  "char": "⩓",
  code: "U+2A53",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Or;",
  "char": "⩔",
  code: "U+2A54",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&andand;",
  "char": "⩕",
  code: "U+2A55",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&oror;",
  "char": "⩖",
  code: "U+2A56",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&orslope;",
  "char": "⩗",
  code: "U+2A57",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&andslope;",
  "char": "⩘",
  code: "U+2A58",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&andv;",
  "char": "⩚",
  code: "U+2A5A",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&orv;",
  "char": "⩛",
  code: "U+2A5B",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&andd;",
  "char": "⩜",
  code: "U+2A5C",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ord;",
  "char": "⩝",
  code: "U+2A5D",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&wedbar;",
  "char": "⩟",
  code: "U+2A5F",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&sdote;",
  "char": "⩦",
  code: "U+2A66",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&simdot;",
  "char": "⩪",
  code: "U+2A6A",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&congdot;",
  "char": "⩭",
  code: "U+2A6D",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ncongdot;",
  "char": "⩭̸",
  code: ["U+2A6D", "U+0338"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&easter;",
  "char": "⩮",
  code: "U+2A6E",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&apacir;",
  "char": "⩯",
  code: "U+2A6F",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&apE;",
  "char": "⩰",
  code: "U+2A70",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&napE;",
  "char": "⩰̸",
  code: ["U+2A70", "U+0338"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&eplus;",
  "char": "⩱",
  code: "U+2A71",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&pluse;",
  "char": "⩲",
  code: "U+2A72",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Esim;",
  "char": "⩳",
  code: "U+2A73",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Colone;",
  "char": "⩴",
  code: "U+2A74",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Equal;",
  "char": "⩵",
  code: "U+2A75",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&eDDot;", "&ddotseq;"],
  "char": "⩷",
  code: "U+2A77",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&equivDD;",
  "char": "⩸",
  code: "U+2A78",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ltcir;",
  "char": "⩹",
  code: "U+2A79",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&gtcir;",
  "char": "⩺",
  code: "U+2A7A",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ltquest;",
  "char": "⩻",
  code: "U+2A7B",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&gtquest;",
  "char": "⩼",
  code: "U+2A7C",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&les;", "&LessSlantEqual;", "&leqslant;"],
  "char": "⩽",
  code: "U+2A7D",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&nleqslant;", "&nles;", "&NotLessSlantEqual;"],
  "char": "⩽̸",
  code: ["U+2A7D", "U+0338"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&ges;", "&GreaterSlantEqual;", "&geqslant;"],
  "char": "⩾",
  code: "U+2A7E",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&ngeqslant;", "&nges;", "&NotGreaterSlantEqual;"],
  "char": "⩾̸",
  code: ["U+2A7E", "U+0338"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&lesdot;",
  "char": "⩿",
  code: "U+2A7F",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&gesdot;",
  "char": "⪀",
  code: "U+2A80",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&lesdoto;",
  "char": "⪁",
  code: "U+2A81",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&gesdoto;",
  "char": "⪂",
  code: "U+2A82",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&lesdotor;",
  "char": "⪃",
  code: "U+2A83",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&gesdotol;",
  "char": "⪄",
  code: "U+2A84",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&lap;", "&lessapprox;"],
  "char": "⪅",
  code: "U+2A85",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&gap;", "&gtrapprox;"],
  "char": "⪆",
  code: "U+2A86",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&lne;", "&lneq;"],
  "char": "⪇",
  code: "U+2A87",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&gne;", "&gneq;"],
  "char": "⪈",
  code: "U+2A88",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&lnap;", "&lnapprox;"],
  "char": "⪉",
  code: "U+2A89",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&gnap;", "&gnapprox;"],
  "char": "⪊",
  code: "U+2A8A",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&lEg;", "&lesseqqgtr;"],
  "char": "⪋",
  code: "U+2A8B",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&gEl;", "&gtreqqless;"],
  "char": "⪌",
  code: "U+2A8C",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&lsime;",
  "char": "⪍",
  code: "U+2A8D",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&gsime;",
  "char": "⪎",
  code: "U+2A8E",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&lsimg;",
  "char": "⪏",
  code: "U+2A8F",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&gsiml;",
  "char": "⪐",
  code: "U+2A90",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&lgE;",
  "char": "⪑",
  code: "U+2A91",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&glE;",
  "char": "⪒",
  code: "U+2A92",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&lesges;",
  "char": "⪓",
  code: "U+2A93",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&gesles;",
  "char": "⪔",
  code: "U+2A94",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&els;", "&eqslantless;"],
  "char": "⪕",
  code: "U+2A95",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&egs;", "&eqslantgtr;"],
  "char": "⪖",
  code: "U+2A96",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&elsdot;",
  "char": "⪗",
  code: "U+2A97",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&egsdot;",
  "char": "⪘",
  code: "U+2A98",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&el;",
  "char": "⪙",
  code: "U+2A99",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&eg;",
  "char": "⪚",
  code: "U+2A9A",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&siml;",
  "char": "⪝",
  code: "U+2A9D",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&simg;",
  "char": "⪞",
  code: "U+2A9E",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&simlE;",
  "char": "⪟",
  code: "U+2A9F",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&simgE;",
  "char": "⪠",
  code: "U+2AA0",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&LessLess;",
  "char": "⪡",
  code: "U+2AA1",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&NotNestedLessLess;",
  "char": "⪡̸",
  code: ["U+2AA1", "U+0338"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&GreaterGreater;",
  "char": "⪢",
  code: "U+2AA2",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&NotNestedGreaterGreater;",
  "char": "⪢̸",
  code: ["U+2AA2", "U+0338"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&glj;",
  "char": "⪤",
  code: "U+2AA4",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&gla;",
  "char": "⪥",
  code: "U+2AA5",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ltcc;",
  "char": "⪦",
  code: "U+2AA6",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&gtcc;",
  "char": "⪧",
  code: "U+2AA7",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&lescc;",
  "char": "⪨",
  code: "U+2AA8",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&gescc;",
  "char": "⪩",
  code: "U+2AA9",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&smt;",
  "char": "⪪",
  code: "U+2AAA",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&lat;",
  "char": "⪫",
  code: "U+2AAB",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&smte;",
  "char": "⪬",
  code: "U+2AAC",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&smtes;",
  "char": "⪬︀",
  code: ["U+2AAC", "U+FE00"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&late;",
  "char": "⪭",
  code: "U+2AAD",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&lates;",
  "char": "⪭︀",
  code: ["U+2AAD", "U+FE00"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&bumpE;",
  "char": "⪮",
  code: "U+2AAE",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&pre;", "&preceq;", "&PrecedesEqual;"],
  "char": "⪯",
  code: "U+2AAF",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&NotPrecedesEqual;", "&npre;", "&npreceq;"],
  "char": "⪯̸",
  code: ["U+2AAF", "U+0338"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&sce;", "&succeq;", "&SucceedsEqual;"],
  "char": "⪰",
  code: "U+2AB0",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&NotSucceedsEqual;", "&nsce;", "&nsucceq;"],
  "char": "⪰̸",
  code: ["U+2AB0", "U+0338"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&prE;",
  "char": "⪳",
  code: "U+2AB3",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&scE;",
  "char": "⪴",
  code: "U+2AB4",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&prnE;", "&precneqq;"],
  "char": "⪵",
  code: "U+2AB5",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&scnE;", "&succneqq;"],
  "char": "⪶",
  code: "U+2AB6",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&prap;", "&precapprox;"],
  "char": "⪷",
  code: "U+2AB7",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&scap;", "&succapprox;"],
  "char": "⪸",
  code: "U+2AB8",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&prnap;", "&precnapprox;"],
  "char": "⪹",
  code: "U+2AB9",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&scnap;", "&succnapprox;"],
  "char": "⪺",
  code: "U+2ABA",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Pr;",
  "char": "⪻",
  code: "U+2ABB",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Sc;",
  "char": "⪼",
  code: "U+2ABC",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&subdot;",
  "char": "⪽",
  code: "U+2ABD",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&supdot;",
  "char": "⪾",
  code: "U+2ABE",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&subplus;",
  "char": "⪿",
  code: "U+2ABF",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&supplus;",
  "char": "⫀",
  code: "U+2AC0",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&submult;",
  "char": "⫁",
  code: "U+2AC1",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&supmult;",
  "char": "⫂",
  code: "U+2AC2",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&subedot;",
  "char": "⫃",
  code: "U+2AC3",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&supedot;",
  "char": "⫄",
  code: "U+2AC4",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&subE;", "&subseteqq;"],
  "char": "⫅",
  code: "U+2AC5",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&nsubE;", "&nsubseteqq;"],
  "char": "⫅̸",
  code: ["U+2AC5", "U+0338"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&supE;", "&supseteqq;"],
  "char": "⫆",
  code: "U+2AC6",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&nsupE;", "&nsupseteqq;"],
  "char": "⫆̸",
  code: ["U+2AC6", "U+0338"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&subsim;",
  "char": "⫇",
  code: "U+2AC7",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&supsim;",
  "char": "⫈",
  code: "U+2AC8",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&subnE;", "&subsetneqq;"],
  "char": "⫋",
  code: "U+2ACB",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&varsubsetneqq;", "&vsubnE;"],
  "char": "⫋︀",
  code: ["U+2ACB", "U+FE00"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&supnE;", "&supsetneqq;"],
  "char": "⫌",
  code: "U+2ACC",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&varsupsetneqq;", "&vsupnE;"],
  "char": "⫌︀",
  code: ["U+2ACC", "U+FE00"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&csub;",
  "char": "⫏",
  code: "U+2ACF",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&csup;",
  "char": "⫐",
  code: "U+2AD0",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&csube;",
  "char": "⫑",
  code: "U+2AD1",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&csupe;",
  "char": "⫒",
  code: "U+2AD2",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&subsup;",
  "char": "⫓",
  code: "U+2AD3",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&supsub;",
  "char": "⫔",
  code: "U+2AD4",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&subsub;",
  "char": "⫕",
  code: "U+2AD5",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&supsup;",
  "char": "⫖",
  code: "U+2AD6",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&suphsub;",
  "char": "⫗",
  code: "U+2AD7",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&supdsub;",
  "char": "⫘",
  code: "U+2AD8",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&forkv;",
  "char": "⫙",
  code: "U+2AD9",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&topfork;",
  "char": "⫚",
  code: "U+2ADA",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&mlcp;",
  "char": "⫛",
  code: "U+2ADB",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: ["&Dashv;", "&DoubleLeftTee;"],
  "char": "⫤",
  code: "U+2AE4",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Vdashl;",
  "char": "⫦",
  code: "U+2AE6",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Barv;",
  "char": "⫧",
  code: "U+2AE7",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&vBar;",
  "char": "⫨",
  code: "U+2AE8",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&vBarv;",
  "char": "⫩",
  code: "U+2AE9",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Vbar;",
  "char": "⫫",
  code: "U+2AEB",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Not;",
  "char": "⫬",
  code: "U+2AEC",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&bNot;",
  "char": "⫭",
  code: "U+2AED",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&rnmid;",
  "char": "⫮",
  code: "U+2AEE",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&cirmid;",
  "char": "⫯",
  code: "U+2AEF",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&midcir;",
  "char": "⫰",
  code: "U+2AF0",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&topcir;",
  "char": "⫱",
  code: "U+2AF1",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&nhpar;",
  "char": "⫲",
  code: "U+2AF2",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&parsim;",
  "char": "⫳",
  code: "U+2AF3",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&parsl;",
  "char": "⫽",
  code: "U+2AFD",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&nparsl;",
  "char": "⫽⃥",
  code: ["U+2AFD", "U+20E5"],
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&fflig;",
  "char": "ﬀ",
  code: "U+FB00",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&filig;",
  "char": "ﬁ",
  code: "U+FB01",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&fllig;",
  "char": "ﬂ",
  code: "U+FB02",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ffilig;",
  "char": "ﬃ",
  code: "U+FB03",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ffllig;",
  "char": "ﬄ",
  code: "U+FB04",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Ascr;",
  "char": "𝒜",
  code: "U+1D49C",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Cscr;",
  "char": "𝒞",
  code: "U+1D49E",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Dscr;",
  "char": "𝒟",
  code: "U+1D49F",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Gscr;",
  "char": "𝒢",
  code: "U+1D4A2",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Jscr;",
  "char": "𝒥",
  code: "U+1D4A5",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Kscr;",
  "char": "𝒦",
  code: "U+1D4A6",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Nscr;",
  "char": "𝒩",
  code: "U+1D4A9",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Oscr;",
  "char": "𝒪",
  code: "U+1D4AA",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Pscr;",
  "char": "𝒫",
  code: "U+1D4AB",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Qscr;",
  "char": "𝒬",
  code: "U+1D4AC",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Sscr;",
  "char": "𝒮",
  code: "U+1D4AE",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Tscr;",
  "char": "𝒯",
  code: "U+1D4AF",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Uscr;",
  "char": "𝒰",
  code: "U+1D4B0",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Vscr;",
  "char": "𝒱",
  code: "U+1D4B1",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Wscr;",
  "char": "𝒲",
  code: "U+1D4B2",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Xscr;",
  "char": "𝒳",
  code: "U+1D4B3",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Yscr;",
  "char": "𝒴",
  code: "U+1D4B4",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Zscr;",
  "char": "𝒵",
  code: "U+1D4B5",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ascr;",
  "char": "𝒶",
  code: "U+1D4B6",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&bscr;",
  "char": "𝒷",
  code: "U+1D4B7",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&cscr;",
  "char": "𝒸",
  code: "U+1D4B8",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&dscr;",
  "char": "𝒹",
  code: "U+1D4B9",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&fscr;",
  "char": "𝒻",
  code: "U+1D4BB",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&hscr;",
  "char": "𝒽",
  code: "U+1D4BD",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&iscr;",
  "char": "𝒾",
  code: "U+1D4BE",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&jscr;",
  "char": "𝒿",
  code: "U+1D4BF",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&kscr;",
  "char": "𝓀",
  code: "U+1D4C0",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&lscr;",
  "char": "𝓁",
  code: "U+1D4C1",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&mscr;",
  "char": "𝓂",
  code: "U+1D4C2",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&nscr;",
  "char": "𝓃",
  code: "U+1D4C3",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&pscr;",
  "char": "𝓅",
  code: "U+1D4C5",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&qscr;",
  "char": "𝓆",
  code: "U+1D4C6",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&rscr;",
  "char": "𝓇",
  code: "U+1D4C7",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&sscr;",
  "char": "𝓈",
  code: "U+1D4C8",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&tscr;",
  "char": "𝓉",
  code: "U+1D4C9",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&uscr;",
  "char": "𝓊",
  code: "U+1D4CA",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&vscr;",
  "char": "𝓋",
  code: "U+1D4CB",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&wscr;",
  "char": "𝓌",
  code: "U+1D4CC",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&xscr;",
  "char": "𝓍",
  code: "U+1D4CD",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&yscr;",
  "char": "𝓎",
  code: "U+1D4CE",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&zscr;",
  "char": "𝓏",
  code: "U+1D4CF",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Afr;",
  "char": "𝔄",
  code: "U+1D504",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Bfr;",
  "char": "𝔅",
  code: "U+1D505",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Dfr;",
  "char": "𝔇",
  code: "U+1D507",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Efr;",
  "char": "𝔈",
  code: "U+1D508",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Ffr;",
  "char": "𝔉",
  code: "U+1D509",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Gfr;",
  "char": "𝔊",
  code: "U+1D50A",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Jfr;",
  "char": "𝔍",
  code: "U+1D50D",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Kfr;",
  "char": "𝔎",
  code: "U+1D50E",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Lfr;",
  "char": "𝔏",
  code: "U+1D50F",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Mfr;",
  "char": "𝔐",
  code: "U+1D510",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Nfr;",
  "char": "𝔑",
  code: "U+1D511",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Ofr;",
  "char": "𝔒",
  code: "U+1D512",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Pfr;",
  "char": "𝔓",
  code: "U+1D513",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Qfr;",
  "char": "𝔔",
  code: "U+1D514",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Sfr;",
  "char": "𝔖",
  code: "U+1D516",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Tfr;",
  "char": "𝔗",
  code: "U+1D517",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Ufr;",
  "char": "𝔘",
  code: "U+1D518",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Vfr;",
  "char": "𝔙",
  code: "U+1D519",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Wfr;",
  "char": "𝔚",
  code: "U+1D51A",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Xfr;",
  "char": "𝔛",
  code: "U+1D51B",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Yfr;",
  "char": "𝔜",
  code: "U+1D51C",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&afr;",
  "char": "𝔞",
  code: "U+1D51E",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&bfr;",
  "char": "𝔟",
  code: "U+1D51F",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&cfr;",
  "char": "𝔠",
  code: "U+1D520",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&dfr;",
  "char": "𝔡",
  code: "U+1D521",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&efr;",
  "char": "𝔢",
  code: "U+1D522",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ffr;",
  "char": "𝔣",
  code: "U+1D523",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&gfr;",
  "char": "𝔤",
  code: "U+1D524",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&hfr;",
  "char": "𝔥",
  code: "U+1D525",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ifr;",
  "char": "𝔦",
  code: "U+1D526",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&jfr;",
  "char": "𝔧",
  code: "U+1D527",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&kfr;",
  "char": "𝔨",
  code: "U+1D528",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&lfr;",
  "char": "𝔩",
  code: "U+1D529",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&mfr;",
  "char": "𝔪",
  code: "U+1D52A",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&nfr;",
  "char": "𝔫",
  code: "U+1D52B",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ofr;",
  "char": "𝔬",
  code: "U+1D52C",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&pfr;",
  "char": "𝔭",
  code: "U+1D52D",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&qfr;",
  "char": "𝔮",
  code: "U+1D52E",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&rfr;",
  "char": "𝔯",
  code: "U+1D52F",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&sfr;",
  "char": "𝔰",
  code: "U+1D530",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&tfr;",
  "char": "𝔱",
  code: "U+1D531",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ufr;",
  "char": "𝔲",
  code: "U+1D532",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&vfr;",
  "char": "𝔳",
  code: "U+1D533",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&wfr;",
  "char": "𝔴",
  code: "U+1D534",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&xfr;",
  "char": "𝔵",
  code: "U+1D535",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&yfr;",
  "char": "𝔶",
  code: "U+1D536",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&zfr;",
  "char": "𝔷",
  code: "U+1D537",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Aopf;",
  "char": "𝔸",
  code: "U+1D538",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Bopf;",
  "char": "𝔹",
  code: "U+1D539",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Dopf;",
  "char": "𝔻",
  code: "U+1D53B",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Eopf;",
  "char": "𝔼",
  code: "U+1D53C",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Fopf;",
  "char": "𝔽",
  code: "U+1D53D",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Gopf;",
  "char": "𝔾",
  code: "U+1D53E",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Iopf;",
  "char": "𝕀",
  code: "U+1D540",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Jopf;",
  "char": "𝕁",
  code: "U+1D541",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Kopf;",
  "char": "𝕂",
  code: "U+1D542",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Lopf;",
  "char": "𝕃",
  code: "U+1D543",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Mopf;",
  "char": "𝕄",
  code: "U+1D544",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Oopf;",
  "char": "𝕆",
  code: "U+1D546",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Sopf;",
  "char": "𝕊",
  code: "U+1D54A",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Topf;",
  "char": "𝕋",
  code: "U+1D54B",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Uopf;",
  "char": "𝕌",
  code: "U+1D54C",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Vopf;",
  "char": "𝕍",
  code: "U+1D54D",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Wopf;",
  "char": "𝕎",
  code: "U+1D54E",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Xopf;",
  "char": "𝕏",
  code: "U+1D54F",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&Yopf;",
  "char": "𝕐",
  code: "U+1D550",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&aopf;",
  "char": "𝕒",
  code: "U+1D552",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&bopf;",
  "char": "𝕓",
  code: "U+1D553",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&copf;",
  "char": "𝕔",
  code: "U+1D554",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&dopf;",
  "char": "𝕕",
  code: "U+1D555",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&eopf;",
  "char": "𝕖",
  code: "U+1D556",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&fopf;",
  "char": "𝕗",
  code: "U+1D557",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&gopf;",
  "char": "𝕘",
  code: "U+1D558",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&hopf;",
  "char": "𝕙",
  code: "U+1D559",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&iopf;",
  "char": "𝕚",
  code: "U+1D55A",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&jopf;",
  "char": "𝕛",
  code: "U+1D55B",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&kopf;",
  "char": "𝕜",
  code: "U+1D55C",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&lopf;",
  "char": "𝕝",
  code: "U+1D55D",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&mopf;",
  "char": "𝕞",
  code: "U+1D55E",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&nopf;",
  "char": "𝕟",
  code: "U+1D55F",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&oopf;",
  "char": "𝕠",
  code: "U+1D560",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&popf;",
  "char": "𝕡",
  code: "U+1D561",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&qopf;",
  "char": "𝕢",
  code: "U+1D562",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&ropf;",
  "char": "𝕣",
  code: "U+1D563",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&sopf;",
  "char": "𝕤",
  code: "U+1D564",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&topf;",
  "char": "𝕥",
  code: "U+1D565",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&uopf;",
  "char": "𝕦",
  code: "U+1D566",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&vopf;",
  "char": "𝕧",
  code: "U+1D567",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&wopf;",
  "char": "𝕨",
  code: "U+1D568",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&xopf;",
  "char": "𝕩",
  code: "U+1D569",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&yopf;",
  "char": "𝕪",
  code: "U+1D56A",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}, {
  entity: "&zopf;",
  "char": "𝕫",
  code: "U+1D56B",
  standard: "HTML 5.0",
  dtd: "",
  desc: ""
}];
var HtmlEncodeMap = exports.HtmlEncodeMap = {
  "\t": "&Tab;",
  "\n": "&NewLine;",
  "̑": "&DownBreve;",
  "⃛": "&tdot;",
  "⃜": "&DotDot;",
  "!": "&excl;",
  "\"": "&quot;",
  "#": "&num;",
  "$": "&dollar;",
  "%": "&percnt;",
  "&": "&amp;",
  "'": "&apos;",
  "(": "&lpar;",
  ")": "&rpar;",
  "*": "&ast;",
  "+": "&plus;",
  ",": "&InvisibleComma;",
  ".": "&period;",
  "/": "&sol;",
  ":": "&colon;",
  ";": "&semi;",
  "<": "&lt;",
  "<⃒": "&nvlt;",
  "=": "&equals;",
  "=⃥": "&bne;",
  ">": "&gt;",
  ">⃒": "&nvgt;",
  "?": "&quest;",
  "@": "&commat;",
  "[": "&lsqb;",
  "\\": "&bsol;",
  "]": "&rsqb;",
  "^": "&Hat;",
  "_": "&lowbar;",
  "`": "&grave;",
  "fj": "&fjlig;",
  "{": "&lcub;",
  "|": "&verbar;",
  "}": "&rcub;",
  " ": "&nbsp;",
  "¡": "&iexcl;",
  "¢": "&cent;",
  "£": "&pound;",
  "¤": "&curren;",
  "¥": "&yen;",
  "¦": "&brvbar;",
  "§": "&sect;",
  "¨": "&Dot;",
  "©": "&copy;",
  "ª": "&ordf;",
  "«": "&laquo;",
  "¬": "&not;",
  "SHY": "&shy;",
  "®": "&reg;",
  "¯": "&macr;",
  "°": "&deg;",
  "±": "&plusmn;",
  "²": "&sup2;",
  "³": "&sup3;",
  "´": "&acute;",
  "µ": "&micro;",
  "¶": "&para;",
  "·": "&middot;",
  "¸": "&cedil;",
  "¹": "&sup1;",
  "º": "&ordm;",
  "»": "&raquo;",
  "¼": "&frac14;",
  "½": "&frac12;",
  "¾": "&frac34;",
  "¿": "&iquest;",
  "À": "&Agrave;",
  "Á": "&Aacute;",
  "Â": "&Acirc;",
  "Ã": "&Atilde;",
  "Ä": "&Auml;",
  "Å": "&Aring;",
  "Æ": "&AElig;",
  "Ç": "&Ccedil;",
  "È": "&Egrave;",
  "É": "&Eacute;",
  "Ê": "&Ecirc;",
  "Ë": "&Euml;",
  "Ì": "&Igrave;",
  "Í": "&Iacute;",
  "Î": "&Icirc;",
  "Ï": "&Iuml;",
  "Ð": "&ETH;",
  "Ñ": "&Ntilde;",
  "Ò": "&Ograve;",
  "Ó": "&Oacute;",
  "Ô": "&Ocirc;",
  "Õ": "&Otilde;",
  "Ö": "&Ouml;",
  "×": "&InvisibleTimes;",
  "Ø": "&Oslash;",
  "Ù": "&Ugrave;",
  "Ú": "&Uacute;",
  "Û": "&Ucirc;",
  "Ü": "&Uuml;",
  "Ý": "&Yacute;",
  "Þ": "&THORN;",
  "ß": "&szlig;",
  "à": "&agrave;",
  "á": "&aacute;",
  "â": "&acirc;",
  "ã": "&atilde;",
  "ä": "&auml;",
  "å": "&aring;",
  "æ": "&aelig;",
  "ç": "&ccedil;",
  "è": "&egrave;",
  "é": "&eacute;",
  "ê": "&ecirc;",
  "ë": "&euml;",
  "ì": "&igrave;",
  "í": "&iacute;",
  "î": "&icirc;",
  "ï": "&iuml;",
  "ð": "&eth;",
  "ñ": "&ntilde;",
  "ò": "&ograve;",
  "ó": "&oacute;",
  "ô": "&ocirc;",
  "õ": "&otilde;",
  "ö": "&ouml;",
  "÷": "&divide;",
  "ø": "&oslash;",
  "ù": "&ugrave;",
  "ú": "&uacute;",
  "û": "&ucirc;",
  "ü": "&uuml;",
  "ý": "&yacute;",
  "þ": "&thorn;",
  "ÿ": "&yuml;",
  "Ā": "&Amacr;",
  "ā": "&amacr;",
  "Ă": "&Abreve;",
  "ă": "&abreve;",
  "Ą": "&Aogon;",
  "ą": "&aogon;",
  "Ć": "&Cacute;",
  "ć": "&cacute;",
  "Ĉ": "&Ccirc;",
  "ĉ": "&ccirc;",
  "Ċ": "&Cdot;",
  "ċ": "&cdot;",
  "Č": "&Ccaron;",
  "č": "&ccaron;",
  "Ď": "&Dcaron;",
  "ď": "&dcaron;",
  "Đ": "&Dstrok;",
  "đ": "&dstrok;",
  "Ē": "&Emacr;",
  "ē": "&emacr;",
  "Ė": "&Edot;",
  "ė": "&edot;",
  "Ę": "&Eogon;",
  "ę": "&eogon;",
  "Ě": "&Ecaron;",
  "ě": "&ecaron;",
  "Ĝ": "&Gcirc;",
  "ĝ": "&gcirc;",
  "Ğ": "&Gbreve;",
  "ğ": "&gbreve;",
  "Ġ": "&Gdot;",
  "ġ": "&gdot;",
  "Ģ": "&Gcedil;",
  "Ĥ": "&Hcirc;",
  "ĥ": "&hcirc;",
  "Ħ": "&Hstrok;",
  "ħ": "&hstrok;",
  "Ĩ": "&Itilde;",
  "ĩ": "&itilde;",
  "Ī": "&Imacr;",
  "ī": "&imacr;",
  "Į": "&Iogon;",
  "į": "&iogon;",
  "İ": "&Idot;",
  "ı": "&imath;",
  "Ĳ": "&IJlig;",
  "ĳ": "&ijlig;",
  "Ĵ": "&Jcirc;",
  "ĵ": "&jcirc;",
  "Ķ": "&Kcedil;",
  "ķ": "&kcedil;",
  "ĸ": "&kgreen;",
  "Ĺ": "&Lacute;",
  "ĺ": "&lacute;",
  "Ļ": "&Lcedil;",
  "ļ": "&lcedil;",
  "Ľ": "&Lcaron;",
  "ľ": "&lcaron;",
  "Ŀ": "&Lmidot;",
  "ŀ": "&lmidot;",
  "Ł": "&Lstrok;",
  "ł": "&lstrok;",
  "Ń": "&Nacute;",
  "ń": "&nacute;",
  "Ņ": "&Ncedil;",
  "ņ": "&ncedil;",
  "Ň": "&Ncaron;",
  "ň": "&ncaron;",
  "ŉ": "&napos;",
  "Ŋ": "&ENG;",
  "ŋ": "&eng;",
  "Ō": "&Omacr;",
  "ō": "&omacr;",
  "Ő": "&Odblac;",
  "ő": "&odblac;",
  "Œ": "&OElig;",
  "œ": "&oelig;",
  "Ŕ": "&Racute;",
  "ŕ": "&racute;",
  "Ŗ": "&Rcedil;",
  "ŗ": "&rcedil;",
  "Ř": "&Rcaron;",
  "ř": "&rcaron;",
  "Ś": "&Sacute;",
  "ś": "&sacute;",
  "Ŝ": "&Scirc;",
  "ŝ": "&scirc;",
  "Ş": "&Scedil;",
  "ş": "&scedil;",
  "Š": "&Scaron;",
  "š": "&scaron;",
  "Ţ": "&Tcedil;",
  "ţ": "&tcedil;",
  "Ť": "&Tcaron;",
  "ť": "&tcaron;",
  "Ŧ": "&Tstrok;",
  "ŧ": "&tstrok;",
  "Ũ": "&Utilde;",
  "ũ": "&utilde;",
  "Ū": "&Umacr;",
  "ū": "&umacr;",
  "Ŭ": "&Ubreve;",
  "ŭ": "&ubreve;",
  "Ů": "&Uring;",
  "ů": "&uring;",
  "Ű": "&Udblac;",
  "ű": "&udblac;",
  "Ų": "&Uogon;",
  "ų": "&uogon;",
  "Ŵ": "&Wcirc;",
  "ŵ": "&wcirc;",
  "Ŷ": "&Ycirc;",
  "ŷ": "&ycirc;",
  "Ÿ": "&Yuml;",
  "Ź": "&Zacute;",
  "ź": "&zacute;",
  "Ż": "&Zdot;",
  "ż": "&zdot;",
  "Ž": "&Zcaron;",
  "ž": "&zcaron;",
  "ƒ": "&fnof;",
  "Ƶ": "&imped;",
  "ǵ": "&gacute;",
  "ȷ": "&jmath;",
  "ˆ": "&circ;",
  "ˇ": "&caron;",
  "˘": "&breve;",
  "˙": "&dot;",
  "˚": "&ring;",
  "˛": "&ogon;",
  "˜": "&tilde;",
  "˝": "&dblac;",
  "Α": "&Alpha;",
  "Β": "&Beta;",
  "Γ": "&Gamma;",
  "Δ": "&Delta;",
  "Ε": "&Epsilon;",
  "Ζ": "&Zeta;",
  "Η": "&Eta;",
  "Θ": "&Theta;",
  "Ι": "&Iota;",
  "Κ": "&Kappa;",
  "Λ": "&Lambda;",
  "Μ": "&Mu;",
  "Ν": "&Nu;",
  "Ξ": "&Xi;",
  "Ο": "&Omicron;",
  "Π": "&Pi;",
  "Ρ": "&Rho;",
  "Σ": "&Sigma;",
  "Τ": "&Tau;",
  "Υ": "&Upsilon;",
  "Φ": "&Phi;",
  "Χ": "&Chi;",
  "Ψ": "&Psi;",
  "Ω": "&Omega;",
  "α": "&alpha;",
  "β": "&beta;",
  "γ": "&gamma;",
  "δ": "&delta;",
  "ε": "&epsi;",
  "ζ": "&zeta;",
  "η": "&eta;",
  "θ": "&theta;",
  "ι": "&iota;",
  "κ": "&kappa;",
  "λ": "&lambda;",
  "μ": "&mu;",
  "ν": "&nu;",
  "ξ": "&xi;",
  "ο": "&omicron;",
  "π": "&pi;",
  "ρ": "&rho;",
  "ς": "&sigmav;",
  "σ": "&sigma;",
  "τ": "&tau;",
  "υ": "&upsi;",
  "φ": "&phi;",
  "χ": "&chi;",
  "ψ": "&psi;",
  "ω": "&omega;",
  "ϑ": "&thetav;",
  "ϒ": "&Upsi;",
  "ϕ": "&straightphi;",
  "ϖ": "&piv;",
  "Ϝ": "&Gammad;",
  "ϝ": "&gammad;",
  "ϰ": "&kappav;",
  "ϱ": "&rhov;",
  "ϵ": "&epsiv;",
  "϶": "&bepsi;",
  "Ё": "&IOcy;",
  "Ђ": "&DJcy;",
  "Ѓ": "&GJcy;",
  "Є": "&Jukcy;",
  "Ѕ": "&DScy;",
  "І": "&Iukcy;",
  "Ї": "&YIcy;",
  "Ј": "&Jsercy;",
  "Љ": "&LJcy;",
  "Њ": "&NJcy;",
  "Ћ": "&TSHcy;",
  "Ќ": "&KJcy;",
  "Ў": "&Ubrcy;",
  "Џ": "&DZcy;",
  "А": "&Acy;",
  "Б": "&Bcy;",
  "В": "&Vcy;",
  "Г": "&Gcy;",
  "Д": "&Dcy;",
  "Е": "&IEcy;",
  "Ж": "&ZHcy;",
  "З": "&Zcy;",
  "И": "&Icy;",
  "Й": "&Jcy;",
  "К": "&Kcy;",
  "Л": "&Lcy;",
  "М": "&Mcy;",
  "Н": "&Ncy;",
  "О": "&Ocy;",
  "П": "&Pcy;",
  "Р": "&Rcy;",
  "С": "&Scy;",
  "Т": "&Tcy;",
  "У": "&Ucy;",
  "Ф": "&Fcy;",
  "Х": "&KHcy;",
  "Ц": "&TScy;",
  "Ч": "&CHcy;",
  "Ш": "&SHcy;",
  "Щ": "&SHCHcy;",
  "Ъ": "&HARDcy;",
  "Ы": "&Ycy;",
  "Ь": "&SOFTcy;",
  "Э": "&Ecy;",
  "Ю": "&YUcy;",
  "Я": "&YAcy;",
  "а": "&acy;",
  "б": "&bcy;",
  "в": "&vcy;",
  "г": "&gcy;",
  "д": "&dcy;",
  "е": "&iecy;",
  "ж": "&zhcy;",
  "з": "&zcy;",
  "и": "&icy;",
  "й": "&jcy;",
  "к": "&kcy;",
  "л": "&lcy;",
  "м": "&mcy;",
  "н": "&ncy;",
  "о": "&ocy;",
  "п": "&pcy;",
  "р": "&rcy;",
  "с": "&scy;",
  "т": "&tcy;",
  "у": "&ucy;",
  "ф": "&fcy;",
  "х": "&khcy;",
  "ц": "&tscy;",
  "ч": "&chcy;",
  "ш": "&shcy;",
  "щ": "&shchcy;",
  "ъ": "&hardcy;",
  "ы": "&ycy;",
  "ь": "&softcy;",
  "э": "&ecy;",
  "ю": "&yucy;",
  "я": "&yacy;",
  "ё": "&iocy;",
  "ђ": "&djcy;",
  "ѓ": "&gjcy;",
  "є": "&jukcy;",
  "ѕ": "&dscy;",
  "і": "&iukcy;",
  "ї": "&yicy;",
  "ј": "&jsercy;",
  "љ": "&ljcy;",
  "њ": "&njcy;",
  "ћ": "&tshcy;",
  "ќ": "&kjcy;",
  "ў": "&ubrcy;",
  "џ": "&dzcy;",
  " ": "&ensp;",
  " ": "&emsp;",
  " ": "&emsp13;",
  " ": "&emsp14;",
  " ": "&numsp;",
  " ": "&puncsp;",
  " ": "&thinsp;",
  " ": "&hairsp;",
  "ZWSP": "&ZeroWidthSpace;",
  "ZWNJ": "&zwnj;",
  "ZWJ": "&zwj;",
  "LRM": "&lrm;",
  "RLM": "&rlm;",
  "‐": "&hyphen;",
  "–": "&ndash;",
  "—": "&mdash;",
  "―": "&horbar;",
  "‖": "&Verbar;",
  "‘": "&lsquo;",
  "’": "&rsquo;",
  "‚": "&sbquo;",
  "“": "&ldquo;",
  "”": "&rdquo;",
  "„": "&bdquo;",
  "†": "&dagger;",
  "‡": "&Dagger;",
  "•": "&bull;",
  "‥": "&nldr;",
  "…": "&hellip;",
  "‰": "&permil;",
  "‱": "&pertenk;",
  "′": "&prime;",
  "″": "&Prime;",
  "‴": "&tprime;",
  "‵": "&bprime;",
  "‹": "&lsaquo;",
  "›": "&rsaquo;",
  "‾": "&oline;",
  "⁁": "&caret;",
  "⁃": "&hybull;",
  "⁄": "&frasl;",
  "⁏": "&bsemi;",
  "⁗": "&qprime;",
  " ": "&ThickSpace;",
  "WJ": "&NoBreak;",
  "()": "&ApplyFunction;",
  "€": "&euro;",
  "ℂ": "&Copf;",
  "℅": "&incare;",
  "ℊ": "&gscr;",
  "ℋ": "&hamilt;",
  "ℌ": "&Hfr;",
  "ℍ": "&quaternions;",
  "ℎ": "&planckh;",
  "ℏ": "&planck;",
  "ℐ": "&Iscr;",
  "ℑ": "&image;",
  "ℒ": "&Lscr;",
  "ℓ": "&ell;",
  "ℕ": "&Nopf;",
  "№": "&numero;",
  "℗": "&copysr;",
  "℘": "&weierp;",
  "ℙ": "&Popf;",
  "ℚ": "&rationals;",
  "ℛ": "&Rscr;",
  "ℜ": "&real;",
  "ℝ": "&reals;",
  "℞": "&rx;",
  "™": "&trade;",
  "ℤ": "&integers;",
  "℧": "&mho;",
  "ℨ": "&Zfr;",
  "℩": "&iiota;",
  "ℬ": "&bernou;",
  "ℭ": "&Cfr;",
  "ℯ": "&escr;",
  "ℰ": "&Escr;",
  "ℱ": "&Fscr;",
  "ℳ": "&phmmat;",
  "ℴ": "&order;",
  "ℵ": "&alefsym;",
  "ℶ": "&beth;",
  "ℷ": "&gimel;",
  "ℸ": "&daleth;",
  "ⅅ": "&CapitalDifferentialD;",
  "ⅆ": "&DifferentialD;",
  "ⅇ": "&ExponentialE;",
  "ⅈ": "&ImaginaryI;",
  "⅓": "&frac13;",
  "⅔": "&frac23;",
  "⅕": "&frac15;",
  "⅖": "&frac25;",
  "⅗": "&frac35;",
  "⅘": "&frac45;",
  "⅙": "&frac16;",
  "⅚": "&frac56;",
  "⅛": "&frac18;",
  "⅜": "&frac38;",
  "⅝": "&frac58;",
  "⅞": "&frac78;",
  "←": "&larr;",
  "↑": "&uarr;",
  "→": "&rarr;",
  "↓": "&darr;",
  "↔": "&harr;",
  "↕": "&varr;",
  "↖": "&nwarr;",
  "↗": "&nearr;",
  "↘": "&searr;",
  "↙": "&swarr;",
  "↚": "&nlarr;",
  "↛": "&nrarr;",
  "↝": "&rarrw;",
  "↝̸": "&nrarrw;",
  "↞": "&Larr;",
  "↟": "&Uarr;",
  "↠": "&Rarr;",
  "↡": "&Darr;",
  "↢": "&larrtl;",
  "↣": "&rarrtl;",
  "↤": "&LeftTeeArrow;",
  "↥": "&UpTeeArrow;",
  "↦": "&map;",
  "↧": "&DownTeeArrow;",
  "↩": "&larrhk;",
  "↪": "&rarrhk;",
  "↫": "&larrlp;",
  "↬": "&rarrlp;",
  "↭": "&harrw;",
  "↮": "&nharr;",
  "↰": "&lsh;",
  "↱": "&rsh;",
  "↲": "&ldsh;",
  "↳": "&rdsh;",
  "↵": "&crarr;",
  "↶": "&cularr;",
  "↷": "&curarr;",
  "↺": "&olarr;",
  "↻": "&orarr;",
  "↼": "&lharu;",
  "↽": "&lhard;",
  "↾": "&uharr;",
  "↿": "&uharl;",
  "⇀": "&rharu;",
  "⇁": "&rhard;",
  "⇂": "&dharr;",
  "⇃": "&dharl;",
  "⇄": "&rlarr;",
  "⇅": "&udarr;",
  "⇆": "&lrarr;",
  "⇇": "&llarr;",
  "⇈": "&uuarr;",
  "⇉": "&rrarr;",
  "⇊": "&ddarr;",
  "⇋": "&lrhar;",
  "⇌": "&rlhar;",
  "⇍": "&nlArr;",
  "⇎": "&nhArr;",
  "⇏": "&nrArr;",
  "⇐": "&lArr;",
  "⇑": "&uArr;",
  "⇒": "&rArr;",
  "⇓": "&dArr;",
  "⇔": "&hArr;",
  "⇕": "&vArr;",
  "⇖": "&nwArr;",
  "⇗": "&neArr;",
  "⇘": "&seArr;",
  "⇙": "&swArr;",
  "⇚": "&lAarr;",
  "⇛": "&rAarr;",
  "⇝": "&zigrarr;",
  "⇤": "&larrb;",
  "⇥": "&rarrb;",
  "⇵": "&duarr;",
  "⇽": "&loarr;",
  "⇾": "&roarr;",
  "⇿": "&hoarr;",
  "∀": "&forall;",
  "∁": "&comp;",
  "∂": "&part;",
  "∂̸": "&npart;",
  "∃": "&exist;",
  "∄": "&nexist;",
  "∅": "&empty;",
  "∇": "&nabla;",
  "∈": "&isin;",
  "∉": "&notin;",
  "∋": "&niv;",
  "∌": "&notni;",
  "∏": "&prod;",
  "∐": "&coprod;",
  "∑": "&sum;",
  "−": "&minus;",
  "∓": "&mnplus;",
  "∔": "&plusdo;",
  "∖": "&setmn;",
  "∗": "&lowast;",
  "∘": "&compfn;",
  "√": "&radic;",
  "∝": "&prop;",
  "∞": "&infin;",
  "∟": "&angrt;",
  "∠": "&ang;",
  "∠⃒": "&nang;",
  "∡": "&angmsd;",
  "∢": "&angsph;",
  "∣": "&mid;",
  "∤": "&nmid;",
  "∥": "&par;",
  "∦": "&npar;",
  "∧": "&and;",
  "∨": "&or;",
  "∩": "&cap;",
  "∩︀": "&caps;",
  "∪": "&cup;",
  "∪︀": "&cups;",
  "∫": "&int;",
  "∬": "&Int;",
  "∭": "&tint;",
  "∮": "&conint;",
  "∯": "&Conint;",
  "∰": "&Cconint;",
  "∱": "&cwint;",
  "∲": "&cwconint;",
  "∳": "&awconint;",
  "∴": "&there4;",
  "∵": "&becaus;",
  "∶": "&ratio;",
  "∷": "&Colon;",
  "∸": "&minusd;",
  "∺": "&mDDot;",
  "∻": "&homtht;",
  "∼": "&sim;",
  "∼⃒": "&nvsim;",
  "∽": "&bsim;",
  "∽̱": "&race;",
  "∾": "&ac;",
  "∾̳": "&acE;",
  "∿": "&acd;",
  "≀": "&wreath;",
  "≁": "&nsim;",
  "≂": "&esim;",
  "≂̸": "&nesim;",
  "≃": "&sime;",
  "≄": "&nsime;",
  "≅": "&cong;",
  "≆": "&simne;",
  "≇": "&ncong;",
  "≈": "&asymp;",
  "≉": "&nap;",
  "≊": "&ape;",
  "≋": "&apid;",
  "≋̸": "&napid;",
  "≌": "&bcong;",
  "≍": "&asympeq;",
  "≍⃒": "&nvap;",
  "≎": "&bump;",
  "≎̸": "&nbump;",
  "≏": "&bumpe;",
  "≏̸": "&nbumpe;",
  "≐": "&esdot;",
  "≐̸": "&nedot;",
  "≑": "&eDot;",
  "≒": "&efDot;",
  "≓": "&erDot;",
  "≔": "&colone;",
  "≕": "&ecolon;",
  "≖": "&ecir;",
  "≗": "&cire;",
  "≙": "&wedgeq;",
  "≚": "&veeeq;",
  "≜": "&trie;",
  "≟": "&equest;",
  "≠": "&ne;",
  "≡": "&equiv;",
  "≡⃥": "&bnequiv;",
  "≢": "&nequiv;",
  "≤": "&le;",
  "≤⃒": "&nvle;",
  "≥": "&ge;",
  "≥⃒": "&nvge;",
  "≦": "&lE;",
  "≦̸": "&nlE;",
  "≧": "&gE;",
  "≧̸": "&ngE;",
  "≨": "&lnE;",
  "≨︀": "&lvertneqq;",
  "≩": "&gnE;",
  "≩︀": "&gvertneqq;",
  "≪": "&Lt;",
  "≪̸": "&nLtv;",
  "≪⃒": "&nLt;",
  "≫": "&Gt;",
  "≫̸": "&nGtv;",
  "≫⃒": "&nGt;",
  "≬": "&twixt;",
  "≭": "&NotCupCap;",
  "≮": "&nlt;",
  "≯": "&ngt;",
  "≰": "&nle;",
  "≱": "&nge;",
  "≲": "&lsim;",
  "≳": "&gsim;",
  "≴": "&nlsim;",
  "≵": "&ngsim;",
  "≶": "&lg;",
  "≷": "&gl;",
  "≸": "&ntlg;",
  "≹": "&ntgl;",
  "≺": "&pr;",
  "≻": "&sc;",
  "≼": "&prcue;",
  "≽": "&sccue;",
  "≾": "&prsim;",
  "≿": "&scsim;",
  "≿̸": "&NotSucceedsTilde;",
  "⊀": "&npr;",
  "⊁": "&nsc;",
  "⊂": "&sub;",
  "⊂⃒": "&NotSubset;",
  "⊃": "&sup;",
  "⊃⃒": "&NotSuperset;",
  "⊄": "&nsub;",
  "⊅": "&nsup;",
  "⊆": "&sube;",
  "⊇": "&supe;",
  "⊈": "&nsube;",
  "⊉": "&nsupe;",
  "⊊": "&subne;",
  "⊊︀": "&varsubsetneq;",
  "⊋": "&supne;",
  "⊋︀": "&varsupsetneq;",
  "⊍": "&cupdot;",
  "⊎": "&uplus;",
  "⊏": "&sqsub;",
  "⊏̸": "&NotSquareSubset;",
  "⊐": "&sqsup;",
  "⊐̸": "&NotSquareSuperset;",
  "⊑": "&sqsube;",
  "⊒": "&sqsupe;",
  "⊓": "&sqcap;",
  "⊓︀": "&sqcaps;",
  "⊔": "&sqcup;",
  "⊔︀": "&sqcups;",
  "⊕": "&oplus;",
  "⊖": "&ominus;",
  "⊗": "&otimes;",
  "⊘": "&osol;",
  "⊙": "&odot;",
  "⊚": "&ocir;",
  "⊛": "&oast;",
  "⊝": "&odash;",
  "⊞": "&plusb;",
  "⊟": "&minusb;",
  "⊠": "&timesb;",
  "⊡": "&sdotb;",
  "⊢": "&vdash;",
  "⊣": "&dashv;",
  "⊤": "&top;",
  "⊥": "&bottom;",
  "⊧": "&models;",
  "⊨": "&vDash;",
  "⊩": "&Vdash;",
  "⊪": "&Vvdash;",
  "⊫": "&VDash;",
  "⊬": "&nvdash;",
  "⊭": "&nvDash;",
  "⊮": "&nVdash;",
  "⊯": "&nVDash;",
  "⊰": "&prurel;",
  "⊲": "&vltri;",
  "⊳": "&vrtri;",
  "⊴": "&ltrie;",
  "⊴⃒": "&nvltrie;",
  "⊵": "&rtrie;",
  "⊵⃒": "&nvrtrie;",
  "⊶": "&origof;",
  "⊷": "&imof;",
  "⊸": "&mumap;",
  "⊹": "&hercon;",
  "⊺": "&intcal;",
  "⊻": "&veebar;",
  "⊽": "&barvee;",
  "⊾": "&angrtvb;",
  "⊿": "&lrtri;",
  "⋀": "&xwedge;",
  "⋁": "&xvee;",
  "⋂": "&xcap;",
  "⋃": "&xcup;",
  "⋄": "&diam;",
  "⋅": "&sdot;",
  "⋆": "&sstarf;",
  "⋇": "&divonx;",
  "⋈": "&bowtie;",
  "⋉": "&ltimes;",
  "⋊": "&rtimes;",
  "⋋": "&lthree;",
  "⋌": "&rthree;",
  "⋍": "&bsime;",
  "⋎": "&cuvee;",
  "⋏": "&cuwed;",
  "⋐": "&Sub;",
  "⋑": "&Sup;",
  "⋒": "&Cap;",
  "⋓": "&Cup;",
  "⋔": "&fork;",
  "⋕": "&epar;",
  "⋖": "&ltdot;",
  "⋗": "&gtdot;",
  "⋘": "&Ll;",
  "⋘̸": "&nLl;",
  "⋙": "&Gg;",
  "⋙̸": "&nGg;",
  "⋚": "&leg;",
  "⋚︀": "&lesg;",
  "⋛": "&gel;",
  "⋛︀": "&gesl;",
  "⋞": "&cuepr;",
  "⋟": "&cuesc;",
  "⋠": "&nprcue;",
  "⋡": "&nsccue;",
  "⋢": "&nsqsube;",
  "⋣": "&nsqsupe;",
  "⋦": "&lnsim;",
  "⋧": "&gnsim;",
  "⋨": "&prnsim;",
  "⋩": "&scnsim;",
  "⋪": "&nltri;",
  "⋫": "&nrtri;",
  "⋬": "&nltrie;",
  "⋭": "&nrtrie;",
  "⋮": "&vellip;",
  "⋯": "&ctdot;",
  "⋰": "&utdot;",
  "⋱": "&dtdot;",
  "⋲": "&disin;",
  "⋳": "&isinsv;",
  "⋴": "&isins;",
  "⋵": "&isindot;",
  "⋵̸": "&notindot;",
  "⋶": "&notinvc;",
  "⋷": "&notinvb;",
  "⋹": "&isinE;",
  "⋹̸": "&notinE;",
  "⋺": "&nisd;",
  "⋻": "&xnis;",
  "⋼": "&nis;",
  "⋽": "&notnivc;",
  "⋾": "&notnivb;",
  "⌅": "&barwed;",
  "⌆": "&Barwed;",
  "⌈": "&lceil;",
  "⌉": "&rceil;",
  "⌊": "&lfloor;",
  "⌋": "&rfloor;",
  "⌌": "&drcrop;",
  "⌍": "&dlcrop;",
  "⌎": "&urcrop;",
  "⌏": "&ulcrop;",
  "⌐": "&bnot;",
  "⌒": "&profline;",
  "⌓": "&profsurf;",
  "⌕": "&telrec;",
  "⌖": "&target;",
  "⌜": "&ulcorn;",
  "⌝": "&urcorn;",
  "⌞": "&dlcorn;",
  "⌟": "&drcorn;",
  "⌢": "&frown;",
  "⌣": "&smile;",
  "⌭": "&cylcty;",
  "⌮": "&profalar;",
  "⌶": "&topbot;",
  "⌽": "&ovbar;",
  "⌿": "&solbar;",
  "⍼": "&",
  "⎰": "&lmoust;",
  "⎱": "&rmoust;",
  "⎴": "&tbrk;",
  "⎵": "&bbrk;",
  "⎶": "&bbrktbrk;",
  "⏜": "&OverParenthesis;",
  "⏝": "&UnderParenthesis;",
  "⏞": "&OverBrace;",
  "⏟": "&UnderBrace;",
  "⏢": "&trpezium;",
  "⏧": "&elinters;",
  "␣": "&blank;",
  "Ⓢ": "&oS;",
  "─": "&boxh;",
  "│": "&boxv;",
  "┌": "&boxdr;",
  "┐": "&boxdl;",
  "└": "&boxur;",
  "┘": "&boxul;",
  "├": "&boxvr;",
  "┤": "&boxvl;",
  "┬": "&boxhd;",
  "┴": "&boxhu;",
  "┼": "&boxvh;",
  "═": "&boxH;",
  "║": "&boxV;",
  "╒": "&boxdR;",
  "╓": "&boxDr;",
  "╔": "&boxDR;",
  "╕": "&boxdL;",
  "╖": "&boxDl;",
  "╗": "&boxDL;",
  "╘": "&boxuR;",
  "╙": "&boxUr;",
  "╚": "&boxUR;",
  "╛": "&boxuL;",
  "╜": "&boxUl;",
  "╝": "&boxUL;",
  "╞": "&boxvR;",
  "╟": "&boxVr;",
  "╠": "&boxVR;",
  "╡": "&boxvL;",
  "╢": "&boxVl;",
  "╣": "&boxVL;",
  "╤": "&boxHd;",
  "╥": "&boxhD;",
  "╦": "&boxHD;",
  "╧": "&boxHu;",
  "╨": "&boxhU;",
  "╩": "&boxHU;",
  "╪": "&boxvH;",
  "╫": "&boxVh;",
  "╬": "&boxVH;",
  "▀": "&uhblk;",
  "▄": "&lhblk;",
  "█": "&block;",
  "░": "&blk14;",
  "▒": "&blk12;",
  "▓": "&blk34;",
  "□": "&squ;",
  "▪": "&squf;",
  "▫": "&EmptyVerySmallSquare;",
  "▭": "&rect;",
  "▮": "&marker;",
  "▱": "&fltns;",
  "△": "&xutri;",
  "▴": "&utrif;",
  "▵": "&utri;",
  "▸": "&rtrif;",
  "▹": "&rtri;",
  "▽": "&xdtri;",
  "▾": "&dtrif;",
  "▿": "&dtri;",
  "◂": "&ltrif;",
  "◃": "&ltri;",
  "◊": "&loz;",
  "○": "&cir;",
  "◬": "&tridot;",
  "◯": "&xcirc;",
  "◸": "&ultri;",
  "◹": "&urtri;",
  "◺": "&lltri;",
  "◻": "&EmptySmallSquare;",
  "◼": "&FilledSmallSquare;",
  "★": "&starf;",
  "☆": "&star;",
  "☎": "&phone;",
  "♀": "&female;",
  "♂": "&male;",
  "♠": "&spades;",
  "♣": "&clubs;",
  "♥": "&hearts;",
  "♦": "&diams;",
  "♪": "&sung;",
  "♭": "&flat;",
  "♮": "&natur;",
  "♯": "&sharp;",
  "✓": "&check;",
  "✗": "&cross;",
  "✠": "&malt;",
  "✶": "&sext;",
  "❘": "&VerticalSeparator;",
  "❲": "&lbbrk;",
  "❳": "&rbbrk;",
  "⟈": "&bsolhsub;",
  "⟉": "&suphsol;",
  "⟦": "&lobrk;",
  "⟧": "&robrk;",
  "⟨": "&lang;",
  "⟩": "&rang;",
  "⟪": "&Lang;",
  "⟫": "&Rang;",
  "⟬": "&loang;",
  "⟭": "&roang;",
  "⟵": "&xlarr;",
  "⟶": "&xrarr;",
  "⟷": "&xharr;",
  "⟸": "&xlArr;",
  "⟹": "&xrArr;",
  "⟺": "&xhArr;",
  "⟼": "&xmap;",
  "⟿": "&dzigrarr;",
  "⤂": "&nvlArr;",
  "⤃": "&nvrArr;",
  "⤄": "&nvHarr;",
  "⤅": "&Map;",
  "⤌": "&lbarr;",
  "⤍": "&rbarr;",
  "⤎": "&lBarr;",
  "⤏": "&rBarr;",
  "⤐": "&RBarr;",
  "⤑": "&DDotrahd;",
  "⤒": "&UpArrowBar;",
  "⤓": "&DownArrowBar;",
  "⤖": "&Rarrtl;",
  "⤙": "&latail;",
  "⤚": "&ratail;",
  "⤛": "&lAtail;",
  "⤜": "&rAtail;",
  "⤝": "&larrfs;",
  "⤞": "&rarrfs;",
  "⤟": "&larrbfs;",
  "⤠": "&rarrbfs;",
  "⤣": "&nwarhk;",
  "⤤": "&nearhk;",
  "⤥": "&searhk;",
  "⤦": "&swarhk;",
  "⤧": "&nwnear;",
  "⤨": "&nesear;",
  "⤩": "&seswar;",
  "⤪": "&swnwar;",
  "⤳": "&rarrc;",
  "⤳̸": "&nrarrc;",
  "⤵": "&cudarrr;",
  "⤶": "&ldca;",
  "⤷": "&rdca;",
  "⤸": "&cudarrl;",
  "⤹": "&larrpl;",
  "⤼": "&curarrm;",
  "⤽": "&cularrp;",
  "⥅": "&rarrpl;",
  "⥈": "&harrcir;",
  "⥉": "&Uarrocir;",
  "⥊": "&lurdshar;",
  "⥋": "&ldrushar;",
  "⥎": "&LeftRightVector;",
  "⥏": "&RightUpDownVector;",
  "⥐": "&DownLeftRightVector;",
  "⥑": "&LeftUpDownVector;",
  "⥒": "&LeftVectorBar;",
  "⥓": "&RightVectorBar;",
  "⥔": "&RightUpVectorBar;",
  "⥕": "&RightDownVectorBar;",
  "⥖": "&DownLeftVectorBar;",
  "⥗": "&DownRightVectorBar;",
  "⥘": "&LeftUpVectorBar;",
  "⥙": "&LeftDownVectorBar;",
  "⥚": "&LeftTeeVector;",
  "⥛": "&RightTeeVector;",
  "⥜": "&RightUpTeeVector;",
  "⥝": "&RightDownTeeVector;",
  "⥞": "&DownLeftTeeVector;",
  "⥟": "&DownRightTeeVector;",
  "⥠": "&LeftUpTeeVector;",
  "⥡": "&LeftDownTeeVector;",
  "⥢": "&lHar;",
  "⥣": "&uHar;",
  "⥤": "&rHar;",
  "⥥": "&dHar;",
  "⥦": "&luruhar;",
  "⥧": "&ldrdhar;",
  "⥨": "&ruluhar;",
  "⥩": "&rdldhar;",
  "⥪": "&lharul;",
  "⥫": "&llhard;",
  "⥬": "&rharul;",
  "⥭": "&lrhard;",
  "⥮": "&udhar;",
  "⥯": "&duhar;",
  "⥰": "&RoundImplies;",
  "⥱": "&erarr;",
  "⥲": "&simrarr;",
  "⥳": "&larrsim;",
  "⥴": "&rarrsim;",
  "⥵": "&rarrap;",
  "⥶": "&ltlarr;",
  "⥸": "&gtrarr;",
  "⥹": "&subrarr;",
  "⥻": "&suplarr;",
  "⥼": "&lfisht;",
  "⥽": "&rfisht;",
  "⥾": "&ufisht;",
  "⥿": "&dfisht;",
  "⦅": "&lopar;",
  "⦆": "&ropar;",
  "⦋": "&lbrke;",
  "⦌": "&rbrke;",
  "⦍": "&lbrkslu;",
  "⦎": "&rbrksld;",
  "⦏": "&lbrksld;",
  "⦐": "&rbrkslu;",
  "⦑": "&langd;",
  "⦒": "&rangd;",
  "⦓": "&lparlt;",
  "⦔": "&rpargt;",
  "⦕": "&gtlPar;",
  "⦖": "&ltrPar;",
  "⦚": "&vzigzag;",
  "⦜": "&vangrt;",
  "⦝": "&angrtvbd;",
  "⦤": "&ange;",
  "⦥": "&range;",
  "⦦": "&dwangle;",
  "⦧": "&uwangle;",
  "⦨": "&angmsdaa;",
  "⦩": "&angmsdab;",
  "⦪": "&angmsdac;",
  "⦫": "&angmsdad;",
  "⦬": "&angmsdae;",
  "⦭": "&angmsdaf;",
  "⦮": "&angmsdag;",
  "⦯": "&angmsdah;",
  "⦰": "&bemptyv;",
  "⦱": "&demptyv;",
  "⦲": "&cemptyv;",
  "⦳": "&raemptyv;",
  "⦴": "&laemptyv;",
  "⦵": "&ohbar;",
  "⦶": "&omid;",
  "⦷": "&opar;",
  "⦹": "&operp;",
  "⦻": "&olcross;",
  "⦼": "&odsold;",
  "⦾": "&olcir;",
  "⦿": "&ofcir;",
  "⧀": "&olt;",
  "⧁": "&ogt;",
  "⧂": "&cirscir;",
  "⧃": "&cirE;",
  "⧄": "&solb;",
  "⧅": "&bsolb;",
  "⧉": "&boxbox;",
  "⧍": "&trisb;",
  "⧎": "&rtriltri;",
  "⧏": "&LeftTriangleBar;",
  "⧏̸": "&NotLeftTriangleBar;",
  "⧐": "&RightTriangleBar;",
  "⧐̸": "&NotRightTriangleBar;",
  "⧜": "&iinfin;",
  "⧝": "&infintie;",
  "⧞": "&nvinfin;",
  "⧣": "&eparsl;",
  "⧤": "&smeparsl;",
  "⧥": "&eqvparsl;",
  "⧫": "&lozf;",
  "⧴": "&RuleDelayed;",
  "⧶": "&dsol;",
  "⨀": "&xodot;",
  "⨁": "&xoplus;",
  "⨂": "&xotime;",
  "⨄": "&xuplus;",
  "⨆": "&xsqcup;",
  "⨌": "&qint;",
  "⨍": "&fpartint;",
  "⨐": "&cirfnint;",
  "⨑": "&awint;",
  "⨒": "&rppolint;",
  "⨓": "&scpolint;",
  "⨔": "&npolint;",
  "⨕": "&pointint;",
  "⨖": "&quatint;",
  "⨗": "&intlarhk;",
  "⨢": "&pluscir;",
  "⨣": "&plusacir;",
  "⨤": "&simplus;",
  "⨥": "&plusdu;",
  "⨦": "&plussim;",
  "⨧": "&plustwo;",
  "⨩": "&mcomma;",
  "⨪": "&minusdu;",
  "⨭": "&loplus;",
  "⨮": "&roplus;",
  "⨯": "&Cross;",
  "⨰": "&timesd;",
  "⨱": "&timesbar;",
  "⨳": "&smashp;",
  "⨴": "&lotimes;",
  "⨵": "&rotimes;",
  "⨶": "&otimesas;",
  "⨷": "&Otimes;",
  "⨸": "&odiv;",
  "⨹": "&triplus;",
  "⨺": "&triminus;",
  "⨻": "&tritime;",
  "⨼": "&iprod;",
  "⨿": "&amalg;",
  "⩀": "&capdot;",
  "⩂": "&ncup;",
  "⩃": "&ncap;",
  "⩄": "&capand;",
  "⩅": "&cupor;",
  "⩆": "&cupcap;",
  "⩇": "&capcup;",
  "⩈": "&cupbrcap;",
  "⩉": "&capbrcup;",
  "⩊": "&cupcup;",
  "⩋": "&capcap;",
  "⩌": "&ccups;",
  "⩍": "&ccaps;",
  "⩐": "&ccupssm;",
  "⩓": "&And;",
  "⩔": "&Or;",
  "⩕": "&andand;",
  "⩖": "&oror;",
  "⩗": "&orslope;",
  "⩘": "&andslope;",
  "⩚": "&andv;",
  "⩛": "&orv;",
  "⩜": "&andd;",
  "⩝": "&ord;",
  "⩟": "&wedbar;",
  "⩦": "&sdote;",
  "⩪": "&simdot;",
  "⩭": "&congdot;",
  "⩭̸": "&ncongdot;",
  "⩮": "&easter;",
  "⩯": "&apacir;",
  "⩰": "&apE;",
  "⩰̸": "&napE;",
  "⩱": "&eplus;",
  "⩲": "&pluse;",
  "⩳": "&Esim;",
  "⩴": "&Colone;",
  "⩵": "&Equal;",
  "⩷": "&eDDot;",
  "⩸": "&equivDD;",
  "⩹": "&ltcir;",
  "⩺": "&gtcir;",
  "⩻": "&ltquest;",
  "⩼": "&gtquest;",
  "⩽": "&les;",
  "⩽̸": "&nleqslant;",
  "⩾": "&ges;",
  "⩾̸": "&ngeqslant;",
  "⩿": "&lesdot;",
  "⪀": "&gesdot;",
  "⪁": "&lesdoto;",
  "⪂": "&gesdoto;",
  "⪃": "&lesdotor;",
  "⪄": "&gesdotol;",
  "⪅": "&lap;",
  "⪆": "&gap;",
  "⪇": "&lne;",
  "⪈": "&gne;",
  "⪉": "&lnap;",
  "⪊": "&gnap;",
  "⪋": "&lEg;",
  "⪌": "&gEl;",
  "⪍": "&lsime;",
  "⪎": "&gsime;",
  "⪏": "&lsimg;",
  "⪐": "&gsiml;",
  "⪑": "&lgE;",
  "⪒": "&glE;",
  "⪓": "&lesges;",
  "⪔": "&gesles;",
  "⪕": "&els;",
  "⪖": "&egs;",
  "⪗": "&elsdot;",
  "⪘": "&egsdot;",
  "⪙": "&el;",
  "⪚": "&eg;",
  "⪝": "&siml;",
  "⪞": "&simg;",
  "⪟": "&simlE;",
  "⪠": "&simgE;",
  "⪡": "&LessLess;",
  "⪡̸": "&NotNestedLessLess;",
  "⪢": "&GreaterGreater;",
  "⪢̸": "&NotNestedGreaterGreater;",
  "⪤": "&glj;",
  "⪥": "&gla;",
  "⪦": "&ltcc;",
  "⪧": "&gtcc;",
  "⪨": "&lescc;",
  "⪩": "&gescc;",
  "⪪": "&smt;",
  "⪫": "&lat;",
  "⪬": "&smte;",
  "⪬︀": "&smtes;",
  "⪭": "&late;",
  "⪭︀": "&lates;",
  "⪮": "&bumpE;",
  "⪯": "&pre;",
  "⪯̸": "&NotPrecedesEqual;",
  "⪰": "&sce;",
  "⪰̸": "&NotSucceedsEqual;",
  "⪳": "&prE;",
  "⪴": "&scE;",
  "⪵": "&prnE;",
  "⪶": "&scnE;",
  "⪷": "&prap;",
  "⪸": "&scap;",
  "⪹": "&prnap;",
  "⪺": "&scnap;",
  "⪻": "&Pr;",
  "⪼": "&Sc;",
  "⪽": "&subdot;",
  "⪾": "&supdot;",
  "⪿": "&subplus;",
  "⫀": "&supplus;",
  "⫁": "&submult;",
  "⫂": "&supmult;",
  "⫃": "&subedot;",
  "⫄": "&supedot;",
  "⫅": "&subE;",
  "⫅̸": "&nsubE;",
  "⫆": "&supE;",
  "⫆̸": "&nsupE;",
  "⫇": "&subsim;",
  "⫈": "&supsim;",
  "⫋": "&subnE;",
  "⫋︀": "&varsubsetneqq;",
  "⫌": "&supnE;",
  "⫌︀": "&varsupsetneqq;",
  "⫏": "&csub;",
  "⫐": "&csup;",
  "⫑": "&csube;",
  "⫒": "&csupe;",
  "⫓": "&subsup;",
  "⫔": "&supsub;",
  "⫕": "&subsub;",
  "⫖": "&supsup;",
  "⫗": "&suphsub;",
  "⫘": "&supdsub;",
  "⫙": "&forkv;",
  "⫚": "&topfork;",
  "⫛": "&mlcp;",
  "⫤": "&Dashv;",
  "⫦": "&Vdashl;",
  "⫧": "&Barv;",
  "⫨": "&vBar;",
  "⫩": "&vBarv;",
  "⫫": "&Vbar;",
  "⫬": "&Not;",
  "⫭": "&bNot;",
  "⫮": "&rnmid;",
  "⫯": "&cirmid;",
  "⫰": "&midcir;",
  "⫱": "&topcir;",
  "⫲": "&nhpar;",
  "⫳": "&parsim;",
  "⫽": "&parsl;",
  "⫽⃥": "&nparsl;",
  "ﬀ": "&fflig;",
  "ﬁ": "&filig;",
  "ﬂ": "&fllig;",
  "ﬃ": "&ffilig;",
  "ﬄ": "&ffllig;",
  "𝒜": "&Ascr;",
  "𝒞": "&Cscr;",
  "𝒟": "&Dscr;",
  "𝒢": "&Gscr;",
  "𝒥": "&Jscr;",
  "𝒦": "&Kscr;",
  "𝒩": "&Nscr;",
  "𝒪": "&Oscr;",
  "𝒫": "&Pscr;",
  "𝒬": "&Qscr;",
  "𝒮": "&Sscr;",
  "𝒯": "&Tscr;",
  "𝒰": "&Uscr;",
  "𝒱": "&Vscr;",
  "𝒲": "&Wscr;",
  "𝒳": "&Xscr;",
  "𝒴": "&Yscr;",
  "𝒵": "&Zscr;",
  "𝒶": "&ascr;",
  "𝒷": "&bscr;",
  "𝒸": "&cscr;",
  "𝒹": "&dscr;",
  "𝒻": "&fscr;",
  "𝒽": "&hscr;",
  "𝒾": "&iscr;",
  "𝒿": "&jscr;",
  "𝓀": "&kscr;",
  "𝓁": "&lscr;",
  "𝓂": "&mscr;",
  "𝓃": "&nscr;",
  "𝓅": "&pscr;",
  "𝓆": "&qscr;",
  "𝓇": "&rscr;",
  "𝓈": "&sscr;",
  "𝓉": "&tscr;",
  "𝓊": "&uscr;",
  "𝓋": "&vscr;",
  "𝓌": "&wscr;",
  "𝓍": "&xscr;",
  "𝓎": "&yscr;",
  "𝓏": "&zscr;",
  "𝔄": "&Afr;",
  "𝔅": "&Bfr;",
  "𝔇": "&Dfr;",
  "𝔈": "&Efr;",
  "𝔉": "&Ffr;",
  "𝔊": "&Gfr;",
  "𝔍": "&Jfr;",
  "𝔎": "&Kfr;",
  "𝔏": "&Lfr;",
  "𝔐": "&Mfr;",
  "𝔑": "&Nfr;",
  "𝔒": "&Ofr;",
  "𝔓": "&Pfr;",
  "𝔔": "&Qfr;",
  "𝔖": "&Sfr;",
  "𝔗": "&Tfr;",
  "𝔘": "&Ufr;",
  "𝔙": "&Vfr;",
  "𝔚": "&Wfr;",
  "𝔛": "&Xfr;",
  "𝔜": "&Yfr;",
  "𝔞": "&afr;",
  "𝔟": "&bfr;",
  "𝔠": "&cfr;",
  "𝔡": "&dfr;",
  "𝔢": "&efr;",
  "𝔣": "&ffr;",
  "𝔤": "&gfr;",
  "𝔥": "&hfr;",
  "𝔦": "&ifr;",
  "𝔧": "&jfr;",
  "𝔨": "&kfr;",
  "𝔩": "&lfr;",
  "𝔪": "&mfr;",
  "𝔫": "&nfr;",
  "𝔬": "&ofr;",
  "𝔭": "&pfr;",
  "𝔮": "&qfr;",
  "𝔯": "&rfr;",
  "𝔰": "&sfr;",
  "𝔱": "&tfr;",
  "𝔲": "&ufr;",
  "𝔳": "&vfr;",
  "𝔴": "&wfr;",
  "𝔵": "&xfr;",
  "𝔶": "&yfr;",
  "𝔷": "&zfr;",
  "𝔸": "&Aopf;",
  "𝔹": "&Bopf;",
  "𝔻": "&Dopf;",
  "𝔼": "&Eopf;",
  "𝔽": "&Fopf;",
  "𝔾": "&Gopf;",
  "𝕀": "&Iopf;",
  "𝕁": "&Jopf;",
  "𝕂": "&Kopf;",
  "𝕃": "&Lopf;",
  "𝕄": "&Mopf;",
  "𝕆": "&Oopf;",
  "𝕊": "&Sopf;",
  "𝕋": "&Topf;",
  "𝕌": "&Uopf;",
  "𝕍": "&Vopf;",
  "𝕎": "&Wopf;",
  "𝕏": "&Xopf;",
  "𝕐": "&Yopf;",
  "𝕒": "&aopf;",
  "𝕓": "&bopf;",
  "𝕔": "&copf;",
  "𝕕": "&dopf;",
  "𝕖": "&eopf;",
  "𝕗": "&fopf;",
  "𝕘": "&gopf;",
  "𝕙": "&hopf;",
  "𝕚": "&iopf;",
  "𝕛": "&jopf;",
  "𝕜": "&kopf;",
  "𝕝": "&lopf;",
  "𝕞": "&mopf;",
  "𝕟": "&nopf;",
  "𝕠": "&oopf;",
  "𝕡": "&popf;",
  "𝕢": "&qopf;",
  "𝕣": "&ropf;",
  "𝕤": "&sopf;",
  "𝕥": "&topf;",
  "𝕦": "&uopf;",
  "𝕧": "&vopf;",
  "𝕨": "&wopf;",
  "𝕩": "&xopf;",
  "𝕪": "&yopf;",
  "𝕫": "&zopf;"
};
var HtmlDecodeMap = exports.HtmlDecodeMap = (_HtmlDecodeMap = {
  "&aelig;": "\xC6",
  "&amp;": "&",
  "&aacute;": "\xC1",
  "&abreve;": "\u0102",
  "&acirc;": "\xC2",
  "&acy;": "\u0410",
  "&afr;": "\uD835\uDD04",
  "&agrave;": "\xC0",
  "&alpha;": "\u0391",
  "&amacr;": "\u0100",
  "&and;": "\u2A53",
  "&aogon;": "\u0104",
  "&aopf;": "\uD835\uDD38",
  "&applyfunction;": "()",
  "&aring;": "\xC5",
  "&ascr;": "\uD835\uDC9C",
  "&assign;": "\u2254",
  "&atilde;": "\xC3",
  "&auml;": "\xC4",
  "&backslash;": "\u2216",
  "&barv;": "\u2AE7",
  "&barwed;": "\u2306",
  "&bcy;": "\u0411",
  "&because;": "\u2235",
  "&bernoullis;": "\u212C",
  "&beta;": "\u0392",
  "&bfr;": "\uD835\uDD05",
  "&bopf;": "\uD835\uDD39",
  "&breve;": "\u02D8",
  "&bscr;": "\u212C",
  "&bumpeq;": "\u224E",
  "&chcy;": "\u0427",
  "&copy;": "\xA9",
  "&cacute;": "\u0106",
  "&cap;": "\u22D2",
  "&capitaldifferentiald;": "\u2145",
  "&cayleys;": "\u212D",
  "&ccaron;": "\u010C",
  "&ccedil;": "\xC7",
  "&ccirc;": "\u0108",
  "&cconint;": "\u2230",
  "&cdot;": "\u010A",
  "&cedilla;": "\xB8",
  "&centerdot;": "\xB7",
  "&cfr;": "\u212D",
  "&chi;": "\u03A7",
  "&circledot;": "\u2299",
  "&circleminus;": "\u2296",
  "&circleplus;": "\u2295",
  "&circletimes;": "\u2297",
  "&clockwisecontourintegral;": "\u2232",
  "&closecurlydoublequote;": "\u201D",
  "&closecurlyquote;": "\u2019",
  "&colon;": "\u2237",
  "&colone;": "\u2A74",
  "&congruent;": "\u2261",
  "&conint;": "\u222F",
  "&contourintegral;": "\u222E",
  "&copf;": "\u2102",
  "&coproduct;": "\u2210",
  "&counterclockwisecontourintegral;": "\u2233",
  "&cross;": "\u2A2F",
  "&cscr;": "\uD835\uDC9E",
  "&cup;": "\u22D3",
  "&cupcap;": "\u224D",
  "&dd;": "\u2145",
  "&ddotrahd;": "\u2911",
  "&djcy;": "\u0402",
  "&dscy;": "\u0405",
  "&dzcy;": "\u040F",
  "&dagger;": "\u2021",
  "&darr;": "\u21A1",
  "&dashv;": "\u2AE4",
  "&dcaron;": "\u010E",
  "&dcy;": "\u0414",
  "&del;": "\u2207",
  "&delta;": "\u0394",
  "&dfr;": "\uD835\uDD07",
  "&diacriticalacute;": "\xB4",
  "&diacriticaldot;": "\u02D9",
  "&diacriticaldoubleacute;": "\u02DD",
  "&diacriticalgrave;": "`",
  "&diacriticaltilde;": "\u02DC",
  "&diamond;": "\u22C4",
  "&differentiald;": "\u2146",
  "&dopf;": "\uD835\uDD3B",
  "&dot;": "\xA8",
  "&dotdot;": "\u20DC",
  "&dotequal;": "\u2250",
  "&doublecontourintegral;": "\u222F",
  "&doubledot;": "\xA8",
  "&doubledownarrow;": "\u21D3",
  "&doubleleftarrow;": "\u21D0",
  "&doubleleftrightarrow;": "\u21D4",
  "&doublelefttee;": "\u2AE4",
  "&doublelongleftarrow;": "\u27F8",
  "&doublelongleftrightarrow;": "\u27FA",
  "&doublelongrightarrow;": "\u27F9",
  "&doublerightarrow;": "\u21D2",
  "&doublerighttee;": "\u22A8",
  "&doubleuparrow;": "\u21D1",
  "&doubleupdownarrow;": "\u21D5",
  "&doubleverticalbar;": "\u2225",
  "&downarrow;": "\u2193",
  "&downarrowbar;": "\u2913",
  "&downarrowuparrow;": "\u21F5",
  "&downbreve;": "\u0311",
  "&downleftrightvector;": "\u2950",
  "&downleftteevector;": "\u295E",
  "&downleftvector;": "\u21BD",
  "&downleftvectorbar;": "\u2956",
  "&downrightteevector;": "\u295F",
  "&downrightvector;": "\u21C1",
  "&downrightvectorbar;": "\u2957",
  "&downtee;": "\u22A4",
  "&downteearrow;": "\u21A7"
}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&downarrow;", "\u21D3"), "&dscr;", "\uD835\uDC9F"), "&dstrok;", "\u0110"), "&eng;", "\u014A"), "&eth;", "\xD0"), "&eacute;", "\xC9"), "&ecaron;", "\u011A"), "&ecirc;", "\xCA"), "&ecy;", "\u042D"), "&edot;", "\u0116"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&efr;", "\uD835\uDD08"), "&egrave;", "\xC8"), "&element;", "\u2208"), "&emacr;", "\u0112"), "&emptysmallsquare;", "\u25FB"), "&emptyverysmallsquare;", "\u25AB"), "&eogon;", "\u0118"), "&eopf;", "\uD835\uDD3C"), "&epsilon;", "\u0395"), "&equal;", "\u2A75"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&equaltilde;", "\u2242"), "&equilibrium;", "\u21CC"), "&escr;", "\u2130"), "&esim;", "\u2A73"), "&eta;", "\u0397"), "&euml;", "\xCB"), "&exists;", "\u2203"), "&exponentiale;", "\u2147"), "&fcy;", "\u0424"), "&ffr;", "\uD835\uDD09"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&filledsmallsquare;", "\u25FC"), "&filledverysmallsquare;", "\u25AA"), "&fopf;", "\uD835\uDD3D"), "&forall;", "\u2200"), "&fouriertrf;", "\u2131"), "&fscr;", "\u2131"), "&gjcy;", "\u0403"), "&gt;", ">"), "&gamma;", "\u0393"), "&gammad;", "\u03DC"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&gbreve;", "\u011E"), "&gcedil;", "\u0122"), "&gcirc;", "\u011C"), "&gcy;", "\u0413"), "&gdot;", "\u0120"), "&gfr;", "\uD835\uDD0A"), "&gg;", "\u22D9"), "&gopf;", "\uD835\uDD3E"), "&greaterequal;", "\u2265"), "&greaterequalless;", "\u22DB"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&greaterfullequal;", "\u2267"), "&greatergreater;", "\u2AA2"), "&greaterless;", "\u2277"), "&greaterslantequal;", "\u2A7E"), "&greatertilde;", "\u2273"), "&gscr;", "\uD835\uDCA2"), "&gt;", "\u226B"), "&hardcy;", "\u042A"), "&hacek;", "\u02C7"), "&hat;", "^"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&hcirc;", "\u0124"), "&hfr;", "\u210C"), "&hilbertspace;", "\u210B"), "&hopf;", "\u210D"), "&horizontalline;", "\u2500"), "&hscr;", "\u210B"), "&hstrok;", "\u0126"), "&humpdownhump;", "\u224E"), "&humpequal;", "\u224F"), "&iecy;", "\u0415"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&ijlig;", "\u0132"), "&iocy;", "\u0401"), "&iacute;", "\xCD"), "&icirc;", "\xCE"), "&icy;", "\u0418"), "&idot;", "\u0130"), "&ifr;", "\u2111"), "&igrave;", "\xCC"), "&im;", "\u2111"), "&imacr;", "\u012A"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&imaginaryi;", "\u2148"), "&implies;", "\u21D2"), "&int;", "\u222C"), "&integral;", "\u222B"), "&intersection;", "\u22C2"), "&invisiblecomma;", ","), "&invisibletimes;", "\xD7"), "&iogon;", "\u012E"), "&iopf;", "\uD835\uDD40"), "&iota;", "\u0399"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&iscr;", "\u2110"), "&itilde;", "\u0128"), "&iukcy;", "\u0406"), "&iuml;", "\xCF"), "&jcirc;", "\u0134"), "&jcy;", "\u0419"), "&jfr;", "\uD835\uDD0D"), "&jopf;", "\uD835\uDD41"), "&jscr;", "\uD835\uDCA5"), "&jsercy;", "\u0408"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&jukcy;", "\u0404"), "&khcy;", "\u0425"), "&kjcy;", "\u040C"), "&kappa;", "\u039A"), "&kcedil;", "\u0136"), "&kcy;", "\u041A"), "&kfr;", "\uD835\uDD0E"), "&kopf;", "\uD835\uDD42"), "&kscr;", "\uD835\uDCA6"), "&ljcy;", "\u0409"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&lt;", "<"), "&lacute;", "\u0139"), "&lambda;", "\u039B"), "&lang;", "\u27EA"), "&laplacetrf;", "\u2112"), "&larr;", "\u219E"), "&lcaron;", "\u013D"), "&lcedil;", "\u013B"), "&lcy;", "\u041B"), "&leftanglebracket;", "\u27E8"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&leftarrow;", "\u2190"), "&leftarrowbar;", "\u21E4"), "&leftarrowrightarrow;", "\u21C6"), "&leftceiling;", "\u2308"), "&leftdoublebracket;", "\u27E6"), "&leftdownteevector;", "\u2961"), "&leftdownvector;", "\u21C3"), "&leftdownvectorbar;", "\u2959"), "&leftfloor;", "\u230A"), "&leftrightarrow;", "\u2194"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&leftrightvector;", "\u294E"), "&lefttee;", "\u22A3"), "&leftteearrow;", "\u21A4"), "&leftteevector;", "\u295A"), "&lefttriangle;", "\u22B2"), "&lefttrianglebar;", "\u29CF"), "&lefttriangleequal;", "\u22B4"), "&leftupdownvector;", "\u2951"), "&leftupteevector;", "\u2960"), "&leftupvector;", "\u21BF"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&leftupvectorbar;", "\u2958"), "&leftvector;", "\u21BC"), "&leftvectorbar;", "\u2952"), "&leftarrow;", "\u21D0"), "&leftrightarrow;", "\u21D4"), "&lessequalgreater;", "\u22DA"), "&lessfullequal;", "\u2266"), "&lessgreater;", "\u2276"), "&lessless;", "\u2AA1"), "&lessslantequal;", "\u2A7D"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&lesstilde;", "\u2272"), "&lfr;", "\uD835\uDD0F"), "&ll;", "\u22D8"), "&lleftarrow;", "\u21DA"), "&lmidot;", "\u013F"), "&longleftarrow;", "\u27F5"), "&longleftrightarrow;", "\u27F7"), "&longrightarrow;", "\u27F6"), "&longleftarrow;", "\u27F8"), "&longleftrightarrow;", "\u27FA"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&longrightarrow;", "\u27F9"), "&lopf;", "\uD835\uDD43"), "&lowerleftarrow;", "\u2199"), "&lowerrightarrow;", "\u2198"), "&lscr;", "\u2112"), "&lsh;", "\u21B0"), "&lstrok;", "\u0141"), "&lt;", "\u226A"), "&map;", "\u2905"), "&mcy;", "\u041C"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&mediumspace;", "\u205F"), "&mellintrf;", "\u2133"), "&mfr;", "\uD835\uDD10"), "&minusplus;", "\u2213"), "&mopf;", "\uD835\uDD44"), "&mscr;", "\u2133"), "&mu;", "\u039C"), "&njcy;", "\u040A"), "&nacute;", "\u0143"), "&ncaron;", "\u0147"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&ncedil;", "\u0145"), "&ncy;", "\u041D"), "&negativemediumspace;", "ZWSP"), "&negativethickspace;", "ZWSP"), "&negativethinspace;", "ZWSP"), "&negativeverythinspace;", "ZWSP"), "&nestedgreatergreater;", "\u226B"), "&nestedlessless;", "\u226A"), "&newline;", "LF"), "&nfr;", "\uD835\uDD11"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&nobreak;", "WJ"), "&nonbreakingspace;", "\xA0"), "&nopf;", "\u2115"), "&not;", "\u2AEC"), "&notcongruent;", "\u2262"), "&notcupcap;", "\u226D"), "&notdoubleverticalbar;", "\u2226"), "&notelement;", "\u2209"), "&notequal;", "\u2260"), "&notequaltilde;", "\u2242\u0338"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&notexists;", "\u2204"), "&notgreater;", "\u226F"), "&notgreaterequal;", "\u2271"), "&notgreaterfullequal;", "\u2267\u0338"), "&notgreatergreater;", "\u226B\u0338"), "&notgreaterless;", "\u2279"), "&notgreaterslantequal;", "\u2A7E\u0338"), "&notgreatertilde;", "\u2275"), "&nothumpdownhump;", "\u224E\u0338"), "&nothumpequal;", "\u224F\u0338"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&notlefttriangle;", "\u22EA"), "&notlefttrianglebar;", "\u29CF\u0338"), "&notlefttriangleequal;", "\u22EC"), "&notless;", "\u226E"), "&notlessequal;", "\u2270"), "&notlessgreater;", "\u2278"), "&notlessless;", "\u226A\u0338"), "&notlessslantequal;", "\u2A7D\u0338"), "&notlesstilde;", "\u2274"), "&notnestedgreatergreater;", "\u2AA2\u0338"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&notnestedlessless;", "\u2AA1\u0338"), "&notprecedes;", "\u2280"), "&notprecedesequal;", "\u2AAF\u0338"), "&notprecedesslantequal;", "\u22E0"), "&notreverseelement;", "\u220C"), "&notrighttriangle;", "\u22EB"), "&notrighttrianglebar;", "\u29D0\u0338"), "&notrighttriangleequal;", "\u22ED"), "&notsquaresubset;", "\u228F\u0338"), "&notsquaresubsetequal;", "\u22E2"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&notsquaresuperset;", "\u2290\u0338"), "&notsquaresupersetequal;", "\u22E3"), "&notsubset;", "\u2282\u20D2"), "&notsubsetequal;", "\u2288"), "&notsucceeds;", "\u2281"), "&notsucceedsequal;", "\u2AB0\u0338"), "&notsucceedsslantequal;", "\u22E1"), "&notsucceedstilde;", "\u227F\u0338"), "&notsuperset;", "\u2283\u20D2"), "&notsupersetequal;", "\u2289"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&nottilde;", "\u2241"), "&nottildeequal;", "\u2244"), "&nottildefullequal;", "\u2247"), "&nottildetilde;", "\u2249"), "&notverticalbar;", "\u2224"), "&nscr;", "\uD835\uDCA9"), "&ntilde;", "\xD1"), "&nu;", "\u039D"), "&oelig;", "\u0152"), "&oacute;", "\xD3"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&ocirc;", "\xD4"), "&ocy;", "\u041E"), "&odblac;", "\u0150"), "&ofr;", "\uD835\uDD12"), "&ograve;", "\xD2"), "&omacr;", "\u014C"), "&omega;", "\u03A9"), "&omicron;", "\u039F"), "&oopf;", "\uD835\uDD46"), "&opencurlydoublequote;", "\u201C"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&opencurlyquote;", "\u2018"), "&or;", "\u2A54"), "&oscr;", "\uD835\uDCAA"), "&oslash;", "\xD8"), "&otilde;", "\xD5"), "&otimes;", "\u2A37"), "&ouml;", "\xD6"), "&overbar;", "\u203E"), "&overbrace;", "\u23DE"), "&overbracket;", "\u23B4"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&overparenthesis;", "\u23DC"), "&partiald;", "\u2202"), "&pcy;", "\u041F"), "&pfr;", "\uD835\uDD13"), "&phi;", "\u03A6"), "&pi;", "\u03A0"), "&plusminus;", "\xB1"), "&poincareplane;", "\u210C"), "&popf;", "\u2119"), "&pr;", "\u2ABB"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&precedes;", "\u227A"), "&precedesequal;", "\u2AAF"), "&precedesslantequal;", "\u227C"), "&precedestilde;", "\u227E"), "&prime;", "\u2033"), "&product;", "\u220F"), "&proportion;", "\u2237"), "&proportional;", "\u221D"), "&pscr;", "\uD835\uDCAB"), "&psi;", "\u03A8"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&quot;", "\""), "&qfr;", "\uD835\uDD14"), "&qopf;", "\u211A"), "&qscr;", "\uD835\uDCAC"), "&rbarr;", "\u2910"), "&reg;", "\xAE"), "&racute;", "\u0154"), "&rang;", "\u27EB"), "&rarr;", "\u21A0"), "&rarrtl;", "\u2916"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&rcaron;", "\u0158"), "&rcedil;", "\u0156"), "&rcy;", "\u0420"), "&re;", "\u211C"), "&reverseelement;", "\u220B"), "&reverseequilibrium;", "\u21CB"), "&reverseupequilibrium;", "\u296F"), "&rfr;", "\u211C"), "&rho;", "\u03A1"), "&rightanglebracket;", "\u27E9"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&rightarrow;", "\u2192"), "&rightarrowbar;", "\u21E5"), "&rightarrowleftarrow;", "\u21C4"), "&rightceiling;", "\u2309"), "&rightdoublebracket;", "\u27E7"), "&rightdownteevector;", "\u295D"), "&rightdownvector;", "\u21C2"), "&rightdownvectorbar;", "\u2955"), "&rightfloor;", "\u230B"), "&righttee;", "\u22A2"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&rightteearrow;", "\u21A6"), "&rightteevector;", "\u295B"), "&righttriangle;", "\u22B3"), "&righttrianglebar;", "\u29D0"), "&righttriangleequal;", "\u22B5"), "&rightupdownvector;", "\u294F"), "&rightupteevector;", "\u295C"), "&rightupvector;", "\u21BE"), "&rightupvectorbar;", "\u2954"), "&rightvector;", "\u21C0"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&rightvectorbar;", "\u2953"), "&rightarrow;", "\u21D2"), "&ropf;", "\u211D"), "&roundimplies;", "\u2970"), "&rrightarrow;", "\u21DB"), "&rscr;", "\u211B"), "&rsh;", "\u21B1"), "&ruledelayed;", "\u29F4"), "&shchcy;", "\u0429"), "&shcy;", "\u0428"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&softcy;", "\u042C"), "&sacute;", "\u015A"), "&sc;", "\u2ABC"), "&scaron;", "\u0160"), "&scedil;", "\u015E"), "&scirc;", "\u015C"), "&scy;", "\u0421"), "&sfr;", "\uD835\uDD16"), "&shortdownarrow;", "\u2193"), "&shortleftarrow;", "\u2190"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&shortrightarrow;", "\u2192"), "&shortuparrow;", "\u2191"), "&sigma;", "\u03A3"), "&smallcircle;", "\u2218"), "&sopf;", "\uD835\uDD4A"), "&sqrt;", "\u221A"), "&square;", "\u25A1"), "&squareintersection;", "\u2293"), "&squaresubset;", "\u228F"), "&squaresubsetequal;", "\u2291"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&squaresuperset;", "\u2290"), "&squaresupersetequal;", "\u2292"), "&squareunion;", "\u2294"), "&sscr;", "\uD835\uDCAE"), "&star;", "\u22C6"), "&sub;", "\u22D0"), "&subset;", "\u22D0"), "&subsetequal;", "\u2286"), "&succeeds;", "\u227B"), "&succeedsequal;", "\u2AB0"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&succeedsslantequal;", "\u227D"), "&succeedstilde;", "\u227F"), "&suchthat;", "\u220B"), "&sum;", "\u2211"), "&sup;", "\u22D1"), "&superset;", "\u2283"), "&supersetequal;", "\u2287"), "&supset;", "\u22D1"), "&thorn;", "\xDE"), "&trade;", "\u2122"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&tshcy;", "\u040B"), "&tscy;", "\u0426"), "&tab;", "TAB"), "&tau;", "\u03A4"), "&tcaron;", "\u0164"), "&tcedil;", "\u0162"), "&tcy;", "\u0422"), "&tfr;", "\uD835\uDD17"), "&therefore;", "\u2234"), "&theta;", "\u0398"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&thickspace;", "\u205F"), "&thinspace;", "\u2009"), "&tilde;", "\u223C"), "&tildeequal;", "\u2243"), "&tildefullequal;", "\u2245"), "&tildetilde;", "\u2248"), "&topf;", "\uD835\uDD4B"), "&tripledot;", "\u20DB"), "&tscr;", "\uD835\uDCAF"), "&tstrok;", "\u0166"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&uacute;", "\xDA"), "&uarr;", "\u219F"), "&uarrocir;", "\u2949"), "&ubrcy;", "\u040E"), "&ubreve;", "\u016C"), "&ucirc;", "\xDB"), "&ucy;", "\u0423"), "&udblac;", "\u0170"), "&ufr;", "\uD835\uDD18"), "&ugrave;", "\xD9"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&umacr;", "\u016A"), "&underbar;", "_"), "&underbrace;", "\u23DF"), "&underbracket;", "\u23B5"), "&underparenthesis;", "\u23DD"), "&union;", "\u22C3"), "&unionplus;", "\u228E"), "&uogon;", "\u0172"), "&uopf;", "\uD835\uDD4C"), "&uparrow;", "\u2191"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&uparrowbar;", "\u2912"), "&uparrowdownarrow;", "\u21C5"), "&updownarrow;", "\u2195"), "&upequilibrium;", "\u296E"), "&uptee;", "\u22A5"), "&upteearrow;", "\u21A5"), "&uparrow;", "\u21D1"), "&updownarrow;", "\u21D5"), "&upperleftarrow;", "\u2196"), "&upperrightarrow;", "\u2197"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&upsi;", "\u03D2"), "&upsilon;", "\u03A5"), "&uring;", "\u016E"), "&uscr;", "\uD835\uDCB0"), "&utilde;", "\u0168"), "&uuml;", "\xDC"), "&vdash;", "\u22AB"), "&vbar;", "\u2AEB"), "&vcy;", "\u0412"), "&vdash;", "\u22A9"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&vdashl;", "\u2AE6"), "&vee;", "\u22C1"), "&verbar;", "\u2016"), "&vert;", "\u2016"), "&verticalbar;", "\u2223"), "&verticalline;", "|"), "&verticalseparator;", "\u2758"), "&verticaltilde;", "\u2240"), "&verythinspace;", "\u200A"), "&vfr;", "\uD835\uDD19"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&vopf;", "\uD835\uDD4D"), "&vscr;", "\uD835\uDCB1"), "&vvdash;", "\u22AA"), "&wcirc;", "\u0174"), "&wedge;", "\u22C0"), "&wfr;", "\uD835\uDD1A"), "&wopf;", "\uD835\uDD4E"), "&wscr;", "\uD835\uDCB2"), "&xfr;", "\uD835\uDD1B"), "&xi;", "\u039E"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&xopf;", "\uD835\uDD4F"), "&xscr;", "\uD835\uDCB3"), "&yacy;", "\u042F"), "&yicy;", "\u0407"), "&yucy;", "\u042E"), "&yacute;", "\xDD"), "&ycirc;", "\u0176"), "&ycy;", "\u042B"), "&yfr;", "\uD835\uDD1C"), "&yopf;", "\uD835\uDD50"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&yscr;", "\uD835\uDCB4"), "&yuml;", "\u0178"), "&zhcy;", "\u0416"), "&zacute;", "\u0179"), "&zcaron;", "\u017D"), "&zcy;", "\u0417"), "&zdot;", "\u017B"), "&zerowidthspace;", "ZWSP"), "&zeta;", "\u0396"), "&zfr;", "\u2128"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&zopf;", "\u2124"), "&zscr;", "\uD835\uDCB5"), "&aacute;", "\xE1"), "&abreve;", "\u0103"), "&ac;", "\u223E"), "&ace;", "\u223E\u0333"), "&acd;", "\u223F"), "&acirc;", "\xE2"), "&acute;", "\xB4"), "&acy;", "\u0430"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&aelig;", "\xE6"), "&af;", "()"), "&afr;", "\uD835\uDD1E"), "&agrave;", "\xE0"), "&alefsym;", "\u2135"), "&aleph;", "\u2135"), "&alpha;", "\u03B1"), "&amacr;", "\u0101"), "&amalg;", "\u2A3F"), "&amp;", "&"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&and;", "\u2227"), "&andand;", "\u2A55"), "&andd;", "\u2A5C"), "&andslope;", "\u2A58"), "&andv;", "\u2A5A"), "&ang;", "\u2220"), "&ange;", "\u29A4"), "&angle;", "\u2220"), "&angmsd;", "\u2221"), "&angmsdaa;", "\u29A8"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&angmsdab;", "\u29A9"), "&angmsdac;", "\u29AA"), "&angmsdad;", "\u29AB"), "&angmsdae;", "\u29AC"), "&angmsdaf;", "\u29AD"), "&angmsdag;", "\u29AE"), "&angmsdah;", "\u29AF"), "&angrt;", "\u221F"), "&angrtvb;", "\u22BE"), "&angrtvbd;", "\u299D"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&angsph;", "\u2222"), "&angst;", "\xC5"), "&aogon;", "\u0105"), "&aopf;", "\uD835\uDD52"), "&ap;", "\u2248"), "&ape;", "\u2A70"), "&apacir;", "\u2A6F"), "&ape;", "\u224A"), "&apid;", "\u224B"), "&apos;", "'"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&approx;", "\u2248"), "&approxeq;", "\u224A"), "&aring;", "\xE5"), "&ascr;", "\uD835\uDCB6"), "&ast;", "*"), "&asymp;", "\u2248"), "&asympeq;", "\u224D"), "&atilde;", "\xE3"), "&auml;", "\xE4"), "&awconint;", "\u2233"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&awint;", "\u2A11"), "&bnot;", "\u2AED"), "&backcong;", "\u224C"), "&backepsilon;", "\u03F6"), "&backprime;", "\u2035"), "&backsim;", "\u223D"), "&backsimeq;", "\u22CD"), "&barvee;", "\u22BD"), "&barwed;", "\u2305"), "&barwedge;", "\u2305"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&bbrk;", "\u23B5"), "&bbrktbrk;", "\u23B6"), "&bcong;", "\u224C"), "&bcy;", "\u0431"), "&bdquo;", "\u201E"), "&becaus;", "\u2235"), "&because;", "\u2235"), "&bemptyv;", "\u29B0"), "&bepsi;", "\u03F6"), "&bernou;", "\u212C"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&beta;", "\u03B2"), "&beth;", "\u2136"), "&between;", "\u226C"), "&bfr;", "\uD835\uDD1F"), "&bigcap;", "\u22C2"), "&bigcirc;", "\u25EF"), "&bigcup;", "\u22C3"), "&bigodot;", "\u2A00"), "&bigoplus;", "\u2A01"), "&bigotimes;", "\u2A02"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&bigsqcup;", "\u2A06"), "&bigstar;", "\u2605"), "&bigtriangledown;", "\u25BD"), "&bigtriangleup;", "\u25B3"), "&biguplus;", "\u2A04"), "&bigvee;", "\u22C1"), "&bigwedge;", "\u22C0"), "&bkarow;", "\u290D"), "&blacklozenge;", "\u29EB"), "&blacksquare;", "\u25AA"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&blacktriangle;", "\u25B4"), "&blacktriangledown;", "\u25BE"), "&blacktriangleleft;", "\u25C2"), "&blacktriangleright;", "\u25B8"), "&blank;", "\u2423"), "&blk12;", "\u2592"), "&blk14;", "\u2591"), "&blk34;", "\u2593"), "&block;", "\u2588"), "&bne;", "=\u20E5"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&bnequiv;", "\u2261\u20E5"), "&bnot;", "\u2310"), "&bopf;", "\uD835\uDD53"), "&bot;", "\u22A5"), "&bottom;", "\u22A5"), "&bowtie;", "\u22C8"), "&boxdl;", "\u2557"), "&boxdr;", "\u2554"), "&boxdl;", "\u2556"), "&boxdr;", "\u2553"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&boxh;", "\u2550"), "&boxhd;", "\u2566"), "&boxhu;", "\u2569"), "&boxhd;", "\u2564"), "&boxhu;", "\u2567"), "&boxul;", "\u255D"), "&boxur;", "\u255A"), "&boxul;", "\u255C"), "&boxur;", "\u2559"), "&boxv;", "\u2551"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&boxvh;", "\u256C"), "&boxvl;", "\u2563"), "&boxvr;", "\u2560"), "&boxvh;", "\u256B"), "&boxvl;", "\u2562"), "&boxvr;", "\u255F"), "&boxbox;", "\u29C9"), "&boxdl;", "\u2555"), "&boxdr;", "\u2552"), "&boxdl;", "\u2510"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&boxdr;", "\u250C"), "&boxh;", "\u2500"), "&boxhd;", "\u2565"), "&boxhu;", "\u2568"), "&boxhd;", "\u252C"), "&boxhu;", "\u2534"), "&boxminus;", "\u229F"), "&boxplus;", "\u229E"), "&boxtimes;", "\u22A0"), "&boxul;", "\u255B"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&boxur;", "\u2558"), "&boxul;", "\u2518"), "&boxur;", "\u2514"), "&boxv;", "\u2502"), "&boxvh;", "\u256A"), "&boxvl;", "\u2561"), "&boxvr;", "\u255E"), "&boxvh;", "\u253C"), "&boxvl;", "\u2524"), "&boxvr;", "\u251C"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&bprime;", "\u2035"), "&breve;", "\u02D8"), "&brvbar;", "\xA6"), "&bscr;", "\uD835\uDCB7"), "&bsemi;", "\u204F"), "&bsim;", "\u223D"), "&bsime;", "\u22CD"), "&bsol;", "\\"), "&bsolb;", "\u29C5"), "&bsolhsub;", "\u27C8"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&bull;", "\u2022"), "&bullet;", "\u2022"), "&bump;", "\u224E"), "&bumpe;", "\u2AAE"), "&bumpe;", "\u224F"), "&bumpeq;", "\u224F"), "&cacute;", "\u0107"), "&cap;", "\u2229"), "&capand;", "\u2A44"), "&capbrcup;", "\u2A49"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&capcap;", "\u2A4B"), "&capcup;", "\u2A47"), "&capdot;", "\u2A40"), "&caps;", "\u2229\uFE00"), "&caret;", "\u2041"), "&caron;", "\u02C7"), "&ccaps;", "\u2A4D"), "&ccaron;", "\u010D"), "&ccedil;", "\xE7"), "&ccirc;", "\u0109"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&ccups;", "\u2A4C"), "&ccupssm;", "\u2A50"), "&cdot;", "\u010B"), "&cedil;", "\xB8"), "&cemptyv;", "\u29B2"), "&cent;", "\xA2"), "&centerdot;", "\xB7"), "&cfr;", "\uD835\uDD20"), "&chcy;", "\u0447"), "&check;", "\u2713"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&checkmark;", "\u2713"), "&chi;", "\u03C7"), "&cir;", "\u25CB"), "&cire;", "\u29C3"), "&circ;", "\u02C6"), "&circeq;", "\u2257"), "&circlearrowleft;", "\u21BA"), "&circlearrowright;", "\u21BB"), "&circledr;", "\xAE"), "&circleds;", "\u24C8"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&circledast;", "\u229B"), "&circledcirc;", "\u229A"), "&circleddash;", "\u229D"), "&cire;", "\u2257"), "&cirfnint;", "\u2A10"), "&cirmid;", "\u2AEF"), "&cirscir;", "\u29C2"), "&clubs;", "\u2663"), "&clubsuit;", "\u2663"), "&colon;", ":"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&colone;", "\u2254"), "&coloneq;", "\u2254"), "&comma;", ","), "&commat;", "@"), "&comp;", "\u2201"), "&compfn;", "\u2218"), "&complement;", "\u2201"), "&complexes;", "\u2102"), "&cong;", "\u2245"), "&congdot;", "\u2A6D"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&conint;", "\u222E"), "&copf;", "\uD835\uDD54"), "&coprod;", "\u2210"), "&copy;", "\xA9"), "&copysr;", "\u2117"), "&crarr;", "\u21B5"), "&cross;", "\u2717"), "&cscr;", "\uD835\uDCB8"), "&csub;", "\u2ACF"), "&csube;", "\u2AD1"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&csup;", "\u2AD0"), "&csupe;", "\u2AD2"), "&ctdot;", "\u22EF"), "&cudarrl;", "\u2938"), "&cudarrr;", "\u2935"), "&cuepr;", "\u22DE"), "&cuesc;", "\u22DF"), "&cularr;", "\u21B6"), "&cularrp;", "\u293D"), "&cup;", "\u222A"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&cupbrcap;", "\u2A48"), "&cupcap;", "\u2A46"), "&cupcup;", "\u2A4A"), "&cupdot;", "\u228D"), "&cupor;", "\u2A45"), "&cups;", "\u222A\uFE00"), "&curarr;", "\u21B7"), "&curarrm;", "\u293C"), "&curlyeqprec;", "\u22DE"), "&curlyeqsucc;", "\u22DF"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&curlyvee;", "\u22CE"), "&curlywedge;", "\u22CF"), "&curren;", "\xA4"), "&curvearrowleft;", "\u21B6"), "&curvearrowright;", "\u21B7"), "&cuvee;", "\u22CE"), "&cuwed;", "\u22CF"), "&cwconint;", "\u2232"), "&cwint;", "\u2231"), "&cylcty;", "\u232D"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&darr;", "\u21D3"), "&dhar;", "\u2965"), "&dagger;", "\u2020"), "&daleth;", "\u2138"), "&darr;", "\u2193"), "&dash;", "\u2010"), "&dashv;", "\u22A3"), "&dbkarow;", "\u290F"), "&dblac;", "\u02DD"), "&dcaron;", "\u010F"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&dcy;", "\u0434"), "&dd;", "\u2146"), "&ddagger;", "\u2021"), "&ddarr;", "\u21CA"), "&ddotseq;", "\u2A77"), "&deg;", "\xB0"), "&delta;", "\u03B4"), "&demptyv;", "\u29B1"), "&dfisht;", "\u297F"), "&dfr;", "\uD835\uDD21"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&dharl;", "\u21C3"), "&dharr;", "\u21C2"), "&diam;", "\u22C4"), "&diamond;", "\u22C4"), "&diamondsuit;", "\u2666"), "&diams;", "\u2666"), "&die;", "\xA8"), "&digamma;", "\u03DD"), "&disin;", "\u22F2"), "&div;", "\xF7"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&divide;", "\xF7"), "&divideontimes;", "\u22C7"), "&divonx;", "\u22C7"), "&djcy;", "\u0452"), "&dlcorn;", "\u231E"), "&dlcrop;", "\u230D"), "&dollar;", "$"), "&dopf;", "\uD835\uDD55"), "&dot;", "\u02D9"), "&doteq;", "\u2250"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&doteqdot;", "\u2251"), "&dotminus;", "\u2238"), "&dotplus;", "\u2214"), "&dotsquare;", "\u22A1"), "&doublebarwedge;", "\u2306"), "&downarrow;", "\u2193"), "&downdownarrows;", "\u21CA"), "&downharpoonleft;", "\u21C3"), "&downharpoonright;", "\u21C2"), "&drbkarow;", "\u2910"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&drcorn;", "\u231F"), "&drcrop;", "\u230C"), "&dscr;", "\uD835\uDCB9"), "&dscy;", "\u0455"), "&dsol;", "\u29F6"), "&dstrok;", "\u0111"), "&dtdot;", "\u22F1"), "&dtri;", "\u25BF"), "&dtrif;", "\u25BE"), "&duarr;", "\u21F5"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&duhar;", "\u296F"), "&dwangle;", "\u29A6"), "&dzcy;", "\u045F"), "&dzigrarr;", "\u27FF"), "&eddot;", "\u2A77"), "&edot;", "\u2251"), "&eacute;", "\xE9"), "&easter;", "\u2A6E"), "&ecaron;", "\u011B"), "&ecir;", "\u2256"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&ecirc;", "\xEA"), "&ecolon;", "\u2255"), "&ecy;", "\u044D"), "&edot;", "\u0117"), "&ee;", "\u2147"), "&efdot;", "\u2252"), "&efr;", "\uD835\uDD22"), "&eg;", "\u2A9A"), "&egrave;", "\xE8"), "&egs;", "\u2A96"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&egsdot;", "\u2A98"), "&el;", "\u2A99"), "&elinters;", "\u23E7"), "&ell;", "\u2113"), "&els;", "\u2A95"), "&elsdot;", "\u2A97"), "&emacr;", "\u0113"), "&empty;", "\u2205"), "&emptyset;", "\u2205"), "&emptyv;", "\u2205"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&emsp13;", "\u2004"), "&emsp14;", "\u2005"), "&emsp;", "\u2003"), "&eng;", "\u014B"), "&ensp;", "\u2002"), "&eogon;", "\u0119"), "&eopf;", "\uD835\uDD56"), "&epar;", "\u22D5"), "&eparsl;", "\u29E3"), "&eplus;", "\u2A71"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&epsi;", "\u03B5"), "&epsilon;", "\u03B5"), "&epsiv;", "\u03F5"), "&eqcirc;", "\u2256"), "&eqcolon;", "\u2255"), "&eqsim;", "\u2242"), "&eqslantgtr;", "\u2A96"), "&eqslantless;", "\u2A95"), "&equals;", "="), "&equest;", "\u225F"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&equiv;", "\u2261"), "&equivdd;", "\u2A78"), "&eqvparsl;", "\u29E5"), "&erdot;", "\u2253"), "&erarr;", "\u2971"), "&escr;", "\u212F"), "&esdot;", "\u2250"), "&esim;", "\u2242"), "&eta;", "\u03B7"), "&eth;", "\xF0"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&euml;", "\xEB"), "&euro;", "\u20AC"), "&excl;", "!"), "&exist;", "\u2203"), "&expectation;", "\u2130"), "&fallingdotseq;", "\u2252"), "&fcy;", "\u0444"), "&female;", "\u2640"), "&ffilig;", "\uFB03"), "&fflig;", "\uFB00"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&ffllig;", "\uFB04"), "&ffr;", "\uD835\uDD23"), "&filig;", "\uFB01"), "&fjlig;", "fj"), "&flat;", "\u266D"), "&fllig;", "\uFB02"), "&fltns;", "\u25B1"), "&fnof;", "\u0192"), "&fopf;", "\uD835\uDD57"), "&forall;", "\u2200"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&fork;", "\u22D4"), "&forkv;", "\u2AD9"), "&fpartint;", "\u2A0D"), "&frac12;", "\xBD"), "&frac13;", "\u2153"), "&frac14;", "\xBC"), "&frac15;", "\u2155"), "&frac16;", "\u2159"), "&frac18;", "\u215B"), "&frac23;", "\u2154"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&frac25;", "\u2156"), "&frac34;", "\xBE"), "&frac35;", "\u2157"), "&frac38;", "\u215C"), "&frac45;", "\u2158"), "&frac56;", "\u215A"), "&frac58;", "\u215D"), "&frac78;", "\u215E"), "&frasl;", "\u2044"), "&frown;", "\u2322"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&fscr;", "\uD835\uDCBB"), "&ge;", "\u2267"), "&gel;", "\u2A8C"), "&gacute;", "\u01F5"), "&gamma;", "\u03B3"), "&gammad;", "\u03DD"), "&gap;", "\u2A86"), "&gbreve;", "\u011F"), "&gcirc;", "\u011D"), "&gcy;", "\u0433"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&gdot;", "\u0121"), "&ge;", "\u2265"), "&gel;", "\u22DB"), "&geq;", "\u2265"), "&geqq;", "\u2267"), "&geqslant;", "\u2A7E"), "&ges;", "\u2A7E"), "&gescc;", "\u2AA9"), "&gesdot;", "\u2A80"), "&gesdoto;", "\u2A82"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&gesdotol;", "\u2A84"), "&gesl;", "\u22DB\uFE00"), "&gesles;", "\u2A94"), "&gfr;", "\uD835\uDD24"), "&gg;", "\u226B"), "&ggg;", "\u22D9"), "&gimel;", "\u2137"), "&gjcy;", "\u0453"), "&gl;", "\u2277"), "&gle;", "\u2A92"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&gla;", "\u2AA5"), "&glj;", "\u2AA4"), "&gne;", "\u2269"), "&gnap;", "\u2A8A"), "&gnapprox;", "\u2A8A"), "&gne;", "\u2A88"), "&gneq;", "\u2A88"), "&gneqq;", "\u2269"), "&gnsim;", "\u22E7"), "&gopf;", "\uD835\uDD58"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&grave;", "`"), "&gscr;", "\u210A"), "&gsim;", "\u2273"), "&gsime;", "\u2A8E"), "&gsiml;", "\u2A90"), "&gt;", ">"), "&gtcc;", "\u2AA7"), "&gtcir;", "\u2A7A"), "&gtdot;", "\u22D7"), "&gtlpar;", "\u2995"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&gtquest;", "\u2A7C"), "&gtrapprox;", "\u2A86"), "&gtrarr;", "\u2978"), "&gtrdot;", "\u22D7"), "&gtreqless;", "\u22DB"), "&gtreqqless;", "\u2A8C"), "&gtrless;", "\u2277"), "&gtrsim;", "\u2273"), "&gvertneqq;", "\u2269\uFE00"), "&gvne;", "\u2269\uFE00"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&harr;", "\u21D4"), "&hairsp;", "\u200A"), "&half;", "\xBD"), "&hamilt;", "\u210B"), "&hardcy;", "\u044A"), "&harr;", "\u2194"), "&harrcir;", "\u2948"), "&harrw;", "\u21AD"), "&hbar;", "\u210F"), "&hcirc;", "\u0125"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&hearts;", "\u2665"), "&heartsuit;", "\u2665"), "&hellip;", "\u2026"), "&hercon;", "\u22B9"), "&hfr;", "\uD835\uDD25"), "&hksearow;", "\u2925"), "&hkswarow;", "\u2926"), "&hoarr;", "\u21FF"), "&homtht;", "\u223B"), "&hookleftarrow;", "\u21A9"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&hookrightarrow;", "\u21AA"), "&hopf;", "\uD835\uDD59"), "&horbar;", "\u2015"), "&hscr;", "\uD835\uDCBD"), "&hslash;", "\u210F"), "&hstrok;", "\u0127"), "&hybull;", "\u2043"), "&hyphen;", "\u2010"), "&iacute;", "\xED"), "&ic;", ","), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&icirc;", "\xEE"), "&icy;", "\u0438"), "&iecy;", "\u0435"), "&iexcl;", "\xA1"), "&iff;", "\u21D4"), "&ifr;", "\uD835\uDD26"), "&igrave;", "\xEC"), "&ii;", "\u2148"), "&iiiint;", "\u2A0C"), "&iiint;", "\u222D"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&iinfin;", "\u29DC"), "&iiota;", "\u2129"), "&ijlig;", "\u0133"), "&imacr;", "\u012B"), "&image;", "\u2111"), "&imagline;", "\u2110"), "&imagpart;", "\u2111"), "&imath;", "\u0131"), "&imof;", "\u22B7"), "&imped;", "\u01B5"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&in;", "\u2208"), "&incare;", "\u2105"), "&infin;", "\u221E"), "&infintie;", "\u29DD"), "&inodot;", "\u0131"), "&int;", "\u222B"), "&intcal;", "\u22BA"), "&integers;", "\u2124"), "&intercal;", "\u22BA"), "&intlarhk;", "\u2A17"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&intprod;", "\u2A3C"), "&iocy;", "\u0451"), "&iogon;", "\u012F"), "&iopf;", "\uD835\uDD5A"), "&iota;", "\u03B9"), "&iprod;", "\u2A3C"), "&iquest;", "\xBF"), "&iscr;", "\uD835\uDCBE"), "&isin;", "\u2208"), "&isine;", "\u22F9"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&isindot;", "\u22F5"), "&isins;", "\u22F4"), "&isinsv;", "\u22F3"), "&isinv;", "\u2208"), "&it;", "\xD7"), "&itilde;", "\u0129"), "&iukcy;", "\u0456"), "&iuml;", "\xEF"), "&jcirc;", "\u0135"), "&jcy;", "\u0439"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&jfr;", "\uD835\uDD27"), "&jmath;", "\u0237"), "&jopf;", "\uD835\uDD5B"), "&jscr;", "\uD835\uDCBF"), "&jsercy;", "\u0458"), "&jukcy;", "\u0454"), "&kappa;", "\u03BA"), "&kappav;", "\u03F0"), "&kcedil;", "\u0137"), "&kcy;", "\u043A"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&kfr;", "\uD835\uDD28"), "&kgreen;", "\u0138"), "&khcy;", "\u0445"), "&kjcy;", "\u045C"), "&kopf;", "\uD835\uDD5C"), "&kscr;", "\uD835\uDCC0"), "&laarr;", "\u21DA"), "&larr;", "\u21D0"), "&latail;", "\u291B"), "&lbarr;", "\u290E"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&le;", "\u2266"), "&leg;", "\u2A8B"), "&lhar;", "\u2962"), "&lacute;", "\u013A"), "&laemptyv;", "\u29B4"), "&lagran;", "\u2112"), "&lambda;", "\u03BB"), "&lang;", "\u27E8"), "&langd;", "\u2991"), "&langle;", "\u27E8"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&lap;", "\u2A85"), "&laquo;", "\xAB"), "&larr;", "\u2190"), "&larrb;", "\u21E4"), "&larrbfs;", "\u291F"), "&larrfs;", "\u291D"), "&larrhk;", "\u21A9"), "&larrlp;", "\u21AB"), "&larrpl;", "\u2939"), "&larrsim;", "\u2973"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&larrtl;", "\u21A2"), "&lat;", "\u2AAB"), "&latail;", "\u2919"), "&late;", "\u2AAD"), "&lates;", "\u2AAD\uFE00"), "&lbarr;", "\u290C"), "&lbbrk;", "\u2772"), "&lbrace;", "{"), "&lbrack;", "["), "&lbrke;", "\u298B"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&lbrksld;", "\u298F"), "&lbrkslu;", "\u298D"), "&lcaron;", "\u013E"), "&lcedil;", "\u013C"), "&lceil;", "\u2308"), "&lcub;", "{"), "&lcy;", "\u043B"), "&ldca;", "\u2936"), "&ldquo;", "\u201C"), "&ldquor;", "\u201E"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&ldrdhar;", "\u2967"), "&ldrushar;", "\u294B"), "&ldsh;", "\u21B2"), "&le;", "\u2264"), "&leftarrow;", "\u2190"), "&leftarrowtail;", "\u21A2"), "&leftharpoondown;", "\u21BD"), "&leftharpoonup;", "\u21BC"), "&leftleftarrows;", "\u21C7"), "&leftrightarrow;", "\u2194"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&leftrightarrows;", "\u21C6"), "&leftrightharpoons;", "\u21CB"), "&leftrightsquigarrow;", "\u21AD"), "&leftthreetimes;", "\u22CB"), "&leg;", "\u22DA"), "&leq;", "\u2264"), "&leqq;", "\u2266"), "&leqslant;", "\u2A7D"), "&les;", "\u2A7D"), "&lescc;", "\u2AA8"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&lesdot;", "\u2A7F"), "&lesdoto;", "\u2A81"), "&lesdotor;", "\u2A83"), "&lesg;", "\u22DA\uFE00"), "&lesges;", "\u2A93"), "&lessapprox;", "\u2A85"), "&lessdot;", "\u22D6"), "&lesseqgtr;", "\u22DA"), "&lesseqqgtr;", "\u2A8B"), "&lessgtr;", "\u2276"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&lesssim;", "\u2272"), "&lfisht;", "\u297C"), "&lfloor;", "\u230A"), "&lfr;", "\uD835\uDD29"), "&lg;", "\u2276"), "&lge;", "\u2A91"), "&lhard;", "\u21BD"), "&lharu;", "\u21BC"), "&lharul;", "\u296A"), "&lhblk;", "\u2584"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&ljcy;", "\u0459"), "&ll;", "\u226A"), "&llarr;", "\u21C7"), "&llcorner;", "\u231E"), "&llhard;", "\u296B"), "&lltri;", "\u25FA"), "&lmidot;", "\u0140"), "&lmoust;", "\u23B0"), "&lmoustache;", "\u23B0"), "&lne;", "\u2268"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&lnap;", "\u2A89"), "&lnapprox;", "\u2A89"), "&lne;", "\u2A87"), "&lneq;", "\u2A87"), "&lneqq;", "\u2268"), "&lnsim;", "\u22E6"), "&loang;", "\u27EC"), "&loarr;", "\u21FD"), "&lobrk;", "\u27E6"), "&longleftarrow;", "\u27F5"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&longleftrightarrow;", "\u27F7"), "&longmapsto;", "\u27FC"), "&longrightarrow;", "\u27F6"), "&looparrowleft;", "\u21AB"), "&looparrowright;", "\u21AC"), "&lopar;", "\u2985"), "&lopf;", "\uD835\uDD5D"), "&loplus;", "\u2A2D"), "&lotimes;", "\u2A34"), "&lowast;", "\u2217"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&lowbar;", "_"), "&loz;", "\u25CA"), "&lozenge;", "\u25CA"), "&lozf;", "\u29EB"), "&lpar;", "("), "&lparlt;", "\u2993"), "&lrarr;", "\u21C6"), "&lrcorner;", "\u231F"), "&lrhar;", "\u21CB"), "&lrhard;", "\u296D"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&lrm;", "LRM"), "&lrtri;", "\u22BF"), "&lsaquo;", "\u2039"), "&lscr;", "\uD835\uDCC1"), "&lsh;", "\u21B0"), "&lsim;", "\u2272"), "&lsime;", "\u2A8D"), "&lsimg;", "\u2A8F"), "&lsqb;", "["), "&lsquo;", "\u2018"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&lsquor;", "\u201A"), "&lstrok;", "\u0142"), "&lt;", "<"), "&ltcc;", "\u2AA6"), "&ltcir;", "\u2A79"), "&ltdot;", "\u22D6"), "&lthree;", "\u22CB"), "&ltimes;", "\u22C9"), "&ltlarr;", "\u2976"), "&ltquest;", "\u2A7B"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&ltrpar;", "\u2996"), "&ltri;", "\u25C3"), "&ltrie;", "\u22B4"), "&ltrif;", "\u25C2"), "&lurdshar;", "\u294A"), "&luruhar;", "\u2966"), "&lvertneqq;", "\u2268\uFE00"), "&lvne;", "\u2268\uFE00"), "&mddot;", "\u223A"), "&macr;", "\xAF"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&male;", "\u2642"), "&malt;", "\u2720"), "&maltese;", "\u2720"), "&map;", "\u21A6"), "&mapsto;", "\u21A6"), "&mapstodown;", "\u21A7"), "&mapstoleft;", "\u21A4"), "&mapstoup;", "\u21A5"), "&marker;", "\u25AE"), "&mcomma;", "\u2A29"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&mcy;", "\u043C"), "&mdash;", "\u2014"), "&measuredangle;", "\u2221"), "&mfr;", "\uD835\uDD2A"), "&mho;", "\u2127"), "&micro;", "\xB5"), "&mid;", "\u2223"), "&midast;", "*"), "&midcir;", "\u2AF0"), "&middot;", "\xB7"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&minus;", "\u2212"), "&minusb;", "\u229F"), "&minusd;", "\u2238"), "&minusdu;", "\u2A2A"), "&mlcp;", "\u2ADB"), "&mldr;", "\u2026"), "&mnplus;", "\u2213"), "&models;", "\u22A7"), "&mopf;", "\uD835\uDD5E"), "&mp;", "\u2213"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&mscr;", "\uD835\uDCC2"), "&mstpos;", "\u223E"), "&mu;", "\u03BC"), "&multimap;", "\u22B8"), "&mumap;", "\u22B8"), "&ngg;", "\u22D9\u0338"), "&ngt;", "\u226B\u20D2"), "&ngtv;", "\u226B\u0338"), "&nleftarrow;", "\u21CD"), "&nleftrightarrow;", "\u21CE"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&nll;", "\u22D8\u0338"), "&nlt;", "\u226A\u20D2"), "&nltv;", "\u226A\u0338"), "&nrightarrow;", "\u21CF"), "&nvdash;", "\u22AF"), "&nvdash;", "\u22AE"), "&nabla;", "\u2207"), "&nacute;", "\u0144"), "&nang;", "\u2220\u20D2"), "&nap;", "\u2249"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&nape;", "\u2A70\u0338"), "&napid;", "\u224B\u0338"), "&napos;", "\u0149"), "&napprox;", "\u2249"), "&natur;", "\u266E"), "&natural;", "\u266E"), "&naturals;", "\u2115"), "&nbsp;", "\xA0"), "&nbump;", "\u224E\u0338"), "&nbumpe;", "\u224F\u0338"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&ncap;", "\u2A43"), "&ncaron;", "\u0148"), "&ncedil;", "\u0146"), "&ncong;", "\u2247"), "&ncongdot;", "\u2A6D\u0338"), "&ncup;", "\u2A42"), "&ncy;", "\u043D"), "&ndash;", "\u2013"), "&ne;", "\u2260"), "&nearr;", "\u21D7"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&nearhk;", "\u2924"), "&nearr;", "\u2197"), "&nearrow;", "\u2197"), "&nedot;", "\u2250\u0338"), "&nequiv;", "\u2262"), "&nesear;", "\u2928"), "&nesim;", "\u2242\u0338"), "&nexist;", "\u2204"), "&nexists;", "\u2204"), "&nfr;", "\uD835\uDD2B"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&nge;", "\u2267\u0338"), "&nge;", "\u2271"), "&ngeq;", "\u2271"), "&ngeqq;", "\u2267\u0338"), "&ngeqslant;", "\u2A7E\u0338"), "&nges;", "\u2A7E\u0338"), "&ngsim;", "\u2275"), "&ngt;", "\u226F"), "&ngtr;", "\u226F"), "&nharr;", "\u21CE"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&nharr;", "\u21AE"), "&nhpar;", "\u2AF2"), "&ni;", "\u220B"), "&nis;", "\u22FC"), "&nisd;", "\u22FA"), "&niv;", "\u220B"), "&njcy;", "\u045A"), "&nlarr;", "\u21CD"), "&nle;", "\u2266\u0338"), "&nlarr;", "\u219A"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&nldr;", "\u2025"), "&nle;", "\u2270"), "&nleftarrow;", "\u219A"), "&nleftrightarrow;", "\u21AE"), "&nleq;", "\u2270"), "&nleqq;", "\u2266\u0338"), "&nleqslant;", "\u2A7D\u0338"), "&nles;", "\u2A7D\u0338"), "&nless;", "\u226E"), "&nlsim;", "\u2274"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&nlt;", "\u226E"), "&nltri;", "\u22EA"), "&nltrie;", "\u22EC"), "&nmid;", "\u2224"), "&nopf;", "\uD835\uDD5F"), "&not;", "\xAC"), "&notin;", "\u2209"), "&notine;", "\u22F9\u0338"), "&notindot;", "\u22F5\u0338"), "&notinva;", "\u2209"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&notinvb;", "\u22F7"), "&notinvc;", "\u22F6"), "&notni;", "\u220C"), "&notniva;", "\u220C"), "&notnivb;", "\u22FE"), "&notnivc;", "\u22FD"), "&npar;", "\u2226"), "&nparallel;", "\u2226"), "&nparsl;", "\u2AFD\u20E5"), "&npart;", "\u2202\u0338"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&npolint;", "\u2A14"), "&npr;", "\u2280"), "&nprcue;", "\u22E0"), "&npre;", "\u2AAF\u0338"), "&nprec;", "\u2280"), "&npreceq;", "\u2AAF\u0338"), "&nrarr;", "\u21CF"), "&nrarr;", "\u219B"), "&nrarrc;", "\u2933\u0338"), "&nrarrw;", "\u219D\u0338"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&nrightarrow;", "\u219B"), "&nrtri;", "\u22EB"), "&nrtrie;", "\u22ED"), "&nsc;", "\u2281"), "&nsccue;", "\u22E1"), "&nsce;", "\u2AB0\u0338"), "&nscr;", "\uD835\uDCC3"), "&nshortmid;", "\u2224"), "&nshortparallel;", "\u2226"), "&nsim;", "\u2241"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&nsime;", "\u2244"), "&nsimeq;", "\u2244"), "&nsmid;", "\u2224"), "&nspar;", "\u2226"), "&nsqsube;", "\u22E2"), "&nsqsupe;", "\u22E3"), "&nsub;", "\u2284"), "&nsube;", "\u2AC5\u0338"), "&nsube;", "\u2288"), "&nsubset;", "\u2282\u20D2"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&nsubseteq;", "\u2288"), "&nsubseteqq;", "\u2AC5\u0338"), "&nsucc;", "\u2281"), "&nsucceq;", "\u2AB0\u0338"), "&nsup;", "\u2285"), "&nsupe;", "\u2AC6\u0338"), "&nsupe;", "\u2289"), "&nsupset;", "\u2283\u20D2"), "&nsupseteq;", "\u2289"), "&nsupseteqq;", "\u2AC6\u0338"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&ntgl;", "\u2279"), "&ntilde;", "\xF1"), "&ntlg;", "\u2278"), "&ntriangleleft;", "\u22EA"), "&ntrianglelefteq;", "\u22EC"), "&ntriangleright;", "\u22EB"), "&ntrianglerighteq;", "\u22ED"), "&nu;", "\u03BD"), "&num;", "#"), "&numero;", "\u2116"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&numsp;", "\u2007"), "&nvdash;", "\u22AD"), "&nvharr;", "\u2904"), "&nvap;", "\u224D\u20D2"), "&nvdash;", "\u22AC"), "&nvge;", "\u2265\u20D2"), "&nvgt;", ">\u20D2"), "&nvinfin;", "\u29DE"), "&nvlarr;", "\u2902"), "&nvle;", "\u2264\u20D2"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&nvlt;", "<\u20D2"), "&nvltrie;", "\u22B4\u20D2"), "&nvrarr;", "\u2903"), "&nvrtrie;", "\u22B5\u20D2"), "&nvsim;", "\u223C\u20D2"), "&nwarr;", "\u21D6"), "&nwarhk;", "\u2923"), "&nwarr;", "\u2196"), "&nwarrow;", "\u2196"), "&nwnear;", "\u2927"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&os;", "\u24C8"), "&oacute;", "\xF3"), "&oast;", "\u229B"), "&ocir;", "\u229A"), "&ocirc;", "\xF4"), "&ocy;", "\u043E"), "&odash;", "\u229D"), "&odblac;", "\u0151"), "&odiv;", "\u2A38"), "&odot;", "\u2299"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&odsold;", "\u29BC"), "&oelig;", "\u0153"), "&ofcir;", "\u29BF"), "&ofr;", "\uD835\uDD2C"), "&ogon;", "\u02DB"), "&ograve;", "\xF2"), "&ogt;", "\u29C1"), "&ohbar;", "\u29B5"), "&ohm;", "\u03A9"), "&oint;", "\u222E"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&olarr;", "\u21BA"), "&olcir;", "\u29BE"), "&olcross;", "\u29BB"), "&oline;", "\u203E"), "&olt;", "\u29C0"), "&omacr;", "\u014D"), "&omega;", "\u03C9"), "&omicron;", "\u03BF"), "&omid;", "\u29B6"), "&ominus;", "\u2296"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&oopf;", "\uD835\uDD60"), "&opar;", "\u29B7"), "&operp;", "\u29B9"), "&oplus;", "\u2295"), "&or;", "\u2228"), "&orarr;", "\u21BB"), "&ord;", "\u2A5D"), "&order;", "\u2134"), "&orderof;", "\u2134"), "&ordf;", "\xAA"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&ordm;", "\xBA"), "&origof;", "\u22B6"), "&oror;", "\u2A56"), "&orslope;", "\u2A57"), "&orv;", "\u2A5B"), "&oscr;", "\u2134"), "&oslash;", "\xF8"), "&osol;", "\u2298"), "&otilde;", "\xF5"), "&otimes;", "\u2297"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&otimesas;", "\u2A36"), "&ouml;", "\xF6"), "&ovbar;", "\u233D"), "&par;", "\u2225"), "&para;", "\xB6"), "&parallel;", "\u2225"), "&parsim;", "\u2AF3"), "&parsl;", "\u2AFD"), "&part;", "\u2202"), "&pcy;", "\u043F"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&percnt;", "%"), "&period;", "."), "&permil;", "\u2030"), "&perp;", "\u22A5"), "&pertenk;", "\u2031"), "&pfr;", "\uD835\uDD2D"), "&phi;", "\u03C6"), "&phiv;", "\u03D5"), "&phmmat;", "\u2133"), "&phone;", "\u260E"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&pi;", "\u03C0"), "&pitchfork;", "\u22D4"), "&piv;", "\u03D6"), "&planck;", "\u210F"), "&planckh;", "\u210E"), "&plankv;", "\u210F"), "&plus;", "+"), "&plusacir;", "\u2A23"), "&plusb;", "\u229E"), "&pluscir;", "\u2A22"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&plusdo;", "\u2214"), "&plusdu;", "\u2A25"), "&pluse;", "\u2A72"), "&plusmn;", "\xB1"), "&plussim;", "\u2A26"), "&plustwo;", "\u2A27"), "&pm;", "\xB1"), "&pointint;", "\u2A15"), "&popf;", "\uD835\uDD61"), "&pound;", "\xA3"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&pr;", "\u227A"), "&pre;", "\u2AB3"), "&prap;", "\u2AB7"), "&prcue;", "\u227C"), "&pre;", "\u2AAF"), "&prec;", "\u227A"), "&precapprox;", "\u2AB7"), "&preccurlyeq;", "\u227C"), "&preceq;", "\u2AAF"), "&precnapprox;", "\u2AB9"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&precneqq;", "\u2AB5"), "&precnsim;", "\u22E8"), "&precsim;", "\u227E"), "&prime;", "\u2032"), "&primes;", "\u2119"), "&prne;", "\u2AB5"), "&prnap;", "\u2AB9"), "&prnsim;", "\u22E8"), "&prod;", "\u220F"), "&profalar;", "\u232E"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&profline;", "\u2312"), "&profsurf;", "\u2313"), "&prop;", "\u221D"), "&propto;", "\u221D"), "&prsim;", "\u227E"), "&prurel;", "\u22B0"), "&pscr;", "\uD835\uDCC5"), "&psi;", "\u03C8"), "&puncsp;", "\u2008"), "&qfr;", "\uD835\uDD2E"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&qint;", "\u2A0C"), "&qopf;", "\uD835\uDD62"), "&qprime;", "\u2057"), "&qscr;", "\uD835\uDCC6"), "&quaternions;", "\u210D"), "&quatint;", "\u2A16"), "&quest;", "?"), "&questeq;", "\u225F"), "&quot;", "\""), "&raarr;", "\u21DB"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&rarr;", "\u21D2"), "&ratail;", "\u291C"), "&rbarr;", "\u290F"), "&rhar;", "\u2964"), "&race;", "\u223D\u0331"), "&racute;", "\u0155"), "&radic;", "\u221A"), "&raemptyv;", "\u29B3"), "&rang;", "\u27E9"), "&rangd;", "\u2992"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&range;", "\u29A5"), "&rangle;", "\u27E9"), "&raquo;", "\xBB"), "&rarr;", "\u2192"), "&rarrap;", "\u2975"), "&rarrb;", "\u21E5"), "&rarrbfs;", "\u2920"), "&rarrc;", "\u2933"), "&rarrfs;", "\u291E"), "&rarrhk;", "\u21AA"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&rarrlp;", "\u21AC"), "&rarrpl;", "\u2945"), "&rarrsim;", "\u2974"), "&rarrtl;", "\u21A3"), "&rarrw;", "\u219D"), "&ratail;", "\u291A"), "&ratio;", "\u2236"), "&rationals;", "\u211A"), "&rbarr;", "\u290D"), "&rbbrk;", "\u2773"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&rbrace;", "}"), "&rbrack;", "]"), "&rbrke;", "\u298C"), "&rbrksld;", "\u298E"), "&rbrkslu;", "\u2990"), "&rcaron;", "\u0159"), "&rcedil;", "\u0157"), "&rceil;", "\u2309"), "&rcub;", "}"), "&rcy;", "\u0440"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&rdca;", "\u2937"), "&rdldhar;", "\u2969"), "&rdquo;", "\u201D"), "&rdquor;", "\u201D"), "&rdsh;", "\u21B3"), "&real;", "\u211C"), "&realine;", "\u211B"), "&realpart;", "\u211C"), "&reals;", "\u211D"), "&rect;", "\u25AD"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&reg;", "\xAE"), "&rfisht;", "\u297D"), "&rfloor;", "\u230B"), "&rfr;", "\uD835\uDD2F"), "&rhard;", "\u21C1"), "&rharu;", "\u21C0"), "&rharul;", "\u296C"), "&rho;", "\u03C1"), "&rhov;", "\u03F1"), "&rightarrow;", "\u2192"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&rightarrowtail;", "\u21A3"), "&rightharpoondown;", "\u21C1"), "&rightharpoonup;", "\u21C0"), "&rightleftarrows;", "\u21C4"), "&rightleftharpoons;", "\u21CC"), "&rightrightarrows;", "\u21C9"), "&rightsquigarrow;", "\u219D"), "&rightthreetimes;", "\u22CC"), "&ring;", "\u02DA"), "&risingdotseq;", "\u2253"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&rlarr;", "\u21C4"), "&rlhar;", "\u21CC"), "&rlm;", "RLM"), "&rmoust;", "\u23B1"), "&rmoustache;", "\u23B1"), "&rnmid;", "\u2AEE"), "&roang;", "\u27ED"), "&roarr;", "\u21FE"), "&robrk;", "\u27E7"), "&ropar;", "\u2986"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&ropf;", "\uD835\uDD63"), "&roplus;", "\u2A2E"), "&rotimes;", "\u2A35"), "&rpar;", ")"), "&rpargt;", "\u2994"), "&rppolint;", "\u2A12"), "&rrarr;", "\u21C9"), "&rsaquo;", "\u203A"), "&rscr;", "\uD835\uDCC7"), "&rsh;", "\u21B1"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&rsqb;", "]"), "&rsquo;", "\u2019"), "&rsquor;", "\u2019"), "&rthree;", "\u22CC"), "&rtimes;", "\u22CA"), "&rtri;", "\u25B9"), "&rtrie;", "\u22B5"), "&rtrif;", "\u25B8"), "&rtriltri;", "\u29CE"), "&ruluhar;", "\u2968"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&rx;", "\u211E"), "&sacute;", "\u015B"), "&sbquo;", "\u201A"), "&sc;", "\u227B"), "&sce;", "\u2AB4"), "&scap;", "\u2AB8"), "&scaron;", "\u0161"), "&sccue;", "\u227D"), "&sce;", "\u2AB0"), "&scedil;", "\u015F"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&scirc;", "\u015D"), "&scne;", "\u2AB6"), "&scnap;", "\u2ABA"), "&scnsim;", "\u22E9"), "&scpolint;", "\u2A13"), "&scsim;", "\u227F"), "&scy;", "\u0441"), "&sdot;", "\u22C5"), "&sdotb;", "\u22A1"), "&sdote;", "\u2A66"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&searr;", "\u21D8"), "&searhk;", "\u2925"), "&searr;", "\u2198"), "&searrow;", "\u2198"), "&sect;", "\xA7"), "&semi;", ";"), "&seswar;", "\u2929"), "&setminus;", "\u2216"), "&setmn;", "\u2216"), "&sext;", "\u2736"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&sfr;", "\uD835\uDD30"), "&sfrown;", "\u2322"), "&sharp;", "\u266F"), "&shchcy;", "\u0449"), "&shcy;", "\u0448"), "&shortmid;", "\u2223"), "&shortparallel;", "\u2225"), "&shy;", "SHY"), "&sigma;", "\u03C3"), "&sigmaf;", "\u03C2"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&sigmav;", "\u03C2"), "&sim;", "\u223C"), "&simdot;", "\u2A6A"), "&sime;", "\u2243"), "&simeq;", "\u2243"), "&simg;", "\u2A9E"), "&simge;", "\u2AA0"), "&siml;", "\u2A9D"), "&simle;", "\u2A9F"), "&simne;", "\u2246"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&simplus;", "\u2A24"), "&simrarr;", "\u2972"), "&slarr;", "\u2190"), "&smallsetminus;", "\u2216"), "&smashp;", "\u2A33"), "&smeparsl;", "\u29E4"), "&smid;", "\u2223"), "&smile;", "\u2323"), "&smt;", "\u2AAA"), "&smte;", "\u2AAC"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&smtes;", "\u2AAC\uFE00"), "&softcy;", "\u044C"), "&sol;", "/"), "&solb;", "\u29C4"), "&solbar;", "\u233F"), "&sopf;", "\uD835\uDD64"), "&spades;", "\u2660"), "&spadesuit;", "\u2660"), "&spar;", "\u2225"), "&sqcap;", "\u2293"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&sqcaps;", "\u2293\uFE00"), "&sqcup;", "\u2294"), "&sqcups;", "\u2294\uFE00"), "&sqsub;", "\u228F"), "&sqsube;", "\u2291"), "&sqsubset;", "\u228F"), "&sqsubseteq;", "\u2291"), "&sqsup;", "\u2290"), "&sqsupe;", "\u2292"), "&sqsupset;", "\u2290"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&sqsupseteq;", "\u2292"), "&squ;", "\u25A1"), "&square;", "\u25A1"), "&squarf;", "\u25AA"), "&squf;", "\u25AA"), "&srarr;", "\u2192"), "&sscr;", "\uD835\uDCC8"), "&ssetmn;", "\u2216"), "&ssmile;", "\u2323"), "&sstarf;", "\u22C6"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&star;", "\u2606"), "&starf;", "\u2605"), "&straightepsilon;", "\u03F5"), "&straightphi;", "\u03D5"), "&strns;", "\xAF"), "&sub;", "\u2282"), "&sube;", "\u2AC5"), "&subdot;", "\u2ABD"), "&sube;", "\u2286"), "&subedot;", "\u2AC3"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&submult;", "\u2AC1"), "&subne;", "\u2ACB"), "&subne;", "\u228A"), "&subplus;", "\u2ABF"), "&subrarr;", "\u2979"), "&subset;", "\u2282"), "&subseteq;", "\u2286"), "&subseteqq;", "\u2AC5"), "&subsetneq;", "\u228A"), "&subsetneqq;", "\u2ACB"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&subsim;", "\u2AC7"), "&subsub;", "\u2AD5"), "&subsup;", "\u2AD3"), "&succ;", "\u227B"), "&succapprox;", "\u2AB8"), "&succcurlyeq;", "\u227D"), "&succeq;", "\u2AB0"), "&succnapprox;", "\u2ABA"), "&succneqq;", "\u2AB6"), "&succnsim;", "\u22E9"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&succsim;", "\u227F"), "&sum;", "\u2211"), "&sung;", "\u266A"), "&sup1;", "\xB9"), "&sup2;", "\xB2"), "&sup3;", "\xB3"), "&sup;", "\u2283"), "&supe;", "\u2AC6"), "&supdot;", "\u2ABE"), "&supdsub;", "\u2AD8"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&supe;", "\u2287"), "&supedot;", "\u2AC4"), "&suphsol;", "\u27C9"), "&suphsub;", "\u2AD7"), "&suplarr;", "\u297B"), "&supmult;", "\u2AC2"), "&supne;", "\u2ACC"), "&supne;", "\u228B"), "&supplus;", "\u2AC0"), "&supset;", "\u2283"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&supseteq;", "\u2287"), "&supseteqq;", "\u2AC6"), "&supsetneq;", "\u228B"), "&supsetneqq;", "\u2ACC"), "&supsim;", "\u2AC8"), "&supsub;", "\u2AD4"), "&supsup;", "\u2AD6"), "&swarr;", "\u21D9"), "&swarhk;", "\u2926"), "&swarr;", "\u2199"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&swarrow;", "\u2199"), "&swnwar;", "\u292A"), "&szlig;", "\xDF"), "&target;", "\u2316"), "&tau;", "\u03C4"), "&tbrk;", "\u23B4"), "&tcaron;", "\u0165"), "&tcedil;", "\u0163"), "&tcy;", "\u0442"), "&tdot;", "\u20DB"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&telrec;", "\u2315"), "&tfr;", "\uD835\uDD31"), "&there4;", "\u2234"), "&therefore;", "\u2234"), "&theta;", "\u03B8"), "&thetasym;", "\u03D1"), "&thetav;", "\u03D1"), "&thickapprox;", "\u2248"), "&thicksim;", "\u223C"), "&thinsp;", "\u2009"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&thkap;", "\u2248"), "&thksim;", "\u223C"), "&thorn;", "\xFE"), "&tilde;", "\u02DC"), "&times;", "\xD7"), "&timesb;", "\u22A0"), "&timesbar;", "\u2A31"), "&timesd;", "\u2A30"), "&tint;", "\u222D"), "&toea;", "\u2928"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&top;", "\u22A4"), "&topbot;", "\u2336"), "&topcir;", "\u2AF1"), "&topf;", "\uD835\uDD65"), "&topfork;", "\u2ADA"), "&tosa;", "\u2929"), "&tprime;", "\u2034"), "&trade;", "\u2122"), "&triangle;", "\u25B5"), "&triangledown;", "\u25BF"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&triangleleft;", "\u25C3"), "&trianglelefteq;", "\u22B4"), "&triangleq;", "\u225C"), "&triangleright;", "\u25B9"), "&trianglerighteq;", "\u22B5"), "&tridot;", "\u25EC"), "&trie;", "\u225C"), "&triminus;", "\u2A3A"), "&triplus;", "\u2A39"), "&trisb;", "\u29CD"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&tritime;", "\u2A3B"), "&trpezium;", "\u23E2"), "&tscr;", "\uD835\uDCC9"), "&tscy;", "\u0446"), "&tshcy;", "\u045B"), "&tstrok;", "\u0167"), "&twixt;", "\u226C"), "&twoheadleftarrow;", "\u219E"), "&twoheadrightarrow;", "\u21A0"), "&uarr;", "\u21D1"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&uhar;", "\u2963"), "&uacute;", "\xFA"), "&uarr;", "\u2191"), "&ubrcy;", "\u045E"), "&ubreve;", "\u016D"), "&ucirc;", "\xFB"), "&ucy;", "\u0443"), "&udarr;", "\u21C5"), "&udblac;", "\u0171"), "&udhar;", "\u296E"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&ufisht;", "\u297E"), "&ufr;", "\uD835\uDD32"), "&ugrave;", "\xF9"), "&uharl;", "\u21BF"), "&uharr;", "\u21BE"), "&uhblk;", "\u2580"), "&ulcorn;", "\u231C"), "&ulcorner;", "\u231C"), "&ulcrop;", "\u230F"), "&ultri;", "\u25F8"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&umacr;", "\u016B"), "&uml;", "\xA8"), "&uogon;", "\u0173"), "&uopf;", "\uD835\uDD66"), "&uparrow;", "\u2191"), "&updownarrow;", "\u2195"), "&upharpoonleft;", "\u21BF"), "&upharpoonright;", "\u21BE"), "&uplus;", "\u228E"), "&upsi;", "\u03C5"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&upsih;", "\u03D2"), "&upsilon;", "\u03C5"), "&upuparrows;", "\u21C8"), "&urcorn;", "\u231D"), "&urcorner;", "\u231D"), "&urcrop;", "\u230E"), "&uring;", "\u016F"), "&urtri;", "\u25F9"), "&uscr;", "\uD835\uDCCA"), "&utdot;", "\u22F0"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&utilde;", "\u0169"), "&utri;", "\u25B5"), "&utrif;", "\u25B4"), "&uuarr;", "\u21C8"), "&uuml;", "\xFC"), "&uwangle;", "\u29A7"), "&varr;", "\u21D5"), "&vbar;", "\u2AE8"), "&vbarv;", "\u2AE9"), "&vdash;", "\u22A8"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&vangrt;", "\u299C"), "&varepsilon;", "\u03F5"), "&varkappa;", "\u03F0"), "&varnothing;", "\u2205"), "&varphi;", "\u03D5"), "&varpi;", "\u03D6"), "&varpropto;", "\u221D"), "&varr;", "\u2195"), "&varrho;", "\u03F1"), "&varsigma;", "\u03C2"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&varsubsetneq;", "\u228A\uFE00"), "&varsubsetneqq;", "\u2ACB\uFE00"), "&varsupsetneq;", "\u228B\uFE00"), "&varsupsetneqq;", "\u2ACC\uFE00"), "&vartheta;", "\u03D1"), "&vartriangleleft;", "\u22B2"), "&vartriangleright;", "\u22B3"), "&vcy;", "\u0432"), "&vdash;", "\u22A2"), "&vee;", "\u2228"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&veebar;", "\u22BB"), "&veeeq;", "\u225A"), "&vellip;", "\u22EE"), "&verbar;", "|"), "&vert;", "|"), "&vfr;", "\uD835\uDD33"), "&vltri;", "\u22B2"), "&vnsub;", "\u2282\u20D2"), "&vnsup;", "\u2283\u20D2"), "&vopf;", "\uD835\uDD67"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&vprop;", "\u221D"), "&vrtri;", "\u22B3"), "&vscr;", "\uD835\uDCCB"), "&vsubne;", "\u2ACB\uFE00"), "&vsubne;", "\u228A\uFE00"), "&vsupne;", "\u2ACC\uFE00"), "&vsupne;", "\u228B\uFE00"), "&vzigzag;", "\u299A"), "&wcirc;", "\u0175"), "&wedbar;", "\u2A5F"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&wedge;", "\u2227"), "&wedgeq;", "\u2259"), "&weierp;", "\u2118"), "&wfr;", "\uD835\uDD34"), "&wopf;", "\uD835\uDD68"), "&wp;", "\u2118"), "&wr;", "\u2240"), "&wreath;", "\u2240"), "&wscr;", "\uD835\uDCCC"), "&xcap;", "\u22C2"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&xcirc;", "\u25EF"), "&xcup;", "\u22C3"), "&xdtri;", "\u25BD"), "&xfr;", "\uD835\uDD35"), "&xharr;", "\u27FA"), "&xharr;", "\u27F7"), "&xi;", "\u03BE"), "&xlarr;", "\u27F8"), "&xlarr;", "\u27F5"), "&xmap;", "\u27FC"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&xnis;", "\u22FB"), "&xodot;", "\u2A00"), "&xopf;", "\uD835\uDD69"), "&xoplus;", "\u2A01"), "&xotime;", "\u2A02"), "&xrarr;", "\u27F9"), "&xrarr;", "\u27F6"), "&xscr;", "\uD835\uDCCD"), "&xsqcup;", "\u2A06"), "&xuplus;", "\u2A04"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&xutri;", "\u25B3"), "&xvee;", "\u22C1"), "&xwedge;", "\u22C0"), "&yacute;", "\xFD"), "&yacy;", "\u044F"), "&ycirc;", "\u0177"), "&ycy;", "\u044B"), "&yen;", "\xA5"), "&yfr;", "\uD835\uDD36"), "&yicy;", "\u0457"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&yopf;", "\uD835\uDD6A"), "&yscr;", "\uD835\uDCCE"), "&yucy;", "\u044E"), "&yuml;", "\xFF"), "&zacute;", "\u017A"), "&zcaron;", "\u017E"), "&zcy;", "\u0437"), "&zdot;", "\u017C"), "&zeetrf;", "\u2128"), "&zeta;", "\u03B6"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_HtmlDecodeMap, "&zfr;", "\uD835\uDD37"), "&zhcy;", "\u0436"), "&zigrarr;", "\u21DD"), "&zopf;", "\uD835\uDD6B"), "&zscr;", "\uD835\uDCCF"), "&zwj;", "ZWJ"), "&zwnj;", "ZWNJ"), "angzarr;", "\u237C"));
var htmlEncodeIgnoreList = ['\t', '\n', ' ', '\r'];
var htmlDecodeIgnoreList = [];
var htmlEncode = exports.htmlEncode = function htmlEncode(x, ignoreList) {
  var arr = [];
  if ((0, _base.isSomeString)(x)) {
    if (!(0, _base.isArray)(ignoreList)) {
      ignoreList = htmlEncodeIgnoreList;
    }
    var _iterator = _createForOfIteratorHelper(x),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var ch = _step.value;
        if (ignoreList.indexOf(ch) < 0) {
          arr.push(HtmlEncodeMap[ch] || ch);
        } else {
          arr.push(ch);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return arr.join('');
};
var htmlDecode = exports.htmlDecode = function htmlDecode(x, ignoreList) {
  var arr = [];
  if ((0, _base.isSomeString)(x)) {
    if (!(0, _base.isArray)(ignoreList)) {
      ignoreList = htmlDecodeIgnoreList;
    }
    var state = 0;
    var temp = '';
    var _iterator2 = _createForOfIteratorHelper(x),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var ch = _step2.value;
        switch (state) {
          case 0:
            if (ch == '&') {
              arr.push(temp);
              temp = ch;
              state = 1;
            } else {
              temp += ch;
            }
            break;
          case 1:
            if (/[a-z0-9]/ig.test(ch)) {
              temp += ch;
            } else if (ch == ';') {
              temp += ch;
              if (ignoreList.indexOf(temp.toLowerCase()) < 0) {
                arr.push(HtmlDecodeMap[temp.toLowerCase()] || temp);
              } else {
                arr.push(temp);
              }
              temp = '';
              state = 0;
            } else {
              temp += ch;
              state = 0;
            }
            break;
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (temp) {
      if (ignoreList.indexOf(temp.toLowerCase()) < 0) {
        arr.push(HtmlDecodeMap[temp.toLowerCase()] || temp);
      } else {
        arr.push(temp);
      }
    }
  }
  return arr.join('');
};
