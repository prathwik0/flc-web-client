<script>
	import { auth, user, userLoaded } from '$lib/firebase/config';
	import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

	async function signInWithGoogle() {
		const provider = new GoogleAuthProvider();
		await signInWithPopup(auth, provider);
		loggedIn = true;
	}

	async function signOutSSR() {
		await signOut(auth);
	}

	let loggedIn = false;
</script>

{#if $user && $userLoaded}
	<button
		on:click={() => {
			signOutSSR;
		}}
	>
		SignOut
	</button>
{:else}
	<button
		on:click={() => {
			signInWithGoogle;
		}}
	>
		Login
	</button>
{/if}
