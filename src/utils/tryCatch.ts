export const tryCatch = <T>(callback: () => T): T => {
    try {
        return callback();
    } catch (error) {
        throw error
    }
}