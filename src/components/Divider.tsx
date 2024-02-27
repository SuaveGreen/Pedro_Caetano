interface Identification {
  id?: string
}

export function Divider(props: Identification) {
  return(
      <div className="py-28" id={props.id} >
        
      </div>
  )
}