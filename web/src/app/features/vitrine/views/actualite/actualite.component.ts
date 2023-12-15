import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.component.html',
  styleUrls: ['./actualite.component.scss']
})
export class ActualiteComponent implements OnInit {

  public dataInsta : any = [];

  constructor() { }

  ngOnInit(): void {
    this.getInstagramPosts();
  }

  public getInstagramPosts = async() => {
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=IGQVJVQndsanBpZA19JZAk9kXy1pUnFKQ1JlX2dKZAERBaFFKM29IdHFQSFFyS0JhVnF1a0ZAqTElqMzgwczVZAcmg5N2NpYlFaeWdYdGpGbE1Pa0t0ZAmZAFQWYyZAjdCTmtXbkdNc1J5eGRGQ0lSUHAteXlTZAAZDZD`;
    const data = await fetch(url);
    const feed = await data.json();
    this.dataInsta = feed.data ;
  }

}
