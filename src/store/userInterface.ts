export interface IStore {
    user: {
        isAuthenticated: boolean,
        username: string | undefined,
        permissionLevel: number
    }
}