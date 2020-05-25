// TODO: build this step into the rollup config
// currently the Icon<Component>.tsx files were generated manually using the svgr cli
// npx @svgr/cli --template ./svgr-template.js ./assets/icon-oasis.svg
const svgrConverter = ({ template }, opts, { componentName, jsx }) => {
  const typeScriptTpl = template.smart({ plugins: ['jsx', 'typescript'] })
  return typeScriptTpl.ast`
    // tslint:disable
    import * as React from 'react';
    const ${componentName} = (props: React.SVGProps<SVGSVGElement>) => ${jsx};
    export default ${componentName};
  `
}

export default svgrConverter
