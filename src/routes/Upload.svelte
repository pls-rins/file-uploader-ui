<script>
	import { Fileupload, Label, Helper, Button, Modal } from 'flowbite-svelte';
	import { Dropzone, Spinner } from 'flowbite-svelte';
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
	let isFileUploaded = false;
	let isFileUploading = false;

	function onFileUpload(files) {
		isFileUploading = true;
		const form = new FormData();
		form.append('file', files[0]);

		const options = {
			method: 'POST',
			body: form
		};

		fetch('https://app-8eb63342-ceae-4dd7-b32f-a6f573ef78de.cleverapps.io/', options)
			.then((response) => {
				isFileUploaded = true;
				isFileUploading = false;
			})
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
		{#if isFileUploading}
			<div class="text-center"><Spinner /></div>
		{/if}
		
		{#if isFileUploaded}
			<span
				class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500"
			>
				<svg
					class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path
						d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
					/>
				</svg>
				{showFiles(value)} <span class="hidden sm:inline-flex sm:ms-2"> envoyé avec succès.</span>
			</span>
		{/if}
	</Dropzone>
	<!--
	<div class="flex flex-col justify-center items-center max-w-5xl mx-auto mt-3">
		<Button class="self-end mt-3" on:click={() => onFileUpload()}>Ajouter</Button>
	</div>

	<Helper>SVG, PNG, JPG or GIF (MAX. 800x400px).</Helper>
	-->
	<!--
	https://flowbite.com/docs/components/stepper/ 
	
	<ol class="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
		<li class="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
			<span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
				<svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
					<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
				</svg>
				Personal <span class="hidden sm:inline-flex sm:ms-2">Info</span>
			</span>
		</li>
		<li class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
			<span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
				<span class="me-2">2</span>
				Account <span class="hidden sm:inline-flex sm:ms-2">Info</span>
			</span>
		</li>
		<li class="flex items-center">
			<span class="me-2">3</span>
			Confirmation
		</li>
	</ol>
-->
</div>

<style>
</style>
