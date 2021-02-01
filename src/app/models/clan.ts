import { ClanAuthority } from "./clanAuthority";
import { ClanPlatform } from "./clanPlatform";

// Have to switch to TitleCase to match webservice
export class Clan {
    name: string;
    about: string;
    clanPlatform: ClanPlatform;
    members: ClanAuthority[];

    constructor(name: string, about: string, clanPlatform: ClanPlatform, members: ClanAuthority[]) {
        this.name = name;
        this.about = about;
        this.clanPlatform = clanPlatform;
        this.members = members;
    }
}