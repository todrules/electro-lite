import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { CardTitle } from './title/title.component';
import { CardSubtitle } from './subtitle/subtitle.component';
import { CardHeader } from './header/header.component';
import { CardFooter } from './footer/footer.component';
import { CardContent } from './content/content.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CardComponent,
    CardTitle,
    CardSubtitle,
    CardHeader,
    CardFooter,
    CardContent
  ],
  providers: [
  
  ],
  entryComponents: [
  
  ],
  exports: [
    CommonModule,
    CardComponent,
    CardTitle,
    CardSubtitle,
    CardHeader,
    CardFooter,
    CardContent
  ]
})
export class CardModule {

}
