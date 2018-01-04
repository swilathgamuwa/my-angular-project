import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { SearchPipe, ColumnPipe, RowPipe } from "./../components/common/search.pipe";

@NgModule({
  declarations: [SearchPipe, ColumnPipe, RowPipe],
  imports: [CommonModule],
  exports: [SearchPipe, ColumnPipe, RowPipe]
})

export class MainPipe { }