<script>
	import { auth, user } from '$lib/firebase/config';
	import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

	async function signInWithGoogle() {
		console.log('Sign in with Google');
		const provider = new GoogleAuthProvider();
		await signInWithPopup(auth, provider);
		loggedIn = true;
	}

	async function signOutSSR() {
		await signOut(auth);
	}

	let loggedIn = false;
</script>

{#if $user}
	<button
		class="border-2 border-black rounded-md px-4 py-2"
		on:click={() => {
			signOutSSR();
		}}
	>
		SignOut
	</button>
{:else}
	<button
		class="border-2 border-black rounded-md px-4 py-2"
		on:click={() => {
			signInWithGoogle();
		}}
	>
		Login
	</button>
{/if}
