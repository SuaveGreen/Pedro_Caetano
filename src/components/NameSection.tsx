
interface SectionName{
  name: string
}

export function NameSection(props: SectionName) {
  return(
      <h1 className="text-4xl py-14 text-center text-verdePastel">
        {props.name}
      </h1>
  )
}