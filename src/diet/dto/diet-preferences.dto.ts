import { ApiPropertyOptional } from '@nestjs/swagger';

export class SaveDietPreferencesDto {
    @ApiPropertyOptional({
        example: 'vegan',
        enum: ['vegan', 'vegetarian', 'keto', 'paleo', 'mediterranean', 'none'],
    })
    dietaryPreference?: string;

    @ApiPropertyOptional({ example: 2.5, description: 'Daily water intake in litres' })
    dailyWaterLitres?: number;

    @ApiPropertyOptional({ example: 3, description: 'Number of meals per day' })
    mealsPerDay?: number;
}

export class DietPreferencesResponseDto {
    @ApiPropertyOptional({ example: 'vegan' })
    dietaryPreference: string | null;

    @ApiPropertyOptional({ example: 2.5 })
    dailyWaterLitres: number | null;

    @ApiPropertyOptional({ example: 3 })
    mealsPerDay: number | null;

    @ApiPropertyOptional({ example: '2026-02-26T07:23:00.000Z' })
    updatedAt: Date | null;
}
