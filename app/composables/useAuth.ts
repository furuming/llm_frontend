
export const useUser = () => {

    const user = useState("user", () => ({
        id: "TEST001"
    }))

    const setUser = (param) => {
        user.value = param
    }
    const getUser = () => {
        return user
    }

    return {
        setUser,
        getUser,
    }
    
}
