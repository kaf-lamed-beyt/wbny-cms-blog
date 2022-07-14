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

export default function Home({ posts }) {
  return (
    <React.Fragment>
      <Head>
        <title>Next.js Blog with Webiny CMS</title>
      </Head>
      <Container>
        <h3>Blog</h3>
        {posts &&
          posts.map((post) => {
            return <BlogCard data={post} key={post.id} />;
          })}
      </Container>
    </React.Fragment>
  );
}

//  get all articles
export async function getStaticProps() {
  const articles = await getArticles();

  console.log(`--> articles: ${articles}`);

  return {
    props: {
      posts: articles,
    },
  };
}
