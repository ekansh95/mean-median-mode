import Head from "./head";
import Body from "./body";

function Table({ data, property }) {
  return (
    <table>
      <Head data={data} />
      <Body data={data} property={property} />
    </table>
  )
}

export default Table;
