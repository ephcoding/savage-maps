import { geoPath } from "d3";

export const Basemap = ({
  geoJSONFeatures,
  projection,
  height = 975,
  width = 610,
  pathProps,
}) => {
  const pathGenerator = geoPath(projection);
  const fill = props.fill || "none";
  const stroke = props.stroke || "white";

  return (
    <svg viewbox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg">
      <g>
        {geoJSONFeatures.map(({ id, geometry }) => {
          <path
            key={id}
            d={pathGenerator(geometry)}
            fill={fill}
            stroke={stroke}
          />;
        })}
      </g>
    </svg>
  );
};
