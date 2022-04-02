import { Controller, Delete, Get, Post } from '@nestjs/common';

@Controller('track')
export class TrackController {
	@Post()
	create(): void {}

	@Get()
	getAll(): void {}

	@Get()
	getOne(): void {}

	@Delete()
	delete(): void {}
}
