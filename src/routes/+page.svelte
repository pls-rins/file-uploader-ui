<script lang="“ts”">
	import Upload from './Upload.svelte';
	import Table from './Table.svelte';

	import { SpeedDial, SpeedDialButton, Button, Modal } from 'flowbite-svelte';
	import { UploadSolid } from 'flowbite-svelte-icons';

	let clickOutsideModal = false;

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<SpeedDial defaultClass="fixed end-6 bottom-6 z-50">
	<SpeedDialButton name="Ajouter un nouveau document" on:click={() => (clickOutsideModal = true)}>
		<UploadSolid class="w-6 h-6" />
	</SpeedDialButton>
</SpeedDial>

	<!-- <div class="h-full sm:rounded-lg">
		<div class="flex items-center justify-between px-4 pb-4">
		<Button class="end-0 top-0 inline-flex" on:click={() => (clickOutsideModal = true)}>Ajouter un nouveau document</Button>
		</div>-
	</div>	-->
	<Modal title="Ajouter un nouveau document" bind:open={clickOutsideModal} autoclose>
		<Upload />
	</Modal>

<Table />

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}
</style>
