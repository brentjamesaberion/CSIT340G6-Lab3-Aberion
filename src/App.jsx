const Header = (props) => {
  return (
    <h1>
      {props.course.name}
    </h1>
  )
}

const Content = (props) => {
  return (
    <>
      <Part name={props.parts[0].name} unit={props.parts[0].exercises} />
      <Part name={props.parts[1].name} unit={props.parts[1].exercises} />
      <Part name={props.parts[2].name} unit={props.parts[2].exercises} />
    </>
  )
}

const Part = (props) => {
  return <p>{props.name}, Unit: {props.unit}</p>
}

const Total = (props) => {
  return (
    <p>
      Total unit: {
        props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises
      }
    </p>
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
  const course = {
    name: 'Industry Elective 1',
    parts: [
      {
        name: 'Information Management 2',
        exercises: 3
      },
      {
        name: 'Data Analytics 1',
        exercises: 3
      },
      {
        name: 'Technopreneurship',
        exercises: 3
      }
    ]
  }

  const name = 'Brent James Aberion'
  const courseCode = 'CSIT340'
  const section = 'G6'

  return (
    <>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />

      <Footer
        name={name}
        courseCode={courseCode}
        section={section}
      />
    </>
  )
}

export default App