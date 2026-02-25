import { Injectable } from '@nestjs/common';
import { TodayWorkoutResponseDto } from './dto/today-workout.dto';

@Injectable()
export class WorkoutService {
    getTodayWorkout(): TodayWorkoutResponseDto {
        return {
            title: 'Suggested Muscle',
            highlight: 'Bicep & Back',
            subtext: 'Optional for hypertrophy',
            duration: 45,
            intensity: 'hard',
            session: [
                {
                    id: 'session-001',
                    title: 'Chest & Triceps',
                    content: 'Push day focused on upper body strength',
                    category: 'Strength',
                    exercisesCount: 3,
                    position: 1,
                    exercises: [
                        {
                            id: 'ex-001',
                            name: 'Bench Press',
                            desc: 'Chest, Triceps, Shoulders',
                            image: 'https://cdn.example.com/bench-press.png',
                            sets: [
                                { kg: 60, reps: 10 },
                                { kg: 65, reps: 8 },
                                { kg: 70, reps: 6 },
                            ],
                        },
                        {
                            id: 'ex-002',
                            name: 'Tricep Dips',
                            desc: 'Triceps, Chest',
                            image: 'https://cdn.example.com/tricep-dips.png',
                            sets: [
                                { kg: 0, reps: 12 },
                                { kg: 0, reps: 10 },
                                { kg: 0, reps: 10 },
                            ],
                        },
                        {
                            id: 'ex-003',
                            name: 'Incline Dumbbell Press',
                            desc: 'Upper Chest, Shoulders',
                            image: 'https://cdn.example.com/incline-db-press.png',
                            sets: [
                                { kg: 24, reps: 10 },
                                { kg: 26, reps: 8 },
                                { kg: 28, reps: 6 },
                            ],
                        },
                    ],
                },
                {
                    id: 'session-002',
                    title: 'Back & Biceps',
                    content: 'Pull day targeting back width and bicep peak',
                    category: 'Strength',
                    exercisesCount: 3,
                    position: 2,
                    exercises: [
                        {
                            id: 'ex-004',
                            name: 'Deadlift',
                            desc: 'Lower Back, Glutes, Hamstrings',
                            image: 'https://cdn.example.com/deadlift.png',
                            sets: [
                                { kg: 80, reps: 8 },
                                { kg: 90, reps: 6 },
                                { kg: 100, reps: 4 },
                            ],
                        },
                        {
                            id: 'ex-005',
                            name: 'Pull-Ups',
                            desc: 'Lats, Biceps, Rear Delts',
                            image: 'https://cdn.example.com/pull-ups.png',
                            sets: [
                                { kg: 0, reps: 10 },
                                { kg: 0, reps: 8 },
                                { kg: 0, reps: 8 },
                            ],
                        },
                        {
                            id: 'ex-006',
                            name: 'Barbell Curl',
                            desc: 'Biceps, Forearms',
                            image: 'https://cdn.example.com/barbell-curl.png',
                            sets: [
                                { kg: 30, reps: 12 },
                                { kg: 35, reps: 10 },
                                { kg: 35, reps: 8 },
                            ],
                        },
                    ],
                },
            ],
        };
    }
}

