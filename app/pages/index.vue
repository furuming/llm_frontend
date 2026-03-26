<script lang="ts" setup>
import type { ChatResponse } from '~/types/chat';


const prompt = ref("")
const chatResponse = ref<ChatResponse>({
  model:"",
  text:"",
  elapsed_sec:0
} as ChatResponse)

type ChatHistory = {
  text: string,
  isSend: boolean,
  recorded_at: Date  
}

const histories = ref<ChatHistory[]>([])



const postChat = async () => {

  const inputText = prompt.value

  histories.value.push(
    {
      text: inputText,
      isSend: true,
      recorded_at: new Date()
    }
  )
  prompt.value = ""


  const ret = await $fetch<string>("http://localhost:8080/api/chat", 
  {
    method: "POST",
    body:{
      user_id: "test",
      message: inputText,
      model:"local"
    }
  })

  console.log(ret)

  histories.value.push(
    {
      text: ret,
      isSend: false,
      recorded_at: new Date()
    }
  )
}

</script>

<template>
  <v-container class="">
      <v-row>
        <v-col >
          <v-container height="70vh" class="overflow-scroll">
            <v-row v-for="(history, index) in histories" :key="index">
              <v-spacer v-if="history.isSend"></v-spacer>
              <v-col cols="8" :align="history.isSend? 'end': 'start'">
                <v-card class="w-100 pa-4">
                  {{ history.text }}
                </v-card>
                  <span class="text-label-small">
                    {{ history.recorded_at }}
                  </span>
              </v-col>
              <v-spacer v-if="!history.isSend"></v-spacer>
              
            </v-row>
          </v-container>

         
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-textarea max-height="15vh" variant="outlined" v-model="prompt">
            <template #append>
              <v-btn  @click="postChat">
                <v-icon>mdi-send</v-icon>
              </v-btn>

            </template>
          </v-textarea>
          
        </v-col>
      </v-row>
  </v-container>
</template>
