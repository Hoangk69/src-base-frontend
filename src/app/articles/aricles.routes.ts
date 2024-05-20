import { Routes } from "@angular/router";
import { ArticleListComponent } from "./article-list/article-list.component";
import { ArticleDetailComponent } from "./article-detail/article-detail.component";
import { AuthGuardService } from "../guards/articles.guard";

export const articleRoutes: Routes = [
    {path: '', component: ArticleListComponent},
    // {path: ':slug', component: ArticleDetailComponent}
    {
        path: '',
        canActivateChild: [AuthGuardService], // Sử dụng AuthGuardService để kiểm tra quyền truy cập cho tuyến đường cha và tuyến đường con
        children: [
            {
                path: ':slug',
                component: ArticleDetailComponent
            }
        ]
    }
]