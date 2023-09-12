export const Basemap = ({
  geoJSON,
  height = 610,
  pathGen,
  pathProps = {},
  width = 975,
}) => {
  geoJSON && console.log("geoJSON:\n", geoJSON);

  const isMultiLineString = geoJSON.type === "MultiLineString";

  return (
    <svg viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg">
      <g>
        {isMultiLineString
          ? geoJSON.coordinates.map((array, index) => {
              return (
                <path
                  key={index}
                  d={pathGen({
                    type: "LineString",
                    coordinates: array,
                  })}
                  {...pathProps}
                  className="hover:fill-green-400"
                />
              );
            })
          : geoJSON.features.map(({ id, geometry }) => {
              return (
                <path
                  key={id}
                  d={pathGen(geometry)}
                  {...pathProps}
                  className="hover:fill-green-400"
                />
              );
            })}
      </g>
    </svg>
  );
};
