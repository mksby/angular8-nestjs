import { join } from 'path';

import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';

import { HelloController } from './hello';
import { AppController } from './src/app.controller';
import { AuthModule } from './src/auth/auth.module';
import { UsersModule } from './src/users/users.module';

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      viewsPath: join(process.cwd(), 'dist/browser'),
      bundle: require('../server/main'),
      liveReload: true
    }),
    AuthModule,
    UsersModule
  ],
  controllers: [AppController, HelloController]
})
export class ApplicationModule {}
