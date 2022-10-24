import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeptosModule } from './deptos/deptos.module';

@Module({
  imports: [DeptosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
