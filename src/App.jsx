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
      <Part name={props.part1.name} unit={props.part1.exercises} />
      <Part name={props.part2.name} unit={props.part2.exercises} />
      <Part name={props.part3.name} unit={props.part3.exercises} />
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
  const course = 'Industry Elective 1'

  const part1 = {
    name: 'Information Management 2',
    exercises: 3
  }

  const part2 = {
    name: 'Data Analytics 1',
    exercises: 3
  }

  const part3 = {
    name: 'Technopreneurship',
    exercises: 3
  }

  const name = 'Brent James Aberion'
  const courseCode = 'CSIT340'
  const section = 'G6'

  const total = part1.exercises + part2.exercises + part3.exercises

  return (
    <>
      <Header course={course} />

      <Content
        part1={part1}
        part2={part2}
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