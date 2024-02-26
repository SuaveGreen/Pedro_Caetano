interface Identification {
  id?: string
}

export function Divider(props: Identification) {
  return(
    <div>
      <div>
        <img 
          src="https://capsule-render.vercel.app/api?type=waving&color=C6E5B1&height=85&section=footer"
          className="w-full"
        />
        <img 
          src="https://capsule-render.vercel.app/api?type=waving&color=C6E5B1&height=85&section=header"
          className="w-full"
          id={props.id}
        />
      </div>

    </div>
  )
}