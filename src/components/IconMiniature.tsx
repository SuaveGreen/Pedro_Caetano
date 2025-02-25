interface IconDev {
  icon: string;
  nome: string;
}

export function IconMiniature(props: IconDev) {
  const reactImg = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${props.icon}/${props.icon}-original.svg`;

  return (
    <div>
      <img src={reactImg} className=" size-6 mr-3" title={props.nome} />
    </div>
  );
}

{
  /* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" className="w-6 h-6" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className="w-6 h-6" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" className="w-6 h-6" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" className="w-6 h-6" /> 

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gulp/gulp-plain.svg" />
          */
}
