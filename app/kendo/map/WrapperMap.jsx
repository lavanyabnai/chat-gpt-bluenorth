import MapContainer  from "../map/kendomap.client";


export default function WrapperChartGrid() { 
  return typeof document !== "undefined" ? <MapContainer /> : null;
}