<script>
	import { page } from '$app/stores';
	import rozborgen from '$lib/images/rozborgen.svg';
    import rozborgenpeach from '$lib/images/rozborgen-FF968A.svg';
</script>

<header>
    <div>
        <a href="/">
        <img src={rozborgenpeach} alt="logo">
        </a>
    </div>
</header>

<style>
    header {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 10vh;
    }

    div {
        width: 40vh;
    }
    
</style>