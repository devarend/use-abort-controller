import {useRef} from "react";

export const useAbortController = () => {
    const abortController = useRef()

    const createSignal = () => {
        abortController.current?.abort()
        abortController.current = new AbortController()
        return abortController.current?.signal
    }

    const abort = () => {
        abortController.current?.abort()
    }

    return {
        createSignal,
        abort
    }
}