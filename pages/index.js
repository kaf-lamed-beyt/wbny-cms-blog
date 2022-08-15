import React from "react";
import Head from "next/head";
import { getArticles } from "../src/utils/helper";
import styled from "styled-components";
import BlogCard from "../src/components/blogCard";

export const Container = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

function BlogPage({ posts }) {
  console.log(posts);

  return (
    <React.Fragment>
      <Head>
        <title>Next.js Blog with Webiny CMS</title>
      </Head>
      <Container>
        <h3>Blog</h3>
        {posts?.map((post, index) => {
          return <BlogCard data={post} key={index} />;
        })}
      </Container>
    </React.Fragment>
  );
}

export default BlogPage;

export async function getStaticProps() {
  let articles = await getArticles();

  const posts = articles;

  console.log(posts);

  return {
    props: {
      posts,
    },
  };
}
