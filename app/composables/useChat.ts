
export const useChat = () => {

    const projectID = useState<string>("chat_project")
    const roomID = useState<string>("chat_room")


    
    const setProjectID = (id: string) => {
        projectID.value = id
    }
    const getProjectID = () => {
        return projectID
    }

    const setRoomID = (id: string) => {
        roomID.value = id
    }
    const getRoomID = () => {
        return roomID
    }


    return {
        setProjectID,
        getProjectID,
        setRoomID,
        getRoomID
    }
    
}
