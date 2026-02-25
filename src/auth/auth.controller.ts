import { Controller, Get, Req, UseGuards, Post, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOkResponse, ApiBody, ApiTags, ApiOperation, ApiSecurity, ApiExcludeEndpoint } from '@nestjs/swagger';
import { AndroidTokenResponseDto, GoogleCallbackResponseDto } from './dto/swagger/google-callback';
import { AndroidTokenDto } from './dto/authenticate-android';
import { AuthService } from './auth.service';
import { Public } from '../common/decorators/public.decorator';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) { }


	@Post('google/token')
	@Public()
	@ApiOperation({
		summary: 'Authenticate with Google ID Token',
		description: 'For mobile clients to authenticate using Google ID token'
	})
	@ApiBody({ type: AndroidTokenDto })
	@ApiOkResponse({ type: GoogleCallbackResponseDto })
	async authenticateAndroid(@Body() body: AndroidTokenDto) {
		const result = await this.authService.validateIdToken(body.idToken);
		return result;
	}

}
