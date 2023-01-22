<script lang="ts">
	import Title from '/src/components/Title.svelte';
</script>

<section>
	<div class="inner-container">
		<Title titleText="About" />
		<h2>We are creatives</h2>
		<h3 class="h6">Lorem Ipsum</h3>
	</div>
</section>

<style>
	section {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 50px 5%;
	}
	.inner-container {
		background-color: var(--off-white);
		width: var(--content-width);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border-radius: 20px;
		min-height: 550px;
		background-image: url(/grid-05.png);
		background-size: cover;
		color: var(--white);
	}
	h2 {
		margin: 0;
	}
</style>
