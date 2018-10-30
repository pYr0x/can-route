var supportObserve = (function() {
	return typeof WeakSet !== "undefined" && typeof Proxy !== "undefined";
}());


require("./param-deparam-test");
require("./link-to-test");
require("./url-test");
require("./route-data-test");
require("./route-observability-test");
if (supportObserve) {
	require("./route-observe-test");
}
require("./route-define-test");
require("./route-map-test");
require("./route-register-test");
require("./route-stop-test");
