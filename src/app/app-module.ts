import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './ui-components/home/home';
import { Contact } from './ui-components/contact/contact';
import { UiLayout } from './layouts/ui-layout/ui-layout';
import { AdminLayout } from './layouts/admin-layout/admin-layout';
import { Category } from './admin-components/category/category';
import { Menu } from './admin-components/menu/menu';
import { About } from './admin-components/about/about';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CreateCategory } from './admin-components/category/create-category/create-category';
import { UpdateCategory } from './admin-components/category/update-category/update-category';
import { CreateMenu } from './admin-components/menu/create-menu/create-menu';
import { UpdateMenu } from './admin-components/menu/update-menu/update-menu';

@NgModule({
  declarations: [
    App,
    Home,
    Contact,
    UiLayout,
    AdminLayout,
    Category,
    Menu,
    About,
    CreateCategory,
    UpdateCategory,
    CreateMenu,
    UpdateMenu
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
