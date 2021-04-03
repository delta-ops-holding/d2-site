import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Clan } from 'src/app/models/clan';
import { InformationService } from 'src/app/services/information.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit, OnDestroy {

  pcClans: Clan[];
  psClans: Clan[];
  xboxClans: Clan[];

  displayPlatform: string = "";
  displayClans: Clan[] = [];

  totalClans: number;
  loading: boolean;

  informationSub: Subscription;

  constructor(
    private informationService: InformationService
  ) {
    this.pcClans = [];
    this.psClans = [];
    this.xboxClans = [];
    this.totalClans = 0;
    this.loading = true;
  }

  ngOnInit(): void {
    this.informationSub = this.informationService.getClans().subscribe(data => {
      this.loading = false;
      this.totalClans = data.length;

      console.log(data);

      // group the clans by platform
      data.forEach(clan => {
        switch (clan.clanPlatform.name) {
          case 'PC': this.pcClans.push(clan); break;
          case 'Playstation': this.psClans.push(clan); break;
          case 'XBOX': this.xboxClans.push(clan); break;
          default: break;
        }
      });

      const sortByClanName = (a: Clan, b: Clan) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      };

      this.pcClans.sort(sortByClanName);
      this.psClans.sort(sortByClanName);
      this.xboxClans.sort(sortByClanName);


      this.switchClans("PC");
    });
  }

  ngOnDestroy(): void {
    this.informationSub.unsubscribe();
  }

  switchClans(platform: string) {

    this.displayPlatform = platform;

    switch (platform) {
      case 'PC': this.displayClans = this.pcClans; break;
      case 'Playstation': this.displayClans = this.psClans; break;
      case 'XBOX': this.displayClans = this.xboxClans; break;
      default: break;
    }
  }
}
