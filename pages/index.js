import Link from 'next/link'
import Router from 'next/router'
import { Button, Tag } from 'antd'

export default () => {
  return (
    <>
      <Link href="/about">
        <Button>Go to About</Button>
      </Link>
      <Tag onClick={() => Router.push('/post/comment')}>Click To Comment</Tag>
      <Link href="/post/[pid]" as="/post/first">
        <Button>Go to First Post</Button>
      </Link>
    </>
  )
}
