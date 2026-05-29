interface SectionName {
  name: string;
}

export function NameSection(props: SectionName) {
  return (
    <h1 className="text-3xl pb-12 pl-[6.75rem] text-verdePastel">{props.name}</h1>
  );
}
