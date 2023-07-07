<script>
	import Button from './Button.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>ROZBORGEN</title>
	<meta name="description" content="Generátor rozborů z maturitní četby" />
</svelte:head>

<section>

	<Button />
	
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

</style>
