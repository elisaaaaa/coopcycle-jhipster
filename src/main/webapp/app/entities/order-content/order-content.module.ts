import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoopcycleSharedModule } from 'app/shared/shared.module';
import { OrderContentComponent } from './order-content.component';
import { OrderContentDetailComponent } from './order-content-detail.component';
import { OrderContentUpdateComponent } from './order-content-update.component';
import { OrderContentDeleteDialogComponent } from './order-content-delete-dialog.component';
import { orderContentRoute } from './order-content.route';

@NgModule({
  imports: [CoopcycleSharedModule, RouterModule.forChild(orderContentRoute)],
  declarations: [OrderContentComponent, OrderContentDetailComponent, OrderContentUpdateComponent, OrderContentDeleteDialogComponent],
  entryComponents: [OrderContentDeleteDialogComponent]
})
export class CoopcycleOrderContentModule {}
