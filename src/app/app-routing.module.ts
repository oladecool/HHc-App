import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '',redirectTo: 'sign-up', pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./views/folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./views/sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./views/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./views/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'select-language',
    loadChildren: () => import('./select-language/select-language.module').then( m => m.SelectLanguagePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'bible',
    loadChildren: () => import('./views/bible/bible.module').then( m => m.BiblePageModule)
  },
  {
    path: 'read-bible',
    loadChildren: () => import('./views/read-bible/read-bible.module').then( m => m.ReadBiblePageModule)
  },
  {
    path: 'chats',
    loadChildren: () => import('./views/chats/chats.module').then( m => m.ChatsPageModule)
  },
  {
    path: 'plan',
    loadChildren: () => import('./views/plan/plan.module').then( m => m.PlanPageModule)
  },
  {
    path: 'father-profile',
    loadChildren: () => import('./views/father-profile/father-profile.module').then( m => m.FatherProfilePageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./views/payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'chat-screen',
    loadChildren: () => import('./views/chat-screen/chat-screen.module').then( m => m.ChatScreenPageModule)
  },
  {
    path: 'movies',
    loadChildren: () => import('./views/movies/movies.module').then( m => m.MoviesPageModule)
  },
  {
    path: 'books',
    loadChildren: () => import('./views/books/books.module').then( m => m.BooksPageModule)
  },
  {
    path: 'find-church',
    loadChildren: () => import('./views/find-church/find-church.module').then( m => m.FindChurchPageModule)
  },
  {
    path: 'church-info',
    loadChildren: () => import('./views/church-info/church-info.module').then( m => m.ChurchInfoPageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./views/events/events.module').then( m => m.EventsPageModule)
  },
  {
    path: 'event-info',
    loadChildren: () => import('./views/event-info/event-info.module').then( m => m.EventInfoPageModule)
  },
  {
    path: 'prayers',
    loadChildren: () => import('./views/prayers/prayers.module').then( m => m.PrayersPageModule)
  },
  {
    path: 'read-prayer',
    loadChildren: () => import('./views/read-prayer/read-prayer.module').then( m => m.ReadPrayerPageModule)
  },
  {
    path: 'prayer-time',
    loadChildren: () => import('./views/prayer-time/prayer-time.module').then( m => m.PrayerTimePageModule)
  },
  {
    path: 'my-profile',
    loadChildren: () => import('./views/my-profile/my-profile.module').then( m => m.MyProfilePageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./views/feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'testimonies',
    loadChildren: () => import('./views/testimonies/testimonies.module').then( m => m.TestimoniesPageModule)
  },
  {
    path: 'notes',
    loadChildren: () => import('./views/notes/notes.module').then( m => m.NotesPageModule)
  },
  {
    path: 'live-stream',
    loadChildren: () => import('./views/live-stream/live-stream.module').then( m => m.LiveStreamPageModule)
  },
  {
    path: 'podcast',
    loadChildren: () => import('./views/podcast/podcast.module').then( m => m.PodcastPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
