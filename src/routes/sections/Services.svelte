<script>
	import RadialGradient from '../../components/RadialGradient.svelte';
	import ServiceCard from '../../components/ServiceCard.svelte';
	import Title from '../../components/Title.svelte';
</script>

<section>
	<div class="inner-container">
		<h2 class="section-title">What We Offer</h2>
		<div class="col-container">
			<div class="col col-1">
				<div class="left-margin">
					<ServiceCard serviceName="New Websites" buttonLink="#">
						<i class="icon-002-sketch" />
					</ServiceCard>
				</div>
				<ServiceCard serviceName="Website Redesign" buttonLink="#">
					<i class="icon-001-curve" />
				</ServiceCard>
			</div>
			<div class="col-2">
				<div class="top">
					<img
						src="https://20k.media/wp-content/uploads/2023/01/nirmal-rajendharkumar-1lGeOg6IULc-unsplash-1-scaled.jpg"
						alt=""
					/>
				</div>
				<div class="row">
					<div>
						<ServiceCard serviceName="Hosting" buttonLink="#">
							<i class="icon-003-servers" />
						</ServiceCard>
					</div>
					<div class="bottom-margin">
						<ServiceCard serviceName="Maintenance" buttonLink="#">
							<i class="icon-004-wrench" />
						</ServiceCard>
					</div>
				</div>
			</div>
			<div class="col-3">
				<ServiceCard serviceName="Local SEO" buttonLink="#">
					<i class="icon-005-search-interface-symbol" />
				</ServiceCard>
				<ServiceCard serviceName="Web Design" buttonLink="#">
					<i class="icon-006-document" />
				</ServiceCard>
			</div>
		</div>
	</div>
	<div class="radial-gradient-container">
		<RadialGradient gradientColor="var(--red)" />
	</div>
	<div class="radial-gradient-right">
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
					fill="#7a00cb"
				/></g
			></svg
		>
	</div>
</section>

<style>
	section {
		padding: 5rem 1rem 10rem 1rem;
		background-color: var(--black);
		display: flex;
		flex-direction: column;
		justify-content: center;
		/* z-index: -1; */
		position: relative;
		overflow: hidden;
		background-image: url('https://20k.media/wp-content/uploads/2023/01/ooorganize-1.svg');
	}
	.inner-container {
		z-index: 10;
	}
	i {
		color: var(--red);
		font-size: 4rem;
	}
	.section-title {
		color: var(--white);
		text-align: center;
		margin: 1rem 0 2rem 0;
	}
	.col-container {
		display: flex;
		justify-content: center;
		z-index: 100;
	}
	.left-margin {
		margin-left: 2rem;
	}
	.right-margin {
		margin-left: -2rem;
	}
	.col-2 {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.row {
		display: flex;
		margin-top: -1.5rem;
		transform: translateY(6.5rem);
		z-index: 10;
	}
	.bottom-margin {
		margin-top: 1.5rem;
		z-index: 3;
	}
	.top {
		display: flex;
		justify-content: center;
		width: 100%;
		margin-bottom: -200px;
		z-index: 2;
	}
	.top img {
		height: 560px;
		object-fit: cover;
		border-radius: 200px;
	}
	svg {
		color: var(--red);
		width: 4rem;
		height: 4rem;
	}
	.radial-gradient-container {
		--gradient-size: 500px;
		bottom: calc(var(--gradient-size) / -2);
		left: calc(var(--gradient-size) / -2);
		width: var(--gradient-size);
		height: var(--gradient-size);
		position: absolute;
	}
</style>
