/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["sqdemo/sonarqubedemo/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
