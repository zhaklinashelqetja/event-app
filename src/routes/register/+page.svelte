<script>
	let { form } = $props();
</script>

<h1>Register</h1>

{#if form?.error}
	<p id="warning">{form.error}</p>
{/if}

<section>
	<form action="?/register" method="post">
		<div>
			<label for="username">Username</label>
			<input type="text" id="username" name="username" required />
		</div>

		<div>
			<label for="password">Password</label>
			<input type="password" id="password" name="password" required />
		</div>

		<div>
			<button type="submit">Register</button>
		</div>
	</form>

	<a href="/login">Login</a>
</section>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	#warning {
		padding: 25px;
		margin: 20px;
		background-color: rgb(255, 164, 164);
		border: 1px solid red;
	}
</style>
