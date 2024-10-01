<script>
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell,
        Helper
	} from 'flowbite-svelte';
	import { onMount } from 'svelte';

	/**
	 * @type {any[]}
	 */
	let files = [];
    let jsonFiles = {};


	import Craft from './Craft.svelte';
	let updated = new Date();
	let astronauts = [];
	let crafts = {};
	let spaceCrafts = '';

	$: spaceCrafts = Object.keys(crafts).length;

	const getFiles = async () => {
		let url = `https://app-8eb63342-ceae-4dd7-b32f-a6f573ef78de.cleverapps.io/files`;
		try {
			const res = await fetch(url);
			let jsonData = await res.json();
            jsonFiles = jsonData;
			files = Array.isArray(jsonData) ? jsonData : [];
            updated = new Date();
		} catch (error) {
			console.error('Caught error:', error);
		}
	};

	onMount(getFiles());


	/*const getAstronauts = async () => {
		let url = `https://api.allorigins.win/get?url=http://api.open-notify.org/astros.json`;
		const res = await fetch(url);
		const json = await res.json();
		astronauts = JSON.parse(json['contents'])['people'];
		crafts = {};
		astronauts.forEach((info) => {
			const { craft, name } = info;

			if (crafts[craft] !== undefined) {
				crafts[craft].push(name);
			} else {
				crafts[craft] = [name];
			}
		});
		updated = new Date();
		return crafts;
	};*/
</script>

<Helper>
    <time>Updated: {updated.toLocaleDateString()} - {updated.toLocaleTimeString()}</time>
</Helper>


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
		{#each files || [] as item}
			<tr>
				<td class="px-6 py-4 whitespace-nowrap">{item.key}</td>
				<!-- Add more data fields as needed -->
			</tr>
		{/each}
	</tbody>
</table>
<!--
<h1>
	Currently {astronauts.length} astronauts<br />in {spaceCrafts} spacecraft{spaceCrafts > 1
		? 's'
		: ''}
</h1>


{#await getAstronauts()}
	<p>Loading...</p>
{:then crafts}
	<div class="crafts">
		{#each Object.keys(crafts) as name}
			<Craft {name} astronauts={crafts[name]} />
		{/each}
	</div>
	<table class="min-w-full divide-y divide-gray-200">
		<thead class="bg-gray-50">
			<tr>
				<th
					scope="col"
					class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
				>
					ID
				</th>
			</tr>
		</thead>
		<tbody class="bg-white divide-y divide-gray-200">
			{#each Object.keys(crafts) as name}
				<td class="px-6 py-4 whitespace-nowrap">{crafts[name]}</td>
			{/each}
		</tbody>
	</table>
{:catch err}
	<h2 class="error">Sorry, I could not get this information right now.<br />Try again later.</h2>
{/await}
-->
