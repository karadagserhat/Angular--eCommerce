import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'eCommerce-paginationContainer',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './paginationContainer.component.html',
})
export class PaginationContainer {}
