<script lang="ts" setup>

    const user = useUser().getUser()
    console.log(user.value)
    const name = ref("")
    const description = ref("")

    const createProject = async () => {
        try {
            const ret = await createChatProject({
                user_id: user.value.id,
                name: name.value,
                description: description.value,
            })
            console.log(ret)
        } catch( e) {
            alert(e)
        }
    }



</script>

<template>
    <v-container width="60%">
        <v-row>
            <v-col>
                <v-text-field v-model="name" label="project name"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-text-field v-model="description" label="project description"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
            </v-col>
            <v-col cols="3">
                <v-btn block color="primary" @click="createProject">登録</v-btn>
            </v-col>
        </v-row>
    </v-container>


</template>
