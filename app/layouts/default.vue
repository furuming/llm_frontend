<script setup lang="ts">

const title = "Chat NCB"

const drawer = ref(true)
const group = ref(null)

</script>

<template>
  <v-layout>
    <v-app id="inspire">

      <v-app-bar>
        <template #prepend>
          <v-btn icon @click="drawer = !drawer"></v-btn>
        </template>
        <template #title>
          {{ title }}
        </template>
        
        <v-btn color="primary" to="/">
          チャット
        </v-btn>
        <v-btn color="primary" to="/rag">
          RAG
        </v-btn>
        <v-btn color="primary" to="/transcription">
          文字起こし
        </v-btn>
        
      </v-app-bar>

      
    <v-navigation-drawer v-model="drawer">
      <!--  -->
      <Project></Project>
    </v-navigation-drawer>

      <v-main>
        <!--  -->
        <NuxtPage></NuxtPage>
      </v-main>
    </v-app>
  </v-layout>
</template>
