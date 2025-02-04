<script lang="ts">
import { superForm } from "sveltekit-superforms";
import type { PageData } from "./$types";
import { fail } from '@sveltejs/kit';
import { zod, zodClient } from "sveltekit-superforms/adapters";


export let data: PageData;

const {form, enhance, errors} = superForm(data.form)

    

   
</script>

<style>
	.identity{
		display: flex;
		flex-direction: column;
		gap: 8px;
		width: 100%;
	}
	input[type="radio"]:checked {
  border: none;
  background-color: white;
}

:root {
    --column: 407px;
}

.form {
    grid-column: 4 / -1;
    column-width: var(--column);
    column-gap: 0;
    will-change: transform;
	break-inside: avoid;
}

</style>


<div class=" w-full pl-[48px] pt-[2%] justify-start flex flex-col  ">
	<h1 class='text-white text-[1.3rem] font-semibold '>APPLY</h1>
	<p class='w-[20%] '>Welcome to the application form for 234design.info.
		All the fields marked with * are required.</p>

		<form class='form mt-10 gap-10 w-[400px]' use:enhance method="POST">

			<div class="level">
				<label class=' text-xl font-semibold ' for="name">Lets get to know you*</label>
				<p class='text-neutral-400 text-sm mt-2'>Select the definition that best represents your practice. The JUNIOR category is best suited for new graduates or those who don't have production portfolio yet but develop projects occasionally</p>
			    <fieldset class='mt-2'>
					<legend class='mb-2 text-sm'> Where do you fit in ?</legend>
					{#each data.skilllevel as levels}
					<label class='flex gap-4'>
						<input class='bg-transparent appearance-none size-4 rounded-full  border-[1px] border-neutral-600' name="level" value={levels} bind:group={$form.level} type="radio">
						{levels}
					</label>
					{/each}
				</fieldset>
				{#if $errors.level}<span>{$errors.level}</span>{/if}
			</div>
			
			<div class="identity">
				<label class=' text-xl font-semibold ' for="name">Your Identity*</label>
				<p class='text-neutral-400 text-sm mb-2'>Enter your Name and Surname if registered as an individual, or add the full name of your activity (e.g., Faye Design).</p>
				<input bind:value={$form.name} name='name' type="text" placeholder="NAME" class='font-thin p-2 border text-neutral-600  border-neutral-600 bg-transparent mb-2 w-full'>
				<input bind:value={$form.name} name='name' type="text" placeholder="SURNAME" class='font-thin p-2 border text-neutral-600  border-neutral-600 bg-transparent w-full'>
				{#if $errors.name}<span>{$errors.name}</span>{/if}

				
                <p class='mt-5 mb-4'>Add the website of your activity: if you don't have one, you can write the link to your online portfolio (a public pdf file or your Behance Dribbble, Github, etc., account).</p>
				<input bind:value={$form.portfolio} name='portfolio' type="text" placeholder="Website/Portfolio/.PDF link" class='p-2 border text-neutral-600 mb-4  border-neutral-600 bg-transparent w-full'>
				<p>Insert your email address. It won't appear in the list we will use it only to get in touch with you.</p>
				<input bind:value={$form.email} name='email' type="email" placeholder="Email" class='p-2 border text-neutral-600 mb-4  border-neutral-600 bg-transparent w-full'>
				

			</div>

			



		</form>
</div>







