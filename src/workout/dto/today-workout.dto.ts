import { ApiProperty } from '@nestjs/swagger';

export class SetDto {
    @ApiProperty({ example: 60 })
    kg: number;

    @ApiProperty({ example: 10 })
    reps: number;
}

export class ExerciseDto {
    @ApiProperty({ example: 'ex-001' })
    id: string;

    @ApiProperty({ example: 'Bench Press' })
    name: string;

    @ApiProperty({ example: 'Chest, Triceps, Shoulders' })
    desc: string;

    @ApiProperty({ example: 'https://cdn.example.com/bench-press.png' })
    image: string;

    @ApiProperty({ type: [SetDto] })
    sets: SetDto[];
}

export class WorkoutSessionDto {
    @ApiProperty({ example: 'session-001' })
    id: string;

    @ApiProperty({ example: 'Chest & Triceps' })
    title: string;

    @ApiProperty({ example: 'Push day focused on upper body strength' })
    content: string;

    @ApiProperty({ example: 'Strength' })
    category: string;

    @ApiProperty({ example: 4 })
    exercisesCount: number;

    @ApiProperty({ example: 1 })
    position: number;

    @ApiProperty({ type: [ExerciseDto] })
    exercises: ExerciseDto[];
}

export class TodayWorkoutResponseDto {
    @ApiProperty({ example: 'Suggested Muscle' })
    title: string;

    @ApiProperty({ example: 'Bicep & Back' })
    highlight: string;

    @ApiProperty({ example: 'Optional for hypertrophy' })
    subtext: string;

    @ApiProperty({ example: 45 })
    duration: number;

    @ApiProperty({ example: 'hard', enum: ['easy', 'moderate', 'hard'] })
    intensity: string;

    @ApiProperty({ type: [WorkoutSessionDto] })
    session: WorkoutSessionDto[];
}
