import {
  geoPath,
  geoAzimuthalEqualArea,
  geoAzimuthalEquidistant,
  geoGnomonic,
  geoOrthographic,
  geoStereographic,
  geoConicConformal,
  geoConicEqualArea,
  geoConicEquidistant,
  geoAlbers,
  geoAlbersUsa,
  geoEquirectangular,
  geoMercator,
  geoTransverseMercator,
  geoEqualEarth,
  geoNaturalEarth1,
} from "d3-geo";

// -- Azimuthal Projections
export const azmEqualArea = geoPath(geoAzimuthalEqualArea());
export const azmEquidistant = geoPath(geoAzimuthalEquidistant());
export const azmGnomonic = geoPath(geoGnomonic());
export const azmOrthographic = geoPath(geoOrthographic());
export const azmStereographic = geoPath(geoStereographic());
// -- Conic Projections
export const conicAlbers = geoPath(geoAlbers());
export const conicAlbersUsa = geoPath(geoAlbersUsa());
export const conicConformal = geoPath(geoConicConformal());
export const conicEqualArea = geoPath(geoConicEqualArea());
export const conicEquidistant = geoPath(geoConicEquidistant());
// -- Cylindrical Projections
export const cylEqualEarth = geoPath(geoEqualEarth());
export const cylEquirectangular = geoPath(geoEquirectangular());
export const cylMercator = geoPath(geoMercator());
export const cylNaturalEarth1 = geoPath(geoNaturalEarth1());
export const cylTransverseMercator = geoPath(geoTransverseMercator());
