interface SectionName {
  name: string;
}

export function NameSection(props: SectionName) {
  return (
    <h1 className="text-3xl pb-14 pt-[50%] text-verdePastel">{props.name}</h1>
  );
}
