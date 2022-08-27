// -- SVG
import * as africa from "./svg/africa.svg";
import * as AL from "./svg/stateAL.svg";
import * as LA from "./svg/stateLA.svg";
import * as OK from "./svg/stateOK.svg";
import * as PA from "./svg/statePA.svg";
import * as TX from "./svg/stateTX.svg";
import * as tornadoWarning from "./svg/tornadoWarning.svg";
import * as usaAbbr from "./svg/usaAbbr.svg";
import * as usaAllStates from "./svg/usaAllStates.svg";
import * as usaConus from "./svg/usaConus.svg";
import * as usaCounties from "./svg/usaCounties.svg";
import * as usaStateNames from "./svg/usaStateNames.svg";
import * as world from "./svg/world.svg";

// -- JSON

import * as featureCollectionExample from "./json/featureCollectionExample.json";
import * as nwsTornadoWarnings from "./json/nwsTornadoWarnings.json";
import * as svgToJsonLouisiana from "./json/svgToJsonLouisiana.json";
import * as svgToJsonNwsAlert from "./json/svgToJsonNwsAlert.json";
import * as svgToJsonUsa from "./json/svgToJsonUsa.json";
import * as swdiTornadoWarningExample from "./json/swdiTornadoWarningExample.json";

// -- TopoJSON
import * as topoJsonAlbersWithFIPS from "./topoJSON/topojsonAlbersWithFIPS.json";
import * as topoJsonAlbersWithFIPSProjected from "./topoJSON/topojsonAlbersWithFIPSProjected.json";

export const SVG = {
	africa,
	AL,
	LA,
	OK,
	PA,
	TX,
	tornadoWarning,
	usaAbbr,
	usaAllStates,
	usaConus,
	usaCounties,
	usaStateNames,
	world,
};

export const JSON = {
	featureCollectionExample,
	nwsTornadoWarnings,
	svgToJsonLouisiana,
	svgToJsonNwsAlert,
	svgToJsonUsa,
	swdiTornadoWarningExample,
};

export const GEO_JSON = {};

export const TOPO_JSON = {
	topoJsonAlbersWithFIPS,
	topoJsonAlbersWithFIPSProjected,
};
