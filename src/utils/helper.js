// the API helper function that we'll uuse to get the blog posts
// from the content models we created alrady.
async function fetcher(query, { variables } = {}) {
  const response = await fetch(process.env.NEXT_PUBLIC_WEBINY_API_URL, {
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

  const json = await response.json();

  if (json.errors) {
    console.log(json.errors);
    throw new Error("Failed to fetch data");
  }

  return json.data;
}

// the function below is an helper that gets the all the
// author slugs on our blog
export async function getPostsSlug() {
  const data = fetcher(`
    query PostSlugs {
      listPosts {
        data {
          slug
        }
      }
    }  
  `);

  return data.listPosts.data;
}

// helper function that gets an article by its unique slug param
export async function getArticleBySlug(slug) {
  const data = await fetcher(`

    `);
}

// query authors {
//     listAuthors {
//       data {
//         name
//         about
//         slug
//       }
//     }
//   }

//   query articles {
//     listPosts {
//       data {
//         title
//         description
//         featuredImage
//         createdOn
//         createdBy {
//           displayName
//         }
//       }
//     }
//   }

//   query articlesBySlug ($PostsGetWhereInput: PostsGetWhereInput!) {
//     post: getPosts(where: $PostsGetWhereInput) {
//       data {
//         id
//         body
//         slug
//         title
//         createdOn
//         description
//         featuredImage
//         author {
//           name
//           slug
//           picture
//         }
//       }
//     }

//     morePosts: listPosts(limit: 2, sort: createdOn_ASC) {
//       data {
//         id
//         slug
//         title
//         createdOn
//               description
//         featuredImage
//         author {
//           name
//           picture
//           description
//         }
//       }
//     }
//   }
