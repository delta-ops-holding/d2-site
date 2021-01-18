import { ClanAuthority } from "./clanAuthority";
import { ClanPlatform } from "./clanPlatform";

export class Clan {
    name: string;
    about: string;
    clanPlatform: ClanPlatform;
    clanAuthorities: ClanAuthority[];

    constructor(name: string, about: string, clanPlatform: ClanPlatform, clanAuthorities: ClanAuthority[]) {
        this.name = name;
        this.about = about;
        this.clanPlatform = clanPlatform;
        this.clanAuthorities = clanAuthorities;
    }
}