import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { FirebaseModule } from './firebase/firebase.module';
import { WorkoutModule } from './workout/workout.module';
import { DietModule } from './diet/diet.module';

@Module({
  imports: [
    FirebaseModule,
    PrismaModule,
    UserModule,
    AuthModule,
    WorkoutModule,
    DietModule,
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule { }
