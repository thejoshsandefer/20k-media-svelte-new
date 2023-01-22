<script lang="ts">
	import PostCardSmall from '/src/components/PostCardSmall.svelte';

	export let posts: any;
</script>

<section>
	<h2>Blog</h2>
	<div class="inner-container">
		{#if posts}
			<ul>
				{#each posts as post}
					<PostCardSmall {post} />
				{/each}
			</ul>
		{:else}
			<p>No posts found.</p>
		{/if}
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 50px 5%;
	}
	h2 {
		margin: 0;
	}
	.inner-container > ul {
		display: flex;
		flex-direction: row;
		gap: 50px;
		width: var(--content-width);
		max-width: 90%;
	}
</style>
