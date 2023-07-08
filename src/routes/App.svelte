<script>
    import { filters } from './filtersData.js';
    import Filter from './Filter.svelte';
    import './styles.css';
        
        
    let filteredWords = [];
    
    const filterWords = () => {
        let storageArr = []
        if (inputValue) {
            filters.forEach(filter => {
                 if (filter.toLowerCase().startsWith(inputValue.toLowerCase())) {
                     storageArr = [...storageArr, makeMatchBold(filter)];
                 }
            });
        }
        filteredWords = storageArr;
    }	
    
    
    let searchInput;
    let inputValue = "";
        
    $: if (!inputValue) {
        filteredWords = [];
        hiLiteIndex = null;
    }
    
    const clearInput = () => {
        inputValue = "";	
        searchInput.focus();
    }

const setInputVal = (filterName) => {
	inputValue = removeBold(filterName);
	filteredWords = [];
	hiLiteIndex = null;
	document.querySelector('#filter-input').focus();
}	

const submitValue = () => {
	if (inputValue) {
		console.log(`${inputValue} is submitted!`);
		setTimeout(clearInput, 1000);
	} else {
		console.log("You didn't type anything.")
	}
}

const makeMatchBold = (str) => {
	// replace part of (filter name === inputValue) with strong tags
	let matched = str.substring(0, inputValue.length);
	let makeBold = `<strong>${matched}</strong>`;
	let boldedMatch = str.replace(matched, makeBold);
	return boldedMatch;
}

const removeBold = (str) => {
	//replace < and > all characters between
	return str.replace(/<(.)*?>/g, "");
	// return str.replace(/<(strong)>/g, "").replace(/<\/(strong)>/g, "");
}

/* NAVIGATING OVER THE LIST OF COUNTRIES W HIGHLIGHTING */	
let hiLiteIndex = null;
//$: console.log(hiLiteIndex);	
$: hiLitedFilter = filteredWords[hiLiteIndex]; 	
	
const navigateList = (e) => {
	if (e.key === "ArrowDown" && hiLiteIndex <= filteredWords.length-1) {
		hiLiteIndex === null ? hiLiteIndex = 0 : hiLiteIndex += 1
	} else if (e.key === "ArrowUp" && hiLiteIndex !== null) {
		hiLiteIndex === 0 ? hiLiteIndex = filteredWords.length-1 : hiLiteIndex -= 1
	} else if (e.key === "Enter") {
		setInputVal(filteredWords[hiLiteIndex]);
	} else {
		return;
	}
} 

let result = '';
  

async function callAPI() {
    const response = await fetch('http://localhost:5000/api', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        string_input: inputValue
    })
    });

    if (!response.ok) {
    // Handle the error
    console.error('There was an error with the request');
    } else {
    const data = await response.json();
    result = data.result;
    }
}

$: if (result) {
    alert(result);
}
</script>


<svelte:window on:keydown={navigateList} />


<form autocomplete="off" on:submit|preventDefault={submitValue}>
    <div class="input-wrapper">
        <div class="autocomplete">
            <input id="filter-input" 
                            type="text" 
                            placeholder="Zadejte název díla" 
                            bind:this={searchInput}
                            bind:value={inputValue} 
                            on:input={filterWords}>
        </div>

        <input type="submit" value="GO!" on:click={callAPI}>
    </div>

    {#if filteredWords.length > 0}
        <ul id="autocomplete-items-list">
            {#each filteredWords as filter, i}
                <Filter itemLabel={filter} highlighted={i === hiLiteIndex} on:click={() => setInputVal(filter)} />
            {/each}         
        </ul>
    {/if}
</form>


	
<style>
    form {
        width: 100%;
        max-width: 30rem;
        margin: 0 auto;
    }

    .input-wrapper {
        display: flex;
        justify-content: space-between;
    }

    div.autocomplete {
        position: relative;
        width: 71%;
    }

    input {
        border: 1px solid transparent;
        background-color: var(--color-theme-2);
        padding: 10px;
        font-size: 16px;
        margin: 0;
    }

    input[type=text] {
        border: 3px solid var(--color-theme-1);
        border-radius: 5px;
        height: 50px;
        line-height: normal;
        color: var(--color-theme-3);
        display: inline-block;
        width: 100%;
        box-sizing: border-box;
        user-select: auto;
        font-size: 16px;
        padding: 0 6px;
        padding-left: 12px;
    }

    input[type="submit"] {
        display: inline-block;
        outline: 0;
        border: 0;
        cursor: pointer;
        background: var(--color-theme-1);
        color: var(--color-theme-2);
        border-radius: 8px;
        padding: 14px 24px 16px;
        font-size: 18px;
        font-weight: 700;
        line-height: 1;
        transition: transform 200ms,background 200ms;
        width: 28%;
    }

    input[type="submit"]:hover {
        opacity:1;
    }

    #autocomplete-items-list {
        position: relative;
        margin: 0;
        padding: 0;
        top: 0;
        width: 70%;
        border: 3px solid var(--color-theme-1);
    }

</style>