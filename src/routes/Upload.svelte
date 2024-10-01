<script>
	import { Fileupload, Label, Helper, Button, Modal } from 'flowbite-svelte';
	import { Dropzone } from 'flowbite-svelte';
	import {
		ShareNodesSolid,
		PrinterSolid,
		DownloadSolid,
		FileCopySolid
	} from 'flowbite-svelte-icons';

	/**
	 * @type {{ name: any; }[]}
	 */
	let files = [];
	let dataFile = null;
	let value = [];
	function onFileUpload(files) {
		const form = new FormData();
		form.append('file', files[0]);

		const options = {
			method: 'POST',
			body: form,
		};

		fetch('https://app-8eb63342-ceae-4dd7-b32f-a6f573ef78de.cleverapps.io/', options)
			.then((response) => console.log(response))
			.then((response) => console.log(response))
			.catch((err) => console.error(err));
/*
		const formData = new FormData();
		formData.append('file', value[0]);

		const upload = fetch('https://app-8eb63342-ceae-4dd7-b32f-a6f573ef78de.cleverapps.io/', {
			method: 'POST',
			body: formData
		})
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
*/
	}


	const dropHandle = (event) => {
		value = [];
		event.preventDefault();
		if (event.dataTransfer.items) {
			[...event.dataTransfer.items].forEach((item, i) => {
				if (item.kind === 'file') {
					const file = item.getAsFile();
					value.push(file.name);
					value = value;
				}
			});
		} else {
			[...event.dataTransfer.files].forEach((file, i) => {
				value = file.name;
			});
		}
	};

	const handleChange = (event) => {

		const files = event.target.files;

		onFileUpload(files);

		if (files.length > 0) {
			value.push(files[0].name);
			value = value;
		}
	};

	const showFiles = (files) => {
		if (files.length === 1) return files[0];
		let concat = '';
		files.map((file) => {
			concat += file;
			concat += ',';
			concat += ' ';
		});

		if (concat.length > 40) concat = concat.slice(0, 40);
		concat += '...';
		return concat;
	};
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click|stopPropagation>
	<Dropzone
		class="flex flex-col justify-center items-center max-w-5xl mx-auto mt-3"
		id="dropzone"
		on:drop={dropHandle}
		on:dragover={(event) => {
			event.preventDefault();
		}}
		on:change={handleChange}
	>
		<svg
			aria-hidden="true"
			class="mb-3 w-10 h-10 text-gray-400"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
			/></svg
		>
		{#if value.length === 0}
			<p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
				<span class="font-semibold">Click to upload</span> or drag and drop
			</p>
			<p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
		{:else}
			<p>{showFiles(value)}</p>
		{/if}
	</Dropzone>

	<div class="flex flex-col justify-center items-center max-w-5xl mx-auto mt-3">
		<Button class="self-end mt-3" on:click={() => onFileUpload()}>Ajouter</Button>
	</div>

	<Helper>SVG, PNG, JPG or GIF (MAX. 800x400px).</Helper>
</div>

<style>
</style>
