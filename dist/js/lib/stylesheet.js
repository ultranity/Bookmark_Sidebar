/*! (c) Philipp König under GPL-3.0 */
"use strict";!function(e){window.StylesheetHelper=function(s){var n={};this.init=function(){n=s.helper.model.getData("a/styles")},this.addStylesheets=function(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;null===o?o=e(document):(s.helper.font.addStylesheet(o),n.isEE&&s.opts.classes&&s.opts.classes.page&&s.opts.classes.page.ee&&o.find("body").addClass(s.opts.classes.page.ee));var a=null;a=0===o.find("head").length()?o.find("body"):o.find("head"),t.forEach(function(e){var s=new XMLHttpRequest;s.open("GET",chrome.extension.getURL("css/"+e+".css"),!0),s.onload=function(){if(s.response){var e=s.response;Object.keys(n).forEach(function(s){e=e.replace(new RegExp('"?%'+s+'"?',"g"),n[s])}),a.append("<style>"+e+"</style>")}},s.send()})}}}(jsu);