import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

    // App Routes goes here
    {
      path: 'customer',
      loadChildren: () =>
        import('./modules/user/user.module').then(m => m.UserModule)
    },
    { path: '**', redirectTo: 'products' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
