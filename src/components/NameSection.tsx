interface SectionName {
  name: string;
}

export function NameSection(props: SectionName) {
  return (
    <h1 className="text-3xl pb-4 text-center text-verdePastel">{props.name}</h1>
  );
}
