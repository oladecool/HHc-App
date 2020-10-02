import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "folder/:id",
    loadChildren: () =>
      import("./views/folder/folder.module").then((m) => m.FolderPageModule),
      canActivate: [AuthGuard]
  },
  {
    path: "sign-in",
    loadChildren: () =>
      import("./views/sign-in/sign-in.module").then((m) => m.SignInPageModule),

  },
  {
    path: "sign-up",
    loadChildren: () =>
      import("./views/sign-up/sign-up.module").then((m) => m.SignUpPageModule),
      canActivate: [AuthGuard]
  },
  {
    path: "forgot-password",
    loadChildren: () =>
      import("./views/forgot-password/forgot-password.module").then(
        (m) => m.ForgotPasswordPageModule
      ),
  },
  {
    path: "select-language",
    loadChildren: () =>
      import("./select-language/select-language.module").then(
        (m) => m.SelectLanguagePageModule
      ),
  },
  {
    path: "home",
    loadChildren: () =>
      import("./views/home/home.module").then((m) => m.HomePageModule),
      canActivate: [AuthGuard]

  },

  {
    path: "chats",
    loadChildren: () =>
      import("./views/chats/chats.module").then((m) => m.ChatsPageModule),
  },
  {
    path: "plan",
    loadChildren: () =>
      import("./views/plan/plan.module").then((m) => m.PlanPageModule),
  },
  {
    path: "payment",
    loadChildren: () =>
      import("./views/payment/payment.module").then((m) => m.PaymentPageModule),
  },
  {
    path: "chat-screen",
    loadChildren: () =>
      import("./views/chat-screen/chat-screen.module").then(
        (m) => m.ChatScreenPageModule
      ),
  },
  {
    path: "books",
    loadChildren: () =>
      import("./views/books/books.module").then((m) => m.BooksPageModule),
      canActivate: [AuthGuard]

  },
  {
    path: "find-church",
    loadChildren: () =>
      import("./views/find-church/find-church.module").then(
        (m) => m.FindChurchPageModule
      ),
  },
  {
    path: "events",
    loadChildren: () =>
      import("./views/events/events.module").then((m) => m.EventsPageModule),
      canActivate: [AuthGuard]

  },
  {
    path: "event-info",
    loadChildren: () =>
      import("./views/event-info/event-info.module").then(
        (m) => m.EventInfoPageModule
      ),
      canActivate: [AuthGuard]

  },
  {
    path: "prayers",
    loadChildren: () =>
      import("./views/prayers/prayers.module").then((m) => m.PrayersPageModule),
      canActivate: [AuthGuard]

  },
  {
    path: "read-prayer",
    loadChildren: () =>
      import("./views/read-prayer/read-prayer.module").then(
        (m) => m.ReadPrayerPageModule
      ),
      canActivate: [AuthGuard]
  },
  {
    path: "prayer-time",
    loadChildren: () =>
      import("./views/prayer-time/prayer-time.module").then(
        (m) => m.PrayerTimePageModule
      ),
  },
  {
    path: "my-profile",
    loadChildren: () =>
      import("./views/my-profile/my-profile.module").then(
        (m) => m.MyProfilePageModule
      ),
      canActivate: [AuthGuard]
  },
  {
    path: "feedback",
    loadChildren: () =>
      import("./views/feedback/feedback.module").then(
        (m) => m.FeedbackPageModule
      ),
      canActivate: [AuthGuard]
  },
  {
    path: "testimonies",
    loadChildren: () =>
      import("./views/testimonies/testimonies.module").then(
        (m) => m.TestimoniesPageModule
      ),
      canActivate: [AuthGuard]
  },
  {
    path: "notes",
    loadChildren: () =>
      import("./views/notes/notes.module").then((m) => m.NotesPageModule),
      canActivate: [AuthGuard]
  },
  {
    path: "live-stream",
    loadChildren: () =>
      import("./views/live-stream/live-stream.module").then(
        (m) => m.LiveStreamPageModule
      ),
      canActivate: [AuthGuard]

  },
  {
    path: "podcast",
    loadChildren: () =>
      import("./views/podcast/podcast.module").then((m) => m.PodcastPageModule),
      canActivate: [AuthGuard]
  },
  {
    path: "donate",
    loadChildren: () =>
      import("./views/donate/donate.module").then((m) => m.DonatePageModule),
      canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
