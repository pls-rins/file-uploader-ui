<script lang="“ts”">
	import Upload from './Upload.svelte';

	import { SpeedDial, SpeedDialButton, Button, Modal } from 'flowbite-svelte';
	import { UploadSolid } from 'flowbite-svelte-icons';

	let clickOutsideModal = false;

	export let data;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<table class="min-w-full divide-y divide-gray-200">
	<thead class="bg-gray-50">
		<tr>
			<th
				scope="col"
				class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
			>
				ID
			</th>
			<!-- Add more headers as needed -->
		</tr>
	</thead>
	<tbody class="bg-white divide-y divide-gray-200">
		{#each data.files as file}
			<tr>
				<td class="px-6 py-4 whitespace-nowrap">{file.key}</td>
			</tr>
		{/each}
	</tbody>
</table>


<SpeedDial defaultClass="fixed end-6 bottom-6 z-50">
	<SpeedDialButton name="Ajouter un nouveau document" on:click={() => (clickOutsideModal = true)}>
		<UploadSolid class="w-6 h-6" />
	</SpeedDialButton>
</SpeedDial>

<Modal title="Ajouter un nouveau document" bind:open={clickOutsideModal} autoclose>
	<Upload />
</Modal>
