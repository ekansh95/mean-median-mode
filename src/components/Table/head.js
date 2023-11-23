function Head({ data }) {
  return (
    <thead>
      <tr>
        <th>Measure</th>
        {Object.keys(data).map(classNumber => <th key={classNumber}>Class {classNumber}</th>)}
      </tr>
    </thead>
  )
}

export default Head;
