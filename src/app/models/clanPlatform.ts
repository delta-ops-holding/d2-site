// Have to switch to TitleCase to match webservice
export class ClanPlatform {
    name: string;
    platformImageURL: string;

    constructor(name: string, platformImageURL: string) {
        this.name = name;
        this.platformImageURL = platformImageURL;
    }
}