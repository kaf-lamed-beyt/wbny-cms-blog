import React from "react";
import Head from "next/head";
import { getArticles } from "../src/utils/helper";
import styled from "styled-components";
import BlogCard from "../src/components/blogCard";

export const Container = styled.div`
  h3 {
    font-size: 30px;
    padding: 20px 60px;
  }

  .cards {
    border-top: 1px solid var(--card-border);
    padding: 40px 60px;
    display: flex;
    flex-wrap: wrap;
  }
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
        <div className="cards">
          {posts?.map((post, index) => {
            return <BlogCard data={post} key={index} />;
          })}
        </div>
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
