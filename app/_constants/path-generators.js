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
} from "d3";

// -- Azimuthal Projections
export const geoAzimuthalEqualAreaPathGenerator = () => {
  const projection = geoAzimuthalEqualArea();
  return geoPath(projection);
};

export const geoAzimuthalEquidistantPathGenerator = () => {
  const projection = geoAzimuthalEquidistant();
  return geoPath(projection);
};

export const geoGnomonicPathGenerator = () => {
  const projection = geoGnomonic();
  return geoPath(projection);
};

export const geoOrthographicPathGenerator = () => {
  const projection = geoOrthographic();
  return geoPath(projection);
};

export const geoStereographicPathGenerator = () => {
  const projection = geoStereographic();
  return geoPath(projection);
};

// -- Conic Projections
export const geoConicConformalPathGenerator = () => {
  const projection = geoConicConformal();
  return geoPath(projection);
};

export const geoConicEqualAreaPathGenerator = () => {
  const projection = geoConicEqualArea();
  return geoPath(projection);
};

export const geoConicEquidistantPathGenerator = () => {
  const projection = geoConicEquidistant();
  return geoPath(projection);
};

export const geoAlbersPathGenerator = () => {
  const projection = geoAlbers();
  return geoPath(projection);
};

export const geoAlbersUsaPathGenerator = () => {
  const projection = geoAlbersUsa();
  return geoPath(projection);
};

// -- Cylindrical Projections
export const geoEquirectangularPathGenerator = () => {
  const projection = geoEquirectangular();
  return geoPath(projection);
};

export const geoMercatorPathGenerator = () => {
  const projection = geoMercator();
  return geoPath(projection);
};

export const geoTransverseMercatorPathGenerator = () => {
  const projection = geoTransverseMercator();
  return geoPath(projection);
};

export const geoEqualEarthPathGenerator = () => {
  const projection = geoEqualEarth();
  return geoPath(projection);
};

export const geoNaturalEarth1PathGenerator = () => {
  const projection = geoNaturalEarth1();
  return geoPath(projection);
};
