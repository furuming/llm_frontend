

export type ChatRequest = {
    prompt: string,
    max_new_token?: number,
    tempareture?: number,

}

export type ChatResponse = {
    model: string,
    device: string,
    text: string,
    elapsed_sec: number,
}