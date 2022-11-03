import {useRef} from "react";

export const useAbortController = () => {
    const abortController = useRef()

    const setAbortController = () => {
        abortController.current?.abort()
        abortController.current = new AbortController()
        return abortController.current?.signal
    }

    const onAbort = () => {
        abortController.current?.abort()
    }

    return {
        createSignal: setAbortController,
        abort: onAbort
    }
}