import { Component, OnInit } from '@angular/core';
import { MenuOption } from 'src/app/types/Types_option';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss'],
})
export class MenuPageComponent implements OnInit {

  options: MenuOption[] = [
    { title: 'Countdown timer', path: 'countdowntimer' },
    { title: 'Quiz', path: 'quiz'},
    { title: 'Recipes', path: 'recipes'},
    { title: 'Notes', path:'notes'},
    { title: 'Drawing', path:'drawing'},
    { title: 'Todos', path: 'todos'},
    { title: 'Movies', path: 'movies'},
    { title: 'Github Profiles', path:'githubprofiles'},
    { title: 'Password Generator', path:'passwordgenerator'},
    { title: 'Weather', path:'weather'}
  ];

  constructor() {}

  ngOnInit(): void {}
}
