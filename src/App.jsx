function App() {
  const course = 'Date Structures and Algorithmn'
  const part1 = 'Linked List'
  const exercises1 = 10
  const part2 = 'Sort Array'
  const exercises2 = 7
  const part3 = 'Double Linked List'
  const exercises3 = 14

  return (
    <>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </>
  )
}

export default App
