import CONFIG from './shared/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: CONFIG.DB.HOST,
            port: Number(CONFIG.DB.PORT),
            username: CONFIG.DB.USER,
            password: CONFIG.DB.PASS,
            database: CONFIG.DB.BASE,
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: false,
            autoLoadEntities: true,
        }),
    ],
    controllers: [AppController],
    providers: [],
})
export class AppModule {}
