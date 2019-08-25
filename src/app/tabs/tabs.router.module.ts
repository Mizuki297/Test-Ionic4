import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {path: 'movies', loadChildren: '../pages/movies/movie-list/movie-list.module#MovieListPageModule'},
      {path: 'movies/:id', loadChildren: '../pages/movies/movie-detail/movie-detail.module#MovieDetailPageModule'},
      {path: 'bookmark', loadChildren: '../pages/bookmarks/bookmark-list/bookmark-list.module#BookmarkListPageModule'}
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/movies',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
