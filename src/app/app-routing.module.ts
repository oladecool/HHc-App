import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '',redirectTo: 'welcome', pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'select-language',
    loadChildren: () => import('./select-language/select-language.module').then( m => m.SelectLanguagePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'bible',
    loadChildren: () => import('./bible/bible.module').then( m => m.BiblePageModule)
  },
  {
    path: 'read-bible',
    loadChildren: () => import('./read-bible/read-bible.module').then( m => m.ReadBiblePageModule)
  },
  {
    path: 'chats',
    loadChildren: () => import('./chats/chats.module').then( m => m.ChatsPageModule)
  },
  {
    path: 'plan',
    loadChildren: () => import('./plan/plan.module').then( m => m.PlanPageModule)
  },
  {
    path: 'father-profile',
    loadChildren: () => import('./father-profile/father-profile.module').then( m => m.FatherProfilePageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'chat-screen',
    loadChildren: () => import('./chat-screen/chat-screen.module').then( m => m.ChatScreenPageModule)
  },
  {
    path: 'movies',
    loadChildren: () => import('./movies/movies.module').then( m => m.MoviesPageModule)
  },
  {
    path: 'books',
    loadChildren: () => import('./books/books.module').then( m => m.BooksPageModule)
  },
  {
    path: 'books-info',
    loadChildren: () => import('./books-info/books-info.module').then( m => m.BooksInfoPageModule)
  },
  {
    path: 'find-church',
    loadChildren: () => import('./find-church/find-church.module').then( m => m.FindChurchPageModule)
  },
  {
    path: 'church-info',
    loadChildren: () => import('./church-info/church-info.module').then( m => m.ChurchInfoPageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./events/events.module').then( m => m.EventsPageModule)
  },
  {
    path: 'event-info',
    loadChildren: () => import('./event-info/event-info.module').then( m => m.EventInfoPageModule)
  },
  {
    path: 'prayers',
    loadChildren: () => import('./prayers/prayers.module').then( m => m.PrayersPageModule)
  },
  {
    path: 'read-prayer',
    loadChildren: () => import('./read-prayer/read-prayer.module').then( m => m.ReadPrayerPageModule)
  },
  {
    path: 'prayer-time',
    loadChildren: () => import('./prayer-time/prayer-time.module').then( m => m.PrayerTimePageModule)
  },
  {
    path: 'my-profile',
    loadChildren: () => import('./my-profile/my-profile.module').then( m => m.MyProfilePageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'testimonies',
    loadChildren: () => import('./testimonies/testimonies.module').then( m => m.TestimoniesPageModule)
  },
  {
    path: 'notes',
    loadChildren: () => import('./notes/notes.module').then( m => m.NotesPageModule)
  },
  {
    path: 'live-stream',
    loadChildren: () => import('./live-stream/live-stream.module').then( m => m.LiveStreamPageModule)
  },
  {
    path: 'note-details',
    loadChildren: () => import('./note-details/note-details.module').then( m => m.NoteDetailsPageModule)
  },
  {
    path: 'podcast',
    loadChildren: () => import('./podcast/podcast.module').then( m => m.PodcastPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
