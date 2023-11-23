function Row({ data, property, calculationType, title }) {
  return (
    <tr>
      <td>{property} {title}</td>
      {Object.keys(data).map(classNumber => <td key={classNumber}>{calculationType(data[classNumber], property)}</td>)}
    </tr>
  )
}

export default Row;
