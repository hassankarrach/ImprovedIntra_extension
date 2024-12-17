(function () {

	const importPath = /*@__PURE__*/ JSON.parse('"scripts/main.js"');

	import(chrome.runtime.getURL(importPath));

}());
