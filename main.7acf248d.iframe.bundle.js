(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters})),__webpack_require__.d(preview_namespaceObject,"decorators",(function(){return decorators}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),esm=__webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js"),react=(__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js"),__webpack_require__("./node_modules/react/index.js")),react_default=__webpack_require__.n(react),chakra_ui_css_reset_esm=__webpack_require__("./node_modules/@chakra-ui/css-reset/dist/chakra-ui-css-reset.esm.js"),chakra_ui_react_esm=__webpack_require__("./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js"),theme=Object(chakra_ui_react_esm.b)({components:{Combobox:{parts:["menu"],baseStyle:{menu:{},item:{fontWeight:"medium"}},sizes:{},variants:{highlighted:{item:{background:"gray.200"}}},defaultProps:{}}}}),dist_esm=__webpack_require__("./node_modules/storybook-addon-performance/dist/esm/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},preview_withChakra=function withChakra(StoryFn){return Object(jsx_runtime.jsxs)(react_default.a.StrictMode,{children:[Object(jsx_runtime.jsx)(chakra_ui_css_reset_esm.a,{}),Object(jsx_runtime.jsx)(chakra_ui_react_esm.a,{theme:theme,children:Object(jsx_runtime.jsx)(StoryFn,{})})]})};preview_withChakra.displayName="withChakra";var decorators=[preview_withChakra,dist_esm.withPerformance];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(ClientApi.d)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.e)(loader,!1)}));case"parameters":return Object(ClientApi.f)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.b)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"render":return Object(ClientApi.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.f)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports,__webpack_require__){var map={"./stories/Combobox.stories.mdx":"./src/stories/Combobox.stories.mdx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./src/stories/Combobox.stories.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"animals",(function(){return Combobox_stories_animals})),__webpack_require__.d(__webpack_exports__,"animalNames",(function(){return animalNames})),__webpack_require__.d(__webpack_exports__,"Template",(function(){return Combobox_stories_Template})),__webpack_require__.d(__webpack_exports__,"basic",(function(){return basic})),__webpack_require__.d(__webpack_exports__,"richLabel",(function(){return richLabel})),__webpack_require__.d(__webpack_exports__,"virtualisedRichLabel",(function(){return virtualisedRichLabel}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var react=__webpack_require__("./node_modules/react/index.js"),esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),addon_actions_dist_esm=__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js"),chakra_ui_layout_esm=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js"),downshift_esm=(__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.string.match.js"),__webpack_require__("./node_modules/downshift/dist/downshift.esm.js")),lodash_escaperegexp=__webpack_require__("./node_modules/lodash.escaperegexp/index.js"),lodash_escaperegexp_default=__webpack_require__.n(lodash_escaperegexp),chakra_ui_input_esm=__webpack_require__("./node_modules/@chakra-ui/input/dist/chakra-ui-input.esm.js"),chakra_ui_button_esm=__webpack_require__("./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js"),chakra_ui_icons_esm=__webpack_require__("./node_modules/@chakra-ui/icons/dist/chakra-ui-icons.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ComboboxInput(_ref){var isOpen=_ref.isOpen,name=_ref.name,hasSelectedItem=_ref.hasSelectedItem,inputProps=_ref.inputProps,toggleButtonProps=_ref.toggleButtonProps,onFocus=_ref.onFocus,clear=_ref.clear,placeholder=_ref.placeholder;return Object(jsx_runtime.jsxs)(chakra_ui_input_esm.b,{children:[Object(jsx_runtime.jsx)(chakra_ui_input_esm.a,Object.assign({},inputProps({name:name,onFocus:onFocus,placeholder:placeholder}))),Object(jsx_runtime.jsx)(chakra_ui_input_esm.c,{paddingX:"0px",children:Object(jsx_runtime.jsxs)(chakra_ui_button_esm.a,{size:"md",variant:"ghost",spacing:"0",children:[hasSelectedItem&&Object(jsx_runtime.jsx)(chakra_ui_button_esm.b,{"aria-label":"clear",icon:Object(jsx_runtime.jsx)(chakra_ui_icons_esm.b,{}),onClick:clear}),Object(jsx_runtime.jsx)(chakra_ui_button_esm.b,Object.assign({},toggleButtonProps({"aria-label":"toggle menu"}),{icon:Object(jsx_runtime.jsx)(chakra_ui_icons_esm.a,{transform:isOpen?"rotate(-180deg)":void 0,transition:"0.2s ease-in-out;"})}))]})})]})}ComboboxInput.displayName="ComboboxInput";try{ComboboxInput.displayName="ComboboxInput",ComboboxInput.__docgenInfo={description:"",displayName:"ComboboxInput",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"Boolean"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},hasSelectedItem:{defaultValue:null,description:"",name:"hasSelectedItem",required:!0,type:{name:"boolean"}},inputProps:{defaultValue:null,description:"",name:"inputProps",required:!0,type:{name:"(options?: UseComboboxGetInputPropsOptions | undefined, otherOptions?: GetPropsCommonOptions | undefined) => any"}},toggleButtonProps:{defaultValue:null,description:"",name:"toggleButtonProps",required:!0,type:{name:"(options?: UseComboboxGetToggleButtonPropsOptions | undefined) => any"}},clear:{defaultValue:null,description:"",name:"clear",required:!0,type:{name:"() => void"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!0,type:{name:"() => void"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ComboboxInput.tsx#ComboboxInput"]={docgenInfo:ComboboxInput.__docgenInfo,name:"ComboboxInput",path:"src/ComboboxInput.tsx#ComboboxInput"})}catch(__react_docgen_typescript_loader_error){}function ComboboxList(_ref){var items=_ref.items,name=_ref.name,isOpen=_ref.isOpen,itemKey=_ref.itemKey,rowRenderer=_ref.rowRenderer,getMenuProps=_ref.getMenuProps,getItemProps=_ref.getItemProps,maxHeight=_ref.maxHeight,highlightedIndex=_ref.highlightedIndex,selectedItem=_ref.selectedItem;return Object(jsx_runtime.jsx)(chakra_ui_layout_esm.b,Object.assign({},getMenuProps({name:name}),{listStyleType:"none","aria-label":name&&name+" list",maxH:maxHeight,zIndex:"1000",marginX:"0px",width:"100%",overflowY:"scroll",background:"white",children:isOpen&&items.map((function(item,index){var highlighted=highlightedIndex===index,selected=selectedItem===item;return Object(jsx_runtime.jsx)(chakra_ui_layout_esm.c,Object.assign({bg:highlighted&&"gray.200",fontWeight:selected&&"bold"},getItemProps({item:item,index:index}),{children:rowRenderer({item:item,highlighted:highlighted,selected:selected})}),itemKey(item))}))}))}ComboboxList.displayName="ComboboxList";try{ComboboxList.displayName="ComboboxList",ComboboxList.__docgenInfo={description:"",displayName:"ComboboxList",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"T[]"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"Boolean"}},itemKey:{defaultValue:null,description:"",name:"itemKey",required:!0,type:{name:"(item: T) => string"}},rowRenderer:{defaultValue:null,description:"",name:"rowRenderer",required:!0,type:{name:"RowRenderer<T>"}},getMenuProps:{defaultValue:null,description:"",name:"getMenuProps",required:!0,type:{name:"(options?: UseComboboxGetMenuPropsOptions | undefined, otherOptions?: GetPropsCommonOptions | undefined) => any"}},getItemProps:{defaultValue:null,description:"",name:"getItemProps",required:!0,type:{name:"(options: UseComboboxGetItemPropsOptions<T>) => any"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!0,type:{name:"number"}},highlightedIndex:{defaultValue:null,description:"",name:"highlightedIndex",required:!1,type:{name:"number"}},selectedItem:{defaultValue:null,description:"",name:"selectedItem",required:!1,type:{name:"T | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ComboboxList.tsx#ComboboxList"]={docgenInfo:ComboboxList.__docgenInfo,name:"ComboboxList",path:"src/ComboboxList.tsx#ComboboxList"})}catch(__react_docgen_typescript_loader_error){}var react_virtual=__webpack_require__("./node_modules/react-virtual/dist/react-virtual.mjs");function VirtualisedComboboxList(_ref){var items=_ref.items,name=_ref.name,isOpen=_ref.isOpen,itemKey=_ref.itemKey,rowRenderer=_ref.rowRenderer,getMenuProps=_ref.getMenuProps,getItemProps=_ref.getItemProps,maxHeight=_ref.maxHeight,highlightedIndex=_ref.highlightedIndex,selectedItem=_ref.selectedItem,listRef=Object(react.useRef)(null),rowVirtualizer=Object(react_virtual.a)({size:items.length,parentRef:listRef,overscan:1,keyExtractor:function keyExtractor(index){return itemKey(items[index])}});return Object(react.useEffect)((function(){if(void 0!==highlightedIndex){var _rowVirtualizer$virtu,start=null===(_rowVirtualizer$virtu=rowVirtualizer.virtualItems[highlightedIndex])||void 0===_rowVirtualizer$virtu?void 0:_rowVirtualizer$virtu.start;(void 0===start||start>maxHeight)&&rowVirtualizer.scrollToIndex(highlightedIndex)}}),[highlightedIndex,rowVirtualizer.virtualItems,rowVirtualizer.scrollToIndex]),Object(jsx_runtime.jsx)(chakra_ui_layout_esm.a,{ref:listRef,zIndex:"1000",height:isOpen?maxHeight:0,overflow:"auto",children:Object(jsx_runtime.jsx)(chakra_ui_layout_esm.b,Object.assign({},getMenuProps({name:name}),{pos:"relative",height:rowVirtualizer.totalSize+"px",children:isOpen&&rowVirtualizer.virtualItems.map((function(virtualRow){var item=items[virtualRow.index],highlighted=highlightedIndex===virtualRow.index,selected=selectedItem===item;return Object(jsx_runtime.jsx)(chakra_ui_layout_esm.c,Object.assign({ref:virtualRow.measureRef,bg:highlighted&&"gray.200",fontWeight:selected&&"bold",pos:"absolute",top:0,left:0,width:"100%",transform:"translateY("+virtualRow.start+"px)"},getItemProps({item:item,index:virtualRow.index,ref:virtualRow.measureRef}),{children:rowRenderer({item:item,highlighted:highlighted,selected:selected})}),itemKey(item))}))}))})}VirtualisedComboboxList.displayName="VirtualisedComboboxList";try{VirtualisedComboboxList.displayName="VirtualisedComboboxList",VirtualisedComboboxList.__docgenInfo={description:"",displayName:"VirtualisedComboboxList",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"T[]"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"Boolean"}},itemKey:{defaultValue:null,description:"",name:"itemKey",required:!0,type:{name:"(item: T) => string"}},rowRenderer:{defaultValue:null,description:"",name:"rowRenderer",required:!0,type:{name:"RowRenderer<T>"}},getMenuProps:{defaultValue:null,description:"",name:"getMenuProps",required:!0,type:{name:"(options?: UseComboboxGetMenuPropsOptions | undefined, otherOptions?: GetPropsCommonOptions | undefined) => any"}},getItemProps:{defaultValue:null,description:"",name:"getItemProps",required:!0,type:{name:"(options: UseComboboxGetItemPropsOptions<T>) => any"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!0,type:{name:"number"}},highlightedIndex:{defaultValue:null,description:"",name:"highlightedIndex",required:!1,type:{name:"number"}},selectedItem:{defaultValue:null,description:"",name:"selectedItem",required:!1,type:{name:"T | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/VirtualisedComboboxList.tsx#VirtualisedComboboxList"]={docgenInfo:VirtualisedComboboxList.__docgenInfo,name:"VirtualisedComboboxList",path:"src/VirtualisedComboboxList.tsx#VirtualisedComboboxList"})}catch(__react_docgen_typescript_loader_error){}var _excluded=["name","onChange","itemToString","itemKey","rowRenderer","filter","maxHeight"];function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function defaultItemToString(item){return"string"==typeof item?item:JSON.stringify(item)}function Combobox(_ref){var name=_ref.name,onChange=_ref.onChange,_ref$itemToString=_ref.itemToString,itemToString=void 0===_ref$itemToString?defaultItemToString:_ref$itemToString,_ref$itemKey=_ref.itemKey,itemKey=void 0===_ref$itemKey?itemToString:_ref$itemKey,_ref$rowRenderer=_ref.rowRenderer,rowRenderer=void 0===_ref$rowRenderer?function(p){return itemToString(p.item)}:_ref$rowRenderer,_ref$filter=_ref.filter,filter=void 0===_ref$filter?function(input){var re=new RegExp(lodash_escaperegexp_default()(input),"i");return function(item){return!!itemToString(item).match(re)}}:_ref$filter,_ref$maxHeight=_ref.maxHeight,maxHeight=void 0===_ref$maxHeight?250:_ref$maxHeight,props=_objectWithoutProperties(_ref,_excluded),_useState2=_slicedToArray(Object(react.useState)(""),2),inputValue=_useState2[0],setInputValue=_useState2[1],items=Object(react.useMemo)((function(){if(inputValue){var predicate=filter(inputValue);return props.items.filter(predicate)}return props.items}),[props.items,filter,inputValue]),combobox=Object(downshift_esm.a)({items:items,inputValue:inputValue,itemToString:itemToString,selectedItem:props.selectedItem,onSelectedItemChange:function onSelectedItemChange(_ref2){var selectedItem=_ref2.selectedItem;return onChange(null===selectedItem?void 0:selectedItem)},onInputValueChange:function onInputValueChange(_ref3){var newValue=_ref3.inputValue;return setInputValue(null!=newValue?newValue:"")},onIsOpenChange:function onIsOpenChange(_ref4){var isOpen=_ref4.isOpen,selectedItem=_ref4.selectedItem;!isOpen&&selectedItem&&setInputValue(itemToString(selectedItem))}}),openAndClear=Object(react.useCallback)((function(){combobox.isOpen||(setInputValue(""),combobox.openMenu())}),[combobox.isOpen,setInputValue,combobox.openMenu]),MenuComponent=props.virtual?VirtualisedComboboxList:ComboboxList;return Object(jsx_runtime.jsxs)(chakra_ui_layout_esm.a,Object.assign({},combobox.getComboboxProps({name:name,"aria-label":name}),{children:[Object(jsx_runtime.jsx)(ComboboxInput,{isOpen:combobox.isOpen,name:name,hasSelectedItem:null!==combobox.selectedItem&&void 0!==combobox.selectedItem,inputProps:combobox.getInputProps,toggleButtonProps:combobox.getToggleButtonProps,onFocus:openAndClear,placeholder:combobox.selectedItem?itemToString(combobox.selectedItem):void 0,clear:combobox.reset}),Object(jsx_runtime.jsx)(chakra_ui_layout_esm.a,{pos:"relative",borderRadius:"base",border:combobox.isOpen?"1px solid":"none",borderColor:"gray.200",marginTop:combobox.isOpen?1:void 0,marginStart:"0",children:Object(jsx_runtime.jsx)(MenuComponent,{name:name,items:items,itemKey:itemKey,rowRenderer:rowRenderer,isOpen:combobox.isOpen,getItemProps:combobox.getItemProps,getMenuProps:combobox.getMenuProps,maxHeight:maxHeight,selectedItem:combobox.selectedItem,highlightedIndex:combobox.highlightedIndex})})]}))}Combobox.displayName="Combobox";try{Combobox.displayName="Combobox",Combobox.__docgenInfo={description:"",displayName:"Combobox",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"T[]"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(item?: T | undefined) => void"}},selectedItem:{defaultValue:null,description:"",name:"selectedItem",required:!1,type:{name:"T | null"}},itemToString:{defaultValue:null,description:"",name:"itemToString",required:!1,type:{name:"((item: T | null) => string)"}},itemKey:{defaultValue:null,description:"",name:"itemKey",required:!1,type:{name:"((item: T) => string)"}},rowRenderer:{defaultValue:{value:"(p) => itemToString(p.item)"},description:"",name:"rowRenderer",required:!1,type:{name:"RowRenderer<T>"}},filter:{defaultValue:{value:'(input: string) => {\n    const re = new RegExp(escapeRegExp(input), "i");\n    return (item: T) => !!itemToString(item).match(re);\n  }'},description:"",name:"filter",required:!1,type:{name:"((inputValue: string) => (item: T) => boolean)"}},maxHeight:{defaultValue:{value:"250"},description:"",name:"maxHeight",required:!1,type:{name:"number"}},virtual:{defaultValue:null,description:"",name:"virtual",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Combobox.tsx#Combobox"]={docgenInfo:Combobox.__docgenInfo,name:"Combobox",path:"src/Combobox.tsx#Combobox"})}catch(__react_docgen_typescript_loader_error){}try{src.displayName="src",src.__docgenInfo={description:"",displayName:"src",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"T[]"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(item?: T | undefined) => void"}},selectedItem:{defaultValue:null,description:"",name:"selectedItem",required:!1,type:{name:"T | null"}},itemToString:{defaultValue:null,description:"",name:"itemToString",required:!1,type:{name:"((item: T | null) => string)"}},itemKey:{defaultValue:null,description:"",name:"itemKey",required:!1,type:{name:"((item: T) => string)"}},rowRenderer:{defaultValue:{value:"(p) => itemToString(p.item)"},description:"",name:"rowRenderer",required:!1,type:{name:"RowRenderer<T>"}},filter:{defaultValue:{value:'(input: string) => {\n    const re = new RegExp(escapeRegExp(input), "i");\n    return (item: T) => !!itemToString(item).match(re);\n  }'},description:"",name:"filter",required:!1,type:{name:"((inputValue: string) => (item: T) => boolean)"}},maxHeight:{defaultValue:{value:"250"},description:"",name:"maxHeight",required:!1,type:{name:"number"}},virtual:{defaultValue:null,description:"",name:"virtual",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#src"]={docgenInfo:src.__docgenInfo,name:"src",path:"src/index.tsx#src"})}catch(__react_docgen_typescript_loader_error){}var faker_dist_esm=__webpack_require__("./node_modules/@faker-js/faker/dist/esm/index.mjs");faker_dist_esm.a.seed(42);var animalTypes=[{type:"bear",emoji:"🐻",color:"red"},{type:"bird",emoji:"🐦",color:"orange"},{type:"cat",emoji:"🐱",color:"yellow"},{type:"cow",emoji:"🐮",color:"green"},{type:"crocodilia",emoji:"🐊",color:"teal"},{type:"dog",emoji:"🐶",color:"blue"},{type:"fish",emoji:"🐟",color:"cyan"},{type:"horse",emoji:"🐴",color:"purple"},{type:"rabbit",emoji:"🐰",color:"pink"},{type:"snake",emoji:"🐍",color:"gray"}];var animals=Array.from({length:1e5},(function generateAnimal(){var type=faker_dist_esm.a.random.arrayElement(animalTypes);return Object.assign({name:faker_dist_esm.a.animal[type.type]()},type,{id:faker_dist_esm.a.datatype.uuid()})})),Combobox_stories_excluded=["components"];function Combobox_stories_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function Combobox_stories_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var Combobox_stories_animals=animals.slice(0,20),animalNames=Combobox_stories_animals.map((function(c){return c.name})),Combobox_stories_Template=function Template(args){return Object(esm.b)(Combobox,_extends({name:"Combobox",items:animals,onChange:Object(addon_actions_dist_esm.action)("item selected")},args,{mdxType:"Combobox"}))};Combobox_stories_Template.displayName="Template";var layoutProps={animals:Combobox_stories_animals,Template:Combobox_stories_Template};function MDXContent(_ref){var components=_ref.components,props=Combobox_stories_objectWithoutProperties(_ref,Combobox_stories_excluded);return Object(esm.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.b)(dist_esm.c,{title:"Combobox",mdxType:"Meta"}),Object(esm.b)(dist_esm.b,{mdxType:"Canvas"},Object(esm.b)(dist_esm.d,{name:"Basic",args:{items:animalNames},mdxType:"Story"},Combobox_stories_Template.bind({})),Object(esm.b)(dist_esm.d,{name:"Rich label",args:{items:Combobox_stories_animals,itemToString:function itemToString(animal){return null==animal?void 0:animal.name},rowRenderer:function rowRenderer(_ref2){var animal=_ref2.item;return Object(esm.b)(chakra_ui_layout_esm.d,{as:"span",mdxType:"Text"},animal.emoji,animal.name,Object(esm.b)(chakra_ui_layout_esm.d,{as:"sup",color:animal.color,padding:"2",mdxType:"Text"},animal.type))}},mdxType:"Story"},Combobox_stories_Template.bind({})),Object(esm.b)(dist_esm.d,{name:"Virtualised Rich label",args:{virtual:!0,itemToString:function itemToString(animal){return null==animal?void 0:animal.name},itemKey:function itemKey(animal){return animal.id},rowRenderer:function rowRenderer(_ref3){var animal=_ref3.item;return Object(esm.b)(chakra_ui_layout_esm.d,{as:"span",mdxType:"Text"},animal.emoji,animal.name,Object(esm.b)(chakra_ui_layout_esm.d,{as:"sup",color:animal.color,padding:"2",mdxType:"Text"},animal.type))}},mdxType:"Story"},Combobox_stories_Template.bind({}))))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var basic=Combobox_stories_Template.bind({});basic.storyName="Basic",basic.args={items:animalNames},basic.parameters={storySource:{source:'args => <Combobox name="Combobox" items={allAnimals} onChange={action("item selected")} {...args} />'}};var richLabel=Combobox_stories_Template.bind({});richLabel.storyName="Rich label",richLabel.args={items:Combobox_stories_animals,itemToString:function itemToString(animal){return null==animal?void 0:animal.name},rowRenderer:function rowRenderer(_ref4){var animal=_ref4.item;return Object(esm.b)(chakra_ui_layout_esm.d,{as:"span"},animal.emoji,animal.name,Object(esm.b)(chakra_ui_layout_esm.d,{as:"sup",color:animal.color,padding:"2"},animal.type))}},richLabel.parameters={storySource:{source:'args => <Combobox name="Combobox" items={allAnimals} onChange={action("item selected")} {...args} />'}};var virtualisedRichLabel=Combobox_stories_Template.bind({});virtualisedRichLabel.storyName="Virtualised Rich label",virtualisedRichLabel.args={virtual:!0,itemToString:function itemToString(animal){return null==animal?void 0:animal.name},itemKey:function itemKey(animal){return animal.id},rowRenderer:function rowRenderer(_ref5){var animal=_ref5.item;return Object(esm.b)(chakra_ui_layout_esm.d,{as:"span"},animal.emoji,animal.name,Object(esm.b)(chakra_ui_layout_esm.d,{as:"sup",color:animal.color,padding:"2"},animal.type))}},virtualisedRichLabel.parameters={storySource:{source:'args => <Combobox name="Combobox" items={allAnimals} onChange={action("item selected")} {...args} />'}};var componentMeta={title:"Combobox",includeStories:["basic","richLabel","virtualisedRichLabel"]},mdxStoryNameToKey={Basic:"basic","Rich label":"richLabel","Virtualised Rich label":"virtualisedRichLabel"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(esm.b)(dist_esm.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},Object(esm.b)(MDXContent,null))}});__webpack_exports__.default=componentMeta},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/esm/preset/argsEnhancers.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-a11y/dist/esm/a11yRunner.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-a11y/dist/esm/a11yHighlight.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,4,5]]]);