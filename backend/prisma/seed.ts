import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.sensor.createMany({
        data: [
            {model: "HC-SR04", make: "Generic", type: "Ultrasonic sensor", year_of_production: 2024},
            {model: "HC-SR501", make: "Generic", type: "PIR (Passive Infrared) sensor", year_of_production: 2021},
            {model: "FC-51", make: "Generic", type: "Proximity sensor", year_of_production: 2024}
        ]
    });

    console.log('Created entries for sensors.');

    await prisma.room.createMany({
        data: [
            {name: "Living Room", size: "Large"},
            {name: "Kitchen", size: "Medium"},
            {name: "Erick's bedroom", size: "Small"},
        ]
    });

    console.log('Created entries for rooms.');

    await prisma.register.createMany({
        data: [
            {sensor_id: 1, room_id: 1, location: "Doorframe", createdAt: new Date()},
            {sensor_id: 2, room_id: 2, location: "Window", createdAt: new Date()},
            {sensor_id: 3, room_id: 3, location: "Wall corner", createdAt: new Date()}

        ]
     });
     console.log('Created entries for registers.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });