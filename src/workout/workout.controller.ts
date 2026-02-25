import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { WorkoutService } from './workout.service';
import { TodayWorkoutResponseDto } from './dto/today-workout.dto';

@ApiTags('Workout')
@ApiBearerAuth('JWT')
@Controller('workout')
export class WorkoutController {
    constructor(private readonly workoutService: WorkoutService) { }

    @Get('today')
    @ApiOperation({
        summary: "Get today's suggested workout",
        description: 'Returns the recommended workout plan for today including sessions and exercises',
    })
    @ApiOkResponse({ type: TodayWorkoutResponseDto })
    getTodayWorkout(): TodayWorkoutResponseDto | null {
        return this.workoutService.getTodayWorkout();
    }
}

