<script>
    import { resultglobal } from '../stores';
    import '../styles.css';

    $: console.log($resultglobal);
</script> 


<p></p>

<div class="explanationwrapper">
    <div class="explanation">
        <p class="explanationtext">{@html $resultglobal}</p>
    </div>
</div>