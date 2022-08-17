async function fetcher(query, { variables } = {}) {
  const res = await fetch(process.env.NEXT_PUBLIC_WEBINY_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.WEBINY_API_SECRET}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
  }

  return json.data;
}

// fetch all post/article slugs that'll be used to
// generate dynamic routes of each article when it is clicked upon
export async function getAllPostSlugs() {
  const slugs = await fetcher(`
    query slugs {
      listPosts {
        data {
          slug
        }
      }
    }
  `);

  return slugs.listPosts.data;
}

// the function below is an helper that gets the all the
// author on our blog
export async function getAuthors() {
  const authors = await fetcher(`
    query authors {
      listAuthors {
        data {
          name
          about
          slug
        }
      }
    }  
  `);

  return authors.listAuthors.data;
}

// get all articles
export async function getArticles() {
  const articles = await fetcher(`
    {
      listPosts(sort: createdOn_DESC) {
        data {
          title
          slug
          excerpt
          featuredImage
          createdOn
          author {
            name
          }
        }
      }
    }
  `);

  return articles.listPosts.data;
}

// helper function that gets an article by its unique slug param
export async function getArticleBySlug(slug) {
  const data = await fetcher(
    `query PostBySlug($PostsGetWhereInput: PostsGetWhereInput!) {
      listPosts: getPosts(where: $PostsGetWhereInput) {
        data {
          title
          excerpt
          featuredImage
          createdOn,
          author {
            name
          }
          body
        }
      }
    }`,
    {
      variables: {
        PostsGetWhereInput: {
          slug: slug,
        },
      },
    }
  );

  return data.listPosts.data;
}

//     morePosts: listPosts(limit: 2, sort: createdOn_ASC) {
//       data {
//         id
//         slug
//         title
//         createdOn
//         excerpt
//         featuredImage
//         author {
//           name
//           picture
//           description
//         }
//       }
//     }
//   }
// }
