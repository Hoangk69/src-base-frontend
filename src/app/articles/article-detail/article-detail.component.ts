import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ArticleService } from "../../article.service";
import { Observable, filter, pluck, switchMap } from "rxjs";
import { Article } from "../../models/article";

@Component({
  selector: "app-article-detail",
  template: `
    <ng-container *ngIf="article$ | async as article; else noArticle">
      <h1>{{ article.title }}</h1>
      <p>{{ article.body }}</p>
    </ng-container>

    <ng-template #noArticle> No article found </ng-template>
  `,
  styles: [],
})
export class ArticleDetailComponent implements OnInit {
  article$!: Observable<Article | undefined>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly articleService: ArticleService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      console.log(data);
    }); // {slug: value}
    //this.route.paramMap.subscribe(console.log);

    //console.log(this.route.snapshot.params);
    //console.log(this.route.snapshot.paramMap);

    this.article$ = this.route.params.pipe(
      pluck("slug"),
      switchMap((slug) => this.articleService.getArticle(slug)),
      filter((article) => !!article) // loại bỏ các phần tử falsy bao gồm (null, undefined, false, 0, '', NaN)
    );

    // console.log để soi.
    this.route.params
      .pipe(
        pluck("slug"),
        switchMap((s) => this.articleService.getArticle(s))
        //filter((article) => !!article) // loại bỏ các phần tử falsy bao gồm (null, undefined, false, 0, '', NaN)
      )
      .subscribe(console.log);
  }
}
