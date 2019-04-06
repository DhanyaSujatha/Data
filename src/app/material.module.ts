import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatCardModule, MatSidenavModule, MatToolbarModule, MatListModule, MatTabsModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, MatCheckboxModule, MatNativeDateModule, MatSelectModule } from '@angular/material';


@NgModule({
    imports:[
     MatButtonModule, 
     MatIconModule,
     MatCardModule,
     MatSidenavModule,
     MatToolbarModule,
     MatListModule,
     MatTabsModule,
     MatInputModule,
     MatFormFieldModule,
     MatNativeDateModule,
     MatDatepickerModule,
     MatCheckboxModule,
     MatSelectModule
    

       
    ],
    exports:[
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatTabsModule,
        MatInputModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatCheckboxModule,
        MatSelectModule
    ]
})

export class MaterialModule{

}