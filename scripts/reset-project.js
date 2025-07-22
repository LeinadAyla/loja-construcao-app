#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");
const readline = require("readline");

const root = process.cwd();
const exampleDir = "app-example";
const newAppDir = "app";
const oldDirs = ["components", "screens", "constants", "app"];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Conteúdo inicial para o novo projeto
const indexContent = `import { Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to your new app!</Text>
    </View>
  );
}
`;

const layoutContent = `import { Stack } from 'expo-router';

export default function Layout() {
  return <Stack />;
}
`;

async function moveDirectories(userInput) {
  try {
    const exampleDirPath = path.join(root, exampleDir);
    if (userInput === "y") {
      await fs.ensureDir(exampleDirPath);
      console.log(`📁 /${exampleDir} directory created.`);
    }

    for (const dir of oldDirs) {
      const oldDirPath = path.join(root, dir);
      if (fs.existsSync(oldDirPath)) {
        if (userInput === "y") {
          const newDirPath = path.join(exampleDirPath, dir);
          try {
            await fs.copy(oldDirPath, newDirPath, { overwrite: true });
            console.log(`📦 ${dir} copiado para /${exampleDir}/${dir}`);
          } catch (err) {
            console.warn(`⚠️ Erro ao copiar ${dir}: ${err.message}`);
          }
        }

        try {
          await fs.remove(oldDirPath);
          console.log(`🧹 ${dir} removido.`);
        } catch (err) {
          console.warn(`⚠️ Não foi possível remover ${dir}: ${err.message}`);
        }
      } else {
        console.log(`ℹ️ ${dir} não encontrado, pulando...`);
      }
    }

    const newAppDirPath = path.join(root, newAppDir);
    await fs.ensureDir(newAppDirPath);
    console.log(`📁 Nova pasta /${newAppDir} criada.`);

    const indexPath = path.join(newAppDirPath, "index.tsx");
    await fs.writeFile(indexPath, indexContent);
    console.log("📄 app/index.tsx criado.");

    const layoutPath = path.join(newAppDirPath, "_layout.tsx");
    await fs.writeFile(layoutPath, layoutContent);
    console.log("📄 app/_layout.tsx criado.");

    console.log("\n✅ Projeto resetado com sucesso!");
    console.log(`\nPróximos passos:`);
    console.log("1. Rode: `npx expo start`");
    console.log("2. Edite o novo app em /app");
    if (userInput === "y") {
      console.log(`3. Quando não precisar mais, delete a pasta /${exampleDir}`);
    }
  } catch (error) {
    console.error(`❌ Erro: ${error.message}`);
  }
}

rl.question(
  "❓ Deseja mover arquivos para /app-example em vez de deletar? (Y/n): ",
  (answer) => {
    const userInput = answer.trim().toLowerCase() || "y";
    if (["y", "n"].includes(userInput)) {
      moveDirectories(userInput).finally(() => rl.close());
    } else {
      console.log("❌ Entrada inválida. Digite 'Y' ou 'N'.");
      rl.close();
    }
  }
);
