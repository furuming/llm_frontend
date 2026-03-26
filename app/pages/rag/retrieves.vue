<script setup lang="ts">

const retrieves = ref([])
const query = ref("")
const K_TOP = 10

const getRetrieves = async () =>  {
    const ret = await $fetch("/api/rag/retrieve", {
        method:"POST",
        body:{
            query: query.value,
            k_top: K_TOP 
        }
    })

    console.log(ret)
    retrieves.value = ret

}



</script>

<template>
    <v-container>
        <v-row>
            <v-col>
                retrieves
            </v-col>
        </v-row>

      <v-row>
        <v-col>
          <v-textarea max-height="15vh" variant="outlined" v-model="query">
            <template #append>
              <v-btn  @click="getRetrieves">
                <v-icon>mdi-send</v-icon>
              </v-btn>

            </template>
          </v-textarea>
          
        </v-col>
      </v-row>


      <v-row>
        <v-col>
            <span v-for="c in retrieves.chunks" :key="c.chunk_id">
                {{ c }}<br><br>
            </span>
        </v-col>
      </v-row>

    </v-container>

</template>

