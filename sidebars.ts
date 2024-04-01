import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  zeroSidebar: [
    {
      type: 'link',
      label: 'Kotlin Script',
      href: 'https://kotlinlang.org/docs/basic-syntax.html',
      description: 'Read there about Kotlin syntax!'
    },
    {
      type: 'autogenerated', 
      dirName: '.'
    }
  ],
};
export default sidebars;
