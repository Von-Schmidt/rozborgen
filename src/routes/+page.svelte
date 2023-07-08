<script>
	import ScriptButton from './ScriptButton.svelte';
    import App from './App.svelte';
</script>

<svelte:head>
    <title>ROZBORGEN</title>
    <meta name="description" content="Generátor rozborů z maturitní četby" />
</svelte:head>

<section>
    <App />
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 0.4;
    }
</style>