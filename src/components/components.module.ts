import { NgModule } from '@angular/core';
import { ModalbetComponent } from '../components/modalbet/modalbet';
import { IonicPageModule } from 'ionic-angular';
@NgModule({
	declarations: [ModalbetComponent],
	entryComponents: [
		ModalbetComponent
	  ],
	imports: [
		IonicPageModule.forChild(ModalbetComponent)
	],
	exports: [ModalbetComponent]
})
export class ComponentsModule {}
