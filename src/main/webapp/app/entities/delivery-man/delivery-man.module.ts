import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoopcycleSharedModule } from 'app/shared/shared.module';
import { DeliveryManComponent } from './delivery-man.component';
import { DeliveryManDetailComponent } from './delivery-man-detail.component';
import { DeliveryManUpdateComponent } from './delivery-man-update.component';
import { DeliveryManDeleteDialogComponent } from './delivery-man-delete-dialog.component';
import { deliveryManRoute } from './delivery-man.route';

@NgModule({
  imports: [CoopcycleSharedModule, RouterModule.forChild(deliveryManRoute)],
  declarations: [DeliveryManComponent, DeliveryManDetailComponent, DeliveryManUpdateComponent, DeliveryManDeleteDialogComponent],
  entryComponents: [DeliveryManDeleteDialogComponent]
})
export class CoopcycleDeliveryManModule {}
