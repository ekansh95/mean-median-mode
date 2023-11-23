import { mean, median, mode } from "../../utils";
import Row from "./row";

function Body({ data, property }) {
  return (
    <tbody>
      <Row data={data} property={property} calculationType={mean} title='Mean' />
      <Row data={data} property={property} calculationType={median} title='Median' />
      <Row data={data} property={property} calculationType={mode} title='Mode' />
    </tbody>
  )
}

export default Body;
