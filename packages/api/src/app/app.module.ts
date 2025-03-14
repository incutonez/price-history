import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { AppController } from "src/app/app.controller";
import { AppService } from "src/app/app.service";
import { DBConfig } from "src/db/config";
import { UsersModule } from "src/users/users.module";

@Module({
	imports: [
		UsersModule,
		ConfigModule.forRoot({
			envFilePath: [".env.local", ".env"],
		}),
		SequelizeModule.forRoot(DBConfig),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {
}
