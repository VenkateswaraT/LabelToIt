import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthControllerController } from './auth/auth.controller';
import { AuthControllerService } from './auth/auth.service';
import { AuthControllerModule } from './auth/auth.module';

@Module({
  imports: [AuthControllerModule],
  controllers: [AppController, AuthControllerController],
  providers: [AppService, AuthControllerService],
})
export class AppModule {}
