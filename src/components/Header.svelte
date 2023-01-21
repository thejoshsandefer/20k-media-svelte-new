<script>
	import Button from './Button.svelte';

	let y;
</script>

<header
	class:transparent={y < 400}
	class:before-animate={y > 400 && y < 500}
	class:sticky={y > 500}
>
	<div class="header-inner">
		<a href="/">
			<img
				src="https://20k.media/wp-content/uploads/2022/04/20k-Media-Logo-White-Border-with-Red-1.svg"
				alt="20k media logo"
			/>
		</a>
		<ul class="header-nav">
			<li>
				<a href="/">Home</a>
			</li>
			<li><a href="/blog">Blog</a></li>
			<li><a href="/contact">Contact</a></li>
		</ul>
		<Button buttonText="Get a Quote" buttonLink="/contact" buttonType="secondary" />
	</div>
</header>

<svelte:window bind:scrollY={y} />

<style>
	header {
		display: flex;
		justify-content: center;
		width: 100vw;
		z-index: 1000;
	}
	.transparent {
		background-color: transparent;
	}
	.before-animate {
		opacity: 0;
	}
	.sticky {
		background-color: var(--black);
		opacity: 1;
		transition: opacity 1s cubic-bezier(0.2, 1, 0.3, 1),
			background-color 0.5s cubic-bezier(0.2, 1, 0.3, 1);
		position: sticky;
		top: 0;
	}
	img {
		height: calc(var(--header-height) * 0.8);
		object-fit: contain;
	}
	.header-inner {
		width: var(--content-width);
		height: var(--header-height);
		margin: 0 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.header-nav {
		list-style-type: none;
		display: flex;
		font-family: var(--heading-font-family);
		text-transform: uppercase;
		color: var(--white);
		font-weight: var(--bold);
		letter-spacing: 1.3px;
		padding: 0;
	}
	.header-nav li:not(:last-child) {
		margin-right: 2rem;
	}
</style>
