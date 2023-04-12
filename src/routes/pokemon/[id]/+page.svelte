
<script>
    export let data
</script>
<div class="flex flex-col items-center">
    <h1 class="text-4xl text-center my-8 uppercase">{data.pokeman.name}</h1>
    <p>Type: <strong>{data.pokeman.types[0].type['name']}</strong> | Height: <strong>{data.pokeman.height}</strong> | Weight: <strong>{data.pokeman.weight}</strong></p>
    <img class="card-image" src="{data.pokeman.sprites['versions']['generation-i']['red-blue']['front_gray']}" alt="{data.pokeman.name}">
</div>