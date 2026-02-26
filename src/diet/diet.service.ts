import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SaveDietPreferencesDto } from './dto/diet-preferences.dto';

@Injectable()
export class DietService {
    constructor(private readonly prisma: PrismaService) { }

    getTodayDiet() {
        return null;
    }

    async getDietPreferences(userId: string) {
        return this.prisma.userProfile.findUnique({
            where: { userId },
            select: {
                dietaryPreference: true,
                dailyWaterLitres: true,
                mealsPerDay: true,
                updatedAt: true,
            },
        });
    }

    async saveDietPreferences(userId: string, dto: SaveDietPreferencesDto) {
        return this.prisma.userProfile.upsert({
            where: { userId },
            create: {
                userId,
                dietaryPreference: dto.dietaryPreference,
                dailyWaterLitres: dto.dailyWaterLitres,
                mealsPerDay: dto.mealsPerDay,
            },
            update: {
                ...(dto.dietaryPreference !== undefined && { dietaryPreference: dto.dietaryPreference }),
                ...(dto.dailyWaterLitres !== undefined && { dailyWaterLitres: dto.dailyWaterLitres }),
                ...(dto.mealsPerDay !== undefined && { mealsPerDay: dto.mealsPerDay }),
                updatedAt: new Date(),
            },
            select: {
                dietaryPreference: true,
                dailyWaterLitres: true,
                mealsPerDay: true,
                updatedAt: true,
            },
        });
    }
}

