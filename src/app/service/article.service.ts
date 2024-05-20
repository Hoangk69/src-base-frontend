import { Injectable } from "@angular/core";
import { Article } from "../models/article";
import { Observable, filter, find, map, of, shareReplay } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ArticleService {
  constructor() {}

  // get list articles
  get articles$() {
    return of<Article[]>([
      {
        title: "title 1",
        body: "Decide how much vocabulary change you want",
        slug: "title-1",
      },
      {
        title: "title 2",
        body: "Decide how much vocabulary change you want",
        slug: "title-2",
      },
    ]).pipe(shareReplay(1));
  }

  // get deatil article
  getArticle(slug: string): Observable<Article | undefined> {
    return this.articles$.pipe(
      map((articles) => articles.find((ar) => ar.slug === slug))
    );
  }
}
