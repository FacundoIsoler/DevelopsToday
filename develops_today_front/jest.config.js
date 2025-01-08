module.exports = {
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'], // Configura el entorno después de cargar los tests
    transform: {
        '^.+\\.jsx?$': 'babel-jest', // Usa babel-jest para transformar archivos JS y JSX
    },
    transformIgnorePatterns: [
        '/node_modules/(?!chart.js)/', // Ignora node_modules excepto chart.js
    ],
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock de estilos CSS
    },
    testEnvironment: 'jsdom', // Define el entorno como jsdom
};
