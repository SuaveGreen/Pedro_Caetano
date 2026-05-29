interface SectionName {
  name: string;
}

export function NameSection(props: SectionName) {
  return (
    <h1 className="text-3xl py-8 pl-[1rem] text-center text-verdePastel">{props.name}</h1>
  );
}
