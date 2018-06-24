import { OAuthModule } from 'angular-oauth2-oidc';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { CategoryComponent } from './main/category/category.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { EditCategoryComponent } from './main/category/edit-category/edit-category.component';
import { BudgetComponent } from './main/budget/budget.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent },
  { path: 'category/:id', component: EditCategoryComponent }
  { path: '',   redirectTo: '/main', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginDialogComponent,
    MainComponent,
    LoginComponent,
    CategoryComponent,
    EditCategoryComponent,
    BudgetComponent
  ],
  imports: [
    HttpModule,
    OAuthModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressBarModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoginDialogComponent]
})
export class AppModule {

}
