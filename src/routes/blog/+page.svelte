<script lang="ts">
	import PostCard from '../../components/PostCard.svelte';
	export let data: any;
</script>

<section>
	<h1>Blog</h1>
	{#if data.props.posts}
		<ul>
			{#each data.props.posts as post}
				<li>
					<PostCard {post} />
				</li>
			{/each}
		</ul>
	{:else}
		<p>No posts found.</p>
	{/if}
</section>

<style>
	section {
		background-color: var(--black);
		margin-top: calc(0px - var(--header-height));
		padding: 5rem 1rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	h1 {
		color: var(--white);
	}
	ul {
		list-style: none;
		padding: 0;
		max-width: 800px;
	}
	ul li + li {
		margin-top: 2rem;
	}
</style>
