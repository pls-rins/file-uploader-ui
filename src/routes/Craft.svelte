<script>
	export let name = '';
	export let astronauts = [];
</script>

<div class="craft">
	<h2 class="craft-name">{name}</h2>
	<ol class="astronauts">
		{#each astronauts.sort((a,b) => a.localeCompare(b)) as astronaut}
			<li>{astronaut}</li>
		{:else}
			<li>This craft is empty (!)</li>
		{/each}		
	</ol>
</div>

<style>
	.craft {
		margin-right: 20px;
		border: solid 1px hsla(0,0%,80%,.75);
		border-radius: 4px 4px 0 0;
		min-width: 250px;
	}
	.craft-name {
		background: hsla(0,0%,80%,.75);
		padding: 5px 10px;
		margin: 0;
	}
	.astronauts {
		padding: 0 10px 0 30px;
	}
	.astronauts li {
		padding-bottom: 5px;
	}
</style>