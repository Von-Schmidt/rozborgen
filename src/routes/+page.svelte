<script>
    import App from './App.svelte';
    import Explanation from './Explanation.svelte';
</script>

<svelte:head>
    <title>ROZBORGEN</title>
    <meta name="description" content="Generátor rozborů z maturitní četby" />
</svelte:head>

<section>
    <App />
    <Explanation />
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