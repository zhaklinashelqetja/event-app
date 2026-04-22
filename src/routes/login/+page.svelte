<script>
	let { form } = $props();
</script>

<h1>Login-Page</h1>

{#if form?.error}
	<p id="warning">{form.error}</p>
{/if}

<section>
	<form action="?/login" method="Post">
		<div>
			<label for="username">Username</label>
			<input type="text" id="username" name="username" required />
		</div>

		<div>
			<label for="password">Password</label>
			<input type="password" id="password" name="password" required />
		</div>

		<div>
			<button type="submit">Login</button>
		</div>
	</form>

	<a href="/register">Register</a>
</section>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	#warning {
		padding: 25px;
		margin: 20px 0px 20px 0px;
		background-color: rgb(226, 170, 170);
		border: 1px solid rgb(151, 0, 0);
	}
</style>
