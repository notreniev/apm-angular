import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { AlunoEdicaoComponent } from './aluno/edicao/aluno-edicao.component';
import { AlunoComponent } from './aluno/lista/aluno.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursoEdicaoComponent } from './curso/edicao/curso-edicao.component';
import { CursoComponent } from './curso/lista/curso.component';
import { HomeComponent } from './home/home.component';
import { InstituicaoEdicaoComponent } from './instituicao/edicao/instituicao-edicao.component';
import { InstituicaoComponent } from './instituicao/lista/instituicao.component';
import { SearchPipe } from 'src/shared/pipes/search.pipe';
import { SidebarBrandComponent } from 'src/shared/components/sidebar-brand/sidebar-brand.component';
import { SidebarComponent } from 'src/shared/components/sidebar/sidebar.component';
import { ContentWrapperComponent } from 'src/shared/components/content-wrapper/content-wrapper.component';
import { LogoutModalComponent } from 'src/shared/components/logout-modal/logout-modal.component';
import { TopbarComponent } from 'src/shared/components/topbar/topbar.component';
import { CardComponent } from 'src/shared/components/card/card.component';
import { CardContentComponent } from 'src/shared/components/card-content/card-content.component';
import { CardProgressBarComponent } from 'src/shared/components/card-progress-bar/card-progress-bar.component';
import { CardBadgeComponent } from 'src/shared/components/card-badge/card-badge.component';

export let options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  declarations: [
    AppComponent,
    AlunoComponent,
    CursoComponent,
    InstituicaoComponent,
    HomeComponent,
    AlunoEdicaoComponent,
    CursoEdicaoComponent,
    InstituicaoEdicaoComponent,
    SearchPipe,
    SidebarBrandComponent,
    SidebarComponent,
    ContentWrapperComponent,
    LogoutModalComponent,
    TopbarComponent,
    CardComponent,
    CardContentComponent,
    CardProgressBarComponent,
    CardBadgeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgxMaskModule.forRoot(options),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
