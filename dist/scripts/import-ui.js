(function () {

	const importPath = /*@__PURE__*/ JSON.parse('"scripts/ui.js"');

	import(chrome.runtime.getURL(importPath));

}());
