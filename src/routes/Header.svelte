<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
	import {
		DarkMode,
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Button,
		Input
	} from 'flowbite-svelte';
	let btnClass =
		'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xUfll p-2';
</script>

<header>
	<Navbar rounded color="form">
		<NavBrand href="/">
			<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
				>File Exchanger</span
			>
		</NavBrand>
		<NavHamburger />
		<NavUl>
			<NavLi href="/" active={true}>Home</NavLi>
			<NavLi href="/about">About</NavLi>
		</NavUl>
	</Navbar>
</header>

<style>
	header {
		position: fixed;
		width: 100%;
		top:0;
		left: 0;
	}
</style>
