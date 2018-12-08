import { NgModule } from '@angular/core';
import { ReplacePipe } from './pipes/replace.pipe';

@NgModule({
  declarations: [ReplacePipe],
  exports: [ReplacePipe]
})
export class CommonModule { }
