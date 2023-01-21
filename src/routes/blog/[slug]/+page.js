export const prerender = true;

const query = `
  query getPostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      date
      title
      content
      author {
        node {
          name
        }
      }
      categories {
        nodes {
          name
        }
      }
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
`;

export async function load({ params, fetch }) {
	const url = 'https://20k.media/graphql';
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			query,
			variables: {
				slug: params.slug
			}
		})
	});
	console.log(response);

	if (response.ok) {
		const responseObj = await response.json();
		const { post } = responseObj.data;

		return {
			props: {
				post
			}
		};
	}

	return {
		status: response.status
		// error: new Error(`Could not load ${url}`)
	};
}
