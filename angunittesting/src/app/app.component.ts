import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './components/Dashboard/dashboard.component';
import { WelcomeComponent } from './components/Welcome/welcome.component';
import { LightswitchComponent } from './components/LightSwitch/lightswitch.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,DashboardComponent,WelcomeComponent,LightswitchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angunittesting';
}
