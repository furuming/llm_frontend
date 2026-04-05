<script lang="ts" setup>

    const user = useUser().getUser()
    const chat = useChat()
    const projectID = chat.getProjectID()

    const name = ref("")

    const createRoom = async () => {
        try {
            const ret = await createChatRoom({
                user_id: user.value.id,
                project_id: projectID.value,
                name: name.value,
            })
            console.log(ret)
        } catch( e) {
            alert(e)
        }
    }



</script>

<template>
    <v-container width="60%">
        {{ projectID }}
        <v-row>
            <v-col>
                <v-text-field v-model="name" label="room name"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
            </v-col>
            <v-col cols="3">
                <v-btn block color="primary" @click="createRoom">登録</v-btn>
            </v-col>
        </v-row>
    </v-container>


</template>
