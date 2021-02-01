export class AboutUs {
    id: number;
    welcome: string;
    mission: string;
    vision: string;

    constructor(id: number, welcome: string, mission: string, vision: string) {
        this.id = id;
        this.welcome = welcome;
        this.mission = mission;
        this.vision = vision;
    }
}