<script>
    import { tariffs } from "./tariffs";
</script>
<div class="tariffs-wrapper">
    {#each tariffs as item}
    <div class="tariffs-container">
        <div class="tariffs-content">
            
        </div>
    </div>
    {/each}
</div>
<style>
    .tariffs-wrapper{
        margin-top: 10px;
        height: fit-content;
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    .tariffs-container{ 
        width: 33%;
        height: 40vh;
        border-radius: 16px;
        background-color: #171B26;
    }
</style>