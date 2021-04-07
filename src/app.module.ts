import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TenancyModule } from './tenancy/tenancy.module';

@Module({
  imports: [
    TenancyModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: '',
      password: '',
      database: 'main',
      synchronize: true,
      name: 'main',
      entities: ['dist/**/*.entity{.ts,.js}'],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: '',
      password: '',
      database: 'tenant_a',
      synchronize: true,
      name: 'tenant_a',
      entities: ['dist/**/*.entity{.ts,.js}'],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: '',
      password: '',
      database: 'tenant_b',
      synchronize: true,
      name: 'tenant_b',
      entities: ['dist/**/*.entity{.ts,.js}'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
