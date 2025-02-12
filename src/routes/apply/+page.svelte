<script lang="ts">
import SuperDebug, {  superForm, superValidate } from "sveltekit-superforms";
import type { PageData } from "./$types";
import { fail, text } from '@sveltejs/kit';
import { zod, zodClient } from "sveltekit-superforms/adapters";
	import { Schema } from "zod";
	import { formSchema } from "$lib/formTypes";
	import { fade } from "svelte/transition";
export let data: PageData;
const { form, enhance, errors, message, constraints } = superForm(data.form, {
    taintedMessage: 'Really want to quit?',
    resetForm: true,
	validationMethod: 'onblur',
	validators: zodClient(formSchema),
    onSubmit: ({ formData, cancel }) => {
        // Client-side validation
        const level = formData.getAll('level');
        const field = formData.getAll('field');
        
        if (!level || field.length === 0) {
            console.log('Client validation failed: Required fields missing');
            cancel();
        }
    },

	onResult: ({ result }) => {
		// only reset form on successfull sumbission
		if ( result.type === 'success') {
          setTimeout(() => {
			$message = undefined
		  }, 1000);
			
			return { resetForm: true };
		}
	}
});

</script>

<style >
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
    --column: 387px;
}

.form {
	grid-column: 1 / -1;
	column-width: var(--column);
	column-gap: 40px;
	will-change: transform;
	padding: 32px 30px 32px 48px;
	
}

input[type="checkbox"]:checked {
  border: none;
  background-color: white;
}
</style>


<div class=" w-full pl-[48px] pt-[2%] justify-start">
	<h1 class='text-white text-[1.3rem] font-semibold '>APPLY</h1>
	<p class='w-[20%] '>Welcome to the application form for 234design.info.
		All the fields marked with * are required.</p>

</div>
<form  class=' w-full text-white grid grid-cols-1 form  md:grid-cols-2 xl:grid-cols-5' use:enhance method="POST">

	
	
	<div class="identity ">
		<label class=' text-xl font-semibold ' for="name">Your Identity*</label>
		<p class='text-neutral-400 text-sm mb-2'>Enter your Name and Surname if registered as an individual, or add the full name of your activity (e.g., Faye Design).</p>
		<input bind:value={$form.name} name='name' type="text" placeholder="NAME" class=' p-2 border text-wite  border-neutral-600 bg-transparent mb-2 w-full'>
		<!--<input bind:value={$form.name} name='name' type="text" placeholder="SURNAME" class='font-thin p-2 border text-neutral-600  border-neutral-600 bg-transparent w-full'>-->
		{#if $errors.name}<span class='text-red-500 text-sm'>{$errors.name}</span>{/if}

		
		<p class='mt-5 mb-4'>Add the website of your activity: if you don't have one, you can write the link to your online portfolio (a public pdf file or your Behance Dribbble, Github, etc., account).</p>
		<input bind:value={$form.portfolio} name='portfolio' type="text" placeholder="Website/Portfolio/.PDF link" class='p-2 border text-white mb-4  border-neutral-600 bg-transparent w-full'>
		{#if $errors.portfolio}<span class='text-red-500 text-sm' >{$errors.portfolio}</span>{/if}

		<p>Insert your email address. It won't appear in the list we will use it only to get in touch with you.</p>
		<input bind:value={$form.email} name='email' type="email" placeholder="Email" class='p-2 border text-white mb-4  border-neutral-600 bg-transparent w-full'>
		{#if $errors.email}<span class='text-red-500 text-sm' >{$errors.email}</span>{/if}
		

	</div>

	<div class="field ">
		<label class=' text-xl font-semibold ' for="field">Which is your design field ?*</label>
		<p class='text-neutral-400 text-sm my-2'>Choose one or more categories that represent you. If your specialization field is not present, please add it in the information box.</p>
		<fieldset>
			{#if data.field}
			{#each data.field as fields }
			  <label class='flex gap-4'>
				<input bind:group={$form.field}  class='bg-transparent  size-4 rounded-full  border-[1px] border-neutral-600' type="checkbox" name="field"  value={fields} {...constraints}  />
				{ fields }
			  </label>
			{/each}
			{/if}
		  </fieldset>
		  {#if $errors.field}<span class='text-red-500 text-sm' >{$errors.field}</span>{/if}
	</div>

	<div class="services  ">
		<label class=' text-xl font-semibold ' for="services">What do you offer?</label>
		<p class='text-neutral-400 text-sm mb-2'>Choose one or more services you can offer to your clients. If you provide a service that is not present in the list, please write it in the information box</p>
		<fieldset>
			{#if data.services}
			{#each data.services as service }
			  <label class='flex gap-4'>
				<input bind:group={$form.services}  {...constraints}  class='bg-transparent  size-4 rounded-full  border-[1px] border-neutral-600' type="checkbox" name="services" value={service}   />
				{service}
			  </label>
			{/each}
			{/if}
		  </fieldset>
		  {#if $errors.services}<span class='text-red-500 text-sm' >{$errors.services}</span>{/if}

	</div>

	<div class="timezone">
		<label class=' text-xl font-semibold ' for="timezone">What's your Timezone?</label>
		<p class='text-neutral-400 text-sm mb-2'>Select the province where your practice is based or where you work from</p>
		<fieldset>
			{#each data.timezone  as timezone }
			  <label class='flex gap-4'>
				<input bind:group={$form.timezone} {...constraints}  class='bg-transparent  size-4 rounded-full  border-[1px] border-neutral-600' type="checkbox" name="timezone" value={timezone}   />
				{timezone}
			  </label>
			{/each}
		
		  </fieldset>
		{#if $errors.timezone}<span class=' text-red-500 text-sm bg-white '>{$errors.timezone}</span>{/if}

        <div class="flex flex-col gap-4 w-full">
			<label class=' text-xl font-semibold ' for="timezone">Other information</label>
			<textarea bind:value={$form.others} {...constraints} name="others" class='p-2 bg-transparent border border-neutral-600 min-h-[200px] w-full text-white text-sm ' placeholder="Any other details you'd like to add to your application request ?"></textarea>
			{#if $errors.others}<span class=' text-red-500 text-sm bg-white '>{$errors.others}</span>{/if}
			
			<p class='text-neutral-400 text-sm'>
				Send! We'll get in touch soon to let you know the status of your application. To modify your information in the future, send us an email. <br> <br>
				
				Note: we suggest you to show a portfolio with works related to the categories and services you selected. For any questions, you can write to us at contact@234Kr.info.</p>
		</div>
		


		<button type="submit"  class=' w-min bg-transparent border border-neutral-600 px-10 py-2 mt-6 hover:bg-white hover:text-black hover:transition-all '>Submit</button>
		{#if $message}
         <span transition:fade  class='' >{$message.text}</span>
		{/if}
		

	</div>

	


	
	
</form>









