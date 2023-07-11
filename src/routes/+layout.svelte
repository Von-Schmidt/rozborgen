<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
		<div class="explanationwrapper">
			<div class="explanation">
				<p class="explanationtext">Zadejte název díla, pro který chcete vygenerovat rozbor, pokud se vám dílo nenabídne při doplňování, nebylo ještě zpracováno.</p>
			</div>
		</div>

	</main>

	<footer>
		<p>made by <a href="https://vincentsmid.xyz">Vincent Šmíd</a></p>
	</footer>
</div>

<style>
    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    main {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        width: 100vw/2;
        margin: 1rem;
        box-sizing: border-box;
    }

	.explanation {
		display: flex;
		justify-content: center;
		align-items: center;
        max-width: 30rem;
        margin: 0 auto;
		flex-direction: column;
	}

	.explanationtext {
		font-weight: bold;
		color: var(--color-theme-1);
		word-wrap: break-word;
		width: 100%;
		text-align: center;
	}

	.explanationwrapper {
		display: flex;
		justify-content: center;
	}

    footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}

</style>