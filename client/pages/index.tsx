import Link from 'next/link'
import Name from '../components/Name'

const Page = () => (
    <div>
        Welcome, <Name />
        <br />

        <Link href="/about"><a>About</a></Link>
        <br />
        <Link href="/users"><a>Users</a></Link>

    </div>
)

export default Page