import Link from 'next/link'

export default function Home() {
  return <>
    <h1>http's `Vary` has not `Next-Url`</h1>
    <ul>
      <li>
        <Link href="/feed">feed</Link>
      </li>
      <li>
        <Link href="/photo">photo</Link>
      </li>
    </ul>
  </>
}
