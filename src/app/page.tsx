"use client"; //directiva que indica que es un componente del lado del cliente (nos permite usar useRouter)

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  
  const navigate = (page: string) => {
    router.push(`/${page}`);
  }

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
