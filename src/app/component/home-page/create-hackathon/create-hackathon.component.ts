import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-hackathon',
  templateUrl: './create-hackathon.component.html',
  styleUrls: ['./create-hackathon.component.css'],
})
export class CreateHackathonComponent implements OnInit {
  constructor() {}
  title: string = '';
  tags: string = '';
  description: string = '';
  rules: string = '';
  prize1: any;

  ngOnInit(): void {}
  submitIdea() {}
}
