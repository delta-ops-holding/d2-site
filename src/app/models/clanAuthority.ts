export class ClanAuthority {
    userName: string;
    isFounder: boolean;

    constructor(userName: string, isFounder: boolean) {
        this.userName = userName;
        this.isFounder = isFounder;
    }
}