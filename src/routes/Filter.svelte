<script>
    export let itemLabel;
    export let highlighted;
    import './styles.css';
</script>

<style>
    button.autocomplete-items {
        position: absolute;
        border: none;
        z-index: 99;
        width: 100%;
        padding: 10px;
        cursor: pointer;
        background-color: var(--color-theme-2);
        color: var(--color-theme-3);
        text-align: left;
        outline: none;
        border-radius: 10px;
        box-sizing: border-box;
    }

    button.autocomplete-items:hover {
        /*when hovering an item:*/
        background-color: var(--color-theme-1);
        color: white;
    }

    button.autocomplete-items:active,
    .autocomplete-active {
        /*when navigating through the items using the arrow keys:*/
        background-color: #ff412b !important;
        color: #ffffff;
    }

    button.autocomplete-container {
        position: relative;
        width: 100%;
    }
</style>

<div class="autocomplete-container">
    <button class="autocomplete-items" class:autocomplete-active={highlighted} on:click>{@html itemLabel}</button>
</div>