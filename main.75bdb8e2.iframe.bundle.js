(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters})),__webpack_require__.d(preview_namespaceObject,"globalTypes",(function(){return globalTypes})),__webpack_require__.d(preview_namespaceObject,"decorators",(function(){return decorators}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),esm=__webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js"),react=(__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js"),__webpack_require__("./node_modules/react/index.js")),react_default=__webpack_require__.n(react),chakra_ui_system_esm=__webpack_require__("./node_modules/@chakra-ui/system/dist/chakra-ui-system.esm.js"),chakra_ui_css_reset_esm=__webpack_require__("./node_modules/@chakra-ui/css-reset/dist/chakra-ui-css-reset.esm.js"),chakra_ui_react_esm=__webpack_require__("./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js"),dist_esm=__webpack_require__("./node_modules/storybook-addon-performance/dist/esm/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},globalTypes={theme:{name:"Theme",description:"Global theme for components",defaultValue:"light",toolbar:{icon:"circle",items:[{title:"Light",value:"light",icon:"circlehollow"},{title:"Dark",value:"dark",icon:"circle"}]}}},preview_ThemeSwitcher=function ThemeSwitcher(_ref){var mode=_ref.mode,setColorMode=Object(chakra_ui_system_esm.g)().setColorMode;return Object(react.useEffect)((function(){setColorMode(mode)}),[mode]),null},preview_withChakra=function withChakra(StoryFn,context){return Object(jsx_runtime.jsxs)(react_default.a.StrictMode,{children:[Object(jsx_runtime.jsx)(chakra_ui_css_reset_esm.a,{}),Object(jsx_runtime.jsxs)(chakra_ui_react_esm.a,{children:[Object(jsx_runtime.jsx)(preview_ThemeSwitcher,{mode:context.globals.theme}),Object(jsx_runtime.jsx)(StoryFn,{})]})]})};preview_withChakra.displayName="withChakra";var decorators=[preview_withChakra,dist_esm.withPerformance];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(ClientApi.d)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.e)(loader,!1)}));case"parameters":return Object(ClientApi.f)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.b)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"render":return Object(ClientApi.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.f)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./stories/Combobox.stories.tsx":"./src/stories/Combobox.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./src/stories/Combobox.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"BasicCombobox",(function(){return BasicCombobox})),__webpack_require__.d(__webpack_exports__,"RichTextCombobox",(function(){return RichTextCombobox})),__webpack_require__.d(__webpack_exports__,"CustomFilter",(function(){return CustomFilter})),__webpack_require__.d(__webpack_exports__,"AutomaticPlacement",(function(){return Combobox_stories_AutomaticPlacement})),__webpack_require__.d(__webpack_exports__,"FilterActionCombobox",(function(){return FilterActionCombobox})),__webpack_require__.d(__webpack_exports__,"VirtualCombobox",(function(){return VirtualCombobox}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.string.split.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.array.every.js"),__webpack_require__("./node_modules/core-js/modules/es.string.match.js");var react=__webpack_require__("./node_modules/react/index.js"),react_default=__webpack_require__.n(react),chakra_ui_layout_esm=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js"),lodash_escaperegexp=__webpack_require__("./node_modules/lodash.escaperegexp/index.js"),lodash_escaperegexp_default=__webpack_require__.n(lodash_escaperegexp),chakra_ui_popper_esm=(__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/@chakra-ui/popper/dist/chakra-ui-popper.esm.js")),downshift_esm=__webpack_require__("./node_modules/downshift/dist/downshift.esm.js"),chakra_ui_input_esm=__webpack_require__("./node_modules/@chakra-ui/input/dist/chakra-ui-input.esm.js"),chakra_ui_button_esm=__webpack_require__("./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js"),chakra_ui_icons_esm=__webpack_require__("./node_modules/@chakra-ui/icons/dist/chakra-ui-icons.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ComboboxInput(_ref,ref){var isOpen=_ref.isOpen,name=_ref.name,showClear=_ref.showClear,inputProps=_ref.inputProps,toggleButtonProps=_ref.toggleButtonProps,onFocus=_ref.onFocus,clear=_ref.clear,placeholder=_ref.placeholder;return Object(jsx_runtime.jsxs)(chakra_ui_input_esm.b,{ref:ref,children:[Object(jsx_runtime.jsx)(chakra_ui_input_esm.a,Object.assign({},inputProps({name:name,onFocus:onFocus,placeholder:placeholder}))),Object(jsx_runtime.jsx)(chakra_ui_input_esm.c,{paddingX:"0px",children:Object(jsx_runtime.jsxs)(chakra_ui_button_esm.a,{size:"md",variant:"ghost",spacing:"0",children:[showClear&&Object(jsx_runtime.jsx)(chakra_ui_button_esm.b,{"aria-label":"clear",icon:Object(jsx_runtime.jsx)(chakra_ui_icons_esm.b,{}),onClick:clear}),Object(jsx_runtime.jsx)(chakra_ui_button_esm.b,Object.assign({},toggleButtonProps({"aria-label":"toggle menu"}),{icon:Object(jsx_runtime.jsx)(chakra_ui_icons_esm.a,{transform:isOpen?"rotate(-180deg)":void 0,transition:"0.2s ease-in-out;"})}))]})})]})}ComboboxInput.displayName="ComboboxInput";var Input_ComboboxInput=react_default.a.forwardRef(ComboboxInput),chakra_ui_system_esm=__webpack_require__("./node_modules/@chakra-ui/system/dist/chakra-ui-system.esm.js");function ComboboxList(_ref){var items=_ref.items,name=_ref.name,isOpen=_ref.isOpen,itemKey=_ref.itemKey,rowRenderer=_ref.rowRenderer,getMenuProps=_ref.getMenuProps,getItemProps=_ref.getItemProps,maxHeight=_ref.maxHeight,highlightedIndex=_ref.highlightedIndex,selectedItem=_ref.selectedItem,colorMode=Object(chakra_ui_system_esm.g)().colorMode;return Object(jsx_runtime.jsx)(chakra_ui_layout_esm.c,Object.assign({},getMenuProps({name:name}),{listStyleType:"none","aria-label":name&&name+" list",maxH:maxHeight,zIndex:"1000",marginX:"0px",width:"100%",overflowY:"scroll",borderRadius:"base",border:isOpen?"1px solid":"none",borderColor:"dark"===colorMode?"whiteAlpha.200":"gray.200",cursor:"pointer",children:isOpen&&items.map((function(item,index){var highlighted=highlightedIndex===index,selected=selectedItem===item;return Object(jsx_runtime.jsx)(chakra_ui_layout_esm.d,Object.assign({bg:highlighted&&("dark"===colorMode?"whiteAlpha.100":"gray.100"),fontWeight:selected&&"bold"},getItemProps({item:item,index:index}),{children:rowRenderer({item:item,highlighted:highlighted,selected:selected})}),itemKey(item))}))}))}ComboboxList.displayName="ComboboxList";try{ComboboxList.displayName="ComboboxList",ComboboxList.__docgenInfo={description:"",displayName:"ComboboxList",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"T[]"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"Boolean"}},itemKey:{defaultValue:null,description:"",name:"itemKey",required:!0,type:{name:"(item: T) => string"}},rowRenderer:{defaultValue:null,description:"",name:"rowRenderer",required:!0,type:{name:"RowRenderer<T>"}},getMenuProps:{defaultValue:null,description:"",name:"getMenuProps",required:!0,type:{name:"(options?: UseComboboxGetMenuPropsOptions | undefined, otherOptions?: GetPropsCommonOptions | undefined) => any"}},getItemProps:{defaultValue:null,description:"",name:"getItemProps",required:!0,type:{name:"(options: UseComboboxGetItemPropsOptions<T>) => any"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!0,type:{name:"number"}},highlightedIndex:{defaultValue:null,description:"",name:"highlightedIndex",required:!1,type:{name:"number | undefined"}},selectedItem:{defaultValue:null,description:"",name:"selectedItem",required:!1,type:{name:"T | null | undefined"}},scrollIndex:{defaultValue:null,description:"",name:"scrollIndex",required:!1,type:{name:"number | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/List/ComboboxList.tsx#ComboboxList"]={docgenInfo:ComboboxList.__docgenInfo,name:"ComboboxList",path:"src/List/ComboboxList.tsx#ComboboxList"})}catch(__react_docgen_typescript_loader_error){}var react_virtual=__webpack_require__("./node_modules/react-virtual/dist/react-virtual.mjs");function VirtualisedComboboxList(_ref){var items=_ref.items,name=_ref.name,isOpen=_ref.isOpen,itemKey=_ref.itemKey,rowRenderer=_ref.rowRenderer,getMenuProps=_ref.getMenuProps,getItemProps=_ref.getItemProps,maxHeight=_ref.maxHeight,highlightedIndex=_ref.highlightedIndex,selectedItem=_ref.selectedItem,scrollIndex=_ref.scrollIndex,listRef=Object(react.useRef)(null),rowVirtualizer=Object(react_virtual.a)({size:items.length,parentRef:listRef,overscan:1,keyExtractor:function keyExtractor(index){return itemKey(items[index])}});Object(react.useEffect)((function(){scrollIndex&&void 0===rowVirtualizer[scrollIndex]&&rowVirtualizer.scrollToIndex(scrollIndex)}),[scrollIndex]);var colorMode=Object(chakra_ui_system_esm.g)().colorMode;return Object(jsx_runtime.jsx)(chakra_ui_layout_esm.a,{ref:listRef,zIndex:"1000",display:isOpen?void 0:"none",maxHeight:isOpen?maxHeight:0,overflow:"auto",borderRadius:"base",border:isOpen?"1px solid":"none",borderColor:"dark"===colorMode?"whiteAlpha.200":"gray.200",cursor:"pointer",children:Object(jsx_runtime.jsx)(chakra_ui_layout_esm.c,Object.assign({},getMenuProps({name:name}),{pos:"relative",height:rowVirtualizer.totalSize+"px",children:isOpen&&rowVirtualizer.virtualItems.map((function(virtualRow){var item=items[virtualRow.index],highlighted=highlightedIndex===virtualRow.index,selected=selectedItem===item;return Object(jsx_runtime.jsx)(chakra_ui_layout_esm.d,Object.assign({ref:virtualRow.measureRef,bg:highlighted&&("dark"===colorMode?"whiteAlpha.100":"gray.100"),fontWeight:selected&&"bold",pos:"absolute",top:0,left:0,width:"100%",transform:"translateY("+virtualRow.start+"px)"},getItemProps({item:item,index:virtualRow.index,ref:virtualRow.measureRef}),{children:rowRenderer({item:item,highlighted:highlighted,selected:selected})}),itemKey(item))}))}))})}VirtualisedComboboxList.displayName="VirtualisedComboboxList";try{VirtualisedComboboxList.displayName="VirtualisedComboboxList",VirtualisedComboboxList.__docgenInfo={description:"",displayName:"VirtualisedComboboxList",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"T[]"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"Boolean"}},itemKey:{defaultValue:null,description:"",name:"itemKey",required:!0,type:{name:"(item: T) => string"}},rowRenderer:{defaultValue:null,description:"",name:"rowRenderer",required:!0,type:{name:"RowRenderer<T>"}},getMenuProps:{defaultValue:null,description:"",name:"getMenuProps",required:!0,type:{name:"(options?: UseComboboxGetMenuPropsOptions | undefined, otherOptions?: GetPropsCommonOptions | undefined) => any"}},getItemProps:{defaultValue:null,description:"",name:"getItemProps",required:!0,type:{name:"(options: UseComboboxGetItemPropsOptions<T>) => any"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!0,type:{name:"number"}},highlightedIndex:{defaultValue:null,description:"",name:"highlightedIndex",required:!1,type:{name:"number | undefined"}},selectedItem:{defaultValue:null,description:"",name:"selectedItem",required:!1,type:{name:"T | null | undefined"}},scrollIndex:{defaultValue:null,description:"",name:"scrollIndex",required:!1,type:{name:"number | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/List/VirtualisedComboboxList.tsx#VirtualisedComboboxList"]={docgenInfo:VirtualisedComboboxList.__docgenInfo,name:"VirtualisedComboboxList",path:"src/List/VirtualisedComboboxList.tsx#VirtualisedComboboxList"})}catch(__react_docgen_typescript_loader_error){}var _excluded=["name","onChange","itemToString","itemKey","rowRenderer","filter","maxHeight"];function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function defaultItemToString(item){return"string"==typeof item?item:JSON.stringify(item)}function Combobox(_ref){var name=_ref.name,onChange=_ref.onChange,_ref$itemToString=_ref.itemToString,itemToString=void 0===_ref$itemToString?defaultItemToString:_ref$itemToString,_ref$itemKey=_ref.itemKey,itemKey=void 0===_ref$itemKey?itemToString:_ref$itemKey,_ref$rowRenderer=_ref.rowRenderer,rowRenderer=void 0===_ref$rowRenderer?function(p){return itemToString(p.item)}:_ref$rowRenderer,_ref$filter=_ref.filter,filter=void 0===_ref$filter?function createDefaultFilter(itemToString){return function(input){var re=new RegExp(lodash_escaperegexp_default()(input),"i");return function(item){return!!itemToString(item).match(re)}}}(itemToString):_ref$filter,_ref$maxHeight=_ref.maxHeight,maxHeight=void 0===_ref$maxHeight?250:_ref$maxHeight,props=_objectWithoutProperties(_ref,_excluded),_useState2=_slicedToArray(Object(react.useState)(""),2),inputValue=_useState2[0],setInputValue=_useState2[1],_useState4=_slicedToArray(Object(react.useState)(),2),scrollIndex=_useState4[0],setScrollIndex=_useState4[1],items=Object(react.useMemo)((function(){if(inputValue){var predicate=filter(inputValue);return props.items.filter(predicate)}return props.items}),[props.items,filter,inputValue]),combobox=Object(downshift_esm.a)({items:items,inputValue:inputValue,itemToString:itemToString,selectedItem:props.selectedItem,onSelectedItemChange:function onSelectedItemChange(_ref2){var selectedItem=_ref2.selectedItem;return onChange(null===selectedItem?void 0:selectedItem)},onInputValueChange:function onInputValueChange(_ref3){var newValue=_ref3.inputValue;return setInputValue(null!=newValue?newValue:"")},onIsOpenChange:function onIsOpenChange(_ref4){var isOpen=_ref4.isOpen,selectedItem=_ref4.selectedItem;!isOpen&&selectedItem&&setInputValue(itemToString(selectedItem))},onHighlightedIndexChange:function onHighlightedIndexChange(change){props.virtual&&void 0!==change.highlightedIndex&&change.isOpen&&(change.type===downshift_esm.a.stateChangeTypes.InputKeyDownArrowDown||change.type===downshift_esm.a.stateChangeTypes.InputKeyDownArrowUp)?setScrollIndex(change.highlightedIndex):setScrollIndex(void 0)}}),openAndClear=Object(react.useCallback)((function(){combobox.isOpen||(setInputValue(""),combobox.openMenu())}),[combobox.isOpen,setInputValue,combobox.openMenu]),_usePopper=Object(chakra_ui_popper_esm.a)({matchWidth:!0}),referenceRef=_usePopper.referenceRef,getPopperProps=_usePopper.getPopperProps,MenuComponent=props.virtual?VirtualisedComboboxList:ComboboxList;return Object(jsx_runtime.jsxs)(chakra_ui_layout_esm.a,Object.assign({},combobox.getComboboxProps({name:name,"aria-label":name}),{children:[Object(jsx_runtime.jsx)(Input_ComboboxInput,{isOpen:combobox.isOpen,name:name,showClear:null!==combobox.selectedItem&&void 0!==combobox.selectedItem,inputProps:combobox.getInputProps,toggleButtonProps:combobox.getToggleButtonProps,onFocus:openAndClear,placeholder:combobox.selectedItem?itemToString(combobox.selectedItem):void 0,clear:combobox.reset,ref:referenceRef}),Object(jsx_runtime.jsx)(chakra_ui_layout_esm.a,Object.assign({},getPopperProps(),{children:Object(jsx_runtime.jsx)(MenuComponent,{name:name,items:items,itemKey:itemKey,rowRenderer:rowRenderer,isOpen:combobox.isOpen,getItemProps:combobox.getItemProps,getMenuProps:combobox.getMenuProps,maxHeight:maxHeight,selectedItem:combobox.selectedItem,highlightedIndex:combobox.highlightedIndex,scrollIndex:scrollIndex})}))]}))}Combobox.displayName="Combobox";try{Combobox.displayName="Combobox",Combobox.__docgenInfo={description:"",displayName:"Combobox",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"T[]"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(item?: T | undefined) => void"}},selectedItem:{defaultValue:null,description:"",name:"selectedItem",required:!1,type:{name:"T | null | undefined"}},itemToString:{defaultValue:null,description:"",name:"itemToString",required:!1,type:{name:"((item: T | null) => string) | undefined"}},itemKey:{defaultValue:null,description:"",name:"itemKey",required:!1,type:{name:"((item: T) => string) | undefined"}},rowRenderer:{defaultValue:{value:"(p) => itemToString(p.item)"},description:"",name:"rowRenderer",required:!1,type:{name:"RowRenderer<T> | undefined"}},filter:{defaultValue:{value:"createDefaultFilter(itemToString)"},description:"",name:"filter",required:!1,type:{name:"((inputValue: string) => (item: T) => boolean) | undefined"}},maxHeight:{defaultValue:{value:"250"},description:"",name:"maxHeight",required:!1,type:{name:"number | undefined"}},virtual:{defaultValue:null,description:"",name:"virtual",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Combobox.tsx#Combobox"]={docgenInfo:Combobox.__docgenInfo,name:"Combobox",path:"src/Combobox.tsx#Combobox"})}catch(__react_docgen_typescript_loader_error){}try{src.displayName="src",src.__docgenInfo={description:"",displayName:"src",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"T[]"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(item?: T | undefined) => void"}},selectedItem:{defaultValue:null,description:"",name:"selectedItem",required:!1,type:{name:"T | null | undefined"}},itemToString:{defaultValue:null,description:"",name:"itemToString",required:!1,type:{name:"((item: T | null) => string) | undefined"}},itemKey:{defaultValue:null,description:"",name:"itemKey",required:!1,type:{name:"((item: T) => string) | undefined"}},rowRenderer:{defaultValue:{value:"(p) => itemToString(p.item)"},description:"",name:"rowRenderer",required:!1,type:{name:"RowRenderer<T> | undefined"}},filter:{defaultValue:{value:"createDefaultFilter(itemToString)"},description:"",name:"filter",required:!1,type:{name:"((inputValue: string) => (item: T) => boolean) | undefined"}},maxHeight:{defaultValue:{value:"250"},description:"",name:"maxHeight",required:!1,type:{name:"number | undefined"}},virtual:{defaultValue:null,description:"",name:"virtual",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#src"]={docgenInfo:src.__docgenInfo,name:"src",path:"src/index.tsx#src"})}catch(__react_docgen_typescript_loader_error){}var esm=__webpack_require__("./node_modules/@faker-js/faker/dist/esm/index.mjs");esm.a.seed(42);var animalTypes=[{type:"bear",emoji:"🐻",color:"red"},{type:"bird",emoji:"🐦",color:"orange"},{type:"cat",emoji:"🐱",color:"yellow"},{type:"cow",emoji:"🐮",color:"green"},{type:"crocodilia",emoji:"🐊",color:"teal"},{type:"dog",emoji:"🐶",color:"blue"},{type:"fish",emoji:"🐟",color:"cyan"},{type:"horse",emoji:"🐴",color:"purple"},{type:"rabbit",emoji:"🐰",color:"pink"},{type:"snake",emoji:"🐍",color:"gray"}];var animals=Array.from({length:25},(function generateAnimal(){var type=esm.a.random.arrayElement(animalTypes);return Object.assign({name:esm.a.animal[type.type]()},type,{id:esm.a.datatype.uuid()})})),people=Array.from({length:2e4},(function(){return{id:esm.a.datatype.uuid(),name:esm.a.name.findName(),color:esm.a.internet.color()}})),dist_esm=(__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/@storybook/testing-library/dist/esm/index.js"));function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}var _run,actions_select=function select(filter,index){var delay=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return function(){var _ref2=_asyncToGenerator(regeneratorRuntime.mark((function _callee(_ref){var canvasElement,combobox;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return canvasElement=_ref.canvasElement,combobox=Object(dist_esm.b)(canvasElement),_context.next=4,dist_esm.a.type(combobox.getByRole("textbox"),filter,{delay:delay});case 4:return _context.next=6,dist_esm.a.click(combobox.getAllByRole("option")[index],{delay:delay});case 6:case"end":return _context.stop()}}),_callee)})));return function(_x){return _ref2.apply(this,arguments)}}()},select2ndBearInteraction={name:"Select 2nd Bear",description:'Filters by "bear" and selects the 2nd',run:(_run=_asyncToGenerator(regeneratorRuntime.mark((function _callee2(_ref3){var container;return regeneratorRuntime.wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return container=_ref3.container,_context2.abrupt("return",actions_select("bear",1)({canvasElement:container}));case 2:case"end":return _context2.stop()}}),_callee2)}))),function run(_x2){return _run.apply(this,arguments)})};__webpack_exports__.default={title:"Combobox",component:Combobox,args:{items:[],name:"Combobox"},argTypes:{items:{control:!1},selectedItem:{control:!1},rowRenderer:{control:!1}},parameters:{performance:{interactions:[select2ndBearInteraction]}}};function Template(args){return Object(jsx_runtime.jsx)(Combobox,Object.assign({},args))}Template.displayName="Template";var BasicCombobox=Template.bind({});BasicCombobox.args={items:animals.map((function(a){return a.name}))};var RichTextCombobox=Template.bind({});RichTextCombobox.args={items:animals,itemToString:function itemToString(animal){return null==animal?void 0:animal.name},rowRenderer:function rowRenderer(_ref){var animal=_ref.item;return Object(jsx_runtime.jsxs)(chakra_ui_layout_esm.b,{children:[Object(jsx_runtime.jsx)(chakra_ui_layout_esm.e,{children:animal.emoji}),Object(jsx_runtime.jsx)(chakra_ui_layout_esm.e,{children:animal.name}),Object(jsx_runtime.jsx)(chakra_ui_layout_esm.e,{as:"sup",color:animal.color,children:animal.type})]})}};var CustomFilter=Template.bind({});CustomFilter.args=Object.assign({},RichTextCombobox.args,{filter:function filter(input){var res=input.split(" ").map((function(s){return new RegExp(lodash_escaperegexp_default()(s),"i")}));return function(item){var string=item.name+" "+item.type;return res.every((function(re){return string.match(re)}))}}});var Combobox_stories_AutomaticPlacement=function AutomaticPlacement(args){return Object(jsx_runtime.jsx)(chakra_ui_layout_esm.a,{h:400,display:"flex",flexDirection:"column-reverse",children:Object(jsx_runtime.jsx)(Template,Object.assign({},args))})};Combobox_stories_AutomaticPlacement.displayName="AutomaticPlacement",Combobox_stories_AutomaticPlacement.args=Object.assign({},RichTextCombobox.args);var FilterActionCombobox=Template.bind({});FilterActionCombobox.args=RichTextCombobox.args,FilterActionCombobox.play=actions_select("bear",1,250);var VirtualCombobox=Template.bind({});VirtualCombobox.args={items:people,itemKey:function itemKey(p){return p.id},itemToString:function itemToString(p){return null==p?void 0:p.name},virtual:!0,filter:function filter(input){var res=input.split(" ").map((function(s){return new RegExp(lodash_escaperegexp_default()(s),"i")}));return function(item){var string=item.name+" "+item.color;return res.every((function(re){return string.match(re)}))}},rowRenderer:function rowRenderer(_ref2){var item=_ref2.item;return Object(jsx_runtime.jsxs)(chakra_ui_layout_esm.b,{children:[Object(jsx_runtime.jsx)(chakra_ui_layout_esm.e,{children:item.name}),Object(jsx_runtime.jsx)(chakra_ui_layout_esm.a,{display:"inline-block",width:"15px",height:"15px",backgroundColor:item.color})]})}},BasicCombobox.parameters=Object.assign({storySource:{source:"Template.bind({})"}},BasicCombobox.parameters),RichTextCombobox.parameters=Object.assign({storySource:{source:"Template.bind({})"}},RichTextCombobox.parameters),CustomFilter.parameters=Object.assign({storySource:{source:"Template.bind({})"}},CustomFilter.parameters),Combobox_stories_AutomaticPlacement.parameters=Object.assign({storySource:{source:'function AutomaticPlacement(args) {\n  return (\n    <Box h={400} display="flex" flexDirection="column-reverse">\n      <Template {...args} />\n    </Box>\n  );\n}'}},Combobox_stories_AutomaticPlacement.parameters),FilterActionCombobox.parameters=Object.assign({storySource:{source:"Template.bind({})"}},FilterActionCombobox.parameters),VirtualCombobox.parameters=Object.assign({storySource:{source:"Template.bind({})"}},VirtualCombobox.parameters);try{Combobox_stories_AutomaticPlacement.displayName="AutomaticPlacement",Combobox_stories_AutomaticPlacement.__docgenInfo={description:"",displayName:"AutomaticPlacement",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Combobox.stories.tsx#AutomaticPlacement"]={docgenInfo:Combobox_stories_AutomaticPlacement.__docgenInfo,name:"AutomaticPlacement",path:"src/stories/Combobox.stories.tsx#AutomaticPlacement"})}catch(__react_docgen_typescript_loader_error){}},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/esm/preset/argsEnhancers.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-a11y/dist/esm/a11yRunner.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-a11y/dist/esm/a11yHighlight.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);