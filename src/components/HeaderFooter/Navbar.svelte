<script>
	import AuthButton from '../Auth/AuthButton.svelte';
</script>

<div
	class="flex justify-between fixed w-full py-6 sm:px-8 px-2 font-semibold bg-[#fad6ca] items-center"
>
	<a href="https://finiteloop.co.in" target="_blank">
		<span class="flex items-center gap-x-2">
			<img src="/flc_logo_crop.png" alt="flc_Logo" class="md:h-16 h-12" />
			<h3 class="sm:text-2xl text-md font-bold">Finite Loop Club</h3>
		</span>
	</a>
	<!-- <a href="https://www.instagram.com/p/C2ES0MOv7tK/" target="_blank">
		<h3 class="sm:text-2xl text-md font-bold">HackLoop</h3>
	</a> -->
	<AuthButton />
</div>
