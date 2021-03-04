import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'school-courses';

  courseHighlight = {
    name: 'ADS - Análise e Desenvolvimento de Sistemas',
    workload: 3000
  };

  courses = [
    {
      name: 'Secretariado',
      workload: 2000
    },
    {
      name: 'Corte e costura',
      workload: 2000
    },
    {
      name: 'Administração de Empresas',
      workload: 4800
    },
    {
      name: 'Engenharia de Alimentos',
      workload: 5000
    }
  ];

}
