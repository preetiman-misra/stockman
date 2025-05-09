<script setup lang="ts">
definePageMeta({
    layout: 'auth'
})

import * as v from "valibot";
import type {FormSubmitEvent} from "@nuxt/ui"

const schema = v.pipe(
    v.object({
        firstName: v.pipe(v.string(), v.minLength(2, 'Must be at least 2 characters')),
        lastName: v.pipe(v.string(), v.minLength(2, 'Must be at least 2 characters')),
        email: v.pipe(v.string(), v.email('Invalid email')),
        password: v.pipe(
            v.string(),
            v.minLength(8, 'Must be at least 8 characters'),
        ),
        confirmPassword: v.pipe(v.string()),
    }), v.forward(
        v.partialCheck(
            [['password'], ['confirmPassword']],
            data => data.password === data.confirmPassword,
            'Passwords do not match'
        ),
        ['confirmPassword']
    ))

type Schema = v.InferOutput<typeof schema>

const state = reactive({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
})

const toast = useToast()

async function onSubmit(event: FormSubmitEvent<Schema>) {
    toast.add({title: "Success", description: "The form has been submitted", color: "success"})
    console.log(event.data)
}
</script>

<template>
    <div class="w-[378px]">
        <p class="font-bold text-2xl mb-2 text-center">Create a New Account</p>
        <p class="mb-12 text-center text-sm">Already have an account?
            <NuxtLink to="/login" class="text-primary hover:underline">Login</NuxtLink>
            here.
        </p>
        <div>
            <UForm :schema="schema" :state="state" class="space-y-6" @submit="onSubmit">
                <!-- First Name -->
                <UFormField label="First Name" name="firstName">
                    <UInput v-model="state.firstName" class="w-full"/>
                </UFormField>
                <!-- Last Name -->
                <UFormField label="Last Name" name="lastName">
                    <UInput v-model="state.lastName" class="w-full"/>
                </UFormField>
                <!-- Email -->
                <UFormField label="Email" name="email">
                    <UInput type="email" v-model="state.email" class="w-full"/>
                </UFormField>
                <!-- Password -->
                <UFormField label="Password" name="password" class="mb-8">
                    <UInput type="password" v-model="state.password" class="w-full"/>
                </UFormField>
                <!-- Confirm Password -->
                <UFormField label="Confirm Password" name="confirmPassword" class="mb-8">
                    <UInput type="password" v-model="state.confirmPassword" class="w-full"/>
                </UFormField>
                <UButton size="lg" type="submit" class="w-full grid place-content-center" label="Submit"/>
            </UForm>
        </div>
    </div>
</template>