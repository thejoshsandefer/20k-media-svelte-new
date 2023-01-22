<script>
	import RadialGradient from '../../components/RadialGradient.svelte';
	import ServiceCard from '../../components/ServiceCard.svelte';
	import Title from '../../components/Title.svelte';
	import Image from 'svimg';
</script>

<section>
	<div class="inner-container">
		<Title titleText="Services" />
		<h2 class="section-title">What We Do</h2>
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
						loading="lazy"
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
</section>

<style>
	section {
		padding: 5rem 5% 10rem 5%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: relative;
		overflow: hidden;
	}
	.inner-container {
		z-index: 10;
	}
	i {
		color: var(--red);
		font-size: 4rem;
	}
	.section-title {
		/* color: var(--white); */
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
		animation: float 4s ease-in-out infinite;
		border: 1px solid var(--purple-dark);
		box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.5);
	}
	@keyframes float {
		0% {
			transform: translateY(15px);
		}
		50% {
			transform: translateY(0px);
		}
		100% {
			transform: translateY(15px);
		}
	}
</style>
