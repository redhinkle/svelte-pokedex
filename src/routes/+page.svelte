<script>
    // import {pokemon} from '../stores/pokestore'
    import PokemanCard from '../components/pokemanCard.svelte';
    export let data;
    let searchTerm = "";
    let filteredPokemon = []

    $: {
        console.log(searchTerm)
        if(searchTerm){
            filteredPokemon = data.pokemon.filter(pokeman => pokeman.name.toLowerCase().includes(searchTerm.toLowerCase()))
        }else{
            filteredPokemon = [...data.pokemon]
        }
    }
</script>
<svelte:head>
    <title>Home</title>
</svelte:head>

<h1 class=" text-4xl text-center my-8 uppercase">Pdex</h1>
<input class="w-full rounded-md text-lg p-4 border-2 border-gray-200" type="text" bind:value={searchTerm} name="" id="" placeholder="Search Pokemon">
<div class="grid gap-4 md:grid-cols-2 grid-cols-1 py-4">

    {#each filteredPokemon as pokeman}
    <PokemanCard {pokeman}/>
    {/each}
</div>
<style>
    h1{
        color: red
    }
</style>