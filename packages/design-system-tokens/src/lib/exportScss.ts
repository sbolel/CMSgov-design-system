import { FileDescriptor } from './types';
import { flatten, writeFile } from './utility';

const tokenFormat = (name: string, value: string | unknown) => {
  return `$${name}: ${value};\n`;
};

const tokenFormatDefault = (name: string, value: string | unknown) => {
  return `$${name}: ${value} !default;\n`;
};

const setVars = (
  items: Record<string, any>,
  filename: string,
  formatter: (name: string, value: string) => string = tokenFormat
) => {
  let vars = '';
  Object.entries(items).forEach(([name, value]) => {
    name = `${filename}-${name}`;
    vars += formatter(name, value);
  });
  return vars;
};

/*
 * Accepts an array of file descriptors generated by getFileDescriptors('path')
 * and writes their imported data to the filesystem as Sass formatted scss files
 */
export const exportScss = (fileDescriptors: FileDescriptor[], outPath: string): number => {
  fileDescriptors.forEach((file) => {
    const importedModule = require(`${file.moduleImportName}`);
    const filename = `${outPath}/${file.exportFileName}.scss`;
    const type = importedModule.default.description ? 'theme' : 'tokens';
    let output = '';

    if (type === 'theme') {
      Object.entries(importedModule.default).forEach(([key]) => {
        if (key === 'description') return;

        const tokenItems = flatten(importedModule.default[key]);
        /*
         * core scss needs the !default attribute added to every style to
         * allow for overriding in medicare, TODO: get all systems on the
         * same page and remove this
         */
        if (file.parentDirectoryName === 'core') {
          output += setVars(tokenItems, key, tokenFormatDefault);
        } else {
          output += setVars(tokenItems, key);
        }
      });
    } else {
      const tokens = flatten(importedModule.default);
      output = setVars(tokens, file.fileBaseName);
    }

    writeFile(filename, output);
  });
  return 0;
};

export default exportScss;
