import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Admission } from './features/admission/admission';
import { Notices } from './features/notices/notices';
import { Events } from './features/events/events';
import { Gallery } from './features/gallery/gallery';
import { Teachers } from './features/teachers/teachers';
import { Contact } from './pages/contact/contact';
import { About } from './pages/about/about';
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy';
import { Disclaimer } from './pages/disclaimer/disclaimer';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
  { path: '', component: Home, title: 'Home | Adarsh Prep Public School' },
  { path: 'admission', component: Admission, title: 'Admission | Adarsh Prep Public School' },
  { path: 'notices', component: Notices, title: 'Notices | Adarsh Prep Public School' },
  { path: 'events', component: Events, title: 'Events | Adarsh Prep Public School' },
  { path: 'gallery', component: Gallery, title: 'Gallery | Adarsh Prep Public School' },
  { path: 'teachers', component: Teachers, title: 'Teachers | Adarsh Prep Public School' },
  { path: 'contact', component: Contact, title: 'Contact | Adarsh Prep Public School' },
  { path: 'about', component: About, title: 'About | Adarsh Prep Public School' },
  { path: 'privacy-policy', component: PrivacyPolicy, title: 'Privacy Policy | Adarsh Prep Public School' },
  { path: 'disclaimer', component: Disclaimer, title: 'Disclaimer | Adarsh Prep Public School' },
  { path: 'dashboard', component: Dashboard, title: 'Dashboard | Adarsh Prep Public School' },
  { path: '**', redirectTo: '' },
];
