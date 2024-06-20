export interface IUserInfo {
    id: number;
    avatar: string;
    nickname: string;
    }
export interface ILoginInfo {
    username: string;
    password: string;
}
export interface IAuth {
    userInfo: IUserInfo;
    token: string;
}
