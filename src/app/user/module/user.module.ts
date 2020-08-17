import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { userRoutes } from '../routes/user.routes'
import { ProfileComponent } from '../profile.component'

@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(userRoutes)
    ],
    declarations:[
        ProfileComponent
    ], 
    providers:[

    ]

})

export class UserModule{

}