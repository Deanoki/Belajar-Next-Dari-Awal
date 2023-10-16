import Link from "next/link"

export default function Home() {
  return (
   <>
   <h1>testing Home</h1>
   <br />
   <Link href='/abouts'>About pages</Link>
   <br />
   <Link href='/albums'>Albums pages</Link>
   </>
  )
}
