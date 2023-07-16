import Link from 'next/link'

export default function Page() {
  return <>
    <h1>Feed page</h1>
    <ul>
      <li>
        <Link href="/">top</Link>
      </li>
      <li>
        <Link href="/feed">feed</Link>
      </li>
    </ul>
  </>
}