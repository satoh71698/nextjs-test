
import Hero from "components/hero"
import Container from "components/container"
import Meta from "components/meta"
import Pagination from "components/pagination"
import { getAllPosts } from "lib/api"
import Posts from "components/posts"


export default function Home({ posts }) {
  return (
    <Container>
      <Meta />
      <Hero
        title="CUBE"
        subtitle="アウトプットしていくサイト"
        imageOn
      />
      <Posts posts={posts} />
      <Pagination nextUrl="/blog" nextText="more Posts" />
    </Container>
  )
}



export async function getStaticProps() {
  const posts = await getAllPosts(4)

  return {
    props: {
      posts: posts,
    },
  }
}