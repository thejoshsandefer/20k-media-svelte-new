<script async src="https://app-cdn.clickup.com/assets/js/forms-embed/v1.js"></script>

<section>
	<form
		id="my-form-id"
		method="POST"
		action="https://api.formcake.com/api/form/f5d388cb-d960-4ee1-8481-5a3c039acca5/submission"
	>
		<label for="first-name">
			First Name
			<input placeholder="First Name" type="text" name="first-name" id="first-name" />
		</label>
		<label for="last-name">
			Last Name
			<input placeholder="Last Name" type="text" name="last-name" id="last-name" />
		</label>
		<label for="email" aria-hidden="true">
			Email
			<input placeholder="Email" type="text" name="email" id="email" />
		</label>
		<span class="btn"><input type="submit" value="submit" /></span>
	</form>
</section>

<style>
	section {
		width: 100%;
		height: 100vh;
		background-color: var(--black);
		margin-top: calc(0px - var(--header-height));
	}
	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
	}
	label {
		visibility: hidden;
		display: flex;
		flex-direction: column;
	}
	label > input {
		visibility: visible;
	}
	input[type='text'] {
		padding: 15px 20px;
		border-radius: 12px;
	}
	input[type='text']:focus {
		outline: none;
		border: 2px solid var(--green);
	}
	input[type='submit'] {
		background-color: transparent;
		outline: none;
		box-shadow: none;
		border: none;
		color: var(--white);
		font-family: var(--heading-font-family);
		font-weight: var(--bold);
		text-transform: capitalize;
		letter-spacing: 1.1px;
	}
</style>
