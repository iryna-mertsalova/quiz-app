module.exports = {
    preset: 'jest-preset-angular', // Використовуємо Jest-пресет для Angular
    setupFilesAfterEnv: [ "./src/setup-jest.ts" ], // Файл для налаштування оточення тестів
    globals: {
        'ts-jest': {
            tsconfig: '<rootDir>/tsconfig.spec.json', // Специфічний TypeScript конфіг для тестів
            stringifyContentPathRegex: '\\.html$', // Для роботи з HTML-файлами в тестах
        },
    },
    transform: {
        '^.+\\.(ts|js|html)$': 'jest-preset-angular', // Трансформація файлів
    },
    testEnvironment: 'jsdom', // Оточення браузера
    testMatch: ['<rootDir>/src/**/*.spec.ts'], // Шлях до файлів тестів
    moduleFileExtensions: ['ts', 'html', 'js', 'json'], // Підтримувані розширення
    moduleNameMapper: {
        // Додайте мапінги для імпортів, якщо необхідно
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    coverageDirectory: '<rootDir>/coverage/', // Директорія для звітів покриття
    collectCoverageFrom: [
        '<rootDir>/src/**/*.ts',
        '!<rootDir>/src/main.ts',
        '!<rootDir>/src/**/*.module.ts',
        '!<rootDir>/src/**/index.ts',
        '!<rootDir>/src/environments/**',
    ],
    coverageReporters: ['html', 'lcov', 'text-summary'], // Формати звітів покриття
    verbose: true, // Вивід деталей тестів
    silent: false,
};