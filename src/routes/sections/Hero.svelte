<script>
	import Button from '../../components/Button.svelte';
</script>

<section>
	<div class="radial-gradient-lg">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			xmlns:svgjs="http://svgjs.dev/svgjs"
			viewBox="0 0 800 800"
			opacity="1"
			><defs
				><filter
					id="bbblurry-filter"
					x="-100%"
					y="-100%"
					width="400%"
					height="400%"
					filterUnits="objectBoundingBox"
					primitiveUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feGaussianBlur
						stdDeviation="130"
						x="0%"
						y="0%"
						width="100%"
						height="100%"
						in="SourceGraphic"
						edgeMode="none"
						result="blur"
					/></filter
				></defs
			><g filter="url(#bbblurry-filter)"
				><ellipse
					rx="150"
					ry="150"
					cx="408.87360130429875"
					cy="370.080173352626"
					fill="#3e0068"
				/></g
			></svg
		>
	</div>
	<div class="radial-gradient-sm">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			xmlns:svgjs="http://svgjs.dev/svgjs"
			viewBox="0 0 800 800"
			opacity="1"
			><defs
				><filter
					id="bbblurry-filter"
					x="-100%"
					y="-100%"
					width="400%"
					height="400%"
					filterUnits="objectBoundingBox"
					primitiveUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feGaussianBlur
						stdDeviation="130"
						x="0%"
						y="0%"
						width="100%"
						height="100%"
						in="SourceGraphic"
						edgeMode="none"
						result="blur"
					/></filter
				></defs
			><g filter="url(#bbblurry-filter)"
				><ellipse
					rx="150"
					ry="150"
					cx="408.87360130429875"
					cy="370.080173352626"
					fill="#3e0068"
				/></g
			></svg
		>
	</div>
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
		<div class="image">
			<!-- <img src="https://20k.media/wp-content/uploads/2022/11/SEO.jpg" alt="" /> -->
		</div>
	</div>
</section>

<style>
	section {
		height: 50vh;
		margin-top: calc(0px - var(--header-height));
		padding: calc(var(--header-height) + 4rem) 1rem calc(var(--header-height) - 2rem) 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		color: var(--white);
		position: relative;
		background-color: var(--black);
		background-image: url('https://20k.media/wp-content/uploads/2023/01/ooorganize-1.svg');
		overflow: hidden;
	}
	.container-inner {
		display: flex;
		width: var(--content-width);
	}
	.content {
		max-width: 50rem;
		z-index: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.page-title {
		margin: 0;
		line-height: 1em;
		margin-bottom: 1.5rem;
	}
	.page-subtitle {
		margin: 0;
		margin-bottom: 2rem;
		text-transform: none;
		margin-right: 150px;
		font-weight: var(--regular);
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
