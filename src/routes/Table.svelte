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

	onMount(async () => {
		let url = `https://app-8eb63342-ceae-4dd7-b32f-a6f573ef78de.cleverapps.io/files`;
		try {
			const res = await fetch(url);
			let jsonData = await res.json();
            jsonFiles = jsonData;
			files = Array.isArray(jsonData) ? jsonData : [];
		} catch (error) {
			console.error('Caught error:', error);
		}
	})

</script>
<!--
<Helper>
    <time>Updated: {updated.toLocaleDateString()} - {updated.toLocaleTimeString()}</time>
</Helper>
-->
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