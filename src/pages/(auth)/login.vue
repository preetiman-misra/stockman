<script setup lang="ts">
definePageMeta({
    layout: 'auth'
})

import * as v from "valibot";
import type {FormSubmitEvent} from "@nuxt/ui"

const schema = v.object({
    email: v.pipe(v.string(), v.email('Invalid email')),
    password: v.pipe(v.string(), v.minLength(8, 'Must be at least 8 characters')),
})

type Schema = v.InferOutput<typeof schema>

const state = reactive({
    email: '',
    password: '',
})

const toast = useToast()

async function onSubmit(event: FormSubmitEvent<Schema>) {
    toast.add({title: "Success", description: "The form has been submitted", color: "success"})
    console.log(event.data)
}
</script>

<template>
    <div class="p-20 rounded-lg border border-accented">
        <p class="font-bold text-2xl mb-12">Sign In to you Account</p>
        <div>
            <UForm :schema="schema" :state="state" class="space-y-6" @submit="onSubmit">
                <!-- Email -->
                <UFormField label="Email" name="email">
                    <UInput v-model="state.email" class="w-full"/>
                </UFormField>
                <!-- Password -->
                <UFormField label="Password" name="password" class="mb-8">
                    <UInput type="password" v-model="state.password" class="w-full"/>
                </UFormField>
                <UButton @submit="onSubmit" class="w-full grid place-content-center" label="Submit"/>
            </UForm>
        </div>
    </div>
</template>

<style scoped>

</style>