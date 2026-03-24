<script setup lang="ts">

    const file = ref(null)

    const postFile = async () =>  {
        if( !file || !file.value ){
            alert("file not attached.")
            return
        }

        const formData = new FormData()
        formData.append("file", file.value)
        formData.append("parse_type", "pdf")
        formData.append("chunk_size", "800")
        formData.append("chunk_overlap", "100")



        const ret = await $fetch<string>("http://localhost:8080/api/rag/index", 
        {
            method: "POST",
            body:formData,
        })

        console.log(ret)

    }




</script>


<template>
<div>

    <v-container>
        <v-row>
            <v-col>
                <span class="text-h3">
                    RAG
                </span>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-file-input label="ファイル" v-model="file">
                    
                </v-file-input>
            </v-col>
            
        </v-row>
        
        <v-row>
            <v-col>
                <v-btn color="primary" @click="postFile">Submit</v-btn>
            </v-col>
            
        </v-row>
        
        
    </v-container>
</div>

</template>

