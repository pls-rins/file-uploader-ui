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

<Modal title="Ajouter un nouveau document" bind:open={clickOutsideModal} autoclose>
	<Upload />
</Modal>

<Table />
