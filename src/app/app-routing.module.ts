import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'movie-list', loadChildren: './pages/movies/movie-list/movie-list.module#MovieListPageModule' },
  { path: 'movie-detail', loadChildren: './pages/movies/movie-detail/movie-detail.module#MovieDetailPageModule' },
  { path: 'bookmark-list', loadChildren: './pages/bookmarks/bookmark-list/bookmark-list.module#BookmarkListPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
