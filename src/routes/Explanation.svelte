<script>
    import './styles.css';
</script>

<div class="explanationwrapper">
    <div class="explanation">
        <p class="explanationtext">Zadejte název díla, pro který chcete vygenerovat rozbor, pokud se vám dílo nenabídne při doplňování, nebylo ještě zpracováno.</p>
    </div>
</div>

<style>  
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
        margin-top: 3rem;
	}
</style>