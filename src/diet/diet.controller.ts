import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { DietService } from './diet.service';
import { DietPreferencesResponseDto, SaveDietPreferencesDto } from './dto/diet-preferences.dto';

@ApiTags('Diet')
@ApiBearerAuth('JWT')
@Controller('diet')
export class DietController {
    constructor(private readonly dietService: DietService) { }

    @Get('today')
    @ApiOperation({
        summary: "Get today's diet plan",
        description: 'Returns the diet plan for today. Returns null if not yet available.',
    })
    @ApiOkResponse({ description: 'null — coming soon' })
    getTodayDiet() {
        return this.dietService.getTodayDiet();
    }

    @Get('preferences')
    @ApiOperation({ summary: 'Get dietary preferences' })
    @ApiOkResponse({ type: DietPreferencesResponseDto })
    async getDietPreferences(@Req() req: any) {
        return this.dietService.getDietPreferences(req.user.id);
    }

    @Post('preferences')
    @ApiOperation({
        summary: 'Save dietary preferences',
        description: 'Creates or updates dietary preference, daily water intake, and meals per day. All fields optional.',
    })
    @ApiBody({ type: SaveDietPreferencesDto })
    @ApiOkResponse({ type: DietPreferencesResponseDto })
    async saveDietPreferences(@Req() req: any, @Body() body: SaveDietPreferencesDto) {
        return this.dietService.saveDietPreferences(req.user.id, body);
    }
}

