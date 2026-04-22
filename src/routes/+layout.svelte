<script>
	let { children, data } = $props();
</script>

<svelte:head>
    <title>EventApp</title>
</svelte:head>

<header>
	<p>
		Welcome {data.user?.username || 'Guest'}
	</p>
    {#if data.user}
        <form action="/logout?/logout" method="post">
            <button type="submit" id="logout">Logout</button>
        </form>
    {:else}
        <a href="/login" id="login">Login</a>
    {/if}
</header>
{@render children()}

<footer>
	<div>
		<h2>Contact</h2>
		<a href="mailto:zhashe20@htl-shkoder.com">Write an email</a>
	</div>
	<div>
		<h2>Admin</h2>
		<a href="/admin">Go to admin area</a>
	</div>
</footer>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

	footer {
		display: flex;
		justify-content: space-evenly;
		align-items: flex-start;
		gap: 40px;
		padding: 40px 60px;
		background: linear-gradient(135deg, #fdfbfb, #f3f4f6);
		border-top: 1px solid #e5e7eb;
		margin-top: 60px;
		flex-wrap: wrap;
	}

	footer div {
		display: flex;
		flex-direction: column;
		gap: 10px;
		min-width: 180px;
	}

	footer h2 {
		font-size: 18px;
		margin: 0 0 8px 0;
		font-weight: 600;
		color: #1f2937;
	}

	footer a {
		text-decoration: none;
		font-size: 14px;
		color: #4f46e5;
		font-weight: 500;
		transition: all 0.2s ease;
	}

	footer a:hover {
		color: #4338ca;
		transform: translateX(4px);
	}

	header {
		width: 100%;
		padding: 20px 0px 20[x 0px];
		background: linear-gradient(135deg, #eef2ff, #f5f3ff);
		font-size: 18px;
		font-weight: 500;
		color: #1f2937;

		display: flex;
		align-items: center;
		justify-content: space-between;

		border-bottom: 1px solid #e5e7eb;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
	}

    p{
        padding: 0px 20px;
    }

    #login{
        font-size: 14px;
        color: #3b58b9;
        text-decoration: none;
        font-weight: 700;
        font-size: 20px;
        transition: all 0.2s ease;
        padding: 0px 60px 0px 0px;
    }

    #logout{
        font-size: 16px;
        color: #e76a6a;
        font-weight: 700;
        padding: 0px 60px 0px 0px;
        border: 0px solid #f5f3ff;
    }
    #logout:hover {
        color: #870000;
        transform: translateX(4px);
    }

	@media (max-width: 600px) {
		footer {
			flex-direction: column;
			gap: 30px;
			padding: 30px 25px;
		}
	}
</style>
