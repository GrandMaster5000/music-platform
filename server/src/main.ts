import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
	try {
		const PORT = process.env.PORT || 5000;
		const app = await NestFactory.create(AppModule);
		app.setGlobalPrefix('api');
		await app.listen(PORT, () => console.log(`server started on PORT ${PORT}`));
	} catch (e) {
		console.log(e);
	}
}
bootstrap();
