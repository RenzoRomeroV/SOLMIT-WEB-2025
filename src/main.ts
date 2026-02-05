import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

console.log(
  '%c*****************\nSOLMIT SAC - 2026\n*****************',
  'font-size: 28px; font-weight: 700; line-height: 1.2;'
);

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
