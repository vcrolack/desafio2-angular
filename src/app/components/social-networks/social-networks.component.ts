import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-networks',
  templateUrl: './social-networks.component.html',
  styleUrls: ['./social-networks.component.scss']
})
export class SocialNetworksComponent implements OnInit {

  constructor() { }

  @Input()
  github: string = '';

  @Input()
  instagram: string = '';

  @Input()
  linkedin: string = '';

  ngOnInit(): void {
  }

}
