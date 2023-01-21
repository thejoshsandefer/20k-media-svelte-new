<script>
	import { compute_rest_props } from 'svelte/internal';
	export let data;
	const formatDate = (date) => new Date(date).toLocaleDateString();
	const categories = data.categories?.nodes?.map((category) => category.name) ?? [];
</script>

<a href="/blog" class="blog-link">Blog</a>
<article>
	{#if data.props.post.featuredImage}
		<img
			src={data.props.post.featuredImage.node.sourceUrl}
			alt={data.props.post.featuredImage.node.altText}
		/>
	{/if}
	<h1>{data.props.post.title}</h1>
	<p class="post-meta">
		{data.props.post.author.node.name} on {formatDate(data.props.post.date)}
	</p>
	<div>{@html data.props.post.content}</div>
	{#if categories.length}
		<div class="category-list">
			<h4>Categorized As</h4>
			<p>{categories.join(', ')}</p>
		</div>
	{/if}
</article>

<style>
	.blog-link {
		display: block;
		color: black;
	}
</style>
