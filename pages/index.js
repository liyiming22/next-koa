import Link from 'next/link'
import { Button, Tag } from 'antd'

export default () => {
  return (
    <>
      <Button>Click</Button>
      <Tag color="red">This is a Tag</Tag>
      <h1>This is Next.js</h1>
      <Link href="/head">
        <a>Head Page</a>
      </Link>
    </>
  )
}
