import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true,  envFilePath: ['.env.development', '.env'],ignoreEnvFile: false,
}), 
    //MongooseModule.forRoot(process.env.MONGODB_URI),
     MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
    }),
    TasksModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
