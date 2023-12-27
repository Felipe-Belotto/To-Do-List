import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { promises as fs } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const createComponent = async () => {
  const componentName = process.argv[2];

  if (!componentName) {
    console.error('Por favor, forneça um nome de componente.');
    process.exit(1);
  }

  const componentDir = join(__dirname, '..', 'assets', 'components', componentName);
  const jsxFile = join(componentDir, `${componentName}.jsx`);
  const cssFile = join(componentDir, `${componentName}.module.css`);

  try {
    // Criar diretório do componente
    await fs.mkdir(componentDir);

    // Criar arquivo .jsx
    await fs.writeFile(
      jsxFile,
      `import React from 'react';\nimport styles from './${componentName}.module.css';\n\nfunction ${componentName}() {\n  return (\n    <div className={styles.${componentName.toLowerCase()}}>\n      {/* Conteúdo do componente ${componentName} */}\n    </div>\n  );\n}\n\nexport default ${componentName};\n`
    );

    // Criar arquivo .module.css
    await fs.writeFile(cssFile, `/* Estilos para ${componentName} */\n`);

    console.log(`Componente '${componentName}' criado com sucesso em '${componentDir}'.`);
  } catch (error) {
    console.error('Erro ao criar o componente:', error);
  }
};

createComponent();
