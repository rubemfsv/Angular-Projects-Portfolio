import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardRoutes } from './dashboard';
import { CalculatorRoutes } from './calculator';
import { ConverterRoutes } from './converter/converter-routing.module';
import { TaskRoutes } from './tasks';
import { TicTacToeRoutes } from './tic-tac-toe/tic-tac-toe-routing.module';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  ...DashboardRoutes,
  ...CalculatorRoutes,
  ...ConverterRoutes,
  ...TaskRoutes,
  ...TicTacToeRoutes,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
