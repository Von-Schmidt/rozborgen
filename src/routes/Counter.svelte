<script>
	let package_name = '';

	let result = '';
  
	async function callAPI() {
		const response = await fetch('http://localhost:5000/api', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			string_input: 'marysa'
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
	
<input bind:value={package_name}>

<button on:click={callAPI}>hi</button>

<style>
	input {
		border: none;
		border-bottom: 2px solid;
		background-color: none;
	}

</style>