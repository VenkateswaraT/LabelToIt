import { Module } from '@nestjs/common';
import { AuthControllerController } from './auth.controller';
import { AuthControllerService } from './auth.service';

@Module({
  controllers: [AuthControllerController],
  providers: [AuthControllerService],
})
export class AuthControllerModule {}
