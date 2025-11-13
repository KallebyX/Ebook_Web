#!/usr/bin/env node

/**
 * Script para adicionar imports de CSS base em todos os componentes
 * Aplica melhorias de responsividade automaticamente
 */

const fs = require('fs');
const path = require('path');

// Diretório dos componentes
const componentsDir = path.join(__dirname, '..', 'components');

// Imports que devem ser adicionados no topo de cada arquivo CSS
const cssImports = `/* Importa estilos base */
@import url('../../styles/variables.css');
@import url('../../styles/component-base.css');

`;

// CSS base para responsividade de containers
const responsiveContainerCSS = `
/* ============================================
   RESPONSIVIDADE - TABLET
   ============================================ */
@media (max-width: 768px) {
  [class*="main-container"] {
    width: 90vw !important;
    max-width: 100vw !important;
    min-height: auto !important;
    padding: var(--spacing-md) !important;
  }
}

/* ============================================
   RESPONSIVIDADE - MOBILE
   ============================================ */
@media (max-width: 480px) {
  [class*="main-container"] {
    width: 95vw !important;
    max-width: 100vw !important;
    min-height: 100vh !important;
    padding: var(--spacing-sm) !important;
    padding-bottom: calc(var(--nav-button-size-mobile) + var(--spacing-3xl)) !important;
  }

  /* Converte posições fixas em relativas */
  [class*="main-container"] [style*="position: absolute"] {
    position: relative !important;
    margin: var(--spacing-sm) auto !important;
  }
}
`;

// Função para verificar se o arquivo já tem os imports
function hasImports(content) {
  return content.includes("@import url('../../styles/variables.css')");
}

// Função para verificar se o arquivo já tem media queries
function hasMediaQueries(content) {
  return content.includes('@media (max-width:') || content.includes('@media (max-width :');
}

// Função para processar arquivo CSS
function processCSSFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Adiciona imports se não existirem
    if (!hasImports(content)) {
      content = cssImports + content;
      modified = true;
      console.log(`✓ Adicionado imports em: ${filePath}`);
    }

    // Torna containers responsivos
    if (content.includes('width: 700px') && content.includes('height: 1000px')) {
      content = content.replace(
        /width:\s*700px;/g,
        'width: 700px;\n  max-width: 100vw;'
      );
      content = content.replace(
        /height:\s*1000px;/g,
        'height: auto;\n  min-height: 1000px;'
      );
      modified = true;
      console.log(`✓ Containers tornados responsivos em: ${filePath}`);
    }

    // Adiciona media queries se não existirem
    if (!hasMediaQueries(content)) {
      content = content.trim() + '\n\n' + responsiveContainerCSS;
      modified = true;
      console.log(`✓ Adicionado media queries em: ${filePath}`);
    }

    // Salva arquivo se foi modificado
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }

    return false;
  } catch (error) {
    console.error(`✗ Erro ao processar ${filePath}:`, error.message);
    return false;
  }
}

// Função principal
function main() {
  console.log('🚀 Iniciando atualização de componentes...\n');

  let totalFiles = 0;
  let modifiedFiles = 0;

  // Lê todos os diretórios de componentes
  const components = fs.readdirSync(componentsDir);

  components.forEach((component) => {
    const componentPath = path.join(componentsDir, component);
    const stats = fs.statSync(componentPath);

    if (stats.isDirectory()) {
      // Procura por arquivos CSS
      const cssFiles = ['index.css', 'style.css', 'styles.css'];

      cssFiles.forEach((cssFile) => {
        const cssPath = path.join(componentPath, cssFile);

        if (fs.existsSync(cssPath)) {
          totalFiles++;
          if (processCSSFile(cssPath)) {
            modifiedFiles++;
          }
        }
      });
    }
  });

  console.log(`\n✅ Concluído!`);
  console.log(`📊 Total de arquivos CSS: ${totalFiles}`);
  console.log(`🔧 Arquivos modificados: ${modifiedFiles}`);
  console.log(`✓ Arquivos já atualizados: ${totalFiles - modifiedFiles}`);
}

// Executa o script
if (require.main === module) {
  main();
}

module.exports = { processCSSFile };
