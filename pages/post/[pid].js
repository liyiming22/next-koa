import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { pid } = router.query
  return <p>This is {pid} post</p>
}

export default Post
