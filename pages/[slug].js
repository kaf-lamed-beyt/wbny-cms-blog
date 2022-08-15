import React from "react";
import Head from "next/head";
import { getArticleBySlug, getAllPostSlugs } from "../src/utils/helper";

export default function Article({ post }) {
  console.log(`slugPost: ${post}`);

  return (
    <React.Fragment>
      <Head>
        <title></title>
      </Head>
    </React.Fragment>
  );
}

// get the slugs from all articles, map them dynamically as routes
export async function getStaticPaths() {
  const articles = await getAllPostSlugs();

  return {
    paths: articles.map((articles) => {
      return {
        params: {
          slug: articles.slug,
        },
      };
    }),
    fallback: true,
  };
}

// fetch and renders the content of the article based
// on the current slug/route dynamically
export async function getStaticProps(context) {
  const { params } = context;

  const article = await getArticleBySlug(params.slug);

  console.log(article);

  return {
    props: {
      preview,
      post: {
        ...article.post.data,
      },
      morePosts: data?.morePosts,
    },
  };
}
