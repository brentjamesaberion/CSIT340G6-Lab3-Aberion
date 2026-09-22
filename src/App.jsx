const Header = (props) => {
  return (
    <h1>
      {props.course}
    </h1>
  )
}

const Content = (props) => {
  return (
    <>
      <Part name={props.course1} unit={props.part1} />
      <Part name={props.course2} unit={props.part2} />
      <Part name={props.course3} unit={props.part3} />
    </>
  )
}

const Part = (props) => {
  return <p>{props.name}, Unit: {props.unit}</p>
}

const Total = (props) => {
  return (
    <p>Total unit: {props.total}</p>
  )
}
const Footer = (props) => {
  return (
    <footer>
      {props.name} - {props.courseCode} - {props.section}
    </footer>
  )
}

const App = () => {
  const course = 'Data Structure and Algorithm'

  const course1 = 'Industry Elective 1'
  const part1 = 3

  const course2 = 'Data Analytics 1'
  const part2 = 3

  const course3 = 'Information Management 2'
  const part3 = 3


  const name = 'Brent James Aberion'
  const courseCode = 'CSIT340'
  const section = 'G6'

  const total = part1 + part2 + part3

  return (
    <>
      <Header course={course} />

      <Content
        course1={course1}
        part1={part1}
        course2={course2}
        part2={part2}
        course3={course3}
        part3={part3}
      />

      <Total total={total} />

      
      <Footer
        name={name}
        courseCode={courseCode}
        section={section}
      />
    </>
  )
}

export default App