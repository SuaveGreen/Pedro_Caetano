
interface ProjectsName{
  name: string
}

export function NameSection(props: ProjectsName) {
  return(
      <h1 className="text-4xl py-14 text-center text-verdePastel">
        {props.name}
      </h1>
  )
}