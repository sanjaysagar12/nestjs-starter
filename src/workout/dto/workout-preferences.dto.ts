import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class SaveWorkoutPreferencesDto {
    @ApiPropertyOptional({ example: 'intermediate', enum: ['beginner', 'intermediate', 'advanced'] })
    fitnessLevel?: string;

    @ApiPropertyOptional({ example: 4, description: 'Number of workouts per week' })
    workoutFrequencyPerWeek?: number;

    @ApiPropertyOptional({ example: 'strength', enum: ['strength', 'cardio', 'yoga', 'hiit', 'flexibility', 'mixed'] })
    preferredWorkoutType?: string;

    @ApiPropertyOptional({ example: 'left knee pain', description: 'Any injuries or physical limitations' })
    injuries?: string;

    @ApiPropertyOptional({
        example: ['monday', 'wednesday', 'friday'],
        type: [String],
        description: 'Days available to work out',
    })
    availableDays?: string[];

    @ApiPropertyOptional({ example: 'morning', enum: ['morning', 'afternoon', 'evening', 'flexible'] })
    preferredWorkoutTime?: string;

    @ApiPropertyOptional({ example: 45, description: 'Preferred session duration in minutes' })
    sessionDurationMins?: number;
}

export class WorkoutPreferencesResponseDto {
    @ApiProperty({ example: 'a1b2c3d4-...' })
    id: string;

    @ApiProperty({ example: 'intermediate' })
    fitnessLevel: string | null;

    @ApiProperty({ example: 4 })
    workoutFrequencyPerWeek: number | null;

    @ApiProperty({ example: 'strength' })
    preferredWorkoutType: string | null;

    @ApiProperty({ example: 'left knee pain' })
    injuries: string | null;

    @ApiProperty({ example: ['monday', 'wednesday', 'friday'], type: [String] })
    availableDays: string[];

    @ApiProperty({ example: 'morning' })
    preferredWorkoutTime: string | null;

    @ApiProperty({ example: 45 })
    sessionDurationMins: number | null;

    @ApiPropertyOptional({ example: '2026-02-25T11:30:00.000Z' })
    updatedAt: Date | null;
}
