<template>
    <div class="container">

       <h1>
           Funcionario
       </h1>
    </div>

</template>

<script>
    export default {
        name: 'Funcionario',
        data() {
            return {
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    tfoot td {
        text-align: right;
    }
    
    td:first-child,
    th:first-child {
        max-width: 50px !important;
    }
    
    td button {
        padding: 0px 5px !important;
        margin: 0;
    }
    .restart-button {
        float:left
    }

    .winner {
        display: inline-block
    }
</style>