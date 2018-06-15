/*!
 * 
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
dojoWebpackJsonprealworld_app(["src/containers/EditorContainer"],{'./node_modules/umd-compat-loader/index.js?{}!./node_modules/ts-loader/index.js?{"onlyCompileBundledFiles":true,"instance":"dojo","compilerOptions":{}}!./node_modules/tslint-loader/index.js?{"configuration":{"rules":{"align":false,"ban":[],"class-name":true,"comment-format":[true,"check-space"],"curly":true,"eofline":true,"forin":false,"indent":[true,"tabs"],"interface-name":[true,"never-prefix"],"jsdoc-format":true,"label-position":true,"max-line-length":120,"member-access":false,"member-ordering":false,"no-any":false,"no-arg":true,"no-bitwise":false,"no-consecutive-blank-lines":true,"no-console":false,"no-construct":false,"no-debugger":true,"no-duplicate-variable":true,"no-empty":false,"no-eval":true,"no-inferrable-types":[true,"ignore-params"],"no-shadowed-variable":false,"no-string-literal":false,"no-switch-case-fall-through":false,"no-trailing-whitespace":true,"no-unused-expression":false,"no-use-before-declare":false,"no-var-keyword":true,"no-var-requires":false,"object-literal-sort-keys":false,"one-line":[true,"check-open-brace","check-whitespace"],"radix":true,"trailing-comma":[true,{"multiline":"never","singleline":"never"}],"triple-equals":[true,"allow-null-check"],"typedef":false,"typedef-whitespace":[true,{"call-signature":"nospace","index-signature":"nospace","parameter":"nospace","property-declaration":"nospace","variable-declaration":"nospace"},{"call-signature":"onespace","index-signature":"onespace","parameter":"onespace","property-declaration":"onespace","variable-declaration":"onespace"}],"variable-name":[true,"check-format","allow-leading-underscore","ban-keywords","allow-pascal-case"]}},"emitErrors":true,"failOnHint":true}!./node_modules/@dojo/webpack-contrib/css-module-dts-loader/index.js?type=ts&instanceName=0_dojo!./src/containers/EditorContainer.ts':function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o("./src/widgets/Editor.ts"),s=o("./src/processes/editorProcesses.ts"),n=o("./src/containers/StoreContainer.ts");t.default=n.default(r.Editor,"state",{paths:[["editor"],["errors"]],getProperties:function(e,t){var o=e.get,r=e.path;return{title:o(r("editor","title")),description:o(r("editor","description")),body:o(r("editor","body")),tag:o(r("editor","tag")),tags:o(r("editor","tagList")),errors:o(r("errors")),onContentInput:s.bodyInputProcess(e),onDescriptionInput:s.descInputProcess(e),onTagCreate:s.addTagProcess(e),onTagDelete:s.removeTagProcess(e),onTagInput:s.tagInputProcess(e),onTitleInput:s.titleInputProcess(e),onPublishPost:s.publishArticleProcess(e),slug:t.slug}}})},"./src/widgets/Editor.ts":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o("./node_modules/tslib/tslib.es6.js"),s=o("./node_modules/@dojo/widget-core/WidgetBase.js"),n=o("./node_modules/@dojo/widget-core/d.js"),i=o("./src/widgets/ErrorList.ts"),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype._onTitleInput=function(e){var t=e.target.value;this.properties.onTitleInput({title:t})},t.prototype._onDescriptionInput=function(e){var t=e.target.value;this.properties.onDescriptionInput({description:t})},t.prototype._onContentInput=function(e){var t=e.target.value;this.properties.onContentInput({body:t})},t.prototype._onTagInput=function(e){var t=e.target.value;this.properties.onTagInput({tag:t})},t.prototype._onTagCreate=function(e){13===e.keyCode&&(e.preventDefault(),this.properties.onTagCreate({tag:e.target.value}))},t.prototype._onPublishPost=function(){this.properties.onPublishPost({})},t.prototype.render=function(){var e=this.properties,t=e.onTagDelete,o=e.title,r=e.description,s=e.body,a=e.tag,l=e.errors,c=e.inProgress,u=void 0!==c&&c,p=e.tags,d=void 0===p?[]:p;return n.v("div",{classes:"editor-page"},[n.v("div",{classes:["container","page"]},[n.v("div",{classes:"row"},[n.v("div",{classes:["col-md-10","offset-md-1","col-xs-12"]},[l?n.w(i.ErrorList,{errors:l}):null,n.v("form",[n.v("fieldset",[n.v("fieldset",{classes:"form-group"},[n.v("input",{classes:["form-control","form-control-lg"],type:"text",placeholder:"Article Title",value:o,oninput:this._onTitleInput})]),n.v("fieldset",{classes:"form-group"},[n.v("input",{classes:"form-control",type:"text",placeholder:"What's this article about?",value:r,oninput:this._onDescriptionInput})]),n.v("fieldset",{classes:"form-group"},[n.v("textarea",{classes:"form-control",type:"text",rows:8,placeholder:"Write your article (in markdown)",value:s,oninput:this._onContentInput})]),n.v("fieldset",{classes:"form-group"},[n.v("input",{classes:"form-control",type:"text",placeholder:"Enter tags",value:a,oninput:this._onTagInput,onkeyup:this._onTagCreate}),n.v("div",{classes:"tag-list"},d.map(function(e){return n.v("span",{classes:["tag-default","tag-pill"]},[n.v("i",{classes:"ion-close-round",onclick:function(){t({tag:e})}}),e])}))]),n.v("button",{classes:["btn","btn-lg","pull-xs-right","btn-primary"],type:"button",disabled:u,onclick:this._onPublishPost},["Publish Article"])])])])])])])},t}(s.WidgetBase);t.Editor=a},"./src/widgets/ErrorList.ts":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o("./node_modules/tslib/tslib.es6.js"),s=o("./node_modules/@dojo/widget-core/WidgetBase.js"),n=o("./node_modules/@dojo/widget-core/d.js"),i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.render=function(){for(var e=this.properties.errors,t=Object.keys(e),o=[],s=function(s){o=r.__spread(o,e[t[s]].map(function(e){return t[s]+" "+e}))},i=0;i<t.length;i++)s(i);return n.v("ul",{classes:"error-messages"},o.map(function(e){return n.v("li",[e])}))},t}(s.WidgetBase);t.ErrorList=i}});
//# sourceMappingURL=EditorContainer.d0d4d8327db30f83e205.bundle.js.map