import { PUBLIC_WORDPRESS_API_URL } from '$env/static/public';
export const prerender = true;
const query = `
    query getPosts {
      posts {
        nodes {
          databaseId
          uri
          title
          excerpt
          date
          featuredImage {
            node {
              sourceUrl
              altText
              mediaDetails {
                width
                height
              }
            }
          }
        }
      }
    }
  `;
export async function load({ fetch }) {
	const url = 'https://20k.media/graphql';
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ query })
	});

	if (response.ok) {
		const responseObj = await response.json();
		const posts = responseObj.data.posts.nodes;

		return {
			props: {
				posts
			}
		};
	}

	return {
		status: response.status,
		error: new Error(`Could not load ${url}`)
	};
}
