import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { ArticleService } from "src/app/article.service";
import { Article } from "src/app/models/article";

@Component({
  selector: "app-article-list",
  template: `
    <ul>
      <li
        *ngFor="let article of articles$ | async"
        style="border: 1px solid black; padding: 20px; margin-bottom: 10px;"
      >
        {{ article.title }} <br />
        <a [routerLink]="['/articles', article.slug]">Read more</a>
      </li>
    </ul>
  `,
  styles: [],
})
export class ArticleListComponent {
  articles$!: Observable<Article[]>;

  constructor(private readonly articleService: ArticleService) {}

  ngOnInit(): void {
    //   this.articles$ = of<Article[]>([
    //     {
    //       title: "title 1",
    //       body: "Decide how much vocabulary change you want",
    //       slug: "title-1",
    //     },
    //     {
    //       title: "title 2",
    //       body: "Decide how much vocabulary change you want",
    //       slug: "title-2",
    //     },
    //   ]);
    this.articles$ = this.articleService.articles$;
  }
}
