import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PentHouseComponent } from './penthouse/penthouse.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FlatListComponent } from './flats/flat-list.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsListComponent } from './products/product-list/product-list.component';
import { StarComponent } from './star/star.component';
import { CartComponent } from './cart/cart.component';
import { TransformDataPipe } from './transform-data.pipe';
import { PipePipe } from './pipe.pipe';
import { InMemoryEventDbService } from 'shared/inmemoryeventdbservice';
import { HttpClientInMemoryWebApiModule }​​​​​​ from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailComponent } from './event-details/event-details.component';
import { EmojiDirective } from './app-emoji.directive';
import { EmployeeListComponent } from './employee/employee.component';
import { TrusteeComponent } from './trustee/trustee.component';
import { StudentComponent } from './student/student.component';
import { BookDataComponent } from './book/book.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { HomeComponent } from './home/home.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { ProductAddComponent } from './products/product-list/product-add.component';
import { MenuComponent } from './home/menu.component';
import { ShellComponent } from './home/shell.component';
import { LoginComponent } from './user/login.component';
import { AnimalAddComponent } from './animal-list/animal-add/animal-add.component';


@NgModule({
  declarations: [AppComponent, 
    PentHouseComponent, 
    WelcomeComponent, 
    FlatListComponent, 
    AnimalListComponent, 
    ProductsListComponent, 
    StarComponent, 
    CartComponent, 
    TransformDataPipe, 
    PipePipe, 
    NavbarComponent, 
    EventListComponent, 
    EventDetailComponent, 
    EmojiDirective, 
    EmployeeListComponent, 
    TrusteeComponent, 
    StudentComponent, 
    BookDataComponent, 
    AboutUsComponent, 
    DashBoardComponent, 
    HomeComponent, 
    EmployeeDetailComponent, 
    AnimalDetailComponent,
    ProductAddComponent,
    MenuComponent,
    ShellComponent,
    LoginComponent,
    AnimalAddComponent
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryEventDbService),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
