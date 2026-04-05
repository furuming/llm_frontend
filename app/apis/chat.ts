export type GetChatProjcetRequest = {
    user_id: string
}
export type GetChatProjcetResponse = {
    id: string,
    user_id: string,
    name: string,
    description?: string,
    created_at: Date
}


const getChatProjects = async ( param: GetChatProjcetRequest ): Promise<GetChatProjcetResponse[]>  => {
    const config = useRuntimeConfig()
    
    try {

        const ret = await $fetch<GetChatProjcetResponse[]>(config.public.baseURL+"/chat/projects", {
            query: param
        })
        return ret
    } catch( e ){
        throw e
    }       
}


export type CreateChatProjectRequest = {
  user_id: string,
  name: string,
  description?: string
}

export type CreateChatProjectResponse = {
  id: string,
  user_id: string,
  name: string,
  description?: string,
  created_at: Date
}

const createChatProject = async ( param: CreateChatProjectRequest ): Promise<CreateChatProjectResponse> => {
    const config = useRuntimeConfig()
    
    try {

        const ret = await $fetch<CreateChatProjectResponse>(config.public.baseURL+"/chat/projects", {
            method: "POST",
            body: param
        })
        return ret
    } catch( e ){
        throw e
    }

}

export type CreateChatRoomRequest = {
    user_id: string,
    project_id: string,
    name: string
}

export type CreateChatRoomResponse = {
    id: string,
    user_id: string,
    project_id: string,
    name: string,
    created_at: Date
}

const createChatRoom = async (param: CreateChatRoomRequest) :Promise<CreateChatRoomResponse> => {
    const config = useRuntimeConfig()    
    try {
        const ret = await $fetch<CreateChatRoomResponse>(config.public.baseURL+"/chat/rooms", {
            method: "POST",
            body: param
        })
        return ret
    } catch( e ){
        throw e
    }
}


export type GetChatRoomsRequest = {
    user_id: string,
    project_id: string,
}

export type GetChatRoomsResponse = {
    id: string,
    user_id: string,
    project_id: string,
    name: string,
    created_at: Date
}

const getChatRooms = async (param: GetChatRoomsRequest) :Promise<GetChatRoomsResponse> => {
    const config = useRuntimeConfig()    
    try {
        const ret = await $fetch<CreateChatRoomResponse>(config.public.baseURL+"/chat/rooms", {
            query: param
        })
        return ret
    } catch( e ){
        throw e
    }
}


export type GetChatMessagesRequest = {
    limit: number
}

export type GetChatMessagesResponse = {
    id: string,
    user_id: string,
    room_id: string,
    role: string,
    content: string,
    model: string,
    used_rag: boolean,
    retrieved_chunk_count: number,
    created_at: Date
}

const getChatMessages = async (roomID:string, param?: GetChatMessagesRequest) :Promise<GetChatMessagesResponse[]> => {
    const config = useRuntimeConfig()    
    try {
        const ret = await $fetch<GetChatMessagesResponse[]>(config.public.baseURL+`/chat/rooms/${roomID}/messages`, {
            query: param || {}
        })
        return ret
    } catch( e ){
        throw e
    }
}



export type PostChatRequest = {
    user_id: string,
    room_id: string,
    message: string,
    model: string,
    use_rag: boolean,
    rag_top_k: number
}

export type PostChatResponse = {
    response: string,
    use_rag: boolean,
    retrieved_rag_chunk_count: number,
    room_id: string,
    created_at: Date
}

const postChat = async (param: PostChatRequest) :Promise<PostChatResponse> => {
    const config = useRuntimeConfig()    
    try {
        const ret = await $fetch<PostChatResponse>(config.public.baseURL+"/chat", {
            method: "POST",
            body: param
        })
        return ret
    } catch( e ){
        throw e
    }
}

export { 
    getChatProjects,
    createChatProject,
    createChatRoom,
    getChatRooms,
    getChatMessages,
    postChat,
}
    

