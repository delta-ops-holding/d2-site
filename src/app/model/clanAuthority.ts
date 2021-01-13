export class ClanAuthority {
    username: string;
    isFounder: boolean;

    constructor(username: string, isFounder: boolean) {
        this.username = username;
        this.isFounder = isFounder;
    }
}