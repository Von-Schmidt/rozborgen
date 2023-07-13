<script>
    import { resultglobal } from '../stores';

    $: console.log($resultglobal);
</script> 


<p>{@html $resultglobal}</p>