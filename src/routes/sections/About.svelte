<section>
	<div class="container">
		<!-- <div class="radial-lg" /> -->

		<div class="col-1">
			<img src="https://20k.media/wp-content/uploads/2022/10/Headshot_jpg.jpg" alt="" />
			<div class="animated-box" />
		</div>
		<div class="col-2">
			<h2>Make an Impact.</h2>
			<ul>
				<li>
					<h3 class="h5">Web Design</h3>
					<p>
						Websites are the first impression of your business. Make it count with a website that
						tells your brand's story.
					</p>
				</li>
				<li>
					<h3 class="h5">Web Design</h3>
					<p>
						Websites are the first impression of your business. Make it count with a website that
						tells your brand's story.
					</p>
				</li>
				<li>
					<h3 class="h5">Web Design</h3>
					<p>
						Websites are the first impression of your business. Make it count with a website that
						tells your brand's story.
					</p>
				</li>
			</ul>
		</div>
	</div>
</section>

<style>
	section {
		padding: 10rem 1rem;
		background-color: var(--black-alt);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: var(--white);
		position: relative;
		overflow: hidden;
	}
	.container {
		max-width: var(--content-width);
		width: 100%;
		display: flex;
		justify-content: space-evenly;
	}
	.col-1 {
		position: relative;
		z-index: 1;
	}
	.col-1 img {
		max-width: 400px;
		aspect-ratio: 1/1.2;
		object-fit: cover;
		z-index: 3;
	}
	.col-2 {
		max-width: 500px;
		margin-left: 100px;
	}
	.animated-box {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background-color: var(--red);
		transform: rotate(45deg);
		z-index: -1;
		animation: tilt 10s ease-in-out infinite;
	}

	@keyframes tilt {
		0% {
			transform: rotate(0deg);
		}
		25% {
			transform: rotate(5deg);
		}
		50% {
			transform: rotate(0deg);
		}
		75% {
			transform: rotate(-5deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
	ul {
		list-style-type: none;
		padding-left: 0;
	}
	li {
		--dot-size: 1.8rem;
		position: relative;
		border-bottom: 1px solid rgba(255, 255, 255, 0.117);
		padding-left: 5em;
		margin-bottom: 1rem;
	}
	li h3 {
		margin: 0;
	}
	li p {
		color: var(--off-white);
		margin: 0.5rem 0 1rem 0;
	}
	li::after {
		content: '';
		position: absolute;
		top: 0.5em;
		left: 0em;
		width: var(--dot-size);
		height: var(--dot-size);
		border: 1px solid var(--white);
		border-radius: 50%;
	}
	li::before {
		content: '';
		position: absolute;
		top: 0.5em;
		left: 0em;
		width: var(--dot-size);
		height: var(--dot-size);
		border-radius: 50%;
		transform: translate(-0.5em, -0.5em);
		background-color: var(--red);
	}
</style>
