<script>
	import Button from '../../components/Button.svelte';
</script>

<section>
	<div class="container-inner">
		<div class="content">
			<h1 class="page-title">Make your business turn heads.</h1>
			<h2 class="page-subtitle h5">
				Impress your clients with a website that tells your brand's story.
			</h2>
			<div class="buttons">
				<div class="button-left">
					<Button buttonText={'Get A Quote'} buttonLink="#" buttonType="primary" />
				</div>
				<Button buttonText={'Learn More'} buttonLink="#" buttonType="secondary" />
			</div>
		</div>
		<i class="icon-down-open-big" />
	</div>
</section>

<style>
	section {
		height: 50vh;
		margin-top: calc(0px - var(--header-height));
		padding: calc(var(--header-height) + 4rem) 5% calc(var(--header-height) + 2rem) 5%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	i::before {
		font-size: 1.5rem;
		padding: 1rem;
		background-color: var(--white);
		border-radius: 50%;
		position: absolute;
		bottom: -1.5rem;
		left: calc(50% - 1.5rem);
		transition: color 0.8s cubic-bezier(0.2, 1, 0.3, 1);
		color: var(--black);
		z-index: 1;
	}
	i:hover::before {
		cursor: pointer;
		background-color: var(--red);
	}
	.container-inner {
		background-color: var(--off-white);
		display: flex;
		justify-content: center;
		width: var(--content-width);
		min-height: 60vh;
		border-radius: 20px;
		position: relative;
		background-image: url(/grid-05.png);
		background-size: cover;
		color: var(--white);
	}
	.content {
		max-width: 50rem;
		z-index: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.page-title {
		margin: 0;
		line-height: 1em;
		margin-bottom: 1.5rem;
		text-align: center;
		/* text-shadow: 2px 2px 20px var(--purple-light); */
	}
	.page-subtitle {
		margin: 0;
		margin-bottom: 2rem;
		text-transform: none;
		font-weight: var(--regular);
		text-align: center;
	}
	.button-left {
		margin-right: 1rem;
		display: inline-block;
	}
	.image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		position: relative;
	}
	.radial-gradient-lg {
		--lg-size: 500px;
		height: var(--lg-size);
		width: var(--lg-size);
		position: absolute;
		top: calc(var(--lg-size) / -2);
		left: calc(var(--lg-size) / -2);
		animation: pulse 4s ease-in-out infinite;
		animation-delay: 2s;
		z-index: 1;
	}
	.radial-gradient-sm {
		--sm-size: 500px;
		height: var(--sm-size);
		width: var(--sm-size);
		position: absolute;
		bottom: calc(var(--sm-size) / -2);
		right: calc(var(--sm-size) / -2);
		animation: pulse 4s ease-in-out infinite;
		animation-delay: 0s;
		z-index: 1;
	}
	@keyframes pulse {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(3);
		}
		100% {
			transform: scale(1);
		}
	}
</style>
