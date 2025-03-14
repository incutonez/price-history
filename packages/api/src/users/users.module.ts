import { Module } from "@nestjs/common";
import { UsersController } from "src/users/users.controller";
import { UsersMapper } from "src/users/users.mapper";
import { UsersService } from "src/users/users.service";

@Module({
	controllers: [UsersController],
	providers: [UsersService, UsersMapper],
})
export class UsersModule {}
