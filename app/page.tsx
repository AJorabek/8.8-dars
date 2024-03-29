"use client";

import { useRef, useState } from "react";

export default function Home() {
  const [names, setNames] = useState<string[]>([]);
  const nameRef= useRef<HTMLInputElement>(null)
  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if (nameRef.current?.value) {
      setNames([...names,nameRef.current?.value]);
      nameRef.current.value=""
    }
  }
  return (
    <>
      <div>
        <input type="text" placeholder="search" />
        <br />
        <br />
        <br />
        <form onSubmit={handleSubmit}>
          <input ref={nameRef} type="text" placeholder="name" />
          <button>add</button>
        </form>
        <ul>
          {names.map((name) => (
            <li>{name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
