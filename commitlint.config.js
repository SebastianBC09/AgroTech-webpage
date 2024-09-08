module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Reglas personalizadas
    'type-enum': [2, 'always', [
      'build',   // Cambios que afectan el sistema de build o dependencias externas
      'chore',   // Actualizaciones menores o tareas generales
      'ci',      // Cambios en configuración de CI (Integración Continua)
      'docs',    // Cambios en la documentación
      'feat',    // Nueva característica o funcionalidad
      'fix',     // Corrección de bugs
      'perf',    // Cambios que mejoran el rendimiento
      'refactor',// Refactorización del código sin cambios funcionales
      'revert',  // Revertir cambios anteriores
      'style',   // Cambios que no afectan el código (formato, espacios, etc.)
      'test'     // Añadir o modificar pruebas
    ]],

    // Longitud máxima del encabezado (type + scope + subject)
    'header-max-length': [2, 'always', 72],

    // Longitud máxima del cuerpo del commit
    'body-max-length': [2, 'always', 100],

    // Longitud mínima del encabezado
    'header-min-length': [2, 'always', 10],

    // Tipo del commit debe estar siempre presente
    'type-case': [2, 'always', 'lower-case'],

    // El "scope" opcional debe estar en minúsculas
    'scope-case': [2, 'always', 'lower-case'],

    // El "subject" del commit debe estar en minúsculas
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],

    // El "subject" del commit no debe terminar con punto
    'subject-full-stop': [2, 'never', '.'],

    // Tipo no puede estar vacío
    'type-empty': [2, 'never'],

    // El "subject" no debe estar vacío
    'subject-empty': [2, 'never'],

    // El cuerpo del commit es opcional, pero si está presente, debe tener más de 20 caracteres
    'body-min-length': [1, 'always', 20],

    // El "footer" (pie de commit) debe seguir las reglas si está presente
    'footer-max-length': [2, 'always', 100],
  }
};
