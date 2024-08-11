import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LivchatComponent } from './livchat/livchat.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { KittenComponent } from './kitten/kitten.component';
import { CreamComponent } from './cream/cream.component';
import { SukiComponent } from './suki/suki.component';
import { HilyComponent } from './hily/hily.component';
import { CursoComponent } from './curso/curso.component';


const routes: Routes = [
  { path: '', redirectTo: '/nosotros', pathMatch: 'full' },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'livchat', component: LivchatComponent },
  { path: 'kitten', component: KittenComponent },
  { path: 'cream', component: CreamComponent },
  { path: 'suki', component: SukiComponent },
  { path: 'hily', component: HilyComponent },
  { path: 'curso', component: CursoComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LivchatComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    NosotrosComponent,
    KittenComponent,
    CreamComponent,
    SukiComponent,
    HilyComponent,
    CursoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }