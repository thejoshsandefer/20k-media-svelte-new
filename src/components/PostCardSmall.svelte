<script>
	import Button from './Button.svelte';
	export let post;
</script>

<article>
	{#if post.featuredImage}
		<a href={`/blog${post.uri}`}>
			<img
				src={post.featuredImage.node.sourceUrl}
				alt={post.featuredImage.node.altText}
				loading="lazy"
			/>
		</a>
	{/if}
	<div class="content">
		<a href={`/blog${post.uri}`}>
			<h3 class="h5">{post.title}</h3>
		</a>
		<div>{@html post.excerpt}</div>
		<Button buttonText="Read More" buttonLink={`/blog${post.uri}`} buttonType="primary" />
	</div>
</article>

<style>
	article {
		background-color: var(--white);
		border-radius: 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
		flex: 1 1 0px;
	}
	article > a {
		width: 100%;
		text-decoration: none;
	}
	article h2 {
		margin: 0;
	}
	article img {
		border-radius: 12px 12px 0 0;
		max-width: 100%;
		height: auto;
		width: 100%;
		object-fit: cover;
	}
	.content {
		/* padding: 2.5rem; */
	}
</style>
