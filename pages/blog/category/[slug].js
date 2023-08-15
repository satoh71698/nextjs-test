import { getAllCategories, getAllPostsByCategory } from "lib/api";
import Meta from "components/meta"
import Container from "components/container";
import PostHeader from "components/post-header";
import Posts from "components/posts";

export default function Category({ name, posts }) {
    return (
        <Container>
            <Meta pageTitle={name} pageDesc={`${name}に関する記事`} />
            <PostHeader title={name} subtitle="Blog Category" />
            <Posts posts={posts} />
        </Container>
    )
}

export async function getStaticPaths() {
    const allCats = await getAllCategories()
    return {
        paths: allCats.map(({ slug }) => `/blog/category/${slug}`),
        fallback: false
    }
}

export async function getStaticProps(context) {
    const catSlug = context.params.slug

    const allCats = await getAllCategories()
    const cat = allCats.find(({ slug }) => slug === catSlug)

    const posts = await getAllPostsByCategory(cat.id)

    return {
        props: {
            name: cat.name,
            posts: posts,
        },
    }
}