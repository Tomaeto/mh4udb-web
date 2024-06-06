<script setup>
import { RouterLink, RouterView } from 'vue-router'
import * as monsters from './data/monsters.json'
import Footer from "@/components/Footer.vue"
</script>

<template>
  <header>

    <div v-if="$route.path == '/'">
      <h1 class="text-center text-5xl mb-5">Monster Hunter 4 Ultimate Monster Database</h1>
      <div class="grid grid-cols-5" >
      <nav class="my-1 underline text-center text-blue-500 hover:text-purple-700" v-for="(id, name) in monsters.default">
        <RouterLink :to="'/monster/' + id"> {{name}} </RouterLink>
      </nav>
    </div>
    </div>
    <div v-else>
  <nav class="bg-green-600 text-white text-sm text-center font-semibold border rounded-full w-16 mt-3 hover:bg-green-800"><RouterLink to="/">Back</RouterLink></nav></input>
    </div>
  </header>

  <RouterView :key="$route.path"/>
  <Footer />
</template>
