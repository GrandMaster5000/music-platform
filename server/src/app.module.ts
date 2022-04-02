import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrackModule } from './track/track.module';
import { AlbumModule } from './album/album.module';

@Module({
	imports: [TrackModule, AlbumModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
