interface Identification {
  id?: string;
}

export function Divider(props: Identification) {
  return <div className="py-5" id={props.id}></div>;
}
