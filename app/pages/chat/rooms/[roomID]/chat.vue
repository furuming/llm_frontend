<script lang="ts" setup>

    const user = useUser().getUser()
    const chat = useChat()
    const route = useRoute()
    const roomID = route.params.roomID as string

    const prompt = ref("")
    const useRAG = ref<boolean>(false)

    type ChatHistory = {
        text: string,
        isSend: boolean,
        recorded_at: Date  
    }

    const messages = ref<GetChatMessagesResponse[]>([])

    const getMessages = async () => {

        try {
            const ret = await getChatMessages( roomID )
            messages.value = ret
        } catch ( e ){
            console.log(e)
        }


    }



    const sendMessage = async () => {

        if( !prompt.value ){
            return 
        } 

        const ret = await postChat({
          user_id: user.value.id,
          room_id: roomID,
          message: prompt.value,
          model:"gemma",
          use_rag: useRAG.value,
          rag_top_k: 5,
        })  

        console.log(ret)
        getMessages()

    }

</script>

<template>
  <v-container class="">
      <v-row>
        <v-col >
          <v-container height="70vh" class="overflow-scroll-auto">
            <v-row v-for="message in messages" key="id">
              <v-spacer v-if="message.role == 'user'"></v-spacer>
              <v-col cols="8" :align="message.role == 'user'? 'end': 'start'">
                <v-card class="w-100 pa-4">
                  {{ message.content }}
                </v-card>
                  <span class="text-label-small">
                    {{ message.created_at }} {{ 'RAG: '+message.use_rag }}
                  </span>
              </v-col>
              <v-spacer v-if="!message.role == 'user'"></v-spacer>
              
            </v-row>
          </v-container>

         
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-textarea max-height="15vh" variant="outlined" v-model="prompt">
            <template #append>
              <div>

                <v-switch label="use RAG" color="primary" v-model="useRAG">                
                </v-switch>
                
                <v-btn  @click="sendMessage">
                  <v-icon>mdi-send</v-icon>
                </v-btn>
              </div>
            </template>
          </v-textarea>
          
        </v-col>
      </v-row>
      <v-row>
        <v-col>
        </v-col>
      </v-row>
  </v-container>
</template>
