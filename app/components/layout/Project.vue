<script lang="ts" setup>

    const chat = useChat()

    const projects = ref<GetProjectResponse[]>([])  
    const projectID = ref<string>("")
    const rooms = ref([])
    const roomID = ref<string>("")

    
    const getProjects = async () => {
        try {
            const ret = await getChatProjects({
                user_id:"TEST001"
            })
            projects.value = ret
            console.log(projects.value)
        } catch ( e ){
            console.log(e)
            return
        }

    }


    const updateProjectID = () => {
        chat.setProjectID(projectID.value)
        getRooms()
    }

    const updateRoomID = () => {
        chat.setRoomID(roomID.value)
    }


    const getRooms = async () => {
        console.log("getRooms")
        if( !projectID.value){
            return
        }
        rooms.value = []

        try {
            const ret = await getChatRooms({
                user_id:"TEST001",
                project_id: projectID.value
            })
            rooms.value = ret
            console.log(projects.value)
        } catch ( e ){
            console.log(e)
            return
        }
    }

    onMounted( () => {
        getProjects()
    })
    

</script>

<template>
    <br>
    <v-container>
        <v-row>
            <v-col class="d-flex justify-item-between">
                <span>プロジェクト選択</span>
                <v-btn color="primary" class="mx-4" to="/chat/projects/create">新規</v-btn>                
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-select 
                    v-model="projectID" 
                    :items="projects" 
                    item-title="name" 
                    item-value="id"
                    :return-object="false" 
                    @update:modelValue="updateProjectID"></v-select>
            </v-col>
        </v-row>

        <v-row v-if="projectID">
            <v-col class="d-flex justify-item-between">
                <span>room選択</span>
                <v-btn color="primary" class="mx-4" to="/chat/rooms/create">新規</v-btn>                
            </v-col>
        </v-row>
        <v-row v-if="projectID">
            <v-col>
                <v-list>
                    <v-list-item v-for="item in rooms" key="id" :to="`/chat/rooms/${item.id}/chat`">{{ item.name }}</v-list-item>
                </v-list>
            </v-col>
        </v-row>

    </v-container>

</template>
