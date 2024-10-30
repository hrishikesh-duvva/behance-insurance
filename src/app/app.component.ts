import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component'; 
import { HeroComponent } from './hero/hero.component';
import { FeaturesComponent } from './features/features.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, NavbarComponent, HeroComponent, FeaturesComponent, WhyChooseUsComponent, SubscribeComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'behace';
}

